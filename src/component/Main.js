import React, { Component } from 'react'
// import Nav from '../component/Nav/Nav'
import Search from "./Search/Search"
import Menu from "./Menu/Menu"
import Jumbotron from "./Jumbotron/Jumbotron"
import Stories from './Stories/Stories'

export class Main extends Component {
    render() {
        return (
            <div>
                {/* <Nav /> */}
                <Search />
                <Menu />
                <Jumbotron />
                <Stories />
            </div>
        )
    }
}

export default Main


