// const square = (x) => x * x
// console.log(square(41)) 

const event = {
    name: 'Birthday Party',
    guestList: ['Vishnu', 'Rudra', 'Brahma'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach(guest => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()