export default function Button({ text, color, fontSize }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    );
}

// import to App() {
//     return (
//        <div>
//         <Button text="Edit" color="gray" fontSize={12} />
//         <Button text="Submit" color="green" fontSize={14} />
//        </div>
//     );
//    }