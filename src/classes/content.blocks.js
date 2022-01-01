import {contentBlock} from "../utils";

class ContentBlocks {
    constructor(title, value) {
        this.title = title
        this.value = value
    }

    toHtml() {
        throw new Error('The method toHtml must be implemented')
    }
}

export class AboutBlock extends ContentBlocks {
    constructor(title, value) {
        super(title, value);
    }

    toHtml() {
        return  contentBlock(`<h3><span><i class="far fa-user"></i></span>${this.title}</h3>
        <p>${this.value}</p>`)
    }
}

export class ExperienceBlock extends ContentBlocks {
    constructor(title, value) {
        super(title, value);
    }

    toHtml() {
        const html = this.value.map(item =>
            `<h4><span><i class = "fas fa-chevron-circle-right"></i></span>
            ${item.title}
         </h4>
         <p>
            ${item.text}
         </p>
        `)
        return  contentBlock(`<h3><span><i class="fas fa-briefcase"></i></span>${this.title}</h3>
        <div>${html.join('')}</div>`)
    }
}

export class EducationBlock extends ContentBlocks {
    constructor(title, value) {
        super(title, value);
    }

    toHtml() {
        const html = this.value.map(item =>
            `<h4><span><i class="fas fa-chevron-circle-right"> </i></span>
            ${item.title}
         </h4>
         <p>
            ${item.text}
         </p>`)

        return contentBlock(`<h3><span><i class="fas fa-user-graduate"></i></span>${this.title}</h3>
            <div>${html.join('')} </div>`)
    }
}
