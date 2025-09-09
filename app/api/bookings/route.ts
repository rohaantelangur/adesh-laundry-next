// In-memory storage for bookings (in production, use a database)
const bookings: any[] = []

export async function POST(request: Request) {
  try {
    const bookingData = await request.json()

    // Add booking ID and timestamp
    const booking = {
      id: Date.now().toString(),
      ...bookingData,
      createdAt: new Date().toISOString(),
      status: "pending",
    }

    bookings.push(booking)

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
    return Response.json({
      success: true,
      bookings: bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
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
