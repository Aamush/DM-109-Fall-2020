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


	console.log(arr2d[0][1])

	let reach = arr2d;


	for (var i = 0; i < height; i++) {

		for (var j = 0; j < height; j++) {


			for (var k = 0; k < height; k++) {

				reach[i][j] = (reach[i][j] != 0) || ((reach[i][k] != 0) && (reach[k][j] != 0)) ? 1 : 0;

			}
		}

	}
	print(height, reach)

}


function print(height, reach) {





	for (var i = 0; i < height; i++) {
		reach[i][height] = "<br />"
	}

	var divOutput = document.getElementById('divOutput');
	divOutput.innerHTML = reach


	// for (var i = 0; i < height; i++) {
	// 	for (var j = 0; j < height; j++) {
	// 		if (i == j)
	// 			console.log("1")
	// 			// process.stdout.write("1")
	// 		else
	// 			console.log(reach[i][j] + " ");
	// 			// process.stdout.write(reach[i][j] + " ")
	// 	}
	// 	console.log("--------")
	// }
}