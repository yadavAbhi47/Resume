
import { Dot } from "lucide-react";
import { data } from "../constant/data"
import { useRef, useState, useEffect } from "react";


const textSize = "16px"

const Resume = () => {
    return (
        <div
        style={{
            margin: "2rem"
        }}
        >
        <Heading />

            <SectionHeading
                heading="Professional Summary"
            />
            <ProffessionsalSummary />

            
            <SectionHeading
                heading="Technical Skills"
            />
            <TechnicalSkills />

            <SectionHeading
                heading="Projects"
            />
            <Projects />

            {data.certifications.length > 0 &&
                <SectionHeading
                    heading="Certifications"
                />}

            {data.certifications.length > 0 && <Certifications />}


            <SectionHeading
                heading="Education & Qualifications"
            />
            <EducationsAndQualifications />



        </div>
    )
}

const Projects = () => {
    return (
        <div
            style={{
                fontSize: textSize,
                textAlign: "justify",
            }}
        >

            {
                data.projects.map((Project, index) => (
                    <div key={index}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            <h4>
                                <span>{Project.title}</span>
                                <a
                                    href={Project.link}
                                    style={{
                                        color: "rgb(70, 69, 150)"
                                    }}
                                >[LINK]</a>
                            </h4>
                            <p><i>{Project.time}</i></p>
                        </div>
                        <div>
                            {Project.points.map((point, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        alignItems: "start"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "30px",
                                            height: "10px"
                                        }}
                                    >
                                        <Dot style={{
                                            color: "rgb(70, 69, 150)",
                                            fontSize: "24px"
                                        }}
                                        />
                                    </div>
                                    <p>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

const Certifications = () => {
    return (
        <div
            style={{
                fontSize: textSize,
                textAlign: "justify",
            }}
        >
            {
                data.certifications.map((cert, index) => (
                    <div key={index}
                        style={{
                            display: "flex",
                            alignItems: "start"
                        }}
                    >
                        <div
                            style={{
                                width: "30px",
                                height: "10px"
                            }}
                        >
                            <Dot style={{
                                color: "rgb(70, 69, 150)",
                                fontSize: "24px"
                            }}
                            />
                        </div>
                        <div>
                            <span>{cert.title}</span>
                            {cert.link !== "" && <a href={cert.link} style={{
                                marginLeft: "4px",
                                color: "rgb(70, 69, 150)"
                            }}>[LINK]</a>}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const TechnicalSkills = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "-5px",
            fontSize: textSize,
            textAlign: "justify",
        }}
        >
            {data.technicalSkills.map((skill, index) => (
                <div key={index}
                    style={{
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            width: "30px",
                            height: "10px"
                        }}
                    >
                        <Dot style={{
                            color: "rgb(70, 69, 150)",
                        }}
                            size={24}
                        />
                    </div>
                    <div>
                        <span style={{
                            fontWeight: "bold"
                        }}>{skill.title} : </span>
                        <span>{skill.skills}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}


const EducationsAndQualifications = () => {
    return (
        <div style={{
            fontSize: textSize,
        }}>
            {
                data.educationAndQualification.map((edu, index) => (
                    <div key={index} style={{
                        display: "flex",
                        alignItems: "start"
                    }}>
                        <div
                            style={{
                                width: "30px",
                                height: "10px"
                            }}
                        >
                            <Dot style={{
                                color: "rgb(70, 69, 150)",
                            }}
                            />
                        </div>
                        <div style={{
                            width: "100%",
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%"
                            }}>
                                <p >
                                    <span style={{
                                        fontWeight: "bold"
                                    }}>{edu.degree} </span>
                                    <span>{edu.branch} </span>
                                </p>
                                <p><i>{edu.time}</i></p>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%"
                            }}>
                                <p>{edu.institute}</p>
                                <p><i>{edu.result}</i></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const ProffessionsalSummary = () => {
    return (
        <p
            style={{
                fontSize: textSize,
                textAlign: "justify",
            }}
        >{data.proffesionalSummary}</p>
    )
}

const SectionHeading = ({ heading }: { heading: string }) => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const [lineWidth, setLineWidth] = useState("0px");

    useEffect(() => {
        if (headingRef.current) {
            const headingWidth = headingRef.current.offsetWidth;
            setLineWidth(`calc(100% - ${headingWidth + 2}px)`);
        }
    }, [heading]);

    return (
        <div style={{ position: "relative" }}>
            <h3 ref={headingRef} style={{
                display: "inline-block",
                margin: 0,
                color: "rgb(70, 69, 150)"
            }}>
                {heading}
            </h3>
            <div
                style={{
                    height: "1px",
                    width: lineWidth,
                    backgroundColor: "black",
                    position: "absolute",
                    right: "0",
                    bottom: "6px"
                }}
            ></div>
        </div>
    );
};



const Heading = () => {

    const isImage = data.ProfilePic.trim() !== "";

    return (
        <div style={{
            display: "flex",
            justifyContent: isImage ? "space-between" : "center",
            alignContent: "center",
            gap: "16px",
            marginBottom: !isImage ? "2rem" : ""
        }} >
            <div
                style={{
                    display: !isImage ? "flex" : "",
                    flexDirection: "column",
                    gap: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: !isImage ? "center" : "start",
                    fontSize: textSize,
                }}
            >
                <h2
                    style={{
                        fontFamily: "Carlito"
                    }}
                >{data.name}</h2>
                <p >{data.location}</p>
                <div style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
                >
                    {
                        data.socialMedia.map((item, index) => (
                            <div key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                }}
                            >
                                <a
                                    href={item.link}

                                    style={{
                                        color: "rgb(70, 69, 150)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px"
                                    }}
                                >{item.icon} {item.title} </a>
                                {index !== data.socialMedia.length - 1 && "| "}
                            </div>
                        ))
                    }
                </div>
            </div>
            {isImage && <div>
                <img
                    src={data.ProfilePic}
                    alt="Profile Picture"
                    style={{
                        height: "7rem",
                        width: "6rem",
                        objectFit: "cover",
                        borderRadius: "4px"
                    }}
                />
            </div>}
        </div>
    )
}


export default Resume