import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";

const AccordionExample = () => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="category-1">
				<AccordionTrigger>Main Category</AccordionTrigger>
				<AccordionContent>
					<Accordion type="single" collapsible>
						<AccordionItem value="sub-item-1">
							<AccordionTrigger>Sub-Item 1</AccordionTrigger>
							<AccordionContent>Details of Sub-Item 1</AccordionContent>
						</AccordionItem>
					</Accordion>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default AccordionExample;
