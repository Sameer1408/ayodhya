import QRCode from 'qrcode.react';
import './Ticket.css'
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const Ticket = ({ qrCodeRef, jsonString, ticketObj }) => {
    // console.log(ticketObj, "ticketObj")

    console.log(jsonString, "jsonString")
    const divRef = useRef(null);

    const handleDownloadPDF = () => {
        const container = divRef.current;

        if (container) {
            html2canvas(container).then((canvas) => {
                const image = canvas.toDataURL('image/jpeg');
                const link = document.createElement('a');
                link.href = image;
                link.download = 'downloaded-image.jpg';
                link.click();
            });
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }} ref={divRef}>
                <div id='qrDiv'>
                    <QRCode ref={qrCodeRef} value={jsonString} size={250} />
                </div>
                <div id='ticketDetails'>
                    <p>Date of Darshan : {ticketObj?.date}</p>
                    <p>Slot selected : {ticketObj?.timing}</p>
                    <p>Booked By : {ticketObj?.fullName}</p>
                    <p>Additional Number of Adults : {ticketObj?.adults}</p>
                    <p>Additional Number of Children : {ticketObj?.children}</p>
                </div>
            </div>
            <button type="button" class="btn btn-outline-dark" onClick={handleDownloadPDF}>Download Ticket</button>
        </div>
    )
}

export default Ticket;