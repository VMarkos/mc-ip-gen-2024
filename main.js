function seededRNG(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function onLoad() {
    console.log("Here!");
}

window.addEventListener("load", onLoad);