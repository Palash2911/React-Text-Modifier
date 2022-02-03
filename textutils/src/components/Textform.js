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
      var nt = document.getElementById('Mytext');
      nt.select();
      navigator.clipboard.writeText(nt.value)
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
        <button className="btn btn-success" onClick={upclick}>Convert to UpperCase</button>
        <button className="btn btn-dark mx-3" onClick={lowclick}>Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={revclick}>Reverse The Given Text</button>
        <button className="btn btn-warning mx-3" onClick={clearclick}>Clear The Given Text</button>
        <button className="btn btn-warning" onClick={copyclick}>Copy Text</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
          <h3>Your Text Summary !!</h3>
          <p>{text.split(" ").length -1} Words, {text.length} characters</p>
          <p>{0.008 * text.split("").length} Minutes To Read the Para</p>
    </div>
    </>
  )
}
