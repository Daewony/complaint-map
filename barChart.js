const ctx = document.getElementById("myChart");
const date = ["2021.08.05", " ", "2021.08.12", " ", "2021.08.19"];

new Chart(ctx, {
  type: "bar",
  data: {
    labels: date,
    datasets: [
      {
        label: "덕양구 행신1,3~4동",
        data: [23, 42, 12, 22, 24],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
