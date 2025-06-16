import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AssetDepartmentStackedBar = () => {
  const data = {
    labels: [
      "Phòng nhân sự",
      "Phòng hành chính",
      "Phòng kĩ thuật",
      "Phòng kế toán"
    ],
    datasets: [
      {
        label: "Đang sử dụng",
        data: [40000, 25000, 30000, 15000],
        backgroundColor: "#1E3A8A",
        barThickness: 20
      },
      {
        label: "Chưa sử dụng",
        data: [15000, 20000, 15000, 25000],
        backgroundColor: "#93C5FD",
        barThickness: 20
      },
      {
        label: "Hỏng, sửa chữa, bảo dưỡng",
        data: [20000, 15000, 10000, 10000],
        backgroundColor: "#52525B",
        barThickness: 20
      },
      {
        label: "Mất, huỷ, thanh lý",
        data: [4300, 4843, 2967, 1819],
        backgroundColor: "#D1D5DB",
        barThickness: 20
      }
    ]
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const
      },
      title: {
        display: true,
        text: "Tài sản theo phòng ban"
      },
      tooltip: {
        mode: "index",
        intersect: false
      }
    },
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          stepSize: 10000
        }
      },
      y: {
        stacked: true
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default AssetDepartmentStackedBar;
