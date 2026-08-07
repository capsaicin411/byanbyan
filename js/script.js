// ========================================
// イントロ・ローディング
// ========================================

let introFinished = false;

// イントロ開始
document.documentElement.style.overflow = "hidden";
document.body.style.overflow = "hidden";


// PC：マウスホイールを完全に無効化
function preventIntroScroll(e) {
    if (!introFinished) {
        e.preventDefault();
    }
}

window.addEventListener("wheel", preventIntroScroll, {
    passive: false
});


// スマホ：スワイプを完全に無効化
function preventIntroTouch(e) {
    if (!introFinished) {
        e.preventDefault();
    }
}

window.addEventListener("touchmove", preventIntroTouch, {
    passive: false
});


// キーボードによるスクロールも無効化
function preventIntroKey(e) {

    if (!introFinished) {

        const keys = [
            "ArrowUp",
            "ArrowDown",
            "PageUp",
            "PageDown",
            "Home",
            "End",
            " "
        ];

        if (keys.includes(e.key)) {
            e.preventDefault();
        }

    }

}

window.addEventListener("keydown", preventIntroKey);


window.addEventListener("load", () => {

    setTimeout(() => {

        const loading =
            document.getElementById("loading-screen");

        // イントロをフェードアウト
        loading.style.opacity = "0";


        setTimeout(() => {

            // イントロを完全に消す
            loading.style.display = "none";


            // メニューボタンを表示
            document
                .getElementById("menu-btn")
                .style.opacity = "1";


            // ロゴを表示
            const logo =
                document.querySelector(".logo");

            if (logo) {
                logo.classList.add("show");
            }


            // ========================================
            // イントロ終了
            // ========================================

            introFinished = true;

            // スクロール解禁
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";


        }, 1000);

    }, 3000);


});
const btn =
    document.getElementById("menu-btn");

const menu =
    document.getElementById("menu");

btn.addEventListener("click", () => {

    menu.classList.toggle("active");

});
const slides = document.querySelectorAll(".first-view .bg");

let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add("active");
}, 5000);

document.addEventListener(
    "mousemove",
    (e) => {


        const sparkle =
            document.createElement("img");


        const stars = [
            "img/cur-s/s1.PNG",
            "img/cur-s/s2.PNG",
            "img/cur-s/s3.PNG"
        ];

        sparkle.src =
            stars[
            Math.floor(Math.random() * stars.length)
            ];


        sparkle.className =
            "sparkle";


        sparkle.style.left =
            e.clientX + "px";


        sparkle.style.top =
            e.clientY + "px";


        document.body.appendChild(
            sparkle
        );


        setTimeout(() => {

            sparkle.remove();

        }, 1000);


    });

window.addEventListener("scroll", () => {

    const scrollY =
        window.scrollY;

    const overlay =
        document.querySelector(
            ".dark-overlay"
        );

    const opacity =
        Math.min(
            scrollY / 500,
            0.7
        );

    overlay.style.opacity =
        opacity;

});
const reveals =
    document.querySelectorAll(
        ".reveal"
    );

function revealSection() {

    reveals.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        const trigger =
            window.innerHeight * 1.0;

        if (top < trigger) {

            section.classList.add(
                "show"
            );

        }

    });

}

window.addEventListener(
    "scroll",
    revealSection
);

revealSection();



