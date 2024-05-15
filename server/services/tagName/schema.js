import mongoose from "mongoose";

const TagNameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TagName = mongoose.model("TagName", TagNameSchema);

export default TagName;
