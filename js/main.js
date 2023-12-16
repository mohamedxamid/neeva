"use strict"

import axios from "axios";

window.addEventListener('DOMContentLoaded', () => {
    const modifiers = {
        siteHeaderActive: 'site-header--active',
        sitenavTogglerActive: 'sitenav-toggler--active'
    };
    
    const elSiteHeader = document.querySelector('.site-header');
    const elSitenavToggler = elSiteHeader.querySelector('.js-sitenav-toggler');
    
    if (elSitenavToggler) {
        elSitenavToggler.addEventListener('click', function() {
            elSiteHeader.classList.toggle(modifiers.siteHeaderActive);
            elSitenavToggler.classList.toggle(modifiers.sitenavTogglerActive);
        })
    }
    
    const elsForm = document.querySelectorAll('form')
    console.log(elsForm);
    
    elsForm.forEach(elForm => {
        elForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            
            const form = new FormData(evt.target);
            const json = JSON.stringify(Object.fromEntries(form.entries()))

            postData('http://localhost:3000/requests', json)
            .then(data => console.log(data.data))
            .catch(err => {
                console.log(err.message);
            })
            .finally(() => {
                evt.target.reset();
            })
        })
    })
    
    
    async function postData(url, data) {
        return await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
})
