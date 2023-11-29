document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.style.display = "none"; // nasconde il lightbox prima
    document.body.appendChild(lightbox);

    galleryItems.forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const imageUrl = item.src;
            const image = document.createElement("img");
            image.src = imageUrl;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(image);
            lightbox.style.display = "flex"; // per mostrare il lightbox
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none"; // nasconde lightbox dopo
    });
});



