window.onscroll = () => {
    const nav = document.querySelector('#menu');
    if(this.scrollY <= 450) nav.classList.remove('scroll');
    else nav.classList.add('scroll');
};
