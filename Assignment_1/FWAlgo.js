var taInput, divOutput;
var btnRun;

window.onload = function () {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo() {

	console.log("Running Floyd Warshall")
	var input = document.getElementById('txtInput').value

	var arr2 = input.replace(/\n/g, 'break')

	var mainArr = arr2.split('break');
	var rows = mainArr.length;
	var arr2d = []
	var height = 0;

	// console.log(mainArr)


	for (var i = 0; i < mainArr.length; i++) {

		var arr = mainArr[i].split(',')

		if (i === 0) {
			height = arr.length
			var temparr2 = arr.map((item) => {
				return (item === 'Infinity') ? Infinity : parseInt(item)
			})
			arr2d.push(temparr2)
		}
		else {
			if (height === arr.length) {

				var temparr2 = arr.map((item) => {
					return (item === 'Infinity') ? Infinity : parseInt(item)
				})
				arr2d.push(temparr2)
			}
			else {
				alert('Column Size not same')
				break;

			}
		}
	}

	var floydWarshall = (function () {

		/**
		  * Matrix used for the algorithm.
		  */
		var dist;

		/**
		  * Initialize the distance matrix.
		  *
		  * @private
		  * @param {Array} graph Distance matrix of the array.
		  * @return {Array} Distance matrix used for the algorithm.
		  */
		function init(graph) {
			var dist = [];
			var size = graph.length;
			for (var i = 0; i < size; i += 1) {
				dist[i] = [];
				for (var j = 0; j < size; j += 1) {
					if (i === j) {
						dist[i][j] = 0;
					} else if (!isFinite(graph[i][j])) {
						dist[i][j] = Infinity;
					} else {
						dist[i][j] = graph[i][j];
					}
				}
			}
			return dist;
		}

		return function (graph) {
			dist = init(graph);
			var size = graph.length;
			for (var k = 0; k < size; k += 1) {
				for (var i = 0; i < size; i += 1) {
					for (var j = 0; j < size; j += 1) {
						if (dist[i][j] > dist[i][k] + dist[k][j]) {
							dist[i][j] = dist[i][k] + dist[k][j];
						}
					}
				}
			}
			return dist;
		};
	}());



	// var distMatrix =
	// 	[
	// 		[Infinity, 7, 9, Infinity, Infinity, 16],
	// 		[7, Infinity, 10, 15, Infinity, Infinity],
	// 		[9, 10, Infinity, 11, Infinity, 2],
	// 		[Infinity, 15, 11, Infinity, 6, Infinity],
	// 		[Infinity, Infinity, Infinity, 6, Infinity, 9],
	// 		[16, Infinity, 2, Infinity, 9, Infinity]
	// 	];

	// // console.log(distMatrix);

	var shortestDists = floydWarshall(arr2d);

	console.log(shortestDists)

	var divOutput = document.getElementById('divOutput');
	divOutput.innerHTML = shortestDists



}

function Floyd(roads) {
	var M = {};
	for (var i in roads) {
		M[i] = {};
		for (var j in roads) {
			M[i][j] = distance(i, j);
		}
	}
	for (var p in roads) {
		for (var q in roads) {
			for (var r in roads) {
				M[q][r] = Math.min(M[q][r], M[q][p] + M[p][r]);
			}
		}
	}
	return M;
}

var roads = {};
function makeRoad(from, to, length) {
	function addRoad(from, to) {
		if (!(from in roads))
			roads[from] = {};
		roads[from][to] = length;
	}
	addRoad(from, to);
	addRoad(to, from);
}

function makeRoads(start) {
	for (var i = 1; i < arguments.length; i += 2)
		makeRoad(start, arguments[i], arguments[i + 1]);
}

// Direct distance.
function distance(from, to) {
	if (from === to) {
		return 0;
	}
	if (roads[from][to] !== undefined) {
		return roads[from][to];
	}
	return Number.POSITIVE_INFINITY;
}

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper