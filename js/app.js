
// Modal
const modal = document.querySelector('[data-modal]')
const modalCloseBtn = document.querySelector('[data-modal-close]')
const modalCloseOverlay = document.querySelector('[data-modal-overlay]')

// modal function
const modalCloseF = ()=> modal.classList.add('closed')

// eventlistener
modalCloseOverlay.addEventListener('click',modalCloseF)
modalCloseBtn.addEventListener('click',modalCloseF)


// Toast
const toast = document.querySelector('[data-toast]')
const toastCloseBtn = document.querySelector('[data-toast-close]')

toastCloseBtn.addEventListener('click', () => {
    toast.classList.add('closed')
})

// Get Dom Element
function getDomElement(selector) {
    if (selector.startsWith('#')) {
        return document.getElementById(selector.substring(1))
    }
    else if (selector.startsWith('.')) {
        return document.querySelector(selector)
    }
    else {
        return document.querySelector(selector)
    }
}

// // ____________ Mobile Menu  _____________
// const mobileMenuOpenBtn = document.getElementById('mobile-menu-open-btn');
// const mobileMenu = document.getElementById("mobile-navigation");
// const closeMobileMenu = document.getElementById('mobile-menu-close-btn');

// // Open mobile menu
// mobileMenuOpenBtn.addEventListener('click', (event) => {
//     event.stopPropagation(); // Prevent event from bubbling up to document
//     mobileMenu.classList.add('active');
// });

// // Close Mobile Menu
// closeMobileMenu.addEventListener('click', () => {
//     mobileMenu.classList.remove('active');
// });

// // Close Mobile Menu when clicking outside of it
// document.addEventListener('click', (event) => {
//     // Check if the clicked element is not within the mobile menu and not the open button
//     if (!mobileMenu.contains(event.target)) {
//         mobileMenu.classList.remove('active');
//     }
// });




// // ____________ Mobile Catagoris _____________
// const catagorisOpenBtn = getDomElement("#mobile-catagoris-open-btn")
// const mobileCatagoris = getDomElement('#mobile-catagoris')
// const closeMobileCatagoris = getDomElement('#close-mobile-catagoris')

// // open catagoris
// catagorisOpenBtn.addEventListener('click', (event) => {
//     event.stopPropagation()
//     mobileCatagoris.classList.add('active')
// })

// closeMobileCatagoris.addEventListener('click', () => {
//     mobileCatagoris.classList.remove('active')
// })


// // close catagoris click from documen
// document.addEventListener('click', (event) => {
//     if (event.target !== mobileCatagoris) {
//         mobileCatagoris.classList.remove('active')
//     }
// })



// open and close menu or catagoris
function menuCatagoris(openBtnSelector, menuOrCatagorisSelector, closeBtnSelector) {
    const openBtn = getDomElement(openBtnSelector)
    const menuOrCatagoris = getDomElement(menuOrCatagorisSelector)
    const closeBtn = getDomElement(closeBtnSelector)

    // open menu
    openBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        menuOrCatagoris.classList.add('active')
    })

    // close menu
    closeBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        menuOrCatagoris.classList.remove('active')
    })


    // Close menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (event.target !== menuOrCatagoris) {
            menuOrCatagoris.classList.remove('active')
        }
    })

    menuOrCatagoris.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}


// Mobile Menu
menuCatagoris('#mobile-menu-open-btn', '#mobile-navigation', '#mobile-menu-close-btn')
// catagoris
menuCatagoris('#mobile-catagoris-open-btn', '#mobile-catagoris','#close-mobile-catagoris')