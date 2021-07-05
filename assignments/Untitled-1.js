/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Wndow object using this will reference the entire code base or global object
 * 2. Implicit use of this is used to reference a method on a object.
 * 3. With new we can reference a constructor function from our new object we initiate
 * 4. Explicit the workings of this can change and work directly on an object that you place in a .call or similar method
 *
 * write out a code example of each explanation above
 */

// Principle 1

console.log(this)

// code example for Window Binding

// Principle 2

const obj = {
    name: 'rod',
    sayName: function() {
        return `My Name is ${this.name}`
    }
}
console.log(obj.sayName())


// code example for Implicit Binding

// Principle 3



function Gladiator(attributes) {
    this.name = attributes.name
    this.attack = attributes.attack
    this.defense = attributes.defense
}

var rod = new Gladiator({
    name: 'rod',
    attack: 10,
    defense: 20
})
console.log(rod)
    // code example for New Binding


//this example still works in the console

function foo() {
    console.log(this.name)
}

var aaa = {
    name: 'rod'
}

console.log(foo.call(aaa))






function food() {
    return this.a
}

var objs = {
    a: 'rod'

}

console.log(food.call(objs))




// Principle 4

// code example for Explicit Binding