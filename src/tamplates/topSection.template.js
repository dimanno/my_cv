function picture(block) {
    return `<div class="photo">
            <img src=${block.image} alt="photo">
            <div class="title-photo">
                <h3>${block.text}</h3>
            </div>
        </div>`
}

function fullName(block) {
    return `<div class="top_text">
            <h1>${block.name}</h1>
            <p><em>${block.slogan}</em></p>
        </div>`
}

export const topSectionTemp = {
    picture,
    fullName
}
