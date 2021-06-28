function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = ("0" + data.getMinutes()).slice(-2)
    msg.innerHTML = `Agora são ${hora}:${min} hs.`

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        msg.innerHTML += `<p><strong>BOM DIA</strong></p>`
        document.body.style.background = '#d6b197'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#6f9483'
        msg.innerHTML += `<p><strong>BOA TARDE</strong></p>`
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#1d212a'
        msg.innerHTML += `<p><strong>BOA NOITE</strong></p>`
    }
}