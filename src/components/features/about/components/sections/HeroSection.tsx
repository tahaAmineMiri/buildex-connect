"use client"

// This file creates the main headline section (hero) for the About page

// Import animation library for smooth entrance effects
import { motion } from "framer-motion"

/**
 * HeroSection Component
 *
 * Purpose: Creates an attention-grabbing headline section at the top of the About page
 * This component displays the main heading "About Incom" and a brief description
 * of what the company does, with a smooth animation when the page loads.
 */
const HeroSection = () => (
  // motion.div enables the animation effect when the page loads
  <motion.div
    // Center-align the text with bottom margin spacing
    className="mb-16 text-center"
    // Animation settings - start hidden and become visible automatically
    initial="hidden" // Initial state before animation
    animate="visible" // Final state after animation
    variants={{
      hidden: { opacity: 0, y: 20 }, // Start invisible and slightly below final position
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Fade in and move up over 0.6 seconds
    }}
  >
    {/* Main heading with responsive text size (larger on medium screens and up) */}
    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-construction-black">About Incom</h1>

    {/* Subheading with description of the company, centered with maximum width */}
    <p className="text-xl text-construction-slate max-w-3xl mx-auto">
      The leading B2B marketplace connecting construction material suppliers with contractors worldwide.
    </p>
  </motion.div>
)

export default HeroSection
