import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Pie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 1, value: 15, label: "Total registration" },
            { id: 2, value: 20, label: "Active Registration" },
          ],
        },
      ]}
      width={600} // Increase the width
      height={300} // Increase the height
      fontSize={14}
      style={{ border: "1px solid #000" }} // Add border style
    />
  );
}
