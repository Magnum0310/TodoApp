import React,{useState} from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Zoom from '@mui/material/Zoom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Item(props){

    const [itemClicked,setItem] = useState(false)

    console.log(props.id)       
    return (
    <div className="itemList">
        <div className="itemTitle" onClick={()=>{setItem(!itemClicked)}}>{props.listItem} <ArrowForwardIosIcon className={itemClicked && "arrow"}/></div>
        {/* <p className="itemContent--active">{props.listContent}</p> */}
        <p className={itemClicked ? "itemContent--active" : "itemContent"}>{props.listContent}</p>
        <Zoom in={itemClicked}><button onClick={()=> props.deleteItem(props.id)} className={itemClicked ? "deleteButton--active" : "deleteButton"}><DeleteForeverIcon/></button></Zoom>
    </div>
    ) 
}

export default Item;                    