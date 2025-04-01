import { ScrollArea } from "@/components/ui/scroll-area";

const BankDetailsSection = () => (
	<section className="mb-20">
		<h2 className="text-3xl font-bold mb-8 text-construction-black">
			Bank Account Details
		</h2>
		<div className="bg-white border border-construction-gray/30 rounded-xl p-6 max-w-2xl">
			<ScrollArea className="h-full w-full rounded-md">
				<div className="p-4">
					<table className="w-full">
						<tbody>
							<tr className="border-b border-construction-gray/30">
								<td className="py-3 text-construction-slate font-medium">
									Account Name:
								</td>
								<td className="py-3 text-construction-black">
									Incom Construction Materials Ltd.
								</td>
							</tr>
							<tr className="border-b border-construction-gray/30">
								<td className="py-3 text-construction-slate font-medium">
									Bank Name:
								</td>
								<td className="py-3 text-construction-black">
									Global Construction Bank
								</td>
							</tr>
							<tr className="border-b border-construction-gray/30">
								<td className="py-3 text-construction-slate font-medium">
									Account Number:
								</td>
								<td className="py-3 text-construction-black">87654321</td>
							</tr>
							<tr className="border-b border-construction-gray/30">
								<td className="py-3 text-construction-slate font-medium">
									Sort Code:
								</td>
								<td className="py-3 text-construction-black">40-30-20</td>
							</tr>
							<tr className="border-b border-construction-gray/30">
								<td className="py-3 text-construction-slate font-medium">
									IBAN:
								</td>
								<td className="py-3 text-construction-black">
									GB29 NWBK 6016 1331 9268 19
								</td>
							</tr>
							<tr>
								<td className="py-3 text-construction-slate font-medium">
									SWIFT/BIC Code:
								</td>
								<td className="py-3 text-construction-black">BUILDGB2L</td>
							</tr>
						</tbody>
					</table>
					<p className="mt-6 text-sm text-construction-slate">
						For international transfers, please ensure all charges are paid by
						the sender to avoid deductions from the transferred amount.
					</p>
				</div>
			</ScrollArea>
		</div>
	</section>
);

export default BankDetailsSection;
