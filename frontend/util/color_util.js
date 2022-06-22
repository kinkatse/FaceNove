// const color = window.localStorage.getItem('appColor')

// Setting color on localStorage

export const toggleColor = () => {
    let color = window.localStorage.getItem('appColor')
    if (color === "blue")
        { window.localStorage.setItem('appColor', 'green') }
    else if (color === "green")
        { window.localStorage.setItem('appColor', 'red') }
    else
        { window.localStorage.setItem('appColor', 'blue') }
}

// Classnames

// colorSplash
export const appColor = () => {
    let color = window.localStorage.getItem('appColor')
    if (color === "blue") { return 'bluesplash' }
    else if (color === "green") { return 'greensplash' }
    else if (color === "red") { return 'redsplash' }
}

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

// picImageButton
export const uploadPicImage = () => {
    let color = window.localStorage.getItem('appColor')
    if (color === "blue") { return window.image_blue_url }
    else if (color === "green") { return window.image_green_url }
    else if (color === "red") { return window.image_red_url }
}

// editColor
export const editProfImage = () => {
    let color = window.localStorage.getItem('appColor')
    if (color === "blue") { return window.edit_blue_url }
    else if (color === "green") { return window.edit_green_url }
    else if (color === "red") { return window.edit_red_url }
}
