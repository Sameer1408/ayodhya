import { useEffect, useState } from "react";
import '../page/Home.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Slots = ({ setEnter,date,setDate,timing,setTiming,adults,setAdults,
    children,setchildren}) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [enterDetails, setEnterDetails] = useState(true);
 
    const options = [
        '05:00 - 5:30', '05:30 - 6:00', '06:00 - 6:30'
    ];

    const handleSlotSelect = (e) => {
        setTiming(e.value);
    }

    const handleCheckAvailability = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setMessage("Slots Available")
            setEnterDetails(false);
        }, [10])
    }

    return (
        <div >
            <h1>BOOK YOUR SLOT</h1>
            <div>
                <form>
                    <div class="mb-4">
                        {/* <label for="dateInput" class="form-label">Arrival Date</label> */}
                        <input type="date" id="dateInput" className="form-control" value={date} onChange={(e) => { setDate(e.target.value) }}></input>
                    </div>
                    <div class="mb-4">
                        {/* <label for="dateInput" class="form-label">Slot</label> */}
                        <Dropdown options={options} onChange={(e)=>{handleSlotSelect(e)}} value={timing} placeholder="Select time slot" />
                    </div>
                    <div class="mb-4">
                        {/* <label for="dateInput" class="form-label">Number of Adults (age above 14)</label> */}
                        <input type="number" className="form-control" value={adults} onChange={(e) => { setAdults(e.target.value) }} placeholder="Number of Adults (age above 14)" min="1"></input>
                    </div>
                    <div class="mb-4">
                        {/* <label for="dateInput" class="form-label">Number of children (age below 14)</label> */}
                        <input type="number" className="form-control" placeholder="Number of Children (age below 14)" value={children} onChange={(e) => { setchildren(e.target.value) }} min="0"></input>
                    </div>
                    <div id="info">
                        {message.length > 0 ? <p>{"Message: "}{" "}{message}</p> : null}
                    </div>
                </form>
                <button type="button" class="btn btn-outline-success" style={{ width: "100%" }} onClick={handleCheckAvailability}>
                    {loading ? "loading.. .." : "Check Availabilty"}</button>
                <button type="button" class="btn btn-outline-primary mt-2" style={{ width: "100%" }} disabled={enterDetails} onClick={() => setEnter(true)}>
                    Enter Details
                </button>
            </div>
        </div>
    );
}

export default Slots;