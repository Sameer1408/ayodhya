import { useEffect, useState } from "react";

const UserDetails = ({
    adults, 
    setEnter ,
    adharArr,
    setAdharArr,
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    adhar,
    setAdhar,
    bookSlot,
    children
}) => {

    var totalInputs = Number(adults)+ Number(children);

    const handleInputChange = (index, value) => {
        const newadharArr = [...adharArr];
        newadharArr[index] = value;
        setAdharArr(newadharArr);
    };


    return (
        <div>
            <h1>Enter Details</h1>
            <form>
                <div class="mb-4">
                    {/* <label for="dateInput" class="form-label">Arrival Date</label> */}
                    <input type="text" id="name"  className="form-control" placeholder="Enter Your Full Name" value={fullName}
                    onChange={(e)=>setFullName(e.target.value)}
                    ></input>
                </div>
                <div class="mb-4">
                    {/* <label for="dateInput" class="form-label">Arrival Date</label> */}
                    <input type="number" id="phone" className="form-control" placeholder="Enter Your Phone Number"
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    ></input>
                </div>
                <div class="mb-4">
                    {/* <label for="dateInput" class="form-label">Arrival Date</label> */}
                    <input type="file" id="adhar" className="form-control" placeholder="Upload Your Adhar Card"
                    // value={adhar}
                    onChange={(e)=>setAdhar(e.target.files[0])}
                    ></input>
                </div>
                <p>Details of other devotees (adults and children)</p>
                <div className="mb-4" style={{maxHeight:"150px",overflow:"auto"}}>
                    {Array.from({ length: totalInputs }).map((_, index) => (
                          <div class="mb-4">
                        <input
                            key={index}
                            type="text"
                            value={adharArr[index]}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            placeholder={`devotee ${index + 1}`}
                            className="form-control"
                        />
                        </div>
                    ))}
                </div>
            </form>
            <button type="button" class="btn btn-outline-warning mt-2" style={{ width: "100%" }} onClick={() => { setEnter(false) }}>
                Back                </button>
            <button type="button" class="btn btn-outline-primary mt-4" style={{ width: "100%" }} onClick={bookSlot}>
                Book Slot
            </button>
        </div>
    )
}

export default UserDetails;