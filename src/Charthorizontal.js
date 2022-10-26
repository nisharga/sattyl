import React from "react";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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
const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Employee Age Bar Chart",
    },
  },
};

const Charthorizontal = () => {
  const [data, setData] = useState({
    // labels: [
    //   "Sunday",
    //   "Monday",
    //   "Tuesday",
    //   "Wednesday",
    //   "Thursday",
    //   "Friday",
    //   "Saturday",
    // ],
    // datasets er data 2 missing
    datasets: [
      {
        label: "Dataset 1",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(25, 90, 13, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });
  const labelSet = [];
  const dataSet1 = [];
  const dataSet2 = [];

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://obscure-falls-66122.herokuapp.com/employee";

      await fetch(url)
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          for (const val of res) {
            dataSet1.push(val.id);
            dataSet2.push(val.age);
            labelSet.push(val.fname);
          }
          setData({
            labels: labelSet,
            datasets: [
              {
                label: "Dataset ID",
                data: dataSet1,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(99, 132, 0.5)",
              },
              {
                label: "Dataset ID2",
                data: dataSet2,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 235, 0.5)",
              },
            ],
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3> Employee Age Chart</h3>
      <div style={{ width: "80%", height: "50%" }}>
        {console.log("dataaaaaaaa", data)}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Charthorizontal;
