let projects = [
    {
        title : 'Count Champ',
        imageUrl : '../files/thumbnails/countchamp_screenshot.png',
        description : 'A CRUD React Native app available for download on Google Play.  Uses SQLite for database management                  of user stats in local storage and Axios for deck and card management.',
        builtWith: 'Built with React Native, Android Studio, SQLite and Expo',
        liveLink : 'https://play.google.com/store/apps/details?id=com.cardchamp.countchamp&         rdid=com.cardchamp.countchampprojectLinkContainer',
        githubLink : 'https://github.com/Eric-Lingren/react_native/tree/master/count_champ',
    },
    {
        title : 'Infinity Investments',
        imageUrl : '../files/thumbnails/infinity_screenshot.png',
        description : 'A full stack site which maps over large sets of historical trade data. The app converts the data into                interactive visualizations built with D3 and GreenSock.',
        builtWith: 'Built with React, Express, MongoDB, GreenSock, D3 & JavaScript ES6',
        liveLink : 'http://infinity-investments.herokuapp.com/',
        githubLink : 'https://github.com/Eric-Lingren/infinity_investments',
    },
    {
        title : 'Crypto Minerz',
        imageUrl : '../files/thumbnails/cryptominerz_screenshot.png',
        description : 'This full stack e-commerce site was collaboratively built with 2 friends. It uses the BestBuy API to                 market GPUs and other mining hardware. Includes a wishlist, cart, checkout, profile, and user                       authentication.',
        builtWith: 'Built with ReactStrap, JavaScript, MongoDB, Express, Node.js & CSS',
        liveLink : 'http://cryptominerz.herokuapp.com/',
        githubLink : 'https://github.com/jmc90/vcommerce-v2',
    },
    {
        title : 'SmartGarden',
        imageUrl : '../files/thumbnails/smartgarden_screenshot.png',
        description : 'This is a MERN full stack app. It makes Axios requests to a MongoDB which allows adding, removing                   and saving plants or gardens. It also provides custom plant recommendations based on companion                       planting.',
        builtWith: 'Built with React, MongoDB, Express, Mongoose, Node.js, JavaScript ES6 & CSS',
        liveLink : 'https://smart-garden-planting.herokuapp.com/',
        githubLink : 'https://github.com/Eric-Lingren/smartgarden',
    },
    {
        title : '',
        imageUrl : '../files/thumbnails/infinity_screenshot.png',
        description : 'This is a MERN full stack app. It makes Axios requests to a MongoDB which allows adding, removing                   and saving plants or gardens. It also provides custom plant recommendations based on companion                       planting.',
        builtWith: 'Built with React, MongoDB, Express, Mongoose, Node.js, JavaScript ES6 & CSS',
        liveLink : 'https://smart-garden-planting.herokuapp.com/',
        githubLink : 'https://github.com/Eric-Lingren/smartgarden',
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

