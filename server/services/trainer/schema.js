import mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    biography: {
      type: String,
      required: false,
    },
    contact: {
      email: {
        type: String,
        required: false,
      },
      phone: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: true }
);

const Trainer = mongoose.model("Trainer", TrainerSchema);

export default Trainer;
