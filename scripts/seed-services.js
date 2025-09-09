// Script to seed initial service data into MongoDB
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI

const ServiceSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    category: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
)

const Service = mongoose.models.Service || mongoose.model("Service", ServiceSchema)

const initialServices = [
  {
    name: "Wash & Fold",
    description: "Professional washing, drying, and folding service",
    price: 2.5,
    category: "wash-fold",
  },
  {
    name: "Dry Cleaning",
    description: "Professional dry cleaning for delicate and formal wear",
    price: 8.99,
    category: "dry-cleaning",
  },
  {
    name: "Express Service",
    description: "Same-day pickup and delivery service",
    price: 3.99,
    category: "express",
  },
]

async function seedServices() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log("Connected to MongoDB")

    // Clear existing services
    await Service.deleteMany({})
    console.log("Cleared existing services")

    // Insert initial services
    const services = await Service.insertMany(initialServices)
    console.log("Seeded services:", services.length)

    await mongoose.disconnect()
    console.log("Disconnected from MongoDB")
  } catch (error) {
    console.error("Error seeding services:", error)
    process.exit(1)
  }
}

seedServices()
