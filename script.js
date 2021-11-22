//slice

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple' ]

console.log(colors.slice(3))

console.log(colors)

//first element is starting point, second stops up to that element

console.log(colors.slice(0,3))

console.log(colors.slice(-1))

//splice
//add to beginning, don't delete anything
colors.splice(0, 0, 'fire red')
console.log(colors)

//delete first item
colors.splice(0, 1)

console.log(colors)

colors.splice(0, 1, 'brick red')
console.log(colors)