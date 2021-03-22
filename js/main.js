const elMenuWordsGroup = document.querySelector(".menu__words__group");
const elWordsGroupList = document.querySelector(".words__group__list");
const elWordsGroupBtn = document.querySelector(".words__group__btn");
const elWordsList = document.querySelector(".words__list");

// const elHiderLeftBtn = document.querySelector(".hider__left__btn");
// const elHiderRightBtn = document.querySelector(".hider__right__btn");
let elWordes = document.querySelectorAll(".word");
let elWordesTranslated = document.querySelectorAll(".word__translated");

data.forEach(item => {
    elWordsGroupList.innerHTML += `<button type="button" class="words__group__btn" data-id="${data.indexOf(item)}">
        ${item[1].substring(0, item[1].indexOf("_"))}
            </button>`;
})

// for page changing
elWordsGroupList.addEventListener("click", (evt) => {
    // console.log(evt.target.matches(".words__group__btn"));
    if (evt.target.matches(".words__group__btn")) {
        elMenuWordsGroup.classList.remove("show");
        elWordsList.classList.add("show");
        const id = parseInt(evt.target.dataset.id, 10);
        elWordsList.innerHTML = `<li class="words__list__navbar">
            <button class="back__btn" type="button"></button>
            <div class="hider__btn__wrapper">
                <button class="hider__left__btn" type="button"></button>
                <span></span>
                <button class="hider__right__btn" type="button"></button>
            </div>
            <div class="date__wrapper">
                <span class="begin__date">22.03.2021</span>
                <span class="end__date">22.03.2021</span>
            </div>
        </li>`;
        for (let index = 1; index < data[id].length - 1; index++) {
            elWordsList.innerHTML += `<li class="words__item">
            <p class="word">${data[id][index].substring(0, data[id][index].indexOf("_"))}</p>
            <p class="word__translated hide">${data[id][index].substring(data[id][index].indexOf("_") + 1, data[id][index].length)}</p>
        </li>`;
        }

        elWordes = document.querySelectorAll(".word");
        elWordesTranslated = document.querySelectorAll(".word__translated");
    }
});
elWordsList.addEventListener("click", (evt) => {
    if (evt.target.matches(".back__btn")) {
        elMenuWordsGroup.classList.add("show");
        elWordsList.classList.remove("show");
    }
    // for to hide
    if (evt.target.matches(".hider__left__btn")) {
        elWordes.forEach(item => {
            item.classList.toggle("hide");
        })
    }
    if (evt.target.matches(".hider__right__btn")) {
        elWordesTranslated.forEach(item => {
            item.classList.toggle("hide");
        })
    }
})