import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AssetStatusStackedBar = () => {
  const data = {
    labels: [
      "Nhà, công trình xây dựng",
      "Vật liệu kiến trúc",
      "Xe ôtô, phương tiện vận chuyển",
      "Máy móc thiết bị",
      "Cây lâu năm, súc vật",
      "Tài sản khác"
    ],
    datasets: [
      {
        label: "Đang sử dụng",
        data: [60, 50, 80, 90, 75, 40],
        backgroundColor: "#1E3A8A", // navy blue
        barThickness: 40
      },
      {
        label: "Chưa sử dụng",
        data: [20, 10, 15, 10, 5, 20],
        backgroundColor: "#93C5FD", // light blue
        barThickness: 40
      },
      {
        label: "Hỏng, sửa chữa, bảo dưỡng",
        data: [15, 25, 30, 20, 15, 10],
        backgroundColor: "#A1A1AA", // gray
        barThickness: 40
      },
      {
        label: "Mất, huỷ, thanh lý",
        data: [5, 15, 10, 5, 5, 10],
        backgroundColor: "#E5E7EB", // light gray
        barThickness: 40
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const
      },
      title: {
        display: true,
        text: "Tình trạng tài sản theo loại"
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: "Số lượng tài sản"
        }
      }
    }
  };

  return (
    <div >
      <Bar data={data} options={options} />
    </div>
  );
};

export default AssetStatusStackedBar;
