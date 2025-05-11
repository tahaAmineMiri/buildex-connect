"use client"

// This file creates a section that displays the company's mission and vision alongside a relevant image

// Import animation library for smooth entrance effects
import { motion } from "framer-motion"

/**
 * MissionVisionSection Component
 *
 * Purpose: Presents the company's mission and vision statements in an engaging two-column layout
 * This component combines descriptive text about Incom's purpose and goals with a visual
 * representation of the construction industry, creating a compelling narrative about the company.
 */
const MissionVisionSection = () => (
  // motion.section enables the animation effect when this section comes into view
  <motion.section
    className="mb-20"
    // Animation settings - start hidden and become visible when scrolled into view
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }} // Triggers animation when section is 100px from entering viewport
    variants={{
      hidden: { opacity: 0, y: 20 }, // Start invisible and slightly below final position
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Fade in and move up over 0.6 seconds
    }}
  >
    {/* Two-column grid layout that stacks on mobile and displays side-by-side on medium screens and up */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left column: Text content about mission and vision */}
      <div>
        {/* Section heading */}
        <h2 className="text-3xl font-bold mb-6 text-construction-black">Our Mission & Vision</h2>

        {/* Mission statement paragraph */}
        <p className="text-construction-slate mb-4">
          At Incom, we're on a mission to revolutionize how construction materials are sourced and supplied globally. We
          believe in creating a transparent, efficient marketplace that benefits both buyers and sellers in the
          construction industry.
        </p>

        {/* Vision statement paragraph */}
        <p className="text-construction-slate mb-4">
          Our vision is to become the world's most trusted platform for construction material trading, setting new
          standards for quality, reliability, and service in the industry.
        </p>

        {/* Company establishment indicator with decorative orange line */}
        <div className="flex items-center mt-8">
          <div className="h-1 w-20 bg-construction-orange"></div>
          <p className="ml-4 text-construction-slate italic">Established 2023</p>
        </div>
      </div>

      {/* Right column: Image of construction site */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          alt="Construction site with workers"
          className="w-full h-96 object-cover" // Image fills container width and has fixed height
        />
      </div>
    </div>
  </motion.section>
)

export default MissionVisionSection
