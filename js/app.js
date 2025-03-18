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
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": false }
        }
    },
    {
        "name": "Salted Caramel Apple Cider Refresher",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Salted Caramel Apple Cider Energy",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Matcha",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": false, "Farm Fresh American": false, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Strawberry Matcha",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Cran Oran Spice",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": false }
        }
    },
    {
        "name": "Cran Mandarin Spice",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": false, "Farm Fresh American": false, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": false }
        }
    },
    {
        "name": "Cran Oran Spice Refresher",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Cran Mandarin Spice Refresher",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": false, "Farm Fresh American": false, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Cran Oran Spice Energizer",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Cran Mandarin Spice Energizer",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": true, "Winter": true },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": false, "Farm Fresh American": false, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Blackberry Sage Syrup",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": false, "Winter": true },
            "2": { "None": true, "Slightly": true, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": false, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Medicine Ball",
        "matches": {
            "1": { "Spring": false, "Summer": false, "Fall": false, "Winter": true },
            "2": { "None": true, "Slightly": true, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Strawberry Hibiscus Hydrator",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": false }
        }
    },
    {
        "name": "Strawberry Hibiscus Refreher",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Strawberry Hibiscus Energizer",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": false, "Tropical Beach": false, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Pineapple Ginger Hydrator",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": true, "Slightly": false, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": false, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": false, "Protein": false }
        }
    },
    {
        "name": "Pineapple Ginger Refresher",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": false, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Pineapple Ginger  Energizer",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": false, "Latin America": false },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Golden Sunrise Refresher - sugar free",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": true, "Slightly": true, "Fully Charged": false },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": false, "Just make it delicious": false },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Golden Sunrise Energizer - sugar free",
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": false, "Just make it delicious": false },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "Protein Orange Juice",
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
        "matches": {
            "1": { "Spring": false, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": false, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": true, "Well known with a little twist": true, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": true, "Gut Health": true, "Cognitive Function": true, "Immunity": true, "Energy": true, "Protein": false }
        }
    },
    {
        "name": "All Fruit Smoothie",
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
        "matches": {
            "1": { "Spring": true, "Summer": true, "Fall": false, "Winter": false },
            "2": { "None": false, "Slightly": true, "Fully Charged": true },
            "3": { "Safe, familiar, ubiquitous": false, "Well known with a little twist": false, "We make the trends!": true },
            "4": { "No/little added sugar, please": true, "Let's be mindful but we still want big flavor": true, "Just make it delicious": true },
            "5": { "Asia": true, "Tropical Beach": true, "Farm Fresh American": true, "Latin America": true },
            "6": { "None": true, "Hydration": false, "Gut Health": false, "Cognitive Function": false, "Immunity": true, "Energy": true, "Protein": false }
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
    updateDrinkList();
}

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

function calculateResult() {
    const matchedDrinks = drinks.filter(drink =>
        Object.entries(answers).every(([qId, answer]) =>
            drink.matches[qId] && drink.matches[qId][answer] === true
        )
    );

    const resultDiv = document.getElementById("result");
    const drinkNameElement = document.getElementById("drink-name");

    document.getElementById("quiz").classList.add("hidden");
    resultDiv.classList.remove("hidden");

    if (matchedDrinks.length > 0) {
        const randomDrink = matchedDrinks[Math.floor(Math.random() * matchedDrinks.length)];
        drinkNameElement.textContent = randomDrink.name;
    } else {
        drinkNameElement.textContent = "No Match Found";
    }
}


updateDrinkList();
loadQuestion();