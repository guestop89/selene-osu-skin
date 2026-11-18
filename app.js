'use strict';
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const colors=[[255,255,255],[255,255,255],[255,255,255]];
const loadImage=src=>new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=()=>reject(new Error('Image indisponible : '+src));im.src=src+(src.startsWith('data:')?'':(src.includes('?')?'&':'?')+'v=1.2-short')});
const volume=document.getElementById('volume');
let soundVolume=.45,lastAudio=null,toastTimer;
const sounds={};
for(const name of ['normal-hitnormal','soft-hitnormal','drum-hitnormal']){const a=new Audio(`assets/${name}.wav`);a.preload='auto';sounds[name]=a}
function toast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2500)}
function playSound(name){if(lastAudio){lastAudio.pause();lastAudio.currentTime=0}const a=sounds[name];if(!a)return;lastAudio=a;a.volume=soundVolume;a.currentTime=0;a.play().catch(()=>toast('Votre navigateur a bloqué le son. Réessayez avec le bouton.'))}
volume.addEventListener('input',()=>{soundVolume=Number(volume.value)/100;document.getElementById('volume-value').value=`${volume.value} %`});
document.querySelectorAll('.sound-button').forEach((button,index)=>button.addEventListener('click',()=>{document.querySelectorAll('.sound-button').forEach(b=>b.classList.remove('playing'));button.classList.add('playing');playSound(button.dataset.sound);document.getElementById('sound-status').textContent=`${button.textContent.replace('▶','').trim()} — vrai hitsound du pack.`;document.querySelector('.wave-number').innerHTML=`0${index+1}<span>/03</span>`;const wave=document.querySelector('.wave-visual');wave.classList.remove('is-playing');void wave.offsetWidth;wave.classList.add('is-playing');setTimeout(()=>button.classList.remove('playing'),800)}));
fetch('assets/waveform.json').then(r=>{if(!r.ok)throw Error();return r.json()}).then(peaks=>{const el=document.getElementById('wave-bars');peaks.forEach(p=>{const bar=document.createElement('i');bar.style.height=`${Math.max(6,p*400)}px`;el.appendChild(bar)})}).catch(()=>{document.querySelector('.wave-visual').hidden=true});

let comboCount=438,comboAtlas;
const comboCanvas=document.getElementById('combo');
function drawCombo(){if(!comboAtlas)return;comboCanvas.width=Math.max(500,String(comboCount).length*64+266);const ctx=comboCanvas.getContext('2d');ctx.clearRect(0,0,comboCanvas.width,100);let x=0;for(const d of String(comboCount)){ctx.drawImage(comboAtlas,Number(d)*66,0,66,100,x,0,66,100);x+=64}ctx.drawImage(comboAtlas,660,0,266,100,x,0,266,100);comboCanvas.setAttribute('aria-label',`${comboCount} Combo, valeur illustrative`)}
loadImage('assets/combo-atlas.png').then(im=>{comboAtlas=im;drawCombo()}).catch(()=>{});
Promise.all([loadImage('assets/hitcircle.png?v=1.5'),loadImage('assets/hitcircleoverlay.png?v=1.5')]).then(([base,overlay])=>{document.querySelectorAll('.note-art').forEach(canvas=>{const color=colors[Number(canvas.parentElement.dataset.color)];const ctx=canvas.getContext('2d');ctx.drawImage(base,0,0,256,256);const pixels=ctx.getImageData(0,0,256,256);for(let i=0;i<pixels.data.length;i+=4){for(let c=0;c<3;c++)pixels.data[i+c]=Math.round(pixels.data[i+c]*color[c]/255)}ctx.putImageData(pixels,0,0);ctx.drawImage(overlay,0,0,256,256)})}).catch(()=>toast('Certains aperçus n’ont pas pu être chargés. Rechargez la page.'));
let hitCount=0;
document.querySelectorAll('.hitobject').forEach(button=>button.addEventListener('click',()=>{playSound('normal-hitnormal');comboCount++;hitCount++;drawCombo();const counter=document.querySelector('.demo-combo');counter.classList.remove('combo-bounce');void counter.offsetWidth;counter.classList.add('combo-bounce');button.classList.remove('hit');void button.offsetWidth;button.classList.add('hit');const judge=document.createElement('span');judge.className=`judgement ${hitCount%4===0?'blue':'green'}`;judge.style.left=button.offsetLeft+'px';judge.style.top=button.offsetTop+'px';judge.setAttribute('aria-hidden','true');button.parentElement.appendChild(judge);setTimeout(()=>judge.remove(),720)}));

// Real 60 fps health frames from the skin. The browser controls only the preview.
let healthFrames=[];
fetch('assets/health.json?v=1.5').then(r=>{if(!r.ok)throw Error();return r.json()}).then(data=>Promise.all(data.map(src=>loadImage('data:image/png;base64,'+src)))).then(images=>{healthFrames=images;cancelAnimationFrame(healthRequest);drawHealth(0)}).catch(()=>{});
const healthCanvases=[...document.querySelectorAll('.health-fill')];
let lastHealth=-1,healthRequest;
function drawHealth(time) {
 if (!healthFrames.length) return;
 const index = reducedMotion.matches ? 0 : Math.floor(time * .06) % healthFrames.length;
 if (index !== lastHealth) {
  lastHealth = index;
  for (const canvas of healthCanvases) {
   const ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.drawImage(healthFrames[index], 0, 0, canvas.width, canvas.height);
  }
 }
 if (!reducedMotion.matches && !document.hidden) healthRequest = requestAnimationFrame(drawHealth);
}
document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(healthRequest);if(!document.hidden)drawHealth(performance.now())});
reducedMotion.addEventListener('change',()=>{cancelAnimationFrame(healthRequest);lastHealth=-1;drawHealth(performance.now())});

Promise.all([loadImage('assets/cursor.png?v=1.5'), loadImage('assets/cursortrail.png?v=1.5')]).then(([cursor, trail]) => {
 for (const id of ['playfield', 'cursor-lab']) {
  const container = document.getElementById(id);
  const canvas = container.querySelector('.cursor-canvas');
  const context = canvas.getContext('2d');
  let pointer, frame, points = [];
  function render(time) {
   frame = undefined;
   const bounds = container.getBoundingClientRect();
   const ratio = Math.min(2, window.devicePixelRatio || 1);
   canvas.width = Math.round(bounds.width * ratio);
   canvas.height = Math.round(bounds.height * ratio);
   context.setTransform(ratio, 0, 0, ratio, 0, 0);
   points = reducedMotion.matches ? [] : points.filter(point => time - point.time < 150);
   if (pointer && !reducedMotion.matches) points.push({...pointer, time});
   for (const point of points) {
    context.globalAlpha = (1 - (time - point.time) / 150) * .5;
    context.drawImage(trail, point.x - 20, point.y - 20, 40, 40);
   }
   context.globalAlpha = 1;
   if (pointer) context.drawImage(cursor, pointer.x - 40, pointer.y - 40, 80, 80);
   if (pointer || points.length) frame = requestAnimationFrame(render);
   else container.classList.remove('pointer-active');
  }
  container.addEventListener('pointermove', event => {
   if (event.pointerType === 'touch') return;
   const bounds = container.getBoundingClientRect();
   pointer = {x:event.clientX - bounds.left, y:event.clientY - bounds.top};
   container.classList.add('pointer-active');
   if (frame === undefined) frame = requestAnimationFrame(render);
  });
  container.addEventListener('pointerleave', () => { pointer = undefined; });
 }
}).catch(() => {});

const dialog=document.getElementById('overview-dialog');
for(const id of ['open-overview','overview-image'])document.getElementById(id).addEventListener('click',()=>dialog.showModal());
document.getElementById('close-overview').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close()}});
