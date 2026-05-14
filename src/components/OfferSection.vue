<template>
  <div class="offers-wrapper">
    <section class="offer-container">
      <h2 class="offer-title">OUR DELICIOUS OFFER</h2>
      <p class="offer-desc">
        Freshly roasted beans, steaming hot lattes, and cozy vibes for your morning.
      </p>
    </section>

    <div class="items-grid">
      <div class="offer-item">
        <img src="../assets/type1.png" alt="Types of Coffee">
        <h3>TYPES OF COFFEE</h3>
        <p>Lorem Ipsum has been the  standard dummy text...</p>
      </div>

      <div class="offer-item">
        <img src="../assets/type2.png" alt="Bean Varieties">
        <h3>BEAN VARIETIES</h3>
        <p>Lorem Ipsum has been the  standard dummy text...</p>
      </div>

      <div class="offer-item">
        <img src="../assets/type3.png" alt="Coffee & Pastry">
        <h3>COFFEE & PASTRY</h3>
        <p>Lorem Ipsum has been the standard dummy text...</p>
      </div>

      <div class="offer-item">
        <img src="../assets/type4.png" alt="Coffee to go">
        <h3>COFFEE TO GO</h3>
        <p>Lorem Ipsum has been the standard dummy text...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfferSection'
}
</script>

<style scoped>
/* 1. Reset for this component to ensure padding doesn't add to width */
* {
  box-sizing: border-box;
}

.offers-wrapper {
  width: 100%;
  background-color: #fff;
  overflow-x: hidden; /* Prevents the horizontal scroll cutoff on mobile */
  position: relative;
  /* If the Hero section overlaps this, increase this margin */
  margin-top: 20px; 
}

.offer-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
}

.offer-title {
  font-family: 'Marko One', serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
  color: #000;
}

.offer-desc {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 90%;
  color: #333;
}

/* 2. Responsive Grid Setup */
.items-grid {
  display: grid;
  /* Forces 2 columns on mobile */
  grid-template-columns: repeat(2, 1fr); 
  column-gap: 10px; /* Space between the two columns */
  row-gap: 30px;    /* Space between the two rows */
  padding: 0 15px 40px 15px; 
  max-width: 1200px;
  margin: 0 auto;
}

.offer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 0; /* Allows the grid item to shrink properly */
}

.offer-item img {
  /* Percentage width ensures it scales based on the column size */
  width: 60%; 
  max-width: 100px; 
  height: auto;
  margin-bottom: 10px;
}

.offer-item h3 {
  font-family: 'Marko One', serif;
  font-size: 13px;
  margin: 8px 0;
  color: #000;
  text-transform: uppercase;
}

.offer-item p {
  font-size: 11px;
  color: #666;
  line-height: 1.4;
  margin: 0;
  width: 100%;
  /* Fixes the text cutoff by forcing words to wrap */
  overflow-wrap: break-word; 
  padding: 0 5px;
}

/* 3. Desktop Adjustments (Laptops and Screens) */
@media (min-width: 1024px) {
  .offer-container {
    padding: 80px 0 40px 0;
  }

  .offer-title {
    font-size: 36px;
    letter-spacing: 0.2em;
  }

  .offer-desc {
    font-size: 18px;
    max-width: 700px;
    margin-bottom: 30px;
  }

  .items-grid {
    /* Switches to a single row of 4 columns on desktop */
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding-bottom: 80px;
  }

  .offer-item img {
    width: 120px;
  }

  .offer-item h3 {
    font-size: 18px;
  }

  .offer-item p {
    font-size: 14px;
    padding: 0;
  }
}
</style>