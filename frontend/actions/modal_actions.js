export const OPEN_SIGNUP_MODAL = 'OPEN_SIGNUP_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openSignupModal = () => {
    return {
        type: OPEN_SIGNUP_MODAL
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}