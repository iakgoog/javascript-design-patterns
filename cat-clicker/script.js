function start() {
    let totalClick = 0;
    const catWrapperElem = document.querySelector(".cat-wrapper");
    catWrapperElem.addEventListener("click", () => {
        totalClick++;
        console.log(totalClick);
    });
}

start();