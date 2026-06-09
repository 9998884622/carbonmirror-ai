import mongoose, { Schema, Document } from "mongoose";

export interface ICarbonRecord extends Document {
  userId: string;
  transportKm: number;
  electricityUnits: number;
  waterUsage: number;
  wasteKg: number;
  foodType: string;
  totalEmission: number;
  sustainabilityScore: number;
}

const CarbonRecordSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    transportKm: Number,
    electricityUnits: Number,
    waterUsage: Number,
    wasteKg: Number,
    foodType: String,
    totalEmission: Number,
    sustainabilityScore: Number
  },
  {
    timestamps: true
  }
);

export default mongoose.model<ICarbonRecord>(
  "CarbonRecord",
  CarbonRecordSchema
);
