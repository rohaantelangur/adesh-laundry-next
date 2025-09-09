import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calendar, MapPin, Phone, Mail, Download, Share } from "lucide-react"
import Link from "next/link"

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Success Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Booking Confirmed!</h1>
          <p className="text-xl opacity-90 font-[family-name:var(--font-source-sans)]">
            Your laundry pickup has been scheduled successfully
          </p>
          <Badge variant="secondary" className="mt-4 text-lg px-4 py-2">
            Order #DCP-2024-001
          </Badge>
        </div>
      </div>

      {/* Confirmation Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Next Steps */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-playfair)]">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Confirmation Email</h4>
                        <p className="text-sm text-muted-foreground">
                          You'll receive a detailed confirmation email within 5 minutes with all your booking details.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Pickup Reminder</h4>
                        <p className="text-sm text-muted-foreground">
                          We'll send you a reminder 2 hours before your scheduled pickup time.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Professional Pickup</h4>
                        <p className="text-sm text-muted-foreground">
                          Our driver will arrive during your selected time window to collect your items.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold">Clean & Fresh Delivery</h4>
                        <p className="text-sm text-muted-foreground">
                          Your freshly cleaned items will be delivered back to you as scheduled.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pickup Details */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                    <Calendar className="h-5 w-5 text-primary" />
                    Pickup Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        Address
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        123 Main Street, Apt 4B
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Date & Time
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Tomorrow, March 15, 2024
                        <br />
                        10:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Special Instructions</h4>
                    <p className="text-sm text-muted-foreground">
                      Ring doorbell twice. Leave with doorman if no answer.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Services Summary */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-playfair)]">Services Ordered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Wash & Fold</span>
                      <Badge variant="secondary">$2.50/lb</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Express Service</span>
                      <Badge className="bg-accent">Same Day</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Estimated Weight</span>
                      <span className="text-muted-foreground">15 lbs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact & Actions */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-playfair)]">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Call us anytime</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">support@drycleanpro.com</p>
                      <p className="text-sm text-muted-foreground">Email support</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-playfair)]">Order Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Download Receipt
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Share className="mr-2 h-4 w-4" />
                    Share Details
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Modify Booking
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary font-[family-name:var(--font-playfair)]">
                    Estimated Total
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">$56.25</p>
                  <p className="text-sm text-muted-foreground mt-1">Final price based on actual weight</p>
                  <p className="text-xs text-muted-foreground mt-2">Payment will be collected upon delivery</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/">
              <Button variant="outline" size="lg">
                Return to Home
              </Button>
            </Link>
            <Link href="/book">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Another Order
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
