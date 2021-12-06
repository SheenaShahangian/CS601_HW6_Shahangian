# Read Me - MET CS 601 Sheena Shahangian

While not explicitly required, I have opted to host my assignment 6 at the following URL: https://xenodochial-yonath-676384.netlify.app/

Please click on that link in order to run this program, or you can run it from the index.html file supplied in the zipped folder submitted via Blackboard.

In order to run the program, I have created a styled and designed page (live hosted link above). When you open this page, you will find four images of myself in the modern day. When you hover over each of these images, a photo from my past will show in its place. When you hover off the photo, it will revert back to the modern day image. I have used Vue to perform this functionality, specifically using the @mouseover and @mouseleave. I have also used v-show.

Beneath the images grouping, I have another area that also uses Vue. This is a small timeline of sorts, with buttons the user can click on to reveal what happened in my life at that time/year. When they click the button, the button disappears and the answer for what happened in that year written to the DOM. v-on: click is use for this.

When looking at the zipped folder, the directory structure is a follows:

* The css folder contains the stylesheet, by the name of "styles.css".
* The multimedia folder contains all the images used on the site, including the site logo.
* The js folder contains my app.js file. As the module notes specify, it is in my JS file where I create my Vue instance. In my html file, I have used the Vue cdn link provided in the module notes.
* The program can be run by clicking on the live hosted URL above or by going to the index.html file.



Below, I have shown screenshots of a quick sample run of the program. You'll see in the first screenshot, I have entered the page and have not hovered over any images. In the second screenshot, I hover over the first image, and you see it changes to an older photo of me. The last screenshot shows when I hover off that image, and it reverts back.

### Before Hovering Over Any image

As you can see below, we start with all images being modern day photos of me. My mouse is to the left of the first image and has not hovered over any photos yet.

<img width="1680" alt="Screen Shot 2021-12-05 at 8 45 46 PM" src="https://user-images.githubusercontent.com/74014027/144784057-82a2faba-1700-4e8c-9982-7423f46e372b.png">

### After Hovering Over An Image

As you can see below, when I hover over an image (in this case, my cursor is hovering over the first image), it shows me an older image in time, rather than the first image we saw above.

<img width="1680" alt="Screen Shot 2021-12-05 at 8 45 59 PM" src="https://user-images.githubusercontent.com/74014027/144784181-2989fbd8-11e7-49d1-8ae9-0c499b544fbb.png">

### After Un-Hovering Over An Image

As you can see below, when I remove my mouse from the image (it is now to the left of the first image again), it goes back to the original modern day image.

<img width="1680" alt="Screen Shot 2021-12-05 at 8 46 11 PM" src="https://user-images.githubusercontent.com/74014027/144784282-4eb0e060-486d-4bd7-8e9d-ea1c02fd71e0.png">


## GitHub

To view this project on GitHub, please visit this link: https://github.com/SheenaShahangian/CS601_HW6_Shahangian

The repository is public, however should you have any trouble accessing it, please do not hesitate to reach out to me. I can be reached at sheenas@bu.edu.


## Requested Elements

Per the instructions, I have done the following:

* I have created an html page (index.html) with four images of my choice. These are four images of me in the modern day.
* I have also added four images of myself when I was younger. These are the images that can be seen when hovered.
* I have used the Vue.js library to allow for the image to change from the modern-day current image to the image of me when I was younger. When the user un-hovers, it will revert back to the modern day image.
* I have also used the double curly braces to pull in data from my Vue instance (in my app.js file) to populate everything from the h1 on the page, the h2 on the page, multiple h3 tags, paragraphs, to the button text.
* I have used Vue attribute binding for my changing image filenames (using :src), as well as their alt text (using :alt).
* In addition to the above Vue functionalities, I have also used v-on:click multiple times for the timeline buttons I have included at the bottom of the page. With those, when a user clicks one of the buttons, the button disappears and what you see is a blurb of text telling you what happened during a specific year in my life.
* I have made sure to run this program numerous times to ensure it works. To go above and beyond, I have also tested it in more than one browser, too.

### Incorporation of Other Additional Elements - How I Went Above and Beyond

I've attempted to add some new features beyond the standard requirements listed in the rubric. These include: 

* I have tested my program in Google Chrome, Firefox, and Safari to ensure it works as expected in multiple browsers.
* I have opted to host my assignment (see live link above).
* I have designed and styled my page so that it is a clean and easy to use user interface.
* As mentioned above, rather than only adding one additional example of a Vue feature or event, I added  three events for the timeline portion of the page, so that when a user clicks each button, a different method is called. I have also used Vue data binding multiple times, which was not required. I have also used the double curly braces to populate data from my Vue instance into the html page. My goal here was to make sure I tested out as many of the features in the module content as I saw fit.
* Per the professor's recommendation, I have opted to use let rather than var for declaring my variables, as I wanted to experiment with having block level scope, which var does not offer.
* I have thoroughly commented all of my code, to make it easy to understand and come back to in the future.
* I have run my CSS through a validator. For my HTML, while it was stated we didn't need to use validators, as Vue isn't compatible with them, I opted to use it just to make sure I didn't have any non-Vue related errors. It's worth noting, the validator will say things, like I don't have any alt text or I don't have an img src. I do have these, but I have used Vue attribute binding to specify them this week. The validator cannot understand that, though. However, I have ensured that there are no non-Vue related errors.