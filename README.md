<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EQ Visualizer Pro - Trim + Multi-Track</title>
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
    --muted: rgba(240,240,248,0.58);
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
    width: 100%; max-width: 1520px; margin: 0 auto;
    display: grid; grid-template-columns: minmax(0, 2.2fr) minmax(360px, 1fr); gap: 24px;
    align-items: start;
  }
  .main-col, .side-col { display:flex; flex-direction:column; gap:20px; }
  .card {
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    border: 1px solid var(--border);
    border-radius: 20px;
    box-shadow: 0 18px 48px rgba(0,0,0,0.28);
    backdrop-filter: blur(8px);
  }
  header.card { padding: 24px 26px; }
  .top-row { display:flex; justify-content:space-between; align-items:flex-start; gap:18px; flex-wrap:wrap; }
  h1 {
    font-family: 'Syne', sans-serif; font-size: clamp(2rem, 4vw, 3.5rem); font-weight:800; letter-spacing:-0.04em;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
  }
  .sub { margin-top:6px; color:var(--muted); font-size:0.82rem; letter-spacing:0.08em; }
  .btn-row, .header-actions { display:flex; flex-wrap:wrap; gap:10px; }
  .btn {
    background: var(--accent); color:#000; border:none; border-radius:12px; padding:12px 16px;
    font-family:'Space Mono', monospace; font-size:0.76rem; font-weight:700; cursor:pointer;
    transition: transform .18s, opacity .18s, background .18s, border-color .18s; white-space:nowrap;
  }
  .btn:hover { opacity:.92; transform:translateY(-1px); }
  .btn:disabled { opacity:.45; cursor:not-allowed; transform:none; }
  .btn.secondary { background: var(--surface2); color: var(--text); border: 1px solid var(--border); }
  .btn.warning { background: var(--warning); color:#111; }
  .btn.ghost { background: transparent; color: var(--muted); border:1px solid var(--border); }
  .btn.danger { background: var(--danger); color: #fff; }
  .workspace.card { padding:22px; display:flex; flex-direction:column; gap:18px; }
  .tabs { display:flex; gap:3px; background:var(--surface); border-radius:12px; padding:4px; width:fit-content; }
  .tab {
    padding:10px 18px; border-radius:10px; border:none; background:transparent; color:var(--muted);
    font-family:'Space Mono', monospace; font-size:.76rem; cursor:pointer; transition:all .2s; letter-spacing:.04em;
  }
  .tab.active { background: var(--surface2); color: var(--text); }
  .panel { display:none; }
  .panel.active { display:block; }
  .drop-grid { display:grid; grid-template-columns: 1fr 1fr; gap:16px; }
  .drop-zone {
    border:1.5px dashed var(--border); border-radius:18px; min-height:170px; padding:1.3rem;
    display:grid; place-items:center; text-align:center; background: var(--surface3); position:relative; cursor:pointer; transition:.25s;
  }
  .drop-zone:hover, .drop-zone.dragging { border-color: var(--accent); background: rgba(0,229,255,.04); }
  .drop-zone input { position:absolute; inset:0; opacity:0; cursor:pointer; width:100%; }
  .drop-inner { display:flex; flex-direction:column; align-items:center; gap:10px; }
  .drop-icon { font-size:2.4rem; opacity:.58; }
  .drop-title { font-family:'Syne', sans-serif; font-size:1.08rem; font-weight:700; }
  .drop-sub { font-size:.7rem; color:var(--muted); line-height:1.55; }
  .small-note, .status-box {
    font-size:.72rem; color:var(--muted); background: rgba(255,200,0,0.07); border:1px solid rgba(255,200,0,0.16);
    border-radius:12px; padding:12px 14px; line-height:1.65;
  }
  .status-box { background: rgba(0,229,255,.06); border-color: rgba(0,229,255,.14); color:#d6fbff; }
  .status-box.success { background: rgba(50,210,150,.08); border-color: rgba(50,210,150,.18); color:#d8ffef; }
  .status-box.error { background: rgba(255,55,95,.08); border-color: rgba(255,55,95,.16); color:#ffd5de; }
  .yt-row { display:grid; grid-template-columns: 1fr auto; gap:10px; }
  .input, .yt-row input, select {
    width:100%; background:var(--surface3); border:1px solid var(--border); border-radius:12px; padding:12px 14px;
    color:var(--text); font-family:'Space Mono', monospace; font-size:.8rem; outline:none;
  }
  .input:focus, .yt-row input:focus, select:focus { border-color: var(--accent); }
  .viz-wrap {
    position:relative; background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
    border:1px solid var(--border); border-radius:18px; overflow:hidden; min-height:380px;
  }
  #eqCanvas { display:block; width:100%; height:380px; }
  .viz-label { position:absolute; top:14px; left:18px; font-size:.68rem; letter-spacing:.11em; color:var(--muted); }
  .player {
    padding: 18px 20px; display:flex; flex-direction:column; gap:14px; background:var(--surface3);
    border:1px solid var(--border); border-radius:18px;
  }
  .player-meta { display:flex; justify-content:space-between; gap:20px; align-items:flex-start; flex-wrap:wrap; }
  .track-name { font-family:'Syne', sans-serif; font-size:1rem; font-weight:700; max-width:78%; }
  .track-time { font-size:.74rem; color:var(--muted); }
  .progress-wrap {
    position:relative; height:12px; background:var(--surface2); border-radius:999px; cursor:pointer; overflow:hidden;
    border:1px solid rgba(255,255,255,.03);
  }
  .trim-range {
    position:absolute; top:0; bottom:0; background: rgba(191,90,242,.22); border-left:1px solid rgba(191,90,242,.7); border-right:1px solid rgba(191,90,242,.7);
    pointer-events:none;
  }
  .progress-fill { height:100%; background: linear-gradient(90deg, var(--accent), var(--accent2)); width:0%; transition: width .08s linear; }
  .controls { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
  .ctrl-btn {
    background:none; border:none; color:var(--muted); cursor:pointer; font-size:1.06rem; padding:4px; transition:color .15s;
    display:flex; align-items:center; justify-content:center;
  }
  .ctrl-btn:hover { color: var(--text); }
  .ctrl-btn.play { width:42px; height:42px; border-radius:50%; background:var(--accent); color:#000; }
  .ctrl-btn.stop { width:42px; height:42px; border-radius:50%; background:var(--surface2); border:1px solid var(--border); }
  .transport-mini { display:flex; align-items:center; gap:10px; margin-left:auto; flex-wrap:wrap; }
  .inline-range { accent-color: var(--accent); cursor:pointer; }
  .mini-label { font-size:.68rem; color:var(--muted); }
  .grid-2 { display:grid; grid-template-columns: 1fr 1fr; gap:14px; }
  .section-title { font-size:.68rem; letter-spacing:.11em; color:var(--muted); margin-bottom:10px; }
  .side-card { padding:18px; }
  .mix-grid { display:grid; grid-template-columns: 1fr 1fr; gap:12px; }
  .stack { display:flex; flex-direction:column; gap:12px; }
  .field { display:flex; flex-direction:column; gap:8px; }
  .field label { font-size:.68rem; color:var(--muted); letter-spacing:.08em; }
  .track-box {
    border:1px solid var(--border); background:var(--surface3); border-radius:16px; padding:14px; display:flex; flex-direction:column; gap:10px;
  }
  .track-box h3 { font-family:'Syne', sans-serif; font-size:1rem; }
  .track-badge { display:inline-flex; padding:4px 10px; border-radius:999px; font-size:.66rem; border:1px solid var(--border); color:var(--muted); width:fit-content; }
  .meta-line { font-size:.7rem; color:var(--muted); line-height:1.6; word-break:break-word; }
  .eq-bands { padding:18px; }
  .bands-row { display:flex; gap:8px; align-items:flex-end; overflow-x:auto; padding-bottom:4px; }
  .band-col { min-width:54px; display:flex; flex-direction:column; align-items:center; gap:6px; }
  .band-col input[type=range] {
    writing-mode: vertical-lr; direction: rtl; width:24px; height:96px; accent-color: var(--accent); cursor:pointer;
  }
  .band-col label { font-size:.6rem; color:var(--muted); }
  .band-col .band-val { font-size:.6rem; color:var(--accent); }
  .presets-row { display:flex; gap:6px; flex-wrap:wrap; margin-top:14px; }
  .preset {
    padding:5px 12px; border-radius:99px; border:1px solid var(--border); background:transparent; color:var(--muted);
    font-family:'Space Mono', monospace; font-size:.65rem; cursor:pointer; transition: all .15s;
  }
  .preset:hover { border-color:var(--accent); color:var(--accent); }
  .preset.active { background:var(--accent); color:#000; border-color:var(--accent); }
  .meter { height:8px; border-radius:999px; background:var(--surface2); overflow:hidden; border:1px solid rgba(255,255,255,.03); }
  .meter > span { display:block; height:100%; width:0%; background: linear-gradient(90deg, var(--success), var(--accent), var(--warning), var(--danger)); }
  .help-list { padding-left:18px; color:var(--muted); font-size:.76rem; line-height:1.8; }
  .yt-embed-wrap { border-radius:18px; overflow:hidden; border:1px solid var(--border); background:#000; }
  .yt-embed-wrap iframe { display:block; width:100%; aspect-ratio:16/9; border:none; }
  .yt-eq-note { font-size:.7rem; color:var(--muted); padding:10px 14px; text-align:center; background:var(--surface); }
  .hidden { display:none !important; }
  @media (max-width: 1120px) {
    .app { grid-template-columns: 1fr; }
  }
  @media (max-width: 760px) {
    body { padding:14px; }
    .drop-grid, .grid-2, .mix-grid, .yt-row { grid-template-columns: 1fr; }
    .player-meta { flex-direction:column; }
    #eqCanvas, .viz-wrap { min-height:300px; height:300px; }
  }
</style>
</head>
<body>
<div class="app">
  <div class="main-col">
    <header class="card">
      <div class="top-row">
        <div>
          <h1>EQ Visualizer Pro</h1>
          <div class="sub">DESKTOP MIXER · TRIM · MULTI-TRACK · EXPORT</div>
        </div>
        <div class="header-actions">
          <button class="btn secondary" id="resetFlatBtn">RESET FLAT</button>
          <button class="btn ghost" id="restartBtn">RESTART</button>
          <button class="btn warning" id="previewTrimBtn">PREVIEW TRIM</button>
          <button class="btn" id="exportWavBtn" disabled>EXPORT WAV</button>
          <button class="btn secondary" id="exportMp3Btn" disabled>EXPORT MP3</button>
        </div>
      </div>
    </header>

    <section class="workspace card">
      <div class="tabs">
        <button class="tab active" data-tab="file">▲ FILE STUDIO</button>
        <button class="tab" data-tab="youtube">▶ YOUTUBE</button>
      </div>

      <div class="panel active" id="panel-file">
        <div class="drop-grid">
          <label class="drop-zone" id="dropMain">
            <input type="file" id="mainFileInput" accept="audio/*,video/*">
            <div class="drop-inner">
              <div class="drop-icon">♫</div>
              <div class="drop-title">Main Track</div>
              <div class="drop-sub">Upload your primary audio / MP3 / WAV / MP4</div>
            </div>
          </label>
          <label class="drop-zone" id="dropOverlay">
            <input type="file" id="overlayFileInput" accept="audio/*,video/*">
            <div class="drop-inner">
              <div class="drop-icon">≋</div>
              <div class="drop-title">Overlay Track</div>
              <div class="drop-sub">Optional vocal / beat / background layer</div>
            </div>
          </label>
        </div>
        <div class="small-note" style="margin-top:14px;">
          Local file studio supports: <strong>trim</strong>, <strong>two-track mixing</strong>, <strong>EQ</strong>, and export. Overlay track can start later using offset, and you can trim the final export range.
        </div>
      </div>

      <div class="panel" id="panel-youtube">
        <div class="yt-row">
          <input type="text" id="ytInput" placeholder="https://www.youtube.com/watch?v=...">
          <button class="btn" id="ytLoad">LOAD</button>
        </div>
        <div class="small-note" style="margin-top:12px;">
          YouTube still runs in simulated visualizer mode only. Browser security prevents direct decoding/export of embedded YouTube audio.
        </div>
        <div class="yt-embed-wrap hidden" id="ytWrap" style="margin-top:14px;">
          <iframe id="ytFrame" allowfullscreen allow="autoplay"></iframe>
          <div class="yt-eq-note">◉ Simulated visualizer only for YouTube mode</div>
        </div>
      </div>

      <div class="viz-wrap">
        <div class="viz-label">MASTER SPECTRUM</div>
        <canvas id="eqCanvas"></canvas>
      </div>

      <div class="player" id="playerBox">
        <div class="player-meta">
          <div>
            <div class="track-name" id="trackName">No track loaded</div>
            <div class="meta-line" id="trackMeta">Load a main track to begin.</div>
          </div>
          <div class="track-time" id="trackTime">0:00 / 0:00</div>
        </div>

        <div class="progress-wrap" id="progressWrap">
          <div class="trim-range" id="trimRangeOverlay"></div>
          <div class="progress-fill" id="progressFill"></div>
        </div>

        <div class="controls">
          <button class="ctrl-btn play" id="playBtn">▶</button>
          <button class="ctrl-btn stop" id="stopBtn">■</button>
          <div class="btn-row">
            <button class="btn secondary" id="soloMainBtn">SOLO MAIN</button>
            <button class="btn secondary" id="soloMixBtn">FULL MIX</button>
          </div>
          <div class="transport-mini">
            <span class="mini-label">MASTER</span>
            <input class="inline-range" type="range" id="masterVol" min="0" max="1.5" step="0.01" value="1">
          </div>
        </div>
      </div>

      <div class="status-box" id="statusBox">Ready. Load a main track, then optionally add an overlay track for mixing.</div>
    </section>
  </div>

  <div class="side-col">
    <section class="card side-card">
      <div class="section-title">TRIM + MIX CONTROLS</div>
      <div class="stack">
        <div class="track-box">
          <span class="track-badge">TRIM RANGE</span>
          <div class="grid-2">
            <div class="field">
              <label for="trimStart">START (SEC)</label>
              <input class="input" id="trimStart" type="number" min="0" step="0.01" value="0">
            </div>
            <div class="field">
              <label for="trimEnd">END (SEC)</label>
              <input class="input" id="trimEnd" type="number" min="0" step="0.01" value="0">
            </div>
          </div>
          <button class="btn secondary" id="applyTrimBtn">APPLY TO TIMELINE</button>
        </div>

        <div class="track-box">
          <h3>Main Track</h3>
          <div class="meta-line" id="mainTrackInfo">No main file loaded.</div>
          <div class="field">
            <label>VOLUME</label>
            <input class="inline-range" id="mainVol" type="range" min="0" max="1.5" step="0.01" value="1">
          </div>
          <div class="field">
            <label>PAN (preview only)</label>
            <input class="inline-range" id="mainPan" type="range" min="-1" max="1" step="0.01" value="0">
          </div>
        </div>

        <div class="track-box">
          <h3>Overlay Track</h3>
          <div class="meta-line" id="overlayTrackInfo">No overlay file loaded.</div>
          <div class="grid-2">
            <div class="field">
              <label>START OFFSET (SEC)</label>
              <input class="input" id="overlayOffset" type="number" min="0" step="0.01" value="0">
            </div>
            <div class="field">
              <label>TRIM IN (SEC)</label>
              <input class="input" id="overlayTrimIn" type="number" min="0" step="0.01" value="0">
            </div>
          </div>
          <div class="field">
            <label>VOLUME</label>
            <input class="inline-range" id="overlayVol" type="range" min="0" max="1.5" step="0.01" value="0.8">
          </div>
          <div class="field">
            <label>PAN (preview only)</label>
            <input class="inline-range" id="overlayPan" type="range" min="-1" max="1" step="0.01" value="0">
          </div>
        </div>

        <div class="track-box">
          <div class="section-title" style="margin-bottom:8px;">MASTER LEVEL</div>
          <div class="meter"><span id="masterMeterFill"></span></div>
          <div class="meta-line">Meter shows approximate live output level during preview.</div>
        </div>
      </div>
    </section>

    <section class="card eq-bands">
      <div class="section-title">EQUALIZER BANDS</div>
      <div class="bands-row" id="bandsRow"></div>
      <div class="presets-row" id="presetsRow"></div>
    </section>

    <section class="card side-card">
      <div class="section-title">HOW TO USE</div>
      <ol class="help-list">
        <li>Load a main track.</li>
        <li>Optionally load an overlay track.</li>
        <li>Set trim start/end for final export.</li>
        <li>Adjust overlay offset and track volumes.</li>
        <li>Shape the sound with EQ presets or sliders.</li>
        <li>Export WAV, or MP3 if the encoder loads in your browser.</li>
      </ol>
    </section>
  </div>
</div>

<audio id="mainAudio" crossorigin="anonymous"></audio>
<audio id="overlayAudio" crossorigin="anonymous"></audio>
<script>
let actx, analyser, masterGain, masterMeterAnalyser;
let mainSource, overlaySource;
let mainGainNode, overlayGainNode, mainPanner, overlayPanner;
let filters = [];
let animFrame = null;
let ytMode = false;
let simPhase = [];
let syncTimer = null;
let mainBuffer = null;
let overlayBuffer = null;
let mainFileName = '';
let overlayFileName = '';
let mp3LibLoading = null;
let mp3Ready = !!window.lamejs;
let soloMode = 'mix';

const audioMain = document.getElementById('mainAudio');
const audioOverlay = document.getElementById('overlayAudio');
const canvas = document.getElementById('eqCanvas');
const ctx = canvas.getContext('2d');
const statusBox = document.getElementById('statusBox');
const progressFill = document.getElementById('progressFill');
const trimRangeOverlay = document.getElementById('trimRangeOverlay');
const trackNameEl = document.getElementById('trackName');
const trackMetaEl = document.getElementById('trackMeta');
const trackTimeEl = document.getElementById('trackTime');
const masterMeterFill = document.getElementById('masterMeterFill');

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

function fmtTime(s) {
  if (!Number.isFinite(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2,'0')}`;
}
function setStatus(msg, kind='info') {
  statusBox.textContent = msg;
  statusBox.className = 'status-box' + (kind === 'success' ? ' success' : kind === 'error' ? ' error' : '');
}
function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

function resizeCanvas() {
  canvas.width = Math.max(1, Math.floor(canvas.offsetWidth * window.devicePixelRatio));
  canvas.height = Math.max(1, Math.floor(canvas.offsetHeight * window.devicePixelRatio));
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
    inp.type = 'range'; inp.min = -12; inp.max = 12; inp.step = 1; inp.value = 0;
    inp.addEventListener('input', () => {
      gainValues[i] = +inp.value;
      val.textContent = gainValues[i] > 0 ? '+' + gainValues[i] : gainValues[i];
      if (filters[i]) filters[i].gain.value = gainValues[i];
      clearActivePreset();
    });

    const lbl = document.createElement('label'); lbl.textContent = b.label;
    col.append(val, inp, lbl); row.appendChild(col);
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
}
function clearActivePreset() { document.querySelectorAll('.preset').forEach(b => b.classList.remove('active')); }

function initAudio() {
  if (actx) return;
  actx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = actx.createAnalyser();
  analyser.fftSize = 2048;
  analyser.smoothingTimeConstant = 0.84;
  masterMeterAnalyser = actx.createAnalyser();
  masterMeterAnalyser.fftSize = 256;

  mainSource = actx.createMediaElementSource(audioMain);
  overlaySource = actx.createMediaElementSource(audioOverlay);
  mainGainNode = actx.createGain();
  overlayGainNode = actx.createGain();
  mainPanner = actx.createStereoPanner ? actx.createStereoPanner() : null;
  overlayPanner = actx.createStereoPanner ? actx.createStereoPanner() : null;
  masterGain = actx.createGain();
  masterGain.gain.value = +document.getElementById('masterVol').value;

  BANDS.forEach((b, i) => {
    const f = actx.createBiquadFilter();
    f.type = b.type; f.frequency.value = b.freq; f.gain.value = gainValues[i];
    if (b.type === 'peaking') f.Q.value = 1.4;
    filters.push(f);
  });

  const connectTrack = (sourceNode, gainNode, pannerNode) => {
    sourceNode.connect(gainNode);
    if (pannerNode) {
      gainNode.connect(pannerNode);
      return pannerNode;
    }
    return gainNode;
  };

  let mixInA = connectTrack(mainSource, mainGainNode, mainPanner);
  let mixInB = connectTrack(overlaySource, overlayGainNode, overlayPanner);
  mixInA.connect(filters[0]);
  mixInB.connect(filters[0]);
  let node = filters[0];
  for (let i = 1; i < filters.length; i++) { node.connect(filters[i]); node = filters[i]; }
  node.connect(masterGain);
  masterGain.connect(analyser);
  masterGain.connect(masterMeterAnalyser);
  analyser.connect(actx.destination);

  updateGainNodes();
  updatePanNodes();
}

function updateGainNodes() {
  if (!mainGainNode || !overlayGainNode || !masterGain) return;
  const mainVol = +document.getElementById('mainVol').value;
  const overlayVol = +document.getElementById('overlayVol').value;
  const masterVol = +document.getElementById('masterVol').value;
  masterGain.gain.value = masterVol;
  if (soloMode === 'main') {
    mainGainNode.gain.value = mainVol;
    overlayGainNode.gain.value = 0;
  } else {
    mainGainNode.gain.value = mainVol;
    overlayGainNode.gain.value = overlayVol;
  }
}
function updatePanNodes() {
  if (mainPanner) mainPanner.pan.value = +document.getElementById('mainPan').value;
  if (overlayPanner) overlayPanner.pan.value = +document.getElementById('overlayPan').value;
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
    const r1=0,g1=229,b1=255, r2=191,g2=90,b2=242, r3=255,g3=55,b3=95;
    let r,g,b;
    if (t < 0.6) {
      const p = t / 0.6;
      r = r1 + (r2-r1)*p; g = g1 + (g2-g1)*p; b = b1 + (b2-b1)*p;
    } else {
      const p = (t-0.6)/0.4;
      r = r2 + (r3-r2)*p; g = g2 + (g3-g2)*p; b = b2 + (b3-b2)*p;
    }
    const grad = ctx.createLinearGradient(0, y, 0, H);
    grad.addColorStop(0, `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},0.95)`);
    grad.addColorStop(1, `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},0.28)`);
    ctx.fillStyle = grad;
    const radius = Math.min(barW/2, 3*window.devicePixelRatio);
    ctx.beginPath();
    ctx.moveTo(x+radius, y);
    ctx.lineTo(x+barW-radius, y);
    ctx.quadraticCurveTo(x+barW, y, x+barW, y+radius);
    ctx.lineTo(x+barW, H); ctx.lineTo(x, H); ctx.lineTo(x, y+radius);
    ctx.quadraticCurveTo(x, y, x+radius, y); ctx.closePath(); ctx.fill();
    if (value > 0.72) {
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.fillRect(x, y - 3 * window.devicePixelRatio, barW, 2 * window.devicePixelRatio);
    }
  }
}

function animate() {
  animFrame = requestAnimationFrame(animate);
  resizeCanvas();
  if (ytMode) {
    simPhase = simPhase.map((p, i) => p + 0.03 + i * 0.003);
    const fake = new Uint8Array(72);
    for (let i=0;i<72;i++) {
      const env = Math.exp(-i/22)*0.72 + 0.08;
      const v = env * (
        Math.sin(simPhase[i % simPhase.length]) * 0.45 +
        Math.sin(simPhase[i % simPhase.length] * 2.1 + 1) * 0.3 +
        Math.sin(simPhase[i % simPhase.length] * 0.55 + 2) * 0.25
      );
      fake[i] = Math.max(0, Math.min(255, Math.round((v + 0.5) * 210)));
    }
    drawEq(fake);
    masterMeterFill.style.width = '42%';
    return;
  }
  if (!analyser) return;
  const data = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(data);
  drawEq(data);
  if (masterMeterAnalyser) {
    const td = new Uint8Array(masterMeterAnalyser.fftSize);
    masterMeterAnalyser.getByteTimeDomainData(td);
    let peak = 0;
    for (const v of td) peak = Math.max(peak, Math.abs(v - 128) / 128);
    masterMeterFill.style.width = Math.round(clamp(peak * 130, 0, 100)) + '%';
  }
}

async function decodeToBuffer(file) {
  const arr = await file.arrayBuffer();
  const context = new (window.AudioContext || window.webkitAudioContext)();
  try {
    const decoded = await context.decodeAudioData(arr.slice(0));
    await context.close();
    return decoded;
  } catch (e) {
    await context.close();
    throw e;
  }
}

function bindDropzone(zoneId, inputId, onFile) {
  const zone = document.getElementById(zoneId);
  const input = document.getElementById(inputId);
  input.addEventListener('change', e => e.target.files[0] && onFile(e.target.files[0]));
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('dragging'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragging'));
  zone.addEventListener('drop', e => {
    e.preventDefault(); zone.classList.remove('dragging');
    const file = e.dataTransfer.files[0]; if (file) onFile(file);
  });
}

async function loadMainFile(file) {
  ytMode = false;
  document.querySelector('[data-tab="file"]').click();
  try {
    setStatus('Loading main track...', 'info');
    mainBuffer = await decodeToBuffer(file);
    mainFileName = file.name;
    audioMain.src = URL.createObjectURL(file);
    trackNameEl.textContent = file.name.replace(/\.[^/.]+$/, '');
    trackMetaEl.textContent = `Main: ${fmtTime(mainBuffer.duration)} · ${file.type || 'audio file'}`;
    document.getElementById('mainTrackInfo').textContent = `${file.name} · duration ${fmtTime(mainBuffer.duration)}`;
    document.getElementById('trimStart').value = 0;
    document.getElementById('trimEnd').value = mainBuffer.duration.toFixed(2);
    updateTrimOverlay();
    initAudio();
    updateButtons();
    updateSummaryMeta();
    setStatus('Main track loaded. You can now add an overlay track, trim, and export.', 'success');
  } catch (err) {
    console.error(err);
    setStatus('Could not decode the main file in this browser.', 'error');
  }
}

async function loadOverlayFile(file) {
  try {
    setStatus('Loading overlay track...', 'info');
    overlayBuffer = await decodeToBuffer(file);
    overlayFileName = file.name;
    audioOverlay.src = URL.createObjectURL(file);
    document.getElementById('overlayTrackInfo').textContent = `${file.name} · duration ${fmtTime(overlayBuffer.duration)}`;
    updateButtons();
    updateSummaryMeta();
    setStatus('Overlay track loaded. Adjust offset and volume to mix it with the main track.', 'success');
  } catch (err) {
    console.error(err);
    setStatus('Could not decode the overlay file in this browser.', 'error');
  }
}

function getTrimRange() {
  const duration = mainBuffer ? mainBuffer.duration : (audioMain.duration || 0);
  let start = parseFloat(document.getElementById('trimStart').value || '0');
  let end = parseFloat(document.getElementById('trimEnd').value || String(duration));
  if (!Number.isFinite(start)) start = 0;
  if (!Number.isFinite(end)) end = duration;
  start = clamp(start, 0, duration || 0);
  end = clamp(end, 0, duration || 0);
  if (end < start) [start, end] = [end, start];
  return { start, end, duration };
}

function updateTrimOverlay() {
  const { start, end, duration } = getTrimRange();
  if (!duration) {
    trimRangeOverlay.style.left = '0%'; trimRangeOverlay.style.width = '0%'; return;
  }
  trimRangeOverlay.style.left = `${(start / duration) * 100}%`;
  trimRangeOverlay.style.width = `${((end - start) / duration) * 100}%`;
}

function updateSummaryMeta() {
  const trim = getTrimRange();
  const overlayOffset = parseFloat(document.getElementById('overlayOffset').value || '0');
  const overlayLoaded = !!overlayBuffer;
  trackMetaEl.textContent = [
    mainBuffer ? `Trim ${fmtTime(trim.start)} → ${fmtTime(trim.end)}` : 'No main track',
    overlayLoaded ? `Overlay @ ${fmtTime(overlayOffset)}` : 'No overlay',
    soloMode === 'main' ? 'Preview: main only' : 'Preview: full mix'
  ].join(' · ');
}

function getPreviewDuration() {
  if (!mainBuffer) return 0;
  return mainBuffer.duration;
}

function getOverlayTiming() {
  const offset = Math.max(0, parseFloat(document.getElementById('overlayOffset').value || '0'));
  const trimIn = Math.max(0, parseFloat(document.getElementById('overlayTrimIn').value || '0'));
  return { offset, trimIn };
}

function syncOverlayToMain() {
  if (!overlayBuffer || !audioMain.src) {
    audioOverlay.pause();
    return;
  }
  const { offset, trimIn } = getOverlayTiming();
  const t = audioMain.currentTime;
  const overlayLocal = t - offset + trimIn;
  if (overlayLocal >= 0 && overlayLocal < overlayBuffer.duration) {
    if (Math.abs(audioOverlay.currentTime - overlayLocal) > 0.12) audioOverlay.currentTime = overlayLocal;
    if (audioMain.paused) {
      audioOverlay.pause();
    } else if (soloMode !== 'main') {
      audioOverlay.play().catch(()=>{});
    }
  } else {
    audioOverlay.pause();
  }
}

function startSyncTimer() {
  stopSyncTimer();
  syncTimer = setInterval(() => {
    if (!ytMode) {
      syncOverlayToMain();
      enforceTrimEnd();
      updatePlaybackUI();
    }
  }, 80);
}
function stopSyncTimer() { if (syncTimer) clearInterval(syncTimer); syncTimer = null; }

function enforceTrimEnd() {
  const { end } = getTrimRange();
  if (audioMain.src && !audioMain.paused && end > 0 && audioMain.currentTime >= end) stopPlayback();
}

function updatePlaybackUI() {
  const duration = getPreviewDuration();
  if (!duration) {
    progressFill.style.width = '0%';
    trackTimeEl.textContent = '0:00 / 0:00';
    return;
  }
  progressFill.style.width = `${(audioMain.currentTime / duration) * 100}%`;
  trackTimeEl.textContent = `${fmtTime(audioMain.currentTime)} / ${fmtTime(duration)}`;
  updateSummaryMeta();
}

async function playMix(fromTime = null) {
  if (ytMode) return;
  if (!audioMain.src || !mainBuffer) {
    setStatus('Load a main track first.', 'error');
    return;
  }
  initAudio();
  if (actx.state === 'suspended') await actx.resume();
  const { start } = getTrimRange();
  const targetTime = fromTime == null ? Math.max(audioMain.currentTime || 0, start) : fromTime;
  audioMain.currentTime = clamp(targetTime, 0, mainBuffer.duration);
  syncOverlayToMain();
  await audioMain.play();
  if (overlayBuffer && soloMode !== 'main') audioOverlay.play().catch(()=>{});
  document.getElementById('playBtn').textContent = '❚❚';
  startSyncTimer();
}

function stopPlayback() {
  audioMain.pause(); audioOverlay.pause();
  document.getElementById('playBtn').textContent = '▶';
  stopSyncTimer();
}
function restartPlayback() {
  const { start } = getTrimRange();
  audioMain.currentTime = start || 0;
  if (overlayBuffer) audioOverlay.currentTime = Math.max(0, getOverlayTiming().trimIn);
  updatePlaybackUI();
}

function updateButtons() {
  const canExport = !!mainBuffer && !ytMode;
  document.getElementById('exportWavBtn').disabled = !canExport;
  document.getElementById('exportMp3Btn').disabled = !canExport;
}

async function buildOfflineMix() {
  if (!mainBuffer) throw new Error('Load a main track first.');
  const { start, end } = getTrimRange();
  const exportDuration = Math.max(0.01, end - start);
  const sampleRate = Math.max(mainBuffer.sampleRate, overlayBuffer ? overlayBuffer.sampleRate : 0, 44100);
  const offline = new OfflineAudioContext(2, Math.ceil(exportDuration * sampleRate), sampleRate);

  const mainSource = offline.createBufferSource();
  mainSource.buffer = mainBuffer;
  const overlaySource = overlayBuffer ? offline.createBufferSource() : null;
  if (overlaySource) overlaySource.buffer = overlayBuffer;

  const mainGain = offline.createGain();
  const overlayGain = offline.createGain();
  const masterGainOffline = offline.createGain();
  mainGain.gain.value = +document.getElementById('mainVol').value;
  overlayGain.gain.value = soloMode === 'main' ? 0 : +document.getElementById('overlayVol').value;
  masterGainOffline.gain.value = +document.getElementById('masterVol').value;

  const mainPanValue = +document.getElementById('mainPan').value;
  const overlayPanValue = +document.getElementById('overlayPan').value;
  const mainPannerOff = offline.createStereoPanner ? offline.createStereoPanner() : null;
  const overlayPannerOff = offline.createStereoPanner ? offline.createStereoPanner() : null;
  if (mainPannerOff) mainPannerOff.pan.value = mainPanValue;
  if (overlayPannerOff) overlayPannerOff.pan.value = overlayPanValue;

  const offlineFilters = BANDS.map((b, i) => {
    const f = offline.createBiquadFilter();
    f.type = b.type; f.frequency.value = b.freq; f.gain.value = gainValues[i];
    if (b.type === 'peaking') f.Q.value = 1.4;
    return f;
  });

  const connectToMasterEq = (sourceNode, gainNode, pannerNode) => {
    sourceNode.connect(gainNode);
    let node = gainNode;
    if (pannerNode) { node.connect(pannerNode); node = pannerNode; }
    node.connect(offlineFilters[0]);
  };

  connectToMasterEq(mainSource, mainGain, mainPannerOff);
  if (overlaySource) connectToMasterEq(overlaySource, overlayGain, overlayPannerOff);
  let eqNode = offlineFilters[0];
  for (let i=1;i<offlineFilters.length;i++) { eqNode.connect(offlineFilters[i]); eqNode = offlineFilters[i]; }
  eqNode.connect(masterGainOffline);
  masterGainOffline.connect(offline.destination);

  mainSource.start(0, start, exportDuration);

  if (overlaySource && overlayBuffer) {
    const { offset, trimIn } = getOverlayTiming();
    const overlayStartInExport = offset - start;
    const overlayBufferOffset = trimIn + Math.max(0, start - offset);
    const available = Math.max(0, overlayBuffer.duration - overlayBufferOffset);
    const playFor = Math.min(exportDuration - Math.max(0, overlayStartInExport), available);
    if (playFor > 0.01) {
      overlaySource.start(Math.max(0, overlayStartInExport), overlayBufferOffset, playFor);
    }
  }

  const rendered = await offline.startRendering();
  return rendered;
}

function audioBufferToWavBlob(buffer) {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const samples = buffer.length;
  const bytesPerSample = 2;
  const blockAlign = numChannels * bytesPerSample;
  const bufferLength = 44 + samples * blockAlign;
  const arrayBuffer = new ArrayBuffer(bufferLength);
  const view = new DataView(arrayBuffer);

  function writeString(offset, str) { for (let i=0;i<str.length;i++) view.setUint8(offset + i, str.charCodeAt(i)); }
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + samples * blockAlign, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, samples * blockAlign, true);

  const channels = [];
  for (let c=0;c<numChannels;c++) channels.push(buffer.getChannelData(c));
  let offset = 44;
  for (let i=0;i<samples;i++) {
    for (let c=0;c<numChannels;c++) {
      const sample = Math.max(-1, Math.min(1, channels[c][i]));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
      offset += 2;
    }
  }
  return new Blob([arrayBuffer], { type: 'audio/wav' });
}

function interleaveToInt16(buffer) {
  const numChannels = buffer.numberOfChannels;
  const length = buffer.length;
  const channels = [];
  for (let c=0;c<numChannels;c++) channels.push(buffer.getChannelData(c));
  const out = new Int16Array(length * numChannels);
  let idx = 0;
  for (let i=0;i<length;i++) {
    for (let c=0;c<numChannels;c++) {
      const sample = Math.max(-1, Math.min(1, channels[c][i]));
      out[idx++] = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
    }
  }
  return out;
}

async function ensureMp3Lib() {
  if (window.lamejs) return true;
  if (mp3LibLoading) return mp3LibLoading;
  mp3LibLoading = new Promise(resolve => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js';
    s.onload = () => { mp3Ready = true; resolve(true); };
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
  });
  return mp3LibLoading;
}

async function exportMix(format) {
  try {
    if (ytMode) throw new Error('Export is disabled in YouTube mode.');
    if (!mainBuffer) throw new Error('Load a main track first.');
    setStatus(`Rendering ${format.toUpperCase()}...`, 'info');
    const rendered = await buildOfflineMix();

    if (format === 'wav') {
      const blob = audioBufferToWavBlob(rendered);
      downloadBlob(blob, `${safeBaseName(mainFileName || 'mix')}_mix.wav`);
      setStatus('WAV export complete.', 'success');
      return;
    }

    const ok = await ensureMp3Lib();
    if (!ok || !window.lamejs) throw new Error('MP3 encoder could not be loaded in this browser.');
    const mp3blob = audioBufferToMp3Blob(rendered);
    downloadBlob(mp3blob, `${safeBaseName(mainFileName || 'mix')}_mix.mp3`);
    setStatus('MP3 export complete.', 'success');
  } catch (err) {
    console.error(err);
    setStatus(err.message || 'Export failed.', 'error');
  }
}

function audioBufferToMp3Blob(buffer) {
  const sampleRate = buffer.sampleRate;
  const channels = Math.min(2, buffer.numberOfChannels);
  const kbps = 192;
  const encoder = new lamejs.Mp3Encoder(channels, sampleRate, kbps);
  const mp3Data = [];
  const blockSize = 1152;
  const left = buffer.getChannelData(0);
  const right = channels > 1 ? buffer.getChannelData(1) : left;

  for (let i = 0; i < buffer.length; i += blockSize) {
    const end = Math.min(i + blockSize, buffer.length);
    const leftChunk = new Int16Array(end - i);
    const rightChunk = new Int16Array(end - i);
    for (let j = i; j < end; j++) {
      leftChunk[j - i] = Math.max(-32768, Math.min(32767, left[j] < 0 ? left[j] * 0x8000 : left[j] * 0x7FFF));
      rightChunk[j - i] = Math.max(-32768, Math.min(32767, right[j] < 0 ? right[j] * 0x8000 : right[j] * 0x7FFF));
    }
    const mp3buf = channels > 1 ? encoder.encodeBuffer(leftChunk, rightChunk) : encoder.encodeBuffer(leftChunk);
    if (mp3buf.length) mp3Data.push(new Uint8Array(mp3buf));
  }
  const d = encoder.flush();
  if (d.length) mp3Data.push(new Uint8Array(d));
  return new Blob(mp3Data, { type: 'audio/mpeg' });
}

function safeBaseName(name) { return (name || 'mix').replace(/\.[^/.]+$/, '').replace(/[^a-z0-9_-]+/gi, '_'); }
function downloadBlob(blob, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}

function extractYTId(url) {
  const patterns = [/(?:v=|\/embed\/|\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/, /^([A-Za-z0-9_-]{11})$/];
  for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
  return null;
}
function loadYT() {
  const raw = document.getElementById('ytInput').value.trim();
  const id = extractYTId(raw);
  if (!id) { setStatus('Could not find a YouTube video ID in that URL.', 'error'); return; }
  document.getElementById('ytFrame').src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  document.getElementById('ytWrap').classList.remove('hidden');
  ytMode = true; stopPlayback(); updateButtons();
  setStatus('YouTube loaded in simulated mode. Export is disabled here.', 'info');
}

bindDropzone('dropMain', 'mainFileInput', loadMainFile);
bindDropzone('dropOverlay', 'overlayFileInput', loadOverlayFile);

Array.from(document.querySelectorAll('.tab')).forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
    ytMode = tab.dataset.tab === 'youtube';
    if (!ytMode) setStatus('File studio active.', 'info');
    updateButtons();
  });
});

document.getElementById('ytLoad').addEventListener('click', loadYT);
document.getElementById('ytInput').addEventListener('keydown', e => { if (e.key === 'Enter') loadYT(); });
document.getElementById('playBtn').addEventListener('click', async () => {
  if (audioMain.paused) await playMix();
  else stopPlayback();
});
document.getElementById('stopBtn').addEventListener('click', () => { stopPlayback(); restartPlayback(); });
document.getElementById('restartBtn').addEventListener('click', () => { stopPlayback(); restartPlayback(); setStatus('Playback head moved to trim start.', 'info'); });
document.getElementById('previewTrimBtn').addEventListener('click', async () => {
  const { start } = getTrimRange();
  await playMix(start);
  setStatus('Previewing from trim start.', 'info');
});
document.getElementById('applyTrimBtn').addEventListener('click', () => {
  updateTrimOverlay();
  const { start } = getTrimRange();
  if (mainBuffer) audioMain.currentTime = start;
  updatePlaybackUI();
  setStatus('Trim range applied to timeline.', 'success');
});
document.getElementById('resetFlatBtn').addEventListener('click', () => { applyPreset('Flat'); setStatus('EQ reset to flat.', 'success'); });
document.getElementById('exportWavBtn').addEventListener('click', () => exportMix('wav'));
document.getElementById('exportMp3Btn').addEventListener('click', () => exportMix('mp3'));
document.getElementById('soloMainBtn').addEventListener('click', () => { soloMode = 'main'; updateGainNodes(); updateSummaryMeta(); setStatus('Preview mode: main track only.', 'info'); });
document.getElementById('soloMixBtn').addEventListener('click', () => { soloMode = 'mix'; updateGainNodes(); updateSummaryMeta(); setStatus('Preview mode: full mix.', 'info'); });
document.getElementById('progressWrap').addEventListener('click', e => {
  if (!mainBuffer) return;
  const r = e.currentTarget.getBoundingClientRect();
  const t = ((e.clientX - r.left) / r.width) * mainBuffer.duration;
  audioMain.currentTime = clamp(t, 0, mainBuffer.duration);
  syncOverlayToMain();
  updatePlaybackUI();
});

['trimStart','trimEnd','overlayOffset','overlayTrimIn'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => { updateTrimOverlay(); updateSummaryMeta(); });
});
['mainVol','overlayVol','masterVol'].forEach(id => document.getElementById(id).addEventListener('input', updateGainNodes));
['mainPan','overlayPan'].forEach(id => document.getElementById(id).addEventListener('input', updatePanNodes));

audioMain.addEventListener('timeupdate', updatePlaybackUI);
audioMain.addEventListener('ended', stopPlayback);

buildBands();
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
animate();
updateTrimOverlay();
setStatus('Ready. Load a main track to start mixing.', 'info');
</script>
</body>
</html>
