import './styles/main.css'

import {topSectionModel} from './models/topSection.model';
import {contactModel} from './models/contact.model'
import {skillsModel} from './models/skills.model'
import {contentModel} from './models/content.model'
import {topSectionTemp} from './tamplates/topSection.template';
import {aboutMe, experience, education} from './tamplates/contant.template'

const $topSection = document.querySelector('#top');
const $contact = document.querySelector('#contact');
const $skills = document.querySelector('#bar');
const $mainContent = document.querySelector('#mainContent');

topSectionModel.forEach(block => {
    const toHTML = topSectionTemp[block.type];
    if (toHTML) {
        $topSection.insertAdjacentHTML('beforeend', toHTML(block));
    }
});

contactModel.map(block => {
    const html = `<h4>${block.title}</h4><p>${block.value}</p>`
    $contact.insertAdjacentHTML('beforeend', html);
});

skillsModel.map(block => {
    const styles = block.style;
    const html = `
        <div class="bar ${block.type}">
             <p>${block.type}</p>
             <span></span>
        </div>`

    $skills.insertAdjacentHTML('beforeend', html)
});

contentModel.forEach(block => {
    let html = ''
    if (block.type === 'aboutMe') {
        html = aboutMe(block);
    } else if (block.type === 'experience') {
        html = experience(block);
    } else if (block.type === 'education') {
        html = education(block);
    }

    $mainContent.insertAdjacentHTML('beforeend', html)
})

//////////////////////////////////////////////////////////////////////
const theme = document.getElementsByClassName('white')[0];
const button = document.getElementsByClassName('btn_theme')[0];

function changeTheme() {
    if (theme.style.background === 'white') {
        theme.style.background = 'black'
        button.textContent = 'Light Theme'
    } else {
        theme.style.background = 'black'
        theme.style.background = 'white'
        button.textContent = 'Dark Theme'
    }
}

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
