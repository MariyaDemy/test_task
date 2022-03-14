// task 1

const createSecretHolder = function (secret) {
    return {
        getSecret: function () {
            return secret;
        },

        setSecret: function (newSecret) {
            return secret = newSecret;
        }
    }
}

console.log(obj = createSecretHolder(5))
console.log(obj.getSecret())
console.log(obj.setSecret('any word'))
console.log(obj.getSecret())

// task 2

let initialArr = [7, 6, 15, 8, 12, 10];

const bitsSort = function (arr) {
    return arr.sort((a, b) => a.toString(2).replace(/0/g, "").length - b.toString(2)
        .replace(/0/g, "").length || a - b);
}

console.log(bitsSort(initialArr));

// task 3

// Вам дан объект содержащий языки и оценки по этим языкам.
// Необходимо вернуть массив языков где оценки => 60, отсортированный в убывающем порядке по оценкам.
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {

    return Object.keys(results).filter(res => results[res] >= 60).sort((a, b) => results[b] - results[a])

}

// task 4

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//     console.log(i);
//     }, 1000);
//     }

// output: 5 5 5 5 5


for (var i = 0; i < 5; i++) {
    function foo(number) {
        setTimeout(() => {
            console.log(number);
        }, 1000)
    }
    foo(i);
}

//output: 0 1 2 3 4