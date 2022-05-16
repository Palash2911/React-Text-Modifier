import React from 'react'

export default function About(props) {

  return (
    <div className="container mx-2">
      <h1 className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>About This Website</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={{backgroundColor: props.mode==='dark'?'#012a4a':'white' , color: props.mode==='dark'?'white':'#343a40'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#495057':'white' , color: props.mode==='dark'?'white':'black'}}>
       TextUtils is an Amazing Website Created in React for Users to modify their text according to their needs and wants
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==='dark'?'#01497c':'white' , color: props.mode==='dark'?'white':'#343a40'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free To Use Website</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#495057':'white' , color: props.mode==='dark'?'white':'black'}}>
        TextUtils is a Free to use, Text Editor Available on My GitHub. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==='dark'?'#2a6f97':'white' , color: props.mode==='dark'?'white':'#343a40'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#495057':'white' , color: props.mode==='dark'?'white':'black'}}>
        TextUtils is Browser Compatible as well as responsive website made for users to edit their text on Computer as well as Mobile phones. 
      </div>
    </div>
  </div>
  </div>
</div>
  )
}

