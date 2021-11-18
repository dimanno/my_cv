const theme = document.getElementsByClassName('theme')[0];
const button = document.getElementsByClassName('btn_theme')[0];

button.addEventListener('click', function () {
        theme.style.background = 'black'
        button.innerHTML = 'Light Theme'
})

const addSkills = (skill, level) =>  {

}

const levelSkills = () => {

}

const form = document.getElementsByClassName('container-form')[0];
document.getElementsByClassName('btn_write')

function writeMessage()  {
    if (form.style.display === 'none') {
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
    }
    // document.getElementsByClassName('btn_write')[0].remove()

}

const sentMessage = () => {
    document.getElementsByClassName('container-form')[0].remove()
    document.getElementsByClassName('btn_send')[0].remove();
}