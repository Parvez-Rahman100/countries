const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = (countries) =>{
     
    const countriesDiv = document.getElementById('countries');
    
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Name :${country.name.common}</h3>
        <h5>Capital :${country.capital}<h5>
        <button onClick = "loadDetails('${country.name.common}')">Show Details</button>
        `;
        countriesDiv.appendChild(div);
    })
}
const loadDetails =(name) =>{
const url = `https://restcountries.com/v3.1/name/${name}`;
fetch(url)
.then(res => res.json())
.then(data => displayDetails(data[0]))
}
const displayDetails = country => {
    const detailsDiv = document.getElementById('country-details');
        detailsDiv.innerHTML = `
        <h3>Name :${country.name.common}</h3>
        <h5>Capital :${country.capital}<h5>
        <p>Population :${country.population}</p>
        <p>Region : ${country.region}</p>
        <p>Time Zone :${country.timezones}</p>
        <p>Independent : ${country.independent}</p>
        <img width:"200px" src="${country.flags.png}">
        
        `;
        
   
    
}