import React,{ useState } from 'react'



export default function TextForm(props) {
    const handleUpClick =() =>{
        
        let newText= text.toUpperCase();

        setText(newText);
        props.showAlert("converted to upper case!","success")



    }
    const handleOnChange=(event) => {
        setText(event.target.value);
        

    }
    const handleLoClick=() =>{
        let text2= text.toLowerCase();
        setText(text2);
        props.showAlert("converted to Lower case!","success")

    }
    const handleClearClick =() =>{
        setText('');
        props.showAlert("Text cleared","success")

    }
    const copyText=() =>{
        var text= document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("copy to clipboard!","success")

    }
     
        

    
    
    const [text, setText]= useState(" ");
    // setText("raj is hero");


  return (
      <>
      
    <div className="container" style={{Color: props.mode==="dark"?"white":"black"}} >
        
        <h2 className={`text-${props.mode==="dark"?"white":"dark"}`}>{props.heading}  </h2>
        <div className="mb-3" style={{backgroundColor: props.mode==="dark" ? "#031940":"white" }}>
        <label for="myBox" className={`form-label text-${props.mode==="dark"?"white":"black"}`}>Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==="dark"?"white":"black" }} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary m-2"  onClick={handleUpClick}>convert to upper case</button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>convert to lower case</button>

        <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear</button>
        <buttton className="btn btn-primary m-2" onClick={copyText}> Copy Text</buttton>

        </div>
    </div>
    <div className="container my-3" style={{backgroundColor: props.mode==="dark" ? "#031940":"white",color: props.mode==="dark"? "white": "black"}} >
        <h1>Your Text Summmary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <p>Number of lines= {text.split("\n").length}</p>

        <h2>Preview Here</h2>
        <p>{text.length>0?text:"Enter something in the Textbox to preview it here"}</p>
        

    </div>
    </>
  );   
}
