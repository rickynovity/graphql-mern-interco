import mongoose from "mongoose";

const StatusSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Status = mongoose.model("Status", StatusSchema);

export default Status;
