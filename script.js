function displayMessage(response) {
  // When clicked No-Button
  if (response === 'No') {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    // window.innerWidth -> It gives the available horizontal space for content.
    // noButton.offsetWidth -> This gives the width of the `noButton` element.
  
    // Set button position to absolute
    noButton.style.position = "absolute";

    //Change image source to gun.jpg
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordiantes to the button
    noButton.style.left = randomX + "px";
    noButton.style.right = randomY + "px";

    // Update text content and hide name message
    document.getElementById("question").textContent = "The no button is just for nothing";
    document.getElementById("name").style.display = "none";
    }

// When clicked Yes-Button

if (response === 'Yes') {
  // Remove name message and no button
  document.getElementById("name").remove();
  

  // Update text content, show message, and change image source to "dance.gif"
  const yesMessage = document.getElementById("question");
  yesMessage.textContent = "Yay! see you on the 14th😘";
  yesMessage.style.display = "block";
  yesMessage.style.fontStyle = "normal";
  document.getElementsByClassName("image")[0].src = "images/dance.gif";
  

}

if (response === 'Reset') {
  document.getElementById("yes-button");
  document.getElementById("no-button");
  
  const resetMessage = document.getElementById("question");
  resetMessage.textContent = "Will you be my Valentines?";
  resetMessage.style.display = "block";
  resetMessage.style.fontStyle = "normal";
  document.getElementsByClassName("image")[0].src = "images/scale.webp";

  document.getElementById("main").insertAdjacentHTML("afterbegin", '<h1 class="bb" id="name">Hey Bibi!</h1>') 
};
  

}

