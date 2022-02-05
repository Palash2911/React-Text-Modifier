import React, {useState} from 'react'

export default function Textform(props) {

    const upclick = ()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
        props.showAlert("Converted to Upper Case !!", "success")
    }
    const lowclick = ()=>{
      let newtext=text.toLowerCase();
      settext(newtext)
      props.showAlert("Converted to Lower Case !!", "success")
    }
    const revclick = ()=>{
      let newtext=text.split("").reverse();
      let newt = newtext.join("")
      settext(newt)
      props.showAlert("Given Text Reversed !!", "success")
    }
    const onchange = (event)=>{
        settext(event.target.value)
    }
    const clearclick = (event)=>{
        settext('')
        props.showAlert("Cleared Text !!", "success")
    }
    const copyclick = (event)=>{
      navigator.clipboard.writeText(text)
      props.showAlert("Copied to Clipboard !!", "success")
  }
    // You cant update things in react like that, you just use settext("blabla") and now text is assigned with blabla(these are called state variables)
    const[text, settext] = useState('')

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="Mytext" rows="6" onChange={onchange} placeholder='Enter Text' style={{backgroundColor: props.mode==='dark'?'#495057':'white' , color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={upclick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={lowclick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={revclick}>Reverse The Given Text</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={clearclick}>Clear The Given Text</button>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={copyclick} style={{color: 'white'}}>Copy Text To Clipboard</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
          <h3>Your Text Summary !!</h3>
          {/* \s+ checks any white spaces that is whether it is a new line or space in middle */}
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, {text.length} characters</p>
          <p>{0.008 * text.split("").length} Minutes To Read the Para</p>
    </div>
    </>
  )
}
