/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.impact__heading, .impact__item, .work__item, .services__container, .blogs__item, .contact__detail',{interval: 120, distance: '30px'});

/*===== IMPACT COUNTERS =====*/
const counters = document.querySelectorAll('.stat')
const impactSection = document.querySelector('.impact')

const animateCounter = counter => {
    const target = Number(counter.dataset.target)
    const suffix = counter.dataset.suffix || ''
    const isDecimal = target % 1 !== 0
    const duration = 1200
    const start = performance.now()

    const update = now => {
        const progress = Math.min((now - start) / duration, 1)
        const value = target * (1 - Math.pow(1 - progress, 3))
        counter.textContent = `${isDecimal ? value.toFixed(1) : Math.floor(value)}${suffix}`
        if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
}

if (impactSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            counters.forEach(animateCounter)
            observer.unobserve(entry.target)
        }
    }, { threshold: .35 })
    observer.observe(impactSection)
}
