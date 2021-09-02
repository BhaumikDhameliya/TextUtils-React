import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked.");
        // let newText = text.toUpperCase();
        setText(text.toUpperCase())
        props.showAlert("converted to uppercase", "success")
    }
    const handleLowClick = () =>{
        setText(text.toLowerCase())
        props.showAlert("converted to lowercase", "success")
    }
    const handleClearClick = () =>{
        setText("")
        props.showAlert("textbox cleared", "success")
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard", "success")
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra space has been removed", "success")
    }

    // text = "new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state 
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className = "mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#16276b':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
                <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{(0.008 * text.split(" ").length).toFixed(3)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
                </div>
        </>
    )
}

TextForm.prototypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "heading goes here"
}

