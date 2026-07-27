// =========================================================
// TOAST NOTIFICATIONS для D&D VTT
// Самодостатній модуль: створює власний контейнер, CSS через
// <style>, чергу повідомлень з авто-зникненням.
// Виклик: import { toast } from "./toast.js";
//         toast.success("текст"); toast.info(...); і т.д.
// =========================================================

const CONTAINER_ID = "dnd-toast-container";
const STYLE_ID = "dnd-toast-style";

const STYLE_CSS = `
#${CONTAINER_ID} {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 380px;
    pointer-events: none;
}
.dnd-toast {
    pointer-events: auto;
    background: rgba(20, 20, 25, 0.92);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #ecf0f1;
    font-family: sans-serif;
    font-size: 13px;
    line-height: 1.4;
    padding: 12px 16px 12px 14px;
    border-radius: 10px;
    border-left: 4px solid #7f8c8d;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.25s ease, transform 0.25s ease;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
.dnd-toast.dnd-toast-show {
    opacity: 1;
    transform: translateX(0);
}
.dnd-toast.dnd-toast-hiding {
    opacity: 0;
    transform: translateX(40px);
}
.dnd-toast.dnd-toast-success { border-left-color: #2ecc71; }
.dnd-toast.dnd-toast-info     { border-left-color: #3498db; }
.dnd-toast.dnd-toast-warning  { border-left-color: #f39c12; }
.dnd-toast.dnd-toast-error    { border-left-color: #e74c3c; }
.dnd-toast-icon {
    display: inline-block;
    margin-right: 8px;
    font-size: 15px;
    vertical-align: middle;
}
.dnd-toast-body {
    display: inline;
    vertical-align: middle;
}
.dnd-toast-close {
    float: right;
    margin-left: 10px;
    color: #7f8c8d;
    cursor: pointer;
    font-size: 15px;
    line-height: 1;
}
.dnd-toast-close:hover { color: #ecf0f1; }
`;

const TYPE_META = {
    success: { icon: "✓" },
    info:    { icon: "ℹ" },
    warning: { icon: "⚠" },
    error:   { icon: "✕" },
};

function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = STYLE_CSS;
    document.head.appendChild(style);
}

function ensureContainer() {
    let el = document.getElementById(CONTAINER_ID);
    if (!el) {
        el = document.createElement("div");
        el.id = CONTAINER_ID;
        document.body.appendChild(el);
    }
    return el;
}

function show(message, type = "info", duration = 4000) {
    ensureStyle();
    const container = ensureContainer();
    const meta = TYPE_META[type] || TYPE_META.info;

    const toastEl = document.createElement("div");
    toastEl.className = `dnd-toast dnd-toast-${type}`;
    toastEl.innerHTML =
        `<span class="dnd-toast-close" title="Close">×</span>` +
        `<span class="dnd-toast-icon">${meta.icon}</span>` +
        `<span class="dnd-toast-body"></span>`;
    toastEl.querySelector(".dnd-toast-body").textContent = message;

    const dismiss = () => {
        toastEl.classList.add("dnd-toast-hiding");
        setTimeout(() => toastEl.remove(), 250);
    };
    toastEl.querySelector(".dnd-toast-close").addEventListener("click", dismiss);

    container.appendChild(toastEl);
    requestAnimationFrame(() => toastEl.classList.add("dnd-toast-show"));

    if (duration > 0) setTimeout(dismiss, duration);
    return toastEl;
}

export const toast = {
    success: (msg, duration) => show(msg, "success", duration),
    info:    (msg, duration) => show(msg, "info", duration),
    warning: (msg, duration) => show(msg, "warning", duration),
    error:   (msg, duration) => show(msg, "error", duration ?? 6000),
};
