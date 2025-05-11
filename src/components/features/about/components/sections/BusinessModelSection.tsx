"use client"

// This file creates a section that explains Incom's business model through four illustrated cards

// Import animation library and icon components
import { motion } from "framer-motion"
// Import icons that represent each step of the business model
import { Building, Truck, CreditCard, Users } from "lucide-react"
// Import card components used to display each business model step
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/common/ui/card"

/**
 * BusinessModelSection Component
 *
 * Purpose: Displays a visual explanation of how Incom's platform works
 * This component creates an animated section with four cards, each representing
 * a step in Incom's business process from supplier listing to delivery.
 */
const BusinessModelSection = () => (
  // motion.section enables the animation effect when this section comes into view
  <motion.section
    className="mb-20"
    // Animation settings - start hidden and become visible when scrolled into view
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: { opacity: 0, y: 20 }, // Start invisible and slightly below final position
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Fade in and move up
    }}
  >
    {/* Main heading for the business model section */}
    <h2 className="text-3xl font-bold mb-8 text-construction-black text-center">How Incom Works</h2>
    {/* Grid layout that displays as a single column on mobile and up to 4 columns on large screens */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* CARD 1: Suppliers List Products */}
      <Card>
        <CardHeader className="pb-4">
          {/* Blue circular background with building icon */}
          <div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
            <Building className="h-6 w-6 text-construction-blue" />
          </div>
          <CardTitle>Suppliers List Products</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-construction-slate">
            Verified suppliers list their construction materials on our platform, providing detailed specifications,
            pricing, and availability.
          </CardDescription>
        </CardContent>
      </Card>

      {/* CARD 2: Buyers Find Materials */}
      <Card>
        <CardHeader className="pb-4">
          {/* Blue circular background with users icon */}
          <div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-construction-blue" />
          </div>
          <CardTitle>Buyers Find Materials</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-construction-slate">
            Construction companies browse our extensive catalog, compare prices, and select the materials they need for
            their projects.
          </CardDescription>
        </CardContent>
      </Card>

      {/* CARD 3: Secure Transactions */}
      <Card>
        <CardHeader className="pb-4">
          {/* Blue circular background with credit card icon */}
          <div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
            <CreditCard className="h-6 w-6 text-construction-blue" />
          </div>
          <CardTitle>Secure Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-construction-slate">
            Incom facilitates secure payments between buyers and sellers, providing protection and peace of mind for all
            parties.
          </CardDescription>
        </CardContent>
      </Card>

      {/* CARD 4: Reliable Shipping */}
      <Card>
        <CardHeader className="pb-4">
          {/* Blue circular background with truck icon */}
          <div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
            <Truck className="h-6 w-6 text-construction-blue" />
          </div>
          <CardTitle>Reliable Shipping</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-construction-slate">
            We coordinate efficient shipping from suppliers to buyers, ensuring materials arrive on time and in perfect
            condition.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  </motion.section>
)

export default BusinessModelSection
