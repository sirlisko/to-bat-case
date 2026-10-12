# to-bat-case

[![npm][npm-image]][npm-url] [![license][license-image]][license-url]

> Convert a string to ǝsɐƆ ʇɐ𐐒. 🦇

`Bat_Case!` → `¡ǝsɐƆ‾ʇɐ𐐒`

- **Tiny.** One function, no dependencies.
- **Typed.** TypeScript declarations included.

## Install

```bash
npm install to-bat-case
```

## Usage

```js
import toBatCase from "to-bat-case";

toBatCase("NA NA NA NA NA NA NA NA NA NA NA NA NA NA");
//=> '∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N'

toBatCase("Bat_Case!");
//=> '¡ǝsɐƆ‾ʇɐ𐐒'

toBatCase("Bat_Case!", { reverse: false });
//=> '𐐒ɐʇ‾Ɔɐsǝ¡'
```

The package is ESM-only. From CommonJS on Node 22+, use `require("to-bat-case").default`.

## API

```ts
toBatCase(input: string, options?: { reverse?: boolean }): string
```

| Parameter         | Default  | Description                                                |
| ----------------- | -------- | ---------------------------------------------------------- |
| `input`           | required | The string to convert; anything else throws a `TypeError`  |
| `options.reverse` | `true`   | Reverse the character order, as if the text were rotated   |

Characters with no upside-down counterpart are kept as they are.

### Upgrading from 1.x

- The package is ESM-only and needs Node 22+.
- `toBatCase(input, true)` is now `toBatCase(input, { reverse: false })`. Passing a boolean throws a `TypeError`.

## Inspired by

The series of [case helpers](https://github.com/ianstormtaylor/to-case) and [this tweet](https://twitter.com/lyzidiamond/status/874423709867491328).

## License

[MIT][license-url] © Luca Lischetti

[npm-image]: https://img.shields.io/npm/v/to-bat-case.svg
[npm-url]: https://npmjs.com/package/to-bat-case
[license-image]: https://img.shields.io/npm/l/to-bat-case.svg
[license-url]: https://github.com/sirlisko/to-bat-case/blob/main/LICENSE
