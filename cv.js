const maimContainer = document.getElementsByClassName('main')[0];
const button = document.getElementsByClassName('btn_theme')[0];

button.addEventListener('click', function () {
    button.innerHTML = 'Light'
    maimContainer.classList.add('black')

})

// button.addEventListener('click', function () {
//     button.innerHTML = 'Dark Theme'
//         maimContainer.classList.remove('black')
//
// })

// function darkTheme() {
//     maimContainer.classList.remove('black')
//     button.innerHTML = 'Dark Theme'
// }

const addSkills = (skill, level) => {

}

const levelSkills = () => {

}

const form = document.getElementsByClassName('container-form')[0];
document.getElementsByClassName('btn_write')

function writeMessage() {
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