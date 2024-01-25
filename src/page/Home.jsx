import { useEffect, useState,useRef } from "react";
import './Home.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Slots from "../components/Slots";
import UserDetails from "../components/UserDetails";
import Summary from "../components/Summary";
import Ticket from "../components/Ticket";
import Steps from "../components/Steps";

const Home = () => {

    const [enter, setEnter] = useState(false);

    const [date, setDate] = useState('');
    const [timing, setTiming] = useState('');
    const [adults, setAdults] = useState(null);
    const [children, setchildren] = useState(null);
    const [adharArr, setAdharArr] = useState(Array(adults+children).fill(''));
    const [fullName,setFullName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [adhar,setAdhar] = useState(null);
    const [qr,setQr] = useState(false);
    const [jsonString,setJsonString] = useState('');
    const [ticketObj,setTicketObj] = useState(null);

    const qrCodeRef = useRef(null);

    const bookSlot = ()=>{
        var obj = {
            date,timing,adults,children,fullName,phoneNumber,adharArr
        }
        setTicketObj(obj);
       setJsonString(JSON.stringify(obj));
       setQr(true);
    }


    return (
        <div style={{ position: "relative" }}>
            <div style={{ position: "relative", height: "100vh" }}>
                <div id="mainDivBanner">
                </div>
                <div id="main">
                    <div id="detailsForm">
                        {/*    <h1>BOOK YOUR SLOT</h1> */}
                        {!qr?
                        enter ?
                            <UserDetails  
                            adults={adults} 
                            children={children}
                            setEnter={setEnter} 
                            adharArr={adharArr}
                            setAdharArr={setAdharArr}
                            fullName={fullName}
                            setFullName={setFullName}
                            phoneNumber={phoneNumber}
                            setPhoneNumber={setPhoneNumber}
                            adhar={adhar}
                            setAdhar={setAdhar}
                            bookSlot={bookSlot}
                            />
                            :
                            <Slots 
                            date={date}
                            setDate={setDate}
                            timing={timing}
                            setTiming={setTiming}
                            adults={adults}
                            setAdults={setAdults}
                            children={children}
                            setchildren={setchildren}
                            setEnter={setEnter} 
                            />
                        :
                        <Ticket qrCodeRef={qrCodeRef} jsonString={jsonString}
                        ticketObj={ticketObj}
                        />
                    }

                    </div>
                </div>
            </div>
            <Steps/>
            <Summary />
            </div>
            )
}

export default Home;