var taInput, divOutput;
var btnRun;

window.onload = function () {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function randomArray(length, max) {
	[...new Array(length)]
		.map(() => Math.round(Math.random() * max));
}


function runFwAlgo() {






	let array2d = [];


	for (var i = 0; i < 100; i++) {


		let randomArray = [...new Array(100)].map((item, index) => {
			return (Math.round(Math.random() * 1))
		})
		array2d.push(randomArray)
	}




	let reach = array2d;


	for (var size = 0; size < 97; size++) {

		let height = size + 4

		for (var i = 0; i < height; i++) {

			for (var j = 0; j < height; j++) {


				for (var k = 0; k < height; k++) {

					reach[i][j] = (reach[i][j] != 0) || ((reach[i][k] != 0) && (reach[k][j] != 0)) ? 1 : 0;

				}
			}

		}

		print(performance.now() + "---> " + height)
	}

}


function print(reach) {

	var divOutput = document.getElementById('divOutput');
	let p = document.createElement('p');
	p.innerHTML = reach;
	divOutput.appendChild(p)


}