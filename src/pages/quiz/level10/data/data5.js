
export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <p>Sometimes we want to retrieve multiple values from a list. We can do this using <b>slicing</b>. Let's look at the <b>[ start : stop ]</b> slicing syntax.</p>
            </>
        )
    },
    {
        id: 2,
        type: "theory",
        message: (
            <>
                <p>The value to the left of the colon <b>:</b> is the <b>start</b> position for the slice. As we've covered previously, Python indexing starts at zero.</p>
            </>
        )
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>By coding [3:], we're retrieving all values beginning at list position <span>[ 3 ]</span> to the end of the list.</p>
            </>
        ),
        code_num: 1,
        ide_content: (
            <>
                <p>letters = [ "A", "B", "C", "D", "E" ]</p>
                <p>
                    <span>print(letters</span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <span>)</span>
                </p>
                <p>print(letters[ 1: ])</p>
            </>
        ),
        answer: ['[', '3', ':', ']']
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>The start value can be positive, negative or omitted completely. Negative values mean 'start this many elements back from the end'.</p>
                <p><b>Hint:</b> Display the last two values in the list.</p>
            </>
        ),
        code_num: 2,
        ide_content: (
            <>
                <p>users = [ "Alan", "Beth", "Carla", "Dennis" ]</p>
                <p>print(users[ 0: ])</p>
                {/* <p>print(users[ : ])</p> */}
                <p>
                    <span>print(users[ </span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <span>: ])</span>
                </p>
                <p>print(letters[ 1: ])</p>
            </>
        ),
        answer: ['-', '2']
    },
    {
        id: 5,
        type: "theory",
        message: (
            <>
                <p>A value after the colon <span>:</span> represents where the slice should <b>stop</b>. Note that the element in the stop position is <i>not included</i>.</p>
            </>
        )
    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>If we use a start value of <span>0</span> (or do not include one), a positive stop value will be equal to the number of elements returned.</p>
                <p><b>Hint: </b>Select the first three grades.</p>
            </>
        ),
        code_num: 3,
        ide_content: (
            <>
                <p>grades = [ "A", "B", "C", "D", "E" ]</p>
                <p>
                    <span>print(grades[ </span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <span> ])</span>
                </p>
            </>
        ),
        answer: [':', '3']
    },
    {
        id: 7,
        type: "theory",
        message: (
            <>
                <p>We can also use a format with two colons, <span>[ start:stop:step ]</span>, where <span>step</span> determines how Python steps between <span>start</span> and <span>end</span>.</p>
            </>
        )
    },
    {
        id: 8,
        type: "code",
        theory: (
            <>
                <p>A step value of <span>: 2</span> means that instead of returning every value in the slice, we return every second value.</p>
                <p><b>Hint: </b><span>2</span>&ensp;<span>True</span>&ensp;<span>:</span></p>
            </>
        ),
        code_num: 4,
        ide_content: (
            <>
                <p>alphabet = [ "A", "B", "C", "D", "E", "F" ]</p>
                <p>
                    <span>print(alphabet[ 1:6 </span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <span> ])</span>
                </p>
            </>
        ),
        answer: [':', '2']
    },
    {
        id: 9,
        type: "theory_ide",
        theory: (
            <>
                <p>We can use the <span>step</span> value with no <span>start</span> or <span>end</span> value. By default this will work from the start to the end of the full original list.</p>
                <p><b>Output: </b><span>[ "Anna", "Carrie", "Eleanor" ]</span></p>
            </>
        ),
        ide_content: (
            <>
                <p>friends = [ "Annie", "Bella", "Carrie", "Diana", "Eleanor" ]</p>
                <p>print(friends[ ::2 ])</p>
            </>
        )
    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
                <p>When there is one colon in our indexing notation, which of the following is true?</p>
            </>
        ),
        ide: false,
        options: ['It is necessary to have values on both sides of the colon', 'The value on the left is the start index and the value on the right is the stop index'],
        answer: 2
    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
                <p>Choose appropriate values for <span>start</span> and <span>stop</span> so that a list containing only <span>Anna</span> is printed.</p>
            </>
        ),
        code_num: 5,
        ide_content: (
            <>
                <p>members = [ "Anna", "Billie", "Henry" ]</p>
                <p>
                    <span>print(alphabet[ </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>:</span>
                    <input style={{ width: "20px" }} type="text" />
                    <span> ])</span>
                </p>
            </>
        ),
        answer: ['0', '1']
    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
                <p>Is the element at the index specified in the <span>stop</span> value included in the returned slice?</p>
            </>
        ),
        ide: false,
        options: ['Yes', 'No'],
        answer: 2
    },
    {
        id: 13,
        type: "code",
        theory: (
            <>
                <p>Complete the code so that the final two scores are printed, regardless of how long the list is.</p>
            </>
        ),
        code_num: 6,
        ide_content: (
            <>
                <p>scores = [ 50, 60, 30, 100, 200 ]</p>
                <p>
                    <span>print(scores[ </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>: ])</span>
                </p>
            </>
        ),
        answer: ['-2']
    },
    {
        id: 14,
        type: "mcq",
        question: (
            <>
                <p>Which of the following statements about using a <span>step</span> value is true?</p>
            </>
        ),
        ide: false,
        options: ['The step value must come after two colons in the slice notation', 'We can specify step anywhere in the notation'],
        answer: 1
    },
    {
        id: 15,
        type: "code",
        theory: (
            <>
                <p>Complete the <span>start:stop:step</span> notation so that <span>[ 5, 5, 5 ]</span> is printed.</p>
                <p><b>Hints: </b><span>2</span>&ensp;<span>-</span>&ensp;<span>1</span>&ensp;<span>-</span>&ensp;<span>5</span></p>
            </>
        ),
        code_num: 7,
        ide_content: (
            <>
                <p>ratings = [ 3, 4, 2, 5, 1, 5, 4, 5 ]</p>
                <p>
                    <span>print(ratings[ </span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <span>:</span>
                    <span>:</span>
                    <input style={{ width: "20px" }} type="text" />
                    <span> ])</span>
                </p>
            </>
        ),
        answer: ['-','5','2']
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
    current_sublevel: 5,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Slice Notation",

}

// console.log(quizDetails)


