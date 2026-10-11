/* Loads the saved content (data/content.js) and applies it to the page, then applies the color theme. */
(function(){
var D=document,R=D.documentElement;
var THEMES={
 charcoal:{n:'Charcoal Orange',bg:'#121316',bg2:'#1a1c21',line:'#2a2d35',text:'#f2f3f5',mute:'#9aa0ad',or:'#ff6b1a',or2:'#ff9a3c',bl:'#2e9bff',bl2:'#5cb4ff'},
 midnight:{n:'Midnight Blue',bg:'#0a1120',bg2:'#10192d',line:'#1e2c48',text:'#eef3fb',mute:'#93a4c0',or:'#3b82f6',or2:'#60a5fa',bl:'#22d3ee',bl2:'#67e8f9'},
 slate:{n:'Slate Purple',bg:'#15131c',bg2:'#1e1b29',line:'#2f2a42',text:'#f3f1f8',mute:'#a29fb5',or:'#a855f7',or2:'#c084fc',bl:'#f472b6',bl2:'#f9a8d4'},
 emerald:{n:'Emerald Dark',bg:'#0c1411',bg2:'#13201b',line:'#1f3a30',text:'#eef7f3',mute:'#8fae9f',or:'#10b981',or2:'#34d399',bl:'#fbbf24',bl2:'#fcd34d'}
};
function rgb(h){var n=parseInt(h.slice(1),16);return[n>>16,n>>8&255,n&255].join(',')}
function applyTheme(k){var t=THEMES[k]||THEMES.charcoal,s=R.style;
 ['bg','bg2','line','text','mute','or','or2','bl','bl2'].forEach(function(n){s.setProperty('--'+n,t[n])});
 ['bg','bg2','or','bl'].forEach(function(n){s.setProperty('--'+n+'-rgb',rgb(t[n]))})}
var I={
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
 code:'<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
 server:'<rect x="4" y="3" width="16" height="6" rx="1.5"/><rect x="4" y="11" width="16" height="6" rx="1.5"/><path d="M8 21h8M12 17v4M8 6h.01M8 14h.01"/>',
 cart:'<path d="M3 4h2l2.5 11h11L21 7H6"/><circle cx="9" cy="19.5" r="1.2"/><circle cx="17" cy="19.5" r="1.2"/>',
 wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
 layout:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
 bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
 cert:'<circle cx="12" cy="9" r="5.5"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/><path d="M10 9l1.5 1.5L14.5 7.5"/>',
 trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
 star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'
};
var SCHEMA=[
['index','home.hello','Greeting line','.hero .hello',"Hi, I'm"],
['index','home.name','Your name','.hero h1','Mashhood','f'],
['index','home.title','Title under your name','.hero h1 span','Web Developer'],
['index','home.role','Experience line','.hero .role','1 year of experience'],
['index','home.tag','Tagline','.hero .tag','BSIT Graduate & Web Developer | Skilled in Designing and Developing Professional Websites','a'],
['index','home.s1n','Stat 1 number','.stat:nth-child(1) .num','10+','n'],['index','home.s1l','Stat 1 label','.stat:nth-child(1) p','Websites built'],
['index','home.s2n','Stat 2 number','.stat:nth-child(2) .num','1','n'],['index','home.s2l','Stat 2 label','.stat:nth-child(2) p','Client worked with'],
['index','home.s3n','Stat 3 number','.stat:nth-child(3) .num','1','n'],['index','home.s3l','Stat 3 label','.stat:nth-child(3) p','Year of experience'],
['index','home.s4n','Stat 4 number','.stat:nth-child(4) .num','4.9','n'],['index','home.s4l','Stat 4 label','.stat:nth-child(4) p','Average client rating (out of 5)'],
['index','home.svcT','Services heading','main>section:nth-of-type(3) .sec-title','What I can build for you'],
['index','home.svcS','Services sub-line','main>section:nth-of-type(3) .sec-sub','From a first sketch to a live site, here is where I can help.'],
['index','home.workT','Featured work heading','main>section:nth-of-type(4) .sec-title','Featured work'],
['index','home.workS','Featured work sub-line','main>section:nth-of-type(4) .sec-sub','A few recent projects. Sample thumbnails for now.'],
['index','home.toolsT','Tools strip heading','.tools p','Tools and technologies I work with'],
['index','home.tools','Tools list (separate with commas)','.track','HTML5, CSS3, JavaScript, React, Node.js, WordPress, Figma, Git, Tailwind, Bootstrap, PHP, MySQL','c'],
['index','home.testT','Testimonials heading','main>section:nth-of-type(5) .sec-title','What clients say'],
['index','home.testS','Testimonials sub-line','main>section:nth-of-type(5) .sec-sub','Sample quotes, to be replaced with real reviews.'],
['index','home.ctaT','Closing call to action heading','.cta h2','Have a website in mind?'],
['index','home.ctaP','Closing call to action text','.cta p',"Tell me about your project and I'll reply with ideas and a clear plan.",'a'],
['about','about.h1a','Headline, first part','.a-hero h1','Turning ideas into','f'],
['about','about.h1b','Headline, colored part','.a-hero h1 span','working websites'],
['about','about.lead','Intro sentence','.lead',"I'm Mashhood, a BSIT graduate and professional web developer who cares about clean design, smooth functionality and a great user experience.",'a'],
['about','about.c1t','Story 1 title','.chap:nth-child(1) h2','Who I am'],
['about','about.c1p','Story 1 text','.chap:nth-child(1) p',"I'm a BSIT graduate and professional web developer, passionate about creating modern, responsive and user-friendly websites. I specialize in turning ideas into functional digital experiences using HTML, CSS, JavaScript, Python, Java, SQL, MongoDB and REST APIs.",'a'],
['about','about.c2t','Story 2 title','.chap:nth-child(2) h2',"What I've built"],
['about','about.c2p','Story 2 text','.chap:nth-child(2) p','I have developed a variety of websites and web applications, including e-commerce platforms, portfolio websites, responsive business websites and interactive web applications. I focus on clean design, smooth functionality, responsive layouts and a great user experience.','a'],
['about','about.c3t','Story 3 title','.chap:nth-child(3) h2',"Where I'm going"],
['about','about.c3p','Story 3 text','.chap:nth-child(3) p',"I'm continuously learning and improving my development skills, with a goal of building innovative, reliable and professional web solutions that help businesses and individuals establish a strong online presence.",'a'],
['about','about.tlT','Timeline heading','main>section:nth-of-type(3) .sec-title','My journey so far'],
['about','about.tlS','Timeline sub-line','main>section:nth-of-type(3) .sec-sub','The key moments that shaped my work.'],
['about','about.skT','Skills heading','main>section:nth-of-type(4) .sec-title','Core skills'],
['about','about.skS','Skills sub-line','main>section:nth-of-type(4) .sec-sub','The tools I use most to build and ship projects.'],
['about','about.note','Small note under skills (leave empty to hide)','.note','Skill levels shown are sample values and can be adjusted later.'],
['services','sv.h1a','Headline, first part','.s-hero h1','Services I','f'],['services','sv.h1b','Headline, colored part','.s-hero h1 span','offer'],
['services','sv.p','Intro text','.s-hero p','Everything you need to get a website built, launched and kept in good shape.','a'],
['awards','aw.h1a','Headline, first part','.w-hero h1','Awards &','f'],['awards','aw.h1b','Headline, colored part','.w-hero h1 span','Achievements'],
['awards','aw.p','Intro text','.w-hero p','Milestones that reflect the skills and effort behind my work.','a'],
['portfolio','pf.h1a','Headline, first part','.p-hero h1','My','f'],['portfolio','pf.h1b','Headline, colored part','.p-hero h1 span','Portfolio'],
['portfolio','pf.p','Intro text','.p-hero p','A selection of projects across three areas of my work. Pick a category, then click any card to see more.','a'],
['contact','ct.h1a','Headline, first part','.c-hero h1',"Let's",'f'],['contact','ct.h1b','Headline, colored part','.c-hero h1 span','work together'],
['contact','ct.p','Intro text','.c-hero p',"Have a website or web app in mind? Send me the details and I'll get back to you.",'a'],
['contact','ct.invite','Line above the form','.invite','Need a website, web app, online store or help with an existing site? Tell me about it.','a'],
['*','foot.p','Footer description (all pages)','.foot p','BSIT graduate and web developer building professional websites.'],
['*','foot.copy','Footer copyright line (all pages)','.copy','\u00a9 2026 Mashhood. All rights reserved.']
].map(function(a){return{p:a[0],k:a[1],l:a[2],s:a[3],d:a[4],t:a[5]||'t'}});
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function svg(n){return'<svg viewBox="0 0 24 24">'+(I[n]||I.star)+'</svg>'}
function url(u){return/^(https?:|mailto:)/i.test(u||'')?u:'#'}
window.SiteLib={THEMES:THEMES,ICONS:I,SCHEMA:SCHEMA,esc:esc,applyTheme:applyTheme};
if(window.ADMIN)return;
var cur=(location.pathname.split('/').pop()||'index.html').replace('.html','');
try{applyTheme(localStorage.getItem('theme'))}catch(e){applyTheme()}
var qs=function(s){return D.querySelector(s)};
function apply(d){
 if(d.theme){applyTheme(d.theme);try{localStorage.setItem('theme',d.theme)}catch(e){}}
 var T=d.texts||{};
 SCHEMA.forEach(function(s){
  if(s.p!=='*'&&s.p!==cur)return;var v=T[s.k],el=qs(s.s);if(v===undefined||!el)return;
  if(s.t==='f'){var n=el.firstChild;if(n&&n.nodeType===3)n.nodeValue=v+' '}
  else if(s.t==='n'){var m=String(v).match(/^([\d.]+)(.*)$/);if(m){el.dataset.to=m[1];el.dataset.dec=(m[1].split('.')[1]||'').length;el.dataset.suf=m[2];el.textContent='0'}}
  else if(s.t==='c'){el.innerHTML=String(v).split(',').map(function(x){return x.trim()}).filter(Boolean).map(function(x){return'<span>'+esc(x)+'</span>'}).join('')}
  else{el.textContent=v;el.style.display=v===''?'none':''}
 });
 var im=d.images||{};
 if(im.profile)D.querySelectorAll('.frame img').forEach(function(i){i.src=im.profile});
 var c=d.contact||{};
 D.querySelectorAll('a[href^="mailto:"]').forEach(function(a){if(c.email)a.href='mailto:'+c.email});
 var e=qs('a.ic strong');if(e&&c.email)e.textContent=c.email;
 [['Instagram','instagram'],['LinkedIn','linkedin']].forEach(function(p){D.querySelectorAll('a[aria-label="'+p[0]+'"]').forEach(function(a){if(c[p[1]])a.href=url(c[p[1]])})});
 var w=qs('.ic.hov strong');
 if(w&&c.whatsapp){w.textContent=c.whatsapp;var dg=c.whatsapp.replace(/\D/g,'');if(dg.length>=7){var b=w.closest('.ic');b.style.cursor='pointer';b.onclick=function(){open('https://wa.me/'+dg,'_blank','noopener')}}}
 var sv=d.services||[],pr=d.projects||[],cats=d.cats||[];
 var g=qs('.s-grid');
 if(g&&d.services)g.innerHTML=sv.map(function(s,k){return'<article class="s-card reveal" style="--i:'+k%3+'"><div class="ico">'+svg(s.icon)+'</div><h3>'+esc(s.title)+'</h3><p>'+esc(s.desc)+'</p>'+(s.price?'<p class="price">'+esc(s.price)+'</p>':'')+'</article>'}).join('');
 g=qs('.svc-grid');
 if(g&&d.services)g.innerHTML=sv.slice(0,4).map(function(s,k){return'<article class="svc reveal" style="--i:'+k+'"><div class="ico">'+svg(s.icon)+'</div><h3>'+esc(s.title)+'</h3><p>'+esc(s.desc)+'</p></article>'}).join('');
 g=qs('.work-grid');
 if(g&&d.projects)g.innerHTML=pr.filter(function(p){return p.featured}).slice(0,6).map(function(p,k){return'<a class="proj reveal" style="--i:'+k%3+'" href="portfolio.html"><div class="art a'+(k%6+1)+(p.img?' has':'')+'"'+(p.img?' style="background:url(\''+esc(p.img)+'\') center/cover"':'')+'></div><div class="cap"><h3>'+esc(p.title)+'</h3><span>'+esc(cats[p.cat]||'')+'</span></div></a>'}).join('');
 g=qs('.awards .wrap');
 if(g&&d.awards)g.innerHTML=d.awards.map(function(a){return'<article class="ach reveal"><div class="medal"><div class="ring"><div>'+(a.img?'<img src="'+esc(a.img)+'" alt="'+esc(a.title)+'">':svg(a.icon))+'</div></div></div><div><span class="tag">'+esc(a.tag)+'</span><h2>'+esc(a.title)+'</h2><p>'+esc(a.desc)+'</p></div></article>'}).join('');
 g=qs('.tl');
 if(g&&d.milestones)g.innerHTML=d.milestones.map(function(m){return'<div class="ms reveal"><span class="dot"></span><div class="box"><h3>'+esc(m.title)+'</h3><p>'+esc(m.desc)+'</p></div></div>'}).join('');
 g=qs('.skills');
 if(g&&d.skills)g.innerHTML=d.skills.map(function(s,k){return'<div class="sk reveal" style="--i:'+k%2+'"><div class="sk-top"><span>'+esc(s.name)+'</span><b>0%</b></div><div class="bar"><div class="fill" data-to="'+(+s.level||0)+'"></div></div></div>'}).join('');
 g=qs('.slides');
 if(g&&d.testimonials)g.innerHTML=d.testimonials.map(function(t){return'<div class="slide"><div class="quote"><q>'+esc(t.quote)+'</q><div class="who"><div class="av">'+esc((t.name||'?').charAt(0))+'</div><div><strong>'+esc(t.name)+'</strong><small>'+esc(t.role)+'</small></div><span class="stars" aria-label="5 out of 5">\u2605\u2605\u2605\u2605\u2605</span></div></div></div>'}).join('');
 window.reveal&&window.reveal();
}
window.siteReady=new Promise(function(res){
 var s=D.createElement('script');s.src='data/content.js?t='+Date.now();
 s.onload=s.onerror=function(){res(window.SITE_DATA||{})};D.head.appendChild(s);
}).then(function(d){return new Promise(function(r){D.readyState==='loading'?D.addEventListener('DOMContentLoaded',function(){r(d)}):r(d)})
}).then(function(d){window.SITE=d;apply(d);return d});
})();
