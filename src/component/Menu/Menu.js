import React, { Component } from 'react'
import '../Menu/Menu.css'
import { Link } from 'react-router-dom'

 class Menu extends Component {
    render() {
        return (
                <nav className="menuNav">
                    <ul className="menuList">
                    <Link to='/new'>
                        <li className="flex1">
                                New
                        </li>
                     </Link>
                     <Link to='/men'>
                        <li className="flex2">
                                Men
                        </li>
                     </Link>
                     <Link to='/Women'>
                        <li className="flex3">
                                Women
                        </li>
                     </Link>
                     <Link to='/accesories'>
                        <li className="flex4">
                                Accesories
                        </li>
                     </Link>
                    </ul>
                    <div className="burger">
                         <div className="line1"></div>  
                         <div className="line2"></div>  
                         <div className="line3"></div>  
                    </div>  
                </nav>
        )
    }
}

export default Menu
