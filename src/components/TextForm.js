import React, {useState}from 'react';

function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpClick = ()=>{
        // console.log("some thin chnage here1");
        console.log(text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("some thin chnage here");
        setText(event.target.value);
    }
    return (
        <div className="form-group">
            <h1>{props.heading}</h1>
            <div className='mb-3'>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div> 
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UperCase</button>
        </div>       
    );
}

export default TextForm;