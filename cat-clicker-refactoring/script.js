function start() {
    const model = {
        currentCat: null,
        cats: [
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
        ],
        init: function() {
            if (!localStorage.cats) {
                localStorage.cats = JSON.stringify(this.cats);
            }
        }
    }

    const octopus = {
        getCurrentCat: function() {
            return model.currentCat;
        },
        getCats: function() {
            return model.cats;
        },
        setCurrentCat: function(cat) {
            model.currentCat = cat;
        },
        incrementCounter: function() {
            model.currentCat.click++;
            catView.render();
        },
        init: function() {
            model.currentCat = model.cats[0];
            catListView.init();
            catView.init();
        }
    }

    const catView = {
        init: function() {
            this.catElem = document.getElementById('cat');
            this.catNameElem = document.getElementById('cat-name');
            this.countElem = document.getElementById('cat-count');

            this.catElem.addEventListener('click', function(e) {
                octopus.incrementCounter();
            });

            this.render();
        },
        render: function() {
            let currentCat = octopus.getCurrentCat();
            this.countElem.innerHTML = currentCat.click;
            this.catNameElem.innerHTML = currentCat.name;
            this.catElem.style.backgroundImage = `url('${currentCat.photo}')`;
        }
    };

    const catListView = {
        init: function() {
            this.catListElem = document.getElementById('cat-list');

            this.render();
        },

        render: function() {
            const cats = octopus.getCats();

            this.catListElem.innerHTML = '';
            const catListElem = this.catListEleml;

            for (const cat of cats) {
                const newDiv = document.createElement("div");
                newDiv.classList.add("cat-title");
                const heading = document.createElement("h3");
                heading.innerHTML = cat.name;
                heading.addEventListener("click", (function(localCat) {
                    return function() {
                        octopus.setCurrentCat(localCat);
                        catView.render();
                    }
                })(cat));
                this.catListElem.appendChild(heading);
            }
        }
    }

    octopus.init();
}

start();