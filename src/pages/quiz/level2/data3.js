import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <p>We’ve already seen a few kinds of data like numbers and strings. In programming terms, these values are called <span>types</span>.</p>
            </>
        ),
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>Strings are characters between quotes <span>" "</span>, like the value <span>“High”</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <span>sugar_content = </span>
                    <input style={{ width: "80px" }} type="text" />
                </p>
            </>
        ),
        answer: ['"High"']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p><b>Integer</b> is another type we’ve already used. It represents whole numbers without decimals like <span>42</span>.</p>
                <p><b>Hint:</b> use<span>42</span> or <span>"42"</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>score = </span>
                    <input style={{ width: "40px" }} type="text" />
                </p>
            </>
        ),
        answer: ['42']
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p><b>Float</b> is another number type we use to describe numbers with one or more digits after the decimal point, like <span>3.14159</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>
                    <span>pi = </span>
                    <input style={{ width: "80px" }} type="text" />
                </p>
            </>
        ),
        answer: ['3.14159']
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>The type <b>boolean</b> contains only two values: the special values <span>True</span> and <span>False</span>. We’ll store the value <span>True</span> inside this variable.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p>
                    <span>received_newsletter = </span>
                    <input style={{ width: "50px" }} type="text" />
                </p>
            </>
        ),
        answer: ['True']
    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>When storing <span>False</span> in <span>is_on</span>, we say that we assign a value to a variable. </p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "60px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "60px" }} type="text" />
                </p>
            </>
        ),
        answer: ['is_on', '=', 'False']
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>What are values like booleans, strings, and numbers called?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['Types', 'Variables'],
        answer: 1
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>Which type is stored inside the <span>result</span> ?</p>

            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>result = 3.33</span> </p>
            </>
        ),
        options: ['A float', 'An integer'],
        answer: 1
    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
                <p>What are the boolean values?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['True and False', '"true" and "false"'],
        answer: 1
    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
                <p>What is a variable assignment?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['Storing a value inside a variable', 'Giving a variable a name'],
        answer: 1
    },
];


export default questions;

