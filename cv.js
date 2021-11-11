const theme = document.getElementsByClassName('white')[0];
const button = document.getElementsByClassName('btn_theme')[0];
function changeTheme() {
    if (theme.style.background === 'white') {
        theme.style.background = 'black'
        button.textContent = 'Light Theme'
    } else {theme.style.background = 'black'
        theme.style.background = 'white'
        button.textContent = 'Dark Theme'
    }
}

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