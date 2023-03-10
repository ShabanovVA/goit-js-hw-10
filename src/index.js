import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import createMarkupCountryList from './markupCountry';
import './css/styles.css';
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

const inputEl = document.getElementById('search-box');

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));


function onSearchCountry(e) {
    let inputValue = e.target.value.trim();

    if (inputValue) {
        fetchCountries(inputValue)
            .then(dataCountries => {
                createMarkupCountryList(dataCountries)
            })
            .catch(error => {
                Notify.failure("Oops, there is no country with that name")
            })
    } else {
        countryListEl.innerHTML = '';
        countryInfoEl.innerHTML = '';
    }
}