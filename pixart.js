function makeGrid() {
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    let table = document.getElementById('pixelCanvas');
	// the table grid code:
    table.innerHTML = '';
    let tbody = document.createElement('tbody');
    for (var i = 0; i < height; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}

//jQuery changes the color of pixel to fill grid boxes when clicked.
$('body').on('click', 'td', function() {
	var color = document.getElementById('colorPicker').value;
    $(this).css('background-color', color);
});