import React, { useState } from 'react'

export default function Forms(props) {
    //uppercase

    const handleUpClick=()=>{
        // console.log("uppercase is clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase","success");
    }
    // lowercase button

    const handledownClick=()=>{

        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase","success");
    }
    // reset button

    const handleresetClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Reset","success");
    }

const handleOnChange=(event)=>{

setText(event.target.value);

}
const[text,setText]=useState('Enter text here');

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
        <label htmlFor="box" className="form-label"><h2>{props.titlehead}</h2></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#00001a':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="5"></textarea>'
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handledownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleresetClick}>Reset</button>
      
        </div>
    

    <div className="container my-3 "style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{ return element.length!==0 }).length} words and {text.length} character</p>
        <p>time required to read the text :{0.008*text.split(" ").length}miniutes</p>
        <p>Preview: {text.length>0?text:"Enter any text to preview it here"}</p>
    </div>
    </div>
    </>
  )
}
