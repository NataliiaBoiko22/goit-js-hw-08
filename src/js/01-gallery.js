// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryBlock = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
      <div class="gallery__item">
      <a class="gallery__item" href="${original}" >
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>

    </div>`
  )
  .join("");
galleryBlock.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
