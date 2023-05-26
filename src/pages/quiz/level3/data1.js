import React from "react";

const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <p>Smart programs use <b>booleans</b> to make decisions on whether to run lines of code or to skip them.</p>
            </>
        ),
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>We use an <b>if statement </b> to write code that adapts to different situations.We recognize it by the keyword <span>if</span>. </p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "20px" }} type="text" />
                    <span>True:</span>
                    
                </p>
                <p>&emsp; print ( "Hello!" )</p>
            </>
        ),
        answer: ['if']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>The if statement runs code only if the boolean it's relying on is <span>True</span>. It's like saying, if something is true, then do this.</p>
                <p><span>"Hello!"</span>will display in the console if we set the boolean value to <span>True</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>if</span>
                    <input style={{ width: "45px" }} type="text" />
                    <span>:</span>
                </p>
                <p><span>&emsp; print( "Hello!" )</span></p>
            </>
        ),
        answer: ['True']
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>Values like <span>True</span> are called <b>conditions</b>. Statements relying on conditions are called <b>conditionals</b>.</p>
                <p>Conditions decide if the code runs or gets skipped. They come in betweeen <span>if</span>and the colon<span>:</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>  <input style={{ width: "20px" }} type="text" />
                <input style={{ width: "45px" }} type="text" />
                <input style={{ width: "20px" }} type="text" />
                </p>

                <p><span>&emsp; print ("Hello!" )</span>                </p>
            </>
        ),
        answer: ['if','True',':']
    },
     {
        id: 5,
        type: "mcq",
        question: (
            <>
                <p>What does this code display in the console?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>if True:</span></p>
                <p><span>&emsp; print(" 3 2 1 GO" )</span></p>
            </>
        ),
        options: ['Nothing because the code block gets skipped ', '3 2 1 GO'],
        answer: 2
    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>What does this code display in the console?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>if False:</span></p>
                <p><span>&emsp; print("To display or not to display")</span></p>
            </>
        ),
        options: ['Nothing because the code block gets skipped ', 'To display or not to display'],
        answer: 1
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>What are the values that decide whether a code block runs or not ?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['Strings', 'Conditions'],
        answer: 2
    },
    {
        id: 8,
        type: "theory",
        message: (
            <>
                <p>If statements don't decide on skipping or running the entire code. They only make decisions about the <b>code block</b>.</p>
            </>
        ),
    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
              <p>We use an <b>indentation of two spaces</b> to highlight code blocks, like how we indented the display statement two spaces to the right.</p>
              <p><b>Hint: </b>print <span>"Hey there!"</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
            <p>if True:</p>
                <p>
                   &emsp; <input style={{ width: "150px" }} type="text" />
                </p>
            </>
        ),
        answer: ['print("Hey there!")']
    },
    {
        id: 10,
        type: "theory",
        message: (
            <>
                <p>A code block can be more than a one-liner. All lines with the same indentation belong to the same code block.</p>
            </>
        ),
    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
            <p>Instead of using the boolean<span>True</span>, we can save it in a variable like <span>greet</span> and use it as a condition.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p><span>greet = True</span></p>
                <p>
                    <span>if</span>
                    <input style={{ width: "50px" }} type="text" />
                    <span>:</span>
                </p>
                <p>&emsp; print("Hello!")</p>
            </>
        ),
        answer: ['greet']
    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
                <p>What do we call the code lines indented two spaces away compared to the if statement?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['Code block','If statement'],
        answer: 1
    },
    {
        id: 13,
        type: "mcq",
        question: (
            <>
                <p>How do we know that <span>print("Low battery") </span> is not inside the if statement?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                 <p><span>is_charged = False</span></p>
                <p><span>if is_charged:</span></p>
                <p>&emsp;<span>print ("Charged")</span></p>
                <p><span>print("Low battery")</span></p>
            </>
        ),
        options: ["Because the if statement can't have more lines in its code block","Because of its indentation"],
        answer: 2
    },
    {
        id: 14,
        type: "mcq",
        question: (
            <>
               <p>What is the maximum number of lines that a code block can have?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['As many as we want','One'],
        answer: 1
    },
];


export default questions;

