import { Bar } from "@ant-design/plots";
import Dummy from "./dummy";
import { useSelector } from "react-redux";

const DemoBar = () => {
	// const data = useSelector((state) => state.dashboard.list?.customerSaleProfit);
  const list = Dummy()
	const config = {
		list: list ? list : [],
		isGroup: true,
		xField: "value",
		yField: "label",
		seriesField: "type",
		marginRatio: 0,
		label: {
			position: "middle",
			layout: [
				{
					type: "interval-adjust-position",
				},
				{
					type: "interval-hide-overlap",
				},
				{
					type: "adjust-color",
				},
			],
		},
	};
	return <Bar {...config} />;
};

export default DemoBar;
