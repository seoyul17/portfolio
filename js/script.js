const vid = document.querySelectorAll(".vid a");
const closeBtn = document.querySelector("#modal span")
const modal = document.querySelector("#modal");


vid.forEach(el => el.addEventListener("click", (e) => {
  e.preventDefault();
  const src = el.dataset.src;
  //console.log(src)
  const video = modal.querySelector("video");
  video.src = src;
  modal.style.display = "block";
}))

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  const video = modal.querySelector("video");
  video.src = "";
})

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
    const video = modal.querySelector("video");
    video.src = "";
  }
})


const image = document.querySelectorAll(".pic a");
const cBtn = document.querySelector("#modal-pic span")
const modalPic = document.querySelector("#modal-pic");


image.forEach(el => el.addEventListener("click", (e) => {
  e.preventDefault();
  const src = el.dataset.src;
  const pic = modalPic.querySelector("img");
  pic.src = src;
  modalPic.style.display = "block";
}))

cBtn.addEventListener("click", () => {
  modalPic.style.display = "none";
  const img = modalPic.querySelector("img")
  img.src = "";
})

window.addEventListener("click", (e) => {
  if(e.target === modalPic){
    modalPic.style.display = "none";
    const img = modalPic.querySelector("img")
    img.src = "";
  }
})

//tabs
const ports = document.querySelectorAll(".port > li");
const tabs = document.querySelectorAll(".tabs button");

const handleTabs = (tab) => {
  tabs.forEach(item => {
    item.classList.toggle("active", item === tab.target)
  })
  const selector = tab.target.dataset.tab;
  ports.forEach(port => port.style.display = "none")
  document.querySelectorAll(selector).forEach(el => el.style.display = "block")
}

tabs.forEach(tab => tab.addEventListener("click", handleTabs));

addEventListener("load", () => {
  tabs[0].click();
})