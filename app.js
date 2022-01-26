const menu = [

    {
        id: 1,
        title: "Burger and coffee",
        category: "breakfast",
        price: 15.99,
        img: "burger.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
        inventore laboriosam excepturi! Quo, officia.`,
    },

    {
        id: 2,
        title: "Burger and eggs",
        category: "breakfast",
        price: 15.99,
        img: "burger.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
        inventore laboriosam excepturi! Quo, officia.`,
    },
    {
        id: 3,
        title: "Burger and fries",
        category: "lunch",
        price: 15.99,
        img: "burger.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
        inventore laboriosam excepturi! Quo, officia.`,
    },
    {
        id: 4,
        title: "Burger and pepsi",
        category: "lunch",
        price: 15.99,
        img: "burger.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
        inventore laboriosam excepturi! Quo, officia.`,
    },
    {
        id: 5,
        title: "Burger and steak",
        category: "lunch",
        price: 15.99,
        img: "burger.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
        inventore laboriosam excepturi! Quo, officia.`,
    },
    {
        id: 5,
        title: "Burger and cake",
        category: "desert",
        price: 15.99,
        img: "burger.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
        inventore laboriosam excepturi! Quo, officia.`,
    },
    {
        id: 6,
        title: "Burger and cookies",
        category: "desert",
        price: 15.99,
        img: "burger.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
        inventore laboriosam excepturi! Quo, officia.`,
    },
    {
        id: 6,
        title: "Burger and donuts",
        category: "desert",
        price: 15.99,
        img: "burger.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
        inventore laboriosam excepturi! Quo, officia.`,
    },
    {
        id: 6,
        title: "Burger and cheese cake",
        category: "desert",
        price: 15.99,
        img: "burger.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
        inventore laboriosam excepturi! Quo, officia.`,
    },

];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded", function () {
    display_menu_items(menu)
    display_menu_buttons()


});








function display_menu_items(menu_items) {
    let displayMenu = menu_items.map(function (item) {
        // console.log(item);
        return `<h1><article class="menu-item">
        <img src=${item.img} alt="menu item" class="photo" />
        <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
        </div>
        </article></h1>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}


function display_menu_buttons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    }, ["all"])


    const categoryButtons = categories.map(function (category) {
        return `<button type="button" class="filter-btn" data-category=${category}>
        ${category}
        </button>`
    }).join("")
    container.innerHTML = categoryButtons
    const filter_btns = document.querySelectorAll(".filter-btn");

    filter_btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.category;
            const menuCategory = menu.filter(function (menu_items) {
                if (menu_items.category === category) {
                    return menu_items;
                }
            })
            console.log(menuCategory);
            if (category === "all") {
                display_menu_items(menu);
            }
            else {
                display_menu_items(menuCategory)
            }
        });
    });
}