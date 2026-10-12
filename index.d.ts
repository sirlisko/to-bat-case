export interface Options {
	/** Reverse the character order, as if the text were rotated. Defaults to `true`. */
	reverse?: boolean;
}

/**
 * Convert a string to bat case: flipped upside down and, by default, reversed.
 *
 * @param input The string to convert.
 */
export default function toBatCase(input: string, options?: Options): string;
