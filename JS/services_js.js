const q=s=>document.querySelector(s),
Q=s=>document.querySelectorAll(s),
h=q('.hamburger'),
n=q('.nav-menu'),
b=q('.navbar'),
t=(e,m)=>e.classList[m]('active');

h.onclick=_=>{t(n,'toggle');t(h,'toggle')};

Q('.nav-menu a').forEach(l=>l.onclick=_=>{t(n,'remove');t(h,'remove')});

bookingForm.onsubmit=e=>{
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you shortly.');
    e.target.reset()
};

Q('a[href^="#"]').forEach(k=>k.onclick=function(e){
    e.preventDefault();
    q(this.hash)?.scrollIntoView({behavior:'smooth'})
});

onscroll=_=>b.style.boxShadow=scrollY>50?'0 4px 10px #0003':'0 2px 5px #0001';
