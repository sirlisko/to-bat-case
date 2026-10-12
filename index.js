const dictionary = require("./dictionary");

module.exports = (str, noRevert) => {
	if (typeof str !== "string") {
		throw new TypeError("Expected a string");
	}

	const upSideDown = str
		.split("")
		.map((ch) => dictionary[ch] || dictionary[ch.toLowerCase()] || ch);

	return (noRevert ? upSideDown : upSideDown.reverse()).join("");
};
