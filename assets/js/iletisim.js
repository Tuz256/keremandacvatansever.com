const root = document.documentElement;
let introDone = false;

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'auto';
}

function dynamicOpacity(text) {
    const rect = text.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const distance = Math.abs(
        rect.top + rect.height / 2 - windowHeight / 2
    );

    const maxDistance = windowHeight / 3;

    let opacity = 1 - distance / maxDistance;
    opacity = Math.max(0, Math.min(1, opacity));

    text.style.opacity = opacity;
}

const textarea = document.getElementById("message");

textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
});

// window.addEventListener('scroll', () => {
//     if (!topBar) return;

//     const scrollY = window.scrollY;
//     fadeDistance = window.innerHeight * 0.5; // kaç px'de tamamen görünsün

//     let opacity = scrollY / fadeDistance;
//     opacity = Math.max(0, Math.min(1, opacity));

//     topBar.style.opacity = opacity;

//     if (opacity > 0.1) {
//         topBar.style.pointerEvents = 'auto';
//     } else {
//         topBar.style.pointerEvents = 'none';
//     }
// });