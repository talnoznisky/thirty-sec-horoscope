console.log('meow!')


const videos = {
    'Aries': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Taurus': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Gemini': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Cancer': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Leo': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Virgo': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Libra': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Scorpio': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Sagittarius': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Capricorn': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Aquarius': 'https://www.youtube.com/embed/fE1xgPdTJ5E',
    'Pisces': 'https://www.youtube.com/embed/fE1xgPdTJ5E'
}

const value = ' is awesome'

const videoEmbed = (url) => {
 return `<iframe width="560" height="315" src="${urlConstructor(url)}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
} 

const urlConstructor = (url) => {
    const start = 20
    const end = 50
    url = url + `?start=${start}&end=${end}`
    return url
}

const hr_container = (sign) => {
    hr = document.createElement('div')
    hr.setAttribute('class', 'horoscope');
    hr.setAttribute('id', `${sign}`);
    // hr.innerHTML = `${sign}: <a href=${urlConstructor(videos[sign])}>https://www.youtube.com/watch?v=fE1xgPdTJ5E</a>`
    hr.innerHTML = `${sign}:<br> ${videoEmbed(videos[sign])}`
    return hr
} 


for (i in videos){
    document.getElementsByClassName("horoscopes")[0].appendChild(hr_container(i))
}