import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image js-target" src="${preview}" alt="${description}"/>
    </a>
    </li>`;
  })
  .join("");

galleryList.innerHTML = markup;

const galleryLightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt"
});

galleryList.addEventListener("click", onMouseClick);

function onMouseClick(evt) {
  if (!evt.target.classList.contains(".js-target")) {
    return;
  }

  galleryLightbox.show();
}


