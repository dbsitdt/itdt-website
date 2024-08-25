import App from "~/models/appModel.js";

export default defineEventHandler(async (event) => {
  const { uuid } = getQuery(event);
  if (uuid) {
    const app = await App.findOne({
      uuid: uuid,
    }).exec();

    if (app) {
      if (app.completed) {
        return { appStatus: "Completed" };
      } else {
        return { appStatus: "Incomplete" };
      }
    } else {
      return { appStatus: "Unknown uuid" };
    }
  } else {
    return { appStatus: "Unknown uuid" };
  }
});
