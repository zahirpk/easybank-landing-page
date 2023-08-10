function closeBtn(){

    document.querySelector(".hamburger-button").style.display="block";
    document.querySelector(".close-button").style.display="none";
    document.querySelector(".mobileMenu").style.display="none";
    document.querySelector(".background-illustration").style.display="block";
    document.querySelector(".header-bottom").style.backgroundSize = "contain";
    document.querySelector(".mobile_menu").style.paddingTop = "0";

}
function openBtn(){

    document.querySelector(".close-button").style.display="block";
    document.querySelector(".hamburger-button").style.display="none";
    document.querySelector(".mobileMenu").style.display="grid"
    document.querySelector(".background-illustration").style.display="none"
    document.querySelector(".header-bottom").style.backgroundSize = "100% 50%";
    document.querySelector(".mobile_menu").style.paddingTop = "2rem";
}