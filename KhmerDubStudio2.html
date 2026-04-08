<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Khmer Dub Studio — Professional AI Voice Dubbing</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Noto+Sans+Khmer:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --bg-deep:    #0d0f14;
    --bg-panel:   #131720;
    --bg-card:    #1a2030;
    --bg-hover:   #1f2840;
    --bg-table:   #161c28;
    --border:     #2a3348;
    --border-lit: #3d4f6e;
    --accent-blue:  #3a7bff;
    --accent-green: #1ec97e;
    --accent-gold:  #f5a623;
    --accent-red:   #ff4d6a;
    --accent-cyan:  #00d2ff;
    --accent-purple:#9b59ff;
    --accent-orange:#ff6b35;
    --txt-primary:  #e8edf8;
    --txt-secondary:#8a9ab8;
    --txt-muted:    #4a5a78;
    --female-color: #ff6eb4;
    --male-color:   #4a9eff;
    --pending:      #f5a623;
    --done:         #1ec97e;
    --error:        #ff4d6a;
    --row-odd:      #14192580;
    --row-even:     #111520a0;
    --row-selected: #1a2d5a;
    --row-hover:    #1d2a45;
  }

  * { margin:0; padding:0; box-sizing:border-box; }

  body {
    font-family: 'Rajdhani', 'Noto Sans Khmer', sans-serif;
    background: var(--bg-deep);
    color: var(--txt-primary);
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-size: 13px;
  }

  /* ─── TITLE BAR ─── */
  .titlebar {
    display: flex;
    align-items: center;
    background: #0a0c12;
    border-bottom: 1px solid var(--border);
    padding: 0 12px;
    height: 34px;
    gap: 18px;
    flex-shrink: 0;
    user-select: none;
  }
  .titlebar .app-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--txt-secondary);
    letter-spacing: .5px;
  }
  .titlebar-menu { display: flex; gap: 16px; }
  .titlebar-menu span {
    font-size: 12px;
    color: var(--txt-secondary);
    cursor: pointer;
    padding: 0 4px;
    transition: color .15s;
  }
  .titlebar-menu span:hover { color: var(--txt-primary); }
  .win-controls { margin-left: auto; display: flex; gap: 8px; }
  .win-btn {
    width: 12px; height: 12px; border-radius: 50%;
    cursor: pointer;
  }
  .win-btn.close { background: #ff5f57; }
  .win-btn.min   { background: #febc2e; }
  .win-btn.max   { background: #28c840; }

  /* ─── TOOLBAR ─── */
  .toolbar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    background: var(--bg-panel);
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }
  .brand {
    font-size: 17px;
    font-weight: 700;
    color: var(--accent-cyan);
    letter-spacing: 1px;
    margin-right: 10px;
    white-space: nowrap;
  }
  .brand span { color: var(--accent-gold); }

  .tb-btn {
    display: flex; align-items: center; gap: 5px;
    padding: 6px 13px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: 'Rajdhani', sans-serif;
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: .4px;
    transition: all .18s;
    white-space: nowrap;
  }
  .tb-btn:hover { transform: translateY(-1px); filter: brightness(1.15); }
  .tb-btn:active { transform: translateY(0); }
  .tb-btn .ico { font-size: 13px; }

  .btn-load-video  { background: #f5a623; color: #1a0a00; }
  .btn-load-srt    { background: #3a7bff; color: #fff; }
  .btn-transcribe  { background: #9b59ff; color: #fff; }
  .btn-translate   { background: #1ec97e; color: #08300f; }
  .btn-rvc         { background: #00d2ff; color: #002535; }
  .btn-srt-export  { background: #ff6b35; color: #fff; }
  .btn-mp3         { background: #ff4d6a; color: #fff; }
  .btn-export      { background: linear-gradient(135deg,#1ec97e,#00d2ff); color: #001520; }

  .tb-sep { width: 1px; height: 28px; background: var(--border); margin: 0 4px; }
  .tb-spacer { flex: 1; }

  /* ─── MAIN LAYOUT ─── */
  .main {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  /* ─── LEFT PANEL ─── */
  .left-panel {
    width: 300px;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    background: var(--bg-panel);
    border-right: 1px solid var(--border);
    flex-shrink: 0;
  }

  .section-label {
    font-size: 11px;
    font-weight: 600;
    color: var(--accent-cyan);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 10px 14px 6px;
    border-bottom: 1px solid var(--border);
    background: rgba(0,210,255,.04);
  }

  .video-preview-wrap {
    position: relative;
    background: #000;
    aspect-ratio: 16/9;
    overflow: hidden;
  }
  .video-preview-wrap video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .video-placeholder {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 8px;
    color: var(--txt-muted);
    font-size: 11px;
    background: linear-gradient(135deg, #0d1020, #0a1525);
    cursor: pointer;
    transition: background .2s;
  }
  .video-placeholder:hover { background: linear-gradient(135deg, #111828, #0d1d30); }
  .video-placeholder .big-ico { font-size: 40px; opacity: .4; }

  .subtitle-overlay {
    position: absolute; bottom: 6px; left: 0; right: 0;
    text-align: center;
    font-size: 12.5px;
    font-family: 'Noto Sans Khmer', 'Rajdhani', sans-serif;
    color: #fff;
    text-shadow: 0 0 8px #000, 0 1px 3px #000;
    padding: 0 10px;
    pointer-events: none;
    line-height: 1.5;
  }

  .time-bar {
    padding: 8px 14px 4px;
    display: flex;
    justify-content: space-between;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: var(--accent-cyan);
  }

  .seek-wrap {
    padding: 0 14px 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .seek-wrap input[type=range] {
    flex: 1;
    accent-color: var(--accent-cyan);
    height: 4px;
    cursor: pointer;
  }

  .controls-row {
    display: flex; align-items: center; gap: 6px;
    padding: 6px 14px 8px;
    border-bottom: 1px solid var(--border);
  }
  .ctrl-btn {
    display: flex; align-items: center; gap: 4px;
    padding: 5px 12px;
    border-radius: 4px;
    border: 1px solid var(--border-lit);
    background: var(--bg-card);
    color: var(--txt-primary);
    font-family: 'Rajdhani', sans-serif;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all .15s;
  }
  .ctrl-btn:hover { background: var(--bg-hover); border-color: var(--accent-cyan); }
  .ctrl-btn.play-btn { background: var(--accent-green); border-color: transparent; color: #001a0a; }
  .ctrl-btn.stop-btn { background: #1a2030; border-color: var(--border-lit); }

  .speed-label {
    font-size: 11px; color: var(--txt-secondary); margin-left: 4px;
  }

  .vol-wrap { display: flex; align-items: center; gap: 6px; flex: 1; }
  .vol-wrap span { font-size: 14px; color: var(--txt-secondary); }
  .vol-wrap input[type=range] {
    flex: 1; accent-color: var(--accent-blue); height: 3px; cursor: pointer;
  }

  .speed-row {
    padding: 6px 14px 8px;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 8px;
  }
  .speed-row label { font-size: 11px; color: var(--txt-secondary); min-width: 70px; }
  .speed-row select {
    background: var(--bg-card);
    border: 1px solid var(--border-lit);
    color: var(--txt-primary);
    font-family: 'Rajdhani', sans-serif;
    font-size: 12px;
    padding: 3px 6px;
    border-radius: 4px;
    cursor: pointer;
    flex: 1;
  }

  .file-info {
    padding: 6px 14px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: var(--txt-muted);
    border-bottom: 1px solid var(--border);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Voice Settings */
  .voice-settings {
    padding: 10px 14px;
    display: flex; flex-direction: column; gap: 7px;
    border-bottom: 1px solid var(--border);
  }
  .vs-row { display: flex; align-items: center; gap: 8px; }
  .vs-label {
    font-size: 11px; color: var(--txt-secondary);
    min-width: 56px; font-weight: 600;
  }
  .vs-row select, .vs-row input[type=text] {
    background: var(--bg-card);
    border: 1px solid var(--border-lit);
    color: var(--txt-primary);
    font-family: 'Rajdhani', sans-serif;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    flex: 1;
    cursor: pointer;
  }
  .vs-row input[type=range] {
    flex: 1; accent-color: var(--accent-purple); height: 3px; cursor: pointer;
  }

  /* Social */
  .social-block {
    margin-top: auto;
    border-top: 1px solid var(--border);
  }
  .social-header {
    padding: 8px 14px;
    font-size: 12px;
    font-weight: 700;
    color: var(--accent-cyan);
    letter-spacing: .5px;
    display: flex; align-items: center; gap: 6px;
  }
  .social-admin {
    background: linear-gradient(90deg, #1a3a6a, #1a2d50);
    border: 1px solid #2a4a88;
    margin: 0 10px 6px;
    border-radius: 5px;
    padding: 7px 10px;
    display: flex; align-items: center; gap: 8px;
    font-size: 12px;
    font-weight: 600;
    color: #7ab3ff;
    cursor: pointer;
  }
  .social-channel {
    background: var(--bg-card);
    border: 1px solid var(--border);
    margin: 0 10px 6px;
    border-radius: 5px;
    padding: 7px 10px;
    display: flex; align-items: center; gap: 8px;
    font-size: 12px;
    color: var(--txt-secondary);
    cursor: pointer;
    transition: border-color .15s;
  }
  .social-channel:hover { border-color: var(--accent-cyan); color: var(--txt-primary); }
  .donate-bar {
    background: linear-gradient(90deg, #1a3010, #0d1f0a);
    border: 1px solid #2a5020;
    margin: 0 10px 10px;
    border-radius: 5px;
    padding: 7px 10px;
    display: flex; align-items: center; gap: 8px;
    font-size: 12px;
    font-weight: 700;
    color: var(--accent-green);
  }

  /* ─── RIGHT PANEL ─── */
  .right-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--bg-deep);
  }

  .queue-header {
    display: flex; align-items: center;
    padding: 10px 16px;
    background: var(--bg-panel);
    border-bottom: 1px solid var(--border);
    gap: 10px;
    flex-shrink: 0;
  }
  .queue-title {
    font-size: 15px;
    font-weight: 700;
    color: var(--txt-primary);
    letter-spacing: .5px;
  }
  .queue-title span { color: var(--txt-secondary); font-weight: 400; }
  .queue-count {
    background: var(--bg-card);
    border: 1px solid var(--border-lit);
    border-radius: 10px;
    padding: 1px 8px;
    font-size: 11px;
    color: var(--accent-cyan);
    font-family: 'JetBrains Mono', monospace;
  }

  .gen-btn {
    margin-left: auto;
    background: linear-gradient(135deg, #1ec97e, #00a060);
    color: #001a0a;
    border: none;
    border-radius: 5px;
    padding: 7px 16px;
    font-family: 'Rajdhani', sans-serif;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    display: flex; align-items: center; gap: 5px;
    letter-spacing: .4px;
    transition: all .18s;
    box-shadow: 0 0 15px rgba(30,201,126,.3);
  }
  .gen-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(30,201,126,.5); }
  .all-line-chk {
    display: flex; align-items: center; gap: 5px;
    font-size: 12px; color: var(--txt-secondary);
  }
  .all-line-chk input { accent-color: var(--accent-cyan); cursor: pointer; }

  /* Engine bar */
  .engine-bar {
    display: flex; align-items: center; gap: 16px;
    padding: 7px 16px;
    background: var(--bg-panel);
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    flex-wrap: wrap;
  }
  .eb-field {
    display: flex; align-items: center; gap: 6px;
    font-size: 12px;
  }
  .eb-field label { color: var(--txt-secondary); font-weight: 600; }
  .eb-field select, .eb-field input[type=text] {
    background: var(--bg-card);
    border: 1px solid var(--border-lit);
    color: var(--txt-primary);
    font-family: 'Rajdhani', sans-serif;
    font-size: 12px;
    padding: 3px 8px;
    border-radius: 4px;
    cursor: pointer;
    min-width: 90px;
  }
  .eb-sep { width:1px; height:18px; background: var(--border); }
  .gender-radio { display: flex; align-items: center; gap: 10px; }
  .gender-radio label {
    display: flex; align-items: center; gap: 4px;
    font-size: 12px; cursor: pointer;
    color: var(--txt-secondary);
    transition: color .15s;
  }
  .gender-radio label:hover { color: var(--txt-primary); }
  .gender-radio input[type=radio] { accent-color: var(--accent-cyan); }

  /* Table */
  .table-wrap {
    flex: 1;
    overflow-y: auto;
    overflow-x: auto;
  }
  .table-wrap::-webkit-scrollbar { width: 6px; height: 6px; }
  .table-wrap::-webkit-scrollbar-track { background: var(--bg-deep); }
  .table-wrap::-webkit-scrollbar-thumb { background: var(--border-lit); border-radius: 3px; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12.5px;
    min-width: 860px;
  }
  thead tr {
    background: #0e1420;
    position: sticky; top: 0; z-index: 2;
  }
  thead th {
    padding: 9px 10px;
    text-align: left;
    font-size: 11px;
    font-weight: 700;
    color: var(--txt-secondary);
    letter-spacing: .8px;
    text-transform: uppercase;
    border-bottom: 2px solid var(--border);
    white-space: nowrap;
  }
  thead th:first-child { width: 42px; text-align: center; }
  thead th.col-check { width: 34px; }

  tbody tr {
    border-bottom: 1px solid rgba(42,51,72,.5);
    transition: background .1s;
    cursor: pointer;
  }
  tbody tr:nth-child(odd)  { background: var(--row-odd); }
  tbody tr:nth-child(even) { background: var(--row-even); }
  tbody tr:hover           { background: var(--row-hover); }
  tbody tr.selected        { background: var(--row-selected) !important; }
  tbody tr.playing         { background: rgba(0,210,255,.08) !important; border-left: 2px solid var(--accent-cyan); }

  tbody td {
    padding: 7px 10px;
    vertical-align: middle;
  }
  td.col-num {
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--txt-muted);
    width: 36px;
  }
  td.col-check { width: 34px; text-align: center; }
  td.col-check input { accent-color: var(--accent-cyan); cursor: pointer; }
  td.col-time {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: var(--txt-secondary);
    white-space: nowrap;
  }
  td.col-text {
    max-width: 320px;
    min-width: 180px;
  }
  .text-cell {
    display: flex; flex-direction: column; gap: 2px;
  }
  .text-src {
    color: var(--txt-muted);
    font-size: 10.5px;
    font-family: 'JetBrains Mono', monospace;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .text-khmer {
    color: var(--txt-primary);
    font-family: 'Noto Sans Khmer', 'Rajdhani', sans-serif;
    font-size: 12.5px;
    outline: none;
    background: transparent;
    border: none;
    width: 100%;
    cursor: text;
    transition: background .15s;
    border-radius: 3px;
    padding: 1px 3px;
  }
  .text-khmer:focus {
    background: rgba(58,123,255,.12);
    outline: 1px solid var(--accent-blue);
  }

  td.col-pitch, td.col-speed {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    text-align: center;
    color: var(--txt-secondary);
    width: 52px;
  }
  td.col-voice { width: 80px; }
  .voice-badge {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
  }
  .voice-badge.male   { background: rgba(74,158,255,.15); color: var(--male-color);   border: 1px solid rgba(74,158,255,.3); }
  .voice-badge.female { background: rgba(255,110,180,.15); color: var(--female-color); border: 1px solid rgba(255,110,180,.3); }

  td.col-status { width: 80px; }
  .status-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: .3px;
  }
  .status-pending  { background: rgba(245,166,35,.12); color: var(--pending);  border: 1px solid rgba(245,166,35,.25); }
  .status-done     { background: rgba(30,201,126,.12); color: var(--done);     border: 1px solid rgba(30,201,126,.25); }
  .status-error    { background: rgba(255,77,106,.12); color: var(--error);    border: 1px solid rgba(255,77,106,.25); }
  .status-gen      { background: rgba(0,210,255,.12);  color: var(--accent-cyan); border: 1px solid rgba(0,210,255,.25); }

  td.col-action { width: 32px; text-align: center; }
  .action-btn {
    background: none; border: none;
    color: var(--txt-muted); cursor: pointer;
    font-size: 14px; padding: 3px 5px;
    border-radius: 3px;
    transition: all .15s;
  }
  .action-btn:hover { background: var(--bg-hover); color: var(--accent-cyan); }

  /* Bottom bar */
  .bottom-bar {
    display: flex; align-items: center; gap: 10px;
    padding: 8px 16px;
    background: var(--bg-panel);
    border-top: 1px solid var(--border);
    flex-shrink: 0;
    flex-wrap: wrap;
  }
  .bottom-btn {
    background: var(--bg-card);
    border: 1px solid var(--border-lit);
    color: var(--txt-primary);
    font-family: 'Rajdhani', sans-serif;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: all .15s;
  }
  .bottom-btn:hover { background: var(--bg-hover); border-color: var(--accent-cyan); color: var(--accent-cyan); }

  .fit-chk { display: flex; align-items: center; gap: 5px; font-size: 12px; color: var(--txt-secondary); margin-left: auto; }
  .fit-chk input { accent-color: var(--accent-cyan); cursor: pointer; }

  /* ─── STATUS BAR ─── */
  .statusbar {
    display: flex; align-items: center; gap: 10px;
    padding: 5px 14px;
    background: #080a10;
    border-top: 1px solid var(--border);
    flex-shrink: 0;
    height: 30px;
  }
  .sb-icon { font-size: 14px; color: var(--accent-cyan); }
  .sb-text { font-size: 11.5px; color: var(--txt-secondary); }
  .sb-text strong { color: var(--accent-cyan); }
  .sb-spacer { flex: 1; }
  .progress-wrap {
    display: flex; align-items: center; gap: 8px;
  }
  .progress-bar-outer {
    width: 120px; height: 8px;
    background: var(--bg-card);
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid var(--border);
  }
  .progress-bar-inner {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-green), var(--accent-cyan));
    border-radius: 4px;
    transition: width .4s;
  }
  .sb-pct {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: var(--accent-cyan);
    min-width: 30px;
  }
  .stop-btn-sb {
    background: var(--accent-red);
    border: none;
    color: #fff;
    font-family: 'Rajdhani', sans-serif;
    font-size: 11.5px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 4px;
    cursor: pointer;
    display: flex; align-items: center; gap: 4px;
    transition: opacity .15s;
  }
  .stop-btn-sb:hover { opacity: .85; }

  /* ─── MODALS ─── */
  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,.75);
    display: flex; align-items: center; justify-content: center;
    z-index: 100;
    backdrop-filter: blur(4px);
    opacity: 0; pointer-events: none;
    transition: opacity .2s;
  }
  .modal-overlay.open { opacity: 1; pointer-events: all; }
  .modal {
    background: var(--bg-panel);
    border: 1px solid var(--border-lit);
    border-radius: 10px;
    padding: 22px 24px;
    max-width: 480px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(0,0,0,.6);
  }
  .modal h3 { font-size: 16px; font-weight: 700; margin-bottom: 12px; color: var(--accent-cyan); }
  .modal p  { font-size: 13px; color: var(--txt-secondary); margin-bottom: 14px; line-height: 1.6; }
  .modal-btns { display: flex; justify-content: flex-end; gap: 8px; }
  .modal-btn {
    padding: 7px 18px; border-radius: 5px; border: none;
    font-family: 'Rajdhani', sans-serif;
    font-size: 13px; font-weight: 600; cursor: pointer;
    transition: all .15s;
  }
  .modal-btn.primary { background: var(--accent-cyan); color: #002535; }
  .modal-btn.secondary { background: var(--bg-card); border: 1px solid var(--border-lit); color: var(--txt-secondary); }
  .modal-btn:hover { opacity: .85; }

  /* ─── NOTIFICATION ─── */
  .notif {
    position: fixed; bottom: 40px; right: 20px;
    background: var(--bg-card);
    border: 1px solid var(--border-lit);
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 13px;
    color: var(--txt-primary);
    box-shadow: 0 8px 30px rgba(0,0,0,.5);
    display: flex; align-items: center; gap: 8px;
    z-index: 200;
    transform: translateX(120%);
    transition: transform .3s;
    max-width: 320px;
  }
  .notif.show { transform: translateX(0); }
  .notif.success { border-color: var(--accent-green); }
  .notif.error   { border-color: var(--accent-red); }
  .notif.info    { border-color: var(--accent-cyan); }

  /* Drag highlight */
  .drag-over .video-preview-wrap {
    outline: 2px dashed var(--accent-cyan);
  }

  /* Pitch/Speed controls in table */
  .mini-slider { width: 60px; accent-color: var(--accent-purple); cursor: pointer; height: 3px; }

  /* ─── ANIMATIONS ─── */
  @keyframes pulse-glow {
    0%,100% { box-shadow: 0 0 10px rgba(30,201,126,.3); }
    50%      { box-shadow: 0 0 20px rgba(30,201,126,.7); }
  }
  .gen-btn { animation: pulse-glow 2.5s infinite; }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  .spinning { display: inline-block; animation: spin .8s linear infinite; }

  /* waveform visual */
  .waveform-canvas {
    width: 100%;
    height: 28px;
    display: block;
    background: #0d111a;
    border-top: 1px solid var(--border);
  }

  input[type=file] { display: none; }
</style>
</head>
<body>

<!-- Hidden file inputs -->
<input type="file" id="videoInput" accept="video/*">
<input type="file" id="srtInput" accept=".srt,.txt">

<!-- TITLE BAR -->
<div class="titlebar">
  <div class="app-title">Khmer Dub Studio — Professional AI Voice Dubbing Tool | Free Edition</div>
  <div class="titlebar-menu">
    <span>File</span><span>Edit</span><span>Tools</span><span>Help</span>
  </div>
  <div class="win-controls">
    <div class="win-btn min"></div>
    <div class="win-btn max"></div>
    <div class="win-btn close"></div>
  </div>
</div>

<!-- TOOLBAR -->
<div class="toolbar">
  <div class="brand">Khmer<span>Dub</span></div>
  <button class="tb-btn btn-load-video" onclick="document.getElementById('videoInput').click()">
    <span class="ico">🎬</span> Load Video
  </button>
  <button class="tb-btn btn-load-srt" onclick="document.getElementById('srtInput').click()">
    <span class="ico">📄</span> Load SRT
  </button>
  <div class="tb-sep"></div>
  <select id="srcLangSel" style="background:var(--bg-card);border:1px solid var(--border-lit);color:var(--txt-primary);font-family:'Rajdhani',sans-serif;font-size:12px;padding:5px 8px;border-radius:5px;cursor:pointer;">
    <option value="zh">🇨🇳 Chinese → Khmer</option>
    <option value="en">🇬🇧 English → Khmer</option>
    <option value="th">🇹🇭 Thai → Khmer</option>
    <option value="vi">🇻🇳 Vietnamese → Khmer</option>
    <option value="auto">🌐 Auto Detect → Khmer</option>
  </select>
  <button class="tb-btn btn-transcribe" onclick="startTranscribe()">
    <span class="ico">🎙️</span> Transcribe
  </button>
  <button class="tb-btn btn-translate" onclick="autoFillTranslation()">
    <span class="ico">🤖</span> AI Translate
  </button>
  <div class="tb-sep"></div>
  <button class="tb-btn btn-rvc" onclick="previewVoice()">
    <span class="ico">🔊</span> Voice Preview
  </button>
  <button class="tb-btn btn-srt-export" onclick="exportSRT()">
    <span class="ico">📝</span> Export SRT
  </button>
  <button class="tb-btn btn-mp3" onclick="exportMP3()">
    <span class="ico">🎵</span> Export MP3
  </button>
  <div class="tb-spacer"></div>
  <button class="tb-btn btn-export" onclick="exportDubbed()">
    <span class="ico">🚀</span> Export Dubbed
  </button>
</div>

<!-- MAIN -->
<div class="main">

  <!-- LEFT PANEL -->
  <div class="left-panel">
    <div class="section-label">▶ Video Preview</div>

    <div class="video-preview-wrap" id="videoWrap" onclick="handleVideoAreaClick()">
      <video id="videoEl" style="display:none"></video>
      <div class="video-placeholder" id="videoPlaceholder">
        <div class="big-ico">🎬</div>
        <div>Click or drag to load video</div>
        <div style="font-size:9.5px;color:var(--txt-muted)">MP4 · MKV · AVI · MOV</div>
      </div>
      <div class="subtitle-overlay" id="subtitleOverlay"></div>
    </div>

    <canvas class="waveform-canvas" id="waveCanvas"></canvas>

    <div class="time-bar">
      <span id="timeDisplay">00:00:00 / 00:00:00</span>
      <span id="fpsLabel" style="color:var(--txt-muted)">— fps</span>
    </div>

    <div class="seek-wrap">
      <input type="range" id="seekBar" min="0" max="100" value="0" oninput="seekVideo(this.value)">
    </div>

    <div class="controls-row">
      <button class="ctrl-btn play-btn" id="playBtn" onclick="togglePlay()">▶ Play</button>
      <button class="ctrl-btn stop-btn" onclick="stopVideo()">■ Stop</button>
      <div class="vol-wrap">
        <span>🔊</span>
        <input type="range" id="volBar" min="0" max="1" step="0.01" value="1"
               oninput="document.getElementById('videoEl').volume=this.value">
      </div>
    </div>

    <div class="speed-row">
      <label>Video Speed</label>
      <select id="speedSel" onchange="document.getElementById('videoEl').playbackRate=+this.value">
        <option value="0.5">Slow (0.5×)</option>
        <option value="0.75">0.75×</option>
        <option value="1" selected>Regular (1.0×)</option>
        <option value="1.25">1.25×</option>
        <option value="1.5">Fast (1.5×)</option>
        <option value="2">2.0×</option>
      </select>
    </div>

    <div class="file-info" id="fileInfo">📂 No file loaded</div>

    <div class="section-label" style="margin-top:2px">🎤 Voice Settings</div>
    <div class="voice-settings">
      <div class="vs-row">
        <span class="vs-label">Engine:</span>
        <select id="engineSel">
          <option>Web Speech API</option>
          <option>Microsoft Edge</option>
          <option>Google TTS</option>
        </select>
      </div>
      <div class="vs-row">
        <span class="vs-label">Language:</span>
        <select id="langSel" onchange="updateVoices()">
          <option value="km-KH">Khmer (ភាសាខ្មែរ)</option>
          <option value="zh-CN">Chinese (中文)</option>
          <option value="en-US">English (US)</option>
          <option value="th-TH">Thai</option>
          <option value="vi-VN">Vietnamese</option>
        </select>
      </div>
      <div class="vs-row">
        <span class="vs-label">Voice:</span>
        <select id="voiceSel"></select>
      </div>
      <div class="vs-row">
        <span class="vs-label">Pitch:</span>
        <input type="range" id="pitchGlobal" min="0.1" max="2" step="0.05" value="1">
        <span style="font-size:11px;color:var(--txt-secondary);width:28px;text-align:right" id="pitchVal">1.0</span>
      </div>
      <div class="vs-row">
        <span class="vs-label">Rate:</span>
        <input type="range" id="rateGlobal" min="0.3" max="2" step="0.05" value="1">
        <span style="font-size:11px;color:var(--txt-secondary);width:28px;text-align:right" id="rateVal">1.0</span>
      </div>
    </div>

    <div class="social-block">
      <div class="social-header">📡 Khmer Dub Studio</div>
      <div class="social-admin">👤 Admin: @KhmerDubStudio</div>
      <div class="social-channel" onclick="notify('Telegram channel coming soon','info')">
        📣 Join Channel
      </div>
      <div class="donate-bar">
        💛 Support: ABA · 001 001 495
      </div>
    </div>
  </div><!-- /left -->

  <!-- RIGHT PANEL -->
  <div class="right-panel">
    <div class="queue-header">
      <div class="queue-title">Video Queue — <span>Subtitles</span></div>
      <div class="queue-count" id="queueCount">0 lines</div>
      <div class="all-line-chk">
        <input type="checkbox" id="allLineChk" onchange="toggleSelectAll(this.checked)">
        <label for="allLineChk">All Line</label>
      </div>
      <button class="gen-btn" id="genBtn" onclick="generateSelected()">
        ✦ Generate Selected
      </button>
    </div>

    <div class="engine-bar">
      <div class="eb-field">
        <label>Engine:</label>
        <select>
          <option>Web Speech API</option>
          <option>Microsoft Edge TTS</option>
        </select>
      </div>
      <div class="eb-sep"></div>
      <div class="eb-field">
        <label>Language:</label>
        <select id="tblLangSel">
          <option value="km-KH">Khmer</option>
          <option value="zh-CN">Chinese</option>
          <option value="en-US">English</option>
        </select>
      </div>
      <div class="eb-sep"></div>
      <div class="eb-field">
        <label>Gender:</label>
        <div class="gender-radio">
          <label><input type="radio" name="gender" value="male" checked> Male</label>
          <label><input type="radio" name="gender" value="female"> Female</label>
        </div>
      </div>
      <div class="eb-sep"></div>
      <div class="eb-field">
        <label>Voice:</label>
        <select id="tblVoiceSel">
          <option>Default</option>
        </select>
      </div>
      <div class="eb-sep"></div>
      <div class="eb-field">
        <label>Voice Pitch:</label>
        <select id="tblPitchSel">
          <option>Default</option>
          <option>High</option>
          <option>Low</option>
        </select>
      </div>
    </div>

    <div class="table-wrap">
      <table id="subTable">
        <thead>
          <tr>
            <th class="col-num">#</th>
            <th class="col-check">✓</th>
            <th>Start</th>
            <th>End</th>
            <th>Text (Editable)</th>
            <th>Pitch</th>
            <th>Speed</th>
            <th>Voice</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="subBody">
          <!-- rows injected by JS -->
        </tbody>
      </table>
    </div>

    <div class="bottom-bar">
      <button class="bottom-btn" style="color:var(--accent-green);border-color:var(--accent-green)" onclick="translateSelected()">🤖 Translate Selected</button>
      <button class="bottom-btn" onclick="applyVoiceToSelected()">Apply Voice to Selected</button>
      <button class="bottom-btn" onclick="applyPitchToSelected()">Apply Pitch to Selected</button>
      <button class="bottom-btn" onclick="applySpeedToSelected()">Apply Speed to Selected</button>
      <button class="bottom-btn" style="color:var(--accent-red);border-color:var(--accent-red)" onclick="clearRows()">🗑 Clear All</button>
      <div class="fit-chk">
        <input type="checkbox" id="fitVoice" checked>
        <label for="fitVoice">↔ Fit Voice to Subtitle Duration</label>
      </div>
    </div>
  </div><!-- /right -->
</div><!-- /main -->

<!-- STATUS BAR -->
<div class="statusbar">
  <span class="sb-icon">⚡</span>
  <span class="sb-text" id="sbText">Ready — Load an SRT file then click <strong>AI Translate</strong> to convert Chinese/English → Khmer instantly</span>
  <div class="sb-spacer"></div>
  <div class="progress-wrap">
    <div class="progress-bar-outer">
      <div class="progress-bar-inner" id="progressBar" style="width:0%"></div>
    </div>
    <span class="sb-pct" id="progressPct">0%</span>
  </div>
  <button class="stop-btn-sb" id="stopGenBtn" onclick="stopGeneration()" style="display:none">
    ⏹ Stop
  </button>
</div>

<!-- NOTIFICATION -->
<div class="notif" id="notif"></div>

<!-- MODAL -->
<div class="modal-overlay" id="modalOverlay">
  <div class="modal">
    <h3 id="modalTitle">Information</h3>
    <p id="modalBody"></p>
    <div class="modal-btns">
      <button class="modal-btn secondary" onclick="closeModal()">Cancel</button>
      <button class="modal-btn primary" id="modalOk" onclick="closeModal()">OK</button>
    </div>
  </div>
</div>

<script>
// ═══════════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════════
let subtitles = [];       // [{id, start, end, src, khmer, voice, pitch, speed, status, audio}]
let generating = false;
let stopGen = false;
let currentRow = -1;
let voices = [];
let videoLoaded = false;
let audioBuffers = {};    // row id → AudioBuffer

const speechSynth = window.speechSynthesis;

// ═══════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════
window.addEventListener('load', () => {
  populateVoices();
  speechSynth.onvoiceschanged = populateVoices;
  drawWaveform();
  setupDragDrop();
});

function populateVoices() {
  voices = speechSynth.getVoices();
  updateVoices();
}

function updateVoices() {
  const lang = document.getElementById('langSel').value;
  const sel  = document.getElementById('voiceSel');
  const tbl  = document.getElementById('tblVoiceSel');
  const filtered = voices.filter(v => v.lang.startsWith(lang.split('-')[0]));
  const opts = filtered.length ? filtered : voices;

  [sel, tbl].forEach(s => {
    s.innerHTML = '';
    const def = document.createElement('option');
    def.value = ''; def.textContent = 'Default';
    s.appendChild(def);
    opts.forEach(v => {
      const o = document.createElement('option');
      o.value = v.name; o.textContent = v.name;
      s.appendChild(o);
    });
  });
}

// Sliders
document.getElementById('pitchGlobal').addEventListener('input', function() {
  document.getElementById('pitchVal').textContent = (+this.value).toFixed(1);
});
document.getElementById('rateGlobal').addEventListener('input', function() {
  document.getElementById('rateVal').textContent = (+this.value).toFixed(1);
});

// ═══════════════════════════════════════════════════════════
//  DRAG & DROP
// ═══════════════════════════════════════════════════════════
function setupDragDrop() {
  const wrap = document.getElementById('videoWrap');
  wrap.addEventListener('dragover', e => { e.preventDefault(); wrap.classList.add('drag-over'); });
  wrap.addEventListener('dragleave', () => wrap.classList.remove('drag-over'));
  wrap.addEventListener('drop', e => {
    e.preventDefault(); wrap.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (!file) return;
    if (file.type.startsWith('video/')) loadVideoFile(file);
    else if (file.name.endsWith('.srt') || file.name.endsWith('.txt')) loadSRTFile(file);
  });
  document.body.addEventListener('dragover', e => e.preventDefault());
}

// ═══════════════════════════════════════════════════════════
//  VIDEO
// ═══════════════════════════════════════════════════════════
document.getElementById('videoInput').addEventListener('change', e => {
  if (e.target.files[0]) loadVideoFile(e.target.files[0]);
});

function handleVideoAreaClick() {
  if (!videoLoaded) document.getElementById('videoInput').click();
}

function loadVideoFile(file) {
  const url = URL.createObjectURL(file);
  const vid  = document.getElementById('videoEl');
  const ph   = document.getElementById('videoPlaceholder');

  vid.src = url;
  vid.style.display = 'block';
  ph.style.display = 'none';
  videoLoaded = true;

  vid.addEventListener('loadedmetadata', () => {
    document.getElementById('seekBar').max = Math.floor(vid.duration);
    updateTimeDisplay();
    document.getElementById('fpsLabel').textContent = '~30 fps';
  });
  vid.addEventListener('timeupdate', onTimeUpdate);
  vid.addEventListener('ended', () => document.getElementById('playBtn').textContent = '▶ Play');

  const mb = (file.size / 1048576).toFixed(1);
  document.getElementById('fileInfo').textContent = `📂 ${file.name} (${mb} MB)`;
  setSBText(`Video loaded: ${file.name}`);
  notify('Video loaded successfully', 'success');
}

function togglePlay() {
  const vid = document.getElementById('videoEl');
  const btn = document.getElementById('playBtn');
  if (!videoLoaded) { notify('Load a video first', 'error'); return; }
  if (vid.paused) { vid.play(); btn.textContent = '⏸ Pause'; }
  else { vid.pause(); btn.textContent = '▶ Play'; }
}

function stopVideo() {
  const vid = document.getElementById('videoEl');
  vid.pause(); vid.currentTime = 0;
  document.getElementById('playBtn').textContent = '▶ Play';
  document.getElementById('subtitleOverlay').textContent = '';
}

function seekVideo(val) {
  const vid = document.getElementById('videoEl');
  if (videoLoaded) vid.currentTime = val;
}

function onTimeUpdate() {
  const vid = document.getElementById('videoEl');
  const ct  = vid.currentTime;
  document.getElementById('seekBar').value = ct;
  updateTimeDisplay();
  // Subtitle sync
  const sub = subtitles.find(s => ct >= s.start && ct <= s.end);
  document.getElementById('subtitleOverlay').textContent = sub ? (sub.khmer || sub.src) : '';
  // Highlight row
  const idx = subtitles.indexOf(sub);
  if (idx !== currentRow) {
    if (currentRow >= 0) document.querySelector(`tbody tr:nth-child(${currentRow+1})`)?.classList.remove('playing');
    if (idx >= 0) {
      document.querySelector(`tbody tr:nth-child(${idx+1})`)?.classList.add('playing');
      document.querySelector(`tbody tr:nth-child(${idx+1})`)?.scrollIntoView({block:'nearest'});
    }
    currentRow = idx;
  }
}

function updateTimeDisplay() {
  const vid = document.getElementById('videoEl');
  document.getElementById('timeDisplay').textContent =
    `${fmtTime(vid.currentTime)} / ${fmtTime(vid.duration || 0)}`;
}

function fmtTime(s) {
  if (isNaN(s)) return '00:00:00';
  const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = Math.floor(s%60);
  return [h,m,sec].map(x=>String(x).padStart(2,'0')).join(':');
}

// Waveform animation
function drawWaveform() {
  const c = document.getElementById('waveCanvas');
  const ctx = c.getContext('2d');
  c.width = c.offsetWidth; c.height = 28;
  let t = 0;
  function frame() {
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillStyle = '#0d111a';
    ctx.fillRect(0,0,c.width,c.height);
    const bars = Math.floor(c.width / 3);
    for (let i=0;i<bars;i++) {
      const h = videoLoaded
        ? (Math.sin(i*.3+t)*6 + Math.sin(i*.07+t*.5)*8 + 4) * (Math.random()*.3+.7)
        : 2;
      const grad = ctx.createLinearGradient(0,14-h,0,14+h);
      grad.addColorStop(0,'#00d2ff88'); grad.addColorStop(1,'#3a7bff44');
      ctx.fillStyle = grad;
      ctx.fillRect(i*3, 14-h, 2, h*2);
    }
    t += 0.04;
    requestAnimationFrame(frame);
  }
  frame();
}

// ═══════════════════════════════════════════════════════════
//  SRT LOAD & PARSE
// ═══════════════════════════════════════════════════════════
document.getElementById('srtInput').addEventListener('change', e => {
  if (e.target.files[0]) loadSRTFile(e.target.files[0]);
});

function loadSRTFile(file) {
  const reader = new FileReader();
  reader.onload = ev => {
    const text = ev.target.result;
    const parsed = parseSRT(text);
    if (!parsed.length) { notify('No subtitles found in file', 'error'); return; }
    subtitles = parsed.map((p,i) => ({
      id: i,
      start: p.start,
      end:   p.end,
      src:   p.text,
      khmer: '',
      voice: 'male',
      pitch: 0,
      speed: 0,
      status: 'Pending',
      audio: null
    }));
    renderTable();
    setProgress(0);
    setSBText(`Loaded ${subtitles.length} subtitle lines from ${file.name}`);
    document.getElementById('queueCount').textContent = `${subtitles.length} lines`;
    notify(`${subtitles.length} subtitles loaded`, 'success');
  };
  reader.readAsText(file, 'UTF-8');
}

function parseSRT(text) {
  const blocks = text.trim().replace(/\r\n/g,'\n').split(/\n\n+/);
  const results = [];
  blocks.forEach(block => {
    const lines = block.trim().split('\n');
    if (lines.length < 3) return;
    // Skip index line if numeric
    let li = 0;
    if (/^\d+$/.test(lines[0].trim())) li = 1;
    const timeLine = lines[li];
    const textLines = lines.slice(li+1).join(' ').replace(/<[^>]+>/g,'').trim();
    const m = timeLine.match(/(\d+:\d+:\d+[,\.]\d+)\s*-->\s*(\d+:\d+:\d+[,\.]\d+)/);
    if (!m) return;
    results.push({ start: parseTS(m[1]), end: parseTS(m[2]), text: textLines });
  });
  return results;
}

function parseTS(ts) {
  const [hms, ms] = ts.replace(',','.').split('.');
  const [h,m,s] = hms.split(':').map(Number);
  return h*3600 + m*60 + s + (parseInt(ms||0)/1000);
}

function srtTS(sec) {
  const h   = Math.floor(sec/3600);
  const m   = Math.floor((sec%3600)/60);
  const s   = Math.floor(sec%60);
  const ms  = Math.round((sec%1)*1000);
  return `${pad(h)}:${pad(m)}:${pad(s)},${String(ms).padStart(3,'0')}`;
}
function pad(n) { return String(n).padStart(2,'0'); }

// ═══════════════════════════════════════════════════════════
//  RENDER TABLE
// ═══════════════════════════════════════════════════════════
function renderTable() {
  const tbody = document.getElementById('subBody');
  tbody.innerHTML = '';
  subtitles.forEach((sub, i) => {
    const tr = document.createElement('tr');
    tr.dataset.id = i;
    tr.onclick = () => selectRow(i);

    const voiceBadge = `<span class="voice-badge ${sub.voice}">${sub.voice==='male'?'😊 Male':'😊 Female'}</span>`;
    const statusBadge = statusHTML(sub.status);

    tr.innerHTML = `
      <td class="col-num">${i+1}</td>
      <td class="col-check"><input type="checkbox" class="rowCheck" data-id="${i}" onclick="event.stopPropagation()"></td>
      <td class="col-time">${srtTS(sub.start)}</td>
      <td class="col-time">${srtTS(sub.end)}</td>
      <td class="col-text">
        <div class="text-cell">
          <div class="text-src" title="${sub.src}">${sub.src}</div>
          <input class="text-khmer" type="text" value="${escHtml(sub.khmer)}"
            placeholder="ប្រែ​ខ្មែរ​នៅ​ទី​នេះ…"
            data-id="${i}"
            oninput="subtitles[${i}].khmer=this.value"
            onclick="event.stopPropagation()">
        </div>
      </td>
      <td class="col-pitch">
        <input type="range" class="mini-slider" min="-50" max="50" value="${sub.pitch}"
          oninput="subtitles[${i}].pitch=+this.value;this.nextElementSibling.textContent=this.value+'%'"
          onclick="event.stopPropagation()">
        <span style="font-size:10px;color:var(--txt-muted)">${sub.pitch}%</span>
      </td>
      <td class="col-speed">
        <input type="range" class="mini-slider" min="-50" max="50" value="${sub.speed}"
          oninput="subtitles[${i}].speed=+this.value;this.nextElementSibling.textContent=this.value+'%'"
          onclick="event.stopPropagation()">
        <span style="font-size:10px;color:var(--txt-muted)">${sub.speed}%</span>
      </td>
      <td class="col-voice">${voiceBadge}</td>
      <td class="col-status">${statusBadge}</td>
      <td class="col-action">
        <button class="action-btn" title="AI Translate to Khmer" onclick="event.stopPropagation();translateSingleLine(${i})">🌐</button>
        <button class="action-btn" title="Play TTS" onclick="event.stopPropagation();playRowTTS(${i})">▶</button>
        <button class="action-btn" title="Delete" onclick="event.stopPropagation();deleteRow(${i})">✕</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function statusHTML(s) {
  const map = {
    'Pending': 'status-pending',
    'Done':    'status-done',
    'Error':   'status-error',
    'Generating': 'status-gen'
  };
  return `<span class="status-badge ${map[s]||'status-pending'}">${s}</span>`;
}

function escHtml(s) {
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function updateRowStatus(i, status) {
  subtitles[i].status = status;
  const rows = document.querySelectorAll('#subBody tr');
  if (rows[i]) {
    const cell = rows[i].querySelector('.col-status');
    if (cell) cell.innerHTML = statusHTML(status);
  }
}

function selectRow(i) {
  document.querySelectorAll('#subBody tr').forEach((r,j) => r.classList.toggle('selected', j===i));
  if (videoLoaded && subtitles[i]) {
    document.getElementById('videoEl').currentTime = subtitles[i].start;
  }
}

function deleteRow(i) {
  subtitles.splice(i, 1);
  renderTable();
  document.getElementById('queueCount').textContent = `${subtitles.length} lines`;
}

function clearRows() {
  if (!subtitles.length) return;
  openModal('Clear All', 'Are you sure you want to remove all subtitle lines?', () => {
    subtitles = [];
    renderTable();
    document.getElementById('queueCount').textContent = '0 lines';
    notify('All lines cleared', 'info');
  });
}

// ═══════════════════════════════════════════════════════════
//  SELECTION
// ═══════════════════════════════════════════════════════════
function toggleSelectAll(checked) {
  document.querySelectorAll('.rowCheck').forEach(c => c.checked = checked);
}

function getSelectedIds() {
  return [...document.querySelectorAll('.rowCheck:checked')].map(c => +c.dataset.id);
}

// ═══════════════════════════════════════════════════════════
//  TTS GENERATION
// ═══════════════════════════════════════════════════════════
async function generateSelected() {
  const ids = getSelectedIds();
  if (!ids.length) { notify('Select at least one line to generate', 'error'); return; }
  const noKhmer = ids.filter(i => !subtitles[i].khmer.trim());
  if (noKhmer.length) {
    notify(`${noKhmer.length} line(s) have empty Khmer text — they will be skipped`, 'info');
  }
  const toGen = ids.filter(i => subtitles[i].khmer.trim());
  if (!toGen.length) { notify('No lines with Khmer text to generate', 'error'); return; }

  generating = true; stopGen = false;
  document.getElementById('stopGenBtn').style.display = 'flex';
  setSBText(`Generating TTS for ${toGen.length} line(s)…`);

  for (let k=0; k<toGen.length; k++) {
    if (stopGen) break;
    const i = toGen[k];
    updateRowStatus(i, 'Generating');
    setProgress(Math.round(k/toGen.length*100));
    document.getElementById('progressPct').textContent = Math.round(k/toGen.length*100)+'%';
    try {
      await speakLine(i);
      updateRowStatus(i, 'Done');
    } catch(e) {
      updateRowStatus(i, 'Error');
    }
    await sleep(120);
  }

  setProgress(100);
  document.getElementById('progressPct').textContent = '100%';
  document.getElementById('stopGenBtn').style.display = 'none';
  generating = false;
  setSBText(`Generation complete — ${toGen.length} line(s) processed`);
  notify('TTS generation complete!', 'success');
}

async function translateSingleLine(i) {
  const sub = subtitles[i];
  if (!sub.src.trim()) { notify('No source text to translate', 'error'); return; }

  const srcLangSel = document.getElementById('srcLangSel');
  const srcLang = srcLangSel ? srcLangSel.value : 'auto';
  const langNames = { zh: 'Chinese', en: 'English', th: 'Thai', vi: 'Vietnamese', auto: 'auto-detected' };
  const langLabel = langNames[srcLang] || 'auto-detected';

  updateRowStatus(i, 'Generating');
  notify(`Translating line ${i+1}…`, 'info');

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 200,
        messages: [{
          role: 'user',
          content: `Translate this subtitle to Khmer (ភាសាខ្មែរ) for video dubbing. Source language: ${langLabel}. Return only the Khmer translation, no explanation.\n\n"${sub.src}"`
        }]
      })
    });
    const data = await resp.json();
    const translated = data.content.map(c => c.text || '').join('').trim().replace(/^["']|["']$/g, '');
    subtitles[i].khmer = translated;
    updateRowStatus(i, 'Done');
    // Update the input field in the table
    const row = document.querySelector(`#subBody tr:nth-child(${i+1})`);
    if (row) {
      const inp = row.querySelector('.text-khmer');
      if (inp) inp.value = translated;
    }
    notify(`Line ${i+1} translated`, 'success');
  } catch(e) {
    updateRowStatus(i, 'Error');
    notify('Translation failed — check connection', 'error');
  }
}

function stopGeneration() {
  stopGen = true;
  speechSynth.cancel();
  document.getElementById('stopGenBtn').style.display = 'none';
  generating = false;
  setSBText('Generation stopped by user');
  notify('Generation stopped', 'info');
}

function speakLine(i) {
  return new Promise((resolve, reject) => {
    const sub = subtitles[i];
    const text = sub.khmer.trim();
    if (!text) { resolve(); return; }

    speechSynth.cancel();
    const utt = new SpeechSynthesisUtterance(text);

    // Language
    const lang = document.getElementById('langSel').value;
    utt.lang = lang;

    // Voice
    const voiceName = document.getElementById('voiceSel').value;
    if (voiceName) {
      const v = voices.find(v => v.name === voiceName);
      if (v) utt.voice = v;
    }

    // Pitch & rate with row overrides
    const pitchBase = +document.getElementById('pitchGlobal').value;
    const rateBase  = +document.getElementById('rateGlobal').value;
    const pitchMod  = 1 + sub.pitch/100;
    const speedMod  = 1 + sub.speed/100;
    utt.pitch = Math.max(0, Math.min(2, pitchBase * pitchMod));
    utt.rate  = Math.max(0.1, Math.min(10, rateBase * speedMod));
    utt.volume = 1;

    utt.onend   = () => resolve();
    utt.onerror = (e) => reject(e);

    speechSynth.speak(utt);
  });
}

function playRowTTS(i) {
  const sub = subtitles[i];
  if (!sub.khmer.trim()) { notify('No Khmer text to speak', 'error'); return; }
  speechSynth.cancel();
  speakLine(i)
    .then(() => notify('Done speaking line '+(i+1), 'success'))
    .catch(() => notify('Speech error', 'error'));
}

// ═══════════════════════════════════════════════════════════
//  TOOLBAR ACTIONS
// ═══════════════════════════════════════════════════════════
function startTranscribe() {
  if (!subtitles.length) {
    openModal('Transcribe',
      'No subtitle lines loaded.\n\nTo use AI transcription:\n' +
      '1. Load an SRT file with timestamps (the text can be in any language)\n' +
      '2. The AI Translate button will then convert all source text to Khmer\n\n' +
      'Tip: Many video platforms let you download subtitles as .srt files.\n' +
      'You can also paste Chinese or English text into the source column manually.');
    return;
  }
  autoFillTranslation();
}

async function autoFillTranslation() {
  if (!subtitles.length) { notify('Load subtitles first', 'error'); return; }

  const srcLangSel = document.getElementById('srcLangSel');
  const srcLang = srcLangSel ? srcLangSel.value : 'auto';
  const langNames = { zh: 'Chinese', en: 'English', th: 'Thai', vi: 'Vietnamese', auto: 'the detected language' };
  const langLabel = langNames[srcLang] || 'the detected language';

  // Only translate lines without Khmer text, or all if none translated yet
  const toTranslate = subtitles.filter(s => !s.khmer.trim());
  if (!toTranslate.length) {
    notify('All lines already translated. Clear Khmer fields to re-translate.', 'info');
    return;
  }

  // Batch: translate up to 30 lines at a time to avoid token limits
  const BATCH = 30;
  const batches = [];
  for (let i = 0; i < toTranslate.length; i += BATCH) batches.push(toTranslate.slice(i, i + BATCH));

  generating = true; stopGen = false;
  document.getElementById('stopGenBtn').style.display = 'flex';
  setSBText(`🤖 AI translating ${toTranslate.length} lines from ${langLabel} to Khmer…`);
  setProgress(0);

  let done = 0;
  for (const batch of batches) {
    if (stopGen) break;

    // Build numbered list for Claude
    const numbered = batch.map((s, i) => `${i + 1}. ${s.src}`).join('\n');
    const srcInstruction = srcLang === 'auto'
      ? 'Detect the source language automatically.'
      : `The source language is ${langLabel}.`;

    const prompt = `You are a professional subtitle translator specializing in ${langLabel} to Khmer (ភាសាខ្មែរ) translation for video dubbing.

${srcInstruction}
Translate each numbered subtitle line to natural, spoken Khmer suitable for dubbing.
Keep translations concise to match the original subtitle timing.
Return ONLY a JSON array of translated strings in the same order, no other text.
Example output: ["ការ​បកប្រែ​ទី​១", "ការ​បកប្រែ​ទី​២"]

Lines to translate:
${numbered}`;

    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      if (!resp.ok) throw new Error(`API error ${resp.status}`);
      const data = await resp.json();
      const rawText = data.content.map(c => c.text || '').join('');

      // Parse JSON array from response
      const jsonMatch = rawText.match(/\[[\s\S]*\]/);
      if (!jsonMatch) throw new Error('No JSON array in response');
      const translations = JSON.parse(jsonMatch[0]);

      // Apply translations
      batch.forEach((sub, i) => {
        if (translations[i]) {
          subtitles[sub.id].khmer = translations[i];
          updateRowStatus(sub.id, 'Done');
        }
      });

      done += batch.length;
      setProgress(Math.round(done / toTranslate.length * 100));
      renderTable();
      notify(`Translated ${done}/${toTranslate.length} lines…`, 'info');

    } catch (err) {
      // Fallback: try line by line
      for (const sub of batch) {
        if (stopGen) break;
        try {
          const r2 = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              model: 'claude-sonnet-4-20250514',
              max_tokens: 200,
              messages: [{
                role: 'user',
                content: `Translate this subtitle to Khmer (ភាសាខ្មែរ) for video dubbing. Source: ${langLabel}. Return only the Khmer translation, nothing else.\n\n"${sub.src}"`
              }]
            })
          });
          const d2 = await r2.json();
          const t2 = d2.content.map(c => c.text || '').join('').trim().replace(/^["']|["']$/g, '');
          subtitles[sub.id].khmer = t2;
          updateRowStatus(sub.id, 'Done');
        } catch(e2) {
          updateRowStatus(sub.id, 'Error');
        }
        done++;
        setProgress(Math.round(done / toTranslate.length * 100));
      }
      renderTable();
    }
  }

  setProgress(100);
  document.getElementById('stopGenBtn').style.display = 'none';
  generating = false;

  const doneCount = subtitles.filter(s => s.khmer.trim()).length;
  setSBText(`✅ AI translation complete — ${doneCount} lines translated to Khmer`);
  notify(`Translation complete! ${doneCount} lines translated to Khmer`, 'success');
}

function previewVoice() {
  const voices_list = speechSynth.getVoices();
  const lang = document.getElementById('langSel').value;
  const utt = new SpeechSynthesisUtterance('ស្វាគមន៍​មក​កាន់​ Khmer Dub Studio');
  utt.lang = lang;
  const v = voices_list.find(v => v.lang.startsWith(lang.split('-')[0]));
  if (v) utt.voice = v;
  utt.pitch  = +document.getElementById('pitchGlobal').value;
  utt.rate   = +document.getElementById('rateGlobal').value;
  speechSynth.cancel();
  speechSynth.speak(utt);
  notify('Playing voice preview…', 'info');
}

function exportSRT() {
  if (!subtitles.length) { notify('No subtitles to export', 'error'); return; }
  let out = '';
  subtitles.forEach((s, i) => {
    out += `${i+1}\n${srtTS(s.start)} --> ${srtTS(s.end)}\n${s.khmer || s.src}\n\n`;
  });
  downloadText(out, 'khmer_dubbed.srt');
  notify('SRT exported successfully', 'success');
}

function exportMP3() {
  openModal('Export MP3',
    'MP3 export requires generated TTS audio streams.\n\n' +
    '1. Select all lines\n' +
    '2. Click "Generate Selected"\n' +
    '3. Then use your system audio recorder while playing\n\n' +
    'Full audio export requires a desktop app. This browser version provides TTS playback.');
}

function exportDubbed() {
  openModal('Export Dubbed Video',
    'Full video dubbing (audio replacement) requires server-side processing with FFmpeg.\n\n' +
    'To export:\n' +
    '1. Export the Khmer SRT file\n' +
    '2. Export the MP3 audio track\n' +
    '3. Use FFmpeg: ffmpeg -i video.mp4 -i audio.mp3 -c:v copy output.mp4\n\n' +
    'Or use the Desktop version of Khmer Dub Studio for one-click export.');
}

async function translateSelected() {
  const ids = getSelectedIds();
  if (!ids.length) { notify('Select at least one line to translate', 'error'); return; }

  const srcLangSel = document.getElementById('srcLangSel');
  const srcLang = srcLangSel ? srcLangSel.value : 'auto';
  const langNames = { zh: 'Chinese', en: 'English', th: 'Thai', vi: 'Vietnamese', auto: 'auto-detected' };
  const langLabel = langNames[srcLang] || 'auto-detected';

  generating = true; stopGen = false;
  document.getElementById('stopGenBtn').style.display = 'flex';
  setSBText(`🤖 AI translating ${ids.length} selected lines…`);

  for (let k = 0; k < ids.length; k++) {
    if (stopGen) break;
    const i = ids[k];
    if (!subtitles[i].src.trim()) continue;
    updateRowStatus(i, 'Generating');
    setProgress(Math.round(k / ids.length * 100));
    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 200,
          messages: [{ role: 'user', content: `Translate to Khmer (ភាសាខ្មែរ) for video dubbing. Source: ${langLabel}. Only return the Khmer text.\n\n"${subtitles[i].src}"` }]
        })
      });
      const data = await resp.json();
      const t = data.content.map(c => c.text || '').join('').trim().replace(/^["']|["']$/g, '');
      subtitles[i].khmer = t;
      updateRowStatus(i, 'Done');
      const row = document.querySelector(`#subBody tr:nth-child(${i+1})`);
      if (row) { const inp = row.querySelector('.text-khmer'); if (inp) inp.value = t; }
    } catch(e) { updateRowStatus(i, 'Error'); }
    await sleep(80);
  }

  setProgress(100);
  document.getElementById('stopGenBtn').style.display = 'none';
  generating = false;
  renderTable();
  setSBText(`✅ Selected lines translated to Khmer`);
  notify(`${ids.length} line(s) translated`, 'success');
}

// ═══════════════════════════════════════════════════════════
//  BATCH APPLY
// ═══════════════════════════════════════════════════════════
function applyVoiceToSelected() {
  const ids = getSelectedIds();
  const gender = document.querySelector('input[name=gender]:checked').value;
  ids.forEach(i => subtitles[i].voice = gender);
  renderTable();
  notify(`Voice applied to ${ids.length} line(s)`, 'success');
}

function applyPitchToSelected() {
  const ids = getSelectedIds();
  const pitch = +document.getElementById('pitchGlobal').value;
  ids.forEach(i => subtitles[i].pitch = Math.round((pitch-1)*100));
  renderTable();
  notify(`Pitch applied to ${ids.length} line(s)`, 'success');
}

function applySpeedToSelected() {
  const ids = getSelectedIds();
  const rate = +document.getElementById('rateGlobal').value;
  ids.forEach(i => subtitles[i].speed = Math.round((rate-1)*100));
  renderTable();
  notify(`Speed applied to ${ids.length} line(s)`, 'success');
}

// ═══════════════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════════════
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function setProgress(pct) {
  document.getElementById('progressBar').style.width = pct+'%';
  document.getElementById('progressPct').textContent = pct+'%';
}

function setSBText(txt) {
  document.getElementById('sbText').innerHTML = txt;
}

function downloadText(content, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], {type:'text/plain;charset=utf-8'}));
  a.download = filename;
  a.click();
}

// ─── Notification ───
let notifTimer;
function notify(msg, type='info') {
  const n = document.getElementById('notif');
  const icon = {success:'✅',error:'❌',info:'ℹ️'}[type]||'ℹ️';
  n.innerHTML = `<span>${icon}</span> ${msg}`;
  n.className = `notif show ${type}`;
  clearTimeout(notifTimer);
  notifTimer = setTimeout(() => n.classList.remove('show'), 3500);
}

// ─── Modal ───
let modalCallback = null;
function openModal(title, body, cb) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').textContent  = body;
  document.getElementById('modalOverlay').classList.add('open');
  modalCallback = cb || null;
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  if (modalCallback) { modalCallback(); modalCallback = null; }
}

// ─── Load demo SRT for testing ───
function loadDemoData() {
  const demo = `1
00:00:00,500 --> 00:00:02,000
所創。

2
00:00:02,000 --> 00:00:04,000
只要沒要它。

3
00:00:04,000 --> 00:00:06,000
就可以解开封印。

4
00:00:06,000 --> 00:00:08,000
既然如此。

5
00:00:08,000 --> 00:00:10,000
为何做萬年間

6
00:00:10,000 --> 00:00:12,000
不曾有人鑒賞此曲？

7
00:00:12,000 --> 00:00:14,000
此曲本為天道。

8
00:00:14,000 --> 00:00:16,500
若沒有通天徹地之能。

9
00:00:16,500 --> 00:00:18,000
根本無法演奏。

10
00:00:18,000 --> 00:00:20,000
那如今奏響此曲。`;
  const parsed = parseSRT(demo);
  subtitles = parsed.map((p,i) => ({
    id:i, start:p.start, end:p.end, src:p.text,
    khmer:'', voice:'male', pitch:0, speed:0, status:'Pending', audio:null
  }));
  renderTable();
  document.getElementById('queueCount').textContent = `${subtitles.length} lines`;
  setSBText(`Demo data loaded — ${subtitles.length} Chinese subtitle lines ready. Click <strong>🤖 AI Translate</strong> to convert all to Khmer!`);
  notify('Demo SRT loaded — click AI Translate to convert to Khmer!', 'success');
}

// Auto-load demo on start
setTimeout(loadDemoData, 800);
</script>
</body>
</html>
