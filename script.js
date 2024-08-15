let num = 75;
const history = [75];
let currentIndex = 0;

document.getElementById('subtract').addEventListener('click', () => {
    if (num > 0) {
        num--;
        updateState();
    }
});

document.getElementById('add').addEventListener('click', () => {
    if (num < 150) {
        num++;
        updateState();
    }
});

document.getElementById('undo').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        num = history[currentIndex];
        updateUI();
    }
});

document.getElementById('redo').addEventListener('click', () => {
    if (currentIndex < history.length - 1) {
        currentIndex++;
        num = history[currentIndex];
        updateUI();
    }
});

function updateState() {
    currentIndex++;
    history.splice(currentIndex, history.length - currentIndex, num);
    updateUI();
}

function updateUI() {
    document.getElementById('number').innerText = num;
    document.getElementById('progressBar').style.width = (num / 150) * 100 + '%';
}
