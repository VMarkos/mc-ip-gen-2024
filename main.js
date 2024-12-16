function seededRNG(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function* random(seed = 0) {
    let r;
    while (true) {
        r = seededRNG(seed++);
        yield r;
    }
}

function* randInt(a, b, seed = 0) {
    // Yields random integers in range [a, b)
    let rng = random(seed);
    let next = rng.next();
    let r;
    while (!next.done) {
        r = next.value;
        yield a + Math.floor(b * r);
        next = rng.next();
    }
}

function generateIP(seed = 0) {
    // Generates a random IP of the form a.b.64.0/20 where a in [10, 100) and b in [0, 256)
    let a = randInt(10, 100, seed).next().value;
    let b = randInt(0, 256, seed).next().value;
    return a + "." + b + ".64.0/20";
}

function addIP() {
    const stdID = document.getElementById("student-id").value;
    const ipCont = document.getElementById("ip");
    if (!stdID) {
        return;
    }
    const ip = generateIP(parseInt(stdID));
    ipCont.value = ip;
}

function attachEventListeners() {
    const goBtn = document.getElementById("go");
    goBtn.addEventListener("click", addIP);
}

function onLoad() {
    attachEventListeners();
}

window.addEventListener("load", onLoad);