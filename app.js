function waiting() {console.log("ready!");}

function home() {
	var house = document.getElementById("main_box");
	house.innerHTML = "<h1>M-A-P</h1>";
	try {
		var toErase = document.getElementById("actualize");
		toErase.remove();
	} catch (error) {
		console.log(error);
	}
	let text = document.createElement("h2");
	text.id = "hh";
	text.textContent = "chosen plant: ";
	text.textContent += plantIndex;
	try {
		var ye = document.getElementById("hh");
		house.replaceChild(text, ye);
	} catch (error) {
		house.appendChild(text);
	}
}

function humidity() {
	humidityy = Math.floor(Math.random() * 101) ;
	
	var house = document.getElementById("main_box");
	house.innerHTML = "<h3>humidity:</h3>";
	house.innerHTML += '<canvas id="myChart"></canvas>';

	var xValues = ["humidity", ""];
	var vide = 100 - humidityy;
	var yValues = [humidityy, vide];
	var barColors = ["#0E361D", "transparent"];

	new Chart("myChart", {
		type: "doughnut",
		data: {
			labels: xValues,
			datasets: [
				{
					backgroundColor: barColors,
					borderColor: "#5AA65F",
					data: yValues,
				},
			],
		},
		options: {
			title: {
				display: false,
			},
			rotation: 215,
		},
		legend: {
			display: false,
	  },
	});
};

function temperature() {
	var d = new Date();
  var n = d.getMonth() + 1;
  console.log(n)
  if (n < 4 || n > 9) {
    var season = "hiver"
  } else {
    var season = "été"
  }
  console.log(season)

	actual_temperature = [
	  Math.floor(Math.random() * 41),
	  Math.floor(Math.random() * 41),
	  Math.floor(Math.random() * 41),
	  Math.floor(Math.random() * 41)
	];

	cool_temperature = [
	  plantList[plantIndex]["temperature"][season],
	  plantList[plantIndex]["temperature"][season],
	  plantList[plantIndex]["temperature"][season],
	  plantList[plantIndex]["temperature"][season]
	];
	var house = document.getElementById("main_box");
	house.innerHTML = "<h3>Temperature:</h3>";
	house.innerHTML += '<canvas id="myChart"></canvas>';


	var xValues = [-30, -20, -10, 0];
	new Chart("myChart", {
		type: "line",
		data: {
			labels: xValues,
			datasets: [
				{
					data: actual_temperature,
					borderColor: "red",
					fill: true,
				},
				{
					data: cool_temperature,
					borderColor: "black",
					fill: false,
				},
			],
		},
		options: {
			legend: { display: false}
		},
	});
};	
plantChoice = Math.floor(Math.random() * 10);
plantIndex = plantNameList[plantChoice]


setTimeout(waiting, 1000);
home();