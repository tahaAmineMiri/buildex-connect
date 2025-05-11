// This file creates a section that displays bank account information in a neat, organized format

import { ScrollArea } from "@/components/common/ui/scroll-area"

/**
 * BankDetailsSection Component
 *
 * Purpose: Displays the company's bank account details in a clean, tabular format
 * This component creates a bordered white box containing all banking information
 * that might be needed for payments or transfers.
 */
const BankDetailsSection = () => (
  <section className="mb-20">
    {/* Main heading for the bank details section */}
    <h2 className="text-3xl font-bold mb-8 text-construction-black">Bank Account Details</h2>
    {/* White container box with border and rounded corners */}
    <div className="bg-white border border-construction-gray/30 rounded-xl p-6 max-w-2xl">
      {/* ScrollArea allows content to scroll if it becomes too large for the container */}
      <ScrollArea className="h-full w-full rounded-md">
        <div className="p-4">
          {/* Table that organizes bank details in rows */}
          <table className="w-full">
            <tbody>
              {/* Each row represents a different piece of banking information */}
              {/* Each row has a label on the left and the actual information on the right */}
              <tr className="border-b border-construction-gray/30">
                <td className="py-3 text-construction-slate font-medium">Account Name:</td>
                <td className="py-3 text-construction-black">Incom Construction Materials Ltd.</td>
              </tr>
              <tr className="border-b border-construction-gray/30">
                <td className="py-3 text-construction-slate font-medium">Bank Name:</td>
                <td className="py-3 text-construction-black">Global Construction Bank</td>
              </tr>
              <tr className="border-b border-construction-gray/30">
                <td className="py-3 text-construction-slate font-medium">Account Number:</td>
                <td className="py-3 text-construction-black">87654321</td>
              </tr>
              <tr className="border-b border-construction-gray/30">
                <td className="py-3 text-construction-slate font-medium">Sort Code:</td>
                <td className="py-3 text-construction-black">40-30-20</td>
              </tr>
              <tr className="border-b border-construction-gray/30">
                <td className="py-3 text-construction-slate font-medium">IBAN:</td>
                <td className="py-3 text-construction-black">GB29 NWBK 6016 1331 9268 19</td>
              </tr>
              <tr>
                <td className="py-3 text-construction-slate font-medium">SWIFT/BIC Code:</td>
                <td className="py-3 text-construction-black">BUILDGB2L</td>
              </tr>
            </tbody>
          </table>
          {/* Important note about international transfers */}
          <p className="mt-6 text-sm text-construction-slate">
            For international transfers, please ensure all charges are paid by the sender to avoid deductions from the
            transferred amount.
          </p>
        </div>
      </ScrollArea>
    </div>
  </section>
)

export default BankDetailsSection
