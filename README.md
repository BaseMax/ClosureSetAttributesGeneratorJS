# Closure of a set of attributes generator

This is a implementation of the closure of a set of attributes generator in JavaScript.

## Usage

```javascript
let out = finds([
    {from: ["A"], to: ["B"]},
    {from: ["B"], to: ["D"]},
    {from: ["A"], to: ["K"]},
    {from: ["K"], to: ["C"]},
], ["A"]);

let out = finds([
    {from: ["T"], to: ["U"]},
    {from: ["V"], to: ["S", "W"]},
    {from: ["S"], to: ["T"]},
], ["S", "V"]);
// S, V, W, T, U

let out = finds([
    {from: ["T"], to: ["U"]},
    {from: ["V"], to: ["S", "W"]},
    {from: ["S"], to: ["T"]},
], ["V"]);
// V, S, W, T, U

let out = finds([
    {from: ["T"], to: ["U"]},
    {from: ["V"], to: ["S", "W"]},
    {from: ["S"], to: ["T"]},
], ["S"]);
// S, T, U

let out = finds([
    {from: ["U"], to: ["V", "X", "Q"]},
    {from: ["U", "V", "P"], to: ["O"]},
    {from: ["O", "Q"], to: ["Y", "Z"]},
    {from: ["U", "P"], to: ["X", "Y"]},
], ["U", "P"]);
// U, P, V, X, Q, O, Y, Z

let out = finds([
    {from: ["U"], to: ["V", "X", "Q"]},
    {from: ["U", "V", "P"], to: ["O"]},
    {from: ["O", "Q"], to: ["Y", "Z"]},
    {from: ["U", "P"], to: ["X", "Y"]},
], ["O", "Q"]);
// O, Q, Y, Z

let out = finds([
    {from: ["U"], to: ["V", "X", "Q"]},
    {from: ["U", "V", "P"], to: ["O"]},
    {from: ["O", "Q"], to: ["Y", "Z"]},
    {from: ["U", "P"], to: ["X", "Y"]},
], ["U", "P", "W"]);
//  U, P, W, V, X, Q, O, Y, Z
```

## License

GPL-3.0

© Copyright (c) 2022, Max Base
