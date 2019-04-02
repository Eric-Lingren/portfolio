let projects = [
    {
        title : 'Employee CRUD',
        imageUrl : '../files/thumbnails/employeeCRUD_screenshot.png',
        description : 'A full stack CRUD site that is for simple HR employee management.  Gives the avability to add a new employees, update employees, delete employees and get all employees.',
        builtWith: 'Built with React, MongoDB, Mongoose, ReactStrap, Express & CSS',
        liveLink : 'http://crud-employees.herokuapp.com/',
        gitLink : 'https://github.com/Eric-Lingren/crud_employees',
    },
    {
        title : 'Count Champ',
        imageUrl : '../files/thumbnails/countchamp_screenshot.png',
        description : 'A CRUD React Native app available for download on Google Play that teaches players the nuances of card counting.  Uses SQLite for database management of user stats in local storage and Axios for deck and card management.',
        builtWith: 'Built with React Native, Android Studio, SQLite & Expo',
        liveLink : 'https://play.google.com/store/apps/details?id=com.cardchamp.countchamp&         rdid=com.cardchamp.countchampprojectLinkContainer',
        gitLink : 'https://github.com/Eric-Lingren/react_native/tree/master/count_champ',
    },
    {
        title : 'Infinity Investments',
        imageUrl : '../files/thumbnails/infinity_screenshot.png',
        description : 'A full stack business site which maps over large sets of historical trade data provided from my forex broker. The app converts the data into interactive visualizations built with D3 and GreenSock.',
        builtWith: 'Built with React, Express, MongoDB, GreenSock, D3 & JavaScript ES6',
        liveLink : 'http://infinity-investments.herokuapp.com/',
        gitLink : 'https://github.com/Eric-Lingren/infinity_investments',
    },
    {
        title : 'Crypto Minerz',
        imageUrl : '../files/thumbnails/cryptominerz_screenshot.png',
        description : 'This full stack e-commerce site was collaboratively built with 2 friends. It uses the BestBuy API to                 market GPUs and other mining hardware. Includes a wishlist, cart, checkout, profile, and user                       authentication.',
        builtWith: 'Built with ReactStrap, JavaScript, MongoDB, Express, Node.js & CSS',
        liveLink : 'http://cryptominerz.herokuapp.com/',
        gitLink : 'https://github.com/jmc90/vcommerce-v2',
    },
    {
        title : 'SmartGarden',
        imageUrl : '../files/thumbnails/smartgarden_screenshot.png',
        description : 'This is a MERN full stack app. It makes Axios requests to a MongoDB which allows adding, removing                   and saving plants or gardens. It also provides custom plant recommendations based on companion                       planting.',
        builtWith: 'Built with React, MongoDB, Express, Mongoose, Node.js, JavaScript ES6 & CSS',
        liveLink : 'https://smart-garden-planting.herokuapp.com/',
        gitLink : 'https://github.com/Eric-Lingren/smartgarden',
    },
    {
        title : 'Blackjack',
        imageUrl : '../files/thumbnails/blackjack_screenshot.png',
        description : 'This is a front-end React application that is not your average Blackjack game.  It is designed to                   teach players how to count cards and maintains comprehensive game analytics.  It uses the Deck of                    Cards API to provide deck, card, and shuffle functionality.',
        builtWith: 'Built with React, ES6 & CSS',
        liveLink : 'https://blackjack-for-cardcounters.netlify.com/#/',
        gitLink : 'https://github.com/Eric-Lingren/blackjack_project',
    },
    {
        title : 'Fun With Canvas',
        imageUrl : '../files/thumbnails/funwithcanvas_screenshot.png',
        description : 'This site contains several projects with a variety of different things I have built using constructor                        functions in Javascript ES5 and canvas to show the fun interactions you are able to have with the DOM.',
        builtWith: 'Built with Vanillia Javascript ES5 & CSS',
        liveLink : 'http://funwithcanvas.surge.sh/index.html',
        gitLink : 'https://github.com/Eric-Lingren/my_projects/tree/master/canvas_practice',
    },
    {
        title : 'Colossal Adventure',
        imageUrl : '../files/thumbnails/colossal_adventure_screenshot.png',
        description : 'A text-based RPG that utilizes readline-sync to accept user input and provide interaction directly                   within the console. This was my first logic heavy project and I included npm-play for sound effects                  and ASCII art for an immersive game.',
        builtWith: 'Built with Node.js & JavaScript',
        liveLink : 'https://github.com/Eric-Lingren/colossal_adventure',
        gitLink : 'https://github.com/Eric-Lingren/colossal_adventure',
    },
    {
        title : 'CSS Zen Garden',
        imageUrl : '../files/thumbnails/zengarden_screenshot.png',
        description : 'A fully responsive front-end site created as a clone of the original based solely on a PSD. This                     illustrates the ability to replicate ideas from a design team\'s mock-ups and implement those into a                 fully realized project. Landing page only.',
        builtWith: 'Built with HTML5 & CSS3',
        liveLink : 'http://zengarden.surge.sh/',
        gitLink : 'https://github.com/Eric-Lingren/zen_garden_project',
    },
    {
        title : 'NPM Packages',
        imageUrl : '../files/thumbnails/npm_screenshot.png',
        description : 'This is the list of all the NPM packages I have built.  One to remove all whitspace from a string.                   Another to parse out specific information from the current date and time displayed by the users                      system.  Links are in the Git repo readme.',
        builtWith: 'Built with Node.js, NPM & JavaScript',
        liveLink : 'https://www.npmjs.com/package/@fxhacker/get_date',
        gitLink : 'https://github.com/Eric-Lingren/npm_projects',
    },
]

let container = document.getElementById('pageWrapper')

for (let i = 0; i < projects.length; i++) {
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('tile')

    let image = document.createElement('img');
    image.classList.add('project-image');
    image.setAttribute('src', projects[i].imageUrl);
    projectContainer.appendChild(image);
    
    let title = document.createElement('h3');
    title.classList.add('project-title'); 
    title.textContent = projects[i].title;
    projectContainer.appendChild(title);

    let description = document.createElement('p');
    description.classList.add('project-description');
    description.textContent = projects[i].description;
    projectContainer.appendChild(description);

    let builtWith = document.createElement('p');
    builtWith.classList.add('builtWith');
    builtWith.textContent = projects[i].builtWith;
    projectContainer.appendChild(builtWith);

    let linksContainer = document.createElement('div')
    linksContainer.classList.add('links-container')
    projectContainer.appendChild(linksContainer);


    let liveLink = document.createElement('a');
    liveLink.href = projects[i].liveLink;
    liveLink.textContent = 'Live';
    liveLink.target = '_blank';
    linksContainer.appendChild(liveLink);

    let gitLink = document.createElement('a');
    gitLink.href = projects[i].gitLink;
    gitLink.textContent = 'Git';
    gitLink.target = '_blank';
    linksContainer.appendChild(gitLink);

    container.appendChild(projectContainer);
}

