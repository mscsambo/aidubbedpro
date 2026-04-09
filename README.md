<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EQ Visualizer Pro</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0f;
    --surface: #111118;
    --surface2: #1a1a24;
    --surface3: #14141d;
    --border: rgba(255,255,255,0.08);
    --accent: #00e5ff;
    --accent2: #bf5af2;
    --text: #f0f0f8;
    --muted: rgba(240,240,248,0.55);
    --danger: #ff5a79;
    --success: #32d296;
    --warning: #ffbf47;
  }

  html, body { height: 100%; }

  body {
    background:
      radial-gradient(circle at top, rgba(0,229,255,0.08), transparent 28%),
      linear-gradient(180deg, #0a0a0f 0%, #09090d 100%);
    color: var(--text);
    font-family: 'Space Mono', monospace;
    min-height: 100vh;
    padding: 24px;
    overflow-x: hidden;
  }

  .app {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 2.05fr) minmax(320px, 0.95fr);
    gap: 24px;
    align-items: start;
  }

  .main-col, .side-col {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card {
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    border: 1px solid var(--border);
    border-radius: 20px;
    box-shadow: 0 18px 48px rgba(0,0,0,0.28);
    backdrop-filter: blur(8px);
  }

  header.card {
    padding: 24px 26px;
  }

  header .top-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;
  }

  .title-wrap h1 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(2rem, 4vw, 3.6rem);
    letter-spacing: -0.04em;
    background: linear-gradient(90deg, var(--accent) 0%, var(--accent2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .title-wrap p {
    margin-top: 6px;
    color: var(--muted);
    font-size: 0.82rem;
    letter-spacing: 0.08em;
  }

  .header-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .btn {
    background: var(--accent);
    color: #000;
    border: none;
    border-radius: 12px;
    padding: 12px 16px;
    font-family: 'Space Mono', monospace;
    font-size: 0.76rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s, opacity 0.2s, border-color 0.2s, background 0.2s;
    white-space: nowrap;
  }

  .btn:hover { opacity: 0.9; transform: translateY(-1px); }
  .btn:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }
  .btn.secondary {
    background: var(--surface2);
    color: var(--text);
    border: 1px solid var(--border);
  }
  .btn.warning {
    background: var(--warning);
    color: #121212;
  }
  .btn.ghost {
    background: transparent;
    color: var(--muted);
    border: 1px solid var(--border);
  }

  .workspace.card {
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .tabs {
    display: flex;
    gap: 3px;
    background: var(--surface);
    border-radius: 12px;
    padding: 4px;
    width: fit-content;
  }

  .tab {
    padding: 10px 18px;
    border-radius: 10px;
    border: none;
    background: transparent;
    color: var(--muted);
    font-family: 'Space Mono', monospace;
    font-size: 0.76rem;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.04em;
  }

  .tab.active { background: var(--surface2); color: var(--text); }

  .panel { display: none; }
  .panel.active { display: block; }

  .drop-zone {
    border: 1.5px dashed var(--border);
    border-radius: 18px;
    min-height: 180px;
    padding: 2rem;
    display: grid;
    place-items: center;
    text-align: center;
    background: var(--surface3);
    position: relative;
    cursor: pointer;
    transition: all 0.25s;
  }

  .drop-zone:hover, .drop-zone.dragging {
    border-color: var(--accent);
    background: rgba(0,229,255,0.04);
  }

  .drop-zone input { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; }
  .drop-inner { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .drop-icon { font-size: 2.6rem; opacity: 0.55; }
  .drop-title { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; }
  .drop-sub { font-size: 0.72rem; color: var(--muted); }

  .yt-row { display: grid; grid-template-columns: 1fr auto; gap: 10px; }
  .yt-row input {
    width: 100%;
    background: var(--surface3);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 14px 16px;
    color: var(--text);
    font-family: 'Space Mono', monospace;
    font-size: 0.8rem;
    outline: none;
  }
  .yt-row input:focus { border-color: var(--accent); }
  .yt-row input::placeholder { color: var(--muted); }

  .yt-note, .status-box {
    font-size: 0.72rem;
    color: var(--muted);
    background: rgba(255,200,0,0.07);
    border: 1px solid rgba(255,200,0,0.16);
    border-radius: 12px;
    padding: 12px 14px;
    line-height: 1.65;
  }

  .status-box {
    background: rgba(0,229,255,0.06);
    border-color: rgba(0,229,255,0.14);
    color: #d6fbff;
  }

  .status-box.error {
    background: rgba(255,55,95,0.08);
    border-color: rgba(255,55,95,0.16);
    color: #ffd5de;
  }

  .status-box.success {
    background: rgba(50,210,150,0.08);
    border-color: rgba(50,210,150,0.18);
    color: #d8ffef;
  }

  .yt-embed-wrap { border-radius: 18px; overflow: hidden; border: 1px solid var(--border); background: #000; }
  .yt-embed-wrap iframe { display: block; width: 100%; aspect-ratio: 16/9; border: none; }
  .yt-eq-note {
    font-size: 0.7rem;
    color: var(--muted);
    padding: 10px 14px;
    text-align: center;
    background: var(--surface);
  }

  .viz-wrap {
    position: relative;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    min-height: 360px;
  }

  #eqCanvas { display: block; width: 100%; height: 360px; }
  .viz-label {
    position: absolute;
    top: 14px;
    left: 18px;
    font-size: 0.68rem;
    letter-spacing: 0.11em;
    color: var(--muted);
    z-index: 2;
  }

  .player.card {
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .player-meta { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
  .track-name {
    font-family: 'Syne', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 72%;
  }
  .track-time { font-size: 0.72rem; color: var(--muted); }

  .progress-wrap {
    position: relative;
    height: 8px;
    background: var(--surface2);
    border-radius: 999px;
    cursor: pointer;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    width: 0%;
    transition: width 0.1s linear;
  }

  .controls-grid {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    gap: 12px;
    align-items: center;
  }

  .ctrl-btn {
    background: none;
    border: 1px solid var(--border);
    color: var(--muted);
    cursor: pointer;
    font-size: 1rem;
    padding: 10px 12px;
    transition: color 0.15s, border-color 0.15s, background 0.15s;
    display: flex; align-items: center; justify-content: center;
    border-radius: 12px;
    min-width: 44px;
  }
  .ctrl-btn:hover { color: var(--text); border-color: rgba(255,255,255,0.16); }
  .ctrl-btn.play {
    background: var(--accent);
    color: #000;
    border-color: transparent;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .ctrl-btn.play:hover { opacity: 0.88; }

  .vol-wrap { display: flex; align-items: center; gap: 8px; justify-self: end; }
  .vol-wrap span { font-size: 0.9rem; }
  .vol-wrap input[type=range] { width: 120px; accent-color: var(--accent); cursor: pointer; }

  .side-card {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .card-title {
    font-size: 0.72rem;
    letter-spacing: 0.11em;
    color: var(--muted);
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .mini-stat {
    padding: 14px;
    border-radius: 14px;
    background: var(--surface3);
    border: 1px solid var(--border);
  }

  .mini-stat strong {
    display: block;
    font-size: 1rem;
    color: var(--text);
    margin-bottom: 6px;
  }

  .mini-stat span {
    font-size: 0.68rem;
    line-height: 1.5;
    color: var(--muted);
  }

  .eq-bands.card {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .bands-row {
    display: grid;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    gap: 10px;
    align-items: end;
  }

  .band-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    background: var(--surface3);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 12px 6px 10px;
    min-height: 180px;
  }

  .band-col input[type=range] {
    writing-mode: vertical-lr;
    direction: rtl;
    width: 26px;
    height: 95px;
    accent-color: var(--accent);
    cursor: pointer;
  }
  .band-col label { font-size: 0.62rem; color: var(--muted); }
  .band-col .band-val { font-size: 0.64rem; color: var(--accent); min-height: 1em; }

  .presets-row, .export-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .preset {
    padding: 7px 12px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    font-family: 'Space Mono', monospace;
    font-size: 0.68rem;
    cursor: pointer;
    transition: all 0.15s;
  }
  .preset:hover { border-color: var(--accent); color: var(--accent); }
  .preset.active { background: var(--accent); color: #000; border-color: var(--accent); }

  .hidden { display: none !important; }

  .small-note {
    font-size: 0.68rem;
    line-height: 1.65;
    color: var(--muted);
  }

  .progress-export {
    width: 100%;
    height: 9px;
    background: var(--surface2);
    border-radius: 999px;
    overflow: hidden;
  }
  .progress-export > div {
    width: 0%;
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    transition: width 0.2s ease;
  }

  @media (max-width: 1100px) {
    .app { grid-template-columns: 1fr; }
    .side-col { order: 3; }
    .main-col { order: 1; }
  }

  @media (max-width: 760px) {
    body { padding: 14px; }
    .workspace.card, .player.card, .side-card, .eq-bands.card, header.card { padding: 16px; }
    .yt-row { grid-template-columns: 1fr; }
    .bands-row { grid-template-columns: repeat(5, minmax(0, 1fr)); }
    .controls-grid { grid-template-columns: auto auto 1fr; }
    .vol-wrap { grid-column: 1 / -1; justify-self: start; }
    #eqCanvas, .viz-wrap { min-height: 260px; height: 260px; }
    .info-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>
<div class="app">
  <div class="main-col">
    <header class="card">
      <div class="top-row">
        <div class="title-wrap">
          <h1>EQ Visualizer</h1>
          <p>KEEP YOUR CURRENT APP — NOW UPGRADED FOR DESKTOP + EXPORT</p>
        </div>
        <div class="header-actions">
          <button class="btn secondary" id="flatBtn">RESET FLAT</button>
          <button class="btn ghost" id="restartBtn">RESTART</button>
        </div>
      </div>
    </header>

    <section class="workspace card">
      <div class="tabs">
        <button class="tab active" data-tab="file">▲ FILE UPLOAD</button>
        <button class="tab" data-tab="youtube">▶ YOUTUBE</button>
      </div>

      <div class="panel active" id="panel-file">
        <div class="drop-zone" id="dropZone">
          <input type="file" id="fileInput" accept="audio/*,video/*">
          <div class="drop-inner">
            <div class="drop-icon">♫</div>
            <div class="drop-title">Drop your file here</div>
            <div class="drop-sub">MP3 · WAV · OGG · MP4 · WEBM · M4A</div>
          </div>
        </div>
      </div>

      <div class="panel" id="panel-youtube">
        <div class="yt-row">
          <input type="text" id="ytInput" placeholder="https://www.youtube.com/watch?v=..." />
          <button class="btn" id="ytLoad">LOAD</button>
        </div>
        <div class="yt-note">
          ⚠️ Due to browser security, direct YouTube audio processing is not allowed. The visualizer and EQ run in simulated mode while the embedded player plays the video.
        </div>
        <div class="yt-embed-wrap hidden" id="ytWrap">
          <iframe id="ytFrame" allowfullscreen allow="autoplay"></iframe>
          <div class="yt-eq-note">● Equalizer running in simulated mode for YouTube content</div>
        </div>
      </div>

      <div class="viz-wrap">
        <div class="viz-label">SPECTRUM</div>
        <canvas id="eqCanvas"></canvas>
      </div>
    </section>

    <section class="player card hidden" id="player">
      <div class="player-meta">
        <div class="track-name" id="trackName">—</div>
        <div class="track-time" id="trackTime">0:00 / 0:00</div>
      </div>

      <div class="progress-wrap" id="progressWrap">
        <div class="progress-fill" id="progressFill"></div>
      </div>

      <div class="controls-grid">
        <button class="ctrl-btn play" id="playBtn">▶</button>
        <button class="ctrl-btn" id="stopBtn">■</button>
        <div></div>
        <div class="vol-wrap">
          <span>🔊</span>
          <input type="range" id="volSlider" min="0" max="1" step="0.01" value="0.8">
        </div>
      </div>
    </section>
  </div>

  <div class="side-col">
    <section class="card side-card">
      <div class="card-title">SESSION INFO</div>
      <div class="info-grid">
        <div class="mini-stat">
          <strong id="modeStat">FILE</strong>
          <span>Current source mode</span>
        </div>
        <div class="mini-stat">
          <strong id="exportStat">READY</strong>
          <span>Export engine status</span>
        </div>
        <div class="mini-stat">
          <strong id="bandsStat">10 BANDS</strong>
          <span>Biquad filter chain active</span>
        </div>
        <div class="mini-stat">
          <strong id="presetStat">FLAT</strong>
          <span>Current preset selection</span>
        </div>
      </div>
    </section>

    <section class="eq-bands card">
      <div class="card-title">EQUALIZER BANDS</div>
      <div class="bands-row" id="bandsRow"></div>

      <div>
        <div class="card-title" style="margin-bottom:10px;">PRESETS</div>
        <div class="presets-row" id="presetsRow"></div>
      </div>

      <div>
        <div class="card-title" style="margin-bottom:10px;">EXPORT</div>
        <div class="export-row">
          <button class="btn" id="exportWavBtn">EXPORT WAV</button>
          <button class="btn secondary" id="exportMp3Btn">EXPORT MP3</button>
        </div>
      </div>

      <div class="progress-export"><div id="exportProgressBar"></div></div>
      <div class="status-box" id="statusBox">Load a local audio or video file to enable real equalizer export. WAV export works directly in-browser. MP3 export requires the encoder library to load.</div>
      <div class="small-note">
        Export applies your current EQ preset and band slider values. For YouTube mode, export is disabled because the embedded stream cannot be decoded by the browser for offline rendering.
      </div>
    </section>
  </div>
</div>

<audio id="audioEl" crossorigin="anonymous"></audio>
<script src="https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js"></script>
<script>
let actx, analyser, source, gainNode;
let filters = [];
let isPlaying = false;
let simMode = false;
let simPhase = [];
let animFrame;
let loadedFile = null;
let loadedObjectUrl = null;
let mp3Ready = false;

const audio = document.getElementById('audioEl');
const canvas = document.getElementById('eqCanvas');
const ctx = canvas.getContext('2d');
const statusBox = document.getElementById('statusBox');
const exportProgressBar = document.getElementById('exportProgressBar');
const exportWavBtn = document.getElementById('exportWavBtn');
const exportMp3Btn = document.getElementById('exportMp3Btn');

const BANDS = [
  { freq: 60, label: '60Hz', type: 'lowshelf' },
  { freq: 170, label: '170', type: 'peaking' },
  { freq: 310, label: '310', type: 'peaking' },
  { freq: 600, label: '600', type: 'peaking' },
  { freq: 1000, label: '1K', type: 'peaking' },
  { freq: 3000, label: '3K', type: 'peaking' },
  { freq: 6000, label: '6K', type: 'peaking' },
  { freq: 12000, label: '12K', type: 'peaking' },
  { freq: 14000, label: '14K', type: 'peaking' },
  { freq: 16000, label: '16K', type: 'highshelf' },
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

function setStatus(msg, type='info') {
  statusBox.textContent = msg;
  statusBox.className = 'status-box';
  if (type === 'error') statusBox.classList.add('error');
  if (type === 'success') statusBox.classList.add('success');
}

function setExportProgress(percent) {
  exportProgressBar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
}

function updateStats() {
  document.getElementById('modeStat').textContent = simMode ? 'YOUTUBE' : 'FILE';
}

function updatePresetStat(name) {
  document.getElementById('presetStat').textContent = String(name || 'CUSTOM').toUpperCase();
}

function updateMp3Status() {
  mp3Ready = !!(window.lamejs && window.lamejs.Mp3Encoder);
  document.getElementById('exportStat').textContent = mp3Ready ? 'WAV + MP3' : 'WAV READY';
  exportMp3Btn.disabled = !mp3Ready;
}

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
      updatePresetStat('Custom');
    });

    const lbl = document.createElement('label');
    lbl.textContent = b.label;

    col.appendChild(val);
    col.appendChild(inp);
    col.appendChild(lbl);
    row.appendChild(col);
    sliderEls.push({ inp, val });
  });

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
  updatePresetStat(name);
}

function clearActivePreset() {
  document.querySelectorAll('.preset').forEach(b => b.classList.remove('active'));
}

function initAudio() {
  if (actx) return;
  actx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = actx.createAnalyser();
  analyser.fftSize = 2048;
  analyser.smoothingTimeConstant = 0.82;

  gainNode = actx.createGain();
  gainNode.gain.value = 0.8;

  BANDS.forEach((b, i) => {
    const f = actx.createBiquadFilter();
    f.type = b.type;
    f.frequency.value = b.freq;
    f.gain.value = gainValues[i];
    if (b.type === 'peaking') f.Q.value = 1.4;
    filters.push(f);
  });

  source = actx.createMediaElementSource(audio);
  let node = source;
  filters.forEach(f => { node.connect(f); node = f; });
  node.connect(gainNode);
  gainNode.connect(analyser);
  analyser.connect(actx.destination);
}

function resizeCanvas() {
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  canvas.width = canvas.clientWidth * dpr;
  canvas.height = canvas.clientHeight * dpr;
}

function drawEq(dataArray) {
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const barCount = 72;
  const gap = 3 * window.devicePixelRatio;
  const barW = (W - gap * (barCount + 1)) / barCount;

  for (let i = 0; i < barCount; i++) {
    const value = dataArray[i] / 255;
    const barH = value * H * 0.92;
    const x = gap + i * (barW + gap);
    const y = H - barH;

    const t = value;
    const r1 = 0, g1 = 229, b1 = 255;
    const r2 = 191, g2 = 90, b2 = 242;
    const r3 = 255, g3 = 55, b3 = 95;

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
    grad.addColorStop(1, `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},0.28)`);
    ctx.fillStyle = grad;

    const radius = Math.min(barW / 2, 4 * window.devicePixelRatio);
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

    if (value > 0.72) {
      ctx.fillStyle = `rgba(255,255,255,0.7)`;
      ctx.fillRect(x, y - 3 * window.devicePixelRatio, barW, 2 * window.devicePixelRatio);
    }
  }
}

function animate() {
  animFrame = requestAnimationFrame(animate);
  resizeCanvas();

  if (simMode) {
    simPhase = simPhase.map((p, i) => p + 0.03 + i * 0.003);
    const fake = new Uint8Array(72);
    for (let i = 0; i < 72; i++) {
      const env = Math.exp(-i / 22) * 0.7 + 0.12;
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

const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');

function loadFile(file) {
  loadedFile = file;
  if (loadedObjectUrl) URL.revokeObjectURL(loadedObjectUrl);
  loadedObjectUrl = URL.createObjectURL(file);
  audio.src = loadedObjectUrl;
  simMode = false;
  updateStats();
  document.getElementById('trackName').textContent = file.name.replace(/\.[^/.]+$/, '');
  document.getElementById('player').classList.remove('hidden');
  initAudio();
  if (actx && actx.state === 'suspended') actx.resume();
  audio.play().catch(()=>{});
  isPlaying = true;
  document.getElementById('playBtn').textContent = '❚❚';
  setStatus('Local file loaded. You can preview it live and export the current equalized result as WAV or MP3.', 'success');
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

document.getElementById('playBtn').addEventListener('click', async () => {
  if (!audio.src) return;
  if (actx && actx.state === 'suspended') await actx.resume();
  if (isPlaying) {
    audio.pause();
    document.getElementById('playBtn').textContent = '▶';
  } else {
    await audio.play();
    document.getElementById('playBtn').textContent = '❚❚';
  }
  isPlaying = !isPlaying;
});

document.getElementById('stopBtn').addEventListener('click', () => {
  if (!audio.src) return;
  audio.pause();
  audio.currentTime = 0;
  isPlaying = false;
  document.getElementById('playBtn').textContent = '▶';
});

document.getElementById('restartBtn').addEventListener('click', () => {
  if (!audio.src) return;
  audio.currentTime = 0;
  if (!isPlaying) {
    audio.play().catch(()=>{});
    isPlaying = true;
    document.getElementById('playBtn').textContent = '❚❚';
  }
});

document.getElementById('flatBtn').addEventListener('click', () => applyPreset('Flat'));

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

audio.addEventListener('ended', () => {
  isPlaying = false;
  document.getElementById('playBtn').textContent = '▶';
});

document.getElementById('progressWrap').addEventListener('click', e => {
  if (!audio.duration) return;
  const r = e.currentTarget.getBoundingClientRect();
  audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
});

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
  updateStats();
  document.getElementById('player').classList.add('hidden');
  setStatus('YouTube loaded in simulated mode. Live export is disabled for YouTube because the browser cannot decode embedded streams for offline rendering.', 'info');
}

function extractYTId(url) {
  const patterns = [
    /(?:v=|\/embed\/|\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/,
    /^([A-Za-z0-9_-]{11})$/,
  ];
  for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
  return null;
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
    simMode = tab.dataset.tab === 'youtube';
    updateStats();
  });
});

async function renderOfflineBuffer(file) {
  const buffer = await file.arrayBuffer();
  setExportProgress(10);
  const decodeCtx = new (window.AudioContext || window.webkitAudioContext)();
  const audioBuffer = await decodeCtx.decodeAudioData(buffer.slice(0));
  await decodeCtx.close();

  const offline = new OfflineAudioContext(
    audioBuffer.numberOfChannels,
    audioBuffer.length,
    audioBuffer.sampleRate
  );

  const src = offline.createBufferSource();
  src.buffer = audioBuffer;

  let node = src;
  BANDS.forEach((b, i) => {
    const f = offline.createBiquadFilter();
    f.type = b.type;
    f.frequency.value = b.freq;
    f.gain.value = gainValues[i];
    if (b.type === 'peaking') f.Q.value = 1.4;
    node.connect(f);
    node = f;
  });

  const offlineGain = offline.createGain();
  offlineGain.gain.value = parseFloat(document.getElementById('volSlider').value || '0.8');
  node.connect(offlineGain);
  offlineGain.connect(offline.destination);

  src.start(0);
  setExportProgress(35);
  const rendered = await offline.startRendering();
  setExportProgress(85);
  return rendered;
}

function interleaveBuffer(audioBuffer) {
  const numberOfChannels = audioBuffer.numberOfChannels;
  const length = audioBuffer.length * numberOfChannels;
  const result = new Float32Array(length);
  const channels = [];
  for (let ch = 0; ch < numberOfChannels; ch++) channels.push(audioBuffer.getChannelData(ch));

  let index = 0;
  for (let i = 0; i < audioBuffer.length; i++) {
    for (let ch = 0; ch < numberOfChannels; ch++) {
      result[index++] = channels[ch][i];
    }
  }
  return result;
}

function floatTo16BitPCM(view, offset, input) {
  for (let i = 0; i < input.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, input[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }
}

function audioBufferToWavBlob(audioBuffer) {
  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const interleaved = interleaveBuffer(audioBuffer);
  const dataLength = interleaved.length * 2;
  const buffer = new ArrayBuffer(44 + dataLength);
  const view = new DataView(buffer);

  function writeString(offset, string) {
    for (let i = 0; i < string.length; i++) view.setUint8(offset + i, string.charCodeAt(i));
  }

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataLength, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * 2, true);
  view.setUint16(32, numChannels * 2, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, dataLength, true);
  floatTo16BitPCM(view, 44, interleaved);

  return new Blob([buffer], { type: 'audio/wav' });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function audioBufferToMp3Blob(audioBuffer, bitrate = 192) {
  if (!window.lamejs || !window.lamejs.Mp3Encoder) {
    throw new Error('MP3 encoder library not available.');
  }

  const channels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const mp3encoder = new lamejs.Mp3Encoder(channels, sampleRate, bitrate);
  const samplesLeft = audioBuffer.getChannelData(0);
  const samplesRight = channels > 1 ? audioBuffer.getChannelData(1) : null;
  const blockSize = 1152;
  const mp3Data = [];

  function floatTo16(arr) {
    const out = new Int16Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      let s = Math.max(-1, Math.min(1, arr[i]));
      out[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
    return out;
  }

  const left16 = floatTo16(samplesLeft);
  const right16 = samplesRight ? floatTo16(samplesRight) : null;

  for (let i = 0; i < left16.length; i += blockSize) {
    const leftChunk = left16.subarray(i, i + blockSize);
    let mp3buf;
    if (channels > 1 && right16) {
      const rightChunk = right16.subarray(i, i + blockSize);
      mp3buf = mp3encoder.encodeBuffer(leftChunk, rightChunk);
    } else {
      mp3buf = mp3encoder.encodeBuffer(leftChunk);
    }
    if (mp3buf.length > 0) mp3Data.push(new Int8Array(mp3buf));
  }

  const flush = mp3encoder.flush();
  if (flush.length > 0) mp3Data.push(new Int8Array(flush));
  return new Blob(mp3Data, { type: 'audio/mpeg' });
}

async function exportAudio(format) {
  if (simMode) {
    setStatus('Export works only for local files. Switch to FILE UPLOAD mode and load a local audio/video file first.', 'error');
    return;
  }
  if (!loadedFile) {
    setStatus('Please load a local file first before exporting.', 'error');
    return;
  }
  if (format === 'mp3' && !mp3Ready) {
    setStatus('MP3 encoder library is not available right now. Try again with internet access or export WAV instead.', 'error');
    return;
  }

  try {
    exportWavBtn.disabled = true;
    exportMp3Btn.disabled = true;
    setExportProgress(4);
    setStatus(`Rendering equalized ${format.toUpperCase()}... Please wait.`, 'info');

    const renderedBuffer = await renderOfflineBuffer(loadedFile);
    let blob;
    const baseName = loadedFile.name.replace(/\.[^/.]+$/, '');

    if (format === 'wav') {
      blob = audioBufferToWavBlob(renderedBuffer);
      setExportProgress(100);
      downloadBlob(blob, `${baseName}_equalized.wav`);
    } else {
      setExportProgress(92);
      blob = audioBufferToMp3Blob(renderedBuffer, 192);
      setExportProgress(100);
      downloadBlob(blob, `${baseName}_equalized.mp3`);
    }

    setStatus(`Done. Your equalized ${format.toUpperCase()} file has been downloaded.`, 'success');
  } catch (err) {
    console.error(err);
    setStatus(`Export failed: ${err.message || err}`, 'error');
  } finally {
    setTimeout(() => setExportProgress(0), 900);
    exportWavBtn.disabled = false;
    updateMp3Status();
  }
}

exportWavBtn.addEventListener('click', () => exportAudio('wav'));
exportMp3Btn.addEventListener('click', () => exportAudio('mp3'));

buildBands();
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
animate();
applyPreset('Flat');
updateStats();
updateMp3Status();
setStatus('Ready. Drop a local file to preview and export your equalized result.', 'info');
</script>
</body>
</html>
