import React from "react";
import data from "../en-data";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

export default function Form() {
    const form = React.useRef();
    const info = data.formInfo;
    const navigate = useNavigate();
    const [status, setStatus] = React.useState("idle");

    const notify = () =>
        toast.success("The media was successfully sent for evaluation", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    const errorMessage = () =>
        toast.error("Something went wrong please try again", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("submitting");
        emailjs
            .sendForm(
                "service_f8pf09k",
                "template_ysetkgp",
                form.current,
                "WrWFdg75OQY0NnKlW"
            )
            .then(
                (result) => {
                    form.current.reset();
                    notify();
                    setTimeout(() => navigate("/"), 3000);
                },
                (error) => {
                    form.current.reset();
                    errorMessage();
                }
            )
            .finally(() => {
                setStatus("idle");
            });
    };
    return (
        <div className="form">
            <h1>Help us expose those criminals</h1>
            <h3></h3>
            <div className="form-content">

                <form ref={form} onSubmit={sendEmail} className="left">
                    <div>
                        <label htmlFor="link">{info.link[0]}:</label>

                        <input
                            type="url"
                            name="link"
                            namide="link"
                            placeholder={info.link[1]}
                            pattern="https://.*"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="desc">{info.desc[0]}:</label>

                        <textarea
                            placeholder={info.desc[1]}
                            name="desc"
                            id="desc"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="date">{info.date[0]}:</label>

                        <input
                            type="text"
                            name="date"
                            id="date"
                            placeholder={info.date[1]}
                        />
                    </div>
                    <div>
                        <label htmlFor="source">{info.source[0]}:</label>

                        <input
                            type="text"
                            name="source"
                            id="source"
                            required
                            placeholder={info.source[1]}
                        />
                    </div>

                    <button disabled={status === "submitting"}>
                        {" "}
                        {status === "submitting" ? "Sending..." : "Send"}
                    </button>
                </form>
                <div className="right">
                    <div>
                        <p>just two simple steps</p>
                        <ol>
                            <li> Fill the form:</li>
                            <ul>
                                <li>
                                    Enter your video/image link (can be from any social media app) , Description, In which event this video was taken, and source of the video in
                                    the form.
                                </li>
                            </ul>
                            <li>Evaluation and Publication:</li>
                            <ul>
                                <li>
                                    Once evaluated, if deemed legitimate, the media
                                    and description will be added to the website.
                                </li>
                            </ul>
                        </ol>
                    </div>
                </div>
            </div>
            <p className="thank-message">Thank you! Your contribution makes a difference.</p>

            <ToastContainer />
        </div>
    );
}
