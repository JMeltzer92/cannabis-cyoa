// Grab the body for appending divs
const body = document.querySelector('.grid')

const data = [
    {id: 0,
        title: "Consumer",
        graf: `Starting July 1st you’ll be able to walk into a store, buy cannabis, and no one will even ask you why you need it. Whether you are a current medical cannabis patient, one of the many Marylanders planning on moving away from the illicit market, or just curious about trying cannabis, legalization will come with some fundamental changes in how cannabis is purchased in Maryland.`,
        newButtons: [2, 3],
        nextQuestion: "My use will be..."
    },
    {id: 1,
        title: "Business",
        graf: `Starting July 1st there are going to be a lot more people in the market for cannabis. An influx of new customers and the revenue that they’ll bring with them is an attractive incentive for businesses, particularly early market entrants who will have the first shot at building relationships with retail customers or other cannabis businesses.`,
        newButtons: [4, 5, 6],
        nextQuestion: "I want to be a...",
        imgSrc: "images\\seller.png"
    },
    {id: 2,
        title: "Medical",
        graf: `Good news! Not a lot is going to change for you. You will continue to be able to buy from your licensed medical dispensary and not a lot should change about how the process looks. One key difference: taxation. Cannabis will be taxed at 9%.`,
        newButtons: [],
        nextQuestion: "",
        imgSrc: "images\\medical.png"
    },
    {id: 3,
        title: "Recreational",
        graf: `If you’ve never used cannabis, before walking into a dispensary to buy, you’ll have some important things to consider, most importantly your personal health and safety.</p><blockquote></blockquote><p class = 'graf'>Thankfully, one of legalization’s major benefits is the greater sense of certainty it provides to consumers that they’re getting exactly what is on the label.</p>
        <blockquote>'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, resquietat in pace en nomine file et spiritu sancti.'<br> - Wayne Gretzky</blockquote>
        <p class = 'graf'>One of legalization’s major benefits is the greater sense of certainty it provides to consumers that they’re getting exactly what is on the label, a factor that should be helpful in driving consumers away from the illicit market, which can normally offer no such guarantees.`,
        newButtons: [],
        nextQuestion: "",
        imgSrc: "images\\recreational.png"
    },
    {id: 4,
        title: "Grower",
        graf: `Growers will have an especially important role to play in Maryland’s recreational cannabis industry. Because cannabis is still federally illegal, it remains pretty much impossible to move cannabis over state borders or for bulk buyers and sellers in different states to do business with each other. As such, growers will be enormously important in making sure there is adequate cannabis supply to meet new demand and that consumers have a safe product to enjoy.<br>
        Licensed growers will be able to operate between 10,000 and 300,000 square feet of indoor grow space, enough to produce an estimated over half a million pounds of cannabis per year.<br>
        Like dispensaries, prospective growers who want to deal in smaller amounts have the option to apply for a “micro-license” which will grant them the opportunity to grow any amount under 10,000 square feet.`, 
        newButtons: [7], 
        nextQuestion: "What now?",
        imgSrc: "images\\grow_house.png"
    },
    {id: 5,
        title: "Processor",
        graf: `Cannabis processors will serve as the bridge between growers and retailers. Processors will perform all the steps necessary to get cannabis on shelves including drying, curing, baking, and packaging. Processors are especially important for products like edibles and tinctures where the actual cannabis plant is highly processed.<br>
        Licensed processors will be allowed to process anywhere above 1,000 pounds of cannabis per year under the new law. Like with other types of licenses there will be \“micro-licenses\” that allow licensees to process up to 1,000 pounds yearly.`,
        newButtons: [7],
        nextQuestion: "What now?",
        imgSrc: "images\\processors.png"
    },
    {id: 6,
        title: "Distributor/Dispensary",
        graf: `Dispensaries will be the most people-facing arm of the cannabis industry. Dispensaries and dispensary owners will play a large role in making sure there is adequate supply for the avalanche of demand that lawmakers expect starting July 1st and providing the kind of valuable advice that will help consumers ensure they are practicing healthy consumption habits.<br>Dispensary licenses will make business owners eligible to operate a physical retail location and sell cannabis products so the next step after getting licensed will be to find a supplier and a storefront.<br>
        The bill also provides an option for prospective sellers who don’t necessarily want to operate a store. “Micro-licenses” will allow businesses to operate a delivery service for cannabis products as long as that business has fewer than 10 employees.`,
        newButtons: [7],
        nextQuestion: "What now?"
    },
    {id: 7,
        title: "Get Licensed",
        graf: `You’ve done all your homework. You’ve got your finances in order. You’ve studied the viability of the idea. You put a business plan together. You have investors lined up. The final step before you can become a bonafide cannabis entrepreneur is a seal of approval from the state in the form of a license to operate.<br>
        Competition for licenses is expected to be fierce given high demand for cannabis. That said, the state still needs operators who will be ready to meet the state’s demand on day one. To that aim, current licensed medical operators will have the opportunity to convert their license to a recreational one by paying a conversion fee in line with their revenue. Though some medical operators feel this amount is too high.</p>
        <blockquote>'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, resquietat in pace en nomine file et spiritu sancti.'<br> - Wayne Gretzky</blockquote>
        <p class = 'graf'>Lawmakers have also written provisions into the bill to prioritize applicants potentially affected by the war on drugs, a series of aggressive state and federal drug enforcement policies that disproportionately affected Black Americans and served as one of the primary drivers of mass incarceration.</p>
        <blockquote>'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, resquietat in pace en nomine file et spiritu sancti.'<br> - Wayne Gretzky</blockquote>
        <p class = 'graf'>The first round of new licenses will be reserved for these so-called \“social equity applicants\” and will be issued before January 1st 2024. Though rules around race-based set-asides make it complicated to specifically prioritize Black and brown applicants, lawmakers crafted the definition of “social equity applicants” to make sure those most affected have the first spots in the line for a license.<br>
        To be defined as “social equity applicant” (and if your application is successful a “social equity licensee), applicants will have maintain at least a 65% ownership stake in their business and fulfill at least one of these requirements:</p>
        <ul class = 'lineup-list'>
            <li>Have lived in a “disproportionately impacted area” for at least 5 of the last 10 years</li>
            <li>Attended public school in a “disproportionately impacted area” for at least 5 years</li>
            <li>Attended a 4-year higher education institution in Maryland where at least 40% of students are eligible for Pell Grants</li>
        </ul>
        <p class = 'graf'>The bill defines a “disproportionately impacted area” as a means a geographic area outlined by the state cannabis commission’s new office of social equity that had above 150% of the state’s 10-year average for cannabis possession charges. Licenses for second-round applicants will begin to be issued by May of 2024.<br>
        Applying for a license will also come at a cost. A standard license application will cost prospective licensees $5,000 while an application for a “micro-license” will run $1,000. `,
        newButtons: [],
        nextQuestion: "",
        imgSrc: "images\\licensing.png"
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
    <p class = 'text-center hed'>${workingData.title}</p>
    <div class = 'clearfix'>
        <img class = 'story-pic' src = '${workingData.imgSrc}'></img>
        <p class = 'graf with-pic'>${workingData.graf}</p>
    </div>
    `} else {newStory.innerHTML = `
    <p class = 'text-center hed'>${workingData.title}</p>
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