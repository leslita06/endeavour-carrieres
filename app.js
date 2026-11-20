(function(){
'use strict';
var I = {
 pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
 bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
 cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
 clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>'
};
var T = {
 fr:{
  nav_jobs:'Offres', nav_young:'Jeunes et stages', nav_local:'Emploi local', nav_how:'Recrutement', nav_ba:'Avant / après',
  trust:'Postuler est gratuit : Endeavour ne demande jamais d\u2019argent. Offres officielles sur ce site uniquement.', trust_more:'En savoir plus',
  eyebrow:'Carrières · Afrique de l\u2019Ouest',
  h1:'Faites carrière dans l\u2019or, au plus près de chez vous.',
  lead:'Ingénieurs, techniciens, opérateurs, jeunes diplômés : cinq mines en activité en Côte d\u2019Ivoire, au Burkina Faso et au Sénégal, et 95\u00a0% de nationaux dans nos équipes.',
  s_kw:'Métier ou mot-clé', s_kw_ph:'Ex. géologue, maintenance, stage', s_pays:'Pays', all_pays:'Tous les pays', s_go:'Voir les offres',
  q_young:'Jeunes diplômés et stages', q_local:'Habitants des zones minières', q_alert:'Recevoir les nouvelles offres',
  st1:'personnes au travail en 2025', st2:'de nationaux dans les pays où nous opérons', st3:'de managers seniors ouest-africains', st4:'mines en activité, 3 pays',
  st_src:'Source : endeavourmining.com, pages Carrières et Talent, diversité et inclusion (effectif fin 2025, salariés et sous-traitants).',
  jobs_h:'Offres ouvertes', jobs_p:'Chaque offre dit où, à quel rythme, jusqu\u2019à quand, et comment se passe le recrutement.',
  f_all:'Toutes', f_CI:'Côte d\u2019Ivoire', f_BF:'Burkina Faso', f_SN:'Sénégal', f_stage:'Stages',
  n_jobs:function(n){return n+(n>1?' offres':' offre')}, empty:'Aucune offre ne correspond. Laissez votre contact : nous vous prévenons dès qu\u2019un poste ouvre.',
  pub:'Publiée le', close:'Clôture', see:'Voir l\u2019offre', new_:'Nouveau', fr_only:'', 
  m_mining:'Mine', m_processing:'Traitement', m_data:'Données', m_it:'Informatique',
  c_cdi:'CDI', c_cdd24:'CDD 24 mois', c_stage:'Stage 6 mois',
  lv_etud:'Étudiant', 'lv_2-8':'2 à 8 ans', 'lv_5-15':'5 à 15 ans', 'lv_10-15':'10 à 15 ans et plus',
  CI:'Côte d\u2019Ivoire', BF:'Burkina Faso', SN:'Sénégal',
  doors_h:'Trois portes d\u2019entrée', doors_p:'Vous n\u2019avez pas 10 ans d\u2019expérience ? Il y a aussi une place pour vous.',
  d1_h:'Stages', d1_k:'844', d1_p:'stages proposés en 2025 dans nos mines et bureaux régionaux. Un stage ouvert en ce moment à Abidjan.', d1_b:'Voir les stages',
  d2_h:'Jeunes diplômés', d2_k:'Élite Demain', d2_p:'Bourses universitaires pour les étudiants des communautés, puis stages et premiers postes sur nos sites. Déposez votre CV : vous êtes contacté dès qu\u2019un poste junior ouvre.', d2_b:'Déposer mon CV',
  d3_h:'Emploi local', d3_k:'22\u00a0%', d3_p:'de nos salariés directs viennent des communautés voisines de nos mines (47\u00a0% à Ity). Les embauches locales passent par les comités de recrutement de chaque site.', d3_b:'Être prévenu près de chez moi',
  d_src:'Sources : rapport de durabilité 2025 et page Talent d\u2019Endeavour Mining.',
  how_h:'Comment nous recrutons', how_p:'Le même parcours pour tous, expliqué avant que vous postuliez.',
  p1_h:'Candidature en ligne', p1_p:'En trois écrans, CV joint. Accusé de réception immédiat.',
  p2_h:'Entretien RH', p2_p:'Par téléphone ou en visio : votre parcours et vos motivations.',
  p3_h:'Entretien technique', p3_p:'Avec un panel d\u2019experts du métier, et des tests selon le poste.',
  p4_h:'Offre et intégration', p4_p:'Offre écrite (salaire, avantages, conditions), puis accueil sur site.',
  where_h:'Où vous travaillerez', where_p:'Cinq mines en activité, un bureau technique régional à Abidjan, des bureaux pays à Ouagadougou et Dakar.',
  w1:'Sécurité d\u2019abord, sur chaque site', w2:'Mobilité interne entre sites et métiers', w3:'Formation continue et parcours managers', 
  alert_h:'Ne ratez plus une offre', alert_p:'Recevez par e-mail ou WhatsApp les offres de votre métier, dans votre pays.',
  a_contact:'E-mail ou numéro WhatsApp', a_go:'M\u2019abonner', a_ok:'C\u2019est noté (démonstration : rien n\u2019est enregistré).',
  ft_about:'Endeavour Mining, premier producteur d\u2019or d\u2019Afrique de l\u2019Ouest. Siège à Londres, bureau technique régional à Abidjan.',
  ft_links:'Liens', ft_contact:'Contact', ft_fine:'Maquette de démonstration, non publiée. Textes et chiffres repris des pages publiques d\u2019endeavourmining.com au 20 novembre 2026 ; les champs marqués « à fixer » restent à renseigner par l\u2019équipe RH.',
  back:'Toutes les offres', o_where:'Pays et site', o_contract:'Contrat', o_exp:'Expérience', o_close:'Clôture', o_rythm:'Rythme de travail', o_pay:'Rémunération', o_lang:'Langues', o_rep:'Rattachement',
  rh:'à fixer par les RH', prop:'date proposée',
  site_tbd:'site à préciser', site_rh:'mine : à fixer par les RH', rythm_tbd:'Rotation à préciser', pay_tbd:'Fourchette à publier',
  o_role:'Le poste', o_miss:'Vos missions', o_prof:'Votre profil', o_why:'Pourquoi Endeavour', o_proc:'Le recrutement, étape par étape',
  why1:'de nationaux dans nos équipes', why2:'de managers seniors ouest-africains', why3:'mobilité interne entre sites et métiers', why4:'formation continue et parcours managers',
  orig:'Offre d\u2019origine (anglais) :', origfr:'Offre d\u2019origine :', apply_h:'Postuler', apply_p:function(d){return 'Clôture le '+d+' · 3 écrans, 3 minutes'},
  st_1:'Vous', st_2:'Votre parcours', st_3:'Vérification',
  f_name:'Nom et prénom', f_phone:'Téléphone (WhatsApp)', f_mail:'E-mail', f_country:'Pays de résidence', f_years:'Années d\u2019expérience dans le métier', f_dip:'Diplôme le plus élevé', f_cv:'Ajouter mon CV (PDF, Word ou photo)', f_cv_ok:'CV ajouté :',
  next:'Continuer', prev:'Retour', send:'Envoyer ma candidature', req:'Champ à remplir',
  consent:'J\u2019accepte qu\u2019Endeavour conserve ma candidature 24 mois pour ce poste et des postes proches.',
  done_h:'Candidature envoyée', done_p:'Démonstration : rien n\u2019a été transmis. En vrai, vous recevez un accusé de réception par e-mail et WhatsApp, puis une réponse avant la date de clôture.',
  mbar_close:'Clôture', mbar_go:'Postuler',
  y_opts:['Moins de 2 ans','2 à 5 ans','5 à 10 ans','Plus de 10 ans'], d_opts:['Bac ou moins','BTS / DUT / Licence','Master / Ingénieur','Doctorat'],
  pays_opts:['Côte d\u2019Ivoire','Burkina Faso','Sénégal','Mali','Guinée','Autre'],
  lang_name:'FR'
 },
 en:{
  nav_jobs:'Jobs', nav_young:'Graduates & internships', nav_local:'Local hiring', nav_how:'How we hire', nav_ba:'Before / after',
  trust:'Applying is free: Endeavour never asks for money. Official vacancies on this site only.', trust_more:'Learn more',
  eyebrow:'Careers · West Africa',
  h1:'Build a career in gold, close to home.',
  lead:'Engineers, technicians, operators, graduates: five operating mines in Côte d\u2019Ivoire, Burkina Faso and Senegal, and 95% nationals in our teams.',
  s_kw:'Role or keyword', s_kw_ph:'e.g. geologist, maintenance, internship', s_pays:'Country', all_pays:'All countries', s_go:'See jobs',
  q_young:'Graduates & internships', q_local:'Mine-area residents', q_alert:'Get new job alerts',
  st1:'people at work in 2025', st2:'nationals in the countries where we operate', st3:'West African senior managers', st4:'operating mines, 3 countries',
  st_src:'Source: endeavourmining.com, Careers and Talent, diversity & inclusion pages (end-2025 workforce, employees and contractors).',
  jobs_h:'Open positions', jobs_p:'Every job says where, on what roster, until when, and how hiring works.',
  f_all:'All', f_CI:'Côte d\u2019Ivoire', f_BF:'Burkina Faso', f_SN:'Senegal', f_stage:'Internships',
  n_jobs:function(n){return n+(n>1?' jobs':' job')}, empty:'No match. Leave your contact and we\u2019ll tell you when a role opens.',
  pub:'Posted', close:'Closes', see:'View job', new_:'New',
  m_mining:'Mining', m_processing:'Processing', m_data:'Data', m_it:'IT',
  c_cdi:'Permanent', c_cdd24:'24-month fixed term', c_stage:'6-month internship',
  lv_etud:'Student', 'lv_2-8':'2 to 8 years', 'lv_5-15':'5 to 15 years', 'lv_10-15':'10 to 15+ years',
  CI:'Côte d\u2019Ivoire', BF:'Burkina Faso', SN:'Senegal',
  doors_h:'Three ways in', doors_p:'Not 10 years in yet? There is a place for you too.',
  d1_h:'Internships', d1_k:'844', d1_p:'internships offered in 2025 across our mines and regional offices. One internship open now in Abidjan.', d1_b:'See internships',
  d2_h:'Graduates', d2_k:'Elite Demain', d2_p:'University scholarships for students from our host communities, then internships and first jobs on our sites. Leave your CV and we\u2019ll contact you when a junior role opens.', d2_b:'Submit my CV',
  d3_h:'Local hiring', d3_k:'22%', d3_p:'of our direct employees come from communities around our mines (47% at Ity). Local hiring runs through each site\u2019s recruitment committee.', d3_b:'Get alerts near me',
  d_src:'Sources: Endeavour Mining 2025 Sustainability Report and Talent page.',
  how_h:'How we hire', how_p:'One process for everyone, explained before you apply.',
  p1_h:'Apply online', p1_p:'Three screens, CV attached. Instant acknowledgement.',
  p2_h:'HR interview', p2_p:'By phone or video: your background and motivation.',
  p3_h:'Technical interview', p3_p:'With a panel of experts, plus role-specific assessments.',
  p4_h:'Offer & onboarding', p4_p:'Written offer (salary, benefits, conditions), then on-site induction.',
  where_h:'Where you\u2019ll work', where_p:'Five operating mines, a regional technical office in Abidjan, country offices in Ouagadougou and Dakar.',
  w1:'Safety first, on every site', w2:'Internal mobility across sites and roles', w3:'Ongoing training and leadership programmes',
  alert_h:'Never miss a job', alert_p:'Get jobs in your field and country by email or WhatsApp.',
  a_contact:'Email or WhatsApp number', a_go:'Subscribe', a_ok:'Noted (demo: nothing is stored).',
  ft_about:'Endeavour Mining, West Africa\u2019s leading gold producer. Head office in London, regional technical office in Abidjan.',
  ft_links:'Links', ft_contact:'Contact', ft_fine:'Demonstration mock-up, not published. Copy and figures taken from public pages of endeavourmining.com on 20 November 2026; fields marked \u201cto be set\u201d are for the HR team to complete.',
  back:'All jobs', o_where:'Country & site', o_contract:'Contract', o_exp:'Experience', o_close:'Closing date', o_rythm:'Roster', o_pay:'Pay', o_lang:'Languages', o_rep:'Reports to',
  rh:'to be set by HR', prop:'proposed date',
  site_tbd:'site to be confirmed', site_rh:'mine: to be set by HR', rythm_tbd:'Roster to be confirmed', pay_tbd:'Range to be published',
  o_role:'The role', o_miss:'What you\u2019ll do', o_prof:'What you bring', o_why:'Why Endeavour', o_proc:'Hiring, step by step',
  why1:'nationals in our teams', why2:'West African senior managers', why3:'internal mobility across sites and roles', why4:'ongoing training and leadership programmes',
  orig:'Original posting:', origfr:'Original posting (French):', apply_h:'Apply', apply_p:function(d){return 'Closes '+d+' · 3 screens, 3 minutes'},
  st_1:'You', st_2:'Your background', st_3:'Review',
  f_name:'Full name', f_phone:'Phone (WhatsApp)', f_mail:'Email', f_country:'Country of residence', f_years:'Years of experience in this field', f_dip:'Highest qualification', f_cv:'Add my CV (PDF, Word or photo)', f_cv_ok:'CV added:',
  next:'Continue', prev:'Back', send:'Submit application', req:'Required',
  consent:'I agree that Endeavour may keep my application for 24 months for this and similar roles.',
  done_h:'Application sent', done_p:'Demo: nothing was sent. In real life you get an acknowledgement by email and WhatsApp, then an answer before the closing date.',
  mbar_close:'Closes', mbar_go:'Apply',
  y_opts:['Under 2 years','2 to 5 years','5 to 10 years','Over 10 years'], d_opts:['High school or less','Diploma / Bachelor\u2019s','Master\u2019s / Engineering','PhD'],
  pays_opts:['Côte d\u2019Ivoire','Burkina Faso','Senegal','Mali','Guinea','Other'],
  lang_name:'EN'
 }
};
var qs = new URLSearchParams(location.search);
var L = qs.get('lang') || (function(){try{return localStorage.getItem('edv-lang')}catch(e){return null}})() || 'fr';
if(!T[L]) L='fr';
function t(k){var v=T[L][k];return v===undefined?k:v}
window.EDV={t:t,L:function(){return L},I:I};
var RELEVE = new Date(window.RELEVE+'T00:00:00Z');
// règle proposée : à la relance de la page, chaque offre est republiée avec une clôture à 30 jours
var CLOSE = new Date(RELEVE.getTime()+30*864e5);
function fmt(d){d=typeof d==='string'?new Date(d+'T00:00:00Z'):d;return d.toLocaleDateString(L==='fr'?'fr-FR':'en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'})}
function fmtS(d){d=typeof d==='string'?new Date(d+'T00:00:00Z'):d;return d.toLocaleDateString(L==='fr'?'fr-FR':'en-GB',{day:'numeric',month:'short',timeZone:'UTC'})}
function age(o){return Math.round((RELEVE-new Date(o.pub+'T00:00:00Z'))/864e5)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

function applyI18n(){
 document.documentElement.lang=L;
 document.querySelectorAll('[data-i]').forEach(function(e){e.textContent=t(e.getAttribute('data-i'))});
 document.querySelectorAll('[data-ph]').forEach(function(e){e.placeholder=t(e.getAttribute('data-ph'))});
 document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===L)});
 document.querySelectorAll('a[data-keep]').forEach(function(a){var u=new URL(a.getAttribute('href'),location.href);u.searchParams.set('lang',L);a.href=u.pathname.split('/').pop()+u.search+u.hash});
}
function setLang(l){L=l;try{localStorage.setItem('edv-lang',l)}catch(e){}var u=new URL(location.href);u.searchParams.set('lang',l);history.replaceState(null,'',u);render()}

function jobCard(o){
 var a=age(o), isNew=a<=30;
 return '<a class="job" data-keep href="offre.html?id='+o.slug+'"><div><h3>'+esc(o.t[L])+'</h3><div class="meta">'+
  '<i>'+I.pin+esc(t(o.pays))+(o.ville?' · '+o.ville:'')+'</i><i>'+I.bag+esc(t('m_'+o.metier))+' · '+esc(t('c_'+o.contrat))+'</i>'+
  '<i>'+I.clock+esc(t('lv_'+o.niveau))+'</i><i>'+I.cal+t('close')+' '+fmtS(CLOSE)+'</i>'+
  (isNew?'<span class="tag new">'+t('new_')+'</span>':'')+'</div></div><span class="go">'+t('see')+' →</span></a>';
}
var state={pays:'all',kw:''};
function renderJobs(){
 var box=document.getElementById('jobs'); if(!box) return;
 var kw=state.kw.trim().toLowerCase();
 var list=window.OFFRES.filter(function(o){
  if(state.pays==='stage') { if(o.contrat!=='stage') return false; }
  else if(state.pays!=='all' && o.pays!==state.pays) return false;
  if(!kw) return true;
  var hay=(o.t.fr+' '+o.t.en+' '+t('m_'+o.metier)+' '+o.resume.fr+' '+o.resume.en+' '+(o.contrat==='stage'?'stage internship stagiaire':'')).toLowerCase();
  return kw.split(/\s+/).every(function(w){return hay.indexOf(w)>=0});
 }).sort(function(a,b){return b.pub.localeCompare(a.pub)});
 document.getElementById('count').textContent=t('n_jobs')(list.length);
 box.innerHTML=list.length?list.map(jobCard).join(''):'<div class="empty">'+t('empty')+'</div>';
 document.querySelectorAll('.chip').forEach(function(c){c.classList.toggle('on',c.dataset.f===state.pays)});
 applyI18nLinks(box);
}
function applyI18nLinks(root){root.querySelectorAll('a[data-keep]').forEach(function(a){var u=new URL(a.getAttribute('href'),location.href);u.searchParams.set('lang',L);a.href=u.pathname.split('/').pop()+u.search})}

function renderOffer(){
 var root=document.getElementById('offer'); if(!root) return;
 var id=qs.get('id'); var o=window.OFFRES.filter(function(x){return x.slug===id})[0]||window.OFFRES[0];
 document.title=o.t[L]+' · Endeavour Mining';
 var rh='<span class="rh">'+t('rh')+'</span>', pr='<span class="rh">'+t('prop')+'</span>';
 var facts=[
  [t('o_where'), esc(t(o.pays))+(o.ville?' · '+o.ville:''), o.ville?'':'<span class="rh">'+t('site_rh')+'</span>'],
  [t('o_contract'), esc(t('c_'+o.contrat)), ''],
  [t('o_exp'), esc(t('lv_'+o.niveau)), ''],
  [t('o_close'), fmt(CLOSE), pr],
  [t('o_rythm'), o.contrat==='stage'?(L==='fr'?'Horaires de bureau':'Office hours'):t('rythm_tbd'), o.contrat==='stage'?rh:rh],
  [t('o_pay'), t('pay_tbd'), rh],
  [t('o_lang'), esc(o.langues[L]), /^(Non|Not)/.test(o.langues[L])?rh:''],
  [t('o_rep'), esc(o.rattache[L]), /^(Non|Not)/.test(o.rattache[L])?rh:'']
 ];
 var steps=[['p1_h','p1_p'],['p2_h','p2_p'],['p3_h','p3_p'],['p4_h','p4_p']];
 root.innerHTML=
  '<div class="wrap"><div class="crumb"><a data-keep href="index.html#offres">← '+t('back')+'</a></div>'+
  '<div class="olayout"><div class="obody"><div class="ohead"><span class="tag">'+esc(t('m_'+o.metier))+'</span>'+(age(o)<=30?' <span class="tag new">'+t('new_')+'</span>':'')+
  '<h1>'+esc(o.t[L])+'</h1><div class="meta"><i>'+I.pin+esc(t(o.pays))+'</i><i>'+I.cal+t('pub')+' '+fmt(o.pub)+'</i></div>'+
  '<div class="facts">'+facts.map(function(f){return '<div class="fact"><small>'+f[0]+'</small><b>'+f[1]+'</b>'+f[2]+'</div>'}).join('')+'</div></div>'+
   '<h2>'+t('o_role')+'</h2><p>'+esc(o.resume[L])+'</p>'+
   '<h2>'+t('o_miss')+'</h2><ul>'+o.missions[L].map(function(m){return '<li>'+esc(m)+'</li>'}).join('')+'</ul>'+
   '<h2>'+t('o_prof')+'</h2><ul>'+o.profil[L].map(function(m){return '<li>'+esc(m)+'</li>'}).join('')+'</ul>'+
   '<h2>'+t('o_why')+'</h2><div class="why"><div><b>95\u00a0%</b>'+t('why1')+'</div><div><b>68\u00a0%</b>'+t('why2')+'</div><div><b>'+I.check.replace('<svg','<svg width="22" height="22"')+'</b>'+t('why3')+'</div><div><b>'+I.check.replace('<svg','<svg width="22" height="22"')+'</b>'+t('why4')+'</div></div>'+
   '<h2>'+t('o_proc')+'</h2><ol class="proc">'+steps.map(function(s){return '<li><div><b>'+t(s[0])+'</b><br>'+t(s[1])+'</div></li>'}).join('')+'</ol>'+
   '<p class="orig">'+(o.langOrig==='fr'?t('origfr'):t('orig'))+' <a href="'+o.src+'" target="_blank" rel="noopener">'+o.src.replace('https://','').slice(0,70)+'…</a></p>'+
  '</div><aside class="side apply" id="apply"></aside></div></div>'+
  '<div class="mbar"><div><b>'+esc(o.t[L])+'</b>'+t('mbar_close')+' '+fmtS(CLOSE)+'</div><button class="btn" id="openap">'+t('mbar_go')+'</button></div>';
 buildForm(document.getElementById('apply'), o);
 document.getElementById('openap').onclick=function(){var a=document.getElementById('apply');a.classList.add('open');document.body.style.overflow='hidden';a.scrollTop=0;var f=a.querySelector('input');if(f)f.focus()};
 applyI18nLinks(root);
}
function opt(a){return a.map(function(x){return '<option>'+esc(x)+'</option>'}).join('')}
function buildForm(box,o){
 var step=0, data={};
 box.innerHTML='<div class="closeap"><b>'+esc(o.t[L])+'</b><button aria-label="Fermer" id="xap">×</button></div>'+
  '<h3>'+t('apply_h')+'</h3><p class="dl">'+t('apply_p')(fmt(CLOSE))+'</p>'+
  '<div class="prog"><i class="on"></i><i></i><i></i></div>'+
  '<form novalidate>'+
  '<div class="scr on" data-s="0"><h4>1/3 · '+t('st_1')+'</h4>'+
   '<label class="f"><span>'+t('f_name')+'</span><input name="nom" autocomplete="name" required></label><div class="err" data-for="nom">'+t('req')+'</div>'+
   '<label class="f"><span>'+t('f_phone')+'</span><input name="tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="+225 07 00 00 00 00" required></label><div class="err" data-for="tel">'+t('req')+'</div>'+
   '<label class="f"><span>'+t('f_mail')+'</span><input name="mail" type="email" inputmode="email" autocomplete="email"></label>'+
   '<button type="button" class="btn" style="width:100%" data-next>'+t('next')+'</button></div>'+
  '<div class="scr" data-s="1"><h4>2/3 · '+t('st_2')+'</h4>'+
   '<label class="f"><span>'+t('f_country')+'</span><select name="pays">'+opt(t('pays_opts'))+'</select></label>'+
   '<label class="f"><span>'+t('f_years')+'</span><select name="annees">'+opt(t('y_opts'))+'</select></label>'+
   '<label class="f"><span>'+t('f_dip')+'</span><select name="diplome">'+opt(t('d_opts'))+'</select></label>'+
   '<label class="file"><input type="file" name="cv" accept=".pdf,.doc,.docx,image/*" hidden>'+I.bag.replace('<svg','<svg width="22" height="22"')+'<span data-cv>'+t('f_cv')+'</span></label><div class="err" data-for="cv">'+t('req')+'</div>'+
   '<div class="row" style="margin-top:14px"><button type="button" class="btn ghost" data-prev>'+t('prev')+'</button><button type="button" class="btn" data-next>'+t('next')+'</button></div></div>'+
  '<div class="scr" data-s="2"><h4>3/3 · '+t('st_3')+'</h4><div class="recap" id="recap"></div>'+
   '<label class="chk"><input type="checkbox" name="ok"><span>'+t('consent')+'</span></label><div class="err" data-for="ok">'+t('req')+'</div>'+
   '<div class="row"><button type="button" class="btn ghost" data-prev>'+t('prev')+'</button><button type="submit" class="btn">'+t('send')+'</button></div></div>'+
  '<div class="scr" data-s="3"><div class="done">'+I.check+'<h3>'+t('done_h')+'</h3><p class="note">'+t('done_p')+'</p></div></div>'+
  '</form>';
 var f=box.querySelector('form');
 function show(n){step=n;box.querySelectorAll('.scr').forEach(function(s){s.classList.toggle('on',+s.dataset.s===n)});box.querySelectorAll('.prog i').forEach(function(p,i){p.classList.toggle('on',i<=Math.min(n,2))});}
 function err(name,on){var e=box.querySelector('.err[data-for="'+name+'"]');if(e)e.style.display=on?'block':'none';return on}
 function valid(n){
  if(n===0){var a=err('nom',!f.nom.value.trim()), b=err('tel',f.tel.value.replace(/\D/g,'').length<8);return !(a||b)}
  if(n===1){return !err('cv',!f.cv.files.length && !f.dataset.demoCv)}
  if(n===2){return !err('ok',!f.ok.checked)}
  return true;
 }
 f.cv.onchange=function(){if(f.cv.files.length){box.querySelector('[data-cv]').textContent=t('f_cv_ok')+' '+f.cv.files[0].name;err('cv',false)}};
 box.querySelectorAll('[data-next]').forEach(function(b){b.onclick=function(){if(!valid(step))return;if(step===1){var cv=f.cv.files.length?f.cv.files[0].name:(f.dataset.demoCv||'');
  box.querySelector('#recap').innerHTML=[[t('f_name'),f.nom.value],[t('f_phone'),f.tel.value],[t('f_country'),f.pays.value],[t('f_years'),f.annees.value],['CV',cv]].map(function(r){return '<div><span>'+esc(r[0])+'</span><b>'+esc(r[1])+'</b></div>'}).join('')}
  show(step+1)}});
 box.querySelectorAll('[data-prev]').forEach(function(b){b.onclick=function(){show(step-1)}});
 f.onsubmit=function(e){e.preventDefault();if(valid(2))show(3)};
 var x=box.querySelector('#xap');if(x)x.onclick=function(){box.classList.remove('open');document.body.style.overflow=''};
 box._show=show; // pour les captures
}

function bind(){
 document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){setLang(b.dataset.l)}});
 var sf=document.getElementById('searchf');
 if(sf){
  var sel=sf.querySelector('select');
  sf.onsubmit=function(e){e.preventDefault();state.kw=sf.querySelector('input').value;state.pays=sel.value;renderJobs();document.getElementById('offres').scrollIntoView({behavior:'smooth'})};
 }
 document.querySelectorAll('.chip').forEach(function(c){c.onclick=function(){state.pays=c.dataset.f;var s=document.querySelector('#searchf select');if(s&&c.dataset.f!=='stage')s.value=c.dataset.f;renderJobs()}});
 document.querySelectorAll('[data-stages]').forEach(function(a){a.onclick=function(e){e.preventDefault();state.pays='stage';state.kw='';var i=document.querySelector('#searchf input');if(i)i.value='';renderJobs();document.getElementById('offres').scrollIntoView({behavior:'smooth'})}});
 var af=document.getElementById('alertf');
 if(af) af.onsubmit=function(e){e.preventDefault();if(!af.querySelector('input').value.trim()){af.querySelector('input').focus();return}document.getElementById('aok').style.display='block'};
}
function render(){
 applyI18n();
 var sel=document.querySelector('#searchf select');
 if(sel){var v=sel.value||'all';sel.innerHTML='<option value="all">'+t('all_pays')+'</option><option value="CI">'+t('CI')+'</option><option value="BF">'+t('BF')+'</option><option value="SN">'+t('SN')+'</option>';sel.value=v}
 var as=document.querySelector('#alertf select');
 if(as){as.innerHTML=['CI','BF','SN'].map(function(p){return '<option>'+t(p)+'</option>'}).join('')}
 renderJobs(); renderOffer(); if(window.renderBA) window.renderBA();
 bind();
}
document.addEventListener('DOMContentLoaded',render);
})();
