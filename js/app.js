let app = new Vue({
    el: '#app',
    data: {
        isVisibleOne: true,
        isVisibleTwo: true,
        isVisibleThree: true,
        isVisibleFour: true,

        // h1 for the page
        primaryHeading: "Sheena Then and Now",

        // image one data, including filenames and alt text
        imageOneBeforeHover: "multimedia/sheena-adult-1.jpeg",
        imageOneAltTxtBefore: "Sheena standing in a lake with the wind blowing in her hair",
        imageOneAfterHover: "multimedia/sheena-child-1.jpeg",
        imageOneAltTxtAfter: "Sheena and her sister holding hands and walking down the street",

        // image two data, including filenames and alt text
        imageTwoBeforeHover: "multimedia/sheena-adult-2.jpeg",
        imageTwoAltTxtBefore: "Sheena and her sister smiling at the camera on her wedding day",
        imageTwoAfterHover: "multimedia/sheena-child-2.jpeg",
        imageTwoAltTxtAfter: "Sheena and her sister hugging",

        // image three data, including filenames and alt text
        imageThreeBeforeHover: "multimedia/sheena-adult-3.jpeg",
        imageThreeAltTxtBefore: "Sheena sitting on a rock in the mountains",
        imageThreeAfterHover: "multimedia/sheena-child-3.jpeg",
        imageThreeAltTxtAfter: "Sheena as a child wearing rainbow goggles at the pool",

        //image four data, including filenames and alt text
        imageFourBeforeHover: "multimedia/sheena-adult-4.jpeg",
        imageFourAltTxtBefore: "Sheena smiling and looking down",
        imageFourAfterHover: "multimedia/sheena-child-4.jpeg",
        imageFourAltTxtAfter: "Sheena wearing a captain's hat",

        // h2 for the page
        secondaryHeading: "Sheena's Timeline Of Life Events",

        // p for under the secondary heading
        timelineBlurb: `Curious to see what happened during different milestone years in Sheena's life? Simply 
        click the buttons below to reveal the answers.`,

        // years the timeline will address, as h3s
        firstYear: "What Happened in The Year 2011?",
        secondYear: "What Happened in The Year 2015?",
        thirdYear: "What Will Happen in The Year 2022",

        // text for buttons
        buttonText: "Click to Find Out",
    },

    methods: {
        /* This is a method that reveals the answer to the first timeline year, and hides the 
        button when the answer is displayed */
        revealYearOne: function() {
            // get the answer container and replace its contents with the actual answer
            let answerOne = document.getElementById("answer_one");
            answerOne.innerHTML = `2011 is the year Sheena graduated high school.`;

            // reveal the answer, as it was hidden
            answerOne.style.display = "block";

            // get the button so we can hide it after revealing the answer
            let yearButton = document.getElementById("button_one");
            yearButton.style.display = "none";
        },

        /* This is a method that reveals the answer to the second timeline year, and hides the 
        button when the answer is displayed */
        revealYearTwo: function() {
            // get the answer container and replace its contents with the actual answer
            let answerTwo = document.getElementById("answer_two");
            answerTwo.innerHTML = `In 2015, Sheena graduated with her BS in Business Administration.`;

            // reveal the answer, as it was hidden
            answerTwo.style.display = "block";

            // get the button so we can hide it after revealing the answer
            let yearButton = document.getElementById("button_two");
            yearButton.style.display = "none";
        },

        /* This is a method that reveals the answer to the third timeline year, and hides the 
        button when the answer is displayed */
        revealYearThree: function() {
            // get the answer container and replace its contents with the actual answer
            let answerThree = document.getElementById("answer_three");
            answerThree.innerHTML = `While it hasn't happened yet, 2022 is the year Sheena gets her MS in Software Development 
            from Boston University.`;

            // reveal the answer, as it was hidden
            answerThree.style.display = "block";

            // get the button so we can hide it after revealing the answer
            let yearButton = document.getElementById("button_three");
            yearButton.style.display = "none";
        }
     }
});