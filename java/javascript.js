var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function screensaver() {
        alert("You are now logged out.")
        //location.href = 'logout.html'
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(screensaver, 9000)
        // 1000 milliseconds = 1 second
    }
}; 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// You should add the tiles of the gameboard to the DOM
// 

let settingsTerminal = document.getElementById("settingsTerminal");

function openSettings() {
    settingsTerminal.style.display = "block";
}
function closeSettings() {
    settingsTerminal.style.display = "none";
}