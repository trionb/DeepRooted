import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import '../Women/Women.css'
class Women extends Component {
    render() {
        return (
            <>
             <Menu />
                 <h1>Women</h1>
                <div className="womenContainer">
                    <ul className="products">
                        <li className="men-card">
                            <img className="productImage" src="https://cdn.fashiola.com/L472666235/halogen-womens-halogen-x-atlantic-pacific-stripe-blazer.jpg" alt="men clothng" />
                            <h5 className="productTitle">Plaid Jacket</h5>
                            <p className="price">$150.00</p>
                        </li>
                        <li className="men-card">
                            <img className="productImage" src="https://cdn.fashiola.com/L472666235/halogen-womens-halogen-x-atlantic-pacific-stripe-blazer.jpg" alt="men clothng" />
                            <h5 className="productTitle">Plaid Jacket</h5>
                            <p className="price">$150.00</p>
                        </li>
                        <li className="men-card">
                            <img className="productImage" src="https://cdn.fashiola.com/L472666235/halogen-womens-halogen-x-atlantic-pacific-stripe-blazer.jpg" alt="men clothng" />
                            <h5 className="productTitle">Plaid Jacket</h5>
                            <p className="price">$150.00</p>
                        </li>
                        <li className="men-card">
                            <img className="productImage" src="https://cdn.fashiola.com/L472666235/halogen-womens-halogen-x-atlantic-pacific-stripe-blazer.jpg" alt="men clothng" />
                            <h5 className="productTitle">Plaid Jacket</h5>
                            <p className="price">$150.00</p>
                        </li>
                        <li className="men-card">
                            <img className="productImage" src="https://cdn.fashiola.com/L472666235/halogen-womens-halogen-x-atlantic-pacific-stripe-blazer.jpg" alt="men clothng" />
                            <h5 className="productTitle">Plaid Jacket</h5>
                            <p className="price">$150.00</p>
                        </li>
                        <li className="men-card">
                            <img className="productImage" src="https://cdn.fashiola.com/L472666235/halogen-womens-halogen-x-atlantic-pacific-stripe-blazer.jpg" alt="men clothng" />
                            <h5 className="productTitle">Plaid Jacket</h5>
                            <p className="price">$150.00</p>
                        </li>
                    </ul>        
                </div>
            </>
        )
    }
}
export default Women;