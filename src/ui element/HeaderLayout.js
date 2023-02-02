import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './HeaderLayout.module.css'

const HeaderLayout = () => {
    return (
        <div className='container'>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            <Outlet />
        </div>
    );
};

export default HeaderLayout;