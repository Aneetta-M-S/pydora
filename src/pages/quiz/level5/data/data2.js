export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                Let's dig deeper into managing lists and how to update the data inside them, like how temperature data might change throughout the day.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                Lists can store any piece of data, be it string, boolean, float or integer like 17.
            </>
        ),
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>
                    temperatures = [
                    </span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>
                    , 20, 26, 24]
                    </span>
                </p>
                  
            </>
        ),
        options: ["\"17\"","17"],
        answer: ["17"]
    },
    {
        id: 3,
        type: "theory",
        theory: (
            <>
                Every element in a list has a numbered position called an index.
            </>
        )
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>Indices start at zero and increase with each further value. That means that the second element in temperatures is at index [1].</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 2,
        ide_content: (
            <>
            <p>
                <span>
                temperatures = [17, 20, 26, 24]
                </span>
            </p>
                <p>
                    <span>
                    print(temperatures
                    </span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>
                        )
                    </span>
                       
                </p>
            </>
        ),
        options: ["]","1","["],
        answer: ["[","1","]"]

    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>To access element 26, code the list name temperatures followed by the index of the element between square brackets [2]</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    <span>
                    temperatures = [17, 20, 26, 24]
                    </span>
                
                

                </p>
                <p>
                    <span>
                    print(   
                    </span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <span>
                    )
                    </span>
                </p>
            </>
        ),
        options: ["[26]","temperatures","[2]"],
        answer: ["temperatures","[2]"]

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
            <p>To change the third temperature value in the list, access it through temperatures[2], then use = to assign it a new value like 25.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
                <p>
                    <span>
                    temperatures = [17, 20, 26, 24]
                    </span>
                </p>
                <p>
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
                </p>
                <p>
                    <span>
                    print(temperatures)
                    </span>
                </p>   
            </>
        ),
        options: ["=","25","temperatures[2]"],
        answer: ["temperatures[2]","=","25"]

    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
            <p>Despite having four elements in the list, we access the last index by using 3 here, since the counting starts at zero.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 5,
        ide_content: (
            <>
            <p>
                <span>
                temperatures = [17, 25, 26, 24]
                </span>
            </p>   
            <p>
            <span>
            temperatures[
            </span>
            <input style={{ width: "160px" }} type="text" />
            <span>
            ] = 20
            </span>
            </p>   
            <p>
            <span>
            print(temperatures)
            </span>
            </p>   
                
                
            </>
        ),
        answer: ["3"]

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
            <p>What types of values can a list store?</p>
            </>
        ),
        options: ["Any type of value","Only strings"],
        answer: [1]
    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
            <p>What do we call the position of an element in a list?</p>
            </>
        ),
        options: ["The element's number","The element's index"],
        answer: [2]
    },
    {
        id: 10,
        type: "mcq",
        theory: (
            <>
            <p>What index does the element in this list have?</p>
            </>
        ),
        ide: true,
        ide_content: (
           <>
           <p>
           friends = ["Kim"]
           </p>
           </>
        ),
        options: ["0","1"],
        answer: [0]
    },
    {
        id: 11,
        type: "mcq",
        theory: (
            <>
            <p>
            How do we access an element in this list?
            </p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
            cars = ["Fiat", "Tesla", "Saab"]
            </>
        ),
        options: ["cars[\"Tesla\"]","cars[1]"],
        answer: [2]
    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
            <p>How do we update a value in a list?</p>
            </>
        ),
        options: ["We access the value by its index, then assign another value","We can't update values in lists"],
        answer: [1]
    },
    {
        id: 13,
        type: "mcq",
        question: (
            <>
            <p>Which indices can we access in a list with two elements?</p>
            </>
        ),
        options: ["1 and 2","0 and 1"],
        answer: [2]
    },
    {
        id: 14,
        type: "code",
        question: (
            <>
            <p>
            Make sure "cat" is at index 0, and "dog" is at index 1, by coding "cat" then "dog".
            </p>
            </>
        ),
        ide_num: 6,
        ide_content: (
            <>
            <p>
                <span>
                animal =
                </span>
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
            </p>
            
            </>
        ),
        answer: ["cat",",","dog"]
    },
    {
        id: 15,
        type: "code",
        theory: (
            <>
            <p>
            Code items[1] to display the second element, "tomato", in the list.
            </p>
            </>
        ),
        ide_num: 7,
        ide_content: (
            <>
            <p>
                <span>
                items = ["milk", "tomato", "apple"]
                </span>
            </p>
            <p>
                <span>print(</span>
            <input style={{ width: "160px" }} type="text" />
            <span>)</span>
            </p>
            </>
        ),
        answer: ["item[1]"]
    },
    {
        id: 16,
        type: "code",
        question: (
            <>
            <p>
            Update the first element in the list from 3 to 2.
            </p>
            </>
        ),
        ide_num: 10,
        ide_content: (
            <>
            <p>
                <span>
                even = [3, 4, 6]
                </span>
            </p>
            <p>
            <input style={{ width: "160px" }} type="text" /> 
            </p>
           <p>
            <span>
            print(even)
            </span>
           </p>           
            </>
        ),
        answer: ["even[0] = 2"]
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
    level: 5,
    current_sublevel: 2,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Changing Data in Lists",

}

// console.log(quizDetails)

