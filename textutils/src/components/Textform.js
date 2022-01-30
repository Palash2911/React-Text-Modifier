import React, {useState} from 'react'

export default function Textform(props) {

    const upclick = ()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
    }
    const lowclick = ()=>{
      let newtext=text.toLowerCase();
      settext(newtext)
    }
    const revclick = ()=>{
      let newtext=text.split("").reverse();
      let newt = newtext.join("")
      settext(newt)
    }
    const onchange = (event)=>{
        settext(event.target.value)
    }
    const clearclick = (event)=>{
        settext('')
    }
    // You cant update things in react like that, you just use settext("blabla") and now text is assigned with blabla
    const[text, settext] = useState('')

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="Mytext" rows="6" onChange={onchange} placeholder='Enter Text'></textarea>
        </div>
        <button className="btn btn-success" onClick={upclick}>Convert to UpperCase</button>
        <button className="btn btn-dark mx-3" onClick={lowclick}>Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={revclick}>Reverse The Given Text</button>
        <button className="btn btn-warning mx-3" onClick={clearclick}>Clear The Given Text</button>
    </div>
    <div className="container my-4">
          <h3>Your Text Summary !!</h3>
          <p>{text.split(" ").length -1} Words, {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes To Read the Para</p>
    </div>
    </>
  )
}
