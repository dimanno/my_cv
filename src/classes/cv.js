import {topSectionTemp} from "../tamplates/topSection.template";

export class Cv {
    constructor($topSection, $contact, $skills, $mainContent) {
        this.$topSection = document.querySelector($topSection)
        this.$contact = document.querySelector($contact)
        this.$skills = document.querySelector($skills)
        this.$mainContent = document.querySelector($mainContent)
    }

    render(topSectionModel, contactModel, skillsModel, contentModel) {
        topSectionModel.forEach(block => {
            const toHTML = topSectionTemp[block.type];
            if (toHTML) {
                this.$topSection.insertAdjacentHTML('beforeend', toHTML(block));
            }
        });

        contactModel.map(block => {
            const html = `<h4>${block.title}</h4><p>${block.value}</p>`
            this.$contact.insertAdjacentHTML('beforeend', html);
        });

        skillsModel.map(block => {
            const styles = block.style;
            const html = `
        <div class="bar ${block.type}">
             <p>${block.type}</p>
             <span></span>
        </div>`

            this.$skills.insertAdjacentHTML('beforeend', html)
        });

        contentModel.forEach(block => {
            console.log(block.toHtml)
            this.$mainContent.insertAdjacentHTML('beforeend', block.toHtml())
        })
    }
}
