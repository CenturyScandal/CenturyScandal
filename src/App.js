import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Event from "./pages/Event"
import Form from "./pages/Form";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path=":id" element={<Event />} />
                    <Route path="form" element={<Form />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
