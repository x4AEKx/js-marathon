const	firstRow = 'мама мыла раму',
		secondRow = 'собака друг человека'

function getRow(firstRow, secondRow) {

	function countStr(str) {
		let count = 0

		for (let i = 0; i < str.length; i++) {
			if (str.charAt(i) === 'а') {
				count++
			}
		}

		return count
	}

	if (countStr(firstRow) > countStr(secondRow)) {
		return firstRow
	} else {
		return secondRow
	}
}

console.log(getRow(firstRow, secondRow))