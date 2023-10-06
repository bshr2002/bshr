// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav')
    .classList.toggle('window-scroll',window.scrollY > 0);
});

// way 1 to open faq
let faqs = document.querySelectorAll('.faq');

for(let i = 0; i < faqs.length; i++){
    faqs[i].onclick = function (){
        let icon = faqs[i].querySelector('.faq-icon i');
        if(faqs[i].className.includes('open')){
            faqs[i].className = "faq";
            // change icon to plus icon
            icon.className = "uil uil-plus"
        }else{
            faqs[i].className = "faq open"

            //change icon to minus icon
            icon.className = "uil uil-minus"
        }
    }
}

//way 2 to open faq
// const faqs = document.querySelectorAll('.faq');
// faqs.forEach(faq => {
//     faq.addEventListener('click', () => {
//         faq.classList.toggle('open');
//         const icon = faq.querySelector(".faq-icon i")
//         if(icon.className === "uil uil-plus"){
//             icon.className = "uil uil-minus";
//         }else{
//             icon.className = "uil uil-plus";
//         }
//     });
// });

let burgerIcon = document.querySelector('nav button#open-menu-btn');
let navMenu = document.querySelector('.nav-menu');
console.log(burgerIcon.firstChild.className);
burgerIcon.addEventListener('click', () => {
    
    if(navMenu.style.display !== 'flex'){
        navMenu.style.cssText = `
            display: flex !important;
        `;
        burgerIcon.firstChild.className = "uil uil-multiply"
    }else{
        navMenu.style.cssText = `
            display: none !important;
        `;
        burgerIcon.firstChild.className = "uil uil-bars"
    }
});


