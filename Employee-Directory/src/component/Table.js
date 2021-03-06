import React from "react";
import TableRow from "./TableRow";

function Table(props) {
    const sortTable = (event) => {
        const header = event.target.textContent
        props.sort(header);
    }
    return (


        <table className="table table table-Light justify-content-left">

            <thead>
                <tr>

                    <div class="container">
                        <div class="row">
                            <div class="col-sm-xl">


                                <th scope="col-"></th>
                                <th scope="col" onClick={sortTable}>Name</th>
                                <th scope="col" onClick={sortTable}>Email</th>
                                <th scope="col" onClick={sortTable}>Age</th>
                                <th scope="col" onClick={sortTable}>State</th>
                                <th scope="col" onClick={sortTable}>Phone</th>


                            </div>
                        </div>
                    </div>

                </tr>
            </thead>
            <tbody>

                {/* {this.state.friends.map((friend) => <FriendCard key={friend.id} removeFriend={this.removeFriend} {...friend} />)} */}
                {props.employees.map(((employee) => {
                    return <TableRow key={employee.login.uuid} {...employee} />
                }))}
            </tbody>
        </table>


    )
}

export default Table;