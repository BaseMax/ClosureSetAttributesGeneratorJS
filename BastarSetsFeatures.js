/**
 * 
 * @Name: Bastar Sets Features Generator JS
 * @Author: Max Base
 * @Date: 2022/12/05
 * @Repository: https://github.com/BaseMax/BastarSetsFeaturesGenerator
 * 
 */

//// Functions
const combine = (a, min) => {
    const fn = (n, src, got, all) => {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (let j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    const all = [];
    for (let i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
};

const getCombinations = (arr) => {
    const res = [];
    for (let i = 1; i <= arr.length; i++) {
        const combinations = combine(arr, i);
        res.push(...combinations);
    }
    return res;
};

const finds = (F, Z) => {
    // const nodes = new Set();
    // for (const set of F) {
    //     for (const from of set.from) {
    //         nodes.add(from);
    //     }
    //     for (const to of set.to) {
    //         nodes.add(to);
    //     }
    // }
    // console.log(nodes);

    const Zp = new Set();
    for (const z of Z) {
        Zp.add(z);
    }

    let something_changed = false;
    do {
        something_changed = false;
        for (const set of F) {
            const from_combinations = getCombinations(set.from);
            for (const from_combination of from_combinations) {
                for (const Zp_item of Zp) {
                    // check if from_combination is a sub set of Zp_item
                    if (from_combination.every(v => Zp_item.includes(v))) {
                        for (const to of set.to) {
                            if (Zp.has(to)) continue;
                            Zp.add(to);
                            something_changed = true;
                        }
                    }
                }
            }
        }
    } while (something_changed === true);
    return Zp;
};

//// Test Caswes

// let out = finds([
//     {from: ["A"], to: ["B"]},
//     {from: ["B"], to: ["D"]},
//     {from: ["A"], to: ["K"]},
//     {from: ["K"], to: ["C"]},
// ], ["A"]);

// let out = finds([
//     {from: ["T"], to: ["U"]},
//     {from: ["V"], to: ["S", "W"]},
//     {from: ["S"], to: ["T"]},
// ], ["S", "V"]);
// S, V, W, T, U

// let out = finds([
//     {from: ["T"], to: ["U"]},
//     {from: ["V"], to: ["S", "W"]},
//     {from: ["S"], to: ["T"]},
// ], ["V"]);
// V, S, W, T, U

// let out = finds([
//     {from: ["T"], to: ["U"]},
//     {from: ["V"], to: ["S", "W"]},
//     {from: ["S"], to: ["T"]},
// ], ["S"]);
// S, T, U

// let out = finds([
//     {from: ["U"], to: ["V", "X", "Q"]},
//     {from: ["U", "V", "P"], to: ["O"]},
//     {from: ["O", "Q"], to: ["Y", "Z"]},
//     {from: ["U", "P"], to: ["X", "Y"]},
// ], ["U", "P"]);
// U, P, V, X, Q, O, Y, Z

// let out = finds([
//     {from: ["U"], to: ["V", "X", "Q"]},
//     {from: ["U", "V", "P"], to: ["O"]},
//     {from: ["O", "Q"], to: ["Y", "Z"]},
//     {from: ["U", "P"], to: ["X", "Y"]},
// ], ["O", "Q"]);
// O, Q, Y, Z

let out = finds([
    {from: ["U"], to: ["V", "X", "Q"]},
    {from: ["U", "V", "P"], to: ["O"]},
    {from: ["O", "Q"], to: ["Y", "Z"]},
    {from: ["U", "P"], to: ["X", "Y"]},
], ["U", "P", "W"]);
//  U, P, W, V, X, Q, O, Y, Z

console.log(out);
