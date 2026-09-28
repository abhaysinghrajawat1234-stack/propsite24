const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
function sendToWhatsApp(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const type=document.getElementById('type').value;
  const message=document.getElementById('message').value.trim();
  const text=`Hello Propsite24,%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AProperty: ${encodeURIComponent(type)}%0ARequirement: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/919220889500?text=${text}`,'_blank');
}
