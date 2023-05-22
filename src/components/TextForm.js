import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const handleLowClick = () => {
        console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success")
    }
    const handleClearClick = () => {
        console.log("Clear Text was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared","success")
    }
    const handleCopyClick = () => {
        console.log("copy text" + text);
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied","success")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space is removed","success")
    }
    return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#071748':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <div className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</div>
        <div className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</div>
        <div className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</div>
        <div className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</div>
        <div className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>
    </>
  )
}
