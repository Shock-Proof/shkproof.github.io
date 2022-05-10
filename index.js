let countEl = document.getElementById("count_el")

let save_el = document.getElementById("people_entered")

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = " " + count + " -"
    save_el.innerText += countStr
}