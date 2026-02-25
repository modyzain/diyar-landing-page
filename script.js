const newspapers = [
  { name: "جريدة الرياض", url: "https://www.alriyadh.com" },
  { name: "جريدة عكاظ", url: "https://www.okaz.com.sa" },
  { name: "صحيفة سبق الإلكترونية", url: "https://sabq.org" },
  { name: "جريدة الوطن السعودية", url: "https://www.alwatan.com.sa" },
  { name: "صحيفة الاقتصادية السعودية", url: "https://www.aleqt.com" },
  { name: "صحيفة الإخبارية الإلكترونية", url: "#" },
  { name: "عرب نيوز", url: "https://www.arabnews.com" }
];

const container = document.getElementById("newspapersContainer");

newspapers.forEach((paper, index) => {
  const col = document.createElement("div");
  col.className = "col-md-4 col-lg-3 mb-4 position-relative";

  col.innerHTML = `
    <div class="news-card" onclick="goToSite('${paper.url}', event)">
      <div class="news-title">${paper.name}</div>
    </div>
  `;

  container.appendChild(col);

  setTimeout(() => {
    col.querySelector(".news-card").classList.add("show");
  }, index * 200);
});

function goToSite(url, e) {
  const circle = document.createElement("span");
  circle.classList.add("ripple");

  const rect = e.currentTarget.getBoundingClientRect();
  circle.style.left = e.clientX - rect.left + "px";
  circle.style.top = e.clientY - rect.top + "px";

  e.currentTarget.appendChild(circle);

  setTimeout(() => {
    window.open(url, "_blank");
  }, 300);
}

function scrollToNewspapers() {
  document.getElementById("newspapers").scrollIntoView({behavior:"smooth"});
}
