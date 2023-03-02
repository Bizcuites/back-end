import mongoose from "mongoose";

const SpeedSchema = new mongoose.Schema(
  {
    ip: String,
    download: Number,
    upload: String,
    ping: String,
    jitter: Number,
  },
  { timestamps: true },
  ,
  {
    collection: "Speed",
  }
);

const Speed = mongoose.model("Speed", SpeedSchema);
export default Speed;
