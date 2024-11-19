import React,{useState} from 'react'
export default function TextForm(props) {
const handleupperclick=()=>{
  console.log('UpperCase Button Cliked'+ text);
  let newText=text.toUpperCase();
  setText(newText);

}
const handlelowerclick=()=>{
  console.log('Lower Case Button Cliked'+ text);
  let newText=text.toLowerCase();
  setText(newText);

}
const handleclearclick=()=>{
  console.log('Clear Text Button Cliked');
  let newText="";
  setText(newText);

}
const handleonchange=(event)=>
{

  console.log("Text Area in Use");

  setText(event.target.value);
}

const [text,setText]=useState('');


  return (
    <div>
      <>
      
      <div className="container" >
<h1>Enter the Text to Alayze</h1>
<div className="mb-3">
  <label htmlFor="mybox" className="form-label"></label>
  <textarea className="form-control" onChange={handleonchange} value={text} id="mybox" rows="8"></textarea>
  <button className="btn btn-primary"  onClick={handleupperclick}>To UpperCase</button>
  <button className="btn btn-secondary"  onClick={handlelowerclick}>To LowerCase</button>
  <button className="btn btn-success"  onClick={handleclearclick}>Clear Text</button>

</div>
      </div>

      <div className="container">
<h1>Text Summary</h1>
<p className='sumry'>{text.split(" ").length} and {text.length} Characters</p>
<h3>Preview</h3>
<p>{text}</p>

      </div>
      </>


    </div>
  )
}



