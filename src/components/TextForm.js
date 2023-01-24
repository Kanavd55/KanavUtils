import React,{ useState} from "react";

export default function TextForm(props){
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClearClick=()=>{
        let newText="";
        setText(newText);
    }

    const handleReClick = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
      };

    const [text,setText]=useState('');
    return(
        <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter your text here" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReClick}>Reverse</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes required to read above words</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
}