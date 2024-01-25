import bookSlot from '../images/bookSlot.svg'
import './Steps.css'

const Steps = () => {
    return (
        <div class="container">
            <h1>Steps To Follow</h1>
            <div class="row">
                <div class="col stepDiv">
                    <img src={bookSlot} />
                </div>
                <div class="col stepDiv">
                    <h2>Book Slot</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat provident eos praesentium obcaecati illo laudantium reiciendis, nisi doloremque aperiam explicabo dolor expedita ullam, dolore error.laudantium reiciendis, nisi doloremque aperiam explicabo dolor expedita ullam, dolore errorlaudantium reiciendis, nisi doloremque aperiam explicabo dolor expedita ullam, dolore .</p>
                </div>
            </div>
            <div class="row">
                <div class="col stepDivT">
                    <h2>Get Priority Entry at your selected Time </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat provident eos praesentium obcaecati illo laudantium reiciendis, nisi doloremque aperiam explicabo dolor expedita ullam, dolore error.laudantium reiciendis, nisi doloremque aperiam explicabo dolor expedita ullam.
                    </p>
                </div>
                <div class="col stepDiv">
                    <img src={bookSlot} />
                </div>
            </div>
            <div class="row">
                <div class="col stepDiv">
                    <img src={bookSlot} />
                </div>
                <div class="col stepDiv">
                    <h2>Attain Arti and take Prashad By Showing Ticket</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat provident eos praesentium obcaecati illo laudantium reiciendis, nisi doloremque aperiam explicabo dolor expedita ullam, dolore error.laudantium reiciendis, nisi doloremque aperiam explicabo dolor expedita ullam.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Steps;