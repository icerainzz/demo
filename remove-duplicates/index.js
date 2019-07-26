

//数组都是值类型;

let arr = [1, 2, 3, 'd', 'h', '45', 'ee', 45, 3, 2, 1];

//1. es6 的set和array.from或解构
const arr1 = ((arr) => {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return
    }
    return [...new Set(arr)];
})(arr)

const arr2 = ((arr) => {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return
    }
    return Array.from(new Set(arr))
})(arr)

//2. 入门方案--双重for循环 (兼容性较好,时间复杂度为 O(n^2)，性能较差)

const uniqueDoubleCirculation_0 = (arr) => {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return;
    };
    const unique = [];
    let isRepeat = null;
    for (let i = 0; i < arr.length; i++) {
        isRepeat = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                isRepeat = true;
                break;
            }
        }
        if (!isRepeat) {
            unique.push(arr[i])
        }
    }
    return unique;
}

//3. 入门方案--双重for循环 (兼容性较好,时间复杂度为 O(n^2)，性能较差)

// const uniqueDoubleCirculation_1 = (arr) => {
//     if (!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     };
//     const unique = [];
//     let isRepeat = null;
//     for (let i = 0; i < arr.length; i++) {
//         isRepeat = false;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === unique[j]) {
//                 isRepeat = true;
//                 break;
//             }
//         }
//         if (!isRepeat) {
//             unique.push(arr[i])
//         }
//     }
//     return unique;
// }

//4. 利用索引 indexOf;
const uniqueWithIndex = (arr) => {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return;
    };
    const unique = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
    return unique;
}

//5. 利用sort;
const uniqueWithSort = (arr) => {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return;
    };
    const unique = [];
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

//6.利用incluudes;

const uniqueWithIncluudes = (arr) => {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return;
    };
    const unique = [];
    arr.forEach((item)=>{
        if(unique.includes(item)){
            unique.push(item)
        }
    })
    return unique;
}













