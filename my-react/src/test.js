// function abc(words) {
//     let arr = [...'abcdefghijklmnopqrstuvwxyz'];
//     words = [...words];
//     let newWords;
//     let stack = [];
//     let res = words.map((item, i) => {
//         let isUpper = /[A-Z]/.test(item);
//         if (isUpper) {
//             stack.push(i);
//         }
//         item = item.toLowerCase();
//         let index = arr.findIndex((value) => {
//             return item === value;
//         }, item);
//         console.log(index)
//         if (index != -1) {

//             if (index >= 13) {
//                 newWords = arr[index - 13];
//             } else {
//                 newWords = arr[index + 13]
//             }
//         } else {
//             newWords = item;
//         }

//         return newWords;
//     })
//     stack.forEach((i) => {
//         res[i] = res[i].toUpperCase();
//     });
//     return res.join('');
// }
// console.log(abc('abM hhh!'))


// function sum(numbers, target) {
//     let res;
//     let arr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length - i; j++) {
//             res = numbers[i] + numbers[j];
//             if (res == target) {
//                 arr = [i, j];
//                 break;
//             } 
//         }
//     }
//     return arr;
// }

// console.log(sum([2,4,11,25,6,7,4,39,8],10))

function name(params) {
    let maxlen = 0;
    for (let i = 0; i < params.length; i++) {
        for (let j = params.length; j > 0; j--) {
            let str = params.substring(i, j).split('').reverse().join('');
            if (params.substring(i, j) == str && str.length > 1) {
                if (str.length > maxlen) {
                    maxlen = str.length
                }
            }
        }
    }
    console.log(maxlen)
}

name('bbaabaab')