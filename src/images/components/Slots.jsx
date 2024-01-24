import { useEffect, useState } from "react";
import '../../page/Home.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Slots = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [enterDetails, setEnterDetails] = useState(true);

    const options = [
        '05:00 - 5:30', '05:30 - 6:00', '06:00 - 6:30'
    ];


    const handleSlotSelect = () => {

    }

    const handleCheckAvailability = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setMessage("Slots Available")
            setEnterDetails(false);
        }, [1500])
    }
    return (
        <div>
            <form>
                <div class="mb-4">
                    {/* <label for="dateInput" class="form-label">Arrival Date</label> */}
                    <input type="date" id="dateInput" className="form-control"></input>
                </div>
                <div class="mb-4">
                    {/* <label for="dateInput" class="form-label">Slot</label> */}
                    <Dropdown options={options} onChange={handleSlotSelect} value={""} placeholder="Select time slot" />
                </div>
                <div class="mb-4">
                    {/* <label for="dateInput" class="form-label">Number of Adults (age above 14)</label> */}
                    <input type="number" className="form-control" placeholder="Number of Adults (age above 14)" min="1"></input>
                </div>
                <div class="mb-4">
                    {/* <label for="dateInput" class="form-label">Number of Childrens (age below 14)</label> */}
                    <input type="number" className="form-control" placeholder="Number of Childrens (age below 14)" min="0"></input>
                </div>
                <div id="info">
                    {message.length > 0 ? <p>{"Message: "}{" "}{message}</p> : null}
                </div>
            </form>
            <button type="button" class="btn btn-outline-success" style={{ width: "100%" }} onClick={handleCheckAvailability}>
                {loading ? "loading.. .." : "Check Availabilty"}</button>
            <button type="button" class="btn btn-outline-primary mt-2" style={{ width: "100%" }} disabled={enterDetails}>
                Enter Details
            </button>
        </div>
    );
}

export default Slots;