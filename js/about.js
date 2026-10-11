siteReady.then(()=>{
// skill meters fill smoothly when scrolled into view
const so=new IntersectionObserver(es=>es.forEach(e=>{
 if(!e.isIntersecting)return;so.unobserve(e.target);
 const f=e.target.querySelector('.fill'),p=e.target.querySelector('b'),to=+f.dataset.to,t0=performance.now();
 f.style.width=to+'%';
 (function tick(t){const k=Math.min((t-t0)/1800,1);p.textContent=Math.round(to*(1-Math.pow(1-k,3)))+'%';if(k<1)requestAnimationFrame(tick)})(t0);
}),{threshold:.5});
document.querySelectorAll('.sk').forEach(s=>so.observe(s));

});
