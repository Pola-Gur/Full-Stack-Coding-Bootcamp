import dataJSON from "../../data/data.json"


function Example1 () {
    return (
        <>
            {dataJSON.SocialMedias.map((data, index) => (
                <li key={index}>
                    <a href={data}>{data}</a>
                </li>
            ))}
        </>
    )

};

export default Example1