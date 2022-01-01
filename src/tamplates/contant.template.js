import {contentBlock} from '../utils'

export function aboutMe(block) {
    return contentBlock(`<h3><span><i class="far fa-user"></i></span>${block.titleAbout}</h3>
     <p>${block.textAbout}</p>`)
}

export function experience(block) {
    const html = block.value.map(item =>
        `<h4><span><i class = "fas fa-chevron-circle-right"></i></span>
            ${item.title}
         </h4>
         <p>
            ${item.text}
         </p>
        `)
    return contentBlock(`<h3><span><i class="fas fa-briefcase"></i></span>${block.titleExp}</h3>
     <div>${html.join('')}</div>`)
}

export function education(block) {
    const html = block.value.map(item =>
        `<h4><span><i class="fas fa-chevron-circle-right"> </i></span>
            ${item.title}
         </h4>
         <p>
            ${item.text}
         </p>`)
    return contentBlock(`<h3><span><i class="fas fa-user-graduate"></i></span>${block.titleEdu}</h3>
            <div>${html.join('')} </div>`)
}
