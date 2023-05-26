export const questions = [
    {
        id: 1,
        type: "code",
        theory: (
            <>
                <p>Any type of value can serve as a function's input or output. Let's look at how functions can make use of lists like <span>players</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <span>def is_multiplayer(players):</span>
                </p>
                <p>
                    <span>&emsp;print(len(players) == 2)</span>
                </p>
                <br></br>
                <p>
                    <input style={{ width: "40px" }} type="text" />
                    <span>= ["Amy", "Jay"]</span>
                </p>
                <p>
                    <span>is_multiplayer(players)</span>
                </p>
            </>
        ),
        answer: ["players"]
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>Remember that parameters are like variables storing the values we pass to a function.</p>

                <p>Here, the parameter <span>movies</span> will store the elements in <span>movie_list</span>, since that's the value we call the function with.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>def display_programme(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>)</span>
                </p>
                <p>
                    <span>&emsp; print("Airing tonight:")</span>
                </p>
                <p>
                    <span>&emsp; print(movies)</span>
                </p>
                <p>
                    <span>movie_list = ["Alien", "Moon"]</span>
                </p>
                <p>
                    <span>display_programme(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ["movies", "movie_list"]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>Inside the function, we can use all the list operations we've learned, like getting the number of passengers with <spna>len()</spna></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>
                    <span>def count_passengers(passengers):</span>
                </p>
                <p>
                    <span>&emsp;print</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>(passengers)</span>
                </p>
                <br></br>
                <p>
                    <span>passengers = ["June", "Sam", "Lee"]</span>
                </p>
                <p>
                    <span>count_passengers(passengers)</span>
                </p>
            </>
        ),
        answer: ["len"]
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>Functions can also update lists, like updating the name in <span>leaderboard[0]</span> to the one in the <span>player</span> parameter.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p>
                    <span>def update_first_place(leaderboard, player):</span>
                </p>
                <p>
                    <span>&emsp;</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span> = player</span>
                </p>
                <p>
                    <span>&emsp;return leaderboard</span>
                </p>
                <br></br>
                <p>
                    <span>leaderboard = ["Jay", "Meg", "Cy"]</span>
                </p>
                <p>
                    <span>leaderboard = update_first_place(leaderboard, "Lena")</span>
                </p>
                <p>
                    <span>print(leaderboard)</span>
                </p>
            </>
        ),
        answer: ["leaderboard[0]"]
    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
                <p>How do we pass lists when calling functions?</p>
            </>
        ),
        ide: false,
        options: ["By coding the list name between the function's parentheses", "We can't pass lists when calling functions"],
        answer: 1

    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>How can we access the list that we pass as an argument inside the function?</p>
            </>
        ),
        ide: false,
        options: ["Through the function's parameter", "We can't access a list once we pass it to a function"],
        answer: 1

    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>What list operations can we use inside functions?</p>
            </>
        ),
        ide: false,
        options: ["Any kind, like count(), sum(), len(), replace()", "Only len()"],
        answer: 1

    },
    {
        id: 8,
        type: "theory",
        message: (
            <>
                Functions help us reuse loops by allowing us to change the number of repetitions or the list we're iterating through.
            </>
        )
    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
                <p>We use an indentation of two spaces to nest a loop inside a function, like with this <span>while</span> loop.</p>
                <p>code a while loop with condition <span>counter&lt;=bookings</span></p>
                <p>ps: Try not to have whitespaces in between words inside code input blocks</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p>
                    <span>def onboard_passengers(bookings):</span>
                </p>
                <p>
                    <span>&emsp;counter = 1</span>
                </p>
                <p>
                    <span>&emsp;</span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "80px" }} type="text" />
                    <span>:</span>
                </p>
                <p>
                    <span>&emsp;&emsp;print(f"Passenger &#123;counter&#125; on board")</span>
                </p>
                <p>
                    <span>counter += 1</span>
                </p>
                <p>
                    <span>onboard_passengers(4)</span>
                </p>
            </>
        ),
        answer: ["while", "counter<=bookings"]
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>Ranges like <span>range(3)</span> tell us how many times the for loop runs, like three times in this case.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>
                <p>
                    <span>def display_progress():</span>
                </p>
                <p>
                    <span>for i in </span>
                    <input style={{ width: "80px" }} type="text" />
                    <span>(3):</span>
                </p>
                <p>
                    <span>&emsp;&emsp;print(f"Downloading file &#123;i&#125; out of 3")</span>
                </p>
                <br></br>
                <p>
                    <span>display_progress()</span>
                </p>
            </>
        ),
        answer: ["range"]

    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
                <p>How can we reuse a loop nested inside a function for any range?</p>
            </>
        ),
        ide: false,
        options: ["By using the function's parameter to help calculate a range's value", "We can't reuse a nested loop for different ranges"],
        answer: 1
    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
            <p>How many times does this loop run?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>def show_progress(total):</span> </p>
                <p> <span>&emsp;for i in range(total):</span> </p>
                <p> <span>&emsp;&emsp;print(f"Installing next update")</span> </p>
            </>
        ),
        options: ["We can't know how many times it runs", "Once"],
        answer: 2

    },
    {
        id: 13,
        type: "code",
        theory: (
            <>
                <p>To reuse a loop that iterates through a list, we can nest it in a function, like with this for loop.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 7,
        ide_content: (
            <>
                <p>
                    <span>def halve_prices(cart):</span>
                </p>
                <p>
                    <span>for</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>in</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>:</span>
                </p>
                <p>
                    <span>&emsp;print(f"New price: &#123;price/2&#125;")</span>
                </p>
                <br></br>
                <p>
                    <span>cart_list = [5, 20, 8]</span>
                </p>
                <p>
                    <span>halve_prices(cart_list)</span>
                </p>
            </>
        ),
        answer: ["price","cart"]
    },
    {
        id: 14,
        type: "mcq",
        question: (
            <>
                <p>How can we reuse a loop that iterates through a list?</p>
            </>
        ),
        ide: false,
        options: ["By nesting it inside a function's code block", "We can't reuse this kind of loop"],
        answer: 1
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
    level: 8,
    current_sublevel: 4,
    max_sublevel: 4,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "",

}

// console.log(quizDetails)

