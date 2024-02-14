document.addEventListener('DOMContentLoaded', function () {
    const colorBox = document.getElementById('color-box');
    const colorCode = document.getElementById('color-code');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');

    generateBtn.addEventListener('click', generateRandomColor);
    copyBtn.addEventListener('click', copyColorCode);

    function generateRandomColor() {
        const randomColor = getRandomColor();
        updateColor(randomColor);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function updateColor(color) {
        colorBox.style.backgroundColor = color;
        colorCode.textContent = color;
    }

    function copyColorCode() {
        const copyText = document.createElement('textarea');
        copyText.value = colorCode.textContent;
        document.body.appendChild(copyText);
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(copyText);
        showAlert('Color code copied!');
    }

    function showAlert(message) {
        const alert = document.createElement('div');
        alert.classList.add('alert');
        alert.textContent = message;
        document.body.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
    }
});
