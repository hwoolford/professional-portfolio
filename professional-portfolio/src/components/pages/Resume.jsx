import Download from "../Download"

export default function Resume() {
    return (
        <div className="container">
        <h1 className="text-center title">Resume</h1>
        <Download />
        <h2>Frontend</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
        </ul>
        <br />
        <h2>Backend</h2>
        <ul>
            <li>Node</li>
            <li>Express</li>
            <li>mySQL</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
        </ul>
        </div>
        )
}
