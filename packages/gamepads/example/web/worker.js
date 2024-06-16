const millisBetweenChecks = 17;
var checkForInput = true;

addEventListener("message", (event) => {
    switch (event.data) {
        case "STOP":
            stop();
            break;
        case "START":
            start();
            break;
        default:
            break;
    }
});

// When a gamepad disconnects, need to shift its values
function callback() {
    if (checkForInput) {
        postMessage("PING");
        setTimeout(callback, millisBetweenChecks);
    }
}

function start() {
    callback();
}

function stop() {
    checkForInput = false;
}