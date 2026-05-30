<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
  <title>ChatGPT Plus Store</title>
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  <link rel="stylesheet" href="/static/style.css" />
</head>
<body>
  <main class="app-shell">
    <section class="hero-card">
      <div class="eyebrow">Ready-to-use account</div>
      <h1>🤖 ChatGPT PLUS <span>[1 Month]</span></h1>
      <p class="muted">Instant delivery after purchase. Format: <b>Email | Password</b></p>
      <div class="meta-row">
        <div><small>Balance</small><b id="balance">-- credits</b></div>
        <div><small>Stock</small><b id="stock">--</b></div>
      </div>
    </section>

    <section class="card">
      <h2>Choose warranty</h2>
      <div class="plan-grid">
        <button class="plan active" data-plan="nw"><span>⚡ No Warranty</span><b>3 credits</b></button>
        <button class="plan" data-plan="fw"><span>🛡 Full Warranty</span><b>9 credits</b></button>
      </div>
    </section>

    <section class="card">
      <h2>Choose amount</h2>
      <div class="qty-grid">
        <button class="qty active" data-qty="1">1</button>
        <button class="qty" data-qty="2">2</button>
        <button class="qty" data-qty="3">3</button>
        <button class="qty" data-qty="4">4</button>
      </div>
    </section>

    <section class="card details" id="detailsCard">
      <h2 id="summaryTitle">🤖 ChatGPT PLUS [1 Month] — No warranty</h2>
      <div class="divider"></div>
      <h3>🤖 Product details:</h3>
      <p>🏷️ ChatGPT Plus: 1 Month (Paypal, STABLE)</p>
      <p>💰 Price: <b id="unitPrice">3 credits</b></p>
      <p>🔢 Selected: <b id="selectedQty">1 account(s)</b></p>
      <p>💵 Total: <b id="totalPrice">3 credits</b></p>
      <p>⏳ Duration: <b id="duration">-- days remaining</b></p>
      <p>🛡️ Warranty: <b id="warrantyText">❌ No warranty</b></p>
      <p>📦 Delivery type: ✨ Ready-to-use account</p>
      <div class="divider"></div>
      <h3>📝 Description:</h3>
      <p>🎁 Ready-to-use ChatGPT Plus account for 1 month. (UPI MADE STABLE) Delivered instantly after payment (Email + Password).</p>
      <p>📧 Account type: Real Outlook/Gmail</p>
      <h3>Login Instruction:</h3>
      <ol>
        <li>Login to Outlook using given Email ID and Password.</li>
        <li>Goto ChatGPT and use same Email ID and Password to login.</li>
        <li>If it asks for code goto outlook and retrive it.</li>
      </ol>
      <p>📋 Format: <b>Email | Password</b></p>
      <p>📦 In Stock: <b id="stock2">--</b></p>
    </section>

    <button id="buyBtn" class="buy-btn">Buy Now</button>

    <section class="card result hidden" id="resultCard">
      <h2>✅ Delivered</h2>
      <p>Order ID: <b id="orderId"></b></p>
      <div id="accounts"></div>
      <button id="copyBtn" class="secondary-btn">Copy account(s)</button>
    </section>

    <p class="status" id="status"></p>
  </main>
  <script src="/static/app.js"></script>
</body>
</html>
