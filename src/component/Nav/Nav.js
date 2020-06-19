import React, { Component } from 'react'
import '../Nav/Nav.css'

class Nav extends Component {
    render() {
        return (
                 <header>
                        <p className="logo" >
                            <img 
                                src="https://f1.pngfuel.com/png/777/122/324/tree-trunk-drawing-royaltyfree-stock-photography-root-cartoon-branch-plant-twig-png-clip-art.png" 
                                alt="roots"
                            />
                            </p>
                            <nav className>
                                <ul className="nav-links">
                                        <li>
                                            <a 
                                                href="#Account" 
                                                className="account">
                                                Account
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="#Cart" className="cart">
                                                Cart
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="#Wishlist" className="wishlist">
                                                Wishlist
                                            </a>
                                        </li>
                                </ul>
                            </nav>
                     </header>
        )
    }
}

export default Nav
