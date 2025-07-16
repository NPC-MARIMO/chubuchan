const imageUrls = [
  "https://cmseducation.org/wp-content/uploads/2025/06/Our-Guardian-of-the-Galaxy-Inspiring-Young-Minds-to-Dream-BIG-2.webp",
  "https://cmseducation.org/wp-content/uploads/2025/06/From-Batch-of-2002-CMS-Aliganj-Campus-I-to-the-Cosmos-above-2.webp",
  "https://cmseducation.org/wp-content/uploads/2025/07/Website-Banner.webp",
  "https://cmseducation.org/wp-content/uploads/2025/07/2.webp",
  "https://cmseducation.org/wp-content/uploads/2025/06/Astronaught-pin-to-Shubhanshu-Shukla.jpg",
  "https://cmseducation.org/wp-content/uploads/2025/07/RETURN-TO-EARTH.webp",
];

const slidesContainer = document.querySelector(".slides");

// Dynamically add slides
imageUrls.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  slidesContainer.appendChild(img);
});

let currentIndex = 0;
const totalSlides = imageUrls.length;

function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Manual controls
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
