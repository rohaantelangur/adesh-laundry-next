// In-memory storage for services (in production, use a database)
const services = [
  {
    id: "1",
    name: "Wash & Fold",
    description: "Professional washing, drying, and folding service",
    basePrice: 2.5,
    unit: "per lb",
    features: ["Same-day service available", "Eco-friendly detergents", "Fabric softener included"],
    category: "standard",
  },
  {
    id: "2",
    name: "Dry Cleaning",
    description: "Professional dry cleaning for delicate and formal wear",
    basePrice: 8.99,
    unit: "per item",
    features: ["Expert stain removal", "Professional pressing", "Garment protection"],
    category: "premium",
  },
  {
    id: "3",
    name: "Express Service",
    description: "Same-day pickup and delivery service",
    basePrice: 3.99,
    unit: "per lb",
    features: ["4-hour turnaround", "Priority handling", "SMS notifications"],
    category: "express",
  },
]

export async function GET() {
  try {
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
    const serviceData = await request.json()

    const service = {
      id: Date.now().toString(),
      ...serviceData,
      createdAt: new Date().toISOString(),
    }

    services.push(service)

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
