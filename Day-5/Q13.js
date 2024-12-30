//a sequence of four asynchronous tasks (task1, task2, task3, task4)

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 1000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 1000);
}

// Execute tasks sequentially using nested callbacks
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks completed");
            });
        });
    });
});