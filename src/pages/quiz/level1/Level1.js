import "./Level1.css"
import PyLogo from "../../../assets/images/pylogo.png"
import { FaArrowLeft } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

export const Level1 = () => {
    return (
        <div className="quiz_page">
            <div className="quiz_header">
                <div className="quiz_header_left">
                    <i><FaArrowLeft /></i>
                    <span>Pydora</span>
                </div>
                <div className="quiz_header_progress">
                    <div className="quiz_header_progress_completed"
                        style={{ width: "30%" }}
                    ></div>
                </div>
                <div className="quiz_header_right">
                    <i><SiBookstack /></i>
                    <span>Creating Variables</span>
                </div>

            </div>
            <div className="quiz_content">
                <div className="quiz_content_theory">
                    <p>To create a variable, we need to give it a name. Variable names need to be single words and, therefore, have no spaces.</p>
                    <p>Type the variable name <span>health</span> to get started.</p>
                </div>
                <div className="quiz_ide">
                    <div className="quiz_ide_header">
                        <img src={PyLogo} alt="" />
                        <span>script.py</span>
                    </div>
                    <div className="quiz_ide_content">
                        <p>location = "Temple of Karnak"</p>
                        <p>
                            <input style={{width:"60px"}}/>
                        </p>
                    </div>
                </div>

            </div>
            <div className="quiz_footer">

            </div>
        </div>
    )
}