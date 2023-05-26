
export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <p>We can use a list comprehension to create a new list by applying a function like <b>halve()</b> to each element of an existing list like <span>prices</span>.</p>
            </>
        ),
    },

    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>The function we'll be using, <span>halve()</span>, takes a number <span>num</span> as an argument and returns its half with <span>num/2</span>.
                </p>
            </>
        ),
        code_num: 1,
        ide_content: (
            <>
                <p>prices = [ 10, 22, 30, 40, 58, 62 ]</p>
                <p>
                    <span>def halve(</span>
                    <input style={{ width: "50px" }} />
                    <span>):</span>
                </p>
                <p>&emsp;return <input style={{ width: "60px" }} /></p>
            </>
        ),
        answer: ['num', 'num/2']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>Like before, we start by iterating through each <span>price</span> in the original <span>prices</span> list with a <span>for</span> loop.</p>
            </>
        ),
        code_num: 2,
        ide_content: (
            <>
                <p>prices = [ 10, 22, 30, 40, 58, 62 ]</p>
                <br />
                <p><span>def halve(num):</span></p>
                <p>&emsp;return num/2</p>
                <br />
                <p>
                    <span>halved = [ halve(price) </span>
                    <input style={{ width: "140px" }} />
                    <span> ]</span>
                </p>
            </>
        ),
        answer: ['for price in prices']
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>We can pack the operations we want to apply to each <span>price</span> value in a function like <span>halve()</span>, and use it as an expression.</p>
                <p><b>Hints: </b><span>)</span>&ensp;<span>price</span>&ensp;<span>(</span>&ensp;<span>halve</span></p>
            </>
        ),
        code_num: 3,
        ide_content: (
            <>
                <p>prices = [ 10, 22, 30, 40, 58, 62 ]</p>
                <br />
                <p>def halve(num):</p>
                <p>&emsp;return num/2</p>
                <br />
                <p>
                    <span>halved = [ </span>
                    <input style={{ width: "60px" }} />
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "60px" }} />
                    <input style={{ width: "20px" }} />
                    <span> for price in prices ]</span>
                </p>
                <p>print(halved)</p>
            </>
        ),
        answer: ['halve', '(', 'price', ')']
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>Functions are useful when we want to apply more expressions, like removing the tax before halving the price.</p>
                <p><b>Hints: </b><span>no_tax/2</span>&ensp;<span>no_tax = 0.85 * num</span></p>
            </>
        ),
        code_num: 4,
        ide_content: (
            <>
                <p>prices = [ 10, 22, 30, 40, 58, 62 ]</p>
                <br />
                <p>def halve(num):</p>
                <p><input style={{ width: "160px" }} /></p>
                <p>&emsp;return <input style={{ width: "80px" }} /></p>
                <br />
                <p>
                    <span>halved = [ halve(price) for price in prices ]</span>
                </p>
                <p>print(halved)</p>
            </>
        ),
        answer: ['no_tax = 0.85 * num', 'no_tax/2']
    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>How do we use a function call as an expression?</p>
            </>
        ),
        ide: false,
        options: ['We call the function without any argument', 'We call the function with the loop variable as an argument, to apply it on each list element'],
        answer: 2
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>Why would we need to use a function as the expression in a list comprehension?</p>
            </>
        ),
        ide: false,
        options: ['To apply multiple expressions on the values we\'re iterating over', 'Because expressions are always functions'],
        answer: 1
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>Can we use this function inside a list comprehension?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
                <p>def get_fullname():</p>
                <p>&emsp;full = "Claire" + "Johnson"</p>
                <p>print(full)</p>
            </>
        ),
        options: ['Yes, we can use any function inside a list comprehension', 'No, because it doesn\'t return a value'],
        answer: 2
    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
                <p>Inside the list comprehension, call the function <span>add_comma()</span> with the loop variable <span>name</span> as an argument.</p>
            </>
        ),
        code_num: 5,
        ide_content: (
            <>
                <p>authors = [ "Virginia Wolf", "John Steinback" ] </p>
                <br />
                <p>def add_comma(name):</p>
                <p>&emsp;parts = name.split(" ")</p>
                <p>&emsp;return parts[1] + ", " + parts[0]</p>
                <br />
                <p>
                    <span>authors_update = [ </span>
                    <input style={{ width: "110px" }} />
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "60px" }} />
                    <input style={{ width: "20px" }} />
                    <span> for name in authors ]</span>
                </p>
                <br />
                <p><span>print(authors_update)</span></p>

            </>
        ),
        answer: ['add_comma', '(', 'name', ')']
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>Inside the <span>add_comma()</span> function, split the name in a list of parts with <span>split()</span>, then add a comma between index <span>1</span> and <span>0</span>.</p>
                <p><b>Hint: </b><span>parts[1] + ", " + parts[0]</span>&ensp;<span>parts = name.split(" ")</span></p>
            </>
        ),
        code_num: 6,
        ide_content: (
            <>
                <p>authors = [ "Virginia Wolf", "John Steinback" ] </p>
                <br />
                <p>def add_comma(name):</p>
                <p>&emsp;<input style={{ width: "170px" }} /></p>
                <p>&emsp;return <input style={{ width: "170px" }} /></p>
                <br />
                <p> authors_update = [ add_comma(name) for name in authors ]</p>
                <br />
                <p><span>print(authors_update)</span></p>

            </>
        ),
        answer: ['parts = name.split(" ")', 'parts[1] + ", " + parts[0]']
    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
                <p>Inside the list comprehension, code a <span>for</span> loop to iterate through each <span>name</span> in the <span>authors</span> list.</p>
            </>
        ),
        code_num: 7,
        ide_content: (
            <>
                <p>authors = [ "Virginia Wolf", "John Steinback" ] </p>
                <br />
                <p>def add_comma(name):</p>
                <p>&emsp;parts = name.split(" ")</p>
                <p>&emsp;return parts[1] + ", " + parts[0]</p>
                <br />
                <p>
                    <span>authors_update = [ add_comma(name) </span>
                    <input style={{ width: "160px" }} />
                    <span> ]</span>
                </p>
                <br />
                <p><span>print(authors_update)</span></p>

            </>
        ),
        answer: ['for name in authors']
    },
    {
        id: 12,
        type: "code",
        theory: (
            <>
                <p>Call the function on each value of the <span>words</span> list, by giving the loop variable as an argument.</p>
            </>
        ),
        code_num: 8,
        ide_content: (
            <>
                <p>words = [ "apple", "aligator", "abracadabra", "avatar" ]</p>
                <br />
                <p>def has_double_a(word):</p>
                <p>&emsp;count = word.count("a")</p>
                <p>&emsp;return count == 2</p>
                <br />
                <p>
                    <span>double_a = [ has_double_a( </span>
                    <input style={{ width: "50px" }} />
                    <span> ) for word in words ]</span>
                </p>
                <br />
                <p><span>print(double_a)</span></p>

            </>
        ),
        answer: ['word']
    },
    {
        id: 13,
        type: "code",
        theory: (
            <>
                <p>Inside the <span>passed()</span> function, code a line to add a 10 points bonus to the score, then return the result of the bonus being over <span>90</span>.</p>
                <p><b>Hints: </b>
                    <span>return</span>&ensp;
                    <span>with_bonus = score + 10</span>&ensp;
                    <span>with_bonus &gt; 90</span>
                </p>
            </>
        ),
        code_num: 9,
        ide_content: (
            <>
                <p>scores = [ 40, 12, 83 ] </p>
                <br />
                <p>def passed(score):</p>
                <p>&emsp;<input style={{ width: "190px" }} /></p>
                <p>&emsp;<input style={{ width: "60px" }} /> <input style={{ width: "140px" }} /></p>
                <br />
                <p>passing_scores = [ passed(score) for score in scores ]</p>
                <br />
                <p><span>print(passing_scores)</span></p>

            </>
        ),
        answer: ['with_bonus = score + 10', 'return', 'with_bonus > 90']
    },

];



// total number of questions (plus one is for the result page)
let total_ques = questions.length + 1
let total_xp = 0

// calculate total xp
questions.forEach(element => {
    if (element.type === "mcq") {
        total_xp += 10
    }
    else if (element.type === "code") {
        let array = element.answer
        total_xp += (10 * array.length)
    }
});

// right now it is set to 60%, can change this value if difficulty changes
let cutoff = (60 / 100) * total_xp

export const quizDetails = {
    level: 10,
    current_sublevel: 2,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Functions as Expressions",

}

// console.log(quizDetails)

