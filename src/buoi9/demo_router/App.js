import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                    <hr />
                    <Routes>
                        <Route path="/" element={<Home />}> </Route>
                        <Route path="/about" element={<About />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;