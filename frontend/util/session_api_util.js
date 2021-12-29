export const logIn = (user) => {
    return $.ajax({
        url: '/api/session',
        // Post to Sessions because we want to log in a new session
        method: 'POST',
        // Data being sent to check credentials
        data: { user }
    })
}

export const logOut = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}