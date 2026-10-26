/* ==========================================================
   HE AVATAR — shared script (all pages)
   Edit the DATA block below to change sliders, brands and
   household products everywhere on the site.
   ========================================================== */

/* ---------- ICONS (inline SVG, stroke style) ---------- */
const ICONS = {
  home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
  bat:'<ellipse cx="9" cy="9" rx="5.5" ry="7" transform="rotate(-38 9 9)"/><path d="M13.2 14.2L20.5 21.5M6 6l6 6M9 3.6l6 6M3.8 9.4l6 6"/>',
  fan:'<circle cx="12" cy="12" r="1.8"/><ellipse cx="12" cy="6" rx="2.2" ry="4"/><ellipse cx="12" cy="18" rx="2.2" ry="4"/><ellipse cx="6" cy="12" rx="4" ry="2.2"/><ellipse cx="18" cy="12" rx="4" ry="2.2"/>',
  hub:'<rect x="3" y="10" width="18" height="7" rx="2"/><path d="M7 13.5h2M11 13.5h2M15 13.5h2M12 10V4M9 4h6"/>',
  bag:'<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M9 8V6a3 3 0 016 0v2M4 13h16M11 13v2h2v-2"/>',
  speaker:'<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="9" r="2.4"/><circle cx="12" cy="16" r="3"/>',
  pad:'<rect x="3" y="7" width="18" height="10" rx="5"/><path d="M8 10v4M6 12h4M15.5 11h.01M18 13h.01"/>',
  plug:'<rect x="2.5" y="13" width="19" height="7" rx="2"/><path d="M6.5 16.5h1M11.5 16.5h1M16.5 16.5h1M7 13V8M17 13V8M7 8h2M15 8h2"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  gel:'<path d="M9 3h6v4l1.5 2v10a2 2 0 01-2 2h-5a2 2 0 01-2-2V9L9 7z"/><path d="M9 7h6M10 13h4"/>',
  chalk:'<rect x="3" y="9" width="18" height="6" rx="1.5" transform="rotate(-20 12 12)"/><path d="M8 12.5l1.5-.6M11 11.5l1.5-.6"/>',
  glue:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 10l6-5M4 15l11-10M7 19L19 8M13 19l7-6"/>',
  cube:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>',
  mosquito:'<ellipse cx="12" cy="14" rx="1.6" ry="4.2"/><circle cx="12" cy="8.6" r="1.4"/><path d="M12 7.2V3.5M10.5 11L5 8M13.5 11L19 8M10.5 14L4.5 15M13.5 14l6 1M11 18l-3 3M13 18l3 3"/><ellipse cx="7" cy="11" rx="4" ry="1.7" transform="rotate(-30 7 11)"/><ellipse cx="17" cy="11" rx="4" ry="1.7" transform="rotate(30 17 11)"/>',
  roach:'<ellipse cx="12" cy="14.5" rx="4" ry="6"/><circle cx="12" cy="7" r="1.9"/><path d="M11 5.4L8 2M13 5.4L16 2M8.2 11L4 9M8 14.5H3.5M8.4 18L4.5 20.5M15.8 11L20 9M16 14.5h4.5M15.6 18l3.9 2.5M12 9v11"/>',
  fly:'<ellipse cx="12" cy="14.5" rx="2.6" ry="4.6"/><circle cx="12" cy="8.6" r="2.3"/><ellipse cx="6.5" cy="12" rx="4.6" ry="2" transform="rotate(-30 6.5 12)"/><ellipse cx="17.5" cy="12" rx="4.6" ry="2" transform="rotate(30 17.5 12)"/><path d="M10.5 18l-2 3M13.5 18l2 3"/>',
  ant:'<circle cx="12" cy="5.5" r="2.2"/><circle cx="12" cy="11.5" r="2.3"/><circle cx="12" cy="18.2" r="3.1"/><path d="M10.5 4L8 1.5M13.5 4L16 1.5M10 10.5L5 8.5M10 12.5L5 14.5M14 10.5l5-2M14 12.5l5 2M10 17.5l-4 3M14 17.5l4 3"/>',
  rat:'<ellipse cx="11.5" cy="14" rx="7" ry="4.2"/><circle cx="19" cy="13" r="2.4"/><circle cx="17.7" cy="10.4" r="1.5"/><path d="M4.5 14C1 14 1 19.5 5.5 19.5M9 18l-1 3M15 18l1 3M21.4 13h.01"/>',
  star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  badge:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14.5L7 21l5-2.5 5 2.5-1.5-6.5M9.5 9l1.8 1.8L15 7.2"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4"/>',
  hourglass:'<path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"/>',
  thumbs:'<path d="M7 11v9H4v-9zM7 11l4-8c2 0 3 1.5 2.5 3.5L13 10h6a2 2 0 012 2.3l-1.2 6A2 2 0 0117.8 20H7"/>',
  map:'<path d="M12 21s7-6.2 7-11.5a7 7 0 10-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  support:'<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19c0 2-2 2.5-5 2.5"/>',
  b2b:'<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V5a1 1 0 011-1h4a1 1 0 011 1v3M3 13h18M12 12v3"/>',
  store:'<path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9c0 2 2 2.5 4 2.5S12 11 12 9c0 2 2 2.5 4 2.5S20 11 20 9M10 20v-5h4v5"/>',
  light:'<path d="M12 2v3M8 21h8M9 17h6a5 5 0 10-6 0z"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  battery:'<rect x="3" y="8" width="16" height="9" rx="2"/><path d="M21 11v3M7 11v3M10 11v3"/>',
  fb:'<path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
  ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  in:'<path d="M4 9h4v11H4zM6 4.5h.01M10 9h4v2c1-1.5 2.5-2.3 4-2.3 3 0 4 2 4 5V20h-4v-5.5c0-1.4-.5-2.2-1.7-2.2S14 13.200 14 14.700V20h-4z"/>',
  yt:'<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.500l5 2.500-5 2.500z"/>',
  x:'<path d="M4 4l16 16M20 4L4 20"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  up:'<path d="M12 19V5M6 11l6-6 6 6"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/>'
};
function icon(name){return `<i data-icon="${name}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]||ICONS.star}</svg></i>`}
function paintIcons(root=document){root.querySelectorAll('i[data-icon]:not([data-done])').forEach(el=>{el.dataset.done=1;el.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[el.dataset.icon]||ICONS.star}</svg>`})}

/* ---------- DATA ---------- */
// Slides = brands + household. Each has colour theme, icon and link target.
const BRANDS=[
 {id:'he-avatar',name:'HE Avatar',short:'HE Avatar',icon:'home',c1:'#17251f',c2:'#2c4a3a',accent:'#d9f36a',tag:'WELCOME',title:'Products for your <em>everyday needs.</em>',text:'Explore our growing range of consumer brands and household pest-control products.',cta:['Explore our products','products.html'],cta2:['About HE Avatar','about.html'],chips:['8 collections','Pan-India enquiries'],home:true},
 {id:'yage',name:'YAGE',short:'Yage',icon:'bat',c1:'#0b3a4a',c2:'#1d7a8c',accent:'#ffd84d',tag:'MOSQUITO CONTROL',title:'Mosquito swatters, <em>eliminate fast.</em>',text:'Rechargeable mosquito killer bats and lamps for every room.',cta:['View YAGE range','products.html#yage'],cta2:['Enquire now','enquiry.html?product=YAGE'],chips:['Rechargeable','Bats & lamps'],blurb:'Mosquito killer bats, swatters and lured lamps.'},
 {id:'pramie',name:'PRAMIE',short:'Pramie',icon:'fan',c1:'#3a2a14',c2:'#8a6a2c',accent:'#ffd98a',tag:'DESIGNER LIGHTING',title:'LED + fan, <em>luxury for your home.</em>',text:'Designer ceiling fans with integrated LED lighting.',cta:['View PRAMIE range','products.html#pramie'],cta2:['Enquire now','enquiry.html?product=PRAMIE'],chips:['3-colour mood light','Remote control'],blurb:'LED light fans in chic, retro and crystal styles.'},
 {id:'novoo',name:'NOVOO',short:'Novoo',icon:'hub',c1:'#25272b',c2:'#4a4d55',accent:'#ff9f43',tag:'CONNECTIVITY',title:'Connect with <em>your modern life.</em>',text:'USB-C hubs and multiport adapters from 4-in-1 to 12-in-1.',cta:['View NOVOO range','products.html#novoo'],cta2:['Enquire now','enquiry.html?product=NOVOO'],chips:['4K HDMI','Fast data'],blurb:'USB-C hubs, network hubs and multiport adapters.'},
 {id:'tomtoc',name:'TOMTOC',short:'Tomtoc',icon:'bag',c1:'#1c1f26',c2:'#323846',accent:'#ff8a3d',tag:'PROTECTIVE GEAR',title:'Carry smart, <em>protect your tech.</em>',text:'Laptop shoulder bags, sleeves and digital gear organisers.',cta:['View TOMTOC range','products.html#tomtoc'],cta2:['Enquire now','enquiry.html?product=TOMTOC'],chips:['Laptop bags','Multiple colours'],blurb:'Business laptop bags, sleeves and organisers.'},
 {id:'sharp',name:'SHARP',short:'Sharp',icon:'speaker',c1:'#0e1b33',c2:'#1f3d78',accent:'#5ec8ff',tag:'AUDIO',title:'Party loud, <em>sound big.</em>',text:'Powerful party speakers built for celebrations.',cta:['View SHARP range','products.html#sharp'],cta2:['Enquire now','enquiry.html?product=SHARP'],chips:['Party speakers','High power'],blurb:'Party speakers and audio systems.'},
 {id:'onikuma',name:'ONIKUMA',short:'Onikuma',icon:'pad',c1:'#1a1033',c2:'#3d1f7a',accent:'#ff5ea8',tag:'GAMING GEAR',title:'The game <em>begins now.</em>',text:'Gaming headsets, keyboards and mice for serious players.',cta:['View ONIKUMA range','products.html#onikuma'],cta2:['Enquire now','enquiry.html?product=ONIKUMA'],chips:['Headsets','Keyboards & mice'],blurb:'Gaming headsets, keyboards and mice.'},
 {id:'one-beat',name:'ONE BEAT',short:'One Beat',icon:'plug',c1:'#10302e',c2:'#1f6d66',accent:'#9bf0c8',tag:'POWER SOLUTIONS',title:'Power, <em>all in one.</em>',text:'Extension boards, tower strips and travel adapters with USB charging.',cta:['View ONE BEAT range','products.html#one-beat'],cta2:['Enquire now','enquiry.html?product=ONE%20BEAT'],chips:['USB-C ports','Overload reset'],blurb:'Extension boards, towers and travel adapters.'},
 {id:'household',name:'Household Pest Control',short:'Household',icon:'shield',c1:'#5a1a10',c2:'#c43a22',accent:'#ffd84d',tag:'HOUSEHOLD RANGE',title:'Kill pests. <em>Protect your home.</em>',text:'Gels, racquets, chalk, glue pads and rat cubes for mosquitoes, cockroaches, flies, ants and rats.',cta:['View household range','products.html#household'],cta2:['Enquire now','enquiry.html?product=Household'],chips:['5 pest categories','5 products'],blurb:'Pest-control products for every common household pest.'}
];

const PESTS=[
 {id:'mosquitoes',name:'Mosquitoes',icon:'mosquito',diseases:'Dengue · Chikungunya · Malaria',strength:'Blood sucker, hides in corners of the home',weak:'Electric racquets, repellents',text:'Mosquitoes breed in stagnant water and can transmit disease. Keeping water covered and using a racquet or lamp helps reduce their numbers indoors. (Sample copy — replace with approved content.)',recs:['gangster-racquet']},
 {id:'cockroaches',name:'Cockroaches',icon:'roach',diseases:'Food contamination',strength:'Survive long without food, hide in dark gaps',weak:'Gels and chalk placed along their path',text:'Cockroaches prefer warm, dark spaces and travel along edges and gaps in kitchens and bathrooms. Targeted gel and chalk are placed where they hide. (Sample copy — replace with approved content.)',recs:['roach-gel','chalk']},
 {id:'flies',name:'Flies',icon:'fly',diseases:'Spread germs from waste to food',strength:'Fast, multiply quickly',weak:'Cleanliness and covered food',text:'Flies are attracted to food and waste. Covering food, sealing waste bins and using an electric racquet help keep rooms fly-free. (Sample copy — replace with approved content.)',recs:['gangster-racquet']},
 {id:'ants',name:'Ants',icon:'ant',diseases:'Contaminate food',strength:'Live in organised colonies',weak:'Chalk lines along entry points',text:'Ants follow trails to food. Drawing a line with chalk along entry points and cleaning spills quickly helps keep them out. (Sample copy — replace with approved content.)',recs:['chalk']},
 {id:'rats',name:'Rats',icon:'rat',diseases:'Spread bacteria through droppings',strength:'Breed fast, chew through materials',weak:'Glue pads and baits in their runs',text:'Rats leave droppings and gnaw wires and food packs. Place glue pads and rat cubes along walls and near entry points as per the label. (Sample copy — replace with approved content.)',recs:['rat-glue','rat-cube']}
];

const HOUSEHOLD=[
 {id:'roach-gel',name:'HE Avatar Anti Roach Gel',pest:'Cockroaches',icon:'gel',c1:'#7a1a10',c2:'#d9381f',accent:'#ffd84d',line:'Power of pest control without any hassle. Effective. Safe. Easy.',desc:'A cockroach gel designed to be applied in cracks and corners where cockroaches travel. (Sample copy — replace with approved product description.)',variants:['Anti Roach Gel — Pack 1','Anti Roach Gel — Pack 2'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Kitchen corners','Under the sink','Behind cabinets'],HOW:['Click the injection to dispense','Apply small dots in corners','Leave undisturbed'],WHEN:['Whenever cockroach activity is seen','Reapply as per label']}},
 {id:'gangster-racquet',name:'Gangster Mosquito Racquet',pest:'Mosquitoes · Flies',icon:'bat',c1:'#121212',c2:'#2d2d2d',accent:'#ffd84d',line:'Intelligently designed electric racquet with wide coverage.',desc:'Rechargeable electric racquet for mosquitoes and flies. (Sample copy — replace with approved product description.)',variants:['Racquet — 1 unit'],origin:'Add country of origin',maker:'Add manufacturer name and address',features:[['shield','Strong & durable','Add approved feature copy'],['bolt','Powerful','Add approved feature copy'],['battery','Long battery life','Add approved feature copy'],['light','LED light','Add approved feature copy']],usage:{USAGE:['Press and hold the safety switch','Swing the racquet near the insect','Release the switch after use'],CHARGING:['Plug in charger','Indicator shows charging','Unplug when full'],CAUTION:['Keep away from children','Do not touch the mesh','Do not use near flammables']}},
 {id:'chalk',name:'HE Avatar Chalk',pest:'Cockroaches · Ants',icon:'chalk',c1:'#8a1a0e',c2:'#e0451f',accent:'#ffe27a',line:'Kills crawling insects.',desc:'Chalk used to draw lines along paths that crawling insects follow. (Sample copy — replace with approved product description.)',variants:['Chalk — 1 unit'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Near the dustbin','Near the gas cylinder','In the sink area','In the cabinets'],HOW:['Draw a line along the path','Keep out of reach of children']}},
 {id:'rat-glue',name:'HE Avatar Rat Glue Pad',pest:'Rats',icon:'glue',c1:'#6a1a10',c2:'#c9361f',accent:'#ffd84d',line:'Non-toxic solution to capture rats and keep your home safe.',desc:'Glue pad placed along walls and runways to capture rats. (Sample copy — replace with approved product description.)',variants:['Glue Pad (Small)','Glue Pad (Large)'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Near the cabinets','Near the gas cylinder','Under the fridge'],HOW:['Open the pad flat','Place along the wall','Check and replace regularly'],PRECAUTIONS:['Keep away from children and pets','Dispose of as per label']}},
 {id:'rat-cube',name:'HE Avatar Rat Cube',pest:'Rats',icon:'cube',c1:'#7a1a10',c2:'#d4381f',accent:'#ffd84d',line:'Keep dangerous rats away from your home.',desc:'Rat cube placed in corners where rats are active. Always follow the label. (Sample copy — replace with approved product description.)',variants:['Rat Cube — 1 pack'],origin:'India',maker:'Add manufacturer name and address',usage:{WHERE:['Near the cabinets','Near the gas cylinder','Under the fridge'],HOW:['Place in corners where rats travel','Keep out of reach of children']}}
];

const COUNTS={yage:9,pramie:14,novoo:8,tomtoc:12,sharp:2,onikuma:8,'one-beat':10};
const BRAND_NOTES={
 yage:['Mosquito Killer Bat','Mosquito Swatter','Mosquito Lured Lamp'],
 pramie:['LED Light Fan','LED + Fan'],
 novoo:['USB-C Hub','Network Hub'],
 tomtoc:['Laptop Bag','Laptop Sleeve','Digital Gear'],
 sharp:['Party Speaker'],
 onikuma:['Gaming Headset','Gaming Keyboard','Gaming Mouse'],
 'one-beat':['Extension Board','Travel Adapter','Cable Reel']
};
const TESTIMONIALS=[
 {n:'Sample customer name',t:'Replace this sample with a verified customer review. Add the name, city and rating exactly as given by the customer.'},
 {n:'Sample dealer name',t:'Replace this sample with verified dealer feedback about product quality, delivery or support.'},
 {n:'Sample retailer name',t:'Replace this sample with a verified retailer testimonial. Remove the "Sample" label once real feedback is added.'}
];
const FAQS=[
 ['Which brands and products do you list?','We list YAGE, PRAMIE, NOVOO, TOMTOC, SHARP, ONIKUMA and ONE BEAT collections, plus the HE Avatar household pest-control range. Use the Our Products page to browse each collection.'],
 ['How do I place an enquiry?','Click "Enquire" on any product card, or open the Enquiry page, choose a product, and send your details. Our team will respond with the information you need.'],
 ['Do you supply to dealers and retailers?','Yes — choose "B2B / Dealer" or "Retail" in the enquiry message, or call the numbers on the Contact page. (Update with your approved policy.)'],
 ['Is there a warranty on the products?','Warranty terms vary by brand and product. Please ask in your enquiry and we will confirm the terms. (Update with your approved policy.)'],
 ['How should I use household pest-control products safely?','Always read and follow the product label. Keep products away from children and pets, and store them as instructed.']
];

/* ---------- COMMON: nav, header, reveal, FAQ, totop ---------- */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
paintIcons();

// mobile nav
const burger=$('#burger'),mnav=$('#mnav');
if(burger&&mnav){burger.addEventListener('click',()=>{const o=mnav.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.textContent=o?'×':'☰'});
  $$('a',mnav).forEach(a=>a.addEventListener('click',()=>{mnav.classList.remove('open');burger.textContent='☰'}))}

// header shadow + to-top
const header=$('.header'),totop=$('#totop');
addEventListener('scroll',()=>{header&&header.classList.toggle('scrolled',scrollY>20);totop&&totop.classList.toggle('show',scrollY>500)},{passive:true});
totop&&totop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

// reveal on scroll
function initReveal(root=document){
  const items=$$('.reveal:not(.in)',root);
  if(!('IntersectionObserver' in window)){items.forEach(i=>i.classList.add('in'));return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  items.forEach(i=>io.observe(i));
}
initReveal();

// FAQ build + accordion
const faqList=$('#faqList');
if(faqList){faqList.innerHTML=FAQS.map((f,i)=>`<div class="faq-item${i===0?' open':''}"><button class="faq-q" aria-expanded="${i===0}"><span>${f[0]}</span><span class="pl">+</span></button><div class="faq-a"><p>${f[1]}</p></div></div>`).join('');
  faqList.addEventListener('click',e=>{const b=e.target.closest('.faq-q');if(!b)return;const it=b.parentElement;const open=!it.classList.contains('open');$$('.faq-item',faqList).forEach(x=>{x.classList.remove('open');$('.faq-q',x).setAttribute('aria-expanded',false)});it.classList.toggle('open',open);b.setAttribute('aria-expanded',open)})}

// brand dropdown + footer lists
$$('[data-brand-links]').forEach(el=>{el.innerHTML=BRANDS.filter(b=>!b.home).map(b=>`<a href="products.html#${b.id}">${b.name}</a>`).join('')});
$$('[data-brand-li]').forEach(el=>{el.innerHTML=BRANDS.filter(b=>!b.home).map(b=>`<li><a href="products.html#${b.id}">${b.name}</a></li>`).join('')});
$$('[data-house-li]').forEach(el=>{el.innerHTML=HOUSEHOLD.map(p=>`<li><a href="products.html#household/${p.id}">${p.name}</a></li>`).join('')});
const yr=$('#year');if(yr)yr.textContent=new Date().getFullYear();

/* ---------- SECTION 1 + 2: SLIDERS + ICON STRIP ---------- */
const slidesEl=$('#slides');
if(slidesEl){
  const hero=$('#hero'),strip=$('#iconRow'),dotsEl=$('#dots'),prog=$('#progress');
  slidesEl.innerHTML=BRANDS.map((b,i)=>`
   <article class="slide${i===0?' active':''}" style="--c1:${b.c1};--c2:${b.c2};--accent:${b.accent}" aria-roledescription="slide" aria-label="${i+1} of ${BRANDS.length}">
     <img class="bgimg" src="images/sliders/${b.id}.jpg" alt="" onerror="this.remove()">
     <span class="ghost">${b.short.toUpperCase()}</span>
     <div class="wrap inner">
       <div class="copy"><span class="tag">${b.tag}</span><h2>${b.title}</h2><p>${b.text}</p>
         <div class="btns"><a class="btn btn-leaf" href="${b.cta[1]}">${b.cta[0]} ${icon('arrow')}</a><a class="btn btn-ghost" href="${b.cta2[1]}">${b.cta2[0]}</a></div></div>
       <div class="art"><div class="card">${icon(b.icon)}</div><span class="chip c1">${b.chips[0]}</span><span class="chip c2">${b.chips[1]}</span></div>
     </div></article>`).join('');
  strip.innerHTML=BRANDS.map((b,i)=>`<button class="ico-btn${i===0?' on':''}" data-i="${i}" aria-label="Show ${b.name} slide">${icon(b.icon)}<span>${b.short}</span></button>`).join('');
  dotsEl.innerHTML=BRANDS.map((b,i)=>`<button class="${i===0?'on':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('');
  paintIcons(hero);paintIcons(strip);
  const slides=$$('.slide',slidesEl),dots=$$('button',dotsEl),icos=$$('.ico-btn',strip);
  let cur=0,timer;
  function go(n){cur=(n+slides.length)%slides.length;
    slides.forEach((s,i)=>s.classList.toggle('active',i===cur));
    dots.forEach((d,i)=>d.classList.toggle('on',i===cur));
    icos.forEach((d,i)=>d.classList.toggle('on',i===cur));
    const on=icos[cur];if(on&&strip.scrollWidth>strip.clientWidth)strip.scrollTo({left:on.offsetLeft-strip.clientWidth/2+on.clientWidth/2,behavior:'smooth'});
    prog.classList.remove('run');void prog.offsetWidth;prog.classList.add('run');restart()}
  function restart(){clearTimeout(timer);if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;timer=setTimeout(()=>go(cur+1),6000)}
  $('#prev').addEventListener('click',()=>go(cur-1));$('#next').addEventListener('click',()=>go(cur+1));
  dots.forEach(d=>d.addEventListener('click',()=>go(+d.dataset.i)));
  icos.forEach(d=>d.addEventListener('click',()=>{hero.scrollIntoView({behavior:'smooth',block:'nearest'});go(+d.dataset.i)}));
  hero.addEventListener('mouseenter',()=>{clearTimeout(timer);prog.style.animationPlayState='paused'});
  hero.addEventListener('mouseleave',()=>{prog.style.animationPlayState='running';restart()});
  let sx=0;hero.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
  hero.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)go(cur+(dx<0?1:-1))});
  hero.tabIndex=0;hero.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
  go(0);
}

/* ---------- SECTION 5: OUR PRODUCTS carousel (home) ---------- */
const pcTrack=$('#pcTrack');
if(pcTrack){
  pcTrack.innerHTML=BRANDS.filter(b=>!b.home).map(b=>`<a class="pc" href="products.html#${b.id}" style="--c1:${b.c1};--c2:${b.c2};--accent:${b.accent}">${icon(b.icon)}<h3>${b.name}</h3><p>${b.blurb}</p><span class="go">Explore collection →</span></a>`).join('');
  paintIcons(pcTrack);
  const step=()=>pcTrack.clientWidth*0.6;
  $('#pcPrev').addEventListener('click',()=>pcTrack.scrollBy({left:-step(),behavior:'smooth'}));
  $('#pcNext').addEventListener('click',()=>pcTrack.scrollBy({left:step(),behavior:'smooth'}));
}

/* ---------- SECTION 7: TESTIMONIALS carousel ---------- */
const tmStage=$('#tmStage');
if(tmStage){
  tmStage.innerHTML=TESTIMONIALS.map((t,i)=>`<div class="tm${i===0?' on':''}"><span class="q">“</span><p>${t.t}</p><div class="who"><span>${t.n}</span><span class="stars">★★★★★</span></div></div>`).join('');
  const dotsT=$('#tmDots');dotsT.innerHTML=TESTIMONIALS.map((t,i)=>`<button class="${i===0?'on':''}" aria-label="Testimonial ${i+1}"></button>`).join('');
  const tms=$$('.tm',tmStage),tds=$$('button',dotsT);let ti=0,tt;
  const show=n=>{ti=(n+tms.length)%tms.length;tms.forEach((x,i)=>x.classList.toggle('on',i===ti));tds.forEach((x,i)=>x.classList.toggle('on',i===ti));clearInterval(tt);tt=setInterval(()=>show(ti+1),5500)};
  tds.forEach((d,i)=>d.addEventListener('click',()=>show(i)));show(0);
}

/* ---------- OUR PRODUCTS PAGE: menu bar + sub pages 1-8 + product pages ---------- */
const subRoot=$('#subRoot');
if(subRoot){
  const bar=$('#menuRow');
  bar.innerHTML=BRANDS.filter(b=>!b.home).map(b=>`<button class="mb" data-id="${b.id}">${icon(b.icon)}<span>${b.short}</span></button>`).join('');
  paintIcons(bar);

  const brandBanner=(b,count)=>`<div class="brand-banner" style="--c1:${b.c1};--c2:${b.c2};--accent:${b.accent}"><div><span class="eyebrow on-dark">Sub page · ${b.tag}</span><h2 style="margin-top:12px">${b.name}</h2><p>${b.blurb}</p></div>${icon(b.icon)}</div>`;

  function renderBrand(b,q=''){
    const n=COUNTS[b.id]||8,notes=BRAND_NOTES[b.id]||['Product'];
    let cards='',m=0;
    for(let i=1;i<=n;i++){
      const num=String(i).padStart(2,'0'),title=`${b.name} ${notes[(i-1)%notes.length]} ${num}`;
      if(q&&!title.toLowerCase().includes(q))continue;m++;
      cards+=`<article class="pcard" style="animation-delay:${Math.min(m,12)*40}ms"><div class="pimg">${icon(b.icon)}<small>Add product image</small><img src="images/products/${b.id}/product-${num}.jpg" alt="${title}" loading="lazy" onerror="this.remove()"></div><div class="pmeta"><span>${b.name} / ${num}</span><span class="ptag">${notes[(i-1)%notes.length]}</span></div><h4>${title}</h4><a class="pbtn" href="enquiry.html?product=${encodeURIComponent(title)}"><span>Enquire about product</span><span>↗</span></a></article>`;
    }
    return {html:cards||'',m,n};
  }

  function showBrand(b){
    subRoot.innerHTML=`<div class="subpage on">${brandBanner(b)}
      <div class="sub-head" style="margin-top:34px"><div><span class="eyebrow">Brand collection</span><h3 class="sec-title" style="font-size:30px" id="subTitle">${b.name} products</h3></div><div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap"><span class="count" id="subCount"></span><input class="search" id="subSearch" type="search" placeholder="Search ${b.name} products" aria-label="Search products"></div></div>
      <div class="grid" id="subGrid"></div><div class="empty" id="subEmpty" hidden>No products match your search.</div></div>`;
    const grid=$('#subGrid'),cnt=$('#subCount'),empty=$('#subEmpty');
    const draw=()=>{const q=$('#subSearch').value.trim().toLowerCase(),r=renderBrand(b,q);grid.innerHTML=r.html;cnt.textContent=q?`${r.m} of ${r.n} matches`:`${r.n} products`;empty.hidden=r.m!==0;paintIcons(grid)};
    $('#subSearch').addEventListener('input',draw);draw();
  }

  function showHousehold(){
    const b=BRANDS.find(x=>x.id==='household');
    subRoot.innerHTML=`<div class="subpage on">${brandBanner(b)}
      <div class="pd-block" style="margin-top:50px"><h3>Choose the right product</h3><p class="sub">Use the appropriate product against specific pests.</p></div>
      <div class="choose" id="choose"></div>
      <div class="pd-block"><h3>Know your enemy</h3><p class="sub">Learn about the pests that infest your home and the diseases they spread.</p></div>
      <div class="pestwheel" id="pestWheel"></div><div id="enemyBox"></div></div>`;
    $('#choose').innerHTML=HOUSEHOLD.map((p,i)=>`<a class="hcard reveal in" href="#household/${p.id}" style="--c1:${p.c1};--c2:${p.c2};--accent:${p.accent};transition-delay:${i*60}ms">${icon(p.icon)}<h3>${p.name}</h3><p>${p.line}</p><span class="go">EXPLORE →</span></a>`).join('');
    const wheel=$('#pestWheel'),box=$('#enemyBox');
    wheel.innerHTML=PESTS.map(p=>`<button class="pest" data-id="${p.id}">${icon(p.icon)}<span>${p.name}</span></button>`).join('');
    const pick=id=>{const p=PESTS.find(x=>x.id===id);$$('.pest',wheel).forEach(x=>x.classList.toggle('on',x.dataset.id===id));
      box.innerHTML=`<div class="enemy-card" style="margin-top:26px;animation:cardIn .45s ease"><span class="ribbon">${icon(p.icon)} ${p.name.toUpperCase()}</span><p>${p.text}</p><div class="enemy-meta"><div><b>Diseases / risks</b>${p.diseases}</div><div><b>Strengths</b>${p.strength}</div><div><b>Weaknesses</b>${p.weak}</div></div><div class="recs">${p.recs.map(r=>{const h=HOUSEHOLD.find(x=>x.id===r);return `<button data-go="${r}">${h.name} →</button>`}).join('')}</div></div>`;paintIcons(box);$$('[data-go]',box).forEach(bt=>bt.addEventListener('click',()=>{location.hash='household/'+bt.dataset.go}))};
    $$('.pest',wheel).forEach(x=>x.addEventListener('click',()=>pick(x.dataset.id)));pick('mosquitoes');
    paintIcons(subRoot);
  }

  function showProduct(id){
    const p=HOUSEHOLD.find(x=>x.id===id);if(!p)return showBrandById('household');
    const pestIds=PESTS.filter(x=>x.recs.includes(id));
    const keys=Object.keys(p.usage);
    subRoot.innerHTML=`<div class="subpage on"><div class="crumbs"><a href="index.html">Home</a> / <a href="products.html">Products</a> / <a href="#household">Household</a> / ${p.name}</div>
      <div class="pd-hero" style="--c1:${p.c1};--c2:${p.c2};--accent:${p.accent}"><div><span class="eyebrow on-dark">Household pest control</span><h2 style="margin-top:12px">${p.name}</h2><p>${p.line}</p><div style="margin-top:24px"><a class="btn btn-leaf" href="enquiry.html?product=${encodeURIComponent(p.name)}">Enquire now ${icon('arrow')}</a></div></div><div class="art">${icon(p.icon)}</div></div>
      <p style="max-width:760px;margin:30px auto 0;text-align:center;color:var(--muted)">${p.desc}</p>
      ${p.features?`<div class="pd-block"><h3>Features</h3><div class="feats">${p.features.map(f=>`<div>${icon(f[0])}<b>${f[1]}</b>${f[2]}</div>`).join('')}</div></div>`:''}
      ${pestIds.map(x=>`<div class="pd-block"><h3>Know your enemy</h3><p class="sub">Learn about the pests that infest your home and the diseases they spread.</p><div class="enemy-card" style="max-width:820px;margin:24px auto 0"><span class="ribbon">${icon(x.icon)} ${x.name.toUpperCase()}</span><p>${x.text}</p></div></div>`).join('')}
      <div class="pd-block"><h3>Available for</h3><div class="avail">${p.variants.map(v=>`<div><div class="box">${icon(p.icon)}</div>${v}</div>`).join('')}</div>
        <div class="details"><h4>Other details</h4><dl><div><dt>Country of origin</dt><dd>${p.origin}</dd></div><div><dt>Manufacturer's address</dt><dd>${p.maker}</dd></div></dl></div></div>
      <div class="pd-block"><h3>Usage instructions</h3><p class="sub">Each enemy has its own strengths and weaknesses. If you successfully lock the target, you can kill it.</p>
        <div class="usage"><div class="utabs" id="uTabs">${keys.map((k,i)=>`<button class="${i===0?'on':''}" data-k="${k}">${k}</button>`).join('')}</div>
        ${keys.map((k,i)=>`<div class="upanel${i===0?' on':''}" data-k="${k}">${p.usage[k].map((s,j)=>`<div class="ustep"><div class="n">${j+1}</div><p>${s}</p></div>`).join('')}</div>`).join('')}</div></div>
      <p class="note">Sample content shown. Replace with the approved label text; always follow the official product label.</p>
      <div style="text-align:center;margin-top:30px"><a class="btn btn-line" href="#household">← Back to household range</a></div></div>`;
    $('#uTabs').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#uTabs button').forEach(x=>x.classList.toggle('on',x===b));$$('.upanel').forEach(x=>x.classList.toggle('on',x.dataset.k===b.dataset.k))});
    paintIcons(subRoot);
  }

  function showBrandById(id){const b=BRANDS.find(x=>x.id===id&&!x.home)||BRANDS[1];id=b.id;$$('.mb',bar).forEach(x=>x.classList.toggle('on',x.dataset.id===id));id==='household'?showHousehold():showBrand(b)}
  function route(first){
    const h=decodeURIComponent(location.hash.slice(1))||'yage',[b,p]=h.split('/');
    $$('.mb',bar).forEach(x=>x.classList.toggle('on',x.dataset.id===(BRANDS.find(y=>y.id===b)?b:'yage')));
    if(b==='household'&&p)showProduct(p);else showBrandById(b);
    const on=$('.mb.on',bar);if(on)bar.scrollTo({left:on.offsetLeft-bar.clientWidth/2+on.clientWidth/2,behavior:'smooth'});
    if(!first)$('#menuAnchor').scrollIntoView({behavior:'smooth'});
  }
  $$('.mb',bar).forEach(x=>x.addEventListener('click',()=>{location.hash=x.dataset.id;if(location.hash.slice(1)===x.dataset.id)route(false)}));
  addEventListener('hashchange',()=>route(false));
  route(true);
}

/* ---------- ENQUIRY FORM ---------- */
const form=$('#enquiryForm');
if(form){
  const sel=$('#product');
  sel.innerHTML='<option value="">Select products</option>'+
    BRANDS.filter(b=>!b.home&&b.id!=='household').map(b=>`<option>${b.name}</option>`).join('')+
    '<optgroup label="Household Pest Control">'+HOUSEHOLD.map(p=>`<option>${p.name}</option>`).join('')+'</optgroup><option>More than one product</option>';
  const qp=new URLSearchParams(location.search).get('product');
  if(qp){let o=[...sel.options].find(x=>x.value===qp||x.textContent===qp||qp.toLowerCase().startsWith(x.textContent.toLowerCase()+' '));if(!o){o=new Option(qp,qp);sel.add(o)}sel.value=o.value}
  form.addEventListener('submit',e=>{
    e.preventDefault();let ok=true;
    $$('.field',form).forEach(f=>{const c=$('.control',f);if(!c)return;const bad=c.required&&!c.value.trim()||c.type==='email'&&c.value&&!/^\S+@\S+\.\S+$/.test(c.value);f.classList.toggle('bad',!!bad);if(bad)ok=false});
    if(!$('#robot').checked)ok=false,$('#robotErr').style.display='block';else $('#robotErr').style.display='none';
    if(!ok)return;
    const d=new FormData(form);
    const text=['HE AVATAR PRODUCT ENQUIRY','-------------------------',`Name: ${d.get('name')}`,`Email: ${d.get('email')}`,`Phone: ${d.get('phone')||'Not provided'}`,`City: ${d.get('city')||'Not provided'}`,`Product: ${d.get('product')||'Not selected'}`,'','Message:',d.get('message')||'—'].join('\n');
    $('#summary').value=text;$('#result').classList.add('show');$('#result').scrollIntoView({behavior:'smooth',block:'nearest'});
  });
  $('#copyBtn').addEventListener('click',async()=>{const s=$('#copyStatus');try{await navigator.clipboard.writeText($('#summary').value);s.textContent='Enquiry summary copied.'}catch(_){$('#summary').select();s.textContent='Select and copy the text manually.'}});
}
