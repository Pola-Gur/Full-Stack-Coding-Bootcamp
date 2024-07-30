import {useState} from "react";

const VotingApp = (props) => {
    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ]);
    
const vote = (index) => {
    const newLanguages = [...languages]
    languages[index].votes++
    satLanguages(languages)
};

return (
    <>
        <h1>Vote for...</h1>
        {languages.map((item.index) => {
            return (
                <div key={index}>
                    {item.name} {item.votes}
                    <button onClick={() => vote(index)}>Vote!</button>
                </div>
            )
        })}
    </>
)}

export default VotingApp