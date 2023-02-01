import React,{ useState} from "react";

export default function TextForm(props){
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to UPPERCASE","success");
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to lowercase","success");
    }

    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("text has been cleared","success");
    }

    const handleCopyText=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to clipboard","success");
    }

    const handleReClick = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
        props.showAlert("Text has been reversed","success");
      };

    const [text,setText]=useState('');
    return(
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <textarea  style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(52 101 145)':'white'}} className="form-control" placeholder="Enter your text here" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleReClick}>Reverse</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((a)=>{return a.length!==0}).length} words & {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((a)=>{return a.length!==0}).length} Minutes required to read above words</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
    )
}