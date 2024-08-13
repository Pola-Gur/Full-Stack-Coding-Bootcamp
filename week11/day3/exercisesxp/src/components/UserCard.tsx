import React from "react";

function UserCard({name, age}: { name?: string, age?: number}): JSX.Element {
    if (name || age ) {
        return (
            <>
                <div>
                    {`Your name is ${name || "name"} and age is ${age || "age"}`}
                </div>
            </>
            )
    }
    return <div> "We have no idea about your age or name!" </div>
 }



export default UserCard;