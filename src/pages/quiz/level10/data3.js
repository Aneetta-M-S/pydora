import React from "react";

const questions = [
    {
        id: 1,
        type: "code",
        theory: (
            <>
                <p>We can use list comprehensions to create a new list by filtering elements of an existing one, like creating a list of <span>high_scores</span>.</p>
            </>
        ),
        code_num: 1,
        ide_content: (
            <>
                <p>scores = [ 12, 47, 30, 29, 19, 35 ] </p>
                <br />
                <p>
                    <input style={{ width: "80px" }} />
                    <span> = [ score for score in scores if score &gt; 20 ]</span>
                </p>
                <p><span>print(passing_scores)</span></p>

            </>
        ),
        answer: ['high_scores']
    },
    {
        id: 2,
        type: "theory",
        message: (
            <>
                <p>We start out like usual with a <b>for</b> loop to iterate through each element in the original list, like each <b>score in scores</b>.</p>
            </>
        )
    },
    {
        id: 3,
        type: "theory",
        message: (
            <>
                <p>To copy each <b>score</b> element in the new list, we write <b>score</b> as out expression, without applying any operation.</p>
            </>
        )
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>To filter for elements that meet a certain condition, we add an if statement, like here where we only copy the score <span>if score &gt; 20</span>.</p>
            </>
        ),
        code_num: 2,
        ide_content: (
            <>
                <p>scores = [ 12, 47, 30, 29, 19, 35 ] </p>
                <br />
                <p>
                    <span>high_scores = [ score for score in scores </span>
                    <input style={{ width: "150px" }} />
                    <span> ] </span>
                </p>
                <p><span>print(high_scores)</span></p>

            </>
        ),
        answer: ['if score > 20']
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>When using a conditional, the usual order is starting with the expression, followed by the for loop, and finishing with the if statement.</p>
            </>
        ),
        code_num: 3,
        ide_content: (
            <>
                <p>scores = [ 12, 47, 30, 29, 19, 35 ] </p>
                <br />
                <p>
                    <span>high_scores = [ </span>
                    <input style={{ width: "100px" }} />
                    <input style={{ width: "150px" }} />
                    <input style={{ width: "150px" }} />
                    <span> ] </span>
                </p>
                <p><span>print(high_scores)</span></p>

            </>
        ),
        answer: ['score', 'for score in scores', 'if score > 20']
    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>Can we filter elements of a list with a list comprehension?</p>
            </>
        ),
        ide: false,
        options: ['Yes, by adding a conditional', 'No, we can only copy lists with list comprehensions'],
        answer: 1
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>Why do we still need a <span>for</span> loop when filtering?</p>
            </>
        ),
        ide: false,
        options: ['We don\'t need to loop', 'To be able to check the condition for each element'],
        answer: 2
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>What happens when we use the loop variable as the expression?</p>
            </>
        ),
        ide: false,
        options: ['We copy the original list', 'We can\'t use only the loop variable, we\'d get an error'],
        answer: 1
    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
                <p>Based on the conditional inside the list comprehension, what elements are we placing into the <span>apply_taxes</span> list?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
                <p>prices = [ 150, 45, 200, 340 ]</p>
                <p>apply_taxes = [ price for price in prices if price &gt; 150 ]</p>
                <p>print(apply_taxes)</p>
            </>
        ),
        options: ['The elements in prices that are greater than 150', 'We aren\'t filtering out any elements'],
        answer: 1
    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
                <p>What does this comprehension do?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
                <p>item_prices = [ 120, 25, 40 ]</p>
                <br />
                <p>under_50 = [ price for price in item_prices if price &lt; 50 ]</p>
                <p>print(under_50)</p>
            </>
        ),
        options: ['It loops through item_prices and copies each value', 'It loops through item_prices and copies each value that is less than 50'],
        answer: 2
    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
                <p>What are the parts that make up a loop comprehension that fikters a list?</p>
            </>
        ),
        ide: false,
        options: ['First, an expression, and then a conditional statement', 'First, an expression, then a for loop,and finally, a conditional statement'],
        answer: 2
    },
    {
        id: 12,
        type: "code",
        theory: (
            <>
                <p>Code a <span>for</span> loop to iterate through each <span>website</span> in <span>websites</span>.</p>
            </>
        ),
        code_num: 4,
        ide_content: (
            <>
                <p>websites = [ "nytimes.com", "lemonde.fr", "economist.com" ]</p>
                <br />
                <p>
                    <span>french = [ website </span>
                    <input style={{ width: "160px" }} />
                    <span>if website.count(".fr" &gt; 0) </span>
                    <span> ] </span>
                </p>
                <p><span>print(french)</span></p>

            </>
        ),
        answer: ['score', 'for score in scores', 'if score > 20']
    }



















];


export default questions;

