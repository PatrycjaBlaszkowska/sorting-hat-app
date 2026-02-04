// Declaring main variables

const question = document.getElementById("question");
const answer = document.getElementById("answer");

// Questions and answers objects

const quizData = [
    {
        question: "A sealed chest lies before you. How do you open it?",
        answer: [
            { text: "Knock it open with a bold, forceful spell.", house: "Gryffindor" },
            { text: "Patiently examine the hinges for a hidden mechanism.", house: "Hufflepuff" },
            { text: "Decipher the ancient runes etched into the lid.", house: "Revenclaw"},
            { text: "Find a way to pick the lock or convince someone else to open it for you.", house: "Slytherin"}
        ],

        question: "Which path do you take through a dark forest?",
        answer: [
            { text: "The sunlit path that leads straight to the danger.", house: "Gryffindor" },
            { text: "The wide, well-trodden path where everyone can walk together.", house: "Hufflepuff" },
            { text: "The hidden, winding path that requires a map to navigate.", house: "Revenclaw"},
            { text: "The quickest path, regardless of the shortcuts required.", house: "Slytherin"}
        ],

        question: "What do you want people to say about you after you're gone?",
        answer: [
            { text: "They were the bravest person I ever knew.", house: "Gryffindor" },
            { text: "They were a true friend who never let me down.", house: "Hufflepuff" },
            { text: "Their wisdom changed the way we see the world.", house: "Revenclaw"},
            { text: "Their achievements were legendary and won them great power.", house: "Slytherin"}
        ],

        question: "You find a lost wallet full of gold. What is your first instinct?",
        answer: [
            { text: "Search for the owner immediately, even if it’s risky.", house: "Gryffindor" },
            { text: "Keep it safe and wait for the owner to describe it to you.", house: "Hufflepuff" },
            { text: "Look for clues inside the wallet to identify exactly who it belongs to.", house: "Revenclaw"},
            { text: "Consider how the gold could benefit your own goals before deciding.", house: "Slytherin"}
        ],

        question: "Which magical animal would you choose as a companion?",
        answer: [
            { text: "A Phoenix (Loyal and courageous).", house: "Gryffindor" },
            { text: "A Badger (Hardworking and protective).", house: "Hufflepuff" },
            { text: "An Owl (Wise and observant).", house: "Revenclaw"},
            { text: "A Serpent (Ambitious and clever).", house: "Slytherin"}
        ],

        question: "Which of these qualities do you value most in yourself?",
        answer: [
            { text: "My courage and willingness to stand up for others.", house: "Gryffindor" },
            { text: "My kindness and ability to work well with anyone.", house: "Hufflepuff" },
            { text: "My intelligence and curiosity about the world.", house: "Revenclaw"},
            { text: "My ambition and drive to be the best.", house: "Slytherin"}
        ],

        question: "You are facing a difficult exam. How do you prepare?",
        answer: [
            { text: "Trust my instincts and hope for the best under pressure.", house: "Gryffindor" },
            { text: "Form a study group so everyone can help each other pass.", house: "Hufflepuff" },
            { text: "Spend every night in the library until I’ve mastered the subject.", house: "Revenclaw"},
            { text: "Find out exactly what will be on the test and focus only on what’s needed to win.", house: "Slytherin"}
        ],

        question: "An intruder is spotted in the castle. What is your first reaction?",
        answer: [
            { text: "Draw my wand and run toward the trouble to stop them.", house: "Gryffindor" },
            { text: "Alert the teachers and make sure my friends are safe.", house: "Hufflepuff" },
            { text: "Observe from a distance to figure out their motive and plan.", house: "Revenclaw"},
            { text: "Use the chaos as an opportunity to secure my own interests.", house: "Slytherin"}
        ],

        question: "Which magical object would you most like to own?",
        answer: [
            { text: "An Invisibility Cloak to go on secret adventures.", house: "Gryffindor" },
            { text: "A Cup that provides endless food for a feast with friends.", house: "Hufflepuff" },
            { text: "The Diadem of Wisdom to know everything there is to know.", house: "Revenclaw"},
            { text: "A powerful wand that ensures you never lose a duel.", house: "Slytherin"}
        ],

        question: "How do you handle a disagreement with a friend?",
        answer: [
            { text: "Confront them directly and speak my mind honestly.", house: "Gryffindor" },
            { text: "Try to find a compromise so that no one's feelings are hurt.", house: "Hufflepuff" },
            { text: "Use logic and facts to prove which side makes more sense.", house: "Revenclaw"},
            { text: "Stay quiet and wait for a moment where I have the upper hand.", house: "Slytherin"}
        ],

    }
];

