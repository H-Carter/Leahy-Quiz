// Load Quiz Data
const questions = [{
        "id": 1,
        "question": "What season are we developing for?",
        "options": ["Spring", "Summer", "Fall", "Winter"]
    },
    {
        "id": 2,
        "question": "Caffienated?",
        "options": ["None", "Slightly", "Fully Charged"]
    },
    {
        "id": 3,
        "question": "We want to build something...",
        "options": ["Safe, familiar, ubiquitous", "Well known with a little twist", "We make the trends!"]
    },
    {
        "id": 4,
        "question": "How sweet do you like it?",
        "options": ["No/little added sugar, please", "Let's be mindful but we still want big flavor", "Just make it delicious"]
    },
    {
        "id": 5,
        "question": "Take me on a flavor trip to…",
        "options": ["Asia", "Tropical Beach", "Farm Fresh American", "Latin America"]
    },
    {
        "id": 6,
        "question": "What functional benefits would you like to add?",
        "options": ["None", "Hydration", "Gut Health", "Cognitive Function", "Immunity", "Energy", "Protein"]
    }
];
const drinks = [{
        "name": "Salted Caramel Apple Cider",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/fall.jpeg",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": true }
        }
    },
    {
        "name": "Salted Caramel Apple Cider Refresher",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/fall.jpeg",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Salted Caramel Apple Cider Energy",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/fall.jpeg",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Matcha",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/matcha.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": false, "Farm Fresh American": false, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Strawberry Matcha",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/strawberry-matcha.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Cran Oran Spice",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/cran-orange.png",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": true }
        }
    },
    {
        "name": "Cran Mandarin Spice",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/fall.jpeg",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": false, "Farm Fresh American": false, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": true }
        }
    },
    {
        "name": "Cran Oran Spice Refresher",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/cran-orange.png",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Cran Mandarin Spice Refresher",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/fall.jpeg",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": false, "Farm Fresh American": false, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Cran Oran Spice Energizer",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/cran-orange.png",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Cran Mandarin Spice Energizer",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/fall.jpeg",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": false, "Farm Fresh American": false, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Blackberry Sage Syrup",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/blackberry-sage.png",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": false, "Winter": true },
            "2": { "None": true, "Slightly": true, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": false, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Medicine Ball",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/medicine-ball.png",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": false, "Winter": true },
            "2": { "None": true, "Slightly": true, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Strawberry Hibiscus Hydrator",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/sh-hydrator.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": true }
        }
    },
    {
        "name": "Strawberry Hibiscus Refresher",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/sh-refresher.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Strawberry Hibiscus Energizer",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/sh-energizer.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Pineapple Ginger Hydrator",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/pineapple-ginger-hydrator.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": false, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": true }
        }
    },
    {
        "name": "Pineapple Ginger Refresher",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/pinapple-ginger-refresher.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": false, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Pineapple Ginger  Energizer",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/pineapple-ginger-energizer.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": false, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Golden Sunrise Refresher - sugar free",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/golden-sunrise.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": true, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": false, "Just make it delicious": false },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Golden Sunrise Energizer - sugar free",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/golden-sunrise.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": false, "Just make it delicious": false },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Protein Orange Juice",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/protein-oj.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": true, "Winter": true },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": false, "Gut Health": false, "Cognitive Function": false, "Immunity": false, "Energy": false, "Protein": true }
        }
    },
    {
        "name": "Strawberry Lemonade",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/strawberry-lemonade.png",
        "matches": {
            "1": { "Spring": false, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": false, "We make the trends!": false },
            "4": { "No/little added sugar, please": false, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": true }
        }
    },
    {
        "name": "Electric Lemonade",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/electric-lemonade.png",
        "matches": {
            "1": { "Spring": false, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "All Fruit Smoothie",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/all-fruit-smoothie.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": true, "Winter": true },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": false, "We make the trends!": false },
            "4": { "No/little added sugar, please": false, "Let's be mindful but we still want big flavor": true, "Just make it delicious": false },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": true }
        }
    },
    {
        "name": "Coffee Lemonade Shady",
        "img": "https://leahy-ifp.com/wp-content/uploads/2025/03/coffee-lemonade.png",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": true, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": false, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": false, "Gut Health": false, "Cognitive Function": false, "Immunity": true, "Energy": true, "Protein": true }
        }
    }
];

let currentQuestion = 0;
let answers = {};

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById("question-text").textContent = q.question;
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
        q.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => handleAnswer(q.id, option);
            optionsDiv.appendChild(button);
        });
    } else {
        calculateResult();
    }
}

function handleAnswer(questionId, selectedOption) {
    answers[questionId] = selectedOption;
    currentQuestion++;
    loadQuestion();
    //updateDrinkList();
}
/*
function updateDrinkList() {
    const filteredDrinks = drinks.filter(drink =>
        Object.keys(answers).length === 0 || // Show all drinks if no answers selected
        Object.entries(answers).every(([qId, answer]) =>
            drink.matches[qId] && drink.matches[qId][answer] === true
        )
    );

    const drinkListDiv = document.getElementById("drink-list");
    drinkListDiv.innerHTML = `<h3>Potential Drinks:</h3>`;

    filteredDrinks.forEach(drink => {
        const drinkItem = document.createElement("p");
        drinkItem.textContent = drink.name;
        drinkItem.classList.add("drink-item");
        drinkListDiv.appendChild(drinkItem);
    });

    if (filteredDrinks.length === 0) {
        drinkListDiv.innerHTML += "<p>No matching drinks yet...</p>";
    }
}
*/

function calculateResult() {
    const matchedDrinks = drinks.filter(drink =>
        Object.entries(answers).every(([qId, answer]) =>
            drink.matches[qId] && drink.matches[qId][answer] === true
        )
    );

    const resultDiv = document.getElementById("result");
    const drinkNameElement = document.getElementById("drink-name");
    const resultImg = document.getElementById("result-img");
    const formDiv = document.getElementById("form");

    document.getElementById("quiz").classList.add("hidden");
    resultDiv.classList.remove("hidden");
    formDiv.classList.remove("hidden");


    if (matchedDrinks.length > 0) {
        const randomDrink = matchedDrinks[Math.floor(Math.random() * matchedDrinks.length)];
        drinkNameElement.textContent = randomDrink.name;
        resultImg.src = randomDrink.img;
    } else {
        drinkNameElement.textContent = "No Match Found";
    }

    const drinkField = document.getElementById("block-b1742916090478");
    drinkField.value = randomDrink.name;
}


//updateDrinkList();
loadQuestion();