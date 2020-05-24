import React, { Component } from 'react'
import '../Menu/Menu.css'
export class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="menuNav">
                    <ul className="menuList">
                        <li className="menu-li">
                            <a 
                                href="#New" 
                                className="newArrivals">
                                New
                            </a>
                        </li>
                        <li className="menu-li">
                            <a 
                                href="#Men" 
                                className="Men">
                                Men
                            </a>
                        </li>
                        <li className="menu-li">
                            <a 
                                href="#Women" 
                                className="Women">
                                Women
                            </a>
                        </li>
                        <li className="menu-li">
                            <a 
                                href="#Accesories" 
                                className="Accecories">
                                Accessories
                            </a>
                        </li>

                    </ul>

                </nav>
                
            </div>
        )
    }
}

export default Menu
