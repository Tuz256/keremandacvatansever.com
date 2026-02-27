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

window.addEventListener('load', () => {
    const text = document.querySelector('.welcome-title-text');
    text.style.opacity = 0;
    text.style.transition = 'opacity 2.2s ease-out';

    requestAnimationFrame(() => {
        text.style.opacity = 1;
    });

    setTimeout(() => {
        text.style.transition = 'none';
        introDone = true;
    }, 2200);
});

window.addEventListener('load', updateGradient);

function updateGradient() {
    const scrollTop = window.scrollY;
    const maxScroll = window.innerHeight;

    const minDeg = 135;
    const maxDeg = 315;

    const progress = Math.min(scrollTop / maxScroll, 1);
    const angle = minDeg + (maxDeg - minDeg) * progress;

    root.style.setProperty("--welcome-gradient-angle", `${angle}deg`);
}

window.addEventListener('scroll', updateGradient);



window.addEventListener('scroll', () => {
    if (!introDone) return;

    dynamicOpacity(document.querySelector('.welcome-title-text'));

});


const textarea = document.getElementById("message");

// TEXTAREA OTOMATİK BOYUT ARTTIRMA
// textarea.addEventListener("input", function () {
//     this.style.height = "auto";
//     this.style.height = this.scrollHeight + "px";
// });

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