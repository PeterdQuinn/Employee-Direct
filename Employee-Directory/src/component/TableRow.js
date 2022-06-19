import React from "react";

function TableRow(props) {
    return (
        <tr>
               
               <div class="container-fluid  p-3 my-3 bg-dark text-white">
               <div class="row">
                    
            <td>
            <img src={props.picture.thumbnail} alt="image of employee"  className="img-thumbnail">
            
            </img>
            </td>
            
            <td>{props.name.first + " " + props.name.last}</td>
            <td>{props.email}</td>
            <td>{props.registered.age}</td>
            <td>{props.location.state}</td>
            <td>{props.phone}</td>
            </div>
            </div>
            
        </tr>
    )
}

export default TableRow;