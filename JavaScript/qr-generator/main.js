const form = document.getElementById("form")
const containerQr = document.getElementById("containerQr")

const QR = new QRCode(containerQr)

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    QR.makeCode(form.link.value)
})