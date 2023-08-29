import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryList.addEventListener("click", onMouseClick);


const markup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a href="${original}" class="gallery__link">
        <img class="gallery__image js-target"
         src="${preview}" 
         data-source="${original}" 
         alt="${description}"
         />
    </a>
</li>`;
});

galleryList.insertAdjacentHTML("beforeend", markup.join(""))

function onMouseClick(event) {
    event.preventDefault();
    
    const { target } = event;
    if (!target.classList.contains("js-target")) {
        return
    }

    const originalImg = target.dataset.source;
    const currentItem = galleryItems.find(({ original }) => original === originalImg);

    const instance = basicLightbox.create(`
    <div>
        <img src="${currentItem.original}" alt="${currentItem.description}">
    </div>
    `);
    
    instance.show();

document.addEventListener("keydown", onEscPress);

    function onEscPress(event) {
        const ESK_KEY_CODE = event.code === 'Escape'
        if (ESK_KEY_CODE) {
            instance.close();
            window.removeEventListener("keydown", onEscPress)
        }
    }
}



