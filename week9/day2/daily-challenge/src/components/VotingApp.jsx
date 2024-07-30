import {useState} from "react";

const VotingApp = (props) => {
    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaScript", votes: 0},
        {name: "Java", votes: 0}
      ]);
    
    const vote = (index) => {
        const newLanguages = [...languages];
        newLanguages[index].votes++;
        setLanguages(newLanguages)
    };

    return (
        <>
        <h1>Vote Your Language!</h1>
        {languages.map((item, index) => (
                <div key={index}>
                    {item.name} {item.votes}
                    <button onClick={() => vote(index)}>Click Here</button>
                </div>
            ))}
    </>
    );
};

export default VotingApp;