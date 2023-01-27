import React from "react";
const   AllUserList = () => {
    let allUsers = [
        {
            name: "A",
            email: "a@gmail.com",
            phone: "9984786798",
        },
        {name: "B",
        email: "b@gmail.com",
        phone: "9984786748",
    }
    ];
    return (
        <div>
            <UserDetails  user ={ allUsers=[0]}/>
            <UserDetails  user = {allUsers=[1]}/>
        </div>
    );
};
export default AllUserList;
