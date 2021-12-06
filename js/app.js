let app = new Vue({
    el: '#app',
    data: {

        // booleans to indicate if the present day image is visible, start default as visible
        presentImageOneIsVisible: true,
        presentImageTwoIsVisible: true,
        presentImageThreeIsVisible: true,
        presentImageFourIsVisible: true,
        
        // booleans to indicate if the image from the past is visible, start default at not visible
        pastImageOneIsVisible: false,
        pastImageTwoIsVisible: false,
        pastImageThreeIsVisible: false,
        pastImageFourIsVisible: false,

        // h1 for the page
        primaryHeading: "Sheena Then and Now",

        // introductory blurb for the page
        introContent: `Ready for a blast to the past? Hover over the images to move back or forward in time to 
        see Sheena at different stages of life.`,

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
        thirdYear: "What Will Happen in The Year 2022?",

        // text for buttons
        buttonText: "Click to Find Out",
    },

    methods: {

        /* ---------- METHODS FOR IMAGE ONE HOVER ACTIONS ---------- */
        /* This method changes the visibility of the past and present images when hovered over */
        getOldImageOne: function(){
            this.presentImageOneIsVisible = false;  
            this.pastImageOneIsVisible = true;   
        },
        /* This method changes the visibility of the present image to visible 
        and the past image to invisible, which is done when we hover off of/away from a picture */
        revertBackOne: function(){
            this.presentImageOneIsVisible = true; 
            this.pastImageOneIsVisible = false;   
        }, 


        /* ---------- METHODS FOR IMAGE TWO HOVER ACTIONS ---------- */
        /* This method changes the visibility of the past and present images when hovered over */
        getOldImageTwo: function(){
            this.presentImageTwoIsVisible = false;  
            this.pastImageTwoIsVisible = true;   
        },
        /* This method changes the visibility of the present image to visible 
        and the past image to invisible, which is done when we hover off of/away from a picture */
        revertBackTwo: function(){
            this.presentImageTwoIsVisible = true; 
            this.pastImageTwoIsVisible = false;   
        }, 


        /* ---------- METHODS FOR IMAGE THREE HOVER ACTIONS ---------- */
        /* This method changes the visibility of the past and present images when hovered over */
        getOldImageThree: function(){
            this.presentImageThreeIsVisible = false;  
            this.pastImageThreeIsVisible = true;   
        },
        /* This method changes the visibility of the present image to visible 
        and the past image to invisible, which is done when we hover off of/away from a picture */
        revertBackThree: function(){
            this.presentImageThreeIsVisible = true; 
            this.pastImageThreeIsVisible = false;   
        }, 


        /* ---------- METHODS FOR IMAGE FOUR HOVER ACTIONS ---------- */
        /* This method changes the visibility of the past and present images when hovered over */
        getOldImageFour: function(){
            this.presentImageFourIsVisible = false;  
            this.pastImageFourIsVisible = true;   
        },
        /* This method changes the visibility of the present image to visible 
        and the past image to invisible, which is done when we hover off of/away from a picture */
        revertBackFour: function(){
            this.presentImageFourIsVisible = true; 
            this.pastImageFourIsVisible = false;   
        }, 


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
            yearButton.style.display = "none"; // hide button
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
            yearButton.style.display = "none"; // hide button
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
            yearButton.style.display = "none"; // hide button
        }
     }
});