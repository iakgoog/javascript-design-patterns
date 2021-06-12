function start() {
    let totalCat1Click = 0;
    const cat1Elem = document.getElementById("cat1-image");
    const cat1ClickDisplay = document.getElementById("cat1-click");
    cat1Elem.addEventListener("click", () => {
        totalCat1Click++;
        cat1ClickDisplay.innerHTML = totalCat1Click;
    });

    let totalCat2Click = 0;
    const cat2Elem = document.getElementById("cat2-image");
    const cat2ClickDisplay = document.getElementById("cat2-click");
    cat2Elem.addEventListener("click", () => {
        totalCat2Click++;
        cat2ClickDisplay.innerHTML = totalCat2Click;
    });
}

start();