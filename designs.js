// Select color input by getting element from HTML
var colorPick = document.getElementById('colorPicker');
// Select table element from HTML
var table = document.getElementById('pixelCanvas');
// Select size input by getting elements from HTML
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var picker = document.getElementById("sizePicker");

//define makeGrid function to create grid
function makeGrid(height, width) {
	table.innerHTML = "";
	for (var h = 0; h <= height.value - 1; h++) {
		var tr = document.createElement("tr");
		for (var w = 0; w <= width.value - 1; w++) {
			var td = document.createElement("td")
			tr.appendChild(td);
		};

		table.appendChild(tr);
		//event listner to add color
		tr.addEventListener('click', function(color) {
			if (color.target.style.backgroundColor) {
				color.target.removeAttribute('style');
			} else {
				color.target.style.backgroundColor = colorPick.value;
			};

		});
	};
};
// when size is submitted by the user, call makeGrid()
picker.addEventListener('submit', function(event) {
	// prevent default submitting
    event.preventDefault();
	makeGrid(height, width);
});
