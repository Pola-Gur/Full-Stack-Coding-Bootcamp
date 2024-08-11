import dataJSON from "../../data/data.json";

function Example2() {
    const renderSkills = () => {
        return dataJSON.Skills.map((skillArea, index) => (
            <div key={index}>
                <h3>{skillArea.Area}</h3>
                <ul>
                    {skillArea.SkillSet.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill.Name} {skill.Hot && "🔥"}</li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <>
            {renderSkills()}
        </>
    );
}

export default Example2;



// function Example2 () {
//     return (
//         <>
//             {
//             if (dataJSON.Skills["area"] === "Programming Language") {
//                 dataJSON.Skills["area"].map(data => (
//                 <div key = {indexof(data)}>
//                     <li>{data[key]}</li>
//                 </div>
//             ))} else if (dataJSON.Skills["area"] === "Web-Based Application Development") {
//                 dataJSON.Skills["area"].map(data => (
//                 <div key = {indexof(data)}>
//                     <li>{data[key]}</li>
//                 </div>
//             ))
//             }
//             }
//         </>
   
//     })};
