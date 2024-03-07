import "../styles/download.css"
import "../../assets/resume2024.pdf"
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Download() {
    return (
        <div className="container">
        <a className="btn" href="/assets/resume2024.pdf" download="hwoolford-resume.pdf">Download Resume</a>
        </div>
    );
}