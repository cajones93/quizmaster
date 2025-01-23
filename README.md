# Quizmaster
Link to the live site: [Quizmaster](https://cajones93.github.io/quizmaster/index.html)

## Table Of Contents:
1. [Justification](#justification)

2. [Design & Planning](#design-&-planning)
    * [User Stories](#user-stories)
      * [User](#user)
      * [Site Owner](#site-owner)
    * [Wireframes](#wireframes)
    * [Typography](#typography)
    * [Colour Scheme](#colour-scheme)
    
3. [Features](#features)
    * [Navigation](#Navigation)
    * [Footer](#Footer)
    * [Home page](#Home-page)
    * [About page](#about-page)
    * [Contact page](#contact-page)
    * [Contact complete page](#contact-complete-page)
    * [Map](#map)
    * [FAQ](#faq-frequently-asked-questions)
    * [Contact form](#contact-form)
    * [Custom 404 Page](#custom-404-page)
    * [Features left to implement](#features-left-to-implement)

4. [Technologies Used](#technologies-used)

5. [Testing](#testing)
  * [Googles lighthouse performance](#googles-lighthouse-performance)
  * [Browser compatibility](#browser-compatibility)
  * [Responsiveness](#responsiveness)
  * [Code Validation](#code-validation)
    * [HTML](#html-validation)
    * [CSS](#css-validation)
  * [Manual testing](#manual-testing-user-stories-orand-features)

6. [Bugs](#bugs)

7. [Deployment](#deployment)

8. [Credits](#credits)

## Justification
The quizmaster app will allow users to choose their own quiz parameters including the category, number of questions, difficulty, and quiz format (multiple choice or true/false) so that users can personalise the content to their own preferences. This will increase user satisfaction and encourage users to keep using the app. Allowing users to customise the quiz experience means they can choose a topic they are interested in and compete with their friends. New topics and content can easily be added to the quiz by updating the API with new questions and categories.
Beyond this project, there are numerous other features that could be added such as tracking user interaction to enhance the overall user experience. High score tables and more in-depth scoring systems could also be implemented

## Design & Planning:

### User Stories
#### User 
As a user, I want to be able to:

- select the quiz category so I can choose the topic I am interested in.
- choose the number of questions so I can adjust the length of the quiz.
- select the difficulty level so I can challenge myself or make the quiz more suitable to my knowledge level.
- choose between multiple quiz types to tailor the quiz to my own quiz preference.
- track my final score and percentage of correct answers to I can identify areas for improvement.
- return to the quiz menu after finishing so I can easily start a new quiz. 

#### Site Owner
As the site owner, I want to be able to:
- provide users with a customisable and engaging quiz so they are more likely to return to the site and use the application.
- easily add new categories and questions so the application can be updated regularly with new content.
- provide the user with a score that they can share with friends to challenge eachother and reach new users.

### Wireframes
Wireframes were created in Balsamiq.

#### Desktop
![Desktop Wireframe](assets/images/readme/wireframes/desktop-wireframe.png)

#### Mobile
![Mobile Wireframe](assets/images/readme/wireframes/mobile-wireframe.png)

### Typography
I searched for a suitable font pairing on [fontpair.co](https://www.fontpair.co/all). I chose Fjalla One for titles and question content and Cantarell for the answer buttons. These fonts are easy to read so are ideal for a quiz application.

### Colour Scheme
This is the colour scheme I used for this project. I found it on Adobe Color trends in the UI/UX section [Adobe Color trends](https://color.adobe.com/trends/Ui/ux). I wanted to stick with a limited color scheme that is not too distracting from the questions and answers.

![Colour Scheme](assets/images/readme/colour-scheme.png)

## Features:

### Navigation
A user can navigate through the website through the buttons and forms. To get to the quiz, a user must input all of the quiz parameters and click the submit button. A user can return to the menu through the "back to menu" button. This button is on the game page and in the error and score modals that appear.


### Home Page
The home page shows a quiz parameters form. A user must select all of the quiz parameters before they are able to submit the form. This ensures that they have chosen all settings before trying to start the quiz.

![Home Page](assets/images/readme/features/homepage.png)

### Game Page - Loading Div
A loading "page" was added to prevent too many API calls in a short time which would lead to errors from the API. When loading the page for the first time,  refreshing the page, or refreshing the session token the user will see this div. It has a loading spinner as feedback for the user to know the site is still working and loading text so the user knows what is happening.

![Loading]


### Game Page - Start
The user will see an initial page layout which prompts them to start the game. The start game button will make the API call and set all of the quiz questions and answers. If there is an error, an error modal will appear. If not, the quiz answer buttons will change based on the quiz type selected.

![About Page](assets/images/readme/features/about-page.png)

### Game Page - Multiple Quiz
If the user has selected multiple choice for the quiz type, 4 buttons will be shown and answers will be randomly allocated to each button. If the user selects the correct answer, their score is increased and the next question is shown. If incorrect, the next question is shown. When the final question is answered, a score modal will appear.

![Multiple Quiz]()

### Game Page - Boolean Quiz
If the user has selected true/false for the quiz type, 2 buttons will be shown "true" and "false". If the user selects the correct answer, their score is increased and the next question is shown. If incorrect, the next question is shown. When the final question is answered, a score modal will appear.

![Boolean Quiz]()

### Session Token
The API provides a session token which prevents the API from showing a user the same question twice until the session token is refreshed. I decided to implement this to make things more interesting for the user. It is more interesting to answer different questions each time rather than answering the same questions over and over. This session token did cause a lot of issues during development which I have resolved.

### Error 4 Modal
If the API returns a response code 4 error, this meant that the API had returned all of the available questions and the session token needed to be refreshed. I created an error modal that has a button to refresh the token. The refresh token button calls the session token refresh link from the API and refreshes the page. This should reset all of the questions and allow the user to play again.

![Error Modal]()

### Score Modal
The score modal is shown at the end of the quiz. It shows the users score as a number and as a percentage. It also includes a back to menu button to return to the index page.

![Score Modal]()


### Features left to implement
* I wanted to add a high score table to track the users high scores for each quiz type but thought it would take too long to implement and would involve more APIs such as ![HighScore API](https://github.com/EmilienLeroy/HighScore).
* I had to remove one of the difficulty levels because there weren't enough true/false questions in the API database for some categories. I tried to add my own questions to the API but I never received a verification email from them to create an account.

## Technologies Used
* HTML - used for structuring the website
* CSS - for style and layout
* Bootstrap - for style and layout
* JavaScript - for interactivity
* Font Awesome - for icons
* Open Trivia Database - API for quiz questions and answers
* Google Fonts - for the fonts
* Github - for hosting and deploying the website
* BrowserStack - for testing the website compatibility with different browsers
* Responsinator - to view website on different devices
* Am I responsive? - to check responsive design
* Imageresizer - to resize images easily
* Cloud convert - to convert images to the webp format
* logo.com - to create an interesting logo
* Adobe color - to find a good colour scheme

## Testing
### Google's Lighthouse Performance
This section contains screenshots of the Home, About, and Contact pages lighthouse scores.
Each page has a mobile and desktop score. 

#### Home
#####  Mobile
![Home Mobile](assets/images/readme/testing/lighthouse/lighthouse-home-mob.png)

##### Desktop
![Home Desktop](assets/images/readme/testing/lighthouse/lighthouse-home-desk.png)

#### About
##### Mobile
![About Mobile](assets/images/readme/testing/lighthouse/lighthouse-about-mob.png)

##### Desktop
![About Desktop](assets/images/readme/testing/lighthouse/lighthouse-about-desk.png)

The about page 'Best Practices' section is showing a depreciated API error relating to the embedded google map.

#### Contact
##### Mobile
![Contact Mobile](assets/images/readme/testing/lighthouse/lighthouse-contact-mob.png)

##### Desktop
![Contact Desktop](assets/images/readme/testing/lighthouse/lighthouse-contact-desk.png)

#### Contact Complete
##### Mobile
![Contact Complete Mobile](assets/images/readme/testing/lighthouse/lighthouse-contact-complete-desk.png)

##### Desktop
![Contact Complete Desktop](assets/images/readme/testing/lighthouse/lighthouse-contact-complete-desk.png)

### Browser Compatibility
#### Chrome
##### Desktop
![Chrome Test Desktop](assets/images/readme/testing/browser/chrome-desk-test.png)

Result: No issues

##### Mobile
![Chrome Test Mobile](assets/images/readme/testing/browser/chrome-mob-test.png)

Result: No issues

#### Firefox
##### Desktop
![Firefox Test Desktop](assets/images/readme/testing/browser/firefox-test.png)

Result: No issues

##### Mobile
![Firefox Test Desktop](assets/images/readme/testing/browser/firefox-mob-test.png)

Result: No issues

#### Safari
##### Desktop
![Safari Test Desktop](assets/images/readme/testing/browser/safari-test.png)

Result: No issues

##### Mobile
![Safari Test Mobile](assets/images/readme/testing/browser/safari-mob-test.png)

Result: The map on the about page overhangs onto the FAQ section. 
(Resolved) - No issues.

### Responsiveness
This section shows the website responsiveness on a mobile device, iPad, and desktop. You can see how the site adapts to the different screen sizes through these screenshots.

#### Home Page
##### Mobile
![Home iPhone](assets/images/readme/testing/responsiveness/mob-home.png)

##### iPad
![Home iPad](assets/images/readme/testing/responsiveness/home-ipad.png)

##### Desktop
![Home Desktop](assets/images/readme/testing/responsiveness/desktop-home.png)


#### About Page
##### Mobile
![Home Services](assets/images/readme/testing/responsiveness/about-mob.png)

##### iPad
![Home Services](assets/images/readme/testing/responsiveness/about-ipad.png)

##### Desktop
![Home Services](assets/images/readme/testing/responsiveness/desktop-services.png)

#### Contact Form
##### Mobile
![Contact Mobile](assets/images/readme/testing/responsiveness/mob-contact-form.png)

##### iPad
![Contact iPad](assets/images/readme/testing/responsiveness/ipad-contact-form.png)

##### Desktop
![Contact Desktop](assets/images/readme/testing/responsiveness/desktop-contact.png)

### Code Validation
#### HTML Validation
##### Home
![Home HTML](assets/images/readme/testing/html/home-html-valid.png)

Result: No Errors.

##### About
![About HTML](assets/images/readme/testing/html/about-html-valid.png)

Result: No Errors.

##### Contact
![Contact HTML](assets/images/readme/testing/html/contact-html-valid.png)

Result: No Errors.

##### Contact-Complete
![Contact Complete HTML](assets/images/readme/testing/html/contact-complete-html-valid.png)
Result: No Errors.

##### 404 Page
![404 HTML](assets/images/readme/testing/html/404-html-valid.png)
Result: No Errors.

#### CSS Validation
![CSS Validation](assets/images/readme/testing/css/css-valid.png)

Result: No Errors.

### Manual Testing user stories or/and features
#### Testing for links, FAQ, and form
Test | Pass
--- | :---:
All navigation links lead to the correct pages  | &check;
Callout buttons lead to the correct pages  | &check;
Footer links open a new tab and lead to the correct sites  | &check;
FAQ accordion functions correctly  | &check;
Contact form doens't submit without entering information  | &check;
Contact form submits when required information is present  | &check;
Back to Home button takes user back to homepage | &check;
Entering an invalid URL takes you to the custom 404 page | &check;

#### User Story Testing
Number | User Story |  Test | Pass
--- | --- | --- | :---:
1 | A user wants to browse available paranormal experiences so that I can see the different options available. | The user scrolls down to see the services offered | &check;
2 | A user wants to view detailed information about the paranormal experiences so that I can clearly understand what is included in each service. | The user clicks the Our Services button or the about navigation link. They then scroll down to view the detailed information. | &check;  
3 | A user wants to submit a contact form so that I can reach out to the organiser for more information or to book an experience. | The user clicks the make an enquiry button or the contact navigation link and fills out the contact form. | &check;
4 | A user wants to get directions to the haunted house locations where paranormal experiences take place. | The user clicks the Our Services button or the Our Services navigation link and scrolls down to the haunted house section. The user can see an interactive map and can click the directions arrow. | &check;
5 | A user wants to read an FAQ section to quickly find answers to common questions. | The user clicks the Our Services button or the about navigation link and scrolls down to the FAQ section. | &check;
6 | A user wants to view social media links so that they can follow or share the page with others. | The user scrolls to the bottom of any page and clicks the social media icon. | &check;

##### User stories testing screenshots
###### 1. Browse available paranormal experiences

![Services](assets/images/readme/user-stories/services.png)

###### 2. View detailed information about experiences offered.

![Services](assets/images/readme/user-stories/detailedservices.png)

###### 3. Submit a contact form.

![Contact Form](assets/images/readme/user-stories/contact1.png)
![Contact Form Submitted](assets/images/readme/user-stories/contact2.png)

###### 4. Get directions to to the haunted houses.

![Haunted House Directions](assets/images/readme/user-stories/map-directions.png)

###### 5. Read an FAQ section.

![FAQ](assets/images/readme/features/faq.png)

###### 6. View social media links.

![Social Links](assets/images/readme/user-stories/social-links.png)

## Bugs

Images not showing in services section.
- Was missing "assets/" from the file path.

FAQ 3, 4, 5 buttons expand/collapse all 3 together
- ID was set to "collapseThree" for all 3 buttons. Changing IDs fixed the problem. 

Removing bootstrap script stopped FAQ accordion functioning.
- Re-adding bootstrap scripts resumed functionality.

Contact form can be submitted without selecting a service.
- I could not find a way to prevent this without using JavaScript so it was not implemented. As a work-around, the 'other' checkbox starts off selected.

## Deployment
#### Creating Repository on GitHub
- First make sure you are signed into [Github](https://github.com/) and go to the code institutes template, which can be found [here](https://github.com/Code-Institute-Org/gitpod-full-template).
- Then click on **use this template** and select **Create a new repository** from the drop-down. Enter the name for the repository and click **Create repository from template**.
- Once the repository was created, I clicked the green **gitpod** button to create a workspace in gitpod so that I could write the code for the site.

#### Deloying on Github
The project was deployed using GitHub pages. The steps to deploy using GitHub pages are:

1. Go to the repository on [Github](https://github.com/)
2. Select **Settings** near the top of the page.
3. Select **Pages** from the menu bar on the left of the page.
4. Under **Source** select the 'Branch' dropdown menu and select the main branch.
5. Once selected, click the **Save**.
6. Deployment should be confirmed by a message saying "Your site is published at" followed by the web address.

## Credits
### Code & Text Content
  
  > Using a linear gradient to make a background image darker without affecting the text - Arthur Serafim on stackoverflow: https://stackoverflow.com/questions/15765550/darkening-an-image-with-css-in-any-shape

  > Adding async to scripts to improve load times - Suggested by mentor Antonio Rodriguez.

  > Information about number of people with paranormal experiences - https://www.independent.co.uk/news/uk/ghost-aliens-paranormal-beliefs-b2256483.html
  
### Media
  
    Index Hero-image: Photo by Karolina Kaboompics: https://www.pexels.com/photo/cloth-behind-window-in-darkness-5422603/

    Seance image: Taken from Wikimedia commons: https://commons.wikimedia.org/wiki/File:Weird_or_What_seance.JPG

    Ouijia board image: Photo by goodfriendo : https://www.flickr.com/photos/illuminated_photography/3151863727

    Haunted house image: Photo by Monica: https://www.flickr.com/photos/scorpio58/3548967552

    Sarah photo: Photo by Andrea Piacquadio: https://www.pexels.com/photo/woman-wearing-coat-762020/

    Pete photo: Photo by Brett Sayles: https://www.pexels.com/photo/man-in-grey-crew-neck-t-shirt-1073097/

    About Hero-image: Photo by: Kaboompics.com: https://www.pexels.com/photo/white-sheet-thrown-over-an-illuminated-pumpkin-to-make-a-ghost-decoration-for-halloween-5422596/

    Contact header backgroud: Photo by Oleksandr P: https://www.pexels.com/photo/close-up-of-wooden-surface-background-12932215/

    Contact background image: Photo by Ekaterina Astakhova: https://www.pexels.com/photo/black-metal-framed-glass-window-4147563/
    
### Acknowledgment
