import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	BarChart,
	Bar,
	Tooltip,
	Legend,
	AreaChart,
	Area,
	PieChart,
	Pie,
	Cell,
	RadarChart,
	Radar,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ScatterChart,
	Scatter,
	ComposedChart,
} from "recharts";

const data = [
	{ name: "Jan", value: 400 },
	{ name: "Feb", value: 300 },
	{ name: "Mar", value: 200 },
	{ name: "Apr", value: 278 },
	{ name: "May", value: 189 },
];

const chartConfig = {
	value: {
		label: "Value",
		color: "#8884d8",
	},
	name: {
		label: "Month",
	},
};

const ExampleChart = () => {
	return (
		<div className="w-[600px] h-[400px] mx-auto">
			<ChartContainer config={chartConfig}>
				<ComposedChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<ChartTooltip content={<ChartTooltipContent />} />
					<ChartLegend content={<ChartLegendContent />} />
					<Bar dataKey="value" fill="#8884d8" />
					<Line dataKey="value" stroke="#82ca9d" />
				</ComposedChart>
			</ChartContainer>
		</div>
	);
};

export default ExampleChart;
