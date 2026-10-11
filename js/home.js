siteReady.then(()=>{
// animated counters
const co=new IntersectionObserver(es=>es.forEach(e=>{
 if(!e.isIntersecting)return;co.unobserve(e.target);
 const n=e.target,end=+n.dataset.to,dec=+(n.dataset.dec||0),suf=n.dataset.suf||'',t0=performance.now(),d=2000;
 (function tick(t){const p=Math.min((t-t0)/d,1),v=end*(1-Math.pow(1-p,4));n.textContent=v.toFixed(dec)+suf;if(p<1)requestAnimationFrame(tick)})(t0);
}),{threshold:.6});
document.querySelectorAll('.num').forEach(n=>co.observe(n));

// duplicate marquee content for a seamless loop
const tr=document.querySelector('.track');tr.innerHTML+=tr.innerHTML;

// testimonials slider
const sl=document.querySelector('.slides'),n=sl.children.length,dots=document.querySelector('.dots');
if(!n)return;
let i=0,timer;
for(let k=0;k<n;k++){const b=document.createElement('button');b.ariaLabel='Show testimonial '+(k+1);b.onclick=()=>go(k,true);dots.append(b)}
function go(k,user){i=(k+n)%n;sl.style.transform=`translateX(-${i*100}%)`;[...dots.children].forEach((d,x)=>d.classList.toggle('on',x===i));if(user)restart()}
function restart(){clearInterval(timer);timer=setInterval(()=>go(i+1),6000)}
document.querySelector('.prev').onclick=()=>go(i-1,true);
document.querySelector('.next').onclick=()=>go(i+1,true);
go(0);restart();

});
