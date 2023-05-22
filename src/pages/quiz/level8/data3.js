import React from "react";


const questions = [
    {
        id: 1,
        type: "code",
        theory: (
            <>
                <p>Giving functions descriptive names like <span>get_final_price</span> helps us know at a glance what they do.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>def </span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>(price, tax):</span>
                </p>
                <p>
                    <span>&emsp;return price + tax</span>
                </p>
            </>
        ),
        answer: ["get_final_price"]

    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>Functions that return values often start with verbs like get as in get_telephone, compute, or calculate like calculate_sum.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 2,
        ide_content: (
            <>
                <p>
                    <span>def </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>_telephone(prefix, number):</span>
                </p>
                <p>
                    <span>&emsp;return prefix + number</span>
                </p>
            </>
        ),
        answer: ["get"]

    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>As a special case, functions that return boolean values often start with is.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    <span>def </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>_freezing(temperature):</span>
                </p>
                <p>
                    <span>&emsp;return temperature == 0</span>
                </p>
            </>
        ),
        answer: ["is"]

    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>Give a descriptive name to this function that displays an item and it's price.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
                <p>
                    <span>def </span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>(item, price):</span>
                </p>
                <p>
                    <span>&emsp;print(f"{item}: ${price}")</span>
                </p>
                <p>
                    <span>display_item_price("chocolate", 3)</span>
                </p>
            </>
        ),
        answer: ["display_item_price"]

    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
            <p>without reading the code defined inside the functions, can you guess what happens when this code runs?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>display_title()</span> </p>
                <p> <span>display_author()</span> </p>
                <p> <span>display_year()</span> </p>
            </>
        ),
        options: ["Hello, world displays in the console", "A title, an author, and a date display in the console"],
        answer: 2

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>With functions as black boxes, we need to pass the right input to get the right output, like passing <span>year</span> to display the publishing year.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 5,
        ide_content: (
            <>
                <p>
                    <span>title = "Tortilla Flat"</span>
                </p>
                <p>    
                    <span>year = 1935</span>
                </p>
                <p>
                    <span>display_year(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ["year"]
    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
                <p>The value types matter when functions perform operations. Like passing number values to a function that calculates a sum. pass 10 and 20 to <span>sum_score</span></p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 6,
        ide_content: (
            <>
                <p>
                    <span>def sum_score(score, bonus):</span>
                </p>
                <p>
                    <span>&emsp;print(score + bonus)</span>
                </p>
                <p>
                    <span>sum_score()</span>
                </p>
            </>
        ),
        answer: ["10","20"]
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>Why are functions like black boxes?</p>
            </>
        ),
        ide: false,
        options: ["Because we never know their input or output", "Because we can use them without knowing the code inside them"],
        answer: 2

    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
            <p>What could this code display in the console?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>display_current_date()</span> </p>
            </>
        ),
        options: ["It displays the current time", "It displays the current date"],
        answer: 2

    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
                <p>How do we decide a function's input?</p>
            </>
        ),
        ide: false,
        options: ["Based on how many values we have available", "Based on the output we want"],
        answer: 2

    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
            <p>What happens when we pass string values to this function instead of numbers?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>def calculate_sum(a, b):</span> </p>
                <p> <span>&emsp;print(a + b)</span> </p>
                <br></br>
                <p> <span>calculate_sum("10", "25")</span> </p>
            </>
        ),
        options: ['We get the sum of the two numbers, 35', 'We get the string "1025", and not the sum 35'],
        answer: 2

    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
                <p>What happens when we pass the wrong type of value to a function?</p>
            </>
        ),
        ide: false,
        options: ["The function won't work as intended", "It doesn't matter, the function still works"],
        answer: 1

    },
    {
        id: 13,
        type: "mcq",
        question: (
            <>
                <p>Which of these can be considered as output?</p>
            </>
        ),
        ide: false,
        options: ["The operations a function carries out", "What a function displays in the console or what it returns"],
        answer: 2

    },
    {
        id: 14,
        type: "mcq",
        question: (
            <>
            <p>What happens when a function's input is a different type than the output?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>def is_same_word(word_1, word_2):</span> </p>
                <p> <span>&emsp;print(word_1 == word_2)</span> </p>
                <br></br>
                <p> <span>is_same_word("bombastic", "bombastic")</span> </p>
            </>
        ),
        options: ['It wont work, the input and output have to be the same type', 'The function works, the input can be a different type compared to the output'],
        answer: 2

    },
    {
        id: 15,
        type: "code",
        theory: (
            <>
                <p>Variables created inside a function have a local scope, like <span>bonus</span> here.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 7,
        ide_content: (
            <>
                <p>
                    <span>def add_bonus(salary):</span>
                </p>
                <p> 
                    <span>&emsp;</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>= 100</span>
                </p>
                <p>
                    <span>&emsp;print(salary + bonus)</span>
                </p>
                <p>
                    <span>add_bonus(1900)</span>
                </p>
            </>
        ),
        answer: ["bonus"]
    },
    {
        id: 16,
        type: "code",
        theory: (
            <>
                <p>With a global scope, we can safely access the variable anywhere in the code, as we did with <span>shipping</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 8,
        ide_content: (
            <>
                <p>
                    <span>shipping = 10</span>
                </p>
                <p> 
                    <span>def calculate_total(cart):</span>
                </p>
                <p>
                    <span>&emsp;print(cart + )</span>
                </p>
                <p>
                    <span>calculate_total(54)</span>
                </p>
            </>
        ),
        answer: ["shipping"]
    },

];


export default questions;