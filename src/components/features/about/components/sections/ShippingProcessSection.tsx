"use client"

// This file creates a section that explains Incom's three-step shipping process in a visual, easy-to-understand format

// Import animation library and a pre-defined animation effect
import { motion } from "framer-motion"
import fadeInUp from "@/lib/animations"

/**
 * ShippingProcessSection Component
 *
 * Purpose: Illustrates the company's shipping process in three clear steps
 * This component creates an animated section with three cards, each representing
 * a different stage in how products move from sellers to buyers through Incom's platform.
 */
const ShippingProcessSection = () => {
  return (
    // motion.section enables the animation effect when this section comes into view
    <motion.section
      className="mb-20"
      // Animation settings - start hidden and become visible when scrolled into view
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Triggers animation when section is 100px from entering viewport
      // Using the pre-defined fadeInUp animation imported from animations library
      variants={fadeInUp}
    >
      {/* Light gray background container with rounded corners */}
      <div className="bg-construction-gray/30 rounded-2xl p-8">
        {/* Section heading */}
        <h2 className="text-3xl font-bold mb-8 text-construction-black">Shipping Process</h2>

        {/* Three-column grid layout that stacks on mobile and displays side-by-side on medium screens and up */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* STEP 1: From Seller to Incom */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* Orange circular background with step number */}
            <div className="w-12 h-12 rounded-full bg-construction-orange/10 flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-construction-orange">1</span>
            </div>
            {/* Step title */}
            <h3 className="text-xl font-bold mb-3">From Seller to Incom</h3>
            {/* Step description */}
            <p className="text-construction-slate">
              After a purchase is made, sellers prepare the materials and coordinate with our logistics team for pickup.
              All products undergo quality inspection before being accepted into our distribution centers.
            </p>
            {/* Time estimate for this step */}
            <p className="text-sm text-construction-slate mt-4">Average processing time: 1-2 business days</p>
          </div>

          {/* STEP 2: Incom Quality Control */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* Orange circular background with step number */}
            <div className="w-12 h-12 rounded-full bg-construction-orange/10 flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-construction-orange">2</span>
            </div>
            {/* Step title */}
            <h3 className="text-xl font-bold mb-3">Incom Quality Control</h3>
            {/* Step description */}
            <p className="text-construction-slate">
              All materials are thoroughly inspected at our facilities to ensure they meet quality standards and match
              the product descriptions. Materials are then prepared for shipping to the buyer.
            </p>
            {/* Time estimate for this step */}
            <p className="text-sm text-construction-slate mt-4">Average processing time: 1 business day</p>
          </div>

          {/* STEP 3: From Incom to Buyer */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* Orange circular background with step number */}
            <div className="w-12 h-12 rounded-full bg-construction-orange/10 flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-construction-orange">3</span>
            </div>
            {/* Step title */}
            <h3 className="text-xl font-bold mb-3">From Incom to Buyer</h3>
            {/* Step description */}
            <p className="text-construction-slate">
              Materials are shipped directly to the buyer's specified location using our network of trusted
              transportation partners. Buyers receive tracking information and estimated delivery dates.
            </p>
            {/* Time estimate for this step */}
            <p className="text-sm text-construction-slate mt-4">
              Delivery times: 3-10 business days depending on location
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ShippingProcessSection
