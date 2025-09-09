import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shirt, Star, Clock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
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
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)] text-balance">
            Professional Laundry & Dry Cleaning Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty font-[family-name:var(--font-source-sans)]">
            From everyday wash and fold to specialized dry cleaning, we provide comprehensive care for all your
            garments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wash & Fold */}
            <Card className="border-border hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shirt className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)] text-2xl">Wash & Fold</CardTitle>
                <CardDescription className="text-base">
                  Professional washing, drying, and folding of your everyday clothes with premium care.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Premium detergents & fabric softeners
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Temperature-controlled washing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Neatly folded & packaged
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    24-48 hour turnaround
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">
                    $2.50<span className="text-lg text-muted-foreground">/lb</span>
                  </span>
                  <Badge variant="secondary">Most Popular</Badge>
                </div>
                <Link href="/services/wash-and-fold">
                  <Button className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Dry Cleaning */}
            <Card className="border-border hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)] text-2xl">Dry Cleaning</CardTitle>
                <CardDescription className="text-base">
                  Expert dry cleaning for delicate fabrics, formal wear, and specialty garments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Suits, dresses, coats & formal wear
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Advanced stain removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Professional pressing & finishing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Protective garment bags
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">
                    $8.99<span className="text-lg text-muted-foreground">+</span>
                  </span>
                  <Badge variant="outline">Premium</Badge>
                </div>
                <Link href="/services/dry-cleaning">
                  <Button variant="outline" className="w-full group bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Express Service */}
            <Card className="border-border hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)] text-2xl">Express Service</CardTitle>
                <CardDescription className="text-base">
                  Need it fast? Get your items cleaned and returned the same day with priority processing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Same day turnaround
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Priority processing queue
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Available 7 days a week
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Rush delivery options
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">
                    +50%<span className="text-lg text-muted-foreground"> fee</span>
                  </span>
                  <Badge className="bg-accent">Fast</Badge>
                </div>
                <Link href="/services/express">
                  <Button variant="outline" className="w-full group bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
              We offer specialized services to meet all your garment care needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Alterations</CardTitle>
                <CardDescription>Professional tailoring and alterations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">$15+</p>
                <Button variant="outline" size="sm">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Leather Care</CardTitle>
                <CardDescription>Specialized leather cleaning & conditioning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">$25+</p>
                <Button variant="outline" size="sm">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Wedding Dress</CardTitle>
                <CardDescription>Specialized wedding gown cleaning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">$150+</p>
                <Button variant="outline" size="sm">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Household Items</CardTitle>
                <CardDescription>Comforters, curtains, and more</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">$20+</p>
                <Button variant="outline" size="sm">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
            Schedule your first pickup today and discover why thousands of customers trust us with their laundry.
          </p>
          <Link href="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Pickup Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
