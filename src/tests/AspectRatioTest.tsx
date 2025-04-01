import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideoPlayer = () => {
	return (
		<div className="p-4">
			<h1 className="text-xl font-bold mb-4">Responsive Video Player</h1>
			<AspectRatio ratio={16 / 9}>
				<iframe
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className="w-full h-full"
				/>
			</AspectRatio>
		</div>
	);
};

export default VideoPlayer;
