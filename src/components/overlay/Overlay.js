import "./Overlay.css"
import JadeScarab from '../../assets/images/level1/map.png'
import Scroll from '../../assets/images/scroll.png'

export const Overlay = () => {
    return (
        <div class="level_overlay">
            <div class="level_overlay_left">
                <div class="close_btn">x</div>
                <img src={JadeScarab} alt="" />
            </div>
            <div class="level_overlay_right">
                <div class="lor_title">Jade Scarab Island</div>
                <div class="lor_description">
                    You have been transported back in time to Ancient Egypt. You are
                    approached by Pharaoh Akhenaten who needs your help to recover a stolen
                    artifact, the Jade Scarab. Jade Scarab is a powerful tool that was used by
                    the ancient Egyptians to write programs that could automate tasks in their
                    daily lives. Are you in for the quest?
                </div>
                <div class="lor_levels">
                    <div class="item active">1</div>
                    <div class="item">2</div>
                    <div class="item">3</div>
                    <div class="item">4</div>
                </div>
                <div class="common_btn">
                    <div class="common_btn_text">Project</div>
                    <div class="common_btn_shadow"></div>
                </div>
                <img src={Scroll} alt="" />
            </div>
        </div>
    )
}