import { useEffect, useState } from "react";
import './Home.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Slots from "../images/components/Slots";

const Home = () => {

    return (
        <div style={{ position: "relative" }}>
            <div id="mainDivBanner">
            </div>
            <div id="main">
                <div id="detailsForm">
                    <h1>BOOK YOUR SLOT</h1>
                    <Slots/>
                </div>
            </div>
        </div>
    )
}

export default Home;