import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                To sort a list like scores, we code the list name, a dot ., and then <span>sort()</span>         
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>Sorting changes the list, so when we reuse or display the list with <span>print(scores)</span>, it will appear sorted.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>scores = [3, 6, 1, 12]</span>
                </p>
                <p>
                    <span>print(scores.</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>())</span>
                </p>
            </>
        ),
        answer: ["sort"]
    },
    {
        id: 3,
        type: "theory",
        message: (
            <>
                When using <span>sort()</span> on a list of numbers like scores, the numbers are sorted in ascending order 
                <br></br>
                Lists that have both float values like 9.99 and integers are also sorted based on their numeric values.     
            </>
        )
    },
    {
        id: 4,
        type: "theory",
        message: (
            <>
                When using <span>sort()</span> on a list of positive and negative numbers, the smallest number, goes first
                <br></br>
                When using <span>sort()</span> on a list of strings like names, the elements get sorted in alphabetical order.      
            </>
        )
    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
            <p>What does this display in the console?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>friend_requests = [3, 1, 2]</span> </p>
                <p> <span>friend_requests.sort()</span> </p>
                <p> <span>print(friend_requests)</span> </p>
            </>
        ),
        options: ["[3, 1, 2]", "[1, 2, 3]"],
        answer: 2

    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>What happens when we sort a list containing both float and integer values?</p>
            </>
        ),
        ide: false,
        options: ["The list elements are sorted according to their numeric value", "Half of the list will contain only integers, and the other half only"],
        answer: 1

    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
            <p>Which list element will come first in the sorted list?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>temperatures = [5, -5, -2, 3, 1]</span> </p>
                <p> <span>temperatures.sort()</span> </p>
                <p> <span>print(temperatures)</span> </p>
            </>
        ),
        options: ["-5", "-2"],
        answer: 1

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>How does <span>sort()</span> sort a list of strings?</p>
            </>
        ),
        ide: false,
        options: ["We can only use sort() on lists of numbers", "In alphabetical order"],
        answer: 2

    },
];


export default questions;

