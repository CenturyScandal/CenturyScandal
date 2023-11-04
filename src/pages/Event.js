import React from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import sourceData from "../en-data";
import ReactPlayer from "react-player";

export default function Event() {
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, []);
    const location = useLocation();
    let id = location.pathname.split("&");
    const title = id[0].slice(1);
    const index = id[1];
    const event = sourceData.timeLine.find((element) => element.data === title);
    const data = event.events[index];
    const styles = {
        popup: {
            cursor: "default",
            opacity: ".5",
        },
    };
    const [searchParams, setSearchParams] = useSearchParams();
    const idFilter = searchParams.get("id") || 0;
    function handleFilterChange(key, value) {
        setSearchParams((prevParams) => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    }
    function handleSlideLeft() {
        let temp = parseInt(idFilter);
        if (temp > 0) {
            handleFilterChange("id", temp - 1);
        }
    }
    function handleSlideRight() {
        let temp = parseInt(idFilter);
        if (temp < data.media.length - 1) {
            handleFilterChange("id", temp + 1);
        }
    }
    const medias = data.media.map((media, index) => {
        let src = null;
        if (media.isVideo) {
            src = media.src.split(".");
            src = src[0] + "-img.png";
        } else {
            src = media.src;
        }
        return (
            <div
                className="img"
                onClick={() => handleFilterChange("id", index)}
            >
                <img src={require(`../data/intro/${src}`)} />
            </div>
        );
    });

    const resources = data.resources.map((element) => {
        return (
            <div className="links">
                <a href={element.link}>{element.name}</a>
            </div>
        );
    });
    return (
        <div className="event">
            <Link to=".." relative="path" className="back-button">
                &lt; <span>back to Home</span>
            </Link>
            <h2 className="title">{data.title}</h2>
            <p className="description">{data.desc}</p>
            <div className="resourses">
                <h3>Resources</h3>
                {resources}
            </div>
            {data.media[idFilter] && (
                <div className="viewer">
                    <span
                        className={`left`}
                        style={idFilter == 0 ? styles.popup : {}}
                        onClick={handleSlideLeft}
                    >
                        &lt;
                    </span>
                    {data.media[idFilter].isVideo ? (
                        <ReactPlayer
                            // playing
                            // muted
                            controls
                            // poster={`../data/intro/${
                            //     data.media[idFilter]?.src.split(".")[0] +
                            //     "-img.png"
                            // }`}
                            url={require(`../data/intro/${data.media[idFilter]?.src}`)}
                        />
                    ) : (
                        <img
                            src={require(`../data/intro/${data.media[idFilter]?.src}`)}
                        />
                    )}
                    <span
                        className="right"
                        onClick={handleSlideRight}
                        style={
                            idFilter == data.media.length - 1
                                ? styles.popup
                                : {}
                        }
                    >
                        {" "}
                        &gt;
                    </span>
                </div>
            )}

            <div className="imgs">{medias}</div>
        </div>
    );
}
