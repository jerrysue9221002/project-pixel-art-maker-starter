var colorPick = document.getElementById('colorPicker');
var table = document.getElementById('pixelCanvas');
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var picker = document.getElementById("sizePicker");

function makeGrid(height, width) {
	table.innerHTML = "" ;
	for (var h = 0; h <= height.value - 1; h++) {
		var tr = document.createElement("tr");
		for (var w = 0; w <= width.value - 1; w++) {
			var td = document.createElement("td")
			tr.appendChild(td);
		};

		table.appendChild(tr);

		tr.addEventListener('click', function(color) {
			if (color.target.style.backgroundColor) {
				color.target.removeAttribute('style');
			} else {
				color.target.style.backgroundColor = colorPick.value;
			};

		});
	};
};

picker.addEventListener('submit', function(event) {
	event.preventDefault();
	makeGrid(height, width);
});
