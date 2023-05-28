import Boy1 from "../../assets/images/avatars/boy1.png"
import Boy2 from "../../assets/images/avatars/boy2.png"
// import Boy3 from "../../assets/images/avatars/boy3.png"
import Boy4 from "../../assets/images/avatars/boy4.png"
import Boy5 from "../../assets/images/avatars/boy5.png"
// import Boy6 from "../../assets/images/avatars/boy6.png"
// import Girl1 from "../../assets/images/avatars/girl1.png"
// import Girl2 from "../../assets/images/avatars/girl2.png"
import Girl3 from "../../assets/images/avatars/girl3.png"
import Girl4 from "../../assets/images/avatars/girl4.png"
import Girl5 from "../../assets/images/avatars/girl5.png"
// import Girl6 from "../../assets/images/avatars/girl6.png"

export const queries = [
    {
        id: 1,
        username: "dragonpylee",
        name: "Dragon Pylee",
        dp: Boy5,
        question: "Can anybody please explain to me the difference between these two ways of creating a list. Are they the same thing ? If not which one should I use ?\n\nsquares1 = [x**2 for x in range(1, 11)]\nsquares2 = list(x**2 for x in range(1, 11))" ,
        time: "9:00 AM",
        date: "Sep 1, 2022",
        likes: 20,
        replies: [
            {
                username: "melancon",
                name: "Olivier Melancon",
                dp: Boy1,
                text: "Both do exactly the same thing.",
                time: "3:18 PM",
                date: "Sep 2, 2022",
                likes: 3
            },
            {
                username: "maria_mol",
                name: "Maria James",
                dp: Girl3,
                text: "Both do exactly the same thing.",
                time: "3:18 PM",
                date: "Sep 2, 2022",
                likes: 5
            },
        ]
    },
    {
        id: 2,
        username: "phantom",
        name: "Abin C S",
        dp: Boy4,
        question: `This is a test question` ,
        time: "11:30 AM",
        date: "Jan 23, 2023",
        likes: 50,
        replies: [
            {
                username: "melancon",
                name: "Olivier Melancon",
                dp: Boy1,
                text: "Both do exactly the same thing.",
                time: "3:18 PM",
                date: "Sep 2, 2022",
                likes: 3
            },
            {
                username: "melancon",
                name: "Olivier Melancon",
                dp: Boy1,
                text: "Both do exactly the same thing.",
                time: "3:18 PM",
                date: "Sep 2, 2022",
                likes: 3
            },
        ]
    },
];