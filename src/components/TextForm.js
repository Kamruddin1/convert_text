import React, {useState}from 'react';

function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        // console.log("some thin chnage here1");
        console.log(text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleDwonClick = ()=>{
        // console.log("some thin chnage here1");
        console.log(text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("some thin chnage here");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container">
        <div className="form-group">
            <h1>{props.heading}</h1>
            <div className='mb-3'>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div> 
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleDwonClick}>Convert to UperCase</button>
        </div>
        </div> 
        <div className="container">
            <h1>your text Summary..</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{ 0.008 *text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>      
    );
}

export default TextForm;