import pfp from "/src/img/cropped_image.png";
import "/src/css/root.css";

export default function Intro() {
    return (
        <div>
        <header className="App-header">
            <img src={pfp} className="App-logo" alt="profile"/>
            <h1 className="dundee-name ibm-plex-mono-regular">I'm Dundee</h1>
            <p className="website-intro">
                a{" "}
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="csText"
                    href="https://uwaterloo.ca/future-students/programs/computer-science"
                >
                    Computer Science
                </a>{" "}
                student at the{" "}
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="schoolText"
                    href="https://uwaterloo.ca"
                >
                    University of Waterloo
                </a>
            </p>
            <p className="website-intro">
                I am a developer who is passionate about pushing technology
                forward!
            </p>

            <ul className="social-cons">
                <li>
                    <a
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/dundeezhang/"
                        style={{
                            color: "black",
                            fontSize: "calc(10px + 2vmin)",
                        }}
                        target="_blank"
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a
                        rel="noreferrer"
                        href="https://github.com/dundeezhang"
                        style={{
                            color: "black",
                            fontSize: "calc(10px + 2vmin)",
                        }}
                        target="_blank"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a
                        rel="noreferrer"
                        href="mailto:dundeez124@gmail.com"
                        style={{
                            color: "black",
                            fontSize: "calc(10px + 2vmin)",
                        }}
                        target="_blank"
                    >
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                </li>
            </ul>
            <p className="ibm-plex-mono-regular resume resume-hover">
                <a
                    className="resume-hover"
                    href="https://drive.google.com/open?id=14zvMIgo9STMQjtpAS1jOZ2Qb2WOXWliS&usp=drive_fs"
                    target="_blank"
                    rel="noreferrer"
                >
                    --{">"} Resume {"<"}--
                </a>
            </p>
        </header>
    </div>
    );
  }