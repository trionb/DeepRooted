import React, { Component } from 'react'
import '../Menu/Menu.css'

 class Menu extends Component {
    render() {
        return (
                <nav className="menuNav">
                    <ul className="menuList">
                        <li>
                            <a 
                                href="#New" 
                                className="flex1">
                                New
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#Men" 
                                className="flex2">
                                Men
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#Women" 
                                className="flex3">
                                Women
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#Accesories" 
                                className="flex4">
                                Accessories
                            </a>
                        </li>
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
