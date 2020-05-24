import React, { Component } from 'react'
import Nav from '../component/Nav/Nav'
import Search from "../component/Search/Search"
import Menu from "../component/Menu/Menu"

export class Main extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Search />
                <Menu />
            </div>
        )
    }
}

export default Main
