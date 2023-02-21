let saveNum = document.getElementById("save")
let countNum = document.getElementById("count")
let count = 0

function increment() {
    count += 1
    countNum.textContent = count
}

function save() {
    let countStr = count + " - "
    saveNum.textContent += countStr
    countNum.textContent = 0
    count = 0
}
