
fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
        displayCountry(data);
    })

const displayCountry = country => {
    const parentNode = document.getElementById('countries');

    country.forEach(countryInfo => {



        const countryDiv = document.createElement('div');
        countryDiv.className = "single";

        const nameCity = `<h3 class='countryName'>${countryInfo.name}</h3>
        <p class='city'>City: ${countryInfo.capital}</p>
        <button onclick="countryDetails('${countryInfo.name}')">Details</button>`;
        countryDiv.innerHTML = nameCity;
        parentNode.appendChild(countryDiv);
        // for (let i = 0; i < country.length; i++) {
        //    const countryInfo = country[i];
        // const name = document.createElement('h1');
        // name.innerText = countryInfo.name;
        // const city = document.createElement('h3');
        // city.innerText = countryInfo.capital;
        // countryDiv.appendChild(name);
        // countryDiv.appendChild(city);
    });
}

const countryDetails = country => {
    const url = `https://restcountries.com/v2/name/${country}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]))

}
const renderCountryInfo = name => {
    const countryAbout = document.getElementById('countryDetails');
    const details = `
    <h1>Country: ${name.name} </h1>
    <img src=${name.flag}>
    <p>Area: ${name.area}</p>
     <h3>Population: ${name.population}</h3>
     `;

    countryAbout.innerHTML = details;
    window.scroll(0,0);
}