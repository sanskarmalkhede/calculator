let screen = document.getElementById('screen');
const buttons = document.querySelectorAll("button");
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        console.log("Clicked")
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
        }
        else if (buttonText == '=') {

        }
    })
}