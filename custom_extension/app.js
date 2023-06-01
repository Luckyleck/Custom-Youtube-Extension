let backgroundImageUrl = "https://marketplace.canva.com/EAFTQEWI-Ko/1/0/1600w/canva-black-sky-galaxy-stars-desktop-wallpaper-iWMZ0xN6KXs.jpg";
const siteName = window.location.hostname


window.addEventListener("load", () => {
    chrome.storage.sync.get(['backgroundUrl'], (result) => {
        backgroundImageUrl = result.backgroundUrl;
    })
})
// if (site.includes('youtube.com')) {
//     alert('You are on youtube!')
// }

function changeBackground() {
    const contentElement = document.getElementById("content");
    contentElement.style.backgroundImage = `url(${backgroundImageUrl})`;
    contentElement.style.backgroundSize = 'contain';

    const logoElement = document.getElementById("logo");
    // Remove all children of logoElement
    logoElement.innerHTML = '';
}

function changeIcon() {
    const logoElement = document.getElementById("logo");
    const logoImageUrl = "https://eaassets-a.akamaihd.net/battlelog/prod/emblem/896/897/256/2955061304108125288.png?v=1425839826";

    // Create an <img> element
    const logoImage = document.createElement("img");
    logoImage.src = logoImageUrl;
    logoImage.style.maxWidth = '50%';
    logoImage.style.height = 'auto';
    logoImage.style.cursor = 'pointer';

    logoImage.addEventListener('click', function () {
        window.location.href = 'https://youtube.com';
    });


    // Clear existing content of logoElement
    logoElement.innerHTML = '';

    // Append the logoImage as a child of logoElement
    logoElement.appendChild(logoImage);
}

// function changeTitle() {
//     const videoTitle = document.getElementById("video-title")
//     videoTitle.style.textShadow = "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black";
// }

if (siteName.includes('youtube.com')) {
    changeBackground()
    changeIcon()
}
// window.addEventListener("load", changeBackground);
// window.addEventListener("load", changeIcon)
