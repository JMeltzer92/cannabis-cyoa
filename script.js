// Grab the body for appending divs
const body = document.querySelector('.grid')

const data = [
    {id: 0,
        title: "Consumer",
        graf: `Voters have overwhelmingly affirmed your right to buy cannabis. It’s been a long battle in the arena of public opinion: as recently as 2010, less than half of Americans supported legal cannabis. Today, nearly 70% do. Over two thirds of Maryland voters voted for legalization, more than voted for new governor Wes Moore.</p>
        <p class = "graf">As public support for cannabis has increased, so has the understanding of the diversity of cannabis consumers. Legalization will give users and prospective users more time to think about what kind of user you’d like to be.`,
        newButtons: [2, 3],
        nextQuestion: "My use will be...",
        imgSrc: "images\\line.png",
        alt: "An impressionist-style rendering of a large group of people waiting in line."
    },
    {id: 1,
        title: "Business",
        graf: `Before intrepid business people can begin their quest for cannabis riches, they’ll have a few decisions to make. The first will be what kind of business they’d like to operate.</p>
        <p class = "graf">Maryland’s tightly regulated market means operators will have to apply for licenses that dictate what aspects of the cannabis business they can legally participate in. Businesses will be limited to one license to alleviate market concentration, or when a few big operators seize control of the market and gain outsize influence over things like supply and price.
        `,
        newButtons: [4, 5, 6],
        nextQuestion: "I want to be a...",
        imgSrc: "images\\seller.png",
        alt: "An impressionist-style rendering of a woman behind a counter discussing a transaction with a customer next to a large cannabis plant."
    },
    {id: 2,
        title: "Medical",
        graf: `Good news! Not a lot is going to change for you. You will continue to be able to buy from your licensed medical dispensary and not a lot should change about how the process looks. One key difference: taxation. Cannabis will be taxed at 9%. Medical cannabis will remain untaxed, so hold on to those medical cards.`,
        newButtons: [],
        nextQuestion: "",
        imgSrc: "images\\medical.png",
        alt: "An impressionist-style rendering of a woman in green scrubs and a stethoscope discussing medicinal cannabis with a patient."
    },
    {id: 3,
        title: "Recreational",
        graf: `If you’ve never used cannabis, before walking into a dispensary to buy, you’ll have some important things to consider, most importantly your personal health and safety. Before you buy anything, you should think hard and ask questions about amount, potency and mode of consumption, among other factors. Additionally, new users should note that they will still be prohibited from doing things like driving under the influence of cannabis or partaking in public spaces.</p>
        <p class = 'graf'>For experienced users, particularly ones who have relied on the illicit market, one of legalization’s major benefits is the greater certainty it provides to consumers that they’re getting exactly what is on the label, a factor that should help move consumers away from the illegal trade, which can’t offer such guarantees.</p>
        <blockquote><span class = "quote">“It was never intended to be a moneymaker for Maryland. We watched what other states did. We want our citizens to be able to benefit and participate… the goal for me is to get enough taxes to be able to have proper oversight and accountability.”</span><br><span class = "source">- C.T. Wilson</span></blockquote>
        <p class = 'graf'>Lawmakers also hope to convince consumers to abandon the illegal market by keeping prices for legal cannabis lower. Cannabis sales will be taxed at 9%, landing on the low end compared to other legal states like California (15%), Vermont (14%), or Washington state (37%), and undercutting Virginia (21%), which also opens its market on July 1. Consumers might also benefit from a cannabis spot price that, as of April, is near historic lows.`,
        newButtons: [],
        nextQuestion: "",
        imgSrc: "images\\recreational.png",
        alt: "An impressionist-style rendering of a man riding a bicycle along a waterfront with a large container ship in the distance."
    },
    {id: 4,
        title: "Grower",
        graf: `Growers will have an especially important role to play in Maryland’s recreational cannabis industry. Because cannabis is still federally illegal, it remains illegal to move cannabis over state borders or for bulk buyers and sellers in different states to do business with each other. As such, growers will be charged with making sure there is adequate cannabis supply to meet new demand and that consumers have a safe product to enjoy.</p>
        <p class = 'graf'>Licensed growers will be able to cultivate between 10,000 and 300,000 square feet of indoor grow space, enough to produce over half a million pounds of cannabis per year.</p>
        <p class = 'graf'>There are also “micro-licenses” for growers, like dispensaries, which would give businesses the right to grow any amount under 10,000 square feet.`, 
        newButtons: [7], 
        nextQuestion: "What now?",
        imgSrc: "images\\grow_house.png",
        alt: "An impressionist-style rendering of a greenhouse containing several cannabis plants."
    },
    {id: 5,
        title: "Processor",
        graf: `Cannabis processors will serve as the bridge between growers and retailers. Processors will perform all steps necessary to get cannabis on shelves including drying, curing, baking and packaging. Processors are especially important for products like edibles and tinctures where the actual cannabis plant is highly processed.</p>
        <p class = 'graf'>Licensed processors will be allowed to process any amount above 1,000 pounds of cannabis per year. Another “micro-license” for processors allows them to work with <i>up</i> to 1,000 pounds annually.</p>`,
        newButtons: [7],
        nextQuestion: "What now?",
        imgSrc: "images\\processors.png",
        alt: "An impressionist-style rendering of a group of workers in white coats, goggles and respirators processing cannabis."
    },
    {id: 6,
        title: "Distributor / Dispensary",
        graf: `Dispensaries will be the most people-facing arm of the cannabis industry. Dispensaries and dispensary owners will play a large role in making sure there is adequate supply for the avalanche of demand that lawmakers expect starting July 1 and providing the kind of advice that will help consumers ensure they are practicing healthy consumption habits.</p>
        <p class = 'graf'>Dispensary licenses will make business owners eligible to operate a physical retail location and sell cannabis products, so the next step after getting licensed will be to find a supplier and a storefront.</p>
        <p class = 'graf'>But you don’t need a store to sell cannabis. The bill provides for “micro-licenses,” which will allow businesses to operate a delivery service for cannabis products, as long as that business has fewer than 10 employees.`,
        newButtons: [7],
        nextQuestion: "What now?",
        imgSrc: "images\\amigos.png",
        alt: "An impressionist-style rendering of three men packaging, or perhaps otherwise working with, cannabis plants."
    },
    {id: 7,
        title: "Get Licensed",
        graf: `You’ve done all your homework. You’ve got your finances in order. You’ve studied the viability of the idea. You put a business plan together. You have investors lined up. The final step before you can become a bona fide cannabis entrepreneur is to get the state’s seal of approval – a license to operate.</p>
        <p class = 'graf'>Competition for licenses is expected to be fierce, given high demand for cannabis. That said, the state still needs operators ready to meet the state’s demand on day one. To that aim, current licensed medical operators will be able to convert their license to a recreational one by paying a conversion fee in line with their revenue, but not more than $2 million. Some medical operators feel the fee is too high.</p>
        <p class = 'graf'>“There are many of us that are small, independent operators… and the fees that have been proposed are really high,” said Tracey Lancaster-Miller, executive vice-president of Peake Relief in Rockville and President of the Maryland Dispensary Association. Lancaster-Miller and other current medical operators say federal regulations around taxation and banking make it difficult for them to write off these kinds of expenses like other businesses might be allowed to.</p>
        <blockquote><span class = "quote">“There are many of us that are small, independent operators… and the fees that have been proposed are really high,”</span><br><span class = "source">- Tracey Lancaster-Miller, Executive VP, Peake Relief & President, Maryland Dispensary Association</span></blockquote>
        <p class = 'graf'>Lawmakers have also prioritized applicants potentially affected by the war on drugs, a series of aggressive state and federal drug enforcement policies that disproportionately affected Black Americans and served as one of the primary drivers of mass incarceration.</p>
        <p class = 'graf'>The first round of new licenses will be reserved for “social equity applicants” and will be issued before Jan. 1, 2024. Though rules around race-based set-asides make it complicated to specifically prioritize Black and brown applicants, lawmakers crafted the definition of “social equity applicants” to make sure those most affected have the first spots in the line.</p>
        <p class = 'graf'>To be defined as “social equity applicant” (and if your application is successful a “social equity licensee), applicants will have maintain at least a 65% ownership stake in their business and fulfill at least one of these requirements:</p>
        <ul class = 'lineup-list'>
            <li>Have lived in a “disproportionately impacted area” for at least 5 of the last 10 years</li>
            <li>Attended public school in a “disproportionately impacted area” for at least 5 years</li>
            <li>Attended a four-year higher education institution in Maryland where at least 40% of students are eligible for Pell Grants</li>
        </ul>
        <p class = 'graf'>The bill defines a “disproportionately impacted area” as a geographic area denoted by the state cannabis commission’s new social equity office that had above 150% of the state’s 10-year average for cannabis possession charges. Licenses for second-round applicants will begin to be issued by May of 2024.</p>
        <p class = 'graf'>Applying for a license – whether for growing, processing or retailing – also has a cost. A standard license application will cost $5,000 while an application for a “micro-license” will run $1,000.`,
        newButtons: [],
        nextQuestion: "",
        imgSrc: "images\\licensing.png",
        alt: "An impressionist-style rendering of a woman handing something to a patent clerk in a tie while a law enforcement officer looks on in the background."
    }
]

const makeButtons = function (idChosen, array) {
    const buttons = [];
    workingData = data[idChosen];
    for (let i = 0; i < array.length; i++){
        const newIdIndex = array[i]
        const button = document.createElement("button");
        button.textContent = data[newIdIndex].title;
        button.setAttribute('onclick', `pickChoice(${workingData.newButtons[i]})`);
        buttons.push(button);
    }
    return (buttons)
}

const pickChoice = function (idChosen) {
    const buttonBoxes = document.querySelectorAll('.button-box');

    buttonBoxes.forEach(buttonBox => {
        const buttons = buttonBox.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.disabled = true;
        });
    });

    const arrow = document.createElement("img");
    arrow.setAttribute("src", "images/arrow-icon.svg");
    arrow.setAttribute("class", "arrow");
    body.append(arrow);

    const workingData = data[idChosen];
    console.log(workingData);
    const newStory = document.createElement("div");
    newStory.classList.add("story-slide");
    if (workingData.imgSrc) {newStory.innerHTML = `
    <p class = 'text-center sub-hed'>${workingData.title}</p>
    <img class = 'story-pic' src = '${workingData.imgSrc}' alt = '${workingData.alt}'></img>
    <p class = 'graf'>${workingData.graf}</p>
    `} else {newStory.innerHTML = `
    <p class = 'text-center sub-hed'>${workingData.title}</p>
    <p class = 'graf'>${workingData.graf}</p>
    `};
    body.append(newStory);
    
    const newButtonBox = document.createElement("div");
    newButtonBox.classList.add("button-box");
    newButtonBox.setAttribute("used", 0)

    const newButtonQuestion = document.createElement("p");
    newButtonQuestion.classList.add("button-question");
    newButtonQuestion.innerHTML = workingData.nextQuestion;
    if (workingData['nextQuestion']) {
        newButtonBox.appendChild(newButtonQuestion)
    };

    const newButtonIndeces = workingData.newButtons;
    if (newButtonIndeces.length > 0) {
        buttons = makeButtons(idChosen, newButtonIndeces)
            for (let i = 0; i < buttons.length; i++) {
            newButtonBox.appendChild(buttons[i]);
            }
        body.append(newButtonBox);
    };

    newStory.scrollIntoView({ behavior: 'smooth' })

}

const reset = function () {
    const allArrows = document.querySelectorAll(".arrow")
    allArrows.forEach(arrow => {
        arrow.remove()
    });

    const allStories = document.querySelectorAll(".story-slide")
    allStories.forEach(slide => {
        if (slide.id !== 'start-slide') {
            slide.remove()
        }
    });

    const allButtons = document.querySelectorAll(".button-box")
    allButtons.forEach( button => {
        if (button.id !== 'start-buttons') {
            button.remove()
        }
    });

    const startButtons = document.querySelector('#start-buttons')
    const startButtonsButtons = startButtons.querySelectorAll('button')
    startButtonsButtons.forEach( button => {
        button.disabled = false;
    })

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const returnButton = document.getElementById("restart-button");
const storyDiv = document.querySelector(".container")

document.addEventListener('click', function() {
    let allStorySlides = document.querySelectorAll('.story-slide:not(#start-slide)');
    const returnButton = document.getElementById("restart-button");

    if (allStorySlides.length > 0) {
    returnButton.style.display = 'block';
    } else {
    returnButton.style.display = 'none';
    }
});


// const buttonBoxes = document.querySelectorAll('.button-box');

// // loop through each button-box and add event listeners to its buttons
// buttonBoxes.forEach(buttonBox => {
//   const buttons = buttonBox.querySelectorAll('button');
//   buttons.forEach(button => {
//     button.addEventListener('click', () => {
//       // disable all the buttons in this button-box
//       buttons.forEach(btn => {
//         btn.disabled = true;
//       });
//     });
//   });
// });

// // add an event listener to the reset button to enable all the buttons again
// const resetButton = document.querySelector('#restart-button');
// resetButton.addEventListener('click', () => {
//   buttonBoxes.forEach(buttonBox => {
//     const buttons = buttonBox.querySelectorAll('button');
//     buttons.forEach(btn => {
//       btn.disabled = false;
//     });
//   });
// });