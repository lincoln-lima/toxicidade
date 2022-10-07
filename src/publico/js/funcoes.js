function showFuncoes(id, id_hover) {
    var sf = document.getElementById(id)
    var cf = document.getElementById(id_hover)

    if (sf.style.display == 'none') {
        sf.style.display = 'inline-block'
        cf.style.display = 'none'
    } else {
        sf.style.display = 'none'
        cf.style.display = 'inline-block'
    }
}