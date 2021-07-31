// Object Property Shorthand

const name = 'Andrew'
const userAge = 23

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

// console.log(user)

// Object destructuring

const product = {
    label: 'Ravishing Notebook',
    price: 3,
    stock: 312,
    salePrice: undefined
}

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)

// const {label:productLabel, price, stock, rating = 5} = product
// console.log(productLabel, price, stock, rating)


