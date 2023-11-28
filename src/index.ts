import { type } from "os";
import { getAPIArray, updateObjectInArray } from "./updateObjectInArray.js";
const API_URL = "https://jsonplaceholder.typicode.com/posts";
const content = document.querySelector(".content");
const btnRender = document.querySelector(".control__btn-render");
const btnShowChanges = document.querySelector(".control__btn-change");

async function getPosts<T>(url: string): Promise<T> {
    const res = await fetch(url, { method: "GET" });
    return res.json();
}

const renderPosts = async<T>(promisePosts: Promise<T>): Promise<void> => {
    const posts = await promisePosts;
    if (Array.isArray(posts)) {
        for (let i = 0; i < posts.length; i++) {
            const p = document.createElement("p");
            p.textContent = JSON.stringify(posts[i]);
            content?.append(p);
        }
    }
    else {
        throw new Error("Wrong data");
    }
}

btnRender?.addEventListener("click", () => renderPosts(getPosts(API_URL)));
btnShowChanges?.addEventListener("click", async () => {
    const initialArray = await getAPIArray(getPosts(API_URL));
    const patch1 = await updateObjectInArray(initialArray, "id", 2, { title: "THERE'S VOMIT ON HIS SWEATER ALREADY, MOM'S SPAGHETTI" });
    const patch2 = await updateObjectInArray(patch1, "id", 5, { userId: 313, body: "Uh, summa-lumma, dooma-lumma, you assumin' I'm a human" });
    console.log(patch2);
})
