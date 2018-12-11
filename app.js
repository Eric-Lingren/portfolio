///  CURRENT BUGS TO FIX:
//  Not responsive at all in IE.  Nothing moves and only portfolio is clickable
//  Mozilla - click to scroll highlights the image.
//  Mozilla - arrow key scroll moves 2 spaces instead of 1.



const info = document.getElementById('infoImageURL')
const git = document.getElementById('gitImageURL')
const portfolio = document.getElementById('portfolioImageURL')
const linkedin = document.getElementById('linkedinImageURL')
const resume = document.getElementById('resumeImageURL')
const iconBox = document.getElementById('allIcons')

const portfolioTitle = document.getElementById('portfolioTitle')
const linkedinTitle = document.getElementById('linkedinTitle')
const gitTitle = document.getElementById('gitTitle')


const sound1 = new Audio('./css/audio/audio1.wav');
const audio1 = new Audio('./css/audio/sound1.wav');

const winH = window.innerHeight;
const winW = window.innerWidth;

let whereIsCenter = 'portfolioIsCenter';


  /////////////////////////////////////////////////////////////////////////////////////////////////////
 ////       ANIMATION FUNCTIONS FOR ALL THE IMAGES THAT ARE FINISHING IN THE CENTER POSTION       ////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//  Function that move the INFORMATION IMAGE to the center and then applys atributes and usability to that image
const infoInCenter = () => {
    //  Remove the previous word underneath the image
    gitTitle.style.display = 'none'
    linkedinTitle.style.display = 'none'
    portfolioTitle.style.display = 'none'
    resumeTitle.style.display = 'none'
    //  Reassign the variable that denotes the current central image
    whereIsCenter = 'infoIsCenter';
    //  Remove the href from all anchor containers except the one in the center position
    git.removeAttribute('href');
    portfolio.removeAttribute('href');
    linkedin.removeAttribute('href');
    resume.removeAttribute('href');
    //  Animation to move the info tile into the center position
    TweenMax.to(info, .25, 
        {rotationY:0, height:'auto', width:'27%', x:'65%', y:'0%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, 
        onComplete: function(){infoTitle.style.display = 'block';
            info.href="./info.html"}
    });
    //  Makes the mouse cursor change depending wither the href tag has been added or removed from the image   
    isLinkClickable()
}

//  Function that move the GITHUB IMAGE to the center and then applys atributes and usability to that image
const gitInCenter = () => {
    //  Remove the previous word underneath the image
    portfolioTitle.style.display = 'none';
    infoTitle.style.display = 'none';
    linkedinTitle.style.display = 'none';
    resumeTitle.style.display = 'none';
    //  Reassign the variable that denotes the current central image
    whereIsCenter = 'gitIsCenter';
    //  Remove the href from all anchor containers except the one in the center position
    info.removeAttribute('href');
    portfolio.removeAttribute('href');
    linkedin.removeAttribute('href');
    resume.removeAttribute('href');
    //  Animation to move the git tile into the center position
    TweenMax.to(git, .25, {rotationY:0, height:'auto', width:'26%', x:'40%', y:'0%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, 
        onComplete: function(){gitTitle.style.display = 'block'; 
            git.href="https://github.com/Eric-Lingren"} 
    });
    //  Makes the mouse cursor change depending wither the href tag has been added or removed from the image    
    isLinkClickable()
}

//  Function that move the PORTFOLIO IMAGE to the center and then applys atributes and usability to that image
const portfolioInCenterPosition = () => {
    //  Remove the previous word underneath the image
    gitTitle.style.display = 'none'
    linkedinTitle.style.display = 'none'
    infoTitle.style.display = 'none'
    resumeTitle.style.display = 'none'
    //  Reassign the variable that denotes the current central image
    whereIsCenter = 'portfolioIsCenter';
    //  Remove the href from all anchor containers except the one in the center position
    info.removeAttribute('href');
    git.removeAttribute('href');
    linkedin.removeAttribute('href');
    resume.removeAttribute('href');
    //  Animation to move the portfolio tile into the center position
    TweenMax.to(portfolio, .25, 
        {rotationY:0, height:'auto', width:'27%', x:'0%', y:'0%', 
        translateY:'0%', transformPerspective: 600, ease: Power1.easeOut, 
        onComplete: function(){ portfolioTitle.style.display = 'block';
            portfolio.href="./portfolio.html" }
    });
    //  Makes the mouse cursor change depending wither the href tag has been added or removed from the image   
    isLinkClickable()
}

//  Function that move the LINKEDIN IMAGE to the center and then applys atributes and usability to that image
const linkedinInCenter = () => {
    //  Remove the previous word underneath the image
    portfolioTitle.style.display = 'none';
    resumeTitle.style.display = 'none';
    gitTitle.style.display = 'none';
    infoTitle.style.display = 'none';
    //  Reassign the variable that denotes the current central image
    whereIsCenter = 'linkedinIsCenter';
    //  Remove the href from all anchor containers except the one in the center position
    info.removeAttribute('href');
    git.removeAttribute('href');
    portfolio.removeAttribute('href');
    resume.removeAttribute('href');
    //  Animation to move the linkedin tile into the center position
    TweenMax.to(linkedin, .25, 
        {rotationY:0, height:'auto', width:'27%', x:'-35%', y:'0%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, 
        onComplete: function(){linkedinTitle.style.display = 'block';
            linkedin.href="https://www.linkedin.com/in/ericlingren/"} 
    }); 
    //  Makes the mouse cursor change depending wither the href tag has been added or removed from the image   
    isLinkClickable()
} 

//  Function that move the RESUME IMAGE to the center and then applys atributes and usability to that image
const resumeInCenter = () => {
    //  Remove the previous word underneath the image
    linkedinTitle.style.display = 'none';
    portfolioTitle.style.display = 'none';
    infoTitle.style.display = 'none';
    //  Reassign the variable that denotes the current central image
    whereIsCenter = 'resumeIsCenter';
    //  Remove the href from all anchor containers except the one in the center position
    info.removeAttribute('href');
    git.removeAttribute('href');
    portfolio.removeAttribute('href');
    linkedin.removeAttribute('href');
    //  Animation to move the resume tile into the center position
    TweenMax.to(resume, .25, 
        {rotationY:0, height:'auto', width:'21%', x:'-85%', y:'0%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, 
        onComplete: function(){resumeTitle.style.display = 'block', resumeTitle.style.marginLeft = '-7%';
            resume.href="./resume.html"}
    });
    //  Makes the mouse cursor change depending wither the href tag has been added or removed from the image   
    isLinkClickable()
}


  /////////////////////////////////////////////////////////////////////////////////////////////////////
 ////     ANIMATION FUNCTIONS FOR ALL THE IMAGES THAT ARE NOT FINISHING IN THE CENTER POSTION     ////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//  Animates the 4 other images when the PORTFOLIO IMAGE is scrolled into the center position
function scrollPortfolioCenter() {
    sound1.play() 
    portfolioInCenterPosition();
    TweenMax.to(git, .25, 
        {rotationY:-55, height:'auto', width:'19%', x:'0%', y:'-3%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});
    TweenMax.to(info, .25, 
        {rotationY:-75, height:'auto', width:'13%', x:'0%', y:'-7%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
    TweenMax.to(linkedin, .25, 
        {rotationY:55, height:'auto', width:'19%', x:'0%', y:'-3%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});
    TweenMax.to(resume, .25, 
        {rotationY:80, height:'auto', width:'10%', x:'0%', y:'-7%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
}

//  Animates the 4 other images when the GITHUB IMAGE is scrolled into the center position
function scrollPortfolioRight() {
    sound1.play()
    gitInCenter();
    TweenMax.to(portfolio, .25, 
        {rotationY:55, height:'auto', width:'19%', x:'55%', y:'-3%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut, });
    TweenMax.to(info, .25, 
        {rotationY:-55, height:'auto', width:'19%', x:'16%', y:'-3%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});
    TweenMax.to(linkedin, .25, 
        {rotationY:80, height:'auto', width:'12%', x:'24%', y:'-10%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
    TweenMax.to(resume, .25, 
        {rotationY:90, height:'auto', width:'8%', x:'20%', y:'-20%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
}

//  Animates the 4 other images when the INFORMATION IMAGE is scrolled into the center position
function scrollPortfolioFarRight() {
    sound1.play()
    infoInCenter();
    TweenMax.to(linkedin, .25, 
        {rotationY:90, height:'auto', width:'9%', x:'105%', y:'-20%', 
        translateY:'-7%', transformPerspective: 600, ease: Power1.easeOut});
    TweenMax.to(portfolio, .25, 
        {rotationY:80, height:'auto', width:'12%', x:'150%', y:'-10%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
    TweenMax.to(git, .25, 
        {rotationY:55, height:'auto', width:'19%', x:'136%', y:'-3%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});
    TweenMax.to(resume, .25, 
        {rotationY:90, height:'auto', width:'10%', x:'50%', y:'-20%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut}); 
}

//  Animates the 4 other images when the LINKEDIN IMAGE is scrolled into the center position
function scrollPortfolioLeft() {
    sound1.play()
    linkedinInCenter()
    TweenMax.to(portfolio, .25, 
        {rotationY:-55, height:'auto', width:'19%', x:'-54%', y:'-3%', 
        translateY:'-3%',transformPerspective: 600, ease: Power1.easeOut});
    TweenMax.to(resume, .25, 
        {rotationY:60, height:'auto', width:'15%', x:'-21%', y:'-3%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});
    TweenMax.to(git, .25, 
        {rotationY:-80, height:'auto', width:'12%', x:'-22%', y:'-10%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
    TweenMax.to(info, .25, 
        {rotationY:-90, height:'auto', width:'10%', x:'-12%', y:'-15%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut, });
}

//  Animates the 4 other images when the RESUME IMAGE is scrolled into the center position
function scrollPortfolioFarLeft() {
    sound1.play()
    resumeInCenter();
    TweenMax.to(linkedin, .25, 
        {rotationY:-45, height:'auto', width:'19%', x:'-140%', y:'-3%', 
        translateY:'-3%', transformPerspective: 600, ease: Power1.easeOut});
    TweenMax.to(portfolio, .25, 
        {rotationY:-75, height:'auto', width:'12%', x:'-170%', y:'-7%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
    TweenMax.to(git, .25, 
        {rotationY:-90, height:'auto', width:'10%', x:'-120%', y:'-15%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
    TweenMax.to(info, .25, 
        {rotationY:-90, height:'auto', width:'10%', x:'-70%', y:'-20%', 
        translateY:'-7%', transformPerspective: 500, ease: Power1.easeOut});
}

//  Calls sroll animation functions when an image is clicked on.  Moves the carousel one slot at a time
git.addEventListener('click', scrollPortfolioRight)
linkedin.addEventListener('click', scrollPortfolioLeft)
resume.addEventListener('click', scrollPortfolioFarLeft)
portfolio.addEventListener('click', scrollPortfolioCenter)
info.addEventListener('click', scrollPortfolioFarRight)

//  Adds an event listener to the keyboard arrows to enable scrolling through images
window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keypress", checkKeyPressed, false);

//  Checks if an arrow key is pressed right or left, checks the center image position, 
//   and then the correct scroll functions execute
function checkKeyPressed(e) {
    if (e.keyCode == "37" && whereIsCenter === 'portfolioIsCenter') {
        scrollPortfolioRight();
     } else if (e.keyCode == "37" && whereIsCenter === 'gitIsCenter') {
        scrollPortfolioFarRight();
     } else if (e.keyCode == "39" && whereIsCenter === 'infoIsCenter') {
        scrollPortfolioRight();
     } else if (e.keyCode == "39" && whereIsCenter === 'gitIsCenter') {
        scrollPortfolioCenter();
     } else if (e.keyCode == "39" && whereIsCenter === 'portfolioIsCenter'){
         scrollPortfolioLeft()
    } else if (e.keyCode == "39" && whereIsCenter === 'linkedinIsCenter'){
        scrollPortfolioFarLeft()
    } else if (e.keyCode == "37" && whereIsCenter === 'resumeIsCenter'){
        scrollPortfolioLeft()
    } else if (e.keyCode == "37" && whereIsCenter === 'linkedinIsCenter'){
        scrollPortfolioCenter()
    }
}

//  Adds an event listener to themouse scroll wheel to enable scrolling through images
window.addEventListener('wheel', scrollWheelAction);

//  Checks if the mouse wheel is scrolled up or down, checks the center image position, 
//   and then the correct scroll functions execute
function scrollWheelAction(e){
    sound1.play() 
    if (e.deltaY > 0 && whereIsCenter === 'portfolioIsCenter') {
        scrollPortfolioRight();
    } else if (e.deltaY > 0 && whereIsCenter === 'gitIsCenter') {
        scrollPortfolioFarRight();
    } else if (e.deltaY < 0 && whereIsCenter === 'infoIsCenter') {
        scrollPortfolioRight();
    } else if (e.deltaY < 0 && whereIsCenter === 'gitIsCenter') {
        scrollPortfolioCenter();
    } else if (e.deltaY < 0 && whereIsCenter === 'portfolioIsCenter') {
        scrollPortfolioLeft();
    } else if (e.deltaY > 0 && whereIsCenter === 'linkedinIsCenter') {
        scrollPortfolioCenter();
    } else if (e.deltaY < 0 && whereIsCenter === 'linkedinIsCenter') {
        scrollPortfolioFarLeft();
    } else if (e.deltaY > 0 && whereIsCenter === 'resumeIsCenter') {
        scrollPortfolioLeft();
    }
}

//  Changes the mouse to pointer if over a valid center positioned image to denote an active link
//  Changes the mouse to a default cursor under all other circumstances
function isLinkClickable(){
    //  Only alows the mouse to be a pointer if the PORTFOLIO IMAGE is in the center position
    if (whereIsCenter === 'portfolioIsCenter'){
        portfolio.style.cursor = 'pointer';
        git.style.cursor = 'default';
        info.style.cursor = 'default';
        linkedin.style.cursor = 'default';
        resume.style.cursor = 'default';
    //  Only alows the mouse to be a pointer if the GITHUB IMAGE is in the center position
    } else if (whereIsCenter === 'gitIsCenter'){
        portfolio.style.cursor = 'default';
        git.style.cursor = 'pointer';
        info.style.cursor = 'default';
        linkedin.style.cursor = 'default';
        resume.style.cursor = 'default';
    //  Only alows the mouse to be a pointer if the INFORMATION IMAGE is in the center position
    } else if (whereIsCenter === 'infoIsCenter'){
        portfolio.style.cursor = 'default';
        git.style.cursor = 'default';
        info.style.cursor = 'pointer';
        linkedin.style.cursor = 'default';
        resume.style.cursor = 'default';
    //  Only alows the mouse to be a pointer if the LINKEDIN IMAGE is in the center position
    }else if (whereIsCenter === 'linkedinIsCenter'){
        portfolio.style.cursor = 'default';
        git.style.cursor = 'default';
        info.style.cursor = 'default';
        linkedin.style.cursor = 'pointer';
        resume.style.cursor = 'default';
        
    //  Only alows the mouse to be a pointer if the RESUME IMAGE is in the center position
    }else if (whereIsCenter === 'resumeIsCenter'){
        portfolio.style.cursor = 'default';
        git.style.cursor = 'default';
        info.style.cursor = 'default';
        linkedin.style.cursor = 'default';
        resume.style.cursor = 'pointer';   
    }
}


//  grabs the exit divs and sets them to variables

const exit1 = document.getElementById('exit1')
const exit2 = document.getElementById('exit2')
const exit3 = document.getElementById('exit3')
const exit4 = document.getElementById('exit4')
const exit5 = document.getElementById('exit5')
const exit6 = document.getElementById('exit6')
const exit7 = document.getElementById('exit7')
const exit8 = document.getElementById('exit8')
const exit9 = document.getElementById('exit9')
const exit10 = document.getElementById('exit10')
