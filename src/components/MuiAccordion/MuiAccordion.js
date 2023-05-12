import "./MuiAccordion.css"
import { useState, useEffect } from 'react'

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdLock, MdExpandCircleDown } from "react-icons/md";
import { Lessons } from "./lessons";

import { Overlay } from "../overlay/Overlay";

export function MuiAccordion() {
    const [expanded, setExpanded] = useState('panel1');
    const [popupLevel, setPopupLevel] = useState(0)
    const [popupLevelData, setPopupLevelData] = useState(Lessons[0])


    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [open, setOpen] = useState(false)

    useEffect(() => {
    //   console.log("Changed")
    //   console.log(popupLevel)
    setPopupLevelData(Lessons[popupLevel])
    }, [popupLevel])
    

    const handleClickOpen = (no) => {
        setPopupLevel(no-1)
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    };

    //useStyles
    const accRoot = {
        backgroundColor: "#07263F",
        color: "#12ABFD",
        borderRadius: "15px",
        width: "700px",
    }

    const dialogRoot = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div className="accordion_container">
            {
                Lessons.map((lesson, lid) => {

                    let num = lesson.id

                    // disabled from level 3 onwards if num > 2
                    let isOpen = num > 10
                    return (
                        <Accordion key={lid} sx={accRoot} disableGutters disabled={isOpen ? true : false} className="mui_accordion" expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)}>
                            <AccordionSummary
                                expandIcon={isOpen ? <MdLock /> : <MdExpandCircleDown />}
                                aria-controls={`panel${num}a-content`}
                                id={`panel${num}a-header`}
                            >
                                <div className="mui_accordion_summary">
                                    <h1>{`Level ${num}`}</h1>
                                    <h2>{lesson.python_topic}</h2>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="mui_accordion_details">
                                    <img src={lesson.image} alt="" />
                                    <h2>{lesson.name}</h2>
                                    <div className="explore_btn" onClick={() => { handleClickOpen(lesson.id)}}>
                                        <div className="explore_btn_text">Explore</div>
                                        <div className="explore_btn_shadow"></div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            <Dialog
                fullScreen
                BackdropProps={{
                    style: {
                        background: "rgba(0,0,0,0.1)",

                    },
                }}
                open={open}>

                <DialogContent sx={dialogRoot}>
                    <Overlay
                        name={popupLevelData.name}
                        image={popupLevelData.image}
                        sublevels={popupLevelData.sublevels}
                        current_sl={popupLevelData.current_sl}
                        desc={popupLevelData.description}
                        handleClickClose={handleClickClose} />

                </DialogContent>
            </Dialog>

        </div >
    )
}