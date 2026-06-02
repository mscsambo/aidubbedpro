/**
 * AI Dubbed Pro - ChatGPT Plus Store
 * Frontend application logic for Telegram Web App
 */

// ==================== CONFIGURATION ====================
const CONFIG = {
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000/api',
  TELEGRAM_APP: typeof window !== 'undefined' && window.Telegram?.WebApp,
};

// ==================== STATE MANAGEMENT ====================
let appState = {
  balance: 0,
  stock: 0,
  selectedPlan: 'nw',
  selectedQty: 1,
  unitPrice: 3,
  warrantyMultiplier: 1,
  loading: false,
};

// ==================== DOM ELEMENTS ====================
const DOM = {
  balanceEl: document.getElementById('balance'),
  stockEl: document.getElementById('stock'),
  stock2El: document.getElementById('stock2'),
  planButtons: document.querySelectorAll('.plan'),
  qtyButtons: document.querySelectorAll('.qty'),
  summaryTitleEl: document.getElementById('summaryTitle'),
  unitPriceEl: document.getElementById('unitPrice'),
  selectedQtyEl: document.getElementById('selectedQty'),
  totalPriceEl: document.getElementById('totalPrice'),
  durationEl: document.getElementById('duration'),
  warrantyTextEl: document.getElementById('warrantyText'),
  buyBtn: document.getElementById('buyBtn'),
  statusEl: document.getElementById('status'),
  detailsCardEl: document.getElementById('detailsCard'),
  resultCardEl: document.getElementById('resultCard'),
  orderId: document.getElementById('orderId'),
  accountsContainer: document.getElementById('accounts'),
  copyBtn: document.getElementById('copyBtn'),
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  initializeTelegramApp();
  loadInitialData();
  attachEventListeners();
  updateSummary();
});

/**
 * Initialize Telegram Web App
 */
function initializeTelegramApp() {
  if (CONFIG.TELEGRAM_APP) {
    CONFIG.TELEGRAM_APP.ready();
    CONFIG.TELEGRAM_APP.expand();
    
    // Set main button
    CONFIG.TELEGRAM_APP.MainButton.text = 'Buy Now';
    CONFIG.TELEGRAM_APP.MainButton.onClick(() => {
      handlePurchase();
    });
  }
}

/**
 * Load initial data from server
 */
async function loadInitialData() {
  try {
    showStatus('Loading...');
    const response = await fetchAPI('/products/chatgpt-plus');
    
    if (response.success) {
      const { balance, stock, duration } = response.data;
      appState.balance = balance;
      appState.stock = stock;
      appState.duration = duration;
      
      updateBalanceDisplay();
      updateStockDisplay();
      updateDurationDisplay();
      hideStatus();
    }
  } catch (error) {
    showError('Failed to load data. Please refresh.');
    console.error('Load error:', error);
  }
}

// ==================== EVENT LISTENERS ====================
function attachEventListeners() {
  // Plan selection
  DOM.planButtons.forEach(btn => {
    btn.addEventListener('click', () => selectPlan(btn));
  });

  // Quantity selection
  DOM.qtyButtons.forEach(btn => {
    btn.addEventListener('click', () => selectQty(btn));
  });

  // Buy button
  DOM.buyBtn.addEventListener('click', handlePurchase);

  // Copy button
  DOM.copyBtn.addEventListener('click', copyAccountsToClipboard);
}

/**
 * Select plan and update state
 */
function selectPlan(button) {
  DOM.planButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  const plan = button.dataset.plan;
  appState.selectedPlan = plan;
  appState.warrantyMultiplier = plan === 'fw' ? 3 : 1;

  updateSummary();
}

/**
 * Select quantity and update state
 */
function selectQty(button) {
  DOM.qtyButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  appState.selectedQty = parseInt(button.dataset.qty);
  updateSummary();
}

/**
 * Update summary display
 */
function updateSummary() {
  const plans = {
    nw: { name: '⚡ No Warranty', warranty: '❌ No warranty' },
    fw: { name: '🛡 Full Warranty', warranty: '✅ Full warranty' },
  };

  const plan = plans[appState.selectedPlan];
  const totalPrice = appState.unitPrice * appState.warrantyMultiplier * appState.selectedQty;

  DOM.summaryTitleEl.textContent = 
    `🤖 ChatGPT PLUS [1 Month] — ${plan.name}`;
  DOM.unitPriceEl.textContent = 
    `${appState.unitPrice * appState.warrantyMultiplier} credits`;
  DOM.selectedQtyEl.textContent = 
    `${appState.selectedQty} account(s)`;
  DOM.totalPriceEl.textContent = 
    `${totalPrice} credits`;
  DOM.warrantyTextEl.textContent = plan.warranty;

  // Update button state
  updateBuyButtonState(totalPrice);
}

/**
 * Update buy button state
 */
function updateBuyButtonState(totalPrice) {
  const canAfford = appState.balance >= totalPrice && appState.stock > 0;
  DOM.buyBtn.disabled = !canAfford;
  
  if (!canAfford) {
    if (appState.balance < totalPrice) {
      DOM.buyBtn.textContent = 'Insufficient Balance';
    } else if (appState.stock <= 0) {
      DOM.buyBtn.textContent = 'Out of Stock';
    }
  } else {
    DOM.buyBtn.textContent = 'Buy Now';
  }
}

/**
 * Display functions
 */
function updateBalanceDisplay() {
  DOM.balanceEl.textContent = `${appState.balance} credits`;
}

function updateStockDisplay() {
  DOM.stockEl.textContent = `${appState.stock}`;
  DOM.stock2El.textContent = `${appState.stock}`;
}

function updateDurationDisplay() {
  if (appState.duration) {
    DOM.durationEl.textContent = `${appState.duration} days remaining`;
  }
}

// ==================== PURCHASE HANDLER ====================
async function handlePurchase() {
  if (appState.loading) return;

  const totalPrice = appState.unitPrice * appState.warrantyMultiplier * appState.selectedQty;

  // Validate purchase
  if (appState.balance < totalPrice) {
    showError('Insufficient balance');
    return;
  }

  if (appState.stock < appState.selectedQty) {
    showError('Not enough stock available');
    return;
  }

  try {
    setLoading(true);
    showStatus('Processing payment...');

    const payload = {
      product: 'chatgpt-plus',
      plan: appState.selectedPlan,
      quantity: appState.selectedQty,
      totalPrice: totalPrice,
    };

    const response = await fetchAPI('/orders/create', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (response.success) {
      const { orderId, accounts } = response.data;
      
      // Update state
      appState.balance -= totalPrice;
      appState.stock -= appState.selectedQty;

      // Show success
      displayOrderSuccess(orderId, accounts);
      updateBalanceDisplay();
      updateStockDisplay();
      
      // Log event in Telegram
      if (CONFIG.TELEGRAM_APP) {
        CONFIG.TELEGRAM_APP.sendData(JSON.stringify({
          type: 'purchase_success',
          orderId,
          quantity: appState.selectedQty,
        }));
      }
    } else {
      showError(response.message || 'Purchase failed');
    }
  } catch (error) {
    showError('An error occurred. Please try again.');
    console.error('Purchase error:', error);
  } finally {
    setLoading(false);
  }
}

/**
 * Display order success
 */
function displayOrderSuccess(orderId, accounts) {
  DOM.orderId.textContent = orderId;
  DOM.accountsContainer.innerHTML = '';

  if (Array.isArray(accounts)) {
    accounts.forEach(account => {
      const div = document.createElement('div');
      div.className = 'account-item';
      div.textContent = account;
      DOM.accountsContainer.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.className = 'account-item';
    div.textContent = accounts;
    DOM.accountsContainer.appendChild(div);
  }

  DOM.detailsCardEl.classList.add('hidden');
  DOM.resultCardEl.classList.remove('hidden');

  showSuccess('Order completed successfully!');
}

/**
 * Copy accounts to clipboard
 */
function copyAccountsToClipboard() {
  const text = Array.from(DOM.accountsContainer.querySelectorAll('.account-item'))
    .map(el => el.textContent)
    .join('\n');

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showSuccess('Copied to clipboard!');
    }).catch(() => {
      showError('Failed to copy');
    });
  } else {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showSuccess('Copied to clipboard!');
  }
}

// ==================== STATUS MESSAGES ====================
function showStatus(message) {
  DOM.statusEl.textContent = message;
  DOM.statusEl.classList.remove('error', 'success');
  DOM.statusEl.classList.add('show');
}

function showError(message) {
  DOM.statusEl.textContent = message;
  DOM.statusEl.classList.remove('success');
  DOM.statusEl.classList.add('error', 'show');
}

function showSuccess(message) {
  DOM.statusEl.textContent = message;
  DOM.statusEl.classList.remove('error');
  DOM.statusEl.classList.add('success', 'show');
}

function hideStatus() {
  DOM.statusEl.classList.remove('show');
}

// ==================== LOADING STATE ====================
function setLoading(isLoading) {
  appState.loading = isLoading;
  DOM.buyBtn.disabled = isLoading;
  DOM.buyBtn.classList.toggle('loading', isLoading);
  
  if (isLoading) {
    DOM.buyBtn.textContent = 'Processing...';
  } else {
    updateBuyButtonState(
      appState.unitPrice * appState.warrantyMultiplier * appState.selectedQty
    );
  }
}

// ==================== API HELPER ====================
async function fetchAPI(endpoint, options = {}) {
  const url = `${CONFIG.API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...(options.headers || {}),
    },
  };

  try {
    const response = await fetch(url, mergedOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// ==================== ERROR HANDLING ====================
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled rejection:', event.reason);
});

window.addEventListener('error', event => {
  console.error('Global error:', event.error);
});
