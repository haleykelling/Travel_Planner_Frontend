const PickPhoto = (day) => {
    switch(day.start_city){
        case "Denver, CO":
            return require('../../assets/denver.jpg')
        case "Denver, Colorado":
            return require('../../assets/denver.jpg')
        case "Athens, Greece":
            return require('../../assets/athens.jpg')
        case "Oia, Greece":
            return require('../../assets/Oia.jpg')
        case "Paros, Greece":
            return require('../../assets/paros.jpeg')
        case "Naxos, Greece":
            return require('../../assets/naxos.jpg')
        case "Jackson, Wyoming":
            return require('../../assets/tetons.jpg')
    }
   
}

export default PickPhoto;