import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shirt, Star, CheckCircle, Truck, Shield, Sparkles, Award, Users } from "lucide-react"
import Link from "next/link"

export default function DryCleaningPage() {
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
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
              Premium Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)] text-balance">
              Expert Dry Cleaning Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty font-[family-name:var(--font-source-sans)]">
              Professional dry cleaning for your most precious garments. From business suits to evening gowns, we handle
              your delicate items with expert care.
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

      {/* Service Highlights */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)]">
                Why Choose Our Dry Cleaning?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Expert Technicians</h3>
                    <p className="text-muted-foreground">
                      Our certified dry cleaning professionals have years of experience handling delicate fabrics and
                      specialty garments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Advanced Stain Removal</h3>
                    <p className="text-muted-foreground">
                      We use state-of-the-art techniques and eco-friendly solvents to remove even the toughest stains
                      safely.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Garment Protection</h3>
                    <p className="text-muted-foreground">
                      Every item is carefully inspected, cleaned, and returned in protective garment bags to maintain
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-border">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">15+ Years</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Experience in professional dry cleaning</p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardHeader>
                  <Star className="h-8 w-8 text-accent mx-auto mb-2" />
                  <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">4.9/5 Stars</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Average customer rating</p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">100%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Satisfaction guarantee</p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardHeader>
                  <Truck className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">Free</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Pickup & delivery service</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Items We Clean */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Items We Specialize In
            </h2>
            <p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)]">
              From everyday business wear to special occasion garments, we handle it all with expert care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Business Attire</CardTitle>
                <CardDescription>Professional cleaning for your work wardrobe</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Suits & blazers</li>
                  <li>• Dress shirts</li>
                  <li>• Ties & accessories</li>
                  <li>• Professional dresses</li>
                </ul>
                <p className="text-lg font-bold text-primary mt-4">Starting at $8.99</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Formal Wear</CardTitle>
                <CardDescription>Special care for your special occasions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Evening gowns</li>
                  <li>• Cocktail dresses</li>
                  <li>• Tuxedos</li>
                  <li>• Formal accessories</li>
                </ul>
                <p className="text-lg font-bold text-primary mt-4">Starting at $15.99</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Outerwear</CardTitle>
                <CardDescription>Professional cleaning for coats and jackets</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Winter coats</li>
                  <li>• Leather jackets</li>
                  <li>• Wool coats</li>
                  <li>• Specialty fabrics</li>
                </ul>
                <p className="text-lg font-bold text-primary mt-4">Starting at $12.99</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Delicate Items</CardTitle>
                <CardDescription>Gentle care for sensitive fabrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Silk garments</li>
                  <li>• Cashmere</li>
                  <li>• Vintage clothing</li>
                  <li>• Designer pieces</li>
                </ul>
                <p className="text-lg font-bold text-primary mt-4">Starting at $18.99</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Household Items</CardTitle>
                <CardDescription>Professional cleaning for home textiles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Curtains & drapes</li>
                  <li>• Comforters</li>
                  <li>• Pillows</li>
                  <li>• Table linens</li>
                </ul>
                <p className="text-lg font-bold text-primary mt-4">Starting at $20.99</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Specialty Services</CardTitle>
                <CardDescription>Expert care for unique items</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Wedding dresses</li>
                  <li>• Leather goods</li>
                  <li>• Suede items</li>
                  <li>• Fur garments</li>
                </ul>
                <p className="text-lg font-bold text-primary mt-4">Contact for pricing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Our Dry Cleaning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
              We follow industry best practices to ensure your garments receive the highest quality care.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-playfair)]">Inspection</h3>
              <p className="text-sm text-muted-foreground">
                Thorough examination for stains, damage, and care requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-playfair)]">Pre-treatment</h3>
              <p className="text-sm text-muted-foreground">Specialized stain removal and spot treatment as needed.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-playfair)]">Cleaning</h3>
              <p className="text-sm text-muted-foreground">Professional dry cleaning using eco-friendly solvents.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-playfair)]">Pressing</h3>
              <p className="text-sm text-muted-foreground">
                Professional pressing and finishing for a crisp appearance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-playfair)]">Delivery</h3>
              <p className="text-sm text-muted-foreground">Returned in protective garment bags, ready to wear.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Trust Your Garments to the Experts
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
            Experience the difference professional dry cleaning makes. Schedule your pickup today and see why we're the
            trusted choice for quality garment care.
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
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
