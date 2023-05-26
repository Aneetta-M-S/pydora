import React from "react";

const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <p>To make smarter decisions in our programs, we need <span>if</span> statements that rely on smarter conditions.</p>
            </>
        ),
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>A program uses the <span>==</span> operator to check if a user's <span>answer</span> is correct.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p><span>answer = "Picasso"</span></p>
                <p>
                    <span>if answer </span>
                    <input style={{ width: "30px" }} type="text" />
                    <span>"Picasso":</span>
                    
                </p>
                <p>&emsp; print (answer + "is correct!") </p>
            </>
        ),
        answer: ['==']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>We can use <span>!=</span> to check if <span>answer</span> is not equal to <span>"Picasso"</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <span>answer = "Matisse"</span>
                <p>
                    <span>if answer</span>
                    <input style={{ width: "30px" }} type="text" />
                    <span>"Picasso":</span>
                </p>
                <p><span>&emsp; print( answer + "is wrong!" )</span></p>
            </>
        ),
        answer: ['!=']
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>To use the result of a comparison multiple times, we can store it in a variable like <span>pass_grade</span> and use the variable as a condition.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p><span>score = 51</span></p>
                <p><span>pass_grade = score &gt; 50</span></p>
                <p>
                    <span>if </span>
                    <input style={{ width: "100px" }} type="text" />
                    <span> : </span>
                </p>
                <p><span>&emsp; print (pass_grade)</span>                </p>
            </>
        ),
        answer: ['pass_grade']
    },
     {
        id: 5,
        type: "mcq",
        question: (
            <>
                <p>Why do we use comparisons with if statements ?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['To always run the if statement block','To make smarter decisions about running or skipping code'],
        answer: 2
    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>What do we use comparisons with <span>==</span> for ?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['Skipping or running code depending on whether two values are the same ','Always running code since a comparison with == always returns True'],
        answer: 1
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>Which operator can we use to make comparisons for if statement conditions ?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['>=, <=, >, <, == and !=','Only == and !='],
        answer: 1
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>Which  of these types can we compare using <span>==</span> in conditions ?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['Integers, floats, strings and boolens','Only integers and strings'],
        answer: 1
    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
             <p>Code a condition that runs the code if <span>replay_times</span> is greater than or equal to <span>300</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
            <p><span>song = "Don't stop me now "</span></p>
            <p><span>replay_times = 345</span></p>
                <p>
                    <span>if</span>
                    <input style={{ width: "110px" }} type="text" />
                    <input style={{ width: "30px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <span>:</span>
                </p>
                <p>&emsp;<span>print ("Your top song this week: ")</span></p>
                <p>&emsp;<span>print(song)</span></p>
            </>
        ),
        answer: ['replay_times','>=','300']
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
             <p>Code a condition to suggest a restaurant if the user's <span>diet</span> equals <span>vegetarian</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
            <p><span>diet = "vegetarian"</span></p>
            <p><span>veggie_restaurant = "Root"</span></p>
            <p><span>restaurant = "DelPosto"</span></p>
                <p>
                    <span>if diet</span>
                    <input style={{ width: "30px" }} type="text" />
                    <input style={{ width: "100px" }} type="text" />
                    <span>:</span>
                </p>
                <p>&emsp;<span>print ("Try out: ")</span></p>
                <p>&emsp;<span>print(veggie_restaurant)</span></p>
            </>
        ),
        answer: ['==','"vegetarian"']
    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
            <p>Use <span>!=</span> as a condition to run the code block if <span>today</span> isn't <span>"Saturday"</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>
            <p><span>today = "Sunday"</span></p>
                <p>
                    <span>if </span>
                    <input style={{ width: "80px" }} type="text" />
                    <span>"Saturday" :</span>
                </p>
                <p>&emsp;<span>print("Set alarm at 8:00")</span></p>
            </>
        ),
        answer: ['today !='],
    },
    
    
];


export default questions;

