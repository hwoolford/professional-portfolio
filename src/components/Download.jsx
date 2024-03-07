import "../styles/download.css"
import "../../assets/resume2024.pdf"

export default function Download() {
    return (
        <div className="container">
        <a className="btn" href="/assets/resume2024.pdf" download="hwoolford-resume.pdf">Download Resume</a>
        </div>
    );
}