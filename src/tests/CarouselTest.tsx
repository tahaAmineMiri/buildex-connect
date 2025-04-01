import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";

const CarouselExample = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<Carousel className="w-96">
				<CarouselPrevious />
				<CarouselContent>
					<CarouselItem className="bg-blue-500 text-white flex items-center justify-center h-48 rounded">
						<p>Slide 1</p>
					</CarouselItem>
					<CarouselItem className="bg-green-500 text-white flex items-center justify-center h-48 rounded">
						<p>Slide 2</p>
					</CarouselItem>
					<CarouselItem className="bg-red-500 text-white flex items-center justify-center h-48 rounded">
						<p>Slide 3</p>
					</CarouselItem>
				</CarouselContent>
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default CarouselExample;
