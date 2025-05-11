"use client"

// This file creates a section that displays the company's contact information in three organized cards

// Import animation library and card components
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/common/ui/card"
// Import a pre-defined animation effect
import fadeInUp from "@/lib/animations"

/**
 * ContactInformationSection Component
 *
 * Purpose: Displays the company's contact information in an organized, visually appealing format
 * This component creates an animated section with three cards showing:
 * 1. Physical address (Main Office)
 * 2. Communication methods (Contact Details)
 * 3. Operating hours (Business Hours)
 */
const ContactInformationSection = () => {
  return (
    // motion.section enables the animation effect when this section comes into view
    <motion.section
      // Animation settings - start hidden and become visible when scrolled into view
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      // Using the pre-defined fadeInUp animation imported from animations library
      variants={fadeInUp}
      className="mb-10"
    >
      {/* Main heading for the contact information section */}
      <h2 className="text-3xl font-bold mb-8 text-construction-black">Contact Information</h2>

      {/* Grid layout that displays as a single column on mobile and 3 columns on medium screens and up */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* CARD 1: Main Office - Physical address information */}
        <Card>
          <CardHeader>
            <CardTitle>Main Office</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Each paragraph represents a line of the address */}
            <p className="text-construction-slate mb-2">123 Construction Avenue</p>
            <p className="text-construction-slate mb-2">Building Heights, 9th Floor</p>
            <p className="text-construction-slate mb-2">New York, NY 10001</p>
            <p className="text-construction-slate mb-2">United States</p>
          </CardContent>
        </Card>

        {/* CARD 2: Contact Details - Ways to communicate with the company */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Different communication methods with the company */}
            <p className="text-construction-slate mb-2">Email: info@incom-marketplace.com</p>
            <p className="text-construction-slate mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-construction-slate mb-2">Fax: +1 (555) 123-4568</p>
          </CardContent>
        </Card>

        {/* CARD 3: Business Hours - When the company is available */}
        <Card>
          <CardHeader>
            <CardTitle>Business Hours</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Operating hours for different days of the week */}
            <p className="text-construction-slate mb-2">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            <p className="text-construction-slate mb-2">Saturday: 10:00 AM - 2:00 PM EST</p>
            <p className="text-construction-slate mb-2">Sunday: Closed</p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}

export default ContactInformationSection
