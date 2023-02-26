import './Button.css';

export const Button = (props) => {
    return (
        <div className="common_btn">
            <div className="common_btn_text">{props.text}</div>
            <div className="common_btn_shadow"></div>
        </div>
    );
} 