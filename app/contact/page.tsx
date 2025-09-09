"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Shirt,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Users,
  HelpCircle,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  inquiryType: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our customer service team",
      contact: "(555) 123-4567",
      action: "Call Now",
      available: "Available 7 days a week",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "support@drycleanpro.com",
      action: "Send Email",
      available: "Response within 2 hours",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our team",
      contact: "Chat available on website",
      action: "Start Chat",
      available: "Mon-Fri 9 AM - 6 PM",
    },
  ]

  const locations = [
    {
      name: "Downtown Location",
      address: "123 Main Street, Suite 100",
      city: "New York, NY 10001",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 7 AM - 8 PM",
    },
    {
      name: "Uptown Branch",
      address: "456 Broadway Avenue",
      city: "New York, NY 10025",
      phone: "(555) 123-4568",
      hours: "Mon-Sat: 8 AM - 7 PM",
    },
  ]

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
              <Link href="/contact" className="text-primary font-medium">
                Contact
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Link href="/book">
                <Button size="sm" className="bg-accent hover:bg-accent/90">
                  Book Now
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)] text-balance">
            We're Here to Help
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty font-[family-name:var(--font-source-sans)]">
            Have questions about our services? Need help with your order? Our friendly customer service team is ready to
            assist you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)]">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-playfair)]">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground mb-2">{method.contact}</p>
                    <p className="text-sm text-muted-foreground mb-4">{method.available}</p>
                    <Button variant="outline" className="bg-transparent">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                    <Send className="h-5 w-5 text-primary" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 2 hours during business hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll respond to your inquiry within 2 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => updateFormData("name", e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData("phone", e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <Label htmlFor="inquiryType">Inquiry Type</Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) => updateFormData("inquiryType", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Question</SelectItem>
                              <SelectItem value="booking">Booking Help</SelectItem>
                              <SelectItem value="pricing">Pricing Information</SelectItem>
                              <SelectItem value="complaint">Service Issue</SelectItem>
                              <SelectItem value="partnership">Business Partnership</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => updateFormData("subject", e.target.value)}
                          placeholder="Brief description of your inquiry"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => updateFormData("message", e.target.value)}
                          placeholder="Please provide details about your inquiry..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Business Information */}
            <div className="space-y-6">
              {/* Business Hours */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                    <p className="text-sm text-accent font-medium">
                      Emergency pickup available 24/7 with additional charges
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Locations */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-playfair)]">
                    <MapPin className="h-5 w-5 text-primary" />
                    Our Locations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {locations.map((location, index) => (
                      <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-foreground">{location.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {location.address}
                          <br />
                          {location.city}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <Phone className="h-3 w-3 inline mr-1" />
                          {location.phone}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {location.hours}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary font-[family-name:var(--font-playfair)]">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/book">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Pickup
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Pricing
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    Track My Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
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
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-[family-name:var(--font-playfair)]">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  How do I schedule a pickup?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You can schedule a pickup online through our booking system, call us at (555) 123-4567, or use our
                  mobile app. We offer flexible time slots to fit your schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-[family-name:var(--font-playfair)]">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  What areas do you serve?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide pickup and delivery services throughout Manhattan and Brooklyn. Check our service area map
                  or contact us to confirm availability in your location.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-[family-name:var(--font-playfair)]">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  How do you handle payment?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We accept all major credit cards, debit cards, and digital payments. Payment is processed securely
                  upon delivery. Subscription customers are billed monthly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-[family-name:var(--font-playfair)]">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  What if I'm not satisfied?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We offer a 100% satisfaction guarantee. If you're not happy with our service, we'll re-clean your
                  items for free or provide a full refund within 7 days.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <Button variant="outline" className="bg-transparent">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
