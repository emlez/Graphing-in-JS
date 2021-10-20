const data = {
  datasets: [
    {
      label: "Example point",
      data: [
        {
          x: 0,
          y: 0,
        },
      ],
      backgroundColor: "#26c0ab",
    },
  ],
};

const config = {
  type: "scatter",
  data: data,
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

function graph() {
  // Brings the input from the user.
  let inputX = document.getElementById("inputX");
  inputX = inputX.value;
  let inputY = document.getElementById("inputY");
  inputY = inputY.value;
  let inputLabel = document.getElementById("inputLabel");
  inputLabel = inputLabel.value;

  if (myChart.data.datasets[0].data[4]) {
  } else {
    myChart.data.datasets[0].data.push({
      x: inputX,
      y: inputY,
    });
    myChart.data.datasets[0].label = inputLabel;

    myChart.data.datasets[0].data.shift();

    myChart.update();
  }
}

function pointGraph() {
  config.type = "scatter";
}
function barChart() {
  config.type = "bar";
}

// Graph data.
let myChart = new Chart(document.getElementById("myChart"), config);
