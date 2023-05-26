
export const questions = [
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
                <p><b>Hints:</b> <span>last</span>&ensp;<span>print</span> </p>
            </>
        ),
        code_num: 1,
        ide_content: (
            <>
                <p>users = [ "Tony", "Tina", "Tom" ]</p>
                <p>last = users[ -1 ]</p>
                <p>
                    <input style={{ width: "50px" }} type="text" />
                    <span>(</span>
                    <input style={{ width: "40px" }} type="text" />
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
                <p><b>Hint:</b> Use negative indexing to replace <span>"Jack"</span> with <span>"Jill"</span></p>
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
                    <input style={{ width: "40px" }} type="text" />
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
                <p>We can use <span>del</span> with a key inside a dictionary to remove unwanted <span>key : value</span> pairs from the dictionary.</p>
                <p><b>Hint:</b> delete the <span>'in_shop'</span> key from <span>product</span> dictionary.</p>
            </>
        ),
        code_num: 4,
        ide_content: (
            <>
                <p>products = &#123; "category": 'book', 'price': 4.99, 'in_shop': True &#125; </p>
                <br />
                <p>
                    <span>del </span>
                    <input style={{ width: "70px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <span>'in_shop'</span>
                    <input style={{ width: "20px" }} type="text" />
                </p>
                <p>print(product)</p>
            </>
        ),
        answer: ['product', '[', ']']
    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
                <p>What index values can we use when retrieving a list item?</p>
            </>
        ),
        ide: false,
        options: ['Positive or negative values within the range of the list', 'Python only allows positive values to be used'],
        answer: 1
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>We can use <span>del</span> with a key inside a dictionary to remove unwanted <span>key : value</span> pairs from the dictionary.</p>
                <p><b>Hint:</b> Use negative indexing to retrieve <span>age</span>.</p>
            </>
        ),
        code_num: 5,
        ide_content: (
            <>
                <p>user = ( "Joe", "Paris", 27 ) </p>
                <p>
                    <span>name = </span>
                    <input style={{ width: "50px" }} type="text" />
                    <span> [ </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span> ] </span>
                </p>
                <p>
                    <span>age = </span>
                    <input style={{ width: "50px" }} type="text" />
                    <span> [ </span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <span> ] </span>

                </p>
                <p>message = f" &#123;name&#125; &#123;age&#125; "</p>
                <p>print(message)</p>
            </>
        ),
        answer: ['user', '0', 'user', '-', '1']
    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
                <p>We can use <span>del</span> to delete which of the following?</p>
            </>
        ),
        ide: false,
        options: ['Items within some data structures', 'Only items in a list'],
        answer: 1
    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
                <p>What index values can we use when retrieving a list item?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
                <p>members = [ "Anna", "Sarah", "Hayley", "Gareth" ] </p>
                <p>print(members[ -3 ])</p>
            </>
        ),
        options: ['Hayley', 'Sarah'],
        answer: 2
    },
    {
        id: 13,
        type: "code",
        theory: (
            <>
                <p>Use <span>del</span> to remove the <span>gender</span> key : value pair from the dictionary.</p>
                <p><b>Hints:</b> <span>]</span> <span>del</span> <span>[</span> <span>"gender"</span></p>
            </>
        ),
        code_num: 6,
        ide_content: (
            <>
                <p>details = &#123; "name": "Alex", "age": 22, "gender": "Female" &#125; </p>
                <br />
                <p>
                    <span>del details </span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "80px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                </p>
                <p>print(product)</p>
            </>
        ),
        answer: ['[', '"gender"', ']']
    }
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
    current_sublevel: 4,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Negative Indexing and Deletion",

}

// console.log(quizDetails)


