"use strict";

const a = document.querySelector("a");
const u = document.querySelector(".underline");

const a_data = a.getBoundingClientRect();
console.table(a_data);
a.addEventListener("mouseenter", () => {
    u.style.right = "unset";
    u.style.left = "0";
    u.style.width = "100%";
});
a.addEventListener("mouseleave", () => {
    u.style.left = "unset";
    u.style.right = "0";
    u.style.width = "0";
});