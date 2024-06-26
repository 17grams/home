document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // メニューを開閉する関数
    const toggleMenu = () => {
        dropdownMenu.classList.toggle("show");
    };

    // メニューボタンをクリックしたらメニューを開閉する
    menuToggle.addEventListener("click", toggleMenu);

    // メニューの外側をクリックしたらメニューを閉じる
    document.addEventListener("click", (event) => {
        const targetElement = event.target;
        if (!menuToggle.contains(targetElement) && !dropdownMenu.contains(targetElement)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // メニュー上にマウスがある間、メニューを開いたままにする
    dropdownMenu.addEventListener("mouseenter", toggleMenu);

    // メニューからマウスが外れたら、メニューを閉じる
    dropdownMenu.addEventListener("mouseleave", () => {
        dropdownMenu.classList.remove("show");
    });
});
