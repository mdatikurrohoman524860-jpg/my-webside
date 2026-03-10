/* ===== EXTREME EXE - Premium Code Database ===== */

// --- Firebase config (replace with your project config) ---
const firebaseConfig = {
  apiKey: "AIzaSyDEViYPlG-7JTxVseCwwh0ujKNrVYeQ5p8",
  authDomain: "csharp-method-database.firebaseapp.com",
  projectId: "csharp-method-database",
  storageBucket: "csharp-method-database.firebasestorage.app",
  messagingSenderId: "778338227558",
  appId: "1:778338227558:web:dc0120774a1d0f3e7d64a7"
};

// Initialize Firebase only if config is set
let db = null;
let methodsRef = null;

function initFirebase() {
  if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "AIzaSyDEViYPlG-7JTxVseCwwh0ujKNrVYeQ5p8") {
    try {
      firebase.initializeApp(firebaseConfig);
      db = firebase.firestore();
      methodsRef = db.collection("methods");
      return true;
    } catch (e) {
      console.warn("Firebase init failed:", e);
    }
  }
  return false;
}

const firebaseReady = initFirebase();

// Fallback in-memory store when Firebase is not configured
let fallbackMethods = [
  {
    id: "fallback-aimbot",
    name: "Aimbot",
    description: "Memory-based target acquisition using AoB scanning to find dynamic offsets for player coordinates.",
    category: "csharp",
    logicName: "Aimbot Logic",
    overview: "Memory-based target acquisition using AoB scanning to find dynamic offsets for player coordinates.",
    uiRequirements: ["Guna2Button  btnAimbot  Toggle Aimbot", "Label  Sta  Status Display"],
    dependencies: ["AIM_MEM.cs"],
    implementationNote: "Integrate these modules within your primary form events. Ensure all Guna UI names match your designer properties exactly to avoid runtime exceptions.",
    codeBlocks: [
      { label: "[1] Aimbot Method (IN CLASS)", code: `private static INTERNAL AYUSH = new INTERNAL();
string AimbotScan = "FF FF 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FF FF FF FF FF FF FF FF 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? 00 00 00 00 00 00 00 00 00 00 00 00 A5 43";
string headoffset = "0xA9";
string chestoffset = "0xA5";
private Dictionary<long, int> OrginalValues1 = new Dictionary<long, int>();
private Dictionary<long, int> OrginalValues2 = new Dictionary<long, int>();
private Dictionary<long, int> OrginalValues3 = new Dictionary<long, int>();
private Dictionary<long, int> OrginalValues4 = new Dictionary<long, int>();` },
      { label: "(IN BUTTON)", code: `Stopwatch sw = Stopwatch.StartNew();
OrginalValues1.Clear();
OrginalValues2.Clear();
OrginalValues3.Clear();
OrginalValues4.Clear();
if (Process.GetProcessesByName("HD-Player").Length == 0)
{
    Sta.Text = "EMULATOR NOT FOUND...";
}
else
{
    Sta.Text = "Applying...";
    Int64 readoffset = Convert.ToInt64(headoffset, 16);
    Int64 writeoffset = Convert.ToInt64(chestoffset, 16);
    Int32 proc = Process.GetProcessesByName("HD-Player")[0].Id;
    AYUSH.OpenProcess(proc);
    var result = await AYUSH.AoBScan2(AimbotScan, true, true);
    int foundCount = result.Count();
    if (foundCount != 0)
    {
        foreach (var CurrentAddress in result)
        {
            Int64 addressToSave = CurrentAddress + writeoffset;
            var currentBytes = AYUSH.readMemory(addressToSave.ToString("X"), sizeof(int));
            int currentValue = BitConverter.ToInt32(currentBytes, 0); OrginalValues1[addressToSave] = currentValue;
            Int64 addressToSave9 = CurrentAddress + readoffset;
            var currentBytes9 = AYUSH.readMemory(addressToSave9.ToString("X"), sizeof(int));
            int currentValue9 = BitConverter.ToInt32(currentBytes9, 0); OrginalValues2[addressToSave9] = currentValue9;
            Int64 headbytes = CurrentAddress + readoffset;
            Int64 chestbytes = CurrentAddress + writeoffset;
            var bytes = AYUSH.readMemory(headbytes.ToString("X"), sizeof(int));
            int Read = BitConverter.ToInt32(bytes, 0);
            var bytes2 = AYUSH.readMemory(chestbytes.ToString("X"), sizeof(int));
            int Read2 = BitConverter.ToInt32(bytes2, 0);
            AYUSH.WriteMemory(chestbytes.ToString("X"), "int", Read.ToString());
            AYUSH.WriteMemory(headbytes.ToString("X"), "int", Read2.ToString());
        }
        sw.Stop();
        Sta.Text = $"Aimbot Activated ({foundCount} found, {sw.Elapsed.TotalSeconds:F2} sec)";
        Console.Beep(2000, 400);
    }
    else
    {
        sw.Stop();
        Sta.Text = $"Aimbot Failed ({foundCount} found)";
        Console.Beep(1000, 400);
    }
}` }
    ],
    dateAdded: new Date().toISOString()
  },
  {
    id: "fallback-1",
    name: "Truncate String",
    description: "Truncates a string to a max length with ellipsis.",
    category: "csharp",
    code: "public static string Truncate(this string value, int maxLength)\n{\n    if (string.IsNullOrEmpty(value)) return value;\n    return value.Length <= maxLength ? value : value.Substring(0, maxLength) + \"...\";\n}",
    dateAdded: new Date().toISOString()
  },
  {
    id: "fallback-2",
    name: "Is Valid Email",
    description: "Validates an email address using regex.",
    category: "csharp",
    code: "public static bool IsValidEmail(string email)\n{\n    if (string.IsNullOrWhiteSpace(email)) return false;\n    var regex = new System.Text.RegularExpressions.Regex(@\"^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$\");\n    return regex.IsMatch(email);\n}",
    dateAdded: new Date().toISOString()
  },
  {
    id: "fallback-3",
    name: "To Title Case",
    description: "Converts a string to title case.",
    category: "csharp",
    code: "public static string ToTitleCase(this string value)\n{\n    if (string.IsNullOrEmpty(value)) return value;\n    var culture = System.Globalization.CultureInfo.CurrentCulture;\n    return culture.TextInfo.ToTitleCase(value.ToLower());\n}",
    dateAdded: new Date().toISOString()
  }
];

// --- Category display labels ---
const CATEGORY_LABELS = {
  python: "Python", csharp: "C#", cpp: "C++", java: "Java",
  javascript: "JavaScript", typescript: "TypeScript", go: "Go (Golang)",
  rust: "Rust", kotlin: "Kotlin", swift: "Swift"
};
function getCategoryLabel(cat) {
  return CATEGORY_LABELS[cat] || cat || "C#";
}

// --- Admin (simple client-side password; replace with Firebase Auth in production) ---
const ADMIN_PASSWORD = "admin123";
const ADMIN_KEY = "csharp_db_admin";

function isAdmin() {
  return sessionStorage.getItem(ADMIN_KEY) === "true";
}

function setAdmin(value) {
  if (value) sessionStorage.setItem(ADMIN_KEY, "true");
  else sessionStorage.removeItem(ADMIN_KEY);
}

// --- DOM refs ---
const mainSearch = document.getElementById("main-search");
const categoryFilters = document.querySelectorAll(".filter-btn");
const methodsGrid = document.getElementById("methods-grid");
const methodsLoading = document.getElementById("methods-loading");
const methodsEmpty = document.getElementById("methods-empty");
const methodModal = document.getElementById("method-modal");
const modalBackdrop = methodModal?.querySelector(".modal-backdrop");
const modalClose = methodModal?.querySelector(".modal-close");
const modalMethodName = document.getElementById("modal-method-name");
const modalImplLogic = document.getElementById("modal-impl-logic");
const modalMethodDesc = document.getElementById("modal-method-desc");
const modalUiRequirements = document.getElementById("modal-ui-requirements");
const modalDependencies = document.getElementById("modal-dependencies");
const modalImplementationNote = document.getElementById("modal-implementation-note");
const modalCodeBlocks = document.getElementById("modal-code-blocks");
const modalCopyBtn = document.getElementById("modal-copy-btn");
let currentModalMethod = null;
const adminLink = document.getElementById("admin-link");
const adminSection = document.getElementById("admin");
const adminLogin = document.getElementById("admin-login");
const adminPanel = document.getElementById("admin-panel");
const adminPassword = document.getElementById("admin-password");
const adminLoginBtn = document.getElementById("admin-login-btn");
const adminLoginError = document.getElementById("admin-login-error");
const adminLogout = document.getElementById("admin-logout");
const adminFormTitle = document.getElementById("admin-form-title");
const adminMethodName = document.getElementById("admin-method-name");
const adminMethodDesc = document.getElementById("admin-method-desc");
const adminMethodCategory = document.getElementById("admin-method-category");
const adminMethodCode = document.getElementById("admin-method-code");
const adminSaveBtn = document.getElementById("admin-save-btn");
const adminCancelBtn = document.getElementById("admin-cancel-btn");
const adminStatus = document.getElementById("admin-status");
const adminMethodsList = document.getElementById("admin-methods-list");

// --- State ---
let allMethods = [];
let currentCategory = "all";
let editingId = null;

// --- Particle.js ---
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#00ff88" },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 2.5, random: true },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        outModes: { default: "bounce" }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.2 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
}

// --- AOS ---
if (typeof AOS !== "undefined") {
  AOS.init({ duration: 600, once: true, offset: 80 });
}

// --- Fetch methods (Firebase or fallback) ---
function fetchMethods(callback) {
  if (firebaseReady && methodsRef) {
    methodsRef.orderBy("dateAdded", "desc").onSnapshot(
      (snapshot) => {
        allMethods = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        callback(allMethods);
      },
      (err) => {
        console.warn("Firebase snapshot error:", err);
        allMethods = [...fallbackMethods];
        callback(allMethods);
      }
    );
  } else {
    allMethods = [...fallbackMethods];
    callback(allMethods);
  }
}

// --- Render method cards ---
function renderMethods(list) {
  if (!methodsGrid) return;
  methodsLoading?.classList.add("hidden");
  methodsEmpty?.classList.add("hidden");

  const filtered = filterMethods(list);
  const statCount = document.getElementById("stat-count");
  if (statCount) statCount.textContent = allMethods.length;
  if (filtered.length === 0) {
    methodsEmpty?.classList.remove("hidden");
    methodsGrid.innerHTML = "";
    methodsGrid.appendChild(methodsEmpty);
    return;
  }

  const fragment = document.createDocumentFragment();
  filtered.forEach((m, i) => {
    const card = document.createElement("div");
    card.className = "method-card";
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <h3>${escapeHtml(m.name)}</h3>
      <p>${escapeHtml(m.description || "")}</p>
      <div class="method-card-footer">
        <span class="method-category-tag">${escapeHtml(getCategoryLabel(m.category))}</span>
        <button type="button" class="view-method-btn" data-id="${escapeHtml(m.id)}">View Method</button>
      </div>
    `;
    card.querySelector(".view-method-btn").addEventListener("click", () => openMethodModal(m));
    fragment.appendChild(card);
  });

  methodsGrid.innerHTML = "";
  methodsGrid.appendChild(fragment);
}

function filterMethods(list) {
  const q = (mainSearch?.value || "").trim().toLowerCase();
  const cat = currentCategory;
  return list.filter((m) => {
    const matchCat = cat === "all" || (m.category || "").toLowerCase() === cat;
    const matchSearch =
      !q ||
      (m.name || "").toLowerCase().includes(q) ||
      (m.description || "").toLowerCase().includes(q) ||
      (m.overview || "").toLowerCase().includes(q) ||
      (m.logicName || "").toLowerCase().includes(q) ||
      (m.category || "").toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// --- Method modal (Implementation view) ---
function openMethodModal(m) {
  if (!methodModal || !modalMethodName) return;
  currentModalMethod = m;
  modalMethodName.textContent = m.name;
  modalImplLogic.textContent = m.logicName || m.category ? getCategoryLabel(m.category) + " Logic" : "";
  modalMethodDesc.textContent = m.overview || m.description || "";
  // UI Requirements
  if (modalUiRequirements) {
    modalUiRequirements.innerHTML = "";
    const items = m.uiRequirements || [];
    items.forEach((item) => {
      const li = document.createElement("li");
      const parts = String(item).split(/\s{2,}/);
      if (parts.length >= 3) {
        li.innerHTML = `<span class="impl-ui-type">${escapeHtml(parts[0])}</span> <span class="impl-ui-id">${escapeHtml(parts[1])}</span> <span class="impl-ui-desc">${escapeHtml(parts[2])}</span>`;
      } else {
        li.textContent = item;
      }
      modalUiRequirements.appendChild(li);
    });
  }
  document.getElementById("impl-ui-req-section")?.classList.toggle("hidden", !(m.uiRequirements && m.uiRequirements.length));
  // Dependencies
  if (modalDependencies) {
    modalDependencies.innerHTML = "";
    const deps = m.dependencies || [];
    deps.forEach((dep) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="impl-dep-arrow">⬇️</span> ${escapeHtml(dep)}`;
      modalDependencies.appendChild(li);
    });
  }
  document.getElementById("impl-deps-section")?.classList.toggle("hidden", !(m.dependencies && m.dependencies.length));
  // Implementation Note
  if (modalImplementationNote) {
    modalImplementationNote.textContent = m.implementationNote || "";
  }
  document.getElementById("impl-note-section")?.classList.toggle("hidden", !m.implementationNote);
  // Code blocks
  if (modalCodeBlocks) {
    modalCodeBlocks.innerHTML = "";
    const blocks = m.codeBlocks || [];
    if (blocks.length) {
      blocks.forEach((block, idx) => {
        const wrapper = document.createElement("div");
        wrapper.className = "impl-code-block-wrap";
        wrapper.innerHTML = `
          <div class="impl-code-label">${escapeHtml(block.label)}</div>
          <div class="code-block-wrapper">
            <div class="code-block-header">
              <span>${getCategoryLabel(m.category)}</span>
              <button type="button" class="copy-btn impl-copy-single" data-index="${idx}">
                <span class="copy-text">Copy</span>
              </button>
            </div>
            <pre class="code-block"><code class="language-csharp">${escapeHtml(block.code)}</code></pre>
          </div>
        `;
        wrapper.querySelector(".impl-copy-single").addEventListener("click", () => copyCodeToClipboard(block.code));
        modalCodeBlocks.appendChild(wrapper);
        if (typeof Prism !== "undefined") Prism.highlightElement(wrapper.querySelector("code"));
      });
    } else {
      const wrapper = document.createElement("div");
      wrapper.className = "impl-code-block-wrap";
      wrapper.innerHTML = `
        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span>${getCategoryLabel(m.category)}</span>
            <button type="button" class="copy-btn impl-copy-single">
              <span class="copy-text">Copy</span>
            </button>
          </div>
          <pre class="code-block"><code class="language-csharp">${escapeHtml(m.code || "// No code")}</code></pre>
        </div>
      `;
      wrapper.querySelector(".impl-copy-single").addEventListener("click", () => copyCodeToClipboard(m.code || ""));
      modalCodeBlocks.appendChild(wrapper);
      if (typeof Prism !== "undefined") Prism.highlightElement(wrapper.querySelector("code"));
    }
  }
  modalCopyBtn?.classList.remove("copied");
  modalCopyBtn?.querySelector(".copy-done")?.classList.add("hidden");
  modalCopyBtn?.querySelector(".copy-text")?.classList.remove("hidden");
  methodModal.classList.add("is-open");
}

function closeMethodModal() {
  methodModal?.classList.remove("is-open");
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return "";
  }
}

function copyCodeToClipboard(code) {
  if (!code) return;
  navigator.clipboard.writeText(code).then(() => showToast("Copied to clipboard!"));
}

function getFullCodeFromMethod(m) {
  if (!m) return "";
  if (m.codeBlocks && m.codeBlocks.length) {
    return m.codeBlocks.map((b) => `// ${b.label}\n${b.code}`).join("\n\n");
  }
  return m.code || "";
}

// --- Copy all code ---
function copyModalCode() {
  const code = getFullCodeFromMethod(currentModalMethod);
  if (!code) return;
  navigator.clipboard.writeText(code).then(() => {
    const done = modalCopyBtn?.querySelector(".copy-done");
    const text = modalCopyBtn?.querySelector(".copy-text");
    modalCopyBtn?.classList.add("copied");
    done?.classList.remove("hidden");
    text?.classList.add("hidden");
    showToast("Copied to clipboard!");
    setTimeout(() => {
      modalCopyBtn?.classList.remove("copied");
      done?.classList.add("hidden");
      text?.classList.remove("hidden");
    }, 2000);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// --- Search & filters ---
function applySearchAndFilter() {
  renderMethods(allMethods);
}

// --- Admin panel ---
function showAdminUI() {
  if (adminSection) adminSection.classList.remove("hidden");
  if (adminLink) adminLink.classList.remove("hidden");
  if (isAdmin()) {
    adminLogin?.classList.add("hidden");
    adminPanel?.classList.remove("hidden");
    loadAdminMethodsList();
    resetAdminForm();
  } else {
    adminLogin?.classList.remove("hidden");
    adminPanel?.classList.add("hidden");
  }
}

function hideAdminUI() {
  if (adminSection) adminSection.classList.add("hidden");
  if (adminLink) adminLink.classList.add("hidden");
}

function loadAdminMethodsList() {
  if (!adminMethodsList) return;
  adminMethodsList.innerHTML = "";
  allMethods.forEach((m) => {
    const item = document.createElement("div");
    item.className = "admin-method-item";
    item.innerHTML = `
      <span>${escapeHtml(m.name)}</span>
      <span class="method-category-tag">${escapeHtml(getCategoryLabel(m.category))}</span>
      <div class="admin-item-actions">
        <button type="button" class="admin-edit-btn" data-id="${escapeHtml(m.id)}">Edit</button>
        <button type="button" class="admin-delete-btn" data-id="${escapeHtml(m.id)}">Delete</button>
      </div>
    `;
    item.querySelector(".admin-edit-btn").addEventListener("click", () => editMethod(m.id));
    item.querySelector(".admin-delete-btn").addEventListener("click", () => deleteMethod(m.id));
    adminMethodsList.appendChild(item);
  });
}

function resetAdminForm() {
  editingId = null;
  if (adminFormTitle) adminFormTitle.textContent = "Add New Method";
  if (adminMethodName) adminMethodName.value = "";
  if (adminMethodDesc) adminMethodDesc.value = "";
  if (adminMethodCategory) adminMethodCategory.value = "csharp";
  if (adminMethodCode) adminMethodCode.value = "";
  if (adminCancelBtn) adminCancelBtn.classList.add("hidden");
  if (adminStatus) adminStatus.textContent = "";
}

function editMethod(id) {
  const m = allMethods.find((x) => x.id === id);
  if (!m) return;
  editingId = id;
  if (adminFormTitle) adminFormTitle.textContent = "Edit Method";
  if (adminMethodName) adminMethodName.value = m.name || "";
  if (adminMethodDesc) adminMethodDesc.value = m.description || "";
  if (adminMethodCategory) adminMethodCategory.value = m.category || "csharp";
  if (adminMethodCode) adminMethodCode.value = m.code || "";
  if (adminCancelBtn) adminCancelBtn.classList.remove("hidden");
  if (adminStatus) adminStatus.textContent = "";
}

function deleteMethod(id) {
  if (!confirm("Delete this method?")) return;
  if (firebaseReady && methodsRef) {
    methodsRef
      .doc(id)
      .delete()
      .then(() => {
        if (adminStatus) adminStatus.textContent = "Deleted.";
        loadAdminMethodsList();
      })
      .catch((e) => {
        if (adminStatus) adminStatus.textContent = "Error: " + e.message;
      });
  } else {
    allMethods = allMethods.filter((m) => m.id !== id);
    renderMethods(allMethods);
    loadAdminMethodsList();
    if (adminStatus) adminStatus.textContent = "Deleted (local only).";
  }
}

function saveMethod() {
  const name = (adminMethodName?.value || "").trim();
  const description = (adminMethodDesc?.value || "").trim();
  const category = (adminMethodCategory?.value || "csharp").trim();
  const code = (adminMethodCode?.value || "").trim();
  if (!name) {
    if (adminStatus) adminStatus.textContent = "Enter a method name.";
    return;
  }
  const payload = {
    name,
    description,
    category: category || "csharp",
    code,
    dateAdded: editingId ? undefined : new Date().toISOString()
  };

  if (firebaseReady && methodsRef) {
    if (editingId) {
      methodsRef
        .doc(editingId)
        .update(payload)
        .then(() => {
          if (adminStatus) adminStatus.textContent = "Updated.";
          resetAdminForm();
          loadAdminMethodsList();
        })
        .catch((e) => {
          if (adminStatus) adminStatus.textContent = "Error: " + e.message;
        });
    } else {
      methodsRef
        .add(payload)
        .then(() => {
          if (adminStatus) adminStatus.textContent = "Saved.";
          resetAdminForm();
          loadAdminMethodsList();
        })
        .catch((e) => {
          if (adminStatus) adminStatus.textContent = "Error: " + e.message;
        });
    }
  } else {
    const id = editingId || "local-" + Date.now();
    const doc = {
      id,
      ...payload,
      dateAdded: payload.dateAdded || new Date().toISOString()
    };
    if (editingId) {
      const idx = allMethods.findIndex((m) => m.id === editingId);
      if (idx !== -1) allMethods[idx] = doc;
    } else {
      allMethods.unshift(doc);
    }
    renderMethods(allMethods);
    loadAdminMethodsList();
    resetAdminForm();
    if (adminStatus) adminStatus.textContent = "Saved (local only).";
  }
}

// --- Admin access: hash #admin ---
function checkAdminAccess() {
  if (window.location.hash === "#admin") {
    showAdminUI();
    document.getElementById("admin")?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    hideAdminUI();
  }
}

// --- Event listeners ---
mainSearch?.addEventListener("input", () => applySearchAndFilter());
mainSearch?.addEventListener("keyup", () => applySearchAndFilter());

categoryFilters?.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryFilters?.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category || "all";
    applySearchAndFilter();
  });
});

modalBackdrop?.addEventListener("click", closeMethodModal);
modalClose?.addEventListener("click", closeMethodModal);
modalCopyBtn?.addEventListener("click", copyModalCode);
document.getElementById("return-to-library")?.addEventListener("click", (e) => {
  e.preventDefault();
  closeMethodModal();
});

adminLoginBtn?.addEventListener("click", () => {
  const pwd = adminPassword?.value || "";
  adminLoginError?.classList.add("hidden");
  if (pwd === ADMIN_PASSWORD) {
    setAdmin(true);
    adminPassword.value = "";
    showAdminUI();
  } else {
    if (adminLoginError) {
      adminLoginError.textContent = "Invalid password.";
      adminLoginError.classList.remove("hidden");
    }
  }
});

adminLogout?.addEventListener("click", () => {
  setAdmin(false);
  showAdminUI();
  window.location.hash = "";
});

adminSaveBtn?.addEventListener("click", saveMethod);
adminCancelBtn?.addEventListener("click", resetAdminForm);

window.addEventListener("hashchange", checkAdminAccess);
window.addEventListener("load", checkAdminAccess);

document.querySelector(".menu-toggle")?.addEventListener("click", () => {
  document.querySelector(".nav")?.classList.toggle("open");
});

// --- Nav links + logo: smooth scroll + close mobile menu ---
document.querySelectorAll('header a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href === "#") return;
    if (href === "#admin") {
      document.querySelector(".nav")?.classList.remove("open");
      return;
    }
    e.preventDefault();
    const target = document.querySelector(href);
    document.querySelector(".nav")?.classList.remove("open");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
  });
});

// --- Back to top ---
const backToTop = document.getElementById("back-to-top");
backToTop?.addEventListener("click", () => {
  document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" });
});
window.addEventListener("scroll", () => {
  backToTop?.classList.toggle("visible", window.scrollY > 400);
});

// --- Keyboard shortcut: / to focus search ---
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
    e.preventDefault();
    mainSearch?.focus();
  }
  if (e.key === "Escape") {
    mainSearch?.blur();
    closeMethodModal();
  }
});

// --- Init ---
fetchMethods((list) => {
  renderMethods(list);
});
checkAdminAccess();
