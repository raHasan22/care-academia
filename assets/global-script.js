// added by RH

const swiper = new Swiper(".rh-instructor-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1441: {
      slidesPerView: 4.6,
      spaceBetween: 20,
    },
  },
});

// FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".rh-faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".rh-faq-header");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active");
      });

      // If the clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});

// Added By Safat

function addToCart(variantId) {
  fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        {
          id: variantId,
          quantity: 1,
        },
      ],
    }),
  })
    .then((response) => {
      // Optional: Show success message or update cart count
      console.log("Product added to cart");
      // Optional: Open cart drawer
      document.dispatchEvent(new CustomEvent("cart:refresh"));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
// added by Nabil
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.nxt-revies-slider', {
      slidesPerView: 'auto',
      loop: true,
      centeredSlides: false,
      spaceBetween: 32,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      speed: 1300,
      pagination: {
        el: '.nxt-revies-slider-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 12,
        },
        960: {
          spaceBetween: 18,
        },
        1440: {
          spaceBetween: 24,
        },
        1920: {
          spaceBetween: 30,
        },
      },
      on: {
        init: function () {
          updateSlideAccessibility(this);
          $('.testimonials-slider-swipper .nxt-reviews__card .testimonial-content').matchHeight();
        },
        slideChange: function () {
          updateSlideAccessibility(this);
          $('.testimonials-slider-swipper .nxt-reviews__card .testimonial-content').matchHeight();
        },
      },
    });

    function updateSlideAccessibility(swiper) {
      swiper.slides.forEach((slide, index) => {
        const isActive = index === swiper.realIndex;

        // Set aria-hidden appropriately
        slide.setAttribute('aria-hidden', !isActive);

        // Adjust focusable elements inside the slide
        const focusables = slide.querySelectorAll('a, button, input, textarea, select, [tabindex]');
        focusables.forEach((el) => {
          if (!isActive) {
            el.setAttribute('tabindex', '-1');
          } else {
            el.removeAttribute('tabindex');
          }
        });
      });
    }
  });