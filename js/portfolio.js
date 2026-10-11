siteReady.then(()=>{
const CATS=SITE.cats||["Full Stack Development","Frontend Development","E-Commerce Development"];
const PROJECTS=(SITE.projects||[]).map((p,i)=>({...p,g:i%4+1}));
const esc=SiteLib.esc;
const grid=document.getElementById('grid'),tabs=[...document.querySelectorAll('.tab')],pill=document.querySelector('.pill');
let current=0,shown=[];
const artHTML=p=>`<div class="art g${p.g}"></div>`;
const thumb=p=>p.img?`<div class="art has" style="background:url('${esc(p.img)}') center/cover"></div>`:artHTML(p);

// build cards once
tabs.forEach((t,i)=>t.textContent=CATS[i]);
PROJECTS.forEach((p,k)=>{
 const b=document.createElement('button');b.className='card';b.dataset.cat=p.cat;b.dataset.k=k;
 b.innerHTML=`<div class="thumb">${thumb(p)}</div><div class="info"><small>${esc(CATS[p.cat])}</small><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p></div>`;
 b.onclick=()=>openLB(k);grid.append(b);
});
const cards=[...grid.children];
const vis=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');vis.unobserve(e.target)}}),{threshold:.12});

const emp=document.createElement('p');emp.className='empty';emp.textContent='No projects in this category yet.';
function movePill(){const t=tabs[current];pill.style.width=t.offsetWidth+'px';pill.style.transform=`translateX(${t.offsetLeft}px)`}
function show(c,first){
 current=c;tabs.forEach((t,i)=>t.setAttribute('aria-selected',i===c));movePill();
 const swap=()=>{
  shown=[];let n=0;
  emp.remove();
  cards.forEach(el=>{
   const ok=+el.dataset.cat===c;el.hidden=!ok;el.classList.remove('out','in');vis.unobserve(el);
   if(ok){shown.push(+el.dataset.k);el.style.setProperty('--i',n++);void el.offsetWidth;vis.observe(el)}
  });
 if(!shown.length)grid.append(emp);
 };
 if(first){swap();return}
 cards.forEach(el=>!el.hidden&&el.classList.add('out'));
 setTimeout(swap,300);
}
tabs.forEach((t,i)=>t.onclick=()=>i!==current&&show(i));
addEventListener('resize',movePill);
document.fonts&&document.fonts.ready.then(movePill);

// lightbox
const lb=document.querySelector('.lb'),lbArt=lb.querySelector('.thumb'),lbC=lb.querySelector('small'),lbT=lb.querySelector('h2'),lbP=lb.querySelector('.lb-text p');
let idx=0,opener;
function fill(k){idx=k;const p=PROJECTS[k];lbArt.innerHTML=thumb(p);lbC.textContent=CATS[p.cat]||'';lbT.textContent=p.title;lbP.textContent=p.long||p.desc}
function openLB(k){opener=document.activeElement;fill(k);lb.classList.add('open');document.body.style.overflow='hidden';lb.querySelector('.lb-close').focus()}
function closeLB(){lb.classList.remove('open');document.body.style.overflow='';opener&&opener.focus()}
function step(d){const i=shown.indexOf(idx);fill(shown[(i+d+shown.length)%shown.length])}
lb.querySelector('.lb-close').onclick=closeLB;
lb.onclick=e=>{if(e.target===lb)closeLB()};
lb.querySelector('.prev').onclick=()=>step(-1);lb.querySelector('.next').onclick=()=>step(1);
addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')closeLB();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
show(0,true);

});
