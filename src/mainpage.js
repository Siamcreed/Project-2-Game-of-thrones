import Todoform from './Todoform';
import React, { useState } from 'react';
import './mainpage.css';

export default function MainPage(){
    const [Character, setCharacter] = useState("");
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(false);
  const [fatherselected, setfatherSelected] = useState(false);
  // const [nselected, nsetSelected] = useState(false);
  const [gselected, gsetSelected] = useState(false);
  const [cselected, csetSelected] = useState(false);
  const [bselected, bsetSelected] = useState(false);
  const [dselected, dsetSelected] = useState(false);
  // const [tselected, tsetSelected] = useState(false);
  const [aselected, asetSelected] = useState(false);
  const [mselected, msetSelected] = useState(false);
  const [sselected, ssetSelected] = useState(false);
  const [alselected, alsetSelected] = useState(false);
  const [boselected, bosetSelected] = useState(false);
  const [tvselected, tvsetSelected] = useState(false);
  const [pselected, psetSelected] = useState(false);
  // const [adselected, adsetSelected] = useState(false);

  // const [isediting, setIsediting] = useState(false);


  function deleteAllInfo() {
    setCharacter({
      height: "",
      titles: "",
      gender: "",
      culture: "",
      born: "",
      died: "",
      aliases: "",
      mother: "",
      spouse: "",
      allegiances: "",
      books: "",
      tvSeries: "",
      playedBy: ""
    });
  }
  

//I will add extra information by calling on the objects above and using a spread operator and I am also console loggin it for checking
  function addinfo(info){
    setCharacter({...Character, height: info});
    console.log(info)
}

function editinfo(info){
  setCharacter({...Character, height: info});
  console.log(info)
}

function deleteInfo(index) {
  const newInfoList = {...Character}
  newInfoList.height = ""
  setCharacter(newInfoList);
}

function deletefather(index) {
  const newInfoList = {...Character}
  newInfoList.titles = ""
  setCharacter(newInfoList);
}

function deletegender(index) {
  const newInfoList = {...Character}
  newInfoList.gender = ""
  setCharacter(newInfoList);
}

function deleteculture(index) {
  const newInfoList = {...Character}
  newInfoList.culture = ""
  setCharacter(newInfoList);
}

function deleteborn(index) {
  const newInfoList = {...Character}
  newInfoList.born = ""
  setCharacter(newInfoList);
}


function deletedied(index) {
  const newInfoList = {...Character}
  newInfoList.died = ""
  setCharacter(newInfoList);
}

function deleteali(index) {
  const newInfoList = {...Character}
  newInfoList.aliases = ""
  setCharacter(newInfoList);
}

function deletemother(index) {
  const newInfoList = {...Character}
  newInfoList.mother = ""
  setCharacter(newInfoList);
}

function deletespouse(index) {
  const newInfoList = {...Character}
  newInfoList.spouse = ""
  setCharacter(newInfoList);
}

function deletealig(index) {
  const newInfoList = {...Character}
  newInfoList.allegiances = ""
  setCharacter(newInfoList);
}

function deletebook(index) {
  const newInfoList = {...Character}
  newInfoList.books = ""
  setCharacter(newInfoList);
}


function deletetv(index) {
  const newInfoList = {...Character}
  newInfoList.tvSeries = ""
  setCharacter(newInfoList);
}

function deleteactor(index) {
  const newInfoList = {...Character}
  newInfoList.playedBy = ""
  setCharacter(newInfoList);
}
// function deleteall(index) {
//   delete newInfoList.height 
// }




//This variable will allow me to edit the information being displayed
const [isEditing, setIsEditing] = useState(false);
// const Edit = () => {
//   setIsEditing(!isEditing);
// }
{isEditing ? (
  <Todoform addinfo={addinfo} editinfo={editinfo} />
) : (
  <>
    <h2>{Character.name}</h2>
    <p>Gender: {Character.gender}</p>
    {/* Rest of the character info */}
  </>
)}


 //This variable will let me clear a specific item
//  function markItem(props) {
//   const Marked = {...Character}
//   const Mark = Marked
//  }
// //This one will help me clear all the items
//  const Clear_All = () =>{

//  }

 function handleBtnClick() {
  setSelected(!selected);
}
//This is the fucntion that allows me to fetch the data from my api.
  const handleClick = () => {
    //This url has all the game of thrones characters and it depends of the number at the end of the 
    fetch('https://anapioficeandfire.com/api/characters/583')
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => setError(error));
  }
  console.log(Character)
  //This this is the info that will be displayed. It is the object be called and the keys of the object from the api. The info will change depending on the url
//}
return(
    <>
    <div>
      <h1>Game of thrones characters</h1>
      <h2>Name: {Character.name}</h2>
      {error && <p>{error.message}</p>}
      <button onClick={handleClick}>Get Character Info</button>
      {Character && (



        <div>
          {/* <h2>Gender: {Character.gender}</h2> */}
          {   <div>
          {gselected ? (
            
            <p className={"selected"}>Gender: {Character.gender}</p>
          ) : (
            <p><strong>Gender:</strong> {Character.gender}</p>
          )}

          <button onClick={()=>gsetSelected(!gselected)}>Select</button>
          <button onClick={deletegender}>Delete</button>
        </div>}


<div>
          {/* <h2>Culture: {Character.culture}</h2> */}
          {   <div>
          {cselected ? (
            <p className={"selected"}>Culture: {Character.culture}</p>
          ) : (
            <p><strong>Culture:</strong> {Character.culture}</p>
          )}

          <button onClick={()=>csetSelected(!cselected)}>Select</button>
          <button onClick={deleteculture}>Delete</button>
          <button onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Cancel" : "Edit"}
            </button>
        </div>}
</div>

          
          

          <div>
          {/* <h2>Birth: {Character.born}</h2> */}
          {   <div>
          {bselected ? (
            <p className={"selected"}>Birth: {Character.born}</p>
          ) : (
            <p><strong>Birth:</strong> {Character.born}</p>
          )}

          <button onClick={()=>bsetSelected(!bselected)}>Select</button>
          <button onClick={deleteborn}>Delete</button>
        </div>}
</div>

          
          
<div>
          {/* <h2>Death: {Character.died}</h2> */}
          {   <div>
          {dselected ? (
            <p className={"selected"}>Death: {Character.died}</p>
          ) : (
            <p><strong>Death</strong>: {Character.died}</p>
          )}

          <button onClick={()=>dsetSelected(!dselected)}>Select</button>
          <button onClick={deletedied}>Delete</button>
        </div>}
        </div>
         
          {   <div>
          {fatherselected ? (
            <p className={"selected"}>Title: {Character.titles}</p>
          ) : (
            <p><strong>Title:</strong> {Character.titles}</p>
          )}

          <button onClick={()=>setfatherSelected(!fatherselected)}>Select</button>
          <button onClick={deletefather}>Delete</button>
        </div>}

          
<div>
          {/* <h2>Aliases: {Character.aliases}</h2> */}
          {   <div>
          {aselected ? (
            <p className={"selected"}>Aliases: {Character.aliases}</p>
          ) : (
            <p><strong>Aliases:</strong> {Character.aliases}</p>
          )}

          <button onClick={()=>asetSelected(!dselected)}>Select</button>
          <button onClick={deleteali}>Delete</button>
        </div>}
          </div>
          <div>
          {/* <h2>mselected: {Character.mother}</h2> */}
          {   <div>
          {mselected ? (
            <p className={"selected"}>Mother: {Character.mother}</p>
          ) : (
            <p> <strong>Mother:</strong> {Character.mother}</p>
          )}

          <button onClick={()=>msetSelected(!mselected)}>Select</button>
          <button onClick={deletemother}>Delete</button>
        </div>}
</div>
          
          <div>
          {/* <h2>sselected: {Character.spouse}</h2> */}
          {   <div>
          {sselected ? (
            <p className={"selected"}>Spouse: {Character.spouse}</p>
          ) : (
            <p><strong> Spouse:</strong> {Character.spouse}</p>
          )}

          <button onClick={()=>ssetSelected(!sselected)}>Select</button>
          <button onClick={deletespouse}>Delete</button>
        </div>}
</div>
          
          
<div>
          {/* <h2>alselected: {Character.allegiances}</h2> */}
          {   <div>
          {alselected ? (
            <p className={"selected"}>Aligencies: {Character.allegiances}</p>
          ) : (
            <p> <strong>Aligencies:</strong> {Character.allegiances}</p>
          )}

          <button onClick={()=>alsetSelected(!alselected)}>Select</button>
          <button onClick={deletealig}>Delete</button>
        </div>}
</div>
          
<div>

  
          {/* <h2>boselected: {Character.books}</h2> */}
          {   <div>
          {boselected ? (
            <p className={"selected"}>Books: {Character.books}</p>
          ) : (
            <p><strong> Books:</strong> {Character.books}</p>
          )}

          <button onClick={()=>bosetSelected(!boselected)}>Select</button>
          <button onClick={deletebook}>Delete</button>
          
        </div>}
</div>
          
          <div>
          {/* <h2>tvselected: {Character.tvSeries}</h2> */}
          {   <div>
          {tvselected ? (
            <p className={"selected"}>Tv-series: {Character.tvSeries}</p>
          ) : (
            <p> <strong>Tv-series:</strong> {Character.tvSeries}</p>
          )}

          <button onClick={()=>tvsetSelected(!tvselected)}>Select</button>
          <button onClick={deletetv}>Delete</button>
        </div>}

          
          <div>
          {/* <h2>pselected: {Character.playedBy}</h2> */}
          {   <div>
          {pselected ? (
            <p className={"selected"}>Played-by: {Character.playedBy}</p>
          ) : (
            <p> <strong>Played-by:</strong> {Character.playedBy}</p>
          )}

          <button onClick={()=>psetSelected(!pselected)}>Select</button>
          <button onClick={deleteactor}>Delete</button>
          
        </div>}
          
          {   <div>
          {selected ? (
            <p className={"selected"}>Adittional info: {Character.height}</p>
          ) : (
            <p><strong>Adittional info:</strong> {Character.height}</p>
          )}

          <button onClick={handleBtnClick}>Select</button>
        </div>}
       
        </div>
      
        <button onClick={deleteAllInfo}>Delete All</button>

     
      <Todoform  addinfo={addinfo} edit={editinfo} deleteInfo={deleteInfo} />
    </div>
    </div>
      )} 
      </div>
    </>
  );
  
      
          }