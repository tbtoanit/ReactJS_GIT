import { BrowserRouter, Link } from "react-router-dom"

function Header() {
    return (
        <div>
            {/* HEADER */}
            <header>
                {/* top Header */}
                <div id="top-header">
                    <div className="container">
                        <div className="pull-left">
                            <span>Welcome to E-shop!</span>
                        </div>
                        <div className="pull-right">
                            <ul className="header-top-links">
                                <li><a href="#">Store</a></li>
                                <li><a href="#">Newsletter</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li className="dropdown default-dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG <i className="fa fa-caret-down" /></a>
                                    <ul className="custom-menu">
                                        <li><a href="#">English (ENG)</a></li>
                                        <li><a href="#">Russian (Ru)</a></li>
                                        <li><a href="#">French (FR)</a></li>
                                        <li><a href="#">Spanish (Es)</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown default-dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">USD <i className="fa fa-caret-down" /></a>
                                    <ul className="custom-menu">
                                        <li><a href="#">USD ($)</a></li>
                                        <li><a href="#">EUR (€)</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /top Header */}
                {/* header */}
                <div id="header">
                    <div className="container">
                        <div className="pull-left">
                            {/* Logo */}
                            <div className="header-logo">
                                <a className="logo" href="#">
                                    <img src="./img/logo.png" alt="" />
                                </a>
                            </div>
                            {/* /Logo */}
                            {/* Search */}
                            <div className="header-search">
                                <form>
                                    <input className="input search-input" type="text" placeholder="Enter your keyword" />
                                    <select className="input search-categories">
                                        <option value={0}>All Categories</option>
                                        <option value={1}>Category 01</option>
                                        <option value={1}>Category 02</option>
                                    </select>
                                    <button className="search-btn"><i className="fa fa-search" /></button>
                                </form>
                            </div>
                            {/* /Search */}
                        </div>
                        <div className="pull-right">
                            <ul className="header-btns">
                                {/* Account */}
                                <li className="header-account dropdown default-dropdown">
                                    <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                                        <div className="header-btns-icon">
                                            <i className="fa fa-user-o" />
                                        </div>
                                        <strong className="text-uppercase">My Account <i className="fa fa-caret-down" /></strong>
                                    </div>
                                    <a href="#" className="text-uppercase">Login</a> / <a href="#" className="text-uppercase">Join</a>
                                    <ul className="custom-menu">
                                        <li><a href="#"><i className="fa fa-user-o" /> My Account</a></li>
                                        <li><a href="#"><i className="fa fa-heart-o" /> My Wishlist</a></li>
                                        <li><a href="#"><i className="fa fa-exchange" /> Compare</a></li>
                                        <li><a href="#"><i className="fa fa-check" /> Checkout</a></li>
                                        <li><a href="#"><i className="fa fa-unlock-alt" /> Login</a></li>
                                        <li><a href="#"><i className="fa fa-user-plus" /> Create An Account</a></li>
                                    </ul>
                                </li>
                                {/* /Account */}
                                {/* Cart */}
                                <li className="header-cart dropdown default-dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        <div className="header-btns-icon">
                                            <i className="fa fa-shopping-cart" />
                                            <span className="qty">3</span>
                                        </div>
                                        <strong className="text-uppercase">My Cart:</strong>
                                        <br />
                                        <span>35.20$</span>
                                    </a>
                                    <div className="custom-menu">
                                        <div id="shopping-cart">
                                            <div className="shopping-cart-list">
                                                <div className="product product-widget">
                                                    <div className="product-thumb">
                                                        <img src="./img/thumb-product01.jpg" alt="" />
                                                    </div>
                                                    <div className="product-body">
                                                        <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                                                        <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    </div>
                                                    <button className="cancel-btn"><i className="fa fa-trash" /></button>
                                                </div>
                                                <div className="product product-widget">
                                                    <div className="product-thumb">
                                                        <img src="./img/thumb-product01.jpg" alt="" />
                                                    </div>
                                                    <div className="product-body">
                                                        <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                                                        <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                    </div>
                                                    <button className="cancel-btn"><i className="fa fa-trash" /></button>
                                                </div>
                                            </div>
                                            <div className="shopping-cart-btns">
                                                <button className="main-btn">View Cart</button>
                                                <button className="primary-btn">Checkout <i className="fa fa-arrow-circle-right" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* /Cart */}
                                {/* Mobile nav toggle*/}
                                <li className="nav-toggle">
                                    <button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars" /></button>
                                </li>
                                {/* / Mobile nav toggle */}
                            </ul>
                        </div>
                    </div>
                    {/* header */}
                </div>
                {/* container */}
            </header>
            {/* /HEADER */}
        </div>
    )
}
function Navigation() {
    return (
        <div>
            {/* NAVIGATION */}
            <div id="navigation">
                {/* container */}
                <div className="container">
                    <div id="responsive-nav">
                        {/* category nav */}
                        <div className="category-nav show-on-click">
                            <span className="category-header">Categories <i className="fa fa-list" /></span>
                            <ul className="category-list">
                                <li className="dropdown side-dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women’s Clothing <i className="fa fa-angle-right" /></a>
                                    <div className="custom-menu">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                                <hr className="hidden-md hidden-lg" />
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                                <hr className="hidden-md hidden-lg" />
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row hidden-sm hidden-xs">
                                            <div className="col-md-12">
                                                <hr />
                                                <a className="banner banner-1" href="#">
                                                    <img src="./img/banner05.jpg" alt="" />
                                                    <div className="banner-caption text-center">
                                                        <h2 className="white-color">NEW COLLECTION</h2>
                                                        <h3 className="white-color font-weak">HOT DEAL</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#">Men’s Clothing</a></li>
                                <li className="dropdown side-dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Phones &amp; Accessories <i className="fa fa-angle-right" /></a>
                                    <div className="custom-menu">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                                <hr />
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                                <hr className="hidden-md hidden-lg" />
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                                <hr />
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 hidden-sm hidden-xs">
                                                <a className="banner banner-2" href="#">
                                                    <img src="./img/banner04.jpg" alt="" />
                                                    <div className="banner-caption">
                                                        <h3 className="white-color">NEW<br />COLLECTION</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#">Computer &amp; Office</a></li>
                                <li><a href="#">Consumer Electronics</a></li>
                                <li className="dropdown side-dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Jewelry &amp; Watches <i className="fa fa-angle-right" /></a>
                                    <div className="custom-menu">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                                <hr />
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                                <hr className="hidden-md hidden-lg" />
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                                <hr />
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                                <hr className="hidden-md hidden-lg" />
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                                <hr />
                                                <ul className="list-links">
                                                    <li>
                                                        <h3 className="list-links-title">Categories</h3></li>
                                                    <li><a href="#">Women’s Clothing</a></li>
                                                    <li><a href="#">Men’s Clothing</a></li>
                                                    <li><a href="#">Phones &amp; Accessories</a></li>
                                                    <li><a href="#">Jewelry &amp; Watches</a></li>
                                                    <li><a href="#">Bags &amp; Shoes</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#">Bags &amp; Shoes</a></li>
                                <li><a href="#">View All</a></li>
                            </ul>
                        </div>
                        {/* /category nav */}
                        {/* menu nav */}
                        <div className="menu-nav">
                            <span className="menu-header">Menu <i className="fa fa-bars" /></span>
                            <ul className="menu-list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/product">Product</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>

                            </ul>
                        </div>
                        {/* menu nav */}
                    </div>
                </div>
                {/* /container */}
            </div>
            {/* /NAVIGATION */}

        </div>
    )
}
function BreadCrumb() {
    return (
        <div>
            {/* BREADCRUMB */}
            <div id="breadcrumb">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li className="active">Blank</li>
                    </ul>
                </div>
            </div>
            {/* /BREADCRUMB */}
        </div>
    )
}
function Footer() {
    return (
        <div>
            {/* FOOTER */}
            <footer id="footer" className="section section-grey">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        {/* footer widget */}
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="footer">
                                {/* footer logo */}
                                <div className="footer-logo">
                                    <a className="logo" href="#">
                                        <img src="./img/logo.png" alt="" />
                                    </a>
                                </div>
                                {/* /footer logo */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                {/* footer social */}
                                <ul className="footer-social">
                                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                                </ul>
                                {/* /footer social */}
                            </div>
                        </div>
                        {/* /footer widget */}
                        {/* footer widget */}
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-header">My Account</h3>
                                <ul className="list-links">
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">My Wishlist</a></li>
                                    <li><a href="#">Compare</a></li>
                                    <li><a href="#">Checkout</a></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* /footer widget */}
                        <div className="clearfix visible-sm visible-xs" />
                        {/* footer widget */}
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-header">Customer Service</h3>
                                <ul className="list-links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Shiping &amp; Return</a></li>
                                    <li><a href="#">Shiping Guide</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* /footer widget */}
                        {/* footer subscribe */}
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-header">Stay Connected</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                <form>
                                    <div className="form-group">
                                        <input className="input" placeholder="Enter Email Address" />
                                    </div>
                                    <button className="primary-btn">Join Newslatter</button>
                                </form>
                            </div>
                        </div>
                        {/* /footer subscribe */}
                    </div>
                    {/* /row */}
                    <hr />
                    {/* row */}
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            {/* footer copyright */}
                            <div className="footer-copyright">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </div>
                            {/* /footer copyright */}
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </footer>
            {/* /FOOTER */}
        </div>
    )
}

export { Header, Navigation, BreadCrumb, Footer }