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
    if (color === "blue") { return 'main-blue' }
    else if (color === "green") { return 'main-green' }
    else if (color === "red") { return 'main-red' }
}

export const inputColor = () => {
    let color = getColor()
    if (color === "blue") { return 'input-blue' }
    else if (color === "green") { return 'input-green' }
    else if (color === "red") { return 'input-red' }
}

export const tabColor = () => {
    let color = getColor()
    if (color === "blue") { return "tab-blue" }
    else if (color === "green") { return "tab-green" }
    else if (color === "red") { return "tab-red" }
}

export const profPicColor = () => {
    let color = getColor()
    if (color === "blue") { return "prof-pic-blue" }
    else if (color === "green") { return "prof-pic-green" }
    else if (color === "red") { return "prof-pic-red" }
}

export const postProfPicColor = () => {
    let color = getColor()
    if (color === "blue") { return "post-prof-pic-blue" }
    else if (color === "green") { return "post-prof-pic-green" }
    else if (color === "red") { return "post-prof-pic-red" }
}

export const bigProfPicColor = () => {
    let color = getColor()
    if (color === "blue") { return "big-prof-pic-blue" }
    else if (color === "green") { return "big-prof-pic-green" }
    else if (color === "red") { return "big-prof-pic-red" }
}

export const postButtonColor = () => {
    let color = getColor()
    if (color === "blue") { return "post-button-blue" }
    else if (color === "green") { return "post-button-green" }
    else if (color === "red") { return "post-button-red" }
}

// Images

// middle nav bar icons
export const homeImage = () => {
    let color = getColor()
    if (color === "blue") { return window.blue_home_url }
    else if (color === "green") { return window.green_home_url }
    else if (color === "red") { return window.red_home_url }
}

export const gitHubImage = () => {
    return window.github_url
}

export const linkedInImage = () => {
    return window.linkedin_url
}

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

// Friend Button
export const friendColor = () => {
    let color = getColor()
    if (color === "blue") { return 'friend_button_blue' }
    else if (color === "green") { return 'friend_button_green' }
    else if (color === "red") { return 'friend_button_red' }
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

export const likedVisual = () => {
    let color = getColor()
    if (color === "blue") { return window.liked_visual_blue_url }
    else if (color === "green") { return window.liked_visual_green_url }
    else if (color === "red") { return window.liked_visual_red_url }
}

export const likeButton = () => {
    let color = getColor()
    if (color === "blue") { return window.like_blue_url }
    else if (color === "green") { return window.like_green_url }
    else if (color === "red") { return window.like_red_url }
}

export const unlikeButton = () => {
    let color = getColor()
    if (color === "blue") { return window.unlike_blue_url }
    else if (color === "green") { return window.unlike_green_url }
    else if (color === "red") { return window.unlike_red_url }
}

export const commentButton = () => {
    let color = getColor()
    if (color === "blue") { return window.comment_blue_url }
    else if (color === "green") { return window.comment_green_url }
    else if (color === "red") { return window.comment_red_url }
}