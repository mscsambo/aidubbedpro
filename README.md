<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EQ Visualizer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0f;
    --surface: #111118;
    --surface2: #1a1a24;
    --border: rgba(255,255,255,0.08);
    --accent: #00e5ff;
    --accent2: #bf5af2;
    --text: #f0f0f8;
    --muted: rgba(240,240,248,0.4);
    --bar1: #00e5ff;
    --bar2: #7b6eff;
    --bar3: #bf5af2;
    --bar4: #ff375f;
  }

  html, body { height: 100%; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Space Mono', monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 2rem 1rem 3rem;
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 700px;
    background: radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  .app { width: 100%; max-width: 860px; display: flex; flex-direction: column; gap: 2rem; }

  /* ── Header ── */
  header { display: flex; flex-direction: column; gap: 4px; }
  header h1 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(1.8rem, 5vw, 3rem);
    letter-spacing: -0.03em;
    background: linear-gradient(90deg, var(--accent) 0%, var(--accent2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  header p { font-size: 0.75rem; color: var(--muted); letter-spacing: 0.05em; }

  /* ── Tabs ── */
  .tabs { display: flex; gap: 2px; background: var(--surface); border-radius: 10px; padding: 3px; width: fit-content; }
  .tab {
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    background: transparent;
    color: var(--muted);
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.04em;
  }
  .tab.active { background: var(--surface2); color: var(--text); }

  /* ── Panels ── */
  .panel { display: none; }
  .panel.active { display: flex; flex-direction: column; gap: 1rem; }

  /* ── Drop zone ── */
  .drop-zone {
    border: 1.5px dashed var(--border);
    border-radius: 16px;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.25s;
    background: var(--surface);
    position: relative;
  }
  .drop-zone:hover, .drop-zone.dragging {
    border-color: var(--accent);
    background: rgba(0,229,255,0.03);
  }
  .drop-zone input { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%;  padding: 1.25rem 2rem;
    gap: 0.5rem; }
  .drop-icon { font-size: 2.5rem; opacity: 0.5; }
  .drop-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; }
  .drop-sub { font-size: 0.7rem; color: var(--muted); }

  /* ── YouTube input ── */
  .yt-row { display: flex; gap: 10px; }
  .yt-row input {
    flex: 1;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px 16px;
    color: var(--text);
    font-family: 'Space Mono', monospace;
    font-size: 0.8rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .yt-row input:focus { border-color: var(--accent); }
  .yt-row input::placeholder { color: var(--muted); }
  .btn {
    background: var(--accent);
    color: #000;
    border: none;
    border-radius: 10px;
    padding: 12px 20px;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
    white-space: nowrap;
  }
  .btn:hover { opacity: 0.85; }
  .btn.secondary {
    background: var(--surface2);
    color: var(--text);
    border: 1px solid var(--border);
  }

  .yt-note {
    font-size: 0.68rem;
    color: var(--muted);
    background: rgba(255,200,0,0.06);
    border: 1px solid rgba(255,200,0,0.15);
    border-radius: 8px;
    padding: 10px 14px;
    line-height: 1.6;
  }

  /* ── Visualizer canvas ── */
  .viz-wrap {
    background: var(--surface);
    border-radius: 16px;
    border: 1px solid var(--border);
    overflow: hidden;
    position: relative;
  }
  #eqCanvas { display: block; width: 100%; height: 220px; }

  .viz-label {
    position: absolute;
    top: 12px;
    left: 16px;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    color: var(--muted);
  }

  /* ── Player bar ── */
  .player {
    background: var(--surface);
    border-radius: 16px;
    border: 1px solid var(--border);
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .player-meta { display: flex; justify-content: space-between; align-items: center; }
  .track-name { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 70%; }
  .track-time { font-size: 0.7rem; color: var(--muted); }

  .progress-wrap { position: relative; height: 4px; background: var(--surface2); border-radius: 2px; cursor: pointer; }
  .progress-fill { height: 100%; border-radius: 2px; background: linear-gradient(90deg, var(--accent), var(--accent2)); width: 0%; transition: width 0.1s linear; }

  .controls { display: flex; align-items: center; gap: 12px; }
  .ctrl-btn {
    background: none;
    border: none;
    color: var(--muted);
    cursor: pointer;
    font-size: 1.1rem;
    padding: 4px;
    transition: color 0.15s;
    display: flex; align-items: center;
  }
  .ctrl-btn:hover { color: var(--text); }
  .ctrl-btn.play {
    width: 40px; height: 40px;
    border-radius: 50%;
    background: var(--accent);
    color: #000;
    font-size: 1rem;
    justify-content: center;
    flex-shrink: 0;
  }
  .ctrl-btn.play:hover { opacity: 0.85; }
  .vol-wrap { display: flex; align-items: center; gap: 8px; margin-left: auto; }
  .vol-wrap span { font-size: 0.9rem; }
  .vol-wrap input[type=range] { width: 80px; accent-color: var(--accent); cursor: pointer; }

  /* ── YouTube embed ── */
  .yt-embed-wrap { border-radius: 16px; overflow: hidden; border: 1px solid var(--border); background: #000; }
  .yt-embed-wrap iframe { display: block; width: 100%; aspect-ratio: 16/9; border: none; }
  .yt-eq-note {
    font-size: 0.68rem;
    color: var(--muted);
    padding: 10px 14px;
    text-align: center;
    background: var(--surface);
    letter-spacing: 0.03em;
  }

  /* ── EQ Band sliders ── */
  .eq-bands {
    background: var(--surface);
    border-radius: 16px;
    border: 1px solid var(--border);
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .eq-bands-title { font-size: 0.65rem; letter-spacing: 0.1em; color: var(--muted); }
  .bands-row { display: flex; gap: 8px; align-items: flex-end; }
  .band-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .band-col input[type=range] {
    writing-mode: vertical-lr;
    direction: rtl;
    width: 24px;
    height: 80px;
    accent-color: var(--accent);
    cursor: pointer;
  }
  .band-col label { font-size: 0.6rem; color: var(--muted); }
  .band-col .band-val { font-size: 0.6rem; color: var(--accent); }
  .presets-row { display: flex; gap: 6px; flex-wrap: wrap; }
  .preset { padding: 5px 12px; border-radius: 99px; border: 1px solid var(--border); background: transparent; color: var(--muted); font-family: 'Space Mono', monospace; font-size: 0.65rem; cursor: pointer; transition: all 0.15s; }
  .preset:hover { border-color: var(--accent); color: var(--accent); }
  .preset.active { background: var(--accent); color: #000; border-color: var(--accent); }

  /* ── Hidden ── */
  .hidden { display: none !important; }

  /* ── Responsive ── */
  @media (max-width: 520px) {
    .bands-row { gap: 4px; }
    .band-col input[type=range] { height: 60px; }
    .yt-row { flex-direction: column; }
  }
</style>
</head>
<body>
<div class="app">
  <header>
    <h1>EQ Visualizer</h1>
    <p>UPLOAD A FILE OR STREAM FROM YOUTUBE</p>
  </header>

  <!-- Tabs -->
  <div class="tabs">
    <button class="tab active" data-tab="file">&#x25B2; FILE UPLOAD</button>
    <button class="tab" data-tab="youtube">&#x25B6; YOUTUBE</button>
  </div>

  <!-- File panel -->
  <div class="panel active" id="panel-file">
    <div class="drop-zone" id="dropZone">
      <input type="file" id="fileInput" accept="audio/*,video/*">
      <div class="drop-icon">&#9836;</div>
      <div class="drop-title">Drop your file here</div>
      <div class="drop-sub">MP3 · WAV · OGG · MP4 · WEBM · M4A</div>
    </div>
  </div>

  <!-- YouTube panel -->
  <div class="panel" id="panel-youtube">
    <div class="yt-row">
      <input type="text" id="ytInput" placeholder="https://www.youtube.com/watch?v=..." />
      <button class="btn" id="ytLoad">LOAD</button>
    </div>
    <div class="yt-note">
      &#9888;&#xFE0F; Due to browser security (CORS), audio from YouTube cannot be analysed directly.<br>
      The equalizer will run in <strong>simulated mode</strong> while YouTube plays in the embedded player.
    </div>
    <div class="yt-embed-wrap hidden" id="ytWrap">
      <iframe id="ytFrame" allowfullscreen allow="autoplay"></iframe>
      <div class="yt-eq-note">&#9673; Equalizer running in simulated mode for YouTube content</div>
    </div>
  </div>

  <!-- Visualizer -->
  <div class="viz-wrap">
    <div class="viz-label">SPECTRUM</div>
    <canvas id="eqCanvas"></canvas>
  </div>

  <!-- Player (file mode) -->
  <div class="player hidden" id="player">
    <div class="player-meta">
      <div class="track-name" id="trackName">—</div>
      <div class="track-time" id="trackTime">0:00 / 0:00</div>
    </div>
    <div class="progress-wrap" id="progressWrap">
      <div class="progress-fill" id="progressFill"></div>
    </div>
    <div class="controls">
      <button class="ctrl-btn play" id="playBtn">&#9654;</button>
      <div class="vol-wrap">
        <span>&#128266;</span>
        <input type="range" id="volSlider" min="0" max="1" step="0.01" value="0.8">
      </div>
    </div>
  </div>

  <!-- EQ Bands -->
  <div class="eq-bands">
    <div class="eq-bands-title">EQUALIZER BANDS</div>
    <div class="bands-row" id="bandsRow"></div>
    <div class="presets-row" id="presetsRow"></div>
  </div>
</div>

<audio id="audioEl" crossorigin="anonymous"></audio>

<script>
/* ── Audio engine ── */
let actx, analyser, source, gainNode;
let filters = [];
let isPlaying = false;
let simMode = false;
let simPhase = [];
let animFrame;

const audio = document.getElementById('audioEl');
const canvas = document.getElementById('eqCanvas');
const ctx = canvas.getContext('2d');

/* ── Band config ── */
const BANDS = [
  { freq: 60,   label: '60Hz',  type: 'lowshelf'  },
  { freq: 170,  label: '170',   type: 'peaking'   },
  { freq: 310,  label: '310',   type: 'peaking'   },
  { freq: 600,  label: '600',   type: 'peaking'   },
  { freq: 1000, label: '1K',    type: 'peaking'   },
  { freq: 3000, label: '3K',    type: 'peaking'   },
  { freq: 6000, label: '6K',    type: 'peaking'   },
  { freq: 12000,label: '12K',   type: 'peaking'   },
  { freq: 14000,label: '14K',   type: 'peaking'   },
  { freq: 16000,label: '16K',   type: 'highshelf' },
];

const PRESETS = {
  Flat:   [0,0,0,0,0,0,0,0,0,0],
  Bass:   [8,6,4,2,0,-1,-2,-2,-3,-3],
  Vocal:  [-2,-1,0,2,4,4,2,0,-1,-2],
  Treble: [-3,-2,-1,0,1,3,5,6,7,7],
  Pop:    [3,2,1,-1,-2,-1,1,2,3,3],
  Club:   [0,0,5,4,3,3,2,0,0,0],
  Rock:   [5,4,3,2,0,-1,-1,2,4,5],
};

let gainValues = [...PRESETS.Flat];
const sliderEls = [];

/* ── Build EQ sliders ── */
function buildBands() {
  const row = document.getElementById('bandsRow');
  BANDS.forEach((b, i) => {
    simPhase.push(Math.random() * Math.PI * 2);
    const col = document.createElement('div');
    col.className = 'band-col';

    const val = document.createElement('div');
    val.className = 'band-val';
    val.textContent = '0';

    const inp = document.createElement('input');
    inp.type = 'range';
    inp.min = -12; inp.max = 12; inp.step = 1; inp.value = 0;
    inp.addEventListener('input', () => {
      gainValues[i] = +inp.value;
      val.textContent = gainValues[i] > 0 ? '+' + gainValues[i] : gainValues[i];
      if (filters[i]) filters[i].gain.value = gainValues[i];
      clearActivePreset();
    });

    const lbl = document.createElement('label');
    lbl.textContent = b.label;

    col.appendChild(val);
    col.appendChild(inp);
    col.appendChild(lbl);
    row.appendChild(col);
    sliderEls.push({ inp, val });
  });

  /* Preset buttons */
  const prow = document.getElementById('presetsRow');
  Object.keys(PRESETS).forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'preset' + (name === 'Flat' ? ' active' : '');
    btn.textContent = name;
    btn.dataset.name = name;
    btn.addEventListener('click', () => applyPreset(name));
    prow.appendChild(btn);
  });
}

function applyPreset(name) {
  gainValues = [...PRESETS[name]];
  gainValues.forEach((g, i) => {
    sliderEls[i].inp.value = g;
    sliderEls[i].val.textContent = g > 0 ? '+' + g : g;
    if (filters[i]) filters[i].gain.value = g;
  });
  document.querySelectorAll('.preset').forEach(b => b.classList.toggle('active', b.dataset.name === name));
}

function clearActivePreset() {
  document.querySelectorAll('.preset').forEach(b => b.classList.remove('active'));
}

/* ── Web Audio setup ── */
function initAudio() {
  if (actx) return;
  actx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = actx.createAnalyser();
  analyser.fftSize = 2048;
  analyser.smoothingTimeConstant = 0.82;

  gainNode = actx.createGain();
  gainNode.gain.value = 0.8;

  /* Build filter chain */
  BANDS.forEach((b, i) => {
    const f = actx.createBiquadFilter();
    f.type = b.type;
    f.frequency.value = b.freq;
    f.gain.value = gainValues[i];
    if (b.type === 'peaking') f.Q.value = 1.4;
    filters.push(f);
  });

  /* Chain: source → filters → gain → analyser → destination */
  source = actx.createMediaElementSource(audio);
  let node = source;
  filters.forEach(f => { node.connect(f); node = f; });
  node.connect(gainNode);
  gainNode.connect(analyser);
  analyser.connect(actx.destination);
}

/* ── Canvas draw ── */
function resizeCanvas() {
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = canvas.offsetHeight * window.devicePixelRatio;
}

function drawEq(dataArray) {
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const barCount = 64;
  const gap = 3 * window.devicePixelRatio;
  const barW = (W - gap * (barCount + 1)) / barCount;

  for (let i = 0; i < barCount; i++) {
    const value = dataArray[i] / 255;
    const barH = value * H * 0.92;
    const x = gap + i * (barW + gap);
    const y = H - barH;

    /* Color gradient per bar height */
    const t = value;
    const r1 = 0, g1 = 229, b1 = 255;   /* cyan */
    const r2 = 191, g2 = 90, b2 = 242;  /* purple */
    const r3 = 255, g3 = 55, b3 = 95;   /* red for peaks */

    let r, g, b;
    if (t < 0.6) {
      const p = t / 0.6;
      r = r1 + (r2 - r1) * p;
      g = g1 + (g2 - g1) * p;
      b = b1 + (b2 - b1) * p;
    } else {
      const p = (t - 0.6) / 0.4;
      r = r2 + (r3 - r2) * p;
      g = g2 + (g3 - g2) * p;
      b = b2 + (b3 - b2) * p;
    }

    const grad = ctx.createLinearGradient(0, y, 0, H);
    grad.addColorStop(0, `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},0.95)`);
    grad.addColorStop(1, `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},0.3)`);
    ctx.fillStyle = grad;

    /* Rounded top */
    const radius = Math.min(barW / 2, 3 * window.devicePixelRatio);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + barW - radius, y);
    ctx.quadraticCurveTo(x + barW, y, x + barW, y + radius);
    ctx.lineTo(x + barW, H);
    ctx.lineTo(x, H);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();

    /* Peak dot */
    if (value > 0.7) {
      ctx.fillStyle = `rgba(255,255,255,0.7)`;
      ctx.fillRect(x, y - 3 * window.devicePixelRatio, barW, 2 * window.devicePixelRatio);
    }
  }
}

function animate() {
  animFrame = requestAnimationFrame(animate);
  resizeCanvas();

  if (simMode) {
    /* Simulated FFT for YouTube */
    simPhase = simPhase.map((p, i) => p + 0.03 + i * 0.003);
    const fake = new Uint8Array(64);
    for (let i = 0; i < 64; i++) {
      const env = Math.exp(-i / 20) * 0.7 + 0.1;
      const v = env * (
        Math.sin(simPhase[i % simPhase.length]) * 0.45 +
        Math.sin(simPhase[i % simPhase.length] * 2.1 + 1) * 0.3 +
        Math.sin(simPhase[i % simPhase.length] * 0.5 + 2) * 0.25
      );
      fake[i] = Math.max(0, Math.min(255, Math.round((v + 0.5) * 200)));
    }
    drawEq(fake);
    return;
  }

  if (!analyser) return;
  const data = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(data);
  drawEq(data);
}

/* ── File upload ── */
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');

function loadFile(file) {
  const url = URL.createObjectURL(file);
  audio.src = url;
  simMode = false;
  document.getElementById('trackName').textContent = file.name.replace(/\.[^/.]+$/, '');
  document.getElementById('player').classList.remove('hidden');
  initAudio();
  audio.play();
  isPlaying = true;
  document.getElementById('playBtn').innerHTML = '&#9646;&#9646;';
}

fileInput.addEventListener('change', e => { if (e.target.files[0]) loadFile(e.target.files[0]); });
dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('dragging'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragging'));
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('dragging');
  const file = e.dataTransfer.files[0];
  if (file) loadFile(file);
});

/* ── Player controls ── */
document.getElementById('playBtn').addEventListener('click', () => {
  if (!audio.src) return;
  if (actx && actx.state === 'suspended') actx.resume();
  if (isPlaying) { audio.pause(); document.getElementById('playBtn').innerHTML = '&#9654;'; }
  else { audio.play(); document.getElementById('playBtn').innerHTML = '&#9646;&#9646;'; }
  isPlaying = !isPlaying;
});

document.getElementById('volSlider').addEventListener('input', e => {
  if (gainNode) gainNode.gain.value = +e.target.value;
  else audio.volume = +e.target.value;
});

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  const fmt = s => `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
  document.getElementById('trackTime').textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
});

document.getElementById('progressWrap').addEventListener('click', e => {
  if (!audio.duration) return;
  const r = e.currentTarget.getBoundingClientRect();
  audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
});

/* ── YouTube ── */
document.getElementById('ytLoad').addEventListener('click', loadYT);
document.getElementById('ytInput').addEventListener('keydown', e => { if (e.key === 'Enter') loadYT(); });

function loadYT() {
  const raw = document.getElementById('ytInput').value.trim();
  const id = extractYTId(raw);
  if (!id) { alert('Could not find a YouTube video ID in that URL.'); return; }
  const frame = document.getElementById('ytFrame');
  frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  document.getElementById('ytWrap').classList.remove('hidden');
  simMode = true;
  document.getElementById('player').classList.add('hidden');
}

function extractYTId(url) {
  const patterns = [
    /(?:v=|\/embed\/|\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/,
    /^([A-Za-z0-9_-]{11})$/,
  ];
  for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
  return null;
}

/* ── Tabs ── */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
    if (tab.dataset.tab === 'youtube') {
      simMode = true;
    } else {
      simMode = false;
    }
  });
});

/* ── Init ── */
buildBands();
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
animate();
</script>
</body>
</html>
