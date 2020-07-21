$(document).ready(function () {

    $("#skills-nav").on("click", skillsAnimation);

    // function consturctor Project Card
    function ProjectCard(title, about, imgURL, siteURL, repoURL) {
        this.title = title;
        this.about = about;
        this.imgURL = imgURL;
        this.siteURL = siteURL;
        this.repoURL = repoURL;
    };

    // new Project Card instances
    const quarCard = new ProjectCard(
        "Quarentainment",
        "An entertainment application which allows the user to browse for trending movies, tv shows, and books to keep them entertained during their involuntary time at home. User may save content to their personal list to remember for later. Built using the NYT bestseller and movie reviews API, and The Movie Database API.",
        "assets/images/portfolio/quar2.png",
        "https://jpreston-alt.github.io/Quarentainment/",
        "https://github.com/jpreston-alt/Quarentainment"
    );

    const weatherCard = new ProjectCard(
        "Weather Dashboard",
        "An application that allows the user to view current and future weather conditions for any city. Past viewed cities are saved to search history for easier viewing in the future. Built using Open Weather Maps API, and Open Cage Geocoder API.",
        "assets/images/portfolio/weather2.png",
        "https://jpreston-alt.github.io/Weather-Dashboard/",
        "https://github.com/jpreston-alt/Weather-Dashboard"
    );

    const plannerCard = new ProjectCard(
        "Work Day Planner",
        "A simple calendar app for scheduling your work day. Color coded time blocks update depending on what time of day it is, allowing the user to see where they are in their day at a glance. Built with JavaScript and Moment.js.",
        "assets/images/portfolio/planner.png",
        "https://jpreston-alt.github.io/Day-Planner/",
        "https://github.com/jpreston-alt/Day-Planner"
    );

    const quizCard = new ProjectCard(
        "Code Quiz",
        "A quiz built using JavaScript, to test your coding knowledge. Race against the clock to answer all the questions correctly. Save your high scores to track your improvement.",
        "assets/images/portfolio/quiz.png",
        "https://jpreston-alt.github.io/Code-Quiz/",
        "https://github.com/jpreston-alt/Code-Quiz"
    );

    const profileGenCard = new ProjectCard(
        "Team Profile Generator",
        "A command-line-interface application that allows the user to easily generate a team profile webpage, featuring summaries of their team members. Built using Node and Inquirer.js.",
        "assets/images/portfolio/team-profile2.png",
        "https://drive.google.com/file/d/1GXXnc2q5sv7_aGnGXkHwB0Wg7uvSFpcF/view",
        "https://github.com/jpreston-alt/Team-Profile-Generator"
    );

    const notepadCard = new ProjectCard(
        "Notepad",
        "Organize your thoughts with Notepad, a note-taking application build with Express.js. Notepad helps you keep track of everything you need to remember by allowing you to save, view, and delete important reminders and thoughts.",
        "assets/images/portfolio/notepad2.png",
        "https://jp-express-notepad.herokuapp.com/",
        "https://github.com/jpreston-alt/Express-Note-Taker",
    );

    const burgerCard = new ProjectCard(
        "Eat-Da-Burger",
        "A full-stack, restaurant application that allows the user to input, devour, rate, and delete tasty burgers from a MySQL database. Eat-Da-Burger utilizes the MVC design pattern, and is built using MySQL, Node, Express, Handlebars and a homemade ORM.",
        "assets/images/portfolio/burger2.png",
        "https://jp-burger-logger.herokuapp.com/",
        "https://github.com/jpreston-alt/Burger-Logger"
    );

    const budgetCard = new ProjectCard(
        "Check Yourself",
        "A full-stack budgeting application, that helps the user track their monthly expenses and manage their money wisely, based on the 50/30/20 budgeting rule. Check Yourself is built using Node, Express, Passport and a MySQL Database. Guest Login: guest@checkyourself.com, guestpw.",
        "assets/images/portfolio/check-yourself.png",
        "https://jp-project2.herokuapp.com/",
        "https://github.com/jpreston-alt/Check-Yourself"
    );

    const employeeCard = new ProjectCard(
        "Employee Tracker",
        "A command-line, content management system, that allows business owners to easily manage and track information about their employees. Built using Node, Inquirer.js, and a MySQL database.",
        "assets/images/portfolio/emp.png",
        "https://drive.google.com/file/d/1to-rywQco0bl-7fDBKE7dkzV-utTVTK7/view",
        "https://github.com/jpreston-alt/Employee-Tracker"
    );

    const fitnessCard = new ProjectCard(
        "Fitness Tracker",
        "An full-stack application that allows the user to track their daily workouts and fitness progress. Built using JavaScript, Node, Express, MongoDB, and Mongoose.",
        "assets/images/portfolio/dashboard.png",
        "https://jp-fitness-tracker.herokuapp.com/",
        "https://github.com/jpreston-alt/fitness-tracker"
    );

    const employeeDirCard = new ProjectCard(
        "Employee Directory",
        "An applicaiton, built with React, for viewing and filtering information about employees.",
        "assets/images/portfolio/employee-dir.png",
        "https://jpreston-alt.github.io/React-Employee-Directory/",
        "https://github.com/jpreston-alt/React-Employee-Directory"
    );

    let projectCardsArr = [budgetCard, quarCard, employeeDirCard, burgerCard, notepadCard, fitnessCard, , weatherCard, profileGenCard,];

    // function to render project cards to screen
    function renderCard(card) {
        let newCard =
            `<div>
                <div class="uk-card uk-card-default portfolio-card">
                    <div class="uk-card-body portfolio-card-body">
                        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
                            <ul class="uk-slideshow-items">
                                <li>
                                    <h3 class="uk-card-title project-title">${card.title}</h3>
                                    <p class="project-description">${card.about}</p>
                                </li>
                                <li>
                                    <img src="${card.imgURL}" alt="" uk-cover>
                                </li>
                            </ul>
                            <a class="uk-position-top-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                        </div>
                    </div>
                    <div class="uk-card-footer portfolio-card-footer">
                        <div class="uk-text-center">
                            <a href="${card.siteURL}" target="_blank" class="btn-link">
                                <button class="uk-button uk-button-default portfolio-btn">View Website</button>
                            </a>
                            <a href="${card.repoURL}" target="_blank" class="btn-link">
                                <button class="uk-button uk-button-default portfolio-btn">GitHub Repo</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`

        $("#portfolio-section").append(newCard);
    };

    // background image fade in loading
    function loadBackgroundImg() {
        let img = new Image();
        img.src = "assets/images/top-left.jpeg";

        let int = setInterval(function () {
            if (img.complete) {
                clearInterval(int);
                $("#pic-section").css("background-image", 'url(' + img.src + ')');
            }
        }, 50);
    };

    function init() {
        // render portfolio cards
        projectCardsArr.forEach(renderCard);
        loadBackgroundImg();
    };

    // skills section slide-in animation
    function skillsAnimation() {
        $(".client-side-card").addClass("slide-left");
        $(".server-side-card").addClass("slide-up");
        $(".design-card").addClass("slide-right");
    };

    init();

});
