import React from 'react'

const Table = () => {
   //const [user,setUser]=useState([]);

    const user = [
        
        {SNo:1 ,Name:"Hari", Email:"hari@gmail.com"},
        {SNo:2 ,Name:"Ravi", Email:"Ravi@gmail.com"},
        {SNo:3 ,Name:"Kavi", Email:"Kavi@gmail.com"},

    ]
    
  return (
    <div style={{padding:"10px"}}>
        <h1>CRUD</h1>
        <button>Add</button>
        <table border= "1" cellPadding="10" cellSpacing ="0">
            <thead>
            <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
            
        </thead>
       
      <tbody>
        {user.map((use)=>(
            <tr key={use.SNo}>
            <td>{use.SNo}</td>
            <td>{use.Name}</td>
            <td>{use.Email}</td>
            <td>{<button>Edit</button>}</td>
            <td>{<button>Delete</button>}</td>
            </tr>
            
        ))}
      </tbody>
       </table>
    </div>
  )
}

export default Table
