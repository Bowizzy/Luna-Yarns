const showroomConfig = {
  whatsappNumber: "2348118319423",
};

const products = [
  {
    id: "product-01",
    name: "Product 01",
    price: "₦14,500",
    image: "project-01.jpeg",
    alt: "Luna Yarns Product 01 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-02",
    name: "Product 02",
    price: "₦10,000",
    image: "project-02.jpeg",
    alt: "Luna Yarns Product 02 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-03",
    name: "Product 03",
    price: "₦24,000",
    image: "project-03.jpeg",
    alt: "Luna Yarns Product 03 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-04",
    name: "Product 04",
    price: "₦16,500",
    image: "project-04.jpeg",
    alt: "Luna Yarns Product 04 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-05",
    name: "Product 05",
    price: "₦19,500",
    image: "project-05.jpeg",
    alt: "Luna Yarns Product 05 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-06",
    name: "Product 06",
    price: "₦10,000",
    image: "project-06.jpeg",
    alt: "Luna Yarns Product 06 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-07",
    name: "Product 07",
    price: "₦24,000",
    image: "project-07.jpeg",
    alt: "Luna Yarns Product 07 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-08",
    name: "Product 08",
    price: "₦16,500",
    image: "project-08.jpeg",
    alt: "Luna Yarns Product 08 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-09",
    name: "Product 09",
    price: "₦10,000",
    image: "project-09.jpeg",
    alt: "Luna Yarns Product 09 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-10",
    name: "Product 10",
    price: "₦17,000",
    image: "project-10.jpeg",
    alt: "Luna Yarns Product 10 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-11",
    name: "Product 11",
    price: "₦17,000",
    image: "project-11.jpeg",
    alt: "Luna Yarns Product 11 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-12",
    name: "Product 12",
    price: "₦12,500",
    image: "project-12.jpeg",
    alt: "Luna Yarns Product 12 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-13",
    name: "Product 13",
    price: "₦17,000",
    image: "project-13.jpeg",
    alt: "Luna Yarns Product 13 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-14",
    name: "Product 14",
    price: "₦24,000",
    image: "project-14.jpeg",
    alt: "Luna Yarns Product 14 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-15",
    name: "Product 15",
    price: "₦22,500",
    image: "project-15.jpeg",
    alt: "Luna Yarns Product 15 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-16",
    name: "Product 16",
    price: "₦28,000",
    image: "project-16.jpeg",
    alt: "Luna Yarns Product 16 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-17",
    name: "Product 17",
    price: "₦15,000",
    image: "project-17.jpeg",
    alt: "Luna Yarns Product 17 nightwear",
    description: "",
    sizes: [],
  },
  {
    id: "product-18",
    name: "Product 18",
    price: "₦16,500",
    image: "project-18.jpeg",
    alt: "Luna Yarns Product 18 nightwear",
    description: "",
    sizes: [],
  },
];

const featuredProductIds = [
  "product-12",
  "product-05",
  "product-01",
  "product-16",
  "product-03",
  "product-10",
];

const productGrid = document.querySelector("[data-product-grid]");
const featuredCarousel = document.querySelector("[data-featured-carousel]");
const modal = document.querySelector("[data-modal]");
const modalPanel = document.querySelector(".modal-panel");
const modalImage = document.querySelector("[data-modal-image]");
const modalCode = document.querySelector("[data-modal-code]");
const modalName = document.querySelector("[data-modal-name]");
const modalPrice = document.querySelector("[data-modal-price]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalSizes = document.querySelector("[data-modal-sizes]");
const modalWhatsapp = document.querySelector("[data-modal-whatsapp]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const siteHeader = document.querySelector("[data-header]");
const generalWhatsappLinks = document.querySelectorAll("[data-general-whatsapp], [data-footer-whatsapp]");

let activeProduct = null;
let lastFocusedElement = null;

function makeWhatsAppLink(productName) {
  const message = productName
    ? `Hello Luna Yarns, I'd like to order the ${productName}.`
    : "Hello Luna Yarns, I'd like to place an order.";

  if (!showroomConfig.whatsappNumber) {
    return {
      href: "#footer",
      missingNumber: true,
      message,
    };
  }

  return {
    href: `https://wa.me/${showroomConfig.whatsappNumber}?text=${encodeURIComponent(message)}`,
    missingNumber: false,
    message,
  };
}

function createProductCard(product, options = {}) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = options.featured ? "featured-card" : "product-card reveal";
  card.dataset.productId = product.id;
  card.setAttribute("aria-label", `View ${product.name}, ${product.price}`);

  const loading = options.eager ? "eager" : "lazy";

  card.innerHTML = `
    <span class="product-image">
      <img src="${product.image}" alt="${product.alt}" loading="${loading}">
    </span>
    <span class="product-meta">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <span class="view-piece">View Piece <span aria-hidden="true">&rarr;</span></span>
    </span>
  `;

  card.addEventListener("click", () => openProductModal(product.id));

  return card;
}

function renderProducts() {
  productGrid.replaceChildren(...products.map((product, index) => createProductCard(product, { eager: index < 4 })));

  const featuredProducts = featuredProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  featuredCarousel.replaceChildren(...featuredProducts.map((product, index) => createProductCard(product, { featured: true, eager: index < 2 })));
}

function openProductModal(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) return;

  activeProduct = product;
  lastFocusedElement = document.activeElement;

  modalImage.src = product.image;
  modalImage.alt = product.alt;
  modalCode.textContent = product.id.replace("-", " ");
  modalName.textContent = product.name;
  modalPrice.textContent = product.price;

  if (product.description) {
    modalDescription.textContent = product.description;
    modalDescription.hidden = false;
  } else {
    modalDescription.hidden = true;
  }

  if (product.sizes.length) {
    modalSizes.textContent = `Sizes: ${product.sizes.join(", ")}`;
    modalSizes.hidden = false;
  } else {
    modalSizes.hidden = true;
  }

  const whatsapp = makeWhatsAppLink(product.name);
  modalWhatsapp.href = whatsapp.href;
  modalWhatsapp.classList.toggle("is-disabled", whatsapp.missingNumber);
  modalWhatsapp.setAttribute("aria-disabled", whatsapp.missingNumber ? "true" : "false");
  modalWhatsapp.dataset.message = whatsapp.message;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalPanel.focus();
}

function closeProductModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeProduct = null;

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function setupModal() {
  document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", closeProductModal);
  });

  modalWhatsapp.addEventListener("click", (event) => {
    if (!showroomConfig.whatsappNumber) {
      event.preventDefault();
      alert("WhatsApp ordering is ready. Add the Luna Yarns WhatsApp number in app.js to activate this button.");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeProductModal();
    }

    if (event.key === "Tab" && modal.classList.contains("is-open")) {
      trapModalFocus(event);
    }
  });
}

function trapModalFocus(event) {
  const focusable = modalPanel.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])");
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (!first || !last) return;

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function setupNavigation() {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteHeader.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  }, { passive: true });
}

function setupCarousel() {
  const previous = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");
  let pointerStart = 0;
  let scrollStart = 0;
  let isDragging = false;
  let didDrag = false;

  const scrollByCard = (direction) => {
    const firstCard = featuredCarousel.querySelector(".featured-card");
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;
    featuredCarousel.scrollBy({ left: direction * (cardWidth + 28), behavior: "smooth" });
  };

  previous.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));

  featuredCarousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") scrollByCard(1);
    if (event.key === "ArrowLeft") scrollByCard(-1);
  });

  featuredCarousel.addEventListener("pointerdown", (event) => {
    isDragging = true;
    pointerStart = event.clientX;
    scrollStart = featuredCarousel.scrollLeft;
    didDrag = false;
    featuredCarousel.classList.add("is-dragging");
    featuredCarousel.setPointerCapture(event.pointerId);
  });

  featuredCarousel.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    if (Math.abs(event.clientX - pointerStart) > 6) didDrag = true;
    featuredCarousel.scrollLeft = scrollStart - (event.clientX - pointerStart);
  });

  const endDrag = () => {
    isDragging = false;
    featuredCarousel.classList.remove("is-dragging");
  };

  featuredCarousel.addEventListener("pointerup", endDrag);
  featuredCarousel.addEventListener("pointercancel", endDrag);
  featuredCarousel.addEventListener("click", (event) => {
    if (!didDrag) return;
    event.preventDefault();
    event.stopPropagation();
    didDrag = false;
  }, true);
}

function setupReveals() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  revealItems.forEach((item) => observer.observe(item));
}

function setupParallax() {
  const frames = document.querySelectorAll(".parallax-frame img");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !frames.length) return;

  const update = () => {
    frames.forEach((image) => {
      const rect = image.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      image.style.transform = `translateY(${Math.max(-14, Math.min(14, progress * -22))}px) scale(1.04)`;
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function setupGeneralWhatsappLinks() {
  generalWhatsappLinks.forEach((link) => {
    const whatsapp = makeWhatsAppLink();
    link.href = whatsapp.href;
    link.classList.toggle("is-disabled", whatsapp.missingNumber);
    link.setAttribute("aria-disabled", whatsapp.missingNumber ? "true" : "false");

    link.addEventListener("click", (event) => {
      if (!showroomConfig.whatsappNumber) {
        event.preventDefault();
        alert("Add the Luna Yarns WhatsApp number in app.js to activate WhatsApp ordering.");
      }
    });
  });
}

renderProducts();
setupNavigation();
setupCarousel();
setupModal();
setupReveals();
setupParallax();
setupGeneralWhatsappLinks();
