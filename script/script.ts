let anyVar: string;

let onlyBoolean: boolean[];

let stringNumberArray: (string | number)[];

let testTuple: [string, string, number];

function cleanString(stringToClean) {
	return stringToClean.replace(/\s/g, "-");
}

const cleanedString = cleanString(a);

