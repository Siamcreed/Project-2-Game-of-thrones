//To use change the value I have to use { useState }
import { useState } from "react" 


//I am exporting the function to so I can use it in other files. There are some variables that will be useful.
export default function Todoform(props) {
  const [newInfo, setnewInfo] = useState('')
  const [isEditing, setIsEditing] = useState(false);



  //Since everything is in a form I am have to use the prevent default so it doesn't reload.
  function handleAddinfo(e) {
    e.preventDefault();

    props.addinfo(newInfo);
    setnewInfo('');
  }

  function handleEditinfo(e) {
    e.preventDefault();
    props.edit(newInfo);
    setnewInfo("");
    setIsEditing(false);
  }

  
  function handleDeleteinfo(e) {
    e.preventDefault();
    props.deleteInfo();
    console.log(props)
  }

//This is the info displayed 
  return (
    <>  <h2>{isEditing ? "Edit info" : "Add some information"}</h2>
    <form onSubmit={isEditing ? handleEditinfo : handleAddinfo}>
      <input
        value={newInfo}
        onChange={(e) => setnewInfo(e.target.value)}
        placeholder={isEditing ? "Edit the info..." : "Add something new..."}
        required
      />
      {isEditing ? (
        <button type="submit">Save changes</button>
      ) : (
        <button type="submit">Add new info</button>
      )}
      {isEditing ? (
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit info</button>
      )}
      <button onClick={handleDeleteinfo}>Delete info</button>
    </form>
    </>
  )
}