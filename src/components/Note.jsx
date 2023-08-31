import React,{useState} from "react"
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Note(props){

    const [item,setItem] = useState({
        itemTitle:"",
        itemContent:""
    })

    function changeHandler(event){
        const {name,value} = event.target;

        setItem(prevItems=>{
            return {...item,[name]:value}
    })
    }

    function updateList(){
        console.log(item)
        props.add(item);
        setItem({
            itemTitle:"",
            itemContent:""
        })

    }

    function clickHandler(e){
       e.preventDefault();
    }

    return (    
        <form className="formBody" onSubmit={clickHandler}> 
            <input onChange={changeHandler} type="text" name="itemTitle" value={item.itemTitle} placeholder="Add title..."/>
            <input onChange={changeHandler} type="text" name="itemContent" value={item.itemContent} placeholder="Add item..."/>
            <Fab className="fabutton"><button className="addButton"onClick={updateList}><AddCircleOutlineOutlinedIcon /></button></Fab>
        </form>
      )

}

export default Note;