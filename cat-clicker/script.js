const catList = [
    {
        name: "Meow-1",
        photo: "cat1.jpg",
        click: 0
    },
    {
        name: "Meow-2",
        photo: "cat2.jpg",
        click: 0
    },
    {
        name: "Meow-3",
        photo: "cat3.jpg",
        click: 0
    },
    {
        name: "Meow-4",
        photo: "cat4.jpg",
        click: 0
    },
    {
        name: "Meow-5",
        photo: "cat5.jpg",
        click: 0
    }
];

function start() {
    for (let cat of catList) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("cat-title");
        const heading = document.createElement("h3");
        heading.innerHTML = cat.name;
        heading.addEventListener("click", () => {
            const catName = document.getElementById("name");
            const click = document.getElementById("click");
            const bg = document.getElementById("cat-display");

            catName.innerHTML = cat.name;
            click.innerHTML = cat.click;
            bg.style.backgroundImage = `url('${cat.photo}')`;
            const clickHandler = (c) => {
                cat.click = cat.click + 1;
                click.innerHTML = cat.click;
            };
            bg.removeEventListener('click', clickHandler);
            bg.addEventListener('click', clickHandler);
        });
        newDiv.appendChild(heading);
        const catListElem = document.querySelector(".cat-list");
        catListElem.appendChild(newDiv);
    }
}

start();