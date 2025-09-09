import connectDB from "@/lib/mongodb"
import Service from "@/models/Service"

export async function GET() {
  try {
    await connectDB()

    const services = await Service.find({ isActive: true }).sort({ createdAt: -1 })

    return Response.json({
      success: true,
      services,
    })
  } catch (error) {
    console.error("[v0] Error fetching services:", error)
    return Response.json(
      {
        success: false,
        error: "Failed to fetch services",
      },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    await connectDB()

    const serviceData = await request.json()

    const service = new Service(serviceData)
    await service.save()

    console.log("[v0] New service created:", service)

    return Response.json({
      success: true,
      service,
      message: "Service created successfully",
    })
  } catch (error) {
    console.error("[v0] Error creating service:", error)
    return Response.json(
      {
        success: false,
        error: "Failed to create service",
      },
      { status: 500 },
    )
  }
}
