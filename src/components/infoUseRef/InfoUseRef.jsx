import React, { useRef, useState } from 'react';


function Parent() {
 const divRef = useRef(null)
 const inpRef = useRef(null)

 divRef.current ="aaaaa"
 const [text, setText]= useState('')

 console.log("log body");
 

 const updateInnerHtml = (value) => {
  divRef.current = value;
};
  return (
    <div>
      this is text  {divRef.current}
      <input ref = {inpRef} type="text" onChange={(e) => { updateInnerHtml(e.target.value)}} />
      <button onClick={() => updateInnerHtml()}>Search</button>
    </div>
  );
}

export default Parent;
