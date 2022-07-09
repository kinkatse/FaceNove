export const OPEN_SIGNUP_MODAL = 'OPEN_SIGNUP_MODAL';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const OPEN_PROFPIC_MODAL = 'OPEN_PROFPIC_MODAL';
export const OPEN_COVPIC_MODAL = 'OPEN_COVPIC_MODAL';
export const OPEN_CREATEPOST_MODAL = 'OPEN_CREATEPOST_MODAL';
export const OPEN_EDITPOST_MODAL = 'OPEN_EDITPOST_MODAL';
export const OPEN_LIKES_MODAL = 'OPEN_LIKES_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openSignupModal = () => {
    return {
        type: OPEN_SIGNUP_MODAL
    }
}

export const openEditModal = () => {
    return {
        type: OPEN_EDIT_MODAL
    }
}

export const openProfPicModal = () => {
    return {
        type: OPEN_PROFPIC_MODAL
    }
}

export const openCovPicModal = () => {
    return {
        type: OPEN_COVPIC_MODAL
    }
}

export const openCreatePostModal = () => {
    return {
        type: OPEN_CREATEPOST_MODAL
    }
}

export const openEditPostModal = (postId) => {
    return {
        type: OPEN_EDITPOST_MODAL,
        postId
    }
}

export const openLikesModal = (postId) => {
    return {
        type: OPEN_LIKES_MODAL,
        postId
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}