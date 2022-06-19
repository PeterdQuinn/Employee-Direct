import React from "react";

function Search(props) {

    const searchFunction = (event)=>{
        const fullName = event.target.value.trim().toLowerCase();
        if(event.keyCode===8){
            props.searchFunction(fullName)
        }
        props.searchFunction(fullName);
    }
    return (
        <nav className="navbar navbar-light bg-success justify-content-left">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search by Name" aria-label="Search" onKeyUp={searchFunction}/>
            </form>
        </nav>
    )
}

export default Search;