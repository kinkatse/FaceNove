export const getAllUsers = () => {
    return $.ajax({
        url: '/api/users',
        method: 'GET'
    })
}

export const getUser = (userId) => {
    // debugger
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET'
    })
}

export const signUp = (user) => {
    return $.ajax({
        url: '/api/users',
        // This is signing up a user so we do to users page
        method: 'POST',
        // This is the payload we send back to the backend to sign up the user with this data
        data: { user }
    })
}

export const editUser = (user, userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'PATCH',
        data: { user }
    })
}

export const changeProfPic = (user, userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'PATCH',
        data: user,
        contentType: false,
        processData: false
    })
}

export const changeCovPic = (user, userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'PATCH',
        data: user,
        contentType: false,
        processData: false
    })
}