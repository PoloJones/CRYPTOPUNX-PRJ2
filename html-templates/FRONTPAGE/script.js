var canvasElement = document.getElementById("coinChart");
var config = {
  type: "bar",
  data: {
    labels: ["BitCoin", "Ethereum", "DogeCoin"],
    datasets: [
      {
        label: "Price(USD)",
        data: [5, 10, 15, 100],
        backgroundColor: [
          "rgba(255, 0, 247, 1)", //Pink
          "rgba(0, 255, 13, 1)", //green
          "rgba(0, 19, 255, 1)", //Blue
        ],
        borderColor: [],
        dataColor: ["rgba(255, 255, 255, 1)"],
      },
    ],
  },
};

var coinChart = new Chart(canvasElement, config);
