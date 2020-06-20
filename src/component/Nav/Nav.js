import React, { Component } from 'react'
import Search from '../Search/Search'
import { Link } from 'react-router-dom'
import '../Nav/Nav.css'

class Nav extends Component {
    render() {
        return (
                 <header>
                         <Search />
                         <Link to='/'>
                            <img className="logo"
                                src="https://f1.pngfuel.com/png/777/122/324/tree-trunk-drawing-royaltyfree-stock-photography-root-cartoon-branch-plant-twig-png-clip-art.png" 
                                alt="roots"
                            />     
                         </Link>
                            <nav className>
                                <ul className="nav-links">
                                    <Link to='/account'>
                                        <li>
                                             Account
                                        </li>
                                    </Link>
                                    <Link to='/cart'>
                                        <li>
                                             Cart
                                        </li>
                                    </Link>
                                    <Link to='/wishlist'>
                                        <li>

                                             WishList
                                        </li>
                                    </Link>
                                </ul>
                            </nav>
                     </header>
        )
    }
}

export default Nav
