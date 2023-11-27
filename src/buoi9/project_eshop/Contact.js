import React, { Component } from 'react';
import { Header, Navigation, BreadCrumb, Footer } from './CommonComponent'
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/nouislider.min.css';
import './css/slick-theme.css';
import './css/slick.css';
import './css/style.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Navigation></Navigation>
                <BreadCrumb></BreadCrumb>
                {/* section */}
                <div className="section">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            Contact
                        </div>
                        {/* /row */}
                    </div>
                    {/* /container */}
                </div>
                {/* /section */}
                <Footer></Footer>
            </div>

        );
    }
}

export default Contact;