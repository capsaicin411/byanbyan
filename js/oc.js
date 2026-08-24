// ============================
// OCページ用 JavaScript
// ============================

// ハンバーガーメニュー
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (btn && menu) {

    btn.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


// ============================
// OCモーダル
// ============================

document.addEventListener("click", (e) => {

    // OCカードをクリック
    const card = e.target.closest(".modal-btn");

    if (card) {

        const modalId = card.dataset.modal;

        const modal =
            document.getElementById(modalId);

        if (modal) {

            modal.classList.add("show");

        }

    }


    // 閉じるボタン
    const closeBtn =
        e.target.closest(".close-btn");

    if (closeBtn) {

        const modal =
            closeBtn.closest(".modal");

        if (modal) {

            modal.classList.remove("show");

        }

    }

});

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

// ============================
// スクロールで背景を白 → 黒
// ============================

const ocPage = document.body;

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;
    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = Math.min(scrollY / maxScroll, 1);

    // 0 = 白、1 = 黒
    const value = Math.round(255 * (1 - progress));

    ocPage.style.backgroundColor =
        `rgb(${value}, ${value}, ${value})`;

});

// ========================================
// スクロールでふわっと表示
// ========================================

const scrollFadeElements =
    document.querySelectorAll(".scroll-fade");

const scrollFadeObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    // 一度表示したら監視を終了
                    scrollFadeObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.15
        }
    );


scrollFadeElements.forEach((element) => {

    scrollFadeObserver.observe(element);

});