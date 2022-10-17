window.addEventListener("load", async () => {
    await sleep(2000)
    document.getElementById('loader').style.opacity = '0';
    await sleep(1000);
    document.getElementById('loader').style.display = 'none';
})

let isRunning = false;

document.getElementById("formInput").oninput = async () => {
    document.getElementById("blink").style.opacity = 1
        await sleep(100);
        document.getElementById("blink").style.opacity = 0
        document.getElementById("doggo").src = "./pes.webp"
        if (document.getElementById("formInput").value === "") {
            document.getElementById("doggo").src = "./pes.png"
            document.getElementById("blink").style.opacity = 1
        }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));