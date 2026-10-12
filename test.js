import assert from "node:assert/strict";
import { test } from "node:test";
import toBatCase from "./index.js";

test("should bat case the text", () => {
	assert.equal(
		toBatCase("NA NA NA NA NA NA NA NA NA NA NA NA NA NA"),
		"∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N",
	);
	assert.equal(toBatCase("Bat_Case!"), "¡ǝsɐƆ‾ʇɐ𐐒");
});

test("should keep the order with reverse: false", () => {
	assert.equal(
		toBatCase("NA NA NA NA NA NA NA NA NA NA NA NA NA NA", {
			reverse: false,
		}),
		"N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀",
	);
	assert.equal(toBatCase("Bat_Case!", { reverse: false }), "𐐒ɐʇ‾Ɔɐsǝ¡");
});

test("should throw on non-string input", () => {
	assert.throws(() => toBatCase(42), TypeError);
});

test("should throw on non-object options", () => {
	assert.throws(() => toBatCase("bat", true), TypeError);
	assert.throws(() => toBatCase("bat", null), TypeError);
});

test("should keep characters outside the BMP intact", () => {
	assert.equal(toBatCase("🦇 bat"), "ʇɐq 🦇");
});
