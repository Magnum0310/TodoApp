import React,{useEffect,useState} from "react"
import axios from "axios"



function EmployeeCheck(){

const [test,setTest] = useState([])
const [names,setName] = useState({
    fName:"",
    lName:"",
    Id:""
})

console.log(names)

// const createEmployee = {
//     firstName:names.fName,
//     lastName:names.lName,
//     id:names.Id
// }

// useEffect(()=>{
//     axios.get('http://localhost:3100/employee/all')
//     .then(users => users.data.map(element => {
//          setTest(prevValues =>{
//             return [...prevValues,element.firstName]})
//     }))
//     .catch(err=>console.log(err))
//     },[])     


const testPost = (e) =>{
    e.preventDefault();
    console.log(names.fName)
     axios.post('http://localhost:3100/employee/create',{
        firstName:names.fName,
        lastName:names.lName,
        id:names.Id
    },
    {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
      )
    .then(users => console.log("Posting Data " + users))
    .catch(err => console.log(err)),[]}

function updateNameField(event){
    const {name,value} = event.target
    setName(prevValues=>{
          return {...names,
        [name]:value}
    })
    console.log(value)

}

return(
    // test.map(element => {
    //     return <div>{element}</div>
    // })
    <form>
    <input type="text" name="fName" value={names.fName} placeholder="First Name" onChange={updateNameField}/>
    <input type="text" name="lName" value={names.lName}  placeholder="Last Name" onChange={updateNameField}/>
    <input type="text" name="Id" value={names.Id}  placeholder="Employee ID" onChange={updateNameField}/>
    <button onClick={testPost}>Test button</button>
    </form>

)


}

export default EmployeeCheck;