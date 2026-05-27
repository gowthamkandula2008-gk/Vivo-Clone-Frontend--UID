// =========================
// MOBILE MENU
// =========================

function toggleMenu(){

  const navLinks =
  document.querySelector(".nav-links");

  if(navLinks.style.display === "flex"){

    navLinks.style.display = "none";

  }

  else{

    navLinks.style.display = "flex";

    navLinks.style.flexDirection = "column";

    navLinks.style.position = "absolute";

    navLinks.style.top = "70px";

    navLinks.style.left = "0";

    navLinks.style.right = "0";

    navLinks.style.background = "#111";

    navLinks.style.padding = "20px";

  }

}


// =========================
// NEWSLETTER POPUP
// =========================

function subscribeUser(){

  const emailInput =
  document.getElementById("emailInput");

  const popup =
  document.getElementById("popup");

  const email =
  emailInput.value.trim();

  // EMAIL VALIDATION

  const emailPattern =
  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email === ""){

    alert("Please enter your email.");
    return;

  }

  if(!email.match(emailPattern)){

    alert("Please enter valid email.");
    return;

  }

  // SHOW POPUP

  popup.style.display = "flex";

  // CLEAR INPUT

  emailInput.value = "";

}


// =========================
// CLOSE POPUP
// =========================

function closePopup(){

  document.getElementById("popup")
  .style.display = "none";

}