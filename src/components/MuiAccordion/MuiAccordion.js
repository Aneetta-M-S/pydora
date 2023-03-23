import "./MuiAccordion.css"
import { useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdLock, MdExpandCircleDown } from "react-icons/md";
import { Lessons } from "./lessons";

export function MuiAccordion() {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="accordion_container">
            {
                Lessons.map(lesson => {

                    let num = lesson.id

                    // disabled from level 3 onwards
                    let isOpen = num > 2
                    return (
                        <Accordion disabled={isOpen ? true : false} className="mui_accordion" expanded={expanded === `panel${num}`} onChange={handleChange(`panel${num}`)}>
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
                                    <div class="explore_btn">
                                        <div class="explore_btn_text">Explore</div>
                                        <div class="explore_btn_shadow"></div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    )
                }
                )
            }
            {/* <Accordion className="mui_accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<MdExpandCircleDown />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className="mui_accordion_summary">
                        <h1>Accordion 1</h1>
                        <h2>Accordion 1</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mui_accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<MdExpandCircleDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <div className="mui_accordion_summary">
                        <h1>Accordion 1</h1>
                        <h2>Accordion 1</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mui_accordion" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<MdExpandCircleDown />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <div className="mui_accordion_summary">
                        <h1>Accordion 1</h1>
                        <h2>Accordion 1</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mui_accordion" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<MdExpandCircleDown />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <div className="mui_accordion_summary">
                        <h1>Accordion 1</h1>
                        <h2>Accordion 1</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mui_accordion" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<MdExpandCircleDown />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <div className="mui_accordion_summary">
                        <h1>Accordion 1</h1>
                        <h2>Accordion 1</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mui_accordion" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<MdExpandCircleDown />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                >
                    <div className="mui_accordion_summary">
                        <h1>Accordion 1</h1>
                        <h2>Accordion 1</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mui_accordion" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<MdExpandCircleDown />}
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                >
                    <div className="mui_accordion_summary">
                        <h1>Accordion 1</h1>
                        <h2>Accordion 1</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mui_accordion" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                    expandIcon={<MdExpandCircleDown />}
                    aria-controls="panel8a-content"
                    id="panel8a-header"
                >
                    <div className="mui_accordion_summary">
                        <h1>Accordion 1</h1>
                        <h2>Accordion 1</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mui_accordion" expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary
                    expandIcon={<MdExpandCircleDown />}
                    aria-controls="panel9a-content"
                    id="panel9a-header"
                >
                    <div className="mui_accordion_summary">
                        <h1>Accordion 1</h1>
                        <h2>Accordion 1</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="mui_accordion" expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary
                    expandIcon={<MdExpandCircleDown />}
                    aria-controls="panel10a-content"
                    id="panel10a-header"
                >
                    <div className="mui_accordion_summary">
                        <h1>Accordion 1</h1>
                        <h2>Accordion 1</h2>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion> */}
        </div>
    );
}