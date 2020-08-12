const FormatTime = (time) => {
    if (time < 1200){
        const stringTime = time.toString()
        const formatted = [stringTime.slice(0, -2), ":", stringTime.slice(-2)].join('')
        return `${formatted}a`
    } else if (time >= 1200 && time < 1300) {
        const stringTime = time.toString()
        const formatted = [stringTime.slice(0, -2), ":", stringTime.slice(-2)].join('')
        return `${formatted}p`
    } else if (time >= 0 && time < 100) {
        time = time + 1200
        const stringTime = time.toString()
        const formatted = [stringTime.slice(0, -2), ":", stringTime.slice(-2)].join('')
        return `${formatted}a`
    } else {
        time = time - 1200
        const stringTime = time.toString()
        const formatted = [stringTime.slice(0, -2), ":", stringTime.slice(-2)].join('')
        return `${formatted}p`
    }
}

export default FormatTime;
