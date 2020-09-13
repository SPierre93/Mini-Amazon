class Carousel
{
    //Properties
    image;
    text;

    //Constructor
    constructor(i, t)
    {
        this.image = i;
        this.text = t;
    }
}


const main=()=>{
    
    //Fetch items
    const menuButton = document.querySelector("#menuIcon > i");
    const menuCloseButton = document.querySelector("#menuCloseButton > i");
    const menuModal = document.querySelector("#menuContents");
    const searchButton = document.querySelector("#searchbar > i");
    const navBar = document.querySelector("#visibleNavBar");
    const miniNavBar = document.querySelector("header > div");
    const generalPageContent = document.querySelector(".generalContainer");
    const heroImgCarousel = document.querySelector("#heroImagesCarousel");
    const heroCarouselTxt = document.querySelector("#heroImagesCarousel > p");
    const leftArrowButton = document.querySelector("#leftArrow");
    const rightArrowButton = document.querySelector("#rightArrow");
    const footerSect = document.querySelector ("footer");    
    const scrollToTopBtn = document.querySelector(".scrollToTop");

    document.addEventListener("DOMContentLoaded",(even)=>{
        setInterval(function(){
            if(i==carouselArr.length)
            {
                i=0;
            }

            heroImgCarousel.style.backgroundImage = carouselArr[i].image;
            heroCarouselTxt.innerHTML = carouselArr[i].text;
    
            if(leftClick==false && rightClick==false || leftClick==false && rightClick==true)
            {
                i++;
            }
    
            else if(leftClick==true)
            {
                i--;
    
                if(i<0)
                {
                    i=carouselArr.length-1;
                }
            }
        },2000);
    })

    //Objects created from the Carousel class
    let deliveriesSect = new Carousel("url('../public/img/hero-images/Delivery-Hero.png')", "We ship over 45 million products around the world.");
    let booksSect = new Carousel("url('../public/img/hero-images/Books-Hero.png')", "Discover a variety of books in your favouite genre.");
    let electronicsSect = new Carousel("url('../public/img/hero-images/Electronics-Hero.png')", "Find the latest and greatest gadgets available in tech.");

    const carouselArr = [deliveriesSect, booksSect, electronicsSect];
    console.log(`carouselArr`)
    let i=0;

    let leftClick = false; //Flags
    let rightClick = false;

   

    

    //Event listeners calling each Carousel function
    rightArrowButton.addEventListener("click", function(){
        rightClick = true;
        leftClick = false;
    });

    leftArrowButton.addEventListener("click", function(){
        leftClick = true;
        rightClick = false;
    })
    
    //Event listeners
    //Open menu
    menuButton.addEventListener("click",(event)=>{
        menuModal.style.display="block";
        navBar.style.zIndex="6";
        miniNavBar.style.zIndex="6";
        generalPageContent.style.zIndex="5";
        generalPageContent.style.display="block";
        footerSect.style.zIndex="-3";

        console.log("menu is clicked")
    });

    //Close menu
    menuCloseButton.addEventListener("click",(event)=>{
        menuModal.style.display="none";
        navBar.style.zIndex="2";
        miniNavBar.style.zIndex="2";
        generalPageContent.style.zIndex="1";
        footerSect.style.zIndex="1";
    });

    //Search bar
    searchButton.addEventListener("click",(event)=>{
        //make the button fetch relevant results and display it
    });



    //Scroll to top
/*
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
        {
          mybutton.style.display = "block";
        } 
        
        else 
        {
          mybutton.style.display = "none";
        }
    }

    scrollToTopBtn.addEventListener("click",(event)=>{
        function topFunction() {
            document.body.scrollToTopBtn = 0;               //For Safari
            document.documentElement.scrollToTopBtn = 0;    // For Chrome, Firefox, IE and Opera
          }
    });
*/
}
main();