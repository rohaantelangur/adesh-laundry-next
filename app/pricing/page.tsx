"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shirt, CheckCircle, Star, Clock, Users, Crown, Zap, Shield, Truck, Calendar, X } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const subscriptionPlans = [
    {
      name: "Basic",
      description: "Perfect for individuals with light laundry needs",
      monthlyPrice: 29,
      annualPrice: 290,
      icon: Shirt,
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        "Up to 20 lbs per month",
        "Wash & fold service",
        "Free pickup & delivery",
        "48-hour turnaround",
        "Basic stain treatment",
        "Email notifications",
        "Cancel anytime",
      ],
      notIncluded: ["Dry cleaning", "Express service", "Priority support"],
    },
    {
      name: "Premium",
      description: "Great for busy professionals and small families",
      monthlyPrice: 59,
      annualPrice: 590,
      icon: Star,
      color: "text-accent",
      bgColor: "bg-accent/10",
      popular: true,
      features: [
        "Up to 50 lbs per month",
        "Wash & fold + dry cleaning",
        "Free pickup & delivery",
        "24-hour turnaround",
        "Advanced stain removal",
        "SMS & email notifications",
        "Priority customer support",
        "Garment protection guarantee",
        "Flexible scheduling",
      ],
      notIncluded: ["Express same-day service"],
    },
    {
      name: "Family",
      description: "Ideal for large families with heavy laundry loads",
      monthlyPrice: 99,
      annualPrice: 990,
      icon: Users,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      features: [
        "Up to 100 lbs per month",
        "All services included",
        "Free pickup & delivery",
        "24-hour turnaround",
        "Premium stain removal",
        "Real-time tracking",
        "Dedicated account manager",
        "Garment protection guarantee",
        "Flexible scheduling",
        "Express service (2 times/month)",
        "Household items cleaning",
      ],
      notIncluded: [],
    },
    {
      name: "Business",
      description: "Custom solutions for businesses and commercial clients",
      monthlyPrice: 199,
      annualPrice: 1990,
      icon: Crown,
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        "Unlimited laundry volume",
        "All services included",
        "Daily pickup & delivery",
        "Same-day turnaround",
        "White-glove service",
        "Dedicated account team",
        "Custom reporting",
        "Bulk pricing discounts",
        "Priority processing",
        "24/7 customer support",
        "Contract terms available",
      ],
      notIncluded: [],
      isEnterprise: true,
    },
  ]

  const individualPricing = [
    {
      service: "Wash & Fold",
      price: "$2.50",
      unit: "per lb",
      description: "Professional washing, drying, and folding",
      turnaround: "24-48 hours",
      minimum: "$25 minimum order",
    },
    {
      service: "Dry Cleaning",
      price: "$8.99",
      unit: "and up",
      description: "Expert dry cleaning for delicate and formal wear",
      turnaround: "24-48 hours",
      minimum: "Per item pricing",
    },
    {
      service: "Express Service",
      price: "+50%",
      unit: "surcharge",
      description: "Same-day service with priority processing",
      turnaround: "Same day",
      minimum: "$37.50 minimum",
    },
    {
      service: "Specialty Items",
      price: "Custom",
      unit: "pricing",
      description: "Wedding dresses, leather, suede, and household items",
      turnaround: "2-5 days",
      minimum: "Quote required",
    },
  ]

  const getPrice = (plan: any) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : Math.round(plan.annualPrice / 12)
  }

  const getAnnualSavings = (plan: any) => {
    return plan.monthlyPrice * 12 - plan.annualPrice
  }

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
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="text-primary font-medium">
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
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)] text-balance">
            Simple Pricing for Every Need
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty font-[family-name:var(--font-source-sans)]">
            Choose from flexible pay-per-use pricing or save with our convenient subscription plans. No hidden fees, no
            surprises.
          </p>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="subscriptions" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="subscriptions">Subscription Plans</TabsTrigger>
              <TabsTrigger value="individual">Pay Per Use</TabsTrigger>
            </TabsList>

            {/* Subscription Plans */}
            <TabsContent value="subscriptions" className="space-y-12">
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={billingCycle === "monthly" ? "font-medium" : "text-muted-foreground"}>Monthly</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
                  className="relative"
                >
                  <div
                    className={`w-12 h-6 bg-muted rounded-full relative transition-colors ${
                      billingCycle === "annual" ? "bg-primary" : ""
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-background rounded-full absolute top-0.5 transition-transform ${
                        billingCycle === "annual" ? "translate-x-6" : "translate-x-0.5"
                      }`}
                    />
                  </div>
                </Button>
                <span className={billingCycle === "annual" ? "font-medium" : "text-muted-foreground"}>
                  Annual
                  <Badge variant="secondary" className="ml-2 bg-accent/10 text-accent">
                    Save up to 20%
                  </Badge>
                </span>
              </div>

              {/* Subscription Plans Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {subscriptionPlans.map((plan) => {
                  const IconComponent = plan.icon
                  return (
                    <Card
                      key={plan.name}
                      className={`relative border-border hover:shadow-lg transition-all ${
                        plan.popular ? "ring-2 ring-primary scale-105" : ""
                      }`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                          Most Popular
                        </Badge>
                      )}
                      <CardHeader className="text-center">
                        <div
                          className={`w-16 h-16 ${plan.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <IconComponent className={`h-8 w-8 ${plan.color}`} />
                        </div>
                        <CardTitle className="font-[family-name:var(--font-playfair)] text-2xl">{plan.name}</CardTitle>
                        <CardDescription className="text-base">{plan.description}</CardDescription>
                        <div className="py-4">
                          <div className="text-4xl font-bold text-primary">
                            ${getPrice(plan)}
                            <span className="text-lg text-muted-foreground font-normal">/month</span>
                          </div>
                          {billingCycle === "annual" && (
                            <p className="text-sm text-accent mt-1">Save ${getAnnualSavings(plan)} annually</p>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {plan.notIncluded.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full ${
                            plan.popular
                              ? "bg-primary hover:bg-primary/90"
                              : plan.isEnterprise
                                ? "bg-accent hover:bg-accent/90"
                                : ""
                          }`}
                          variant={plan.popular || plan.isEnterprise ? "default" : "outline"}
                        >
                          {plan.isEnterprise ? "Contact Sales" : "Get Started"}
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Subscription Benefits */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-primary font-[family-name:var(--font-playfair)]">
                    Why Choose a Subscription?
                  </CardTitle>
                  <CardDescription>Save money and enjoy premium benefits with our subscription plans</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Save Up to 40%</h3>
                      <p className="text-sm text-muted-foreground">
                        Significant savings compared to pay-per-use pricing
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Priority Scheduling</h3>
                      <p className="text-sm text-muted-foreground">Get preferred pickup and delivery time slots</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Premium Support</h3>
                      <p className="text-sm text-muted-foreground">Dedicated customer support and account management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Individual Pricing */}
            <TabsContent value="individual" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
                  Pay-Per-Use Pricing
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
                  Flexible pricing for occasional use. Pay only for what you need, when you need it.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {individualPricing.map((item, index) => (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-[family-name:var(--font-playfair)]">{item.service}</CardTitle>
                        <Badge variant="outline">{item.turnaround}</Badge>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-primary">{item.price}</span>
                        <span className="text-lg text-muted-foreground">{item.unit}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{item.minimum}</p>
                      <Button variant="outline" className="w-full bg-transparent">
                        Book This Service
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Services */}
              <Card className="border-border max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-playfair)]">Additional Services</CardTitle>
                  <CardDescription>Extra services available for all pricing options</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Alterations</span>
                        <span className="font-semibold">$15 and up</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Leather Cleaning</span>
                        <span className="font-semibold">$25 and up</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Wedding Dress Cleaning</span>
                        <span className="font-semibold">$150 and up</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Comforter Cleaning</span>
                        <span className="font-semibold">$20 and up</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Curtain Cleaning</span>
                        <span className="font-semibold">$15 and up</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Rush Delivery (4 hours)</span>
                        <span className="font-semibold">+$25</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pay Per Use Benefits */}
              <Card className="border-accent/20 bg-accent/5 max-w-4xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-accent font-[family-name:var(--font-playfair)]">
                    Pay-Per-Use Benefits
                  </CardTitle>
                  <CardDescription>Perfect for occasional laundry needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">No Commitment</h3>
                      <p className="text-sm text-muted-foreground">Use our services whenever you need them</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Truck className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">Free Pickup & Delivery</h3>
                      <p className="text-sm text-muted-foreground">Always included, no additional charges</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">Same Quality</h3>
                      <p className="text-sm text-muted-foreground">Same premium service and quality standards</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)]">
              Common questions about our pricing and subscription plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">
                  Can I change my subscription plan?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing
                  cycle.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">
                  What happens if I exceed my monthly limit?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Additional pounds are charged at our standard pay-per-use rates. We'll notify you before processing
                  overage items.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">
                  Is there a minimum commitment?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No minimum commitment required. You can cancel your subscription at any time with 30 days notice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">
                  Do you offer corporate discounts?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes! We offer custom pricing for businesses and bulk orders. Contact our sales team for a quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto font-[family-name:var(--font-source-sans)]">
            Choose the plan that works best for you, or start with a single order to try our service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Subscription
              </Button>
            </Link>
            <Link href="/book">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Book Single Order
              </Button>
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Questions? Call us at{" "}
            <a href="tel:555-123-4567" className="underline">
              (555) 123-4567
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
