const mainFunc = () => {
    const elems = document.querySelectorAll ('.descript')
    
    const descript = (elem) => {
        const text = elem.textContent.replace(/\s+/g, ' ').trim()

        let count = 0
        let newText = ''
        let interval

        elem.textContent = ''
        console.log(text);

        interval = setInterval(() => {
            newText += text[count]
            elem.textContent = newText
            count++

            if (count === text.length) {
                clearInterval(interval)
            }
        }, 10)
    }
    
    
    elems.forEach((elem) => {
        descript(elem);
    })

}

mainFunc ()

