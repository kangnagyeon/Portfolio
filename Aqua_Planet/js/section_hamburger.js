

// // 1️⃣ 섹션과 메뉴 선택
// const sections = document.querySelectorAll("section[id]");
// const navLinks = document.querySelectorAll(".section_hamburger li");

// const header = document.querySelector("header");
// const headerTop = document.querySelector(".header-top");
// const hamburgerNav = document.querySelector(".section_hamburger");

// // 2️⃣ 스크롤 이벤트
// window.addEventListener("scroll", () => {
//   const scrollPos = window.scrollY || document.documentElement.scrollTop;

//   // 섹션 감지 + 메뉴 active
//   sections.forEach(sec => {
//     if (
//       scrollPos >= sec.offsetTop - window.innerHeight / 2 &&
//       scrollPos < sec.offsetTop + sec.offsetHeight - window.innerHeight / 2
//     ) {
//       navLinks.forEach(link => link.classList.remove("active"));
//       const currentLink = document.querySelector(
//         `.section_hamburger li a[href="#${sec.id}"]`
//       );
//       if (currentLink) currentLink.parentElement.classList.add("active");
//     }
//   });

//   // 마지막 섹션(#section5) 도달 시 dark 적용
//   const lastSection = document.getElementById("section5");
//   if (scrollPos + window.innerHeight >= lastSection.offsetTop + 100) {
//     if (header) header.classList.add("dark");
//     if (headerTop) headerTop.classList.add("dark");
//     if (hamburgerNav) hamburgerNav.classList.add("dark");
//   } else {
//     if (header) header.classList.remove("dark");
//     if (headerTop) headerTop.classList.remove("dark");
//     if (hamburgerNav) hamburgerNav.classList.remove("dark");
//   }
// });

// // 3️⃣ 메뉴 클릭 시 스무스 스크롤 + active 적용
// navLinks.forEach(link => {
//   const anchor = link.querySelector("a");
//   anchor.addEventListener("click", e => {
//     e.preventDefault();
//     const targetId = anchor.getAttribute("href").replace("#", "");
//     const targetSection = document.getElementById(targetId);
//     if (targetSection) {
//       window.scrollTo({
//         top: targetSection.offsetTop,
//         behavior: "smooth"
//       });

//       navLinks.forEach(l => l.classList.remove("active"));
//       link.classList.add("active");
//     }
//   });
// });



// // -----------------------------
// // FullPage 스크롤 효과 (JS) - 개선
// // -----------------------------
// let isScrolling = false; // 스크롤 중복 방지
// const SCROLL_THRESHOLD = 50; // 최소 휠 감지값

// window.addEventListener("wheel", (e) => {
//   if (isScrolling) return;

//   const delta = e.deltaY;
//   if (Math.abs(delta) < SCROLL_THRESHOLD) return; // 작은 스크롤 무시

//   const currentScroll = window.scrollY;
  
//   // 현재 보이는 섹션 찾기
//   let currentIndex = 0;
//   sections.forEach((sec, i) => {
//     if (currentScroll >= sec.offsetTop - window.innerHeight / 2) {
//       currentIndex = i;
//     }
//   });

//   let targetIndex = currentIndex;
//   if (delta > 0 && currentIndex < sections.length - 1) {
//     targetIndex = currentIndex + 1;
//   } else if (delta < 0 && currentIndex > 0) {
//     targetIndex = currentIndex - 1;
//   }

//   if (targetIndex !== currentIndex) {
//     isScrolling = true;
//     window.scrollTo({
//       top: sections[targetIndex].offsetTop,
//       behavior: "smooth"
//     });

//     setTimeout(() => {
//       isScrolling = false;
//     }, 700); // 스크롤 속도에 맞춰 조정
//   }

//   e.preventDefault();
// }, { passive: false });

