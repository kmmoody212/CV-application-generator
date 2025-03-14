// import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";

// create inputs for name, email, and phone number
// create a function for an input

export default function BasicInfo() {
    // const [value, setValue] = useState("");

    return (
        <>
        <Header headerText="Basic Information" />
        <Input labelName="First Name: " type="text" placeholder="First Name"/>
        <br></br>
        <Input labelName="Last Name: " type="text" placeholder="Last Name"/>
        <br></br>
        <Input labelName="E-mail Address: " type="email" placeholder="Email Address"/>
        <br></br>
        <Input labelName="Phone Number: " type="tel" placeholder="10-digit Phone Number"/>
        </>
    )
}