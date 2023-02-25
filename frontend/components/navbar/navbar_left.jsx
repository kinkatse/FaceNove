import React from 'react';
import { Link } from 'react-router-dom';

import { logoImage } from '../../util/color_util';

class NavBarLeft extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchBarOpen: false
        }
        this.toggleSearch = this.toggleSearch.bind(this)
    }

    toggleSearch() {
        this.setState({searchBarOpen: !this.state.searchBarOpen})
    }

    searchInput() {
        let miniSearchOn = false
        let searchInput = null
        let searchBarEl = document.querySelector(".search-bar")
        let leftBarEl = document.querySelector(".navbar_left")
        
        if (searchBarEl && leftBarEl &&
            (leftBarEl.offsetWidth - 20 < searchBarEl.offsetWidth
            && miniSearchOn !== true)) {
                miniSearchOn = true
        }
    
        if (miniSearchOn) {
            searchInput = (
                <div className='search' onClick={this.toggleSearch}>
                    <input className='search-bar-mini' type="text" placeholder='O' disabled/>
                </div>
            )
        } else if (this.state.searchBarOpen) {
            searchInput = (
                <div className='search'>
                    <span className="magnifying-glass" onClick={this.toggleSearch}>O</span>
                    <input className='search-bar-magni' type="text" placeholder='Search FaceNove' />
                </div>
            )
        } else {
            searchInput = (
                <div className='search'>
                    <input className='search-bar' type="text" placeholder='Search FaceNove' />
                </div>
            )
        }

        return searchInput
    }

    render() {
    
        return (
            <div className="navbar_left">
                <div className="logo">
                    <Link to="/">
                        <img src={logoImage()} />
                    </Link>
                </div>
                {this.searchInput()}
            </div>
        )
    }
}

export default NavBarLeft;