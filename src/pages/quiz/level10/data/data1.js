
export const questions = [
    {
        id: 1,
        type: "code",
        theory: (
            <>
                <p>To create a list like <span>halved</span> based on another like <span>prices</span>, we need to first create an empty list, then fill it inside a loop.</p>
                <p><b>Hints: </b><span>halved.append(half_price)</span>&ensp;<span>halved = [ ]</span></p>
            </>
        ),
        code_num: 1,
        ide_content: (
            <>
                <p>prices = [ 10, 38, 40, 58, 62 ]</p>
                <p><input style={{ width: "90px" }} type="text" /></p>
                <p>for price in prices:</p>
                <p>&emsp;half_price = price/2</p>
                <p>&emsp;<input style={{ width: "200px" }} type="text" /></p>
                <br />
                <p>print(halved)</p>
            </>
        ),
        answer: ['halved = [ ]', 'halved.append(half_price)']
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>We can build the same <span>halved</span> list as before, but in one line, using <b>list comprehensions</b>.</p>
            </>
        ),
        code_num: 2,
        ide_content: (
            <>
                <p>prices = [ 10, 38, 40, 58, 62 ]</p>
                <p>
                    <input style={{ width: "60px" }} type="text" />
                    <span> = [ price/2 for price in prices ]</span>
                </p>
                <p>print(halved)</p>
            </>
        ),
        answer: ['halved']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>The list comprehension creating <span>halved_lc</span> is an equivalent, but more compact version of the code creating <span>halved_loop</span>.</p>
                <p><b>Hints: </b><span>halved_loop</span>&ensp;<span>halved_lc</span></p>
            </>
        ),
        code_num: 3,
        ide_content: (
            <>
                <p>prices = [ 10, 38, 40, 58, 62 ]</p>
                <p>
                    <input style={{ width: "90px" }} type="text" />
                    <span> = [ price/2 for price in prices ]</span>
                </p>
                <p>print(halved_lc)</p>
                <br />
                <p>
                    <input style={{ width: "100px" }} type="text" />
                    <span> = [ ]</span>
                </p>
                <p>for price in prices:</p>
                <p>&emsp;half_price = price/2</p>
                <p>&emsp;halved_loop.append(half_price)</p>
                <p>print(halved_loop)</p>

            </>
        ),
        answer: ['halved_lc', 'halved_loop']
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>List comprehensions use <span>for</span> loops to iterate through each element of the original list, like here with <span>for price in prices</span>.</p>
            </>
        ),
        code_num: 4,
        ide_content: (
            <>
                <p>prices = [ 10, 38, 40, 58, 62 ]</p>
                <p>
                    <span> halved = [ price/2 </span>
                    <input style={{ width: "150px" }} type="text" />
                    <span> ]</span>
                </p>
                <p>print(halved)</p>

            </>
        ),
        answer: ['for price in prices']
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>Like with any for-loop, <span>price</span> is the variable that holds the list elements one by one, while <span>prices</span> is the list we're looping over.</p>
            </>
        ),
        code_num: 5,
        ide_content: (
            <>
                <p>prices = [ 10, 38, 40, 58, 62 ]</p>
                <p>
                    <span> halved = [ price/2 for </span>
                    <input style={{ width: "60px" }} type="text" />
                    <span> in </span>
                    <input style={{ width: "60px" }} type="text" />
                    <span> ]</span>
                </p>
                <p>print(halved)</p>

            </>
        ),
        answer: ['price', 'prices']
    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>At the beginning of the list comprehension, we write an expression to apply on each element, like halving each price with <span>price/2</span>.</p>
            </>
        ),
        code_num: 6,
        ide_content: (
            <>
                <p>prices = [ 10, 38, 40, 58, 62 ]</p>
                <p>
                    <span> halved = [ </span>
                    <input style={{ width: "65px" }} type="text" />
                    <span> for price in prices ] </span>
                </p>
                <p>print(halved)</p>

            </>
        ),
        answer: ['price/2']
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>What’s the difference between the list stored in <span>codes_a</span> and <span>codes_b</span>?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
                <p> flights = [ "1122", "5788", "0044" ] </p>
                <br />
                <p>codes_a = [ "BA" + flight for flight in flights ]</p>
                <p>print(codes_a)</p>
                <br />
                <p>codes_b = [ ]</p>
                <p>for flight in flights:</p>
                <p>&emsp;code = "BA" + flight</p>
                <p>&emsp;codes_b.append(code)</p>
                <br />
                <p>print(codes_b)</p>
            </>
        ),
        options: ['There\'s no difference, they are equivalent', 'Unlike codes_b, codes_a doesn\'t store a list'],
        answer: 1
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>What do we use list comprehensions for?</p>
            </>
        ),
        ide: false,
        options: ['For creating new lists based on existing ones in less code', 'For changing existing lists, without keeping the original'],
        answer: 1
    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
                <p>What do we use to surround the expression and loop belonging to a list comprehension?</p>
            </>
        ),
        ide: false,
        options: ['Nothing, we use indentation just like we do inside loops', 'Square brackets [ ]'],
        answer: 2
    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
                <p>What does the variable <span>km</span> store?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
                <p> miles = [ 100, 57, 40, 20 ] </p>
                <p>km = [ value * 1.609 for value in miles ]</p>
                <p>print(km)</p>
            </>
        ),
        options: ['Only the first value of the miles list, converted to kilometers', 'A list of values represented as kilometers'],
        answer: 2
    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
                <p>Code an expression inside this list comprehension, so that it creates the same list as the one created by the for loop. </p>
            </>
        ),
        code_num: 7,
        ide_content: (
            <>
                <p>answers = [ True, False, False ]</p>
                <p><span> opposite = [ ]</span></p>
                <p>for answer in answers:</p>
                <p>&emsp;opposite.append(not answer)</p>
                <p>print(opposite)</p>
                <br />
                <p>
                    <span>print([ </span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "65px" }} type="text" />
                    <span> for answer in answers ]) </span>
                </p>
                <p>print(halved)</p>

            </>
        ),
        answer: ['not', 'answer']
    },
    {
        id: 12,
        type: "code",
        theory: (
            <>
                <p>Create a list of booleans telling us which ages are old enough for driving by coding an expression that checks if <span>age</span> is greater than <span>17</span>.</p>
            </>
        ),
        code_num: 8,
        ide_content: (
            <>
                <p>ages = [ 15, 20, 19 ]</p>
                <p>
                    <span> can_drive = [ </span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "30px" }} type="text" />
                    <span> for age in ages ]</span>
                </p>
                <p>print(can_drive)</p>
            </>
        ),
        answer: ['age', '>', '17']
    },
    {
        id: 13,
        type: "code",
        theory: (
            <>
                <p>To create a copy like <span>prices_copy</span> of the original list, we set the expression to copy each element without changes, like here with <span>price</span>.</p>
            </>
        ),
        code_num: 9,
        ide_content: (
            <>
                <p>prices = [ 10, 38, 40, 58, 62 ]</p>
                <p>
                    <span> prices_copy = [ </span>
                    <input style={{ width: "50px" }} type="text" />
                    <span> for price in prices ]</span>
                </p>
                <p>print(prices_copy)</p>
            </>
        ),
        answer: ['price']
    },
    {
        id: 14,
        type: "code",
        theory: (
            <>
                <p>List comprehensions work with list elements of any type, like numbers, booleans, tuples, or strings like those in <span>names</span>.</p>
                <p><b>Hints: </b><span>[ "Smith", "Miller", "Brown" ]</span>&ensp;<span>names</span></p>
            </>
        ),
        code_num: 10,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "60px" }} />
                    <span> = </span>
                    <input style={{ width: "210px" }} />
                </p>
                <p>
                    <span> prefixed = [ "Mr. " + name for name in names ]</span>
                </p>
                <p>print(prefixed)</p>
            </>
        ),
        answer: ['names', '[ "Smith", "Miller", "Brown" ]']
    },
    {
        id: 15,
        type: "mcq",
        question: (
            <>
                <p>Why does the list comprehension in <span>meters_copy</span> create a copy of the <span>meters</span> list?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
                <p> meters = [ 100, 3800, 4000 ] </p>
                <p>meters_copy = [ m for m in meters ]</p>
                <p>print(meters)</p>
                <p>print(meters_copy)</p>
            </>
        ),
        options: ['Because list comprehensions can only create copies of the original lists', 'Because it uses the loop variable, m as an expression, without applying any changes'],
        answer: 2
    },
    {
        id: 16,
        type: "mcq",
        question: (
            <>
                <p>What types of elements do list comprehensions work on?</p>
            </>
        ),
        ide: false,
        options: ['Only on list elements that are numbers',
            'Any type of list elements, like numbers, strings, booleans, tuples and more'],
        answer: 2
    },
    {
        id: 17,
        type: "mcq",
        question: (
            <>
                <p>Can we use a boolean expression like <span>a == 13</span> with a list comprehension?</p>
            </>
        ),
        ide: false,
        options: ['Yes, we can use any type of expression',
            'No, we can only use expressions with numbers or strings'],
        answer: 1
    },
    {
        id: 18,
        type: "code",
        theory: (
            <>
                <p>Inside the list comprehension, iterate over the strings in the <span>words</span> list, to count the occurences of the letter <span>"a"</span>.</p>
            </>
        ),
        code_num: 11,
        ide_content: (
            <>
                <p><span>words = [ "apple", "aligator", "abracadabra", "avatar" ]</span></p>
                <br />
                <p>
                    <span> a_count = [ word.count("a") for word in </span>
                    <input style={{ width: "60px" }} />
                    <span> ]</span>
                </p>
                <p>print(a_count)</p>
            </>
        ),
        answer: ['words']
    },
    {
        id: 19,
        type: "code",
        theory: (
            <>
                <p>For this list comprehension's expression, use <span>.count()</span> to count the occurences of <span>"a"</span> in each <span>word</span>.</p>
                <p><b>Hints: </b>
                    <span>(</span>&ensp;
                    <span>count</span>&ensp;
                    <span>)</span>&ensp;
                    <span>word</span>&ensp;
                    <span>.</span>&ensp;
                    <span>"a"</span>&ensp;
                </p>
            </>
        ),
        code_num: 12,
        ide_content: (
            <>
                <p><span>words = [ "apple", "aligator", "abracadabra", "avatar" ]</span></p>
                <br />
                <p>
                    <span> a_count = [ </span>
                    <input style={{ width: "50px" }} />
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "60px" }} />
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "30px" }} />
                    <input style={{ width: "20px" }} />
                    <span> for word in words ]</span>
                </p>
                <p>print(a_count)</p>
            </>
        ),
        answer: ['word', '.', 'count', '(', '"a"', ')']
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
    current_sublevel: 1,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Using List Comprehensions",

}

// console.log(quizDetails)

