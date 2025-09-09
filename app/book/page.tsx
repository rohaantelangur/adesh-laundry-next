"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, User, Phone, Mail, CheckCircle, ArrowLeft, ArrowRight, Truck, Shirt } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"

interface BookingData {
  // Pickup Information
  pickupAddress: string
  pickupApt: string
  pickupCity: string
  pickupZip: string
  pickupDate: string
  pickupTime: string
  pickupInstructions: string

  // Delivery Information
  sameAsPickup: boolean
  deliveryAddress: string
  deliveryApt: string
  deliveryCity: string
  deliveryZip: string
  deliveryDate: string
  deliveryTime: string
  deliveryInstructions: string

  // Customer Information
  firstName: string
  lastName: string
  email: string
  phone: string

  // Additional Options
  specialInstructions: string
}

const initialBookingData: BookingData = {
  pickupAddress: "",
  pickupApt: "",
  pickupCity: "",
  pickupZip: "",
  pickupDate: "",
  pickupTime: "",
  pickupInstructions: "",
  sameAsPickup: true,
  deliveryAddress: "",
  deliveryApt: "",
  deliveryCity: "",
  deliveryZip: "",
  deliveryDate: "",
  deliveryTime: "",
  deliveryInstructions: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  specialInstructions: "",
}

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const router = useRouter()

  const updateBookingData = (field: keyof BookingData, value: any) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleConfirmBooking = async () => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      console.log("[v0] Submitting booking:", bookingData)

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to create booking")
      }

      console.log("[v0] Booking created successfully:", result.booking)

      // Navigate to confirmation page with booking ID
      router.push(`/book/confirmation?id=${result.booking.id}`)
    } catch (error) {
      console.error("[v0] Error submitting booking:", error)
      setSubmitError(error instanceof Error ? error.message : "Failed to create booking")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shirt className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-playfair)]">DryClean Pro</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                </div>
                {step < 3 && <div className={`w-16 h-1 mx-2 ${step < currentStep ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-playfair)]">
                {currentStep === 1 && "Pickup & Delivery"}
                {currentStep === 2 && "Your Information"}
                {currentStep === 3 && "Review & Confirm"}
              </h2>
              <p className="text-sm text-muted-foreground">Step {currentStep} of 3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Pickup & Delivery */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
                  Pickup & Delivery Details
                </h1>
                <p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)]">
                  When and where should we collect and return your items?
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Pickup Information */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                      <MapPin className="h-5 w-5 text-primary" />
                      Pickup Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="pickupAddress">Street Address</Label>
                      <Input
                        id="pickupAddress"
                        value={bookingData.pickupAddress}
                        onChange={(e) => updateBookingData("pickupAddress", e.target.value)}
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pickupApt">Apt/Suite (Optional)</Label>
                      <Input
                        id="pickupApt"
                        value={bookingData.pickupApt}
                        onChange={(e) => updateBookingData("pickupApt", e.target.value)}
                        placeholder="Apt 4B"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pickupCity">City</Label>
                        <Input
                          id="pickupCity"
                          value={bookingData.pickupCity}
                          onChange={(e) => updateBookingData("pickupCity", e.target.value)}
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pickupZip">ZIP Code</Label>
                        <Input
                          id="pickupZip"
                          value={bookingData.pickupZip}
                          onChange={(e) => updateBookingData("pickupZip", e.target.value)}
                          placeholder="10001"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pickupDate">Pickup Date</Label>
                        <Input
                          id="pickupDate"
                          type="date"
                          value={bookingData.pickupDate}
                          onChange={(e) => updateBookingData("pickupDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="pickupTime">Pickup Time</Label>
                        <Select
                          value={bookingData.pickupTime}
                          onValueChange={(value) => updateBookingData("pickupTime", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="8-10">8:00 AM - 10:00 AM</SelectItem>
                            <SelectItem value="10-12">10:00 AM - 12:00 PM</SelectItem>
                            <SelectItem value="12-14">12:00 PM - 2:00 PM</SelectItem>
                            <SelectItem value="14-16">2:00 PM - 4:00 PM</SelectItem>
                            <SelectItem value="16-18">4:00 PM - 6:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="pickupInstructions">Pickup Instructions (Optional)</Label>
                      <Textarea
                        id="pickupInstructions"
                        value={bookingData.pickupInstructions}
                        onChange={(e) => updateBookingData("pickupInstructions", e.target.value)}
                        placeholder="Ring doorbell, leave with doorman, etc."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Information */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                      <Truck className="h-5 w-5 text-accent" />
                      Delivery Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sameAsPickup"
                        checked={bookingData.sameAsPickup}
                        onCheckedChange={(checked) => updateBookingData("sameAsPickup", checked)}
                      />
                      <Label htmlFor="sameAsPickup">Same as pickup address</Label>
                    </div>

                    {!bookingData.sameAsPickup && (
                      <>
                        <div>
                          <Label htmlFor="deliveryAddress">Street Address</Label>
                          <Input
                            id="deliveryAddress"
                            value={bookingData.deliveryAddress}
                            onChange={(e) => updateBookingData("deliveryAddress", e.target.value)}
                            placeholder="123 Main Street"
                          />
                        </div>
                        <div>
                          <Label htmlFor="deliveryApt">Apt/Suite (Optional)</Label>
                          <Input
                            id="deliveryApt"
                            value={bookingData.deliveryApt}
                            onChange={(e) => updateBookingData("deliveryApt", e.target.value)}
                            placeholder="Apt 4B"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="deliveryCity">City</Label>
                            <Input
                              id="deliveryCity"
                              value={bookingData.deliveryCity}
                              onChange={(e) => updateBookingData("deliveryCity", e.target.value)}
                              placeholder="New York"
                            />
                          </div>
                          <div>
                            <Label htmlFor="deliveryZip">ZIP Code</Label>
                            <Input
                              id="deliveryZip"
                              value={bookingData.deliveryZip}
                              onChange={(e) => updateBookingData("deliveryZip", e.target.value)}
                              placeholder="10001"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="deliveryDate">Delivery Date</Label>
                        <Input
                          id="deliveryDate"
                          type="date"
                          value={bookingData.deliveryDate}
                          onChange={(e) => updateBookingData("deliveryDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="deliveryTime">Delivery Time</Label>
                        <Select
                          value={bookingData.deliveryTime}
                          onValueChange={(value) => updateBookingData("deliveryTime", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="8-10">8:00 AM - 10:00 AM</SelectItem>
                            <SelectItem value="10-12">10:00 AM - 12:00 PM</SelectItem>
                            <SelectItem value="12-14">12:00 PM - 2:00 PM</SelectItem>
                            <SelectItem value="14-16">2:00 PM - 4:00 PM</SelectItem>
                            <SelectItem value="16-18">4:00 PM - 6:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="deliveryInstructions">Delivery Instructions (Optional)</Label>
                      <Textarea
                        id="deliveryInstructions"
                        value={bookingData.deliveryInstructions}
                        onChange={(e) => updateBookingData("deliveryInstructions", e.target.value)}
                        placeholder="Ring doorbell, leave with doorman, etc."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={nextStep}
                  disabled={!bookingData.pickupAddress || !bookingData.pickupDate || !bookingData.pickupTime}
                  className="bg-primary hover:bg-primary/90"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Customer Information */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
                  Your Information
                </h1>
                <p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)]">
                  We need your contact details to coordinate pickup and delivery
                </p>
              </div>

              <Card className="border-border max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                    <User className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={bookingData.firstName}
                        onChange={(e) => updateBookingData("firstName", e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={bookingData.lastName}
                        onChange={(e) => updateBookingData("lastName", e.target.value)}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => updateBookingData("email", e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => updateBookingData("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                    <Textarea
                      id="specialInstructions"
                      value={bookingData.specialInstructions}
                      onChange={(e) => updateBookingData("specialInstructions", e.target.value)}
                      placeholder="Any special care instructions, stain details, or preferences..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!bookingData.firstName || !bookingData.lastName || !bookingData.email || !bookingData.phone}
                  className="bg-primary hover:bg-primary/90"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
                  Review Your Booking
                </h1>
                <p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)]">
                  Please review your booking details before confirming
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-6">
                {/* Pickup & Delivery Summary */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="font-[family-name:var(--font-playfair)]">Pickup & Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          Pickup
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {bookingData.pickupAddress}
                          {bookingData.pickupApt && `, ${bookingData.pickupApt}`}
                          <br />
                          {bookingData.pickupCity}, {bookingData.pickupZip}
                          <br />
                          {bookingData.pickupDate} at {bookingData.pickupTime?.replace("-", ":00 - ")}:00
                        </p>
                        {bookingData.pickupInstructions && (
                          <p className="text-xs text-muted-foreground mt-2">
                            Instructions: {bookingData.pickupInstructions}
                          </p>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Truck className="h-4 w-4 text-accent" />
                          Delivery
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {bookingData.sameAsPickup ? (
                            "Same as pickup address"
                          ) : (
                            <>
                              {bookingData.deliveryAddress}
                              {bookingData.deliveryApt && `, ${bookingData.deliveryApt}`}
                              <br />
                              {bookingData.deliveryCity}, {bookingData.deliveryZip}
                            </>
                          )}
                          <br />
                          {bookingData.deliveryDate} at {bookingData.deliveryTime?.replace("-", ":00 - ")}:00
                        </p>
                        {bookingData.deliveryInstructions && (
                          <p className="text-xs text-muted-foreground mt-2">
                            Instructions: {bookingData.deliveryInstructions}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Customer Information */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="font-[family-name:var(--font-playfair)]">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        {bookingData.firstName} {bookingData.lastName}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        {bookingData.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        {bookingData.phone}
                      </p>
                      {bookingData.specialInstructions && (
                        <div className="mt-4">
                          <h5 className="font-medium mb-1">Special Instructions:</h5>
                          <p className="text-sm text-muted-foreground">{bookingData.specialInstructions}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <h3 className="text-lg font-semibold font-[family-name:var(--font-playfair)]">
                        Ready to Schedule Your Pickup?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        We'll contact you to confirm your booking and provide final pricing based on your items.
                      </p>

                      {submitError && (
                        <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3">
                          <p className="text-sm text-destructive">{submitError}</p>
                        </div>
                      )}

                      <Button
                        className="bg-primary hover:bg-primary/90"
                        size="lg"
                        onClick={handleConfirmBooking}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Creating Booking..." : "Confirm Booking"}
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        You'll receive a confirmation email with pickup details
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between max-w-3xl mx-auto">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
