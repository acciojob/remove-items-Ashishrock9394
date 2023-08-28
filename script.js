//your JS code here. If required.

function remove() {
	var colorSelect = document.getElementById('colorSelect');
	colorSelect.options[colorSelect.selectedIndex].remove();
}