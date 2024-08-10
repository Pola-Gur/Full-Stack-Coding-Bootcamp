import React, {useState} from 'react';

const SumTwoNum = () => {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [summation, setSummation] = useState(0);

    function calculate() {
        setSummation(number1 + number2);
    }

    return (

       <div>
            <h2>Adding Two Numbers</h2>
            <input
                placeholder="First Number"
                type="number"
                value={number1}
                onChange={(ev) => setNumber1(+ev.target.value)}
            />
            <input
                placeholder="Second Number"
                type="number"
                value={number2}
                onChange={(ev) => setNumber2(+ev.target.value)}
            />
            <br />
            <button onClick={calculate}>Add Them!</button>
            <p>{summation || "0"}</p> 
        </div>
    );
}


export default SumTwoNum;