

let btn = document.querySelector('button')
btn.onclick = async function () {
    let r = await fetch("ahmadOkiel.42web.io/index.php?q='hello php'").then(res => res.json())
    alert(r[0])
}
