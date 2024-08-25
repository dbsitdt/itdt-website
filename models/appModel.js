import mongoose from "mongoose";
const appSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    classNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      default: null,
    },
    motivation: {
      type: String,
      default: null,
    },
    experience: {
      type: String,
      default: null,
    },
    commitments: {
      type: String,
      default: null,
    },
    availabilities: {
      type: String,
      default: null,
    },
    streams: {
      type: [String],
      default: [],
    },
    answers: {
      type: [String],
      default: [],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const App = mongoose.model("App", appSchema);
export default App;
