    const colors = ["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF"]

    const body = document.body

async function epilepsie() {
    let i = 0
    while (true) {
        body.style.background = colors[i]
        i = (i + 1)%colors.length

        await new Promise(resolve => setTimeout(resolve, 100))
    }
}

epilepsie()
