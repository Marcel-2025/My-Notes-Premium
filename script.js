(()=>{
 const toggle=document.querySelector('.nav-toggle');
 const menu=document.querySelector('.nav-menu');
 if(toggle&&menu){
  toggle.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}});
 }
 const slider=document.querySelector('[data-carousel]');
 if(slider){
  document.querySelector('[data-prev]')?.addEventListener('click',()=>slider.scrollBy({left:-slider.clientWidth*.74,behavior:'smooth'}));
  document.querySelector('[data-next]')?.addEventListener('click',()=>slider.scrollBy({left:slider.clientWidth*.74,behavior:'smooth'}));
 }
 const modal=document.getElementById('image-modal');
 const modalImage=modal?.querySelector('img');
 let beforeModal=null;
 document.querySelectorAll('.shot-card').forEach(card=>{
  card.addEventListener('click',()=>{if(!modal||!modalImage)return;beforeModal=document.activeElement;const img=card.querySelector('img');modalImage.src=img.src;modalImage.alt=img.alt;modal.hidden=false;document.body.style.overflow='hidden';modal.querySelector('button')?.focus();});
  card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.click();}});
 });
 function closeModal(){if(modal){modal.hidden=true;modalImage?.removeAttribute('src');document.body.style.overflow='';beforeModal?.focus();}}
 modal?.addEventListener('click',e=>{if(e.target===modal||e.target.closest('.modal-close'))closeModal();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal&&!modal.hidden)closeModal();});
 const desk=document.querySelector('.sample-desk');
 document.querySelectorAll('[data-theme]').forEach(btn=>btn.addEventListener('click',()=>{
  const evening=btn.dataset.theme==='evening';desk?.classList.toggle('is-evening',evening);
  document.querySelectorAll('[data-theme]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
 }));
 if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.07});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
 }else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
})();
