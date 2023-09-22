let menu = new Object({
    name: "Chicken Momo",
    price: 120,
})

console.log(menu.name)
console.log(menu.price)

// anouther way of defining
let book = {
    name: "The Atomic Habits",
    author: "Devid J Malan",
    desc: "This book is for those who wish to change thier habits.",
}

console.log(book.name)
console.log(book.author)
console.log(book.desc)


// modifying 
book.name = "Rich Dad Poor Dad"
console.log(book)

//adding new property
book.authorAge = 29
console.log(book)
console.log(book.authorAge)

// deleting property
delete book.author
console.log(book)

// object object
keys = Object.keys(book)
console.log(keys)

values = Object.values(book)
console.log(values)

let newObj = {
    exp:"New",
    name: "Mohit",
}

// Object.assign(newObj,book)
Object.assign(book,newObj, menu)
console.log(book)

