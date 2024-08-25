import { v4 } from "uuid";
import App from "~/models/appModel.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body?.uuid) {
    // if valid (exists + does not have full account)
    const oldApp = await App.findOne({
      uuid: body.uuid,
    }).exec();
    if (oldApp && !oldApp.completed) {
      // uuid is correct and it is uncompleted
      // console.log("Found uncompleted account with uuid");
      const updatedApp = await App.findOneAndUpdate(
        { uuid: body.uuid },
        {
          about: body.about,
          motivation: body.motivation,
          experience: body.experience,
          commitments: body.commitments,
          availabilities: body.availabilities,
          streams: body.streams,
          answers: body.answers,
          completed: true,
        }
      );
      return sendRedirect(event, "/join?uuid=" + body.uuid);
    } else {
      // uuid is wrong or old app is completed
      if (oldApp?.completed) {
        // console.log("Tried to submit completed account");
        // completed
        throw new Error(
          `The application with uuid ${body.uuid} has already been completed. Contact dbs20072265@g.dbs.edu.hk if this is unexpected.`
        );
        return {
          status: "fail",
          statusCode: 409,
          message: `The application with uuid ${body.uuid} has already been completed. Contact dbs20072265@g.dbs.edu.hk if this is unexpected.`,
        };
      } else {
        throw new Error(
          `The UUID used to submit the application is invalid. Contact dbs20072265@g.dbs.edu.hk if this is unexpected.`
        );
        return {
          status: "error",
          statusCode: 400,
          message: `The UUID used to submit the application is invalid. Contact dbs20072265@g.dbs.edu.hk if this is unexpected.`,
        };
      }
    }
  } else {
    try {
      if (
        !body.fullName ||
        !body.grade ||
        !body.letter ||
        !body.classNumber ||
        !body.email ||
        !body.phone
      ) {
        const err = new Error("Invalid data submitted");
        err.code = 401;
        throw err;
      }

      // Check if trying to log back in
      const tryApp = await App.findOne({
        email: body.email,
        completed: false,
      }).exec();
      if (tryApp) {
        return sendRedirect(event, "/join?uuid=" + tryApp.uuid);
      }

      const uuid = v4();

      const newApp = await App.create({
        fullName: body.fullName,
        class: body.grade + body.letter,
        classNumber: +body.classNumber,
        email: body.email,
        phoneNumber: body.phone,
        uuid: uuid,
      });
      return sendRedirect(event, "/join?uuid=" + uuid);
    } catch (error) {
      console.error("Something went wrong. Please try again later.");

      if (error.code === 11000) {
        return {
          status: "error",
          statusCode: error.code,
          message:
            "That email address has already been used to apply. Contact dbs20072265@g.dbs.edu.hk if this is unexpected. ",
        };
      } else if (error.code === 401) {
        return {
          status: "fail",
          statusCode: error.code,
          message:
            "The submitted data was invalid. Please check the submitted details and contact dbs20072265@g.dbs.edu.hk if this is unexpected.",
        };
      } else {
        return {
          status: "error",
          statusCode: error.code,
          message:
            "Something went wrong. Please try again later or try at https://dbsitdt.netlify.app/join. Contact dbs20072265@g.dbs.edu.hk if the issue persists.",
        };
      }
    }
  }
});
