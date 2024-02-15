function processPayment(amount) {
    return function () {
        console.log('Collecting payment of ' + amount);
    }
}

function processOrder(orderId, amount) {
    return function() {
    console.log(orderId + ' is being processed');
    let inner = processPayment(amount);
    inner();
    console.log(orderId + ' has been fully processed');
    };
}

console.log("Processing orders");
processOrder(1321, 10.99)();
processOrder(1322, 12.99)();
processOrder(1323, 15.0)();
console.log("All the orders have been processed");