import dataJSON from "../../data/data.json";

function Example3() {
    return (
        <>
            {dataJSON.Experiences.map((experience, index) => (
                <div key={index}>
                     <h3>
                        <img src={experience.logo} alt="" />
                        {experience.roles.map((role, roleIndex) => (
                            <div key={roleIndex}>
                                {role.title} at <a href={experience.url}>{experience.companyName}</a>
                            </div>
                        ))}
                    </h3>
                    {experience.roles.map((role, roleIndex) => (
                        <div key={roleIndex}>
                            <p>{role.endDate} + {role.location}</p>
                            <p>{role.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}

// logo, companyName with url, title, endDate + location, description

export default Example3