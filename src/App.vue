<template>
  <header class="hero">
    
    <img src="./assets/logo.png" alt="Logo" class="logo"/>
    <img src="./assets/second-logo.png" alt="Second Logo" class="floating-logo" />
    <h1 class="brand-text">COFFEE HEAVEN</h1>
    <p class="description-text">
      Crafting the perfect brew for your daily escape. Experience the rich aroma
      of hand-picked beans, roasted to perfection in every single cup.
    </p>
    <button class="btn-shop">
      SHOP HERE
    </button>
  </header>
</template>
<style>
body {
  margin: 0;
}

.hero {
  width: 100%;
  height: 120vh;

  background-image: url('./assets/hero.jpg');
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-shop {
  /* Positioning - Adjust these to match your description text */
  position: absolute;
  top: 80%; /* Placed below your description text */
  left: 73%;
  transform: translate(-50%, -50%);

  /* Desktop Dimensions & Shape */
  width: 249px;
  height: 75px;
  border: 1px solid #ffffff;
  border-radius: 10px; /* Using your inner-div requirement for the sharpest look */
  background: transparent;

  /* Typography */
  font-family: "Marko One", serif;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Centering the text */
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-shop:hover {
  background-color: rgba(255, 255, 255, 0.1);
  letter-spacing: 1px;
}

/* Mobile Version */
@media (max-width: 768px) {
  .btn-shop {
    /* Mobile Positioning */
    top: 86%; /* Adjusted to sit below mobile text at 81% */
    left: 50%;
    
    /* Mobile Dimensions */
    width: 98px;
    height: 31px;
    border-radius: 3px;
    
    /* Mobile Typography */
    font-size: 12px;
  }
}

.brand-text {
  font-family: 'Marko One';
  color: white;
  font-size: 36px;
  letter-spacing: 2px;
  position: absolute;
  top: 55%;
  left: 62%;
  transform: translateY(-50%);
}

.description-text {
  position: absolute;
  top: 64%;
  left: 73%;
  transform: translate(-50%, -50%);
  
  /* Typography */
  font-family: "Marko One", serif;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  line-height: 1.6; /* Adds nice breathing room between the two lines */

  /* The "Two-Row" Magic */
  width: 550px;      /* Adjust this value until it snaps to exactly 2 lines */
  max-width: 90vw;   /* Prevents it from being wider than the screen */
}

/* ... keep your desktop .description-text styles from before ... */

/* Responsive Mobile Code */
@media (max-width: 768px) {
  .description-text {
    /* Vertical positioning requirement */
    top: 78%; 
    left: 50%; /* Center it horizontally for better mobile balance */
    transform: translate(-50%, -50%);
    position: absolute;

    /* Force two rows on mobile */
    width: 290px;      /* Fixed width ensures it wraps into two lines on most phones */
    max-width: 95vw;   /* Safety net for very small screens */
    
    font-size: 13px;   /* Smaller font helps fit more words per line */
    line-height: 1.4;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 100vh;
    background-image: url('./assets/hero-mobile.jpg'); 
    background-position: center;
  }
}
.logo {
  position: absolute; 
  top: 20px;          
  left: 20px;         
  z-index: 10;

  width: 240px;       
  height: auto;      
}
.floating-logo {
  position: absolute;
  top: 43%;     
  left: 73%;    
  transform: translate(-50%, -50%);
  height: 125px;
}

@media (max-width: 768px) {
  .hero {
    height: 100vh; /* Adjust height to fill the mobile screen like the photo */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Main "Corretto" Logo */
  .logo {
    position: absolute;
    top: 40px;      /* Adjust based on the gap in your photo */
    left: 50%;      /* Move to horizontal center */
    transform: translateX(-50%); 
    width: 180px;   /* Size it to match the mobile view */
  }

  /* Circular "Retrobrand" Symbol */
  .floating-logo {
    position: absolute;
    top: 145px;     /* Places it directly under the main logo */
    left: 50%;      /* Move to horizontal center */
    transform: translateX(-50%);
    height: 120px;   /* Keep or slightly decrease size */
  }
  
  /* Ensure the text starts lower down so it doesn't overlap logos */
  .overlay {
    margin-top: 250px; 
    padding: 0 20px;
  }

  .overlay h1 {
    font-size: 28px;
    letter-spacing: 2px;
  }
  .brand-text {
    position: absolute;
    left: 50%;
    top : 70%; /* Positioned relative to the bottom of the hero */
    transform: translateX(-50%); /* Centers it perfectly */
    
    /* 2. Typography */
    font-family: 'Marko One';
    font-size: 1.30rem; /* Larger size for readability */
    text-transform: uppercase;
    color: white; /* Ensure it's visible */
  }
}


</style>