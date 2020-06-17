import React, { Component } from 'react'
import Nav from '../component/Nav/Nav'
import Search from "../component/Search/Search"
import Menu from "../component/Menu/Menu"
import Jumbotron from "../component/Jumbotron/Jumbotron"
import Stories from '../component/Stories/Stories'

export class Main extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Search />
                <Menu />
                <Jumbotron />
                <Stories />
            </div>
        )
    }
}

export default Main


