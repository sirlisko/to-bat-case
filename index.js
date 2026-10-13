import dictionary from "./dictionary.js";

export default function toBatCase(str, options = {}) {
	if (typeof str !== "string") {
		throw new TypeError("Expected a string");
	}
	// Fail loudly for 1.x callers passing a boolean, which would otherwise be ignored
	if (typeof options !== "object" || options === null) {
		throw new TypeError("Expected options to be an object");
	}

	const { reverse = true } = options;
	const upSideDown = Array.from(
		str,
		(ch) => dictionary[ch] || dictionary[ch.toLowerCase()] || ch,
	);

	return (reverse ? upSideDown.reverse() : upSideDown).join("");
}
