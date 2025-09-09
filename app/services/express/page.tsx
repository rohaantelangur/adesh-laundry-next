import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shirt, Clock, CheckCircle, Zap, Truck, Calendar, Phone, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ExpressServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shirt className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-playfair)]">Adesh Laundry</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-primary font-medium">
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
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Book Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-6 bg-accent text-accent-foreground">
              Same Day Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)] text-balance">
              Express Laundry Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty font-[family-name:var(--font-source-sans)]">
              Need your laundry done fast? Our express service gets your clothes cleaned and returned the same day with
              priority processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                Schedule Express Pickup
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Call for Rush Order
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Express Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Why Choose Express Service?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
              Perfect for last-minute needs, business trips, or when you just can't wait for your favorite outfit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Same Day Return</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Drop off by 9 AM, pick up by 6 PM the same day</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Priority Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your items go to the front of the line for immediate attention
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)]">7 Days a Week</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Express service available every day, including weekends</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Rush Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Emergency delivery options available for urgent needs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)]">
                Express Service Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Same Quality Standards</h3>
                    <p className="text-muted-foreground">
                      Express service maintains the same high-quality cleaning standards as our regular service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">All Service Types</h3>
                    <p className="text-muted-foreground">
                      Available for wash & fold, dry cleaning, and specialty items with express processing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Flexible Pickup Times</h3>
                    <p className="text-muted-foreground">
                      Multiple pickup and delivery windows throughout the day to fit your schedule.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Real-Time Updates</h3>
                    <p className="text-muted-foreground">
                      SMS and email notifications to keep you informed of your order status.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-[family-name:var(--font-playfair)]">Express Pricing</CardTitle>
                <CardDescription>50% surcharge added to standard service rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="font-medium">Wash & Fold</span>
                    <span className="text-lg font-bold text-primary">$3.75/lb</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="font-medium">Dry Cleaning</span>
                    <span className="text-lg font-bold text-primary">$13.49+</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="font-medium">Specialty Items</span>
                    <span className="text-lg font-bold text-primary">+50%</span>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg mt-4">
                    <p className="text-sm text-accent font-medium">Minimum order: $37.50 for express service</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Requirements */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Express Service Schedule
            </h2>
            <p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)]">
              Plan your express service with our convenient pickup and delivery windows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                  <Clock className="h-5 w-5 text-primary" />
                  Same Day Service
                </CardTitle>
                <CardDescription>For items dropped off or picked up by 9:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Pickup Window:</span>
                    <span className="text-sm text-muted-foreground">7:00 AM - 9:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Processing Time:</span>
                    <span className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Delivery Window:</span>
                    <span className="text-sm text-muted-foreground">5:00 PM - 8:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                  <Zap className="h-5 w-5 text-accent" />
                  Rush Service
                </CardTitle>
                <CardDescription>Emergency processing for urgent needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Processing Time:</span>
                    <span className="text-sm text-muted-foreground">4-6 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Additional Fee:</span>
                    <span className="text-sm text-muted-foreground">+$25 rush charge</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Availability:</span>
                    <span className="text-sm text-muted-foreground">Call to confirm</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-accent hover:bg-accent/90">
                  <Phone className="h-4 w-4 mr-2" />
                  Call for Rush Service
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent font-[family-name:var(--font-playfair)]">
                <AlertCircle className="h-5 w-5" />
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Express service is subject to availability and item complexity</li>
                <li>• Heavily stained or delicate items may require standard processing time</li>
                <li>• Weekend express service has limited capacity - book early</li>
                <li>• Rush delivery available within 10-mile radius for additional fee</li>
                <li>• Express orders must be confirmed by phone or online booking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-accent text-accent-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Need Your Laundry Done Today?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
            Don't let laundry slow you down. Schedule express pickup now and get your clothes back the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Express Pickup
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
