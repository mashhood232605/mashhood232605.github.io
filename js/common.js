const nav=document.querySelector('.nav'),menu=document.querySelector('.menu');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});
document.querySelector('.burger').onclick=()=>menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
// staggered scroll reveal (also re-run after saved content is rendered)
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
window.reveal=()=>document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
window.reveal();
