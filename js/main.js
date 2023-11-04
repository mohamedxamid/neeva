const modifiers = {
    siteHeaderActive: 'site-header--active',
    sitenavTogglerActive: 'sitenav-toggler--active'
};

const elSiteHeader = document.querySelector('.site-header');
const elSitenavToggler = elSiteHeader.querySelector('.js-sitenav-toggler');

if (elSitenavToggler) {
    elSitenavToggler.addEventListener('click', function(evt) {
        elSiteHeader.classList.toggle(modifiers.siteHeaderActive);
        elSitenavToggler.classList.toggle(modifiers.sitenavTogglerActive);
    })
}