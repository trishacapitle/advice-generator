async function generate() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    document.querySelector("p").innerText = "C R U M B # " + data.slip.id;
    document.querySelector("h2").innerText = '"' + data.slip.advice + '"';
  }
  document.querySelector(".dice-btn").onclick = () => {
    generate();
  }