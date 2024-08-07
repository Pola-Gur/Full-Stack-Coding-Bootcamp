import { useState } from "react";
import Button from "./Button";



const Counter = () => {
    const [count, setCount] = useState(0);

    if(count >5) {
        throw new Error("Crashed...!!!")
    }

    return (
        <>
            <h1>Counter</h1> {count}
            <Button setCount={setCount} count={count}/>
        </>
    )
}

export default Counter;