// // Task 5: Finding an Object in an Array
// let orders = [
//     { id: 101,customer: "Alice", total: 300 },
//     { id: 102, customer: "Bob", total: 450 },
//     { id: 103, customer: "Charlie", total: 200 }
// ]

// function findOrders (orders, orderId) {
//     return orders.find(order => order.id === orderId)
// }

// some_order = findOrders(orders, 101)
// console.log(`${some_order.customer} has an order ID: ${some_order.id}, with a total of $${some_order.total}`)

    
// // Task 6: Using Object Methods
// let inventory = {
//     items: [],
//     addItem (name, quantity) {
//         this.items.push({ name, quantity})
//     }
// }
// inventory.addItem("Monitor", 5);
// inventory.addItem("Keyboard", 10);
// console.log(inventory.items);

let inventory = {
    items: [],
    addItem (name, quantity) {
        this.items.push({ name, quantity})
    },
    removeLatestItem() {
        this.items.pop()
    }, 
    removeFirstItem() {
        this.items.shift()
    }
}
inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
inventory.addItem("Mouse", 3)

console.log(inventory.items);
inventory.removeLatestItem()
console.log(inventory.items)
inventory.removeFirstItem()
console.log(inventory.items)

// // Task 7: Using the find method
// let employees = [
//     { position: "Developer", name: "Alice", salary: 70000},
//     { position: "Designer", name: "Bob", salary: 60000},
//     { position: "Manager", name: "Charlie", salary: 90000}
// ]

// function findEmployee (employees, name) {
//     return employees.find(employee => employee.name === name)
// }
// console.log(findEmployee(employees, "Charlie"))

// Task 8: Combining Arrays and Objects
let orders1 = [{ id: 1, customer: "Alice"},
    {id: 2, customer: "Bob"}]
let orders2 = [{id: 3, customer: "Charlie"},
    {id: 4, customer: "David"}
]
 function combineOrders (orders1, orders2) {
    return [...orders1, ...orders2]
 }
 console.log(combineOrders(orders1,orders2))