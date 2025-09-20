import React, { useState } from 'react'

export default function Data() {
     const user = ["Gurpreet","Harjit","Simran","Manpreet","Navjot","Amrit","Baljit","Rajdeep","Parminder",
  "Sukhdeep","Harman","Jaspreet","Kamaljeet","Amandeep","Ravneet","Lovepreet","Inderjit","Prabhjot","Taranjeet",
  "Sandeep"
];

const [currentdata,setcurrentdata] = useState(1)
let userperpage = 5;

let userlastindex = currentdata * userperpage
let userstarindex = userlastindex - userperpage
let datauser = user.slice(userstarindex,userlastindex)
let totalpage = Math.ceil(user.length / userperpage)
let pagenumber = Array.from({length:totalpage},(_,i) => i+1)

let prebutton = ()=>{
    if(currentdata > 1){
        setcurrentdata(currentdata-1)
    }
}

let nextbutton = ()=>{
    if(currentdata < pagenumber.length){
        setcurrentdata(currentdata+1)
    }
}

return (
        <>
           <div className='dataonly'>
               {datauser.map((value,index)=>{
                    return(
                        <>
                           <ul key={index}>
                                <li >{userstarindex + index + 1}&nbsp;&nbsp;{value}</li>
                           </ul>
                        </>
                    )
               })}

           </div>
           <div  className='onlyfunction'>
                <button onClick={prebutton} disabled={currentdata === 1}>Previous</button>
               {
  pagenumber
    .filter(num => Math.abs(num - currentdata) <= 1)  
  //  {
    //   return (
    //     num === currentdata - 1 ||
    //     num === currentdata ||
    //     num === currentdata + 1 
          //this is logic for it
          //this is this is  is  for it some value 
    //   )
    // })
    .map(num => (
      <button
        key={num}
        onClick={() => setcurrentdata(num)}
        style={{ fontWeight: num === currentdata ? 'bold' : 'normal' }}
      >
        {num}
      </button>
    ))
}

                <button onClick={nextbutton} disabled={currentdata === 4}>Next</button>
           </div>
        </>
  )
}
