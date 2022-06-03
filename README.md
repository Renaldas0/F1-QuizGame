# F1-QuizGame

Formula 1 Quiz is made to test the knowledge of Formula 1 enthusiasts of all ages in a quick and simple way with 10 questions.
The answers are shown if answered incorrectly.
(Main Quiz Page) - https://renaldas0.github.io/F1-QuizGame/
![am-i-responsive](https://user-images.githubusercontent.com/97538312/171836625-1c8571cb-9184-4bb7-84dc-7bc1a55dc444.jpg)


## **Features**

- **Front Page** 
  - The first thing to load up for the user is the introduction page which features a start button and text explaining to press start to begin the quiz.
  - Clicking on the header will take the user back to the load up page.

  - The background behind the quiz is an image based on Formula 1 to match the theme of this quiz and it covers the entire page.
![load-up-page](https://user-images.githubusercontent.com/97538312/171836642-d72a3a59-e34b-4b6d-a9da-dd9c9816965a.jpg)

  - Responsive feature for mobile devices makes the buttons align under each other.
  ![phone-screenshot](https://user-images.githubusercontent.com/97538312/171836808-0dd9b2fc-ca14-45d6-8253-b8c0ded92d1c.jpg)




- **Quiz Page**
  - The quiz page itself is a very similar layout as the opening page
  - Consists of a header, Question, 4 answer buttons, a score tracker , next and restart buttons.
  - This quiz has a total of 10 questions and the next will only show if an answer has been selected.
![quiz-layout](https://user-images.githubusercontent.com/97538312/171836859-3ff20d50-5ec1-4b8f-ae12-a482165dfca8.jpg)




  - If answered correctly then the background colour of the quiz container changes to green and a text appears to say it is correct.
  - With every correct answer the score count goes up by 1.
![Correct answer f1](https://user-images.githubusercontent.com/97538312/171189079-081844f0-533d-4bc9-9a93-39f74bf4a638.jpg)



  - If answered incorrectly then the background colour changes to red and the text reads "You got this one wrong . The correct answer was (correct answer).
![Wrong answer colour f1](https://user-images.githubusercontent.com/97538312/171189096-2b8283f1-6d11-4710-bd4f-cbf0c08c4cd4.jpg)


- **Navigation**

  - The header will take the user back to the start page if clicked.
  - The start button will load up the quiz page.
  - Next button will only work if an answer is selected and will then display the next question until it reaches the last one.
![Select answer alert f1](https://user-images.githubusercontent.com/97538312/170990674-36b591d9-7529-48f9-82e1-378e25943408.jpg)

  - Once all 10 questions are answered an alert will show up to inform the user of the next step.
  - The final score is also displayed in the alert message
![Final-score-alert](https://user-images.githubusercontent.com/97538312/171836708-a7527347-4aef-4985-b6e5-1aca21db83f6.jpg)



  - The restart button will take the user back to the first question of the quiz.


### Testing

- I have tested that this website is responsive, looks good and works as intended on the different standard screen sizes, using the devtools device toolbar in Google Chrome.
- I have tested that this website works in different browsers: Chrome, Safari, Firefox.
- I have confirmed that the quiz is fully functional. The different buttons do what they're supposed to do and trigger their respective functions.
- I have also checked the lighthouse statistics for the game 
 ![Lighthouse screenshot f1](https://user-images.githubusercontent.com/97538312/170991041-8b061360-e3db-4e61-aac1-6123bd838238.jpg)
- I also passed the website through responsinator to check the responsiveness on different devices and it looks good.


### Validator Testing
- HTML
    - No errors were found when passing through the official W3C Validator - https://validator.w3.org/nu/?doc=https%3A%2F%2Frenaldas0.github.io%2FF1-QuizGame%2F

- CSS
    - No errors were found when passing through the official (Jigsaw) Validator - https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frenaldas0.github.io%2FF1-QuizGame%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en

- JavaScript
    - No errors were found when passing through the JSHint Validator - https://jshint.com/
     
- Metrics
    - There are 3 functions in this file.
    - Function with the largest signature take 1 arguments, while the median is 0.
    - Largest function has 16 statements in it, while the median is 11.
    - The most complex function has a cyclomatic complexity value of 9 while the median is 3.

- There are 13 warnings issued
	-'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
	- 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).

### Bugs encountered 
 - Encountered a bug where the answer buttons would move out of alignment if the text inside is longer on smaller width devices.
 - I fixed this bug by using media quesries and setting the buttons to display underneath one another on devices with a screen width below 440px.

### Unfixed Bugs
 - There are No unfixed bugs.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select pages
- Then select the main branch 
- Once the main branch has been selected, the page will be automatically be refreshed and successfully deployed.


The live link can be found here: (F1-QuizGame) https://renaldas0.github.io/F1-QuizGame/

## Credits

### Content
- Some inspiration was taken from a youtube tutorial by Web Dev Simplified for the change of background colours link - https://www.youtube.com/c/WebDevSimplified
- I also referred back to the javaScript essentials lessons for the coding of functions.

### Media
- The background image was taken from Pexels.com link - https://www.pexels.com/
- Favicon was created in favicon.io - https://favicon.io/favicon-generator/
