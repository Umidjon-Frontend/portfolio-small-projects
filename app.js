const dataAll = [
  {
    id: 1,
    type: "button",
    img: '"img/buttons/Button1.png"',
    name: "Button 1",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 2,
    type: "button",
    img: '"img/buttons/Button2.png"',
    name: "Button 2",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 3,
    type: "button",
    img: '"img/buttons/Button3.png"',
    name: "Button 3",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 4,
    type: "button",
    img: '"img/buttons/Button4.png"',
    name: "Button 4",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 5,
    type: "button",
    img: '"img/buttons/Button5.png"',
    name: "Button 5",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 6,
    type: "button",
    img: '"img/buttons/Button6.png"',
    name: "Button 6",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 7,
    type: "button",
    img: '"img/buttons/Button7.png"',
    name: "Button 7",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 8,
    type: "button",
    img: '"img/buttons/Button8.png"',
    name: "Button 8",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 9,
    type: "button",
    img: '"img/buttons/Button9.png"',
    name: "Button 9",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 10,
    type: "button",
    img: '"img/buttons/Button10.png"',
    name: "Button 10",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 11,
    type: "button",
    img: '"img/buttons/Button11.png"',
    name: "Button 11",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 12,
    type: "button",
    img: '"img/buttons/Button12.png"',
    name: "Button 12",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 13,
    type: "button",
    img: '"img/buttons/Button13.png"',
    name: "Button 13",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 14,
    type: "button",
    img: '"img/buttons/Button14.png"',
    name: "Button 14",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 15,
    type: "button",
    img: '"img/buttons/Button15.png"',
    name: "Button 15",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 16,
    type: "icons",
    img: '"img/icons/icons1.png"',
    name: "Social Media 1",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 17,
    type: "icons",
    img: '"img/icons/icons2.png"',
    name: "Social Media 2",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 18,
    type: "icons",
    img: '"img/icons/icons3.png"',
    name: "Social Media 3",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 19,
    type: "icons",
    img: '"img/icons/icons4.png"',
    name: "Social Media 4",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 20,
    type: "icons",
    img: '"img/icons/icons5.png"',
    name: "Social Media 5",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 21,
    type: "icons",
    img: '"img/icons/icons6.png"',
    name: "Social Media 6",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 22,
    type: "icons",
    img: '"img/icons/icons7.png"',
    name: "Social Media 7",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 23,
    type: "icons",
    img: '"img/icons/icons8.png"',
    name: "Social Media 8",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 24,
    type: "icons",
    img: '"img/icons/icons9.png"',
    name: "Social Media 9",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 25,
    type: "icons",
    img: '"img/icons/icons10.png"',
    name: "Social Media 10",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 26,
    type: "icons",
    img: '"img/icons/icons11.png"',
    name: "Social Media 11",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 27,
    type: "icons",
    img: '"img/icons/icons12.png"',
    name: "Social Media 12",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 28,
    type: "icons",
    img: '"img/icons/icons13.png"',
    name: "Social Media 13",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 29,
    type: "icons",
    img: '"img/icons/icons14.png"',
    name: "Social Media 14",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
  {
    id: 30,
    type: "icons",
    img: '"img/icons/icons15.png"',
    name: "Social Media 15",
    urlLiveDemo: "",
    urlSourceCode: "",
  },
];

const data = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Buttons",
  },
  {
    id: 3,
    name: "Social Media",
  },
];

const sectionTitle = document.querySelector(".section-title h1");
const sectionItems = document.querySelector(".section-items");
const navbar = document.querySelector(".navbar");
let li = data
  .map((item) => {
    return `
    <li>
      <button type="button" class="btn">${item.name}</button>
    </li>`;
  })
  .join("");
navbar.innerHTML = li;

let load = dataAll.map((item) => {
  return `
  <div class="item">
    <div class="item-img">
      <img src=${item.img} alt=${item.name}>
    </div>
    <div class="item-info">
      <h1 class="info-title">${item.name}</h1>
      <div class="info-btns">
        <a href=${item.urlLiveDemo}>Live Demo</a>
        <a href=${item.urlSourceCode}>Source Code</a>
      </div>
    </div>
  </div>`;
}).join("");
sectionItems.innerHTML = load;

const btn = document.querySelectorAll(".btn");
btn.forEach((element, index) => {
  btn[0].classList.add("active");
  element.addEventListener("click", () => {
    removeActive();
    element.classList.toggle("active");
    sectionTitle.innerHTML = data[index].name;
    let itemContent = dataAll
      .filter((element, i) => {
        console.log(element);
        if (index === 0) {
          return element;
        } else if (index === 1) {
          return element.type === "button";
        } else if (index === 2) {
          return element.type === "icons";
        }
      })
      .map((item) => {
        return `
        <div class="item">
          <div class="item-img">
            <img src=${item.img} alt=${item.name}>
          </div>
          <div class="item-info">
            <h1 class="info-title">${item.name}</h1>
            <div class="info-btns">
              <a href=${item.urlLiveDemo}>Live Demo</a>
              <a href=${item.urlSourceCode}>Source Code</a>
            </div>
          </div>
        </div>`;
      })
      .join("");
    sectionItems.innerHTML = itemContent;
  });
});
const removeActive = () => {
  btn.forEach((element) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  });
};
