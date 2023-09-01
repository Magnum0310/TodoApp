import React,{useEffect,useState} from "react"
import Heading from "./Heading"
import Note from "./Note"
import Item from "./Item"
import Header from "./Header"
import Footer from "./Footer"
import EmployeeCheck from "./EmployeeCheck"

function App(){

    const [item,setItem] = useState([])

    function addItem(newItem){
        setItem(prevItems =>{
            return [...prevItems,newItem]
        });
    }   
    
    function removeItem(itemIndex){
        console.log("Item removed!")
        setItem(prevItems=>{
            return (prevItems.filter((items,index)=> {return index !== itemIndex}))
        })
    }
    
    return(
    <div className="container">   
        <div className="listBody">
            <Header />
            <Heading />
            <EmployeeCheck />
            <Note add={addItem}/>
            <div className="itemBody">
                {/* <Item listItem ={"First Title"} listContent={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, quasi! Error laudantium laboriosam aut delectus."}/> */}
                {item.map((element,index)=>{
                return (<Item
                    key={index}
                    id={index}
                    listItem = {element.itemTitle}
                    listContent = {element.itemContent}
                    deleteItem = {removeItem}
                />)
                })}
            </div>
        </div> 
        <Footer/>
    </div>)
    }


export default App;