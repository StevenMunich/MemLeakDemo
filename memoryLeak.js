// A simple memory leak demonstration
let leakedArray = [];

function leakMemory() {
    // Create a large object and push it to the global array
    let largeObject = {
        data: new Array(1000000).join('A'),
        time: new Date()
    };
    leakedArray.push(largeObject);
}

// Run the leak function 10 times per second
let intervalId = setInterval(leakMemory, 100);