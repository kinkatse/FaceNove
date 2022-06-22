// Classnames

export const tabColor = () => {
    let color = window.localStorage.getItem('appColor')
    if (color === "blue") { return "tabblue" }
    else if (color === "green") { return "tabgreen" }
    else if (color === "red") { return "tabred" }
}

export const profPicColor = () => {
    let color = window.localStorage.getItem('appColor')
    if (color === "blue") { return "profpicbluebig" }
    else if (color === "green") { return "profpicgreenbig" }
    else if (color === "red") { return "profpicredbig" }
}

// Images

export const uploadPicImage = () => {
    let color = window.localStorage.getItem('appColor')
    if (color === "blue") { return window.image_blue_url }
    else if (color === "green") { return window.image_green_url }
    else if (color === "red") { return window.image_red_url }
}

export const editProfImage = () => {
    let color = window.localStorage.getItem('appColor')
    if (color === "blue") { return window.edit_blue_url }
    else if (color === "green") { return window.edit_green_url }
    else if (color === "red") { return window.edit_red_url }
}
