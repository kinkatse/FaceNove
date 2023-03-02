import React from 'react';

export const filterUserPostsWithPhotos = (posts, userId) => {
    let postArr = Object.values(posts).reverse()
    // Grab only users posts
    let userPostsArr = []
    for (let post of postArr) {
        if (parseInt(userId) === post.user_id) userPostsArr.push(post)
    }
    // Grab only posts with photos
    let postsWithPhotosArr = []
    for (let post of userPostsArr) {
        if (post.postPhotoUrl) postsWithPhotosArr.push(post)
    }

    return postsWithPhotosArr
}

export const filterPostsWithPhotos = (posts) => {
    let postsWithPhotosArr = []
    for (let post of posts) {
        if (post.postPhotoUrl) postsWithPhotosArr.push(post)
    }

    return postsWithPhotosArr
}

export const filterPhotoPostIds = (posts) => {
    return posts.map((post) => post.id)
}

const rendersTime = (datetime, type) => {
    // Making arrays of the individual date info to adjust them for formatting
    let date = datetime.toDateString().split(" ")
    let time = datetime.toLocaleTimeString().split(" ")

    // Making date of week full date with comma
    switch(date[0]) {
        case 'Mon': date[0] = 'Monday,'; break
        case 'Tue': date[0] = 'Tuesday,'; break
        case 'Wed': date[0] = 'Wednesday,'; break
        case 'Thu': date[0] = 'Thursday,'; break
        case 'Fri': date[0] = 'Friday,'; break
        case 'Sat': date[0] = 'Saturday,'; break
        case 'Sun': date[0] = 'Sunday,'; break
        default: date[0] = 'Day'; break
    }
    // Making month the full month
    switch(date[1]) {
        case 'Jan': date[1] = 'January'; break
        case 'Feb': date[1] = 'February'; break
        case 'Mar': date[1] = 'March'; break
        case 'Apr': date[1] = 'April'; break
        case 'May': date[1] = 'May'; break
        case 'Jun': date[1] = 'June'; break
        case 'Jul': date[1] = 'July'; break
        case 'Aug': date[1] = 'August'; break
        case 'Sep': date[1] = 'September'; break
        case 'Oct': date[1] = 'October'; break
        case 'Nov': date[1] = 'November'; break
        case 'Dec': date[1] = 'December'; break
        default: date[1] = 'Month'; break
    }
    // Adding comma
    date[2] += ','
    // Removing seconds
    time[0] = time[0].split(":").slice(0, 2).join(":")

    // This is for the simple show of time posted
    if (type === "created_simple") {
        date.shift()
        return date.join(" ")
    }

    // Joining all of the date and time info into one string
    if (type === "edited_hover") {
        date.unshift("Edited on")
    } else {
        date.unshift("Created on")
    }
    return `${date.join(" ")} at ${time.join(" ")}`
}

export const filterTime = (created_at, updated_at) => {
    let datetime_created = new Date(created_at)
    let created = rendersTime(datetime_created, "created_hover")
    let datetime_updated = new Date(updated_at)
    // This is for when the post has never updated so we shouldn't
    // give updated any info if the post created and post updated
    // are the same. We need the conditional to have Date.parse since
    // comparing Date objects will always be false so use numbers
    let updated;
    if (Date.parse(datetime_created) !== Date.parse(datetime_updated)) {
        updated = rendersTime(datetime_updated, "edited_hover")
    }

    // This is to prevent showing the null updated if no updated
    // which will have a padding and ruin the css of the hover
    let timestamp_hover;
    if (updated) {
        timestamp_hover = ( <div>
                <p className="created_and_updated">{created}</p>
                <p className="created_and_updated">{updated}</p>
            </div> )
    } else {
        timestamp_hover = <div>{created}</div>
    }

    // Formating time for when a post is under 1 day old
    let created_milli = Date.parse(datetime_created)
    let now_milli = Date.now()
    // Grabbing time now and time posted and subtracting their time in
    // in milliseconds (with the Math.abs to make sure no negative)
    let time_diff = Math.abs(now_milli - created_milli)
    // Math.ceil is just to round number, we divide the time in milliseconds
    // by milliseconds per second, seconds per minute and minutes per hour
    // to get time in hours. Did that for seconds and minutes and days (6) too
    let time_diff_seconds = Math.ceil(time_diff / (1000))
    let time_diff_minutes = Math.ceil(time_diff / (1000 * 60))
    let time_diff_hours = Math.ceil(time_diff / (1000 * 60 * 60))
    let time_diff_days = Math.ceil(time_diff / (1000 * 60 * 60 * 24))
    let time_posted;
    if (time_diff_seconds < 60) {
        time_posted = (time_diff_seconds.toString() + "s")
    } else if (time_diff_minutes < 60) {
        time_posted = (time_diff_minutes.toString() + "m")
    } else if (time_diff_hours < 24) {
        time_posted = (time_diff_hours.toString() + "h")
    } else if (time_diff_days < 7) {
        time_posted = (time_diff_days.toString() + "d")
    } else {
        time_posted = rendersTime(datetime_created, "created_simple")
    }
    return { time_posted, timestamp_hover }
}