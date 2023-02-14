import { Notify } from "notiflix";

export default function createMarkupCountryList(dataCountries) {
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');
countryListEl.style.listStyleType = "none";
countryListEl.style.paddingLeft = "0";
const countriesArr = [];
    
countryListEl.innerHTML = '';
countryInfoEl.innerHTML = '';

if (dataCountries.length > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.")
    } else if (dataCountries.length > 1 && dataCountries.length <= 10) {
        countriesArr.push(
        dataCountries.map(item => {
            return `<li class = "country-item">
                    <img class="country-flags"
                    src=${item.flags.svg}
                    alt=${item.name.official} width="30px" height="20px"/>
                    <span>${item.name.official}</span></li>`
        }).join('')
        );
        countryListEl.innerHTML = countriesArr;
        countryInfoEl.innerHTML = '';
    } 
    else {
        countriesArr.push(
        dataCountries.map(item => {
            return `<div class="country-name"> 
                    <img class="country-flags"
                    src=${item.flags.svg}
                    alt=${item.name.official}
                    width="30px" height="20px"/>
                    <span class="title">${item.name.official}</span></div>
                    <p class="country-info"><b>Capital:</b> ${item.capital}</p>
                    <p class="country-info"><b>Population:</b> ${item.population}</p>
                    <p class="country-info"><b>languages:</b> ${Object.values(item.languages).join(', ')}</p>`
        }).join('')
        )
        countryInfoEl.innerHTML = countriesArr;
        countryListEl.innerHTML = '';
    };
}