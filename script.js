"use strict";

const perInfoDisplay = document.querySelector(".perInfoDisplay");
const checkEmail = document.querySelector(".check-email");
const invalid = document.querySelector(".invalid");
const viewMore = document.querySelectorAll(".view-more");
const viewLess = document.querySelectorAll(".view-less");
const jobInfoDisplay = document.querySelectorAll(".job-info-display");
const content = document.querySelectorAll(".content");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*Khi nguoi dung nhap email hop le va click nut submit thi noi dung se hien thi*/
document.querySelector(".check").addEventListener("click", function () {
  const enterEmail = document.querySelector("#email").value;
  if (enterEmail.match(regex)) {
    perInfoDisplay.classList.remove("hidden");
    checkEmail.classList.add("hidden");
    invalid.classList.add("hidden");
  } else {
    invalid.classList.remove("hidden");
  }
});

/*Khi di chuot qua cac o thong tin nghe nghiep se hien thi VIEW MORE */
for (let i = 0; i < jobInfoDisplay.length; i++) {
  jobInfoDisplay[i].addEventListener("mouseover", function () {
    //Chi khi noi dung content khong hien thi moi hien thi view more, khi noi dung content hien thi thi se hien thi view less
    if (content[i].classList.contains("hidden")) {
      viewMore[i].classList.remove("hidden");
      viewLess[i].classList.add("hidden");
    } else {
      viewMore[i].classList.add("hidden");
      viewLess[i].classList.remove("hidden");
    }
  });
}

//Khi di chuyen chuot ra khoi cac o thong tin, view more va view less se khong hien thi
for (let i = 0; i < jobInfoDisplay.length; i++) {
  jobInfoDisplay[i].addEventListener("mouseout", function () {
    viewMore[i].classList.add("hidden");
    viewLess[i].classList.add("hidden");
  });
}

// Khi click vao view more, phan noi dung hien thi, view more khong hien thi, view less hien thi
for (let i = 1; i <= viewMore.length; i++) {
  document
    .querySelector(`.view-more-${i}`)
    .addEventListener("click", function () {
      document.querySelector(`.content-${i}`).classList.remove("hidden");
      document.querySelector(`.view-more-${i}`).classList.add("hidden");
    });
}

// Khi clcik vao view less, phan noi dung khong hien thi, view more hien thi, view less khong hien thi
for (let i = 1; i <= viewLess.length; i++) {
  document
    .querySelector(`.view-less-${i}`)
    .addEventListener("click", function () {
      document.querySelector(`.content-${i}`).classList.add("hidden");
      document.querySelector(`.view-less-${i}`).classList.add("hidden");
    });
}
