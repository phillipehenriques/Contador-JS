function contar () {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let red = document.getElementById('res')

    if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let contando = i; contando <= f; contando += p) {
            res.innerHTML += ` > ${contando}`
        }
    }

}