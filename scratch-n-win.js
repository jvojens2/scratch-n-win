window.onload = function() {

	function testForMatch(testNumber, targetNumber) {
		// TODO - Implement me
	}

	// This function was taken from MDN's Math.random() examples
	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	}

	var winningNumber = getRandomIntInclusive(1, 10);
	var winningNumberDisplay = document.getElementById("winning-number-display");
	winningNumberDisplay.textContent = winningNumber;

	var table = document.getElementById("game-board");

	var numberOfRows,
		numberOfColumns;

	for (numberOfRows = 0; numberOfRows < 4; numberOfRows++) {

		var row = document.createElement("tr");

		for (numberOfColumns = 0; numberOfColumns < 6; numberOfColumns++) {

			var cell = document.createElement("td");
			var cellContent = document.createTextNode("?"); 
			cell.appendChild(cellContent);
			cell.classList.add("game-square");
			cell.dataset.gameSquareValue = getRandomIntInclusive(1, 10);
			cell.addEventListener("click", function(event){
				var thisCell = event.target;
				if ( ! thisCell.classList.contains("revealed") ) {
					thisCell.classList.add("revealed");
					thisCell.textContent = thisCell.dataset.gameSquareValue;
					// TODO - call function to check for match
					// testForMatch();
					// TODO - call function to update game square styling to reflect match or not
					// updateGameSquareStyling();
					// TODO - call function to update match counter display
					// updateMatchCounterDisplay();
				}
			});
			row.appendChild(cell);
		}

		table.appendChild(row);

	}

}