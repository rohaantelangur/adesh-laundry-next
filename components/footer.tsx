import { Badge } from "@/components/ui/badge"
import { Shirt, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Shirt className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary font-[family-name:var(--font-playfair)]">
                DryClean Pro
              </span>
            </div>
            <p className="text-muted-foreground mb-6 font-[family-name:var(--font-source-sans)] max-w-md">
              Premium laundry and dry cleaning services with convenient pickup and delivery. Trusted by thousands of
              customers across New York City.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@drycleanpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Main Street, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/wash-and-fold" className="hover:text-primary transition-colors">
                  Wash & Fold
                </Link>
              </li>
              <li>
                <Link href="/services/dry-cleaning" className="hover:text-primary transition-colors">
                  Dry Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/express" className="hover:text-primary transition-colors">
                  Express Service
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Specialty Items
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Alterations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-primary transition-colors">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-primary transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <p>&copy; 2024 DryClean Pro. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <Badge variant="outline" className="text-xs">
                Eco-Friendly
              </Badge>
              <Badge variant="outline" className="text-xs">
                Insured & Bonded
              </Badge>
              <Badge variant="outline" className="text-xs">
                Same Day Service
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
