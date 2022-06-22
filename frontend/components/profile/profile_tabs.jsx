import React from 'react';
import ProfileBody from './profile_body';
import About from './profile_abouttab';
import Friends from './profile_friendstab';
import Photos from './profile_photostab';
import Hobbies from './profile_hobbiestab';

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

    rendersTabs(tabs) {
        let tabcolor;
        if (this.props.color === "blue") {
            tabcolor = "tabblue"
        } else if (this.props.color === "green") {
            tabcolor = "tabgreen"
        } else if (this.props.color === "red") {
            tabcolor = "tabred"
        }

        let active = this.state.activeTab;
        let tabline = tabs.map((tab, idx) => {
            let tabclassname = idx === active ? 'tab_active ' + tabcolor : 'tab_inactive';
            return (
                <li
                    key={idx}
                    className={tabclassname}
                    onClick={ () => {this.changeActiveTab(idx)} }>
                        {tab.title}
                </li>
            )
        })
        return (
        <ul className="profile_tabs">{tabline}</ul>
        )
    }

    rendersEdit() {
        let editcolor;
        if (this.props.color === "blue") {
            editcolor = window.edit_blue_url
        } else if (this.props.color === "green") {
            editcolor = window.edit_green_url
        } else if (this.props.color === "red") {
            editcolor = window.edit_red_url
        }

        if (this.props.currentUserId === parseInt(this.props.userId)) {
            return (
                <div
                    className="edit_profile"
                    onClick={this.props.openEditModal}>
                        <img className="editicon" src={editcolor} />
                        Edit Profile
                </div>
            )
        }
    }

    render() {
        const tabs = [
            { title: "Posts",
              content: <ProfileBody />
            }, 

            { title: "About",
              content: <About
                />
            },

            { title: "Friends",
              content: <Friends
                />
            },

            { title: "Photos",
              content: <Photos
                />
            },

            { title: "Hobbies",
              content: <Hobbies
                />
            }
        ]

        let tab = tabs[this.state.activeTab]
        return (
            <div>
                <div className="profile_tabs_whole">
                    {this.rendersTabs(tabs)}
                    {this.rendersEdit()}
                </div>
                {tab.content}
            </div>
        )
    }
}

export default ProfileTabs;