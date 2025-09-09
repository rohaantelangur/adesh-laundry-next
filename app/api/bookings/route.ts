import connectDB from "@/lib/mongodb"
import Booking from "@/models/Booking"

export async function POST(request: Request) {
  try {
    await connectDB()

    const bookingData = await request.json()

    const booking = new Booking({
      ...bookingData,
      status: "pending",
    })

    await booking.save()

    console.log("[v0] New booking created:", booking)

    return Response.json({
      success: true,
      booking,
      message: "Booking created successfully",
    })
  } catch (error) {
    console.error("[v0] Error creating booking:", error)
    return Response.json(
      {
        success: false,
        error: "Failed to create booking",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    await connectDB()

    const bookings = await Booking.find({}).sort({ createdAt: -1 })

    return Response.json({
      success: true,
      bookings,
    })
  } catch (error) {
    console.error("[v0] Error fetching bookings:", error)
    return Response.json(
      {
        success: false,
        error: "Failed to fetch bookings",
      },
      { status: 500 },
    )
  }
}
