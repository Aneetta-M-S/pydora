import React from "react";

// four types for now: "theory", "code", "mcq" and "theory_ide"

// type "code" :
// remember to keep code_num count starting from 1,2.. 
// store the values in answer array within single quotes, so it would be easier to store string answers
// best method to find the right width would be to use inspect element

// type "mcq" :
// in case there is an ide in mcq type set that value to true, else false
// similar to "code" type set values in options within single quotes
// set the answer value to 1 if right option is first, else 2

// type "theory_ide" :
// this will have the same values as type "code" except it does not need code_num and answer properties

const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <p>Python allows us to use <b>negative indexing</b> to retrieve values from the end of an indexable object, such as a list.</p>
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>Negative indexing means that we retireve an element from the rightmost side of a list. We use the <span>-</span> symbol to indicate a negative index.</p>
                <p>Hints: <span>last</span>&ensp;<span>print</span> </p>
            </>
        ),
        code_num: 1,
        ide_content: (
            <>
                <p>users = [ "Tony", "Tina", "Tom" ]</p>
                <p>last = users[ -1 ]</p>
                <p>
                    <input style={{ width: "70px" }} type="text" />
                    <span>(</span>
                    <input style={{ width: "70px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ['print', 'last']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>We can also modify list items in the given position.</p>
                <p>Hint: Use negative indexing</p>
            </>
        ),
        code_num: 2,
        ide_content: (
            <>
                <p>users = [ "Jack", "Ahmed", "Elaine" ]</p>
                <p>
                    <span>users[ </span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <span>  ] = "Jill"</span>
                </p>
                <p>print(users)</p>
            </>
        ),
        answer: ['-', '3']
    },
    {
        id: 4,
        type: "theory",
        message: (
            <>
                <p>Tuples are also ordered data structures and values can be retrieved, but they are <b>immutable</b> and so cannot be modified.</p>
            </>
        )
    },
    {
        id: 5,
        type: "theory",
        message: (
            <>
                <p>We will encounter an error if we attempt to retrieve a value in a position outside the object's range.</p>
            </>
        )
    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>the <span>del</span> keyword allows us to delete objects, or items within a data structure.</p>
            </>
        ),
        code_num: 3,
        ide_content: (
            <>
                <p>winners = [ "John", "Helen", "Sigmund", "Olaf" ]</p>
                <p>
                    <input style={{ width: "60px" }} type="text" />
                    <span> winners[ -1 ] </span>
                </p>
                <p>print(winners)</p>

            </>
        ),
        answer: ['del']
    },
    {
        id: 7,
        type: "theory",
        message: (
            <>
                <p><b>del</b> can be used to delete any object, including data structures such as dictionaries, lists and sets.</p>
            </>
        )
    },
    {
        id: 8,
        type: "code",
        theory: (
            <>
                <p>We can use <span>del</span> with a key inside a dictionary to remove unwanted <span>key:value</span> pairs from the dictionary.</p>
            </>
        ),
        code_num: 4,
        ide_content: (
            <>
                <p>products = &lcub; "category": 'book', 'price': 4.99, 'in_shop': True &rcub; </p>

            </>
        ),
        answer: ['product', '[', ']']
    }
];


export default questions;

