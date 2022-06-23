const getColor = () => { return window.localStorage.getItem('appColor') }

// Setting color on localStorage

// export const toggleColor = () => {
//     if (color === "blue")
//         { window.localStorage.setItem('appColor', 'green') }
//     else if (color === "green")
//         { window.localStorage.setItem('appColor', 'red') }
//     else
//         { window.localStorage.setItem('appColor', 'blue') }
// }

// Classnames

// colorSplash
export const appColor = () => {
    let color = getColor()
    if (color === "blue") { return 'bluesplash' }
    else if (color === "green") { return 'greensplash' }
    else if (color === "red") { return 'redsplash' }
}

export const inputColor = () => {
    let color = getColor()
    if (color === "blue") { return 'blueinput' }
    else if (color === "green") { return 'greeninput' }
    else if (color === "red") { return 'redinput' }
}

export const tabColor = () => {
    let color = getColor()
    if (color === "blue") { return "tabblue" }
    else if (color === "green") { return "tabgreen" }
    else if (color === "red") { return "tabred" }
}

export const profPicColor = () => {
    let color = getColor()
    if (color === "blue") { return "profpicblue" }
    else if (color === "green") { return "profpicgreen" }
    else if (color === "red") { return "profpicred" }
}

export const postProfPicColor = () => {
    let color = getColor()
    if (color === "blue") { return "postprofpicblue" }
    else if (color === "green") { return "postprofpicgreen" }
    else if (color === "red") { return "postprofpicred" }
}

export const bigProfPicColor = () => {
    let color = getColor()
    if (color === "blue") { return "profpicbluebig" }
    else if (color === "green") { return "profpicgreenbig" }
    else if (color === "red") { return "profpicredbig" }
}

// Images

// logo
export const logoImage = () => {
    let color = getColor()
    if (color === "blue") { return window.logo_blue_url }
    else if (color === "green") { return window.logo_green_url }
    else if (color === "red") { return window.logo_red_url }
}

// colorButtonColor
export const colorWheelImage = () => {
    let color = getColor()
    if (color === "blue") { return window.color_blue_url }
    else if (color === "green") { return window.color_green_url }
    else if (color === "red") { return window.color_red_url }
}

// logoutButtonColor
export const logoutImage = () => {
    let color = getColor()
    if (color === "blue") { return window.logout_blue_url }
    else if (color === "green") { return window.logout_green_url }
    else if (color === "red") { return window.logout_red_url }
}

// picImageButton
export const uploadPicImage = () => {
    let color = getColor()
    if (color === "blue") { return window.image_blue_url }
    else if (color === "green") { return window.image_green_url }
    else if (color === "red") { return window.image_red_url }
}

// editColor
export const editProfImage = () => {
    let color = getColor()
    if (color === "blue") { return window.edit_blue_url }
    else if (color === "green") { return window.edit_green_url }
    else if (color === "red") { return window.edit_red_url }
}
