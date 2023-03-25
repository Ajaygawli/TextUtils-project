import React, { useState } from 'react'

export default function TextArea(props) {
    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange= (event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const handleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleToClear= ()=>{
        let newText = ""
        setText(newText)
    }
    const removeExtraSpace =()=>{
        let newText= text.split(/[  ] +/)

        setText(newText.join(" "))
    }

    const [text , setText]= useState("")
  return (
    <>
    <div className='container' style={{color : props.mode==='dark' ? 'white' : '#042743'}}>
        <h1> {props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="12"  style={{backgroundColor : props.mode==='light'? 'white':'grey', color : props.mode==='dark' ? 'white' : '#042743'}}></textarea>
        <buttton className = "btn btn-primary my-2"   onClick = {handleUpClick}> Change to UpperCase</buttton>
        <buttton className = "btn btn-primary  mx-2 my-2"   onClick = {handleLoClick}> Change to LowerCase</buttton>
        <buttton className = "btn btn-primary  mx-0 my-2"   onClick = {handleToClear}> Clear Text</buttton>
        <buttton className = "btn btn-primary  mx-2 my-2"   onClick = {removeExtraSpace}> Remove Extra Space</buttton>
        {/* <form className="d-flex" >
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        </div>
    </div>
        <div className='container ' style={{color : props.mode==='dark' ? 'white' : '#042743'}} >
        <h1 className=''>Your text Summary is Here</h1>
        <p> {text.split(" ").length} Words and {text.length} Characters</p>
        <p>{.008*text.split(" ").length}  Minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter your text to Preview ......"}</p>
    </div>
    </>
  )
}
