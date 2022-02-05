// task 1

const createSecretHolder = function (secret) {
    return {
        getSecret: function() {
            return secret;
        },

        setSecret: function(newSecret) {
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
    return arr.sort((a,b) => a.toString(2).replace(/0/g,"").length - b.toString(2)
    .replace(/0/g,"").length || a - b);
}

console.log(bitsSort(initialArr));

// task 4

for (var i = 0; i < 5; i++) {
    setTimeout(function(i) {
      console.log(i);
    }, 1000, i);
  }


  








