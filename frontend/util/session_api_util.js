export const signUp = (user) => {
    return $.ajax({
        url: '/api/users',
        // This is signing up a user so we do to users page
        method: 'POST',
        // This is the payload we send back to the backend to sign up the user with this data
        data: { user }
    })
}

export const logIn = (user) => {
    return $.ajax({
        url: '/api/sessions',
        // Post to Sessions because we want to log in a new session
        method: 'POST',
        // Data being sent to check credentials
        data: { user }
    })
}

export const logOut = () => {
    return $.ajax({
        url: '/api/sessions',
        method: 'DELETE'
    })
}