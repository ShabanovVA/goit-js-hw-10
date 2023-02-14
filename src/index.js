import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import createMarkupCountryList from './markupCountry';
import './css/styles.css';

const inputEl = document.getElementById('search-box');

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));


function onSearchCountry(e) {
    let inputValue = e.target.value.trim();

    if (e.target.value.trim()) {
        fetchCountries(inputValue)
            .then(dataCountries => {
                createMarkupCountryList(dataCountries)
            })
            .catch(error => {
                Notify.failure("Oops, there is no country with that name")
            })
    }
}