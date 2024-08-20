import mongoose, { Schema } from "mongoose";

const termSchema = new Schema(
  {
    term: {
      type: String,
      required: true,
    },
    definition: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Term = mongoose.models.Term || mongoose.model("Term", termSchema);

export default Term;
