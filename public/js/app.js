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
    //GENERAL FETCHED ITEMS
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
    const rootElement = document.documentElement;
    const scrollToTopBtn = document.querySelector(".scrollToTop");


    //FETCHED HTML PAGES
    const homePageHTML = document.querySelector("#homePageHTML");
    const clerkDashHTML = document.querySelector("#clerkDashHTML");
    const customerDashHTML = document.querySelector("#customerDashHTML");


    //FETCHED HOME PAGE CAROUSEL ITEMS
    const bestsellerGrid = document.querySelector("#bestsellerGrid");
    const productContainer1 = document.querySelector("#productGrid1");
    const productContainer2 = document.querySelector("#productGrid2");
    const productContainer3 = document.querySelector("#productGrid3");
    const productContainer4 = document.querySelector("#productGrid4");

    const bestsellerLeftButton = document.querySelector("#bestsellerLeftButn");
    const bestsellerRightButton = document.querySelector("#bestsellerRightButn");

    const productLeftButton1 = document.querySelector("#product1LeftButn");
    const productRightButton1 = document.querySelector("#product1RightButn");

    const productLeftButton2 = document.querySelector("#product2LeftButn");
    const productRightButton2 = document.querySelector("#product2RightButn");

    const productLeftButton3 = document.querySelector("#product3LeftButn");
    const productRightButton3 = document.querySelector("#product3RightButn");

    const productLeftButton4 = document.querySelector("#product4LeftButn");
    const productRightButton4 = document.querySelector("#product4RightButn");

    
    //FETCHED CLERK DASHBOARD ITEMS
    const clerkCallToAction = document.querySelector("#clerkCallToAction");
    const viewProductsButton = document.querySelector("#viewProductsButton");
    const viewCategoriesButton = document.querySelector("#viewCategoriesButton");
    const viewProductsBody = document.querySelector("#viewProductsBody");
    const viewCategoriesBody = document.querySelector("#viewCategoriesBody");
    const returnToSelections = document.querySelectorAll(".returnToSelections");
    const clerkProductModal = document.querySelector("#clerkProductModal");
    const productCloseButton = document.querySelector("#productModalCloseButton");
    const categoryCloseButton = document.querySelector("#categoryModalCloseButton");
    const addProductButton = document.querySelector("#addProductButton");
    const addCategoryButton = document.querySelector("#addCategoryButton");
    const clerkDashBody = document.querySelector("#clerkDashBody");
    const clerkProfileButton = document.querySelector("#clerkProfileButton");
    const clerkProfile = document.querySelector("#clerkProfile");
    const clerkProfileEditButton = document.querySelectorAll("#clerkProfile .profileEditButton");
    const clerkProfileTextBox = document.querySelectorAll("#clerkProfile .formBoxes");
    const clerkProfileLabel = document.querySelectorAll("#clerkProfile h3");
    const confirmPasswordLabel = document.querySelector("#passwordConfirmationLabel");
    const clerkProPicFile = document.querySelector("#clerkProPicFile");
    const lastInputBox = document.querySelector("#lastInputBox");


    //FETCHED CUSTOMER DASHBOARD ITEMS
    const customerDashBody = document.querySelector("#customerDashBody");
    const customerProfileButton = document.querySelector("#customerProfileButton");
    const returnToCartButton = document.querySelector("#returnToCartButton");
    const customerProfileContent = document.querySelector("#customerProfile");
    const profileEditButton = document.querySelectorAll("#customerProfile .profileEditButton");
    const customerProfileTextBox = document.querySelectorAll("#customerProfile .formBoxes");
    const customerProfileLabel = document.querySelectorAll("#customerProfile h3");


    //FETCHED ERROR MESSAGES
    const clerkProfilePasswordError = document.querySelector("#clerkProfilePasswordError");


    //Extra
    const logInButton = document.querySelector("#logInButton");
    const logInHTML = document.querySelector("#logInHTML");
    const regularCustomerDash = document.querySelector("#regularCustomerDash");
    const emptyShoppingCart = document.querySelector("#emptyShoppingCart");

    //Open menu
    menuButton.addEventListener("click",function(){
        menuModal.style.display="block";
        navBar.style.zIndex="6";
        miniNavBar.style.zIndex="6";
        generalPageContent.style.zIndex="5";
        generalPageContent.style.display="block";
        footerSect.style.zIndex="-3";

        console.log("menu is clicked")
    });

    //Close menu
    menuCloseButton.addEventListener("click", function(){
        menuModal.style.display="none";
        navBar.style.zIndex="2";
        miniNavBar.style.zIndex="2";
        generalPageContent.style.zIndex="1";
        footerSect.style.zIndex="1";
    });


    //Scroll-to-top button
    const autoScroll=()=>{
        const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

        if ((rootElement.scrollTop/scrollTotal) > 0.30) 
        {
            scrollToTopBtn.style.display="block";
        } 
        
        else 
        {
            scrollToTopBtn.style.display="none";
        }
    }; 

    document.addEventListener("scroll", autoScroll);//Handling of scroll-to-top button
    
    scrollToTopBtn.addEventListener("click", function(){
        window.scrollTo(0,0);
    });


    /*
    //Search bar
    searchButton.addEventListener("click",(event)=>{
        //make the button fetch relevant results and display it
    });
    */
    

    //HOME PAGE
    if(homePageHTML)
    {
        document.addEventListener("DOMContentLoaded",(event)=>{
            //Objects created from the Carousel class
            let deliveriesSect = new Carousel("url('../public/img/hero-images/Delivery-Hero.png')", "We ship over 45 million products around the world.");
            let booksSect = new Carousel("url('../public/img/hero-images/Books-Hero.png')", "Discover a variety of books in your favouite genre.");
            let electronicsSect = new Carousel("url('../public/img/hero-images/Electronics-Hero.png')", "Find the latest and greatest gadgets available in tech.");
    
            const carouselArr = [deliveriesSect, booksSect, electronicsSect];
            let i=0;
    
            let leftClick = false; //Flags
            let rightClick = false;
    
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
    
            //Event listeners calling each Carousel function
            leftArrowButton.addEventListener("click", function(){
                leftClick = true;
                rightClick = false;
            });
            
            rightArrowButton.addEventListener("click", function(){
                rightClick = true;
                leftClick = false;
            });
        });
    
    
        //Minor Home Page carousel button toggle
        bestsellerLeftButton.addEventListener("click", function(){
            bestsellerGrid.scrollBy(-30, 0);
        })
    
        bestsellerRightButton.addEventListener("click", function(){
            bestsellerGrid.scrollBy(30, 0);
        })
    
        productLeftButton1.addEventListener("click", function(){
            productContainer1.scrollBy(-30, 0);
        })
    
        productRightButton1.addEventListener("click", function(){
            productContainer1.scrollBy(30, 0);
        })
    
        productLeftButton2.addEventListener("click", function(){
            productContainer2.scrollBy(-30, 0);
        })
    
        productRightButton2.addEventListener("click", function(){
            productContainer2.scrollBy(30, 0);
        })
    
        productLeftButton3.addEventListener("click", function(){
            productContainer3.scrollBy(-30, 0);
        })
    
        productRightButton3.addEventListener("click", function(){
            productContainer3.scrollBy(30, 0);
        })
    
        productLeftButton4.addEventListener("click", function(){
            productContainer4.scrollBy(-30, 0);
        })
    
        productRightButton4.addEventListener("click", function(){
            productContainer4.scrollBy(30, 0);
        })
    }
    
    
    //CLERK DASH
    else if(clerkDashHTML)
    {    
        //Toggle between Clerk's tasks (View Products or View Product Categories)
        viewProductsButton.addEventListener("click", (event)=>{
            viewProductsBody.style.display="block";
            viewCategoriesBody.style.display="none";
            clerkCallToAction.style.display="none";
        });
    
        viewCategoriesButton.addEventListener("click", (event)=>{
            viewProductsBody.style.display="none";
            viewCategoriesBody.style.display="block";
            clerkCallToAction.style.display="none";
        })


        //Toggle back to task selection page
        returnToSelections.forEach(function(returnButton){
            returnButton.addEventListener("click",(event)=>{
                if(returnButton == returnToSelections[0])
                {
                    clerkCallToAction.style.display="block";
                    viewProductsBody.style.display="none";
                }

                else if(returnButton == returnToSelections[1])
                {
                    clerkCallToAction.style.display="block";
                    viewCategoriesBody.style.display="none";
                }

                else if(returnButton == returnToSelections[2])
                {
                    clerkDashBody.style.display="block";
                    clerkProfile.style.display="none";
                }
            })
        })


        //Open Add Product modal
        addProductButton.addEventListener("click", (event)=>{
            clerkProductModal.style.display="grid";

            //Close modal
            productCloseButton.addEventListener("click", (event)=>{
                clerkProductModal.style.display="none";
            })
        })

        //Open Add Category modal
        addCategoryButton.addEventListener("click", (event)=>{
            clerkCategoryModal.style.display="grid";

            //Close modal
            categoryCloseButton.addEventListener("click", (event)=>{
                clerkCategoryModal.style.display="none";
            })
        })


        //Toggle Clerk Management Page
        clerkProfileButton.addEventListener("click",(event)=>{
            clerkDashBody.style.display="none";
            clerkProfile.style.display="block";
        })

        //Toggle edit buttons
        clerkProfileEditButton.forEach(function(editButton){
            editButton.addEventListener("click",(event)=>{
                if(editButton == clerkProfileEditButton[0])
                {
                    //first name clicked
                    clerkProfileTextBox[0].style.display="block";
                    clerkProfileLabel[0].style.display="none";
                }

                else if(editButton == clerkProfileEditButton[1])
                {
                    //last name clicked
                    clerkProfileTextBox[1].style.display="block";
                    clerkProfileLabel[1].style.display="none";
                }

                else if(editButton == clerkProfileEditButton[2])
                {
                    //email clicked
                    clerkProfileTextBox[2].style.display="block";
                    clerkProfileLabel[2].style.display="none";
                }

                else if(editButton == clerkProfileEditButton[3])
                {
                    //password clicked
                    clerkProfileTextBox[3].style.display="block";
                    clerkProfileTextBox[4].style.display="block";
                    confirmPasswordLabel.style.display="block";
                    clerkProfileLabel[3].style.display="none";
                    lastInputBox.style.marginBottom="30px";
                }

                else if(editButton == clerkProfileEditButton[4])
                {
                    //profile pic clicked
                    clerkProPicFile.style.display="block";
                }
            })
        })
    } 
    
    //CUSTOMER DASH
    else if(customerDashHTML)
    {
        //Toggle Customer Management Page
        customerProfileButton.addEventListener("click",(event)=>{
            customerDashBody.style.display="none";
            customerProfileContent.style.display="block";
        })
        
        returnToCartButton.addEventListener("click", (event)=>{
            customerDashBody.style.display="block";
            customerProfileContent.style.display="none";
        })


        //Profile edit buttons
        profileEditButton.forEach(function(editButton){
            editButton.addEventListener("click",(event)=>{
                if(editButton == profileEditButton[0])
                {
                    //first name clicked
                    customerProfileTextBox[0].style.display="block";
                    customerProfileLabel[0].style.display="none";
                }

                else if(editButton == profileEditButton[1])
                {
                    //last name clicked
                    customerProfileTextBox[1].style.display="block";
                    customerProfileLabel[1].style.display="none";
                }

                else if(editButton == profileEditButton[2])
                {
                    //email clicked
                    customerProfileTextBox[2].style.display="block";
                    customerProfileLabel[2].style.display="none";
                }

                else if(editButton == profileEditButton[3])
                {
                    //mailing address clicked
                    customerProfileTextBox[3].style.display="block";
                    customerProfileLabel[3].style.display="none";
                }

                else if(editButton == profileEditButton[4])
                {
                    //city/town clicked
                    customerProfileTextBox[4].style.display="block";
                    customerProfileLabel[4].style.display="none";
                }

                else if(editButton == profileEditButton[5])
                {
                    //state clicked
                    customerProfileTextBox[5].style.display="block";
                    customerProfileLabel[5].style.display="none";
                }

                else if(editButton == profileEditButton[6])
                {
                    //country clicked
                    customerProfileTextBox[6].style.display="block";
                    customerProfileLabel[6].style.display="none";
                }

                else if(editButton == profileEditButton[7])
                {
                    //password clicked
                    customerProfileTextBox[7].style.display="block";
                    customerProfileLabel[7].style.display="none";
                }

                else if(editButton == profileEditButton[8])
                {
                    //password clicked
                    customerProfileTextBox[8].style.display="block";
                    customerProfileLabel[8].style.display="none";
                }

                
                //Return button resets to pre-edit formats
                returnToCartButton.addEventListener("click", (event)=>{
                    for(let i=0; i<=customerProfileTextBox.length; i++)
                    {
                        customerProfileTextBox[i].style.display="none";
                        customerProfileLabel[i].style.display="block";
                    }
                })
            })
        })
    }


    //SIGN IN
    else if(logInHTML)
    {
        logInButton.addEventListener("click", (event)=>{
            regularCustomerDash.style.display="none";
            emptyShoppingCart.style.display="block";
        })
    }
}
main();