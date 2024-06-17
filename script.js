const accordion = document.getElementsByClassName("content-box");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

//slider formações

const carousel = document.querySelector(".formations-slides");
const items = document.querySelectorAll(".formations-course-img");
const prevButton = document.querySelector("#formations-btn-back");
const nextButton = document.querySelector("#formations-btn-next");

const formationsDescriptions = [
  "Profissão Programador",
  "Análise de Dados",
  "Start Web",
  "Engenharia de Dados",
];

window.addEventListener("resize", function () {
  itemWidth = getItemWidth();
});

function getItemWidth() {
  return window.innerWidth < 768 ? 280 : 370;
}

let currentIndex = 0;
let itemWidth = getItemWidth();
const itemGap = 50;

function updateCarousel() {
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.firstElementChild.style.transition = "transform 2s easy-in-out";
      item.firstElementChild.style.borderRadius = "12px";
      item.firstElementChild.style.width = `${itemWidth + 30}px`;
    } else {
      item.firstElementChild.style.borderRadius = "12px";
      item.firstElementChild.style.width = `${itemWidth}px`;
    }
  });

  const offset = -(currentIndex * (itemWidth + itemGap));
  carousel.style.transform = `translateX(${offset}px)`;

  const formationDescription = document.querySelector(".formation-description");

  formationDescription.innerHTML = formationsDescriptions[currentIndex];
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
});

updateCarousel();

//slide cursos

const coursesDescription = [
  "Introdução a Big Data",
  "SQL",
  "Python iniciante",
  "Power B.I",
  "Excel C3",
  "React",
  "Javascript",
  "HTML e CSS",
  "Introdução a inteligencia artificial",
];

const courseCarousel = document.querySelector(".courses-slides");
const coursesItems = document.querySelectorAll(".course-img");
const coursesPrevButton = document.querySelector("#courses-btn-back");
const coursesNextButton = document.querySelector("#courses-btn-next");

let courseCurrentIndex = coursesItems.length - 2;
let courseItemWidth = getItemWidth();
let courseItemGap = 20;

function courseUpdateCarousel() {
  coursesItems.forEach((item, index) => {
    if (index - 1 === courseCurrentIndex) {
      item.firstElementChild.style.transition = "transform 2s easy-in-out";
      item.firstElementChild.style.borderRadius = "12px";
      item.firstElementChild.style.position = "relative";
      item.firstElementChild.style.zIndex = "2000";
      item.firstElementChild.style.width = `${courseItemWidth + 30}px`;
    } else {
      item.firstElementChild.style.borderRadius = "12px";
      item.firstElementChild.style.width = `${courseItemWidth}px`;
      item.firstElementChild.style.position = "relative";
      item.firstElementChild.style.zIndex = "1000";
    }
  });

  const offset = -(courseCurrentIndex * (courseItemWidth + courseItemGap));
  courseCarousel.style.transform = `translateX(${offset - 30}px)`;

  const courseDescription = document.querySelector(".courses-description");

  courseDescription.innerHTML = coursesDescription[courseCurrentIndex];
}

coursesNextButton.addEventListener("click", () => {
  courseCurrentIndex =
    courseCurrentIndex > 0 ? courseCurrentIndex - 1 : coursesItems.length - 2;
  courseUpdateCarousel();
});

coursesPrevButton.addEventListener("click", () => {
  if (courseCurrentIndex === coursesItems.length - 1) {
    courseCurrentIndex = coursesItems.length - 2;
    return;
  }
  courseCurrentIndex =
    courseCurrentIndex < coursesItems.length - 2 ? courseCurrentIndex + 1 : 0;
  courseUpdateCarousel();
});

courseUpdateCarousel();

//slides empregabiidade

const jobsDescriptions = [
  "Tech English",
  "Linkedin",
  "Currículo",
  "Entrevista de emprego",
];

const jobsCarousel = document.querySelector(".jobs-slides");
const jobsItems = document.querySelectorAll(".jobs-img");
const jobsPrevButton = document.querySelector("#jobs-btn-back");
const jobsNextButton = document.querySelector("#jobs-btn-next");

let jobsCurrentIndex = 0;
let jobsItemWidth = getItemWidth();
const jobsItemGap = 50;

function jobsUpdateCarousel() {
  jobsItems.forEach((item, index) => {
    if (index === jobsCurrentIndex) {
      item.firstElementChild.style.transition = "transform 2s easy-in-out";
      item.firstElementChild.style.borderRadius = "12px";
      item.firstElementChild.style.width = `${jobsItemWidth + 30}px`;
    } else {
      item.firstElementChild.style.borderRadius = "12px";
      item.firstElementChild.style.width = `${jobsItemWidth}px`;
    }
  });

  const offset = -(jobsCurrentIndex * (jobsItemWidth + jobsItemGap));
  jobsCarousel.style.transform = `translateX(${offset}px)`;

  const jobsDescription = document.querySelector(".jobs-description");

  jobsDescription.innerHTML = jobsDescriptions[jobsCurrentIndex];
}

jobsPrevButton.addEventListener("click", () => {
  jobsCurrentIndex =
    jobsCurrentIndex > 0 ? jobsCurrentIndex - 1 : jobsItems.length - 1;
  jobsUpdateCarousel();
});

jobsNextButton.addEventListener("click", () => {
  jobsCurrentIndex =
    jobsCurrentIndex < jobsItems.length - 1 ? jobsCurrentIndex + 1 : 0;
  jobsUpdateCarousel();
});

jobsUpdateCarousel();

//slides proximos lancamentos

const releasesDescription = [
  "Javascript Avançado",
  "React Avançado",
  "Devops",
  "Cloud com AWS",
  "Python para análise de dados",
  "Introdução PySpark",
  "Machine Learning",
  "Especialista em I.A´s",
];

const releasesCarousel = document.querySelector(".releases-slides");
const releasesItems = document.querySelectorAll(".release-img");
const releasesPrevButton = document.querySelector("#releases-btn-back");
const releasesNextButton = document.querySelector("#releases-btn-next");

let releasesCurrentIndex = releasesItems.length - 2;
let releasesItemWidth = getItemWidth();
const releasesItemGap = 20;

function releasesUpdateCarousel() {
  releasesItems.forEach((item, index) => {
    if (index - 1 === releasesCurrentIndex) {
      item.firstElementChild.style.transition = "transform 2s easy-in-out";
      item.firstElementChild.style.borderRadius = "12px";
      item.firstElementChild.style.position = "relative";
      item.firstElementChild.style.zIndex = "2000";
      item.firstElementChild.style.width = `${releasesItemWidth + 30}px`;
    } else {
      item.firstElementChild.style.borderRadius = "12px";
      item.firstElementChild.style.width = `${releasesItemWidth}px`;
      item.firstElementChild.style.position = "relative";
      item.firstElementChild.style.zIndex = "1000";
    }
  });

  const offset = -(releasesCurrentIndex * (courseItemWidth + releasesItemGap));
  releasesCarousel.style.transform = `translateX(${offset - 30}px)`;

  const releaseDescription = document.querySelector(".releases-description");

  releaseDescription.innerHTML = releasesDescription[releasesCurrentIndex];
}

releasesNextButton.addEventListener("click", () => {
  releasesCurrentIndex =
    releasesCurrentIndex > 0
      ? releasesCurrentIndex - 1
      : releasesItems.length - 2;
  releasesUpdateCarousel();
});

releasesPrevButton.addEventListener("click", () => {
  if (releasesCurrentIndex === releasesItems.length - 1) {
    releasesCurrentIndex = releasesItems.length - 2;
    return;
  }
  releasesCurrentIndex =
    releasesCurrentIndex < releasesItems.length - 2
      ? releasesCurrentIndex + 1
      : 0;
  releasesUpdateCarousel();
});

releasesUpdateCarousel();
