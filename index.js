// Get Elements 
const wrapper = document.getElementById('wrapper');
const content = document.getElementById('content');
const conversation = document.getElementById('conversation');
const buttons = document.getElementById('buttons');
const quiz = document.getElementById('quiz');
const balance = document.getElementById('balance');
const accept = document.createElement('button');
const decline = document.createElement('button');
const finish = document.createElement('button');
const menu = document.getElementById('menu');
const restart = document.createElement('button');

// Global Variables
let selectedIceCreams = [];

// Check if Name was entered in prompt
function checkName() {
    let userName = '';
    while(userName == ''){
        userName = prompt('Please enter your name');
    }   
    return userName;
}

// Infromations about the Customer / get Cash for IceCream thourgh answering Quiz
class Customer {
    constructor(name){
        this.name = name;
        this.cash = 0;
        this.score = 0;
        this.initializeQuiz();
    };

    initializeQuiz() {
        instructions.innerHTML = `<h2 id="heading">Hello ${this.name},</h2>In order to buy some delicious IceCream, you'll need some Cash!<br>You're lucky, for every correct answer in the following Quiz, you earn $10!`;
        accept.innerHTML = 'Start Quiz';
        accept.setAttribute('class','answerButton');
        instructions.append(accept);
        accept.addEventListener('click', () => {
            instructions.innerHTML = "";
            this.quiz();
        });
    };

    quiz() {
        const questions = [
            {
                question: `What's the Capital of Switzerland?`,
                answers: ['Lucerne', 'Zurich', 'Bern'],
                correctAnswer: 'Bern'
            },
            {
                question: `What's the national bird of the United States?`,
                answers: ['Bald Eagle', 'American Robin', 'Wild Turkey'],
                correctAnswer: 'Bald Eagle'
            },
            {
                question: `What's the largest ocean on Earth?`,
                answers: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean'],
                correctAnswer: 'Pacific Ocean'
            },
            {
                question: `What is the largest organ in the human body?`,
                answers: ['Heart', 'Brain', 'Skin'],
                correctAnswer: 'Skin'
            },
            {
                question: `Which country won the FIFA World Cup in 2018?`,
                answers: ['France', 'Germany', 'Brazil'],
                correctAnswer: 'France'
            },
            {
                question: `Who invented the telephone?`,
                answers: ['Thomas Edison', 'Alexander Graham Bell', 'Albert Einstein'],
                correctAnswer: 'Alexander Graham Bell'
            },
            {
                question: `In which language is the Program Visual Code written (mainly)?`,
                answers: ['C++','JavaScript','Java'],
                correctAnswer: 'JavaScript'
            },
            {
                question: `What is the tallest mountain in the world?`,
                answers: ['Mount Kilimanjaro', 'Mount Everest', 'Mount Fuji'],
                correctAnswer: 'Mount Everest'
            },
            {
                question: `What's the largest desert in the world?`,
                answers: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert'],
                correctAnswer: 'Sahara Desert'
            },
            {
                question: `What's the Dog's name in Tom & Jerry`,
                answers: ['Tyke','Spike','Mike'],
                correctAnswer: 'Spike'
            },
            {
                question: `What is the chemical symbol for gold?`,
                answers: ['Au', 'Ag', 'Fe'],
                correctAnswer: 'Au'
            },
            {
                question: `What is the capital of Canada?`,
                answers: ['Ottawa', 'Toronto', 'Montreal'],
                correctAnswer: 'Ottawa'
            },
            {
                question: `What's the largest land animal?`,
                answers: ['Elephant', 'Giraffe', 'Hippopotamus'],
                correctAnswer: 'Elephant'
            },
            {
                question: `What's the capital of Japan?`,
                answers: ['Tokyo', 'Osaka', 'Kyoto'],
                correctAnswer: 'Tokyo'
            },
            {
                question: `What's the main ingredient in chocolate?`,
                answers: ['Cocoa', 'Sugar', 'Milk'],
                correctAnswer: 'Cocoa'
            },
            {
                question: `Which country is known for producing the most coffee in the world?`,
                answers: ['Brazil', 'Colombia', 'Ecuador'],
                correctAnswer: 'Brazil'
            },
            {
                question: `Who painted the famous artwork 'The Starry Night'?`,
                answers: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci'],
                correctAnswer: 'Vincent van Gogh'
            },
            {
                question: `Which language is spoken in Brazil?`,
                answers: ['Spanish', 'Portuguese', 'French'],
                correctAnswer: 'Portuguese'
            },
            {
                question: `Who is the author of the Harry Potter book series?`,
                answers: ['J.K. Rowling', 'Stephen King', 'George R.R. Martin'],
                correctAnswer: 'J.K. Rowling'
            },
            {
                question: `Which instrument has 88 keys?`,
                answers: ['Guitar', 'Piano', 'Violin'],
                correctAnswer: 'Piano'
            },
            {
                question: `Who wrote the play 'Romeo and Juliet'?`,
                answers: ['William Shakespeare', 'Jane Austen', 'Charles Dickens'],
                correctAnswer: 'William Shakespeare'
            },
            {
                question: `What's the chemical symbol for silver?`,
                answers: ['Ag', 'Au', 'Si'],
                correctAnswer: 'Ag'
            },
            {
                question: `What's the highest mountain range in the world?`,
                answers: ['Himalayas', 'Andes', 'Rocky Mountains'],
                correctAnswer: 'Himalayas'
            },
            {
                question: `What's the capital of Australia?`,
                answers: ['Canberra', 'Sydney', 'Melbourne'],
                correctAnswer: 'Canberra'
            },
            {
                question: `What's the main ingredient in bread?`,
                answers: ['Flour', 'Sugar', 'Butter'],
                correctAnswer: 'Flour'
            },
            {
                question: `How many flavours has Mr.IceCream in his Store?`,
                answers: [8, 9, 5],
                correctAnswer: 8
            },
            {
                question: `What's the currency of France?`,
                answers: ['Euro', 'Pound', 'Dollar'],
                correctAnswer: 'Euro'
            },
            {
                question: `What's the symbol for the element carbon?`,
                answers: ['C', 'Ca', 'Co'],
                correctAnswer: 'C'
            },
            {
                question: `What's the highest-grossing film of all time?`,
                answers: ['Avengers: Endgame', 'Avatar', 'Titanic'],
                correctAnswer: 'Avengers: Endgame'
            },
            {
                question: `What's the most widely spoken language in the world?`,
                answers: ['Mandarin Chinese', 'English', 'Spanish'],
                correctAnswer: 'Mandarin Chinese'
            },
            {
                question: `Which planet is known as the 'Red Planet'?`,
                answers: ['Venus', 'Mars', 'Jupiter'],
                correctAnswer: 'Mars'
            },
            {
                question: `What's the national flower of England?`,
                answers: ['Rose', 'Lily', 'Tulip'],
                correctAnswer: 'Rose'
            },
            {
                question: `Which country is known as producing the most coffee in the world?`,
                answers: ['Brazil', 'Colombia', 'Ecuador'],
                correctAnswer: 'Brazil'
            },
            {
                question: `What's the largest continent in the world?`,
                answers: ['Asia', 'Africa', 'North America'],
                correctAnswer: 'Asia'
            }
        ];
    
        const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        const selectedQuestions = shuffledQuestions.slice(0, 10);
        let questionIndex = 0;

        const nextQuestion = () => {
            const totalQuestions = selectedQuestions.length;

            if (questionIndex === totalQuestions) {
                if (this.score >= 1) {
                    instructions.innerHTML = `<h2 id="moneyWin">You answered ${this.score} questions correctly and earned $${this.cash}!</h2><br>Enjoy your Ice Cream!`;
                    balance.innerHTML = `${this.name}'s Cash: $${this.cash}`;
                    setTimeout(welcome, 2500);
                } else {
                    instructions.innerHTML = `<h3>You sadly answered ${this.score} questions correctly,<br>but you still earned $${this.cash} as a Gift!</h3>`;
                    balance.innerHTML = `${this.name}'s Cash: $${this.cash}`;
                    setTimeout(welcome, 2500);
                }
            } else {
                const randomQuestion = selectedQuestions[questionIndex];

                const quizContainer = document.createElement('div');
                quizContainer.setAttribute('class','container');
                const quizQuestion = document.createElement('p');
                quizQuestion.setAttribute('class','question');
                quizQuestion.innerHTML = `<h2>Question:</h2><br>${randomQuestion.question}`;
                quizContainer.appendChild(quizQuestion);

                randomQuestion.answers.forEach((answer) => {
                    const answerButton = document.createElement('button');
                    answerButton.setAttribute('class','answerButton')
                    answerButton.innerHTML = answer;
                    answerButton.addEventListener('click', () =>
                        checkAnswer(answer, randomQuestion.correctAnswer)
                    );
                    quizContainer.appendChild(answerButton);
                });

                instructions.innerHTML = '';
                instructions.appendChild(quizContainer);
            }
        };

        const checkAnswer = (selectedAnswer, correctAnswer) => {
            if (selectedAnswer === correctAnswer) {
                this.score += 1;
                this.cash = this.score * 10;
            } else if (this.score === 0) {
                this.cash = 10;
            }
            questionIndex++;
            setTimeout(nextQuestion, 1);
        };

        nextQuestion();
    };
};

// Mr.IceCream Starts talking & wants to know what IceCream you would like 
function welcome() {
    document.body.style.backgroundColor = 'rgba(255, 255, 255)';
    wrapper.style.backgroundColor = 'rgba(69, 157, 69, 0.639)';

    quiz.style.display = 'none';
    balance.style.display = 'flex';
    content.style.display = 'initial';
    buttons.style.display = "none";
    accept.innerHTML = 'Yes, please'; 
    decline.innerHTML = 'No, thanks';

    accept.setAttribute('class','accept');
    decline.setAttribute('class','decline');
    finish.setAttribute('class','finish');
    restart.setAttribute('class','restart');

    let textAnimation = new LetterLoading.Typed('#conversation', {
        strings: [`Hello ${buyIceCream.name}, would you like some of our delicious IceCream?`],
        loop: false,
        loadspeed: 0.3,
        cursor: true,
        simulate: "typed",
        cursorType: "line"
    });

    function helloUser() {
        buttons.style.display = "flex";
        buttons.append(accept, decline);
    };
    setTimeout(helloUser, 2500);

    accept.addEventListener('click', () => {
        let textAnimation = new LetterLoading.Typed('#conversation', {
            strings: [`Which flavour would you like? Please choose any from our Menu underneath.`],
            loop: false,
            loadspeed: 0.3,
            cursor: false,
            simulate: "typed"
        });

        buttons.style.display = "none";

        function yesPlease() {
            menu.style.display = 'initial';
            chooseIceCream();
        };
        setTimeout(yesPlease, 2500);
    });
    
    decline.addEventListener('click', () => {
        let textAnimation = new LetterLoading.Typed('#conversation', {
            strings: [`Thank you for watching by, see you next time!`],
            loop: false,
            loadspeed: 0.3,
            cursor: false,
            simulate: "typed"
        });

        function noThanks() {
            restart.style.display = 'initial';
            accept.style.display = "none";
            decline.style.display = "none";
            restart.innerHTML = "Restart";
            buttons.append(restart);
        };
        setTimeout(noThanks, 2000);
    });

    finish.addEventListener('click', () => {
        let textAnimation = new LetterLoading.Typed('#conversation', {
            strings: [`Thank you for watching by, enjoy your IceCream. See you next time!`],
            loop: false,
            loadspeed: 0.3,
            cursor: false,
            simulate: "typed"
        });

        menu.style.display = 'none';
        buttons.innerHTML = "";
        buttons.style.display = "none";

        function thatsIt() {
            listPurchase();
            buttons.style.display = "flex";
            restart.innerHTML = "Restart";
            buttons.append(restart);
        };
        setTimeout(thatsIt, 2000);
    });
};

// Select the IceCreams from the Menu and store them in selectedIceCreams
function chooseIceCream() {
    // Get the IceCream Buttons by Classname
    const iceCreamButton = document.getElementsByClassName('flavour');

    for (const button of iceCreamButton) {

        finish.innerHTML = `That's it thanks!`;
        //For every Click on the Button create an Object with Name, Price and Quantity
        button.parentElement.addEventListener('click', () => {
            buttons.style.display = "flex";
            buttons.innerHTML = "";
            buttons.append(finish);

            // Declare undefined Variables
            let iceCreamQuantity= 0;
            let iceCreamPrice= 0;

            // Set Price on single and double IceCream
            if (button.id.includes('-')){
                iceCreamPrice = 7.5;
            }
            else {
                iceCreamPrice = 5;
            };

            // Check for existing Objects with same properties
            let doubleIceCream = selectedIceCreams.find(iceCream => iceCream.flavour === button.id);
                
            // If the IceCream already exists, increase the quantity
            if (doubleIceCream) {
                doubleIceCream.quantity++;
            } 
                
            // If it doesn't, create a new object and add it to selectedIceCreams array
            else {
                iceCreamQuantity++;
                let iceCreamFlavor = {
                    flavour: button.id,
                    price: iceCreamPrice,
                    quantity: iceCreamQuantity
                };
                selectedIceCreams.push(iceCreamFlavor);
            };

            subtractCash();
        });
    };
};

// Subtract IceCream Price from Balance
function subtractCash() {
    // Subtract the price of the choosen IceCream from the Customers cash
    let currentCash = buyIceCream.cash;

    for (iceCream of selectedIceCreams) {
        currentCash -= iceCream.price * iceCream.quantity;

        if (currentCash == 5) {
            const doubleFlavourButton = document.getElementsByClassName('doubleFlavourButton');
            for (let i = 0; i < doubleFlavourButton.length; i++) {
                doubleFlavourButton[i].style.display = "none";
            };
        }

        if (currentCash <= 2.5 || currentCash == 0) {
            let textAnimation = new LetterLoading.Typed('#conversation', {
                strings: [`Oops, you spent your whole Cash. Enjoy your IceCream!`],
                loop: false,
                loadspeed: 0.3,
                cursor: false,
                simulate: "typed"
            });

            menu.style.display = 'none';
            buttons.innerHTML = '';
            buttons.style.display = 'none';

            function endOfPurchase() {
                listPurchase();
                buttons.style.display = 'flex';
                restart.innerHTML = "Restart";
                buttons.append(restart);
            };
            setTimeout(endOfPurchase, 3000);
        };
    };

    balance.innerHTML = `${buyIceCream.name}'s Cash: $${currentCash}`;
};

// Show which IceCreams were bought
function listPurchase() {
    let iceCreamList = document.getElementById('purchaseList');
  
    selectedIceCreams.forEach(purchase => {
      let iceCreamListItem = document.createElement('li');
      iceCreamListItem.textContent = `${purchase.quantity}: ${purchase.flavour}`;
      iceCreamList.appendChild(iceCreamListItem);
    });
  
    iceCreamList.style.display = 'initial';
};

// Restart Game
restart.addEventListener('click', () => {
    document.body.style.display = 'none';
    history.go(0);
});

const buyIceCream = new Customer(checkName(), 0);