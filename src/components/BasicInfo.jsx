import { useState } from "react";

export default function BasicInfo() {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        
    };

    return (
        <div className="basic-info">
            <h2>Basic Information</h2>
            <form onSubmit={handleSubmit} className="basics-form">
                <label>First Name:</label>
                <input 
                    type="text"
                    placeholder="First Name"
                    className="fn-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <br></br>
                <label>Last Name:</label>
                <input 
                    type="text"
                    placeholder="Last Name"
                    className="ln-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <br></br>
                <label>Email:</label>
                <input 
                    type="email"
                    placeholder="Email Address"
                    className="em-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <br></br>
                <label>Phone Number:</label>
                <input 
                    type="tel"
                    placeholder="10-digit Phone Number"
                    className="tel-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <br></br>
                <button type="submit" className="sub-btn">Save</button>
            </form>
        </div>
    )
}