import "./Overlay.css"
import Scroll from '../../assets/images/scroll.png'
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Overlay = (props) => {

    const navigate = useNavigate();

    function handleClick(i, current_sl) {
        if(i<=current_sl)
            navigate("/quiz/level1/1");
    } 

    const items = []
    for (let i = 1; i <= props.sublevels; i++) {
        items.push(<div key={`sl_item${i}`} 
                    className={i<=props.current_sl ? "item active" : "item"}
                    onClick={() => handleClick(i, props.current_sl)}>{i}</div>);
    }

    return (
        <div className="level_overlay">
            <div className="level_overlay_left">
                <i onClick={props.handleClickClose}>
                    <IoIosCloseCircle />
                </i>
                <img src={props.image} alt="" />
            </div>
            <div className="level_overlay_right">
                <div className="lor_title">{props.name}</div>
                <div className="lor_description">
                    {props.desc}
                </div>
                <div className="lor_levels">
                    {items}
                </div>
                <div className="common_btn">
                    <div className="common_btn_text">Project</div>
                    <div className="common_btn_shadow"></div>
                </div>
                <img src={Scroll} alt="" />
            </div>
        </div>
    )
}