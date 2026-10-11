const f=document.getElementById('cform'),ok=document.querySelector('.ok');
f.addEventListener('submit',e=>{
 e.preventDefault();
 const d=new FormData(f);
 const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nProject type: ${d.get('type')}\nBudget: ${d.get('budget')}\n\n${d.get('message')}`;
 const url=`mailto:${(window.SITE&&SITE.contact&&SITE.contact.email)||'mashhoodnadeem@gmail.com'}?subject=${encodeURIComponent('Project enquiry from '+d.get('name'))}&body=${encodeURIComponent(body)}`;
 ok.textContent='Thanks, '+d.get('name')+'. Your email app should open with your message ready to send. If it does not, write to '+((window.SITE&&SITE.contact&&SITE.contact.email)||'mashhoodnadeem@gmail.com')+'.';
 ok.classList.add('show');
 location.href=url;
});
