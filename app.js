const bird='<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 36 1 27l4 13z" fill="#244B3B"/><ellipse cx="30" cy="38" rx="20" ry="17" fill="#E8A35B"/><circle cx="46" cy="26" r="11" fill="#E8A35B"/><circle cx="49" cy="24" r="2" fill="#292B29"/><path d="m56 27 8 3-8 3z" fill="#F5F0E6"/><path d="M22 38c6 0 12 3 14 9-8 2-15-2-14-9z" fill="#F5F0E6"/></svg>';
const CK={'Nasi & Lauk':['🍛','#244B3B'],'Mie & Bakso':['🍜','#8a5a1f'],'Kopi & Kafe':['☕','#4b3a2e'],'Seafood':['🦐','#2f6b73'],'Jajanan':['🍡','#a8582a'],'Sate & Bakar':['🍢','#6b2f2f']};
const H=['','Di bawah Rp30 rb','Rp30–75 rb','Di atas Rp75 rb'];
// DATA CONTOH: ganti dengan restoran & ulasan asli sebelum dipublikasikan
const D=[
{id:'nasi-uduk-bu-ratna',n:'Nasi Uduk Bu Ratna',a:'Kebayoran Baru',k:'Nasi & Lauk',h:1,r:4.5,c:38,j:'06.00–14.00',d:'Nasi uduk gurih dengan ayam goreng kampung, semur jengkol, dan sambal kacang yang pedasnya pas. Ramai sejak pagi.',m:['Nasi uduk komplit','Ayam goreng kampung','Semur jengkol','Es teh manis']},
{id:'bakso-pak-darto',n:'Bakso Pak Darto',a:'Tebet',k:'Mie & Bakso',h:1,r:4.3,c:52,j:'10.00–21.00',d:'Bakso urat besar dengan kuah kaldu sapi bening. Mie kuningnya kenyal, sambalnya bikin nambah.',m:['Bakso urat','Bakso telur','Mie ayam bakso','Es jeruk']},
{id:'kopi-sudut-menteng',n:'Kopi Sudut Menteng',a:'Menteng',k:'Kopi & Kafe',h:2,r:4.6,c:74,j:'08.00–23.00',d:'Kafe kecil dengan biji kopi lokal, wifi kencang, dan banyak colokan. Cocok untuk mengerjakan tugas atau bertemu teman.',m:['Kopi susu gula aren','V60 Gayo','Croissant almond','Roti bakar cokelat']},
{id:'seafood-pluit-bahari',n:'Seafood Pluit Bahari',a:'Pluit',k:'Seafood',h:3,r:4.4,c:61,j:'16.00–23.30',d:'Seafood segar pilihan sendiri dari akuarium, dimasak saus padang, lada hitam, atau asam manis.',m:['Kepiting saus padang','Cumi goreng tepung','Udang bakar madu','Kangkung belacan']},
{id:'sate-kambing-blok-m',n:'Sate Kambing Blok M',a:'Blok M',k:'Sate & Bakar',h:2,r:4.2,c:29,j:'17.00–01.00',d:'Sate kambing muda empuk, bumbu kecap dan kacang, dibakar di atas arang. Tidak berbau prengus.',m:['Sate kambing 10 tusuk','Tongseng','Gulai kambing','Nasi putih']},
{id:'jajan-pasar-ani',n:'Jajan Pasar Bu Ani',a:'Kelapa Gading',k:'Jajanan',h:1,r:4.1,c:21,j:'07.00–16.00',d:'Kue basah tradisional buatan hari itu: klepon, lemper, onde-onde, dan kue lapis yang lembut.',m:['Klepon','Lemper ayam','Onde-onde','Kue lapis']},
{id:'warung-soto-betawi',n:'Warung Soto Betawi Mpok Iyah',a:'Senopati',k:'Nasi & Lauk',h:2,r:4.4,c:44,j:'09.00–20.00',d:'Soto betawi dengan kuah santan susu dan daging sapi tebal. Disajikan dengan emping dan acar.',m:['Soto betawi daging','Soto babat','Nasi putih','Es kelapa muda']},
{id:'mie-aceh-tebet',n:'Mie Aceh Bang Rizal',a:'Tebet',k:'Mie & Bakso',h:2,r:4.5,c:47,j:'11.00–23.00',d:'Mie Aceh pedas berbumbu rempah kuat, pilihan goreng atau kuah, dengan topping seafood atau daging.',m:['Mie Aceh goreng','Mie Aceh kuah','Teh tarik','Martabak telur']},
{id:'ayam-bakar-kemang',n:'Ayam Bakar Taliwang Kemang',a:'Kemang',k:'Sate & Bakar',h:3,r:4.3,c:33,j:'11.00–22.00',d:'Ayam bakar bumbu Taliwang yang pedas dan wangi, ditemani plecing kangkung dan sambal beberuk.',m:['Ayam bakar Taliwang','Plecing kangkung','Sambal beberuk','Es jeruk nipis']},
{id:'es-teler-kelapa-gading',n:'Es Teler Segar Kelapa Gading',a:'Kelapa Gading',k:'Jajanan',h:1,r:4.0,c:18,j:'10.00–21.00',d:'Es teler dengan alpukat, kelapa muda, dan nangka, disiram santan dan susu kental manis.',m:['Es teler','Es campur','Es doger','Pisang goreng']}];
const S=[
{i:'nasi-uduk-bu-ratna',u:'Dina',s:5,t:'Sambal kacangnya juara dan porsinya pas. Datang sebelum jam 8 supaya tidak antre panjang.',d:'2026-10-12'},
{i:'bakso-pak-darto',u:'Raka',s:4,t:'Kuahnya gurih dan baksonya besar. Parkir agak sempit kalau jam makan siang.',d:'2026-10-09'},
{i:'kopi-sudut-menteng',u:'Salsa',s:5,t:'Kopi susu gula arennya seimbang, tempatnya nyaman untuk kerja berjam-jam.',d:'2026-10-18'},
{i:'seafood-pluit-bahari',u:'Bima',s:4,t:'Kepiting saus padangnya tebal dan segar. Harga sesuai, tapi antrean malam akhir pekan lumayan lama.',d:'2026-10-03'},
{i:'mie-aceh-tebet',u:'Nadia',s:5,t:'Pedasnya terasa rempah, bukan cuma cabai. Mie Aceh goreng seafood paling recommended.',d:'2026-10-21'},
{i:'sate-kambing-blok-m',u:'Fajar',s:4,t:'Dagingnya empuk dan tidak prengus. Tongsengnya juga layak dicoba.',d:'2026-10-15'}];
const TIPS=['Cip cip! Lagi lapar? Coba cari nasi uduk.','Cip! Ulasan jujur itu paling dicari.','Cip cip, jangan lupa foto makanannya dulu ya.','Cip! Simpan tempat favoritmu dengan tombol ♥.'];
const $=(s,e=document)=>e.querySelector(s);
const L=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(_){return null}};
const rev=()=>L('cy_rev')||[],fav=()=>L('cy_fav')||[];
const e=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const stars=v=>'★'.repeat(Math.round(v))+'☆'.repeat(5-Math.round(v));
const tgl=s=>new Date(s).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'});
const byId=id=>D.find(x=>x.id===id);
const stat=x=>{const u=rev().filter(v=>v.i===x.id),n=x.c+u.length;return{n,avg:(x.r*x.c+u.reduce((a,v)=>a+v.s,0))/n}};
const revs=id=>[...rev(),...S].filter(v=>!id||v.i===id).sort((a,b)=>b.d.localeCompare(a.d));
const P=document.body.dataset.p,Q=new URLSearchParams(location.search);
const toast=m=>{let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';t.setAttribute('role','status');document.body.append(t)}t.textContent=m;t.className='on';clearTimeout(t.h);t.h=setTimeout(()=>t.className='',2200)};
const card=x=>{const s=stat(x),c=CK[x.k];return`<article class="card"><a href="restoran.html?id=${x.id}"><div class="ph" style="background:${c[1]}">${c[0]}</div><div class="cb"><h3>${x.n}</h3><div><span class="st">${stars(s.avg)}</span> <b>${s.avg.toFixed(1)}</b> <span class="mt">(${s.n} ulasan)</span></div><p>${x.k}, ${x.a}. ${H[x.h]}</p></div></a><button class="fav${fav().includes(x.id)?' on':''}" data-f="${x.id}" aria-label="Simpan ${x.n} ke favorit" aria-pressed="${fav().includes(x.id)}">♥</button></article>`};
const rv=(v,l)=>`<li class="rv"><div><b>${e(v.u)}</b> <span class="st" aria-label="${v.s} dari 5">${stars(v.s)}</span>${l?` di <a href="restoran.html?id=${v.i}">${byId(v.i).n}</a>`:''}</div><p>${e(v.t)}</p><small>${tgl(v.d)}</small></li>`;
const nav=[['index.html','Beranda','home'],['explore.html','Jelajah','explore'],['tulis-ulasan.html','Tulis Ulasan','tulis'],['profil.html','Profil','profil']];
$('#hd').innerHTML=`<header class="top"><a class="logo" href="index.html">${bird}<b>CicipYuk</b></a><button class="burger" aria-label="Buka menu" aria-expanded="false">☰</button><nav id="nav">${nav.map(l=>`<a href="${l[0]}"${P===l[2]||(P==='detail'&&l[2]==='explore')?' aria-current="page"':''}>${l[1]}</a>`).join('')}</nav></header>`;
$('#ft').innerHTML='<footer><b>CicipYuk</b> · Ayo cicip, lalu bercerita.<br>Proyek tugas Search Engine Marketing. Data restoran di situs ini adalah contoh.</footer>';
$('.burger').onclick=ev=>{const o=$('#nav').classList.toggle('open');ev.target.setAttribute('aria-expanded',o)};
document.addEventListener('click',ev=>{const b=ev.target.closest('[data-f]');if(!b)return;const f=fav(),i=f.indexOf(b.dataset.f);i<0?f.push(b.dataset.f):f.splice(i,1);L('cy_fav',f);toast(i<0?'Disimpan ke favorit':'Dihapus dari favorit');window.draw&&draw()});
const opts=(a,first)=>`<option value="">${first}</option>`+a.map(v=>`<option value="${e(v[0])}">${e(v[1])}</option>`).join('');
const pages={
home(){
$('#cats').innerHTML=Object.keys(CK).map(k=>`<a class="chip" href="explore.html?k=${encodeURIComponent(k)}">${CK[k][0]} ${k}</a>`).join('');
$('#ciping').innerHTML=bird+'<span id="bub" hidden></span>';let t=0;
$('#ciping').onclick=()=>{const b=$('#bub');b.hidden=false;b.textContent=TIPS[t++%TIPS.length]};
$('#hs').onsubmit=ev=>{ev.preventDefault();location.href='explore.html?q='+encodeURIComponent($('#hq').value)};
window.draw=()=>{$('#top').innerHTML=[...D].sort((a,b)=>stat(b).avg-stat(a).avg).slice(0,3).map(card).join('');$('#new').innerHTML=revs().slice(0,4).map(v=>rv(v,1)).join('')};draw()},
explore(){
const ar=[...new Set(D.map(x=>x.a))].sort();
$('#k').innerHTML=opts(Object.keys(CK).map(k=>[k,k]),'Semua jenis');
$('#a').innerHTML=opts(ar.map(k=>[k,k]),'Semua daerah');
$('#h').innerHTML=opts([1,2,3].map(i=>[i,H[i]]),'Semua harga');
$('#s').innerHTML=opts([['u','Ulasan terbanyak'],['m','Harga termurah'],['n','Nama A–Z']],'Rating tertinggi');
$('#q').value=Q.get('q')||'';$('#k').value=Q.get('k')||'';
const ids=['q','k','a','h','s','v'];
window.draw=()=>{const q=$('#q').value.trim().toLowerCase(),k=$('#k').value,a=$('#a').value,h=$('#h').value,s=$('#s').value,v=$('#v').checked,f=fav();
let r=D.filter(x=>(!q||[x.n,x.a,x.k,...x.m].join(' ').toLowerCase().includes(q))&&(!k||x.k===k)&&(!a||x.a===a)&&(!h||x.h==h)&&(!v||f.includes(x.id)));
r.sort((x,y)=>s==='u'?stat(y).n-stat(x).n:s==='m'?x.h-y.h:s==='n'?x.n.localeCompare(y.n):stat(y).avg-stat(x).avg);
$('#cnt').textContent=r.length+' restoran ditemukan';
$('#grid').innerHTML=r.length?r.map(card).join(''):'<div class="empty"><p>Belum ada yang cocok. Coba kata kunci lain atau hapus filter.</p><br><button class="btn" id="rs">Hapus filter</button></div>';
const rs=$('#rs');if(rs)rs.onclick=()=>{ids.forEach(i=>{const el=$('#'+i);el.type==='checkbox'?el.checked=false:el.value=''});draw()};
const p=new URLSearchParams();['q','k','a','h','s'].forEach(i=>$('#'+i).value&&p.set(i,$('#'+i).value));history.replaceState(null,'',p.toString()?'?'+p:location.pathname)};
['a','h','s'].forEach(i=>$('#'+i).value=Q.get(i)||'');
ids.forEach(i=>$('#'+i).addEventListener('input',draw));draw()},
detail(){
const x=byId(Q.get('id')),m=$('#main');
if(!x){m.innerHTML='<div class="wrap"><div class="empty"><p>Restoran tidak ditemukan.</p><br><a class="btn" href="explore.html">Lihat semua restoran</a></div></div>';return}
const desc=`Ulasan ${x.n} di ${x.a}, Jakarta: menu, jam buka, dan rating dari pengunjung.`;
document.title=`${x.n}, ${x.a} – Ulasan & Menu | CicipYuk`;$('meta[name=description]').content=desc;
window.draw=()=>{const s=stat(x),c=CK[x.k],f=fav().includes(x.id),rs=revs(x.id);
m.innerHTML=`<div class="wrap"><a class="back" href="explore.html">← Semua restoran</a><div class="dh" style="background:${c[1]}">${c[0]}</div><div class="dg"><div><h1>${x.n}</h1><p style="margin:10px 0"><span class="tag">${x.k}</span> <span class="tag">${x.a}</span> <span class="tag">${H[x.h]}</span></p><p>${x.d}</p><h2 style="margin-top:28px">Menu andalan</h2><ul class="mn">${x.m.map(i=>`<li>${i}</li>`).join('')}</ul><h2>Ulasan pengunjung</h2><ul class="rvs">${rs.length?rs.map(v=>rv(v)).join(''):'<li class="empty">Belum ada ulasan. Jadilah yang pertama.</li>'}</ul></div><aside class="box"><div class="big">${s.avg.toFixed(1)}</div><div><span class="st">${stars(s.avg)}</span> <span class="mt">${s.n} ulasan</span></div><p><b>Jam buka:</b> ${x.j}</p><a class="btn" href="tulis-ulasan.html?id=${x.id}">Tulis ulasan</a><button class="btn o fav-d" data-f="${x.id}">${f?'♥ Tersimpan':'♡ Simpan ke favorit'}</button><button class="btn o" id="sh">Salin tautan</button></aside></div></div>`;
$('#sh').onclick=()=>navigator.clipboard?.writeText(location.href).then(()=>toast('Tautan disalin'),()=>toast('Gagal menyalin tautan'))};
draw();
const j=document.createElement('script');j.type='application/ld+json';j.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Restaurant',name:x.n,servesCuisine:x.k,description:x.d,address:{'@type':'PostalAddress',addressLocality:x.a,addressRegion:'Jakarta',addressCountry:'ID'},aggregateRating:{'@type':'AggregateRating',ratingValue:stat(x).avg.toFixed(1),reviewCount:stat(x).n}});document.head.append(j)},
tulis(){
$('#rs').innerHTML=opts(D.map(x=>[x.id,x.n]),'Pilih restoran');$('#rs').value=Q.get('id')||'';$('#nm').value=L('cy_nama')||'';
let sv=0;const sb=$('#sbn');sb.innerHTML=[1,2,3,4,5].map(i=>`<button type="button" data-s="${i}" aria-label="${i} bintang">★</button>`).join('');
sb.onclick=ev=>{const b=ev.target.closest('button');if(!b)return;sv=+b.dataset.s;[...sb.children].forEach((c,i)=>c.classList.toggle('on',i<sv));$('#sl').textContent=['','Kurang','Biasa saja','Enak','Mantap','Juara!'][sv]};
$('#tx').oninput=()=>$('#cn').textContent=$('#tx').value.length+' / 600 karakter (minimal 30)';
$('#fm').onsubmit=ev=>{ev.preventDefault();const i=$('#rs').value,u=$('#nm').value.trim(),t=$('#tx').value.trim();
const er=!i?'Pilih restoran dulu.':!sv?'Beri bintang 1 sampai 5.':!u?'Isi nama kamu.':t.length<30?'Ulasan minimal 30 karakter, ceritakan rasa dan suasananya.':'';
$('#err').textContent=er;if(er)return;
const a=rev();a.push({i,u,s:sv,t,d:new Date().toISOString().slice(0,10),k:Date.now()});L('cy_rev',a);L('cy_nama',u);location.href='restoran.html?id='+i}},
profil(){
$('#pn').value=L('cy_nama')||'';$('#pn').onchange=()=>{L('cy_nama',$('#pn').value.trim());toast('Nama disimpan')};
window.draw=()=>{const r=rev(),f=fav();$('#n1').textContent=r.length;$('#n2').textContent=f.length;
$('#mr').innerHTML=r.length?r.map(v=>rv(v,1).replace('</li>',`<button class="btn r" data-d="${v.k}">Hapus</button></li>`)).join(''):'<li class="empty">Kamu belum menulis ulasan. <a href="tulis-ulasan.html">Tulis ulasan pertama</a></li>';
$('#mf').innerHTML=f.length?f.map(i=>card(byId(i))).join(''):'<div class="empty">Belum ada favorit. Tekan ♥ di kartu restoran untuk menyimpannya.</div>'};
$('#mr').onclick=ev=>{const b=ev.target.closest('[data-d]');if(b&&confirm('Hapus ulasan ini?')){L('cy_rev',rev().filter(v=>v.k!=b.dataset.d));draw();toast('Ulasan dihapus')}};
$('#rst').onclick=()=>{if(confirm('Hapus semua ulasan, favorit, dan nama dari perangkat ini?')){['cy_rev','cy_fav','cy_nama'].forEach(k=>localStorage.removeItem(k));$('#pn').value='';draw()}};draw()}};
pages[P]();
