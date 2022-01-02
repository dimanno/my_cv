import './styles/main.css'

import {topSectionModel, contactModel, skillsModel, contentModel} from './models';
import {Cv} from './classes/cv'

const cv = new Cv('#top', '#contact', '#bar', '#mainContent');
cv.render(topSectionModel, contactModel, skillsModel, contentModel);

//////////////////////////////////////////////////////////////////////

const button = document.getElementsByClassName('btn_theme')[0];
button.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
    if (document.body.classList.toggle('dark')) {
        button.textContent = 'Light Theme'
    } else {
        button.textContent = 'Dark Theme'
    }
})

const form = document.getElementsByClassName('container-form')[0];
document.getElementsByClassName('btn_write')

function writeMessage() {
    if (form.style.display === 'none') {
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
    }
    document.getElementsByClassName('btn_write')[0].remove()

}

const sentMessage = () => {
    document.getElementsByClassName('container-form')[0].remove()
    document.getElementsByClassName('btn_send')[0].remove();
}
