import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shirt, CheckCircle, Clock, Truck, Shield, Droplets, Thermometer, Package } from "lucide-react"
import Link from "next/link"

export default function WashAndFoldPage() {
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
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              Most Popular Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)] text-balance">
              Professional Wash & Fold Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty font-[family-name:var(--font-source-sans)]">
              Let us handle your everyday laundry with our premium wash and fold service. Fresh, clean clothes delivered
              to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Schedule Pickup
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)]">
                What's Included
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Premium Detergents</h3>
                    <p className="text-muted-foreground">
                      We use high-quality, eco-friendly detergents that are gentle on fabrics and tough on stains.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Fabric Softener</h3>
                    <p className="text-muted-foreground">
                      Your clothes come back soft, fresh, and static-free with our premium fabric softeners.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Professional Folding</h3>
                    <p className="text-muted-foreground">
                      Each item is carefully folded and organized, ready to go straight into your closet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Protective Packaging</h3>
                    <p className="text-muted-foreground">
                      Your clean laundry is packaged in protective bags to keep it fresh during delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-border">
                <CardHeader>
                  <Thermometer className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">Temperature Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Proper water temperature for each fabric type</p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardHeader>
                  <Droplets className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">Stain Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Pre-treatment of stains and spots</p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardHeader>
                  <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">Careful Sorting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Sorted by color, fabric, and care instructions</p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">Quality Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">100% satisfaction guarantee on all services</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)]">
              Pay only for what you use. No hidden fees, no surprises.
            </p>
          </div>

          <Card className="border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-primary font-[family-name:var(--font-playfair)]">
                $70 per KG
              </CardTitle>
              <CardDescription className="text-lg">Minimum order: 5 KGs ($350)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">What's Included:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Washing with premium detergent
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Drying and fabric softening
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Professional folding
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Protective packaging
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Free pickup and delivery
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">Turnaround Time:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Standard Service</p>
                        <p className="text-sm text-muted-foreground">24-48 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Express Service</p>
                        <p className="text-sm text-muted-foreground">Same day (+50% fee)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Schedule Your First Pickup
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Our Wash & Fold Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
              We follow a meticulous process to ensure your clothes receive the best care possible.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-playfair)]">Pickup & Sorting</h3>
              <p className="text-sm text-muted-foreground">
                We collect your laundry and sort by color, fabric type, and care instructions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-playfair)]">Washing</h3>
              <p className="text-sm text-muted-foreground">
                Professional washing with premium detergents and proper temperature control.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-playfair)]">Drying & Folding</h3>
              <p className="text-sm text-muted-foreground">
                Careful drying and professional folding to keep your clothes looking their best.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-playfair)]">Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Clean, folded laundry delivered back to your door in protective packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Ready to Try Our Wash & Fold Service?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
            Experience the convenience of professional laundry service. Schedule your first pickup today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Pickup Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
