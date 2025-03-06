export default function Input({ labelName, type, placeholder }) {
    return (
        <>
        <label>{labelName}</label>
        <input type={type} placeholder={placeholder}></input>
        </>
    )
}