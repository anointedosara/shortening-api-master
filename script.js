const shorten = async(input) => {
    try {
        const data = await axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`);
        console.log(data.data)
        let result = document.getElementById("result");
        let output = document.getElementById("output");
        result.innerHTML = `Shortened Link: <a href="${data.data.result.full_short_link}" class="a" target="_blank">${data.data.result.full_short_link}</a>`;
        output.innerHTML = `${input}`;
        document.querySelector(".wrap").classList.add("show")
    } catch (error) {
        console.log(error)
    }
}

let input = document.getElementById("input");
let submit = document.querySelector(".div7")

submit.addEventListener("submit", (e) => {
    e.preventDefault()
    shorten(input.value)
});

let display = document.querySelector(".drop");
let down = document.querySelector(".down");
display.addEventListener("click", () => {
    down.classList.toggle("display");
    document.getElementById("body").classList.toggle("body")

})