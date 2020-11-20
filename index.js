/*
 * Version 
 * Author: ujkuo
 * GitHub: github.com/ujkuo
 * Copyleft (C) 2020 ujkuo all rights reversed
 *
 */
document.getElementById("hi").onclick = () => alert("test");
const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.onclick = () => {
    text.style.color = "red";
};
