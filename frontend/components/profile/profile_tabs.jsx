import React from 'react';

class ProfileTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
    }

    changeActiveTab(num) {
        this.setState({activeTab: num})
    }

    rendersEdit() {
        // debugger
        if (this.props.currentUserId === parseInt(this.props.userId)) {
            return (
                <div
                    className="edit_profile"
                    onClick={this.props.openEditModal}>
                        Edit Profile
                </div>
            )
        }
    }

    rendersTabs() {
        const tabs = [
            "Posts",
            "About",
            "Friends",
            "Photos",
            "Hobbies",
            "Settings"
        ]
        let active = this.state.activeTab;
        let tabline = tabs.map((tab, idx) => {
            let tabclassname = idx === active ? 'tab_active' : 'tab_inactive';
            return (
                <li
                    key={idx}
                    className={tabclassname}
                    onClick={ () => {this.changeActiveTab(idx)} }>
                        {tab}
                </li>
            )
        })
        return (
        <ul className="profile_tabs">{tabline}</ul>
        )
    }

    render() {
        return (
            <div className="profile_tabs_whole">
                {this.rendersTabs()}
                {/* <ul className="profile_tabs">
                    <li
                        className={tabclassname}
                        onClick={this.changeActiveTab}>
                            Posts
                    </li>    
                    <li
                        className={tabclassname}
                        onClick={this.changeActiveTab}>
                            About
                    </li>
                    <li
                        className={tabclassname}
                        onClick={this.changeActiveTab}>
                            Friends
                    </li>
                    <li
                        className={tabclassname}
                        onClick={this.changeActiveTab}>
                            Photos
                    </li>
                    <li
                        className={tabclassname}
                        onClick={this.changeActiveTab}>
                            Hobbies
                    </li>
                </ul> */}
                {this.rendersEdit()}
            </div>
        )
    }
}

export default ProfileTabs;