const FormatDays = (selectedDates, allDays) => {
    const daysWithAllData = []
    selectedDates.forEach(selectedDate => {
        const dayWithData = allDays.find(day => day.date === selectedDate)
        daysWithAllData.push(dayWithData)
    })
    const newObject = {}
    daysWithAllData.forEach(day => {
        newObject[`id${day.id}`]=`${day.id}`
    })
    return newObject
}

export default FormatDays;