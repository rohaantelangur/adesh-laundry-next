import mongoose from "mongoose"

const BookingSchema = new mongoose.Schema(
  {
    // Customer Information
    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    phone: {
      type: String,
      // required: true,
    },

    // Pickup Information
    pickupAddress: {
      type: String,
      // required: true,
    },
    pickupDate: {
      type: String,
      // required: true,
    },
    pickupTime: {
      type: String,
      // required: true,
    },

    // Delivery Information
    deliveryAddress: {
      type: String,
      // required: true,
    },
    deliveryDate: {
      type: String,
      // required: true,
    },
    deliveryTime: {
      type: String,
      // required: true,
    },

    // Special Instructions
    specialInstructions: {
      type: String,
      default: "",
    },

    // Booking Status
    status: {
      type: String,
      enum: ["pending", "confirmed", "picked-up", "in-progress", "ready", "delivered", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema)
