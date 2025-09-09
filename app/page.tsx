import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shirt, Clock, Truck, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shirt className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary font-[family-name:var(--font-playfair)]">DryClean Pro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
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
      <section className="py-20 px-4 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
            Premium Laundry Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)] text-balance">
            Fresh, Clean Laundry
            <span className="text-primary block">Delivered to Your Door</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty font-[family-name:var(--font-source-sans)]">
            Professional dry cleaning and laundry services with convenient pick-up and delivery. Subscribe to our plans
            and never worry about laundry again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Schedule Pickup
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Services
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Insured & Bonded</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
              From everyday laundry to specialized dry cleaning, we handle it all with care and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wash & Fold */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shirt className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Wash & Fold</CardTitle>
                <CardDescription>Professional washing, drying, and folding of your everyday clothes.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Premium detergents</li>
                  <li>• Fabric softener included</li>
                  <li>• Neatly folded & packaged</li>
                  <li>• 24-48 hour turnaround</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    $2.50<span className="text-sm text-muted-foreground">/lb</span>
                  </span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Dry Cleaning */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Dry Cleaning</CardTitle>
                <CardDescription>Expert dry cleaning for delicate fabrics and formal wear.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Suits, dresses, coats</li>
                  <li>• Stain removal expertise</li>
                  <li>• Professional pressing</li>
                  <li>• Protective garment bags</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    $8.99<span className="text-sm text-muted-foreground">+</span>
                  </span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Express Service */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Express Service</CardTitle>
                <CardDescription>Need it fast? Get your items cleaned and returned same day.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Same day turnaround</li>
                  <li>• Priority processing</li>
                  <li>• Available 7 days a week</li>
                  <li>• Rush delivery options</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    +50%<span className="text-sm text-muted-foreground"> fee</span>
                  </span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
              Simple, convenient, and reliable. Get your laundry done in three easy steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--font-playfair)]">Schedule Pickup</h3>
              <p className="text-muted-foreground font-[family-name:var(--font-source-sans)]">
                Book online or call us to schedule a convenient pickup time. We'll come to your door.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--font-playfair)]">We Clean</h3>
              <p className="text-muted-foreground font-[family-name:var(--font-source-sans)]">
                Our experts clean your items using premium products and professional techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--font-playfair)]">Delivery</h3>
              <p className="text-muted-foreground font-[family-name:var(--font-source-sans)]">
                Fresh, clean laundry delivered back to your door, neatly folded and ready to wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
            Join thousands of satisfied customers who trust us with their laundry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule Your First Pickup
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
