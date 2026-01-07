document.addEventListener("DOMContentLoaded", () => {
    const slider =
        document.getElementById("slider");
    const leftBtn =
        document.getElementById("leftBtn");
    const rightBtn =
        document.getElementById("rightBtn");
    leftBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: -300, behavior: "smooth"
        });
    });
    rightBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: 300, behavior: "smooth"
        });
    });
    leftBtn.style.visibility = "hidden";
    rightBtn.addEventListener("click", () => {
        leftBtn.style.visibility = "visible";
    });
    const loginBtn = document.getElementById("openLogin");
    const loginPopup = document.getElementById("LoginPopup");
    const CloseLogin = document.getElementById("closeLogin");
    const SubmitLogin=document.getElementById("loginBtn");

    // FIXED: Correct login state check
    if (localStorage.getItem("loggedIn") === "true") {
        loginBtn.innerText = "Logout";
    }

    // click on sign in / logout
    loginBtn.addEventListener("click",()=>{

        // FIXED: Correct login state check
        if(localStorage.getItem("loggedIn") === "true"){
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("userEmail");
            alert("you have been logged out!");
            loginBtn.innerText="sign In";
            return;
        }

        //if not login in open login page
        loginPopup.style.display="flex";
        const main=document.getElementById("main");
        main.style.display="none";
        document.getElementById("header-content").style.display="none";
        document.getElementById("for-seet").style.display="none";
    });

    CloseLogin.addEventListener("click",()=>{
         document.getElementById("header-content").style.display="block";
        loginPopup.style.display="none";
        main.style.display="flex";
        const shape=document.getElementById("for-seet");
        shape.style.display="flex";
    });

    //submit login
    SubmitLogin.addEventListener("click",()=>{
        const email = document.getElementById("user").value.trim();
        const password = document.getElementById("pass").value.trim();
        const message = document.getElementById("message");
        const emailChenk=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailChenk.test(email)) {
            message.style.color="red";
            message.innerText="Invalid Email!";
            return;
        }

        if (password.length < 8) {
            message.style.color="red";
            message.innerText="password must be 8+ Characters!";
            return;            
        }
        message.style.color="green";
        message.innerText="login Sucessful !";
        //save login 
        localStorage.setItem("loggedIn","true");
        localStorage.setItem("userEmail",email);

        //change button text to loggout
        loginBtn.innerText="Logout";

        setTimeout(()=>{
            loginPopup.style.display="none";
            document.getElementById("header-content").style.display="block";
            main.style.display="flex";
            const shape=document.getElementById("for-seet");
            shape.style.display="flex";
        },800);
    });
});
