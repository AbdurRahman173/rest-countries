const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

    
}

const displayCountries = countries =>{
    console.log(countries[0])
    const countriesHtml = countries.map(country => getCountryHtml(country) )
    
    const container =  document.getElementById('container')
    container.innerHTML = countriesHtml.join('')
    
    
    console.log(countriesHtml[0])

}

/*
const getCountryHtml = country => {
   //console.log(country)
  
   return `
      <div class = 'country'>
         <h2> ${country.name.common} </h2>
         <img src = ${country.flags.png}>
       </div>
   
   `
   

}
*/

/*
const getCountryHtml = country => {
   //console.log(country)
   //option 2
   const {name , flags} =  country
  
   return `
      <div class = 'country'>
         <h2> ${name.common} </h2>
         <img src = ${flags.png}>
       </div>
   
   `
   

}
*/

const getCountryHtml = ({name, flags,area,region})=> {
   //console.log(country)
  
   return `
      <div class = 'country'>
         <h2> ${name.common} </h2>
         <p>Area: ${area}</p>
         <p>Continent:${region}</p>
         <img src = ${flags.png}>
       </div>
   
   `
   

}

loadCountries()