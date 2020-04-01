// 

// let arr = [];
// curry = (fn, argsLen) => {
//     const length = fn.length
//     argsLen = argsLen || 0
//     if (argsLen < fn.length) {
//         return function (...arg) {
//             arr = arr.concat(arg)
//             return curry(fn, arr.length)
//         }
//     } else {
//         _arr = arr.slice(0)
//         arr = []
//         return fn(..._arr)
//     }
// }


add => a => b => a + b

// 第二版
function sub_curry(fn) {
    var args = [].slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    };
}

function curry(fn, length) {

    length = length || fn.length;

    var slice = Array.prototype.slice;

    return function () {
        if (arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments));
            return curry(sub_curry.apply(this, combined), length - arguments.length);
        } else {
            console.log(fn);
            return fn.apply(this, arguments);
        }
    };
}

var fn = curry(function (a, b, c) {
    console.log(a, b, c)
    return [a, b, c];
});


// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]