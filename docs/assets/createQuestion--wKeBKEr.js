import"./tiger-5hZ-PmLe.js";import{g as t}from"./getNode-pa7syr6m.js";import{c,a as r}from"./handleData-Q5rdxiFu.js";import{r as s,a as i}from"./classList-WMK_0JNQ.js";import"./pocketbase-zYAbJ1uT.js";function d(){const e=t(".board--create-question-category");e.classList.contains("hidden")?s(e,"hidden"):i(e,"hidden")}function l(){const e=t("#question-title").value,o=t("#question-content").value,a=t(".board--create-question-category-value").textContent,n=c({title:e,content:o,category:"질의응답",stack:a});r(n)}const u=t(".board--create-question-category-container");u.addEventListener("click",d);const g=t(".board--create-qna-post");g.addEventListener("click",l);
