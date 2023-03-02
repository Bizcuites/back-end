import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    name: String,
    lat: Number,
    long: Number,
    tam: String,
    aum: String,
    city: String,
    hostData: {
      host: String,
      package: Number,
    },
  },
  { timestamps: true },
  {
    collection: "Customer",
  }
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
