import React from 'react';
import "./Exercise.css"

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise = (props) => {
  const {  } = props;
  return (
    <><h1 style={style_header
        // {
        // color: "red",
        // backgroundColor: "lightblue",
        // }
        }>Some h1 tag</h1>
    <p className="para">Some paragraph tag</p>
    <a href="http://google.com"></a>
    <form>
        <input type="text" placeholder='your input'/>
    </form>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-Vflu7wU6ZvARA2W3Eb4nH1i_lOwkVlrnQ&s"/>
    <ul>
        <li>first li</li>
        <li>second li</li>
        <li>third li</li>
    </ul>
    </>
);
}

  export default Exercise;