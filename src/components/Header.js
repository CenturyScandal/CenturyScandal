import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Header(){
    return(
        <div className="header">
            <div className="left">
                <Link className="site-logo" to="/">
                    Century Scandel
                </Link>
                
            </div>
            <div className="right">
                <div className="links">
                    
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="form">
                        Add Media
                    </Link>
                </div>
                {/* <div className="languages">
                    <p>
                        En
                    </p>
                    <p>
                        Ar
                    </p>
                </div> */}
                
            </div>
        </div>
    )
}