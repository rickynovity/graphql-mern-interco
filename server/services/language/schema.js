import mongoose from "mongoose";

const LanguageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Language = mongoose.model("Language", LanguageSchema);

export default Language;
