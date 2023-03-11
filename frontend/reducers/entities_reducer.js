import { combineReducers } from 'redux';

import users from './users_reducer';
import posts from './posts_reducer';
import comments from './comments_reducer';
import likes from './likes_reducer'
import friends from './friends_reducer';

const entitiesReducer = combineReducers({
    users,
    posts,
    comments,
    likes,
    friends
})

export default entitiesReducer;