import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);   
    }
    const handleLpClick = () =>{
        let newlowerText = text.toLowerCase();
        setText(newlowerText);
    }
    const handleRemoveClick = () =>{
        let newremoveText = '';
        setText(newremoveText);
    }
    const handleOnChange = (event) => {
        console.log("Handle on change clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <div className="mb-3 mt-5 container">
                <h2>{props.heading}</h2>

                <textarea className="form-control" id="myBox" rows="4" value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-primary mt-4" onClick={handleUpClick}>Convert to upperCase</button>
                <button className="btn btn-primary mt-4 ms-4" onClick={handleLpClick}>Convert to lowerCase</button>
                <button className="btn btn-primary mt-4 ms-4" onClick={handleRemoveClick}>Remove Text</button>
            </div>
        </div>

    )
}
