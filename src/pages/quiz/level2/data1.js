import React from "react";

const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
            We can use comparisons to check if a number is less than or greater than another number.
            </>
        ),
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                     <p>       To check if a number is less than another number, we use the <b>less-than operator</b>  <span>&lt;</span>. </p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <span>1</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>90</span>
                </p>
            </>
        ),
        answer: ['<']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>If the number on the left is less than the number on the right, like in <span>1 &lt; 235</span>, the result is <span>True</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>print(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ['1','<','235']
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>To check if a number is greater than another number, we use the <b>greater-than operator</b>,<span> &gt; </span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>
                    <span>print( 101 </span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>90 )</span>
                </p>
            </>
        ),
        answer: ['>']
    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
                <p>What do we use the <span>&gt;</span> operator for ?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['The less-than operator', 'The greater-than operator'],
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
                <p> <span>print ( 1 &lt; 1 )</span> </p>
            </>
        ),
        options: ['True', 'False'],
        answer: 2
    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
               <p>Make this code display <span>True</span> in the console.</p>
               <p><b>Hint:</b> <span>use the greater-than operator</span></p>
           </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p>
                    <span>print ( 10</span>
                    <input style={{ width: "50px" }} type="text" />
                    <span> 9 )</span>
                </p>
            </>
        ),
        answer: ['>']
    },
    {
        id: 8,
        type: "code",
        theory: (
            <>
            <p>To check if a number is less than or equal to another number, we use the <b>less-than-or-equal-to operator</b>,<span>&lt;= </span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p>
                    <span>print ( 1 </span>
                    <input style={{ width: "40px" }} type="text" />
                   <span> 3 ) </span>
                </p>
            </>
        ),
        answer: ['<=']
    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
            <p>If the number on the left is less than or equal to the number on the right, like in <span> 11 &lt;= 11</span>, the result is <span>True</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>
                <p>
                    <span>print ( </span>
                    <input style={{ width: "25px" }} type="text" />
                    <input style={{ width: "25px" }} type="text" />
                    <input style={{ width: "25px" }} type="text" />
                    <span> ) </span>
                </p>
            </>
        ),
        answer: ['11','<=','11']
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>To check if a number is greater than or equal to another number, we use the <b>greater-than-or-equal-to operator </b>, <span> &gt;=</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 7,
        ide_content: (
            <>
                <p>
                    <span>print ( 3099 </span>
                    <input style={{ width: "25px" }} />
                    <span> 3099 )</span>
                </p>
            </>
        ),
        answer: ['>=']
    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
                <p>To store the result of a comparison in a variable, we use the <span>=</span> sign.</p>
                <p><b>Hint:</b> use  <span>=</span> , <span>&lt;=</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 8,
        ide_content: (
            <>
                <p>
                    <span>result </span>
                    <input style={{ width: "25px" }} />
                    <span> 1 </span>
                    <input style={{ width: "25px" }} />
                    <span> 15</span>
                </p>
                <p><span>print ( result )</span></p>
            </>
        ),
        answer: ['=','<=']
    },
    {
        id: 12,
        type: "code",
        theory: (
            <>
            <p>We can also use a comparison operator to compare a variable with another variable, like in <span> min &lt;= max</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 9,
        ide_content: (
            <>
            <p><span>min = 5</span></p>
            <p><span>max = 10</span></p>
                <p>
                    <span>result = </span>
                    <input style={{ width: "45px" }} />
                    <input style={{ width: "25px" }} />
                    <input style={{ width: "45px" }} />
                </p>
                <p>print ( result )</p>
            </>
        ),
        answer: ['min','<=','max']
    },
    {
        id: 13,
        type: "mcq",
        question: (
            <>
            <p>Which operator do we need to check if a number is at least <span>21</span>?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['>=', '=='],
        answer: 1
    },
    {
        id: 14,
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
            <p><span> print ( 10 &gt;= 10 )</span></p>
            </>
        ),
        options: ['True', 'False'],
        answer: 1
    },
    {
        id: 15,
        type: "code",
        theory: (
            <>
              <p>Store the result of points <span>&gt;= 10 </span> in the <span >level_two</span> variable . </p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 10,
        ide_content: (
            <>
                <p>
                  <span>points = 12</span>
                </p>
                <p>
                    <span>level_two = points </span>
                    <input style={{ width: "25px" }} type="text" />
                    <span>10 </span>
                </p>
                <p>
                    <span>print ( "Level 2: " )</span>
                </p>
                <p><span>print(level_two)</span></p>
            </>
        ),
        answer: ['>=']
    }
];


export default questions;

