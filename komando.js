function playSound() {
    new Audio("./jiho-kurakazu.mp3").play();
}

var kakushiCommand = [75, 85, 82, 65, 75, 65, 90, 85];
var inputCommand = [];
var kakushiVisible = false;
document.onkeydown = function(e) {
    if (!kakushiVisible) {
        inputCommand.push(e.keyCode);
        var inputCommandLen = inputCommand.length;
        var inputCode = inputCommand[inputCommandLen - 1];
        var commandCode = kakushiCommand[inputCommandLen - 1];
        if (inputCode === commandCode) {
            if (inputCommandLen === kakushiCommand.length) {
                const button = document.createElement("button");
                button.setAttribute("id","kakushi");
                button.setAttribute('onclick', 'playSound()');
                button.innerHTML = "！！！くらかずタイム！！！";
                document.body.appendChild(button);
                kakushiVisible = true;
                inputCommand.length = 0;
            }
        } else {
            inputCommand.length = 0;
        }
    }
};
