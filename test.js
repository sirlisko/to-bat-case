const { test } = require('node:test')
const assert = require('node:assert/strict')
const toBatCase = require('.')

test('should bat case the text', () => {
  assert.equal(toBatCase('NA NA NA NA NA NA NA NA NA NA NA NA NA NA'), '∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N')
  assert.equal(toBatCase('Bat_Case!'), '¡ǝsɐƆ‾ʇɐ𐐒')
})

test('should bat case the text - no reverse', () => {
  assert.equal(toBatCase('NA NA NA NA NA NA NA NA NA NA NA NA NA NA', true), 'N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀')
  assert.equal(toBatCase('Bat_Case!', true), '𐐒ɐʇ‾Ɔɐsǝ¡')
})

test('should throw on non-string input', () => {
  assert.throws(() => toBatCase(42), TypeError)
})
