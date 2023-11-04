import React from "react";
import data from "../en-data";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Home() {
    const [showPop, setShowPop] = React.useState(-1);
    function handleClick(index) {
        if (showPop === index) {
            setShowPop(-1);
        } else {
            setShowPop(index);
        }
    }
    const timeLine = data.timeLine.map((data, index) => {
        const pop = data.events.map((event, i) => {
            return (
                <div>
                    <h3>{event.title}</h3>
                    <Link to={data.data + "&" + i} className="link">
                        click for more details &gt;
                    </Link>
                </div>
            );
        });
        return (
            <div>
                <div
                    onClick={() => handleClick(index)}
                    className={`time ${showPop === index && "active"}`}
                >
                    {data.data}
                </div>
                {showPop === index && (
                    <div className="pop">
                        <span className="close" onClick={() => handleClick(-1)}>
                            X
                        </span>

                        {pop}
                    </div>
                )}
            </div>
        );
    });
    return (
        <div className="home">
            <h1 className="home-header">{data.header}</h1>
            {timeLine}
        </div>
    );
}
