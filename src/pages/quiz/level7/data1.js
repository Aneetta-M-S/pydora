import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                When working with different kinds of data, we'll often receive it in a format that can make it hard to work with.
            </>
        )
    },
    {
        id: 2,
        type: "theory",
        message: (
            <>
                There are three pieces of data in <span>new_users</span>, but it's challenging to work with them individually as they're inside a single string.
                <br /><br />
                <span>new_users = "Ann Jon Alex"</span>
            </>
        )
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>We're able to split up strings and store the individual values inside a list by coding <span>.split()</span> after the variable.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>new_users = "Ann Jon Alex"</span>
                </p>
                <p>
                    <span>users_list = new_users</span>
                    <input style={{ width: "60px" }} type="text" />
                </p>
            </>
        ),
        answer: [".split()"]

    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>We've stored the values in <span>new_users</span> as individual elements inside <span>users_list</span>. We can display them by coding <span>print(users_list)</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 2,
        ide_content: (
            <>
                <p>
                    <span>new_users = "Ann Jon Alex"</span>
                </p>
                <p>
                    <span>users_list = new_users.split()</span>
                </p>
                <p>
                    <input style={{ width: "80px" }} type="text" />
                </p>
            </>
        ),
        answer: ["print(users_list)"]
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>Strings are separated on whitespace by default. If we code <span>print(words_list)</span>, we'll see four values in the separated list.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    <span>words = "gear fault lights build-up"</span>
                </p>
                <p>
                    <span>words_list = words.split()</span>
                </p>
                <p>
                    <input style={{ width: "80px" }} type="text" />
                </p>
            </>
        ),
        answer: ["print(words_list)"]
    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>We can specify exactly how we want to split a string by placing a separator inside the parentheses, like with <span>","</span> here.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
                <p>
                    <span>user = "Lauren,25,F,Architect"</span>
                </p>
                <p>
                    <span>user_1 = user.split(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>)</span>
                </p>
                <p>
                    <span>print(user_1)</span>
                </p>
            </>
        ),
        answer: [","]
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>How do we split a string with <span>split()</span>?</p>
            </>
        ),
        ide: false,
        options: ["By coding .split() after the string variable", "By placing the string inside the split() instruction"],
        answer: 1

    },
    {
        id: 8,
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
                <p> <span>area_codes = "1150 1190 1100 1700"</span> </p>
                <p> <span>codes_list = area_codes.split()</span> </p>
                <p> <span>print(codes_list)</span> </p>
            </>
        ),
        options: ["['1150', '1190', '1100', '1700']", "\"1150\""],
        answer: 1

    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
                <p>What's the default separator when using <span>split()</span>?</p>
            </>
        ),
        ide: false,
        options: ["A period", "A whitespace"],
        answer: 2

    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
                <p>How do we specify a separator for <span>split()</span>?</p>
            </>
        ),
        ide: false,
        options: ["We place the separator inside the parentheses without quotes", "We add a separator inside quotes between the parentheses"],
        answer: 2

    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
                <p>Split the <span>sales</span> string.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 5,
        ide_content: (
            <>
                <p>
                    <span>sales = "24K 29K 7K"</span>
                </p>
                <p>
                    <span>sales_list =</span>
                    <input style={{ width: "60px" }} type="text" />
                    <span>()</span>
                </p>
                <p>
                    <span>print(sales_list)</span>
                </p>
            </>
        ),
        answer: ["sales.split"]
    },
    {
        id: 12,
        type: "code",
        theory: (
            <>
                <p>Split the path string with the separator "/".</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 6,
        ide_content: (
            <>
                <p>
                    <span>path = "getmimo.com/glossary/python"</span>
                </p>
                <p>
                    <span>path_list = path.</span>
                    <input style={{ width: "60px" }} type="text" />
                </p>
                <p>
                    <span>print(path_list)</span>
                </p>
            </>
        ),
        answer: ["split(\"/\")"]
    },

];


export default questions;

