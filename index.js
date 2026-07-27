// =========================================================
// SVG ІКОНКИ (замість емодзі)
// Lucide-style stroke icons, inherit currentColor.
// =========================================================
const ICONS = {
    map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5v14"/></svg>`,
    minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>`,
    chevronUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
    chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
    chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11"/></svg>`,
    ai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4M22 5h-4M4 17v2M5 18H3"/></svg>`,
    image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.5-3.5L12 17"/></svg>`,
    file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"/><path d="M5 17h14l-1.5-9h2L17 5H7L4.5 8h2L5 17z"/></svg>`,
    refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 6.36 2.64L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-6.36-2.64L3 16"/><path d="M3 21v-5h5"/></svg>`,
    trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    linkOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 0 1 0 10h-2"/><line x1="8" y1="12" x2="12" y2="12"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`,
};

import { eventSource, event_types, generateQuietPrompt, generateRaw, getThumbnailUrl, getRequestHeaders, characters, this_chid, name1, main_api, getCurrentChatId } from "../../../../../script.js";
import { SECRET_KEYS, findSecret } from "../../../secrets.js";
import { toast } from "./toast.js";
import { user_avatar } from "../../../personas.js";
import { groups, selected_group } from "../../../group-chats.js";
import { getChatCompletionModel, openai_settings, chat_completion_sources } from "../../../openai.js";
import { getTextGenModel } from "../../../textgen-settings.js";
import { isMobile } from "../../../RossAscends-mods.js";

jQuery(async () => {
    // =========================================================
    // ІНТЕРФЕЙС: toolbar + бічні панелі + canvas + drawer
    // =========================================================
    const mapHtml = `
        <button id="dnd-map-collapse-btn" title="Collapse / expand map">${ICONS.map}</button>
        <div id="dnd-map-split-container">
            <div id="dnd-toolbar">
                <button class="dnd-tool-btn" id="dnd-tool-locations" data-panel="locations" title="Locations (worlds)">${ICONS.map}</button>
                <button class="dnd-tool-btn" id="dnd-tool-tokens" data-panel="tokens" title="Tokens (characters)">${ICONS.users}</button>
                <button class="dnd-tool-btn" id="dnd-tool-settings" data-panel="settings" title="Settings">${ICONS.settings}</button>
            </div>

            <!-- ПАНЕЛЬ ЛОКАЦІЙ -->
            <div id="dnd-locations-panel" class="dnd-vtt-widget dnd-side-panel">
                <div class="dnd-panel-header">
                    <span class="dnd-panel-title">${ICONS.map} Locations</span>
                    <div class="dnd-panel-header-actions">
                        <button class="dnd-panel-close" data-panel="locations" title="Close">${ICONS.close}</button>
                    </div>
                </div>
                <div class="dnd-panel-body">
                    <div class="dnd-search-wrap">
                        ${ICONS.search}
                        <input id="dnd-locs-search" class="dnd-search-input" placeholder="Search location..." autocomplete="off">
                    </div>
                    <div id="dnd-add-loc-inline" class="dnd-add-loc-inline" style="display:none;">
                        <input id="dnd-add-loc-input" class="dnd-ui-input" placeholder="Folder name (e.g. modern_apartment_01)" autocomplete="off" spellcheck="false">
                        <button id="dnd-add-loc-confirm" class="dnd-ui-btn dnd-btn-add-confirm" title="Confirm">${ICONS.check}</button>
                        <button id="dnd-add-loc-cancel" class="dnd-ui-btn dnd-btn-secondary dnd-btn-add-confirm" title="Cancel">${ICONS.close}</button>
                    </div>
                    <div id="dnd-locs-grid" class="dnd-locs-grid"></div>
                    <button id="dnd-ai-generate-loc-btn" class="dnd-ui-btn dnd-ai-btn">
                        ${ICONS.ai} By story
                    </button>
                    <a href="https://silly-map.nero-dev.online" target="_blank" id="dnd-site-link" class="dnd-ui-btn dnd-btn-secondary">${ICONS.link} Explore Maps</a>
                    <button id="dnd-add-location-btn" class="dnd-ui-btn dnd-btn-secondary">${ICONS.plus} Add location</button>
                </div>
            </div>

            <!-- ПАНЕЛЬ ТОКЕНІВ -->
            <div id="dnd-tokens-panel" class="dnd-vtt-widget dnd-side-panel">
                <div class="dnd-panel-header">
                    <span class="dnd-panel-title">${ICONS.users} Tokens</span>
                    <div class="dnd-panel-header-actions">
                        <button class="dnd-panel-close" data-panel="tokens" title="Close">${ICONS.close}</button>
                    </div>
                </div>
                <div class="dnd-panel-body">
                    <div class="dnd-ui-group">
                        <span class="dnd-ui-label">Source</span>
                        <div class="dnd-source-toggle">
                            <button class="dnd-source-toggle-btn active" data-source="auto" title="Available characters in chat">${ICONS.users} From chat</button>
                            <button class="dnd-source-toggle-btn" data-source="custom" title="Custom token">${ICONS.pin} Custom</button>
                        </div>
                    </div>

                    <div id="dnd-token-auto-block" class="dnd-ui-group">
                        <span class="dnd-ui-label">Select character</span>
                        <select id="dnd-token-auto-select" class="dnd-ui-select"></select>
                    </div>

                    <div id="dnd-token-custom-block" class="dnd-ui-group" style="display:none;">
                        <span class="dnd-ui-label">Token name</span>
                        <input type="text" id="dnd-token-name" class="dnd-ui-input" placeholder="Name">
                    </div>

                    <div class="dnd-avatar-preview empty" id="dnd-token-avatar-preview"></div>

                    <div class="dnd-ui-group">
                        <span class="dnd-ui-label">Avatar</span>
                        <div class="dnd-btn-row">
                            <button id="dnd-gallery-avatar-btn" class="dnd-ui-btn dnd-btn-secondary flex1" title="Pick from gallery">${ICONS.image} Gallery</button>
                            <button id="dnd-upload-avatar-btn" class="dnd-ui-btn dnd-btn-secondary flex1" title="Upload from file">${ICONS.file} File</button>
                        </div>
                        <input type="text" id="dnd-token-avatar" class="dnd-ui-input" placeholder="URL or emoji (optional)">
                    </div>

                    <input type="file" id="dnd-avatar-file-input" accept="image/*" style="display:none;">
                    <button id="dnd-create-token-btn" class="dnd-ui-btn">${ICONS.pin} Start placing</button>

                    <hr class="dnd-ui-divider">
                    <button id="dnd-ai-update-scene-btn" class="dnd-ui-btn dnd-ai-btn">${ICONS.ai} AI: Update positions</button>
                    <hr class="dnd-ui-divider">
                    <div id="dnd-active-tokens-list" class="dnd-active-tokens-list"></div>
                </div>
            </div>

            <!-- ПАНЕЛЬ НАЛАШТУВАНЬ -->
            <div id="dnd-settings-panel" class="dnd-vtt-widget dnd-side-panel">
                <div class="dnd-panel-header">
                    <span class="dnd-panel-title">${ICONS.settings} Settings</span>
                    <div class="dnd-panel-header-actions">
                        <button class="dnd-panel-close" data-panel="settings" title="Close">${ICONS.close}</button>
                    </div>
                </div>
                <div class="dnd-panel-body">
                    <div class="dnd-ui-group">
                        <span class="dnd-ui-label">Model for AI Director</span>
                        <div id="dnd-current-model-box" class="dnd-current-model-box">
                            <span class="dnd-current-model-label">Active default model</span>
                            <span id="dnd-current-model-name" class="dnd-current-model-name">…</span>
                        </div>
                        <input type="text" id="dnd-ai-model-input" class="dnd-ui-input" placeholder="Override: e.g. google/gemini-flash-1.5">
                        <div class="dnd-btn-row">
                            <button id="dnd-save-settings-btn" class="dnd-ui-btn flex1">${ICONS.check} Save</button>
                            <button id="dnd-reset-model-btn" class="dnd-ui-btn dnd-btn-secondary flex1" title="Reset override and use default">${ICONS.refresh} Default</button>
                        </div>
                        <span class="dnd-ui-hint">If override is empty — the default SillyTavern model is used.</span>
                    </div>
                    <hr class="dnd-ui-divider">
                    <label class="dnd-settings-checkbox" for="dnd-inject-scene-toggle">
                        <input type="checkbox" id="dnd-inject-scene-toggle" class="checkbox">
                        <span>Inject scene into chat</span>
                    </label>
                    <span class="dnd-ui-hint">Add descriptions of objects and characters to the generation context.</span>
                </div>
            </div>

            <!-- Viewport: HAS власну систему zoom/pan через CSS transform canvas.
                 Canvas завжди рендериться у внутрішній 1080x1080 бітмап — жодного
                 перемальовування при zoom/pan, тож сітка та токени не блимають. -->
            <div id="dnd-map-viewport">
                <canvas id="dnd-map-canvas" width="1080" height="1080"></canvas>
            </div>

            <!-- Кнопки навігації кімнатами поточної локації -->
            <button id="dnd-room-prev" class="dnd-room-nav" title="Previous room">${ICONS.chevronLeft}</button>
            <button id="dnd-room-next" class="dnd-room-nav" title="Next room">${ICONS.chevronRight}</button>

            <!-- Керування зумом -->
            <div id="dnd-zoom-controls">
                <button id="dnd-zoom-in" title="Zoom in">${ICONS.plus}</button>
                <button id="dnd-zoom-out" title="Zoom out">${ICONS.minus}</button>
                <button id="dnd-zoom-fit" title="Fit">${ICONS.refresh}</button>
            </div>

            <!-- Плаваюча кнопка "Скасувати розміщення" (видно лише під час placingToken) -->
            <button id="dnd-cancel-place-btn" title="Cancel placement" style="display:none;">${ICONS.close} Cancel</button>

            <!-- DRAWER: локації / кімнати -->
            <div id="dnd-session-drawer" class="dnd-vtt-widget">
                <button id="dnd-session-arrow">${ICONS.chevronUp}</button>
                <div id="dnd-session-tiles"></div>
            </div>
        </div>
    `;

    // Resolve relative to this module so UI installs under third-party/<repo>/ work.
    const ASSETS_PATH = new URL("./assets/", import.meta.url).pathname;

    // --- ДАНІ РУШІЯ ---
    // Список folder-id встановлених локацій. Джерела:
    // 1) assets/locations_index.json — seed (дефолтні локації, що постячаються з extension)
    // 2) localStorage "dnd_vtt_installed_locations" — локації, додані через UI "+ Add location"
    //    або зовнішнім установником (маркет). Метадані (name/tags/description/preview) живуть
    //    у самому layout.json кожної локації — folder-id єдине, що потрібне для реєстру.
    let installedLocIds = [];
    const layoutCache = {};
    const INSTALLED_LOC_KEY = "dnd_vtt_installed_locations";
    let isMapVisible = false;
    let currentChatId = null;
    let isLayoutReady = false;

    let placingToken = null;
    let draggedTokenId = null;
    let selectedTokenId = null; // виділений токен для переміщення (mobile tap-to-move)
    let currentMouseGridX = null;
    let currentMouseGridY = null;

    // --- НАЛАШТУВАННЯ EXTENSION ---
    const SETTINGS_KEY = "dnd_vtt_settings";
    let extSettings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    if (typeof extSettings.injectSceneContext === 'undefined') extSettings.injectSceneContext = true;

    // --- СТАН ВІДКРИТТЯ МАПИ (per chat, persistent) ---
    function mapOpenStorageKey(chatId) {
        return `dnd_vtt_map_open_${chatId}`;
    }
    function loadMapOpenState(chatId) {
        if (!chatId) return false;
        const v = localStorage.getItem(mapOpenStorageKey(chatId));
        if (v === null) {
            // За замовчуванням: на десктопі мапа відкрита, на смартфоні — закрита
            return !isMobile();
        }
        return v === "1";
    }
    function saveMapOpenState(chatId, open) {
        if (!chatId) return;
        localStorage.setItem(mapOpenStorageKey(chatId), open ? "1" : "0");
    }

    // =========================================================
    // ВІДОБРАЖЕННЯ ПОТОЧНОЇ СТАНДАРТНОЇ МОДЕЛІ
    // =========================================================
    function getCurrentModelName() {
        try {
            if (main_api === 'openai' && typeof getChatCompletionModel === 'function') {
                const m = getChatCompletionModel();
                if (m) return m;
                return null;
            }
            if (main_api === 'textgenerationwebui' && typeof getTextGenModel === 'function') {
                const m = getTextGenModel();
                if (m) return m;
            }
            if (main_api) return main_api;
        } catch (e) { /* ignore */ }
        return null;
    }
    function updateCurrentModelDisplay() {
        const name = getCurrentModelName();
        const $el = $("#dnd-current-model-name");
        if (name) {
            $el.text(name).removeClass("unknown");
        } else {
            $el.text("(unknown / text completion)").addClass("unknown");
        }
    }

    // --- ІНІЦІАЛІЗАЦІЯ ФОРМИ НАЛАШТУВАНЬ ---
    // Викликається ПІСЛЯ вставки mapHtml у DOM (у setupLayout), бо інпути живуть всередині mapHtml.
    function initSettingsForm() {
        $("#dnd-ai-model-input").val(extSettings.aiModel || "");
        // За замовчуванням інжект увімкнено (true), якщо явно не вимкнено (false).
        $("#dnd-inject-scene-toggle").prop("checked", extSettings.injectSceneContext !== false);
        updateCurrentModelDisplay();
    }
    updateCurrentModelDisplay();

    function persistSettings() {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(extSettings));
    }

    $(document).on("click", "#dnd-save-settings-btn", () => {
        const val = $("#dnd-ai-model-input").val().trim();
        if (val) extSettings.aiModel = val;
        else delete extSettings.aiModel;
        persistSettings();
        updateCurrentModelDisplay();
        const $btn = $("#dnd-save-settings-btn");
        const orig = $btn.html();
        $btn.html(`${ICONS.check} Saved`);
        setTimeout(() => $btn.html(orig), 1200);
        toast.success(val ? `Override: ${val}` : "Override reset — using default model");
    });

    $(document).on("click", "#dnd-reset-model-btn", () => {
        delete extSettings.aiModel;
        $("#dnd-ai-model-input").val("");
        persistSettings();
        updateCurrentModelDisplay();
        toast.info("Reset to default SillyTavern model");
    });

    $(document).on("change", "#dnd-inject-scene-toggle", () => {
        extSettings.injectSceneContext = $("#dnd-inject-scene-toggle").prop("checked");
        persistSettings();
        toast.info(extSettings.injectSceneContext ? "Scene injection enabled" : "Scene injection disabled");
    });

    // =========================================================
    // TOOLBAR: показ/приховання бічних панелей
    // =========================================================
    let activePanel = null;
    function openPanel(name) {
        if (activePanel === name) { closePanel(); return; }
        closePanel();
        $(`#dnd-${name}-panel`).addClass("open");
        $(`.dnd-tool-btn`).removeClass("active");
        $(`.dnd-tool-btn[data-panel="${name}"]`).addClass("active");
        activePanel = name;
        if (name === "locations") renderLocationsGrid();
        if (name === "tokens") {
            populateAutoTokens();
            if (tokenSource === "auto") {
                $("#dnd-token-auto-select").trigger("change");
            }
            renderActiveTokensList();
        }
    }
    function closePanel() {
        $(".dnd-side-panel").removeClass("open");
        $(".dnd-tool-btn").removeClass("active");
        activePanel = null;
    }
    $(document).on("click", ".dnd-tool-btn", function() {
        openPanel($(this).data("panel"));
    });
    $(document).on("click", ".dnd-panel-close", function() {
        closePanel();
    });

    // =========================================================
    // АВТОМАТИЧНЕ ЗІСТАВЛЕННЯ АВАТАРІВ
    // =========================================================
    function buildCharAvatarMap() {
        const map = {};
        const personaName = name1 || (window.power_user && window.power_user.persona_name) || "User";
        if (personaName && user_avatar) {
            map[personaName.toLowerCase()] = getThumbnailUrl('persona', user_avatar);
        }
        if (characters) {
            if (selected_group && groups) {
                const group = groups.find(g => g.id === selected_group);
                if (group && group.members) {
                    group.members.forEach(memberId => {
                        const char = characters.find(c => c.avatar === memberId);
                        if (char) map[char.name.toLowerCase()] = getThumbnailUrl('avatar', char.avatar);
                    });
                }
            } else if (this_chid !== undefined && characters[this_chid]) {
                const char = characters[this_chid];
                map[char.name.toLowerCase()] = getThumbnailUrl('avatar', char.avatar);
            }
        }
        return map;
    }

    // =========================================================
    // ВИКЛИК AI DIRECTOR
    // =========================================================
    let isAIDirectorBusy = false;

    async function callAIDirector(prompt) {
        isAIDirectorBusy = true;
        try {
            const modelOverride = extSettings.aiModel;

            if (modelOverride) {
                // Пряий виклик до OpenRouter з окремою моделлю (тільки override)
                const apiKey = await findSecret(SECRET_KEYS.OPENROUTER);
                if (!apiKey) {
                    console.warn("[Silly Map AI] No OpenRouter API key; fallback to the standard model");
                } else {
                    try {
                        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                            method: "POST",
                            headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
                            body: JSON.stringify({
                                model: modelOverride,
                                messages: [{ role: "user", content: prompt }],
                                temperature: 0.3,
                                max_tokens: 500
                            })
                        });
                        const data = await res.json();
                        const content = data?.choices?.[0]?.message?.content || "";
                        console.log(`[Silly Map AI] OpenRouter (${modelOverride}) Response:\n`, content);
                        return content;
                    } catch (err) {
                        console.warn("[Silly Map AI] OpenRouter direct call failed, fallback:", err);
                    }
                }
            }

            // За замовчуванням — поточна стандартна модель чату в SillyTavern
            const response = await generateQuietPrompt({ quietPrompt: prompt, skipWIAN: true });
            console.log("[Silly Map AI] ST generateQuietPrompt Response:\n", response);
            return response;
        } finally {
            isAIDirectorBusy = false;
        }
    }

    // --- ДИНАМІЧНИЙ СТАН СЕСІЇ (прив'язаний до чату) ---
    let gameState = {
        activeLocations: {},
        viewingLocId: null,
        viewingRoomId: null,
    };

    let drawerView = { level: "locations", locId: null };

    const imageCache = {};
    function loadImage(src) {
        return new Promise((resolve) => {
            if (imageCache[src]) return resolve(imageCache[src]);
            const img = new Image();
            img.src = src;
            img.onload = () => { imageCache[src] = img; resolve(img); };
            img.onerror = () => resolve(null);
        });
    }

    function getStorageKey() { return `dnd_vtt_state_${currentChatId}`; }

    function saveState() {
        if (!currentChatId) return;
        try {
            if (gameState.viewingLocId && gameState.activeLocations[gameState.viewingLocId]) {
                gameState.activeLocations[gameState.viewingLocId].lastInteractionAt = Date.now();
            }
            localStorage.setItem(getStorageKey(), JSON.stringify(gameState));
        } catch (error) {
            console.error("[Silly Map] gameState save error:", error);
        }
    }

    function loadState() {
        if (!currentChatId) {
            gameState = { activeLocations: {}, viewingLocId: null, viewingRoomId: null };
            return;
        }
        try {
            const savedData = localStorage.getItem(getStorageKey());
            gameState = savedData
                ? JSON.parse(savedData)
                : { activeLocations: {}, viewingLocId: null, viewingRoomId: null };
        } catch (error) {
            console.error("[Silly Map] gameState loading error:", error);
            gameState = { activeLocations: {}, viewingLocId: null, viewingRoomId: null };
        }
    }

    // --- ЗАВАНТАЖЕННЯ СТАТИКИ ---
    async function loadInstalledLocations() {
        if (installedLocIds.length > 0) return installedLocIds;

        // 1) Seed із файлу-реєстру (постачається з extension)
        try {
            const response = await fetch(ASSETS_PATH + "locations_index.json");
            if (response.ok) {
                const data = await response.json();
                // Підтримуємо два формати:
                //  - ["folder_id1", "folder_id2", ...]      (новий, рекомендований)
                //  - [{id, name, tags, ...}, ...]            (старий, для зворотної сумісності)
                const locs = Array.isArray(data) ? data : (data.locations || []);
                for (const l of locs) {
                    const id = typeof l === "string" ? l : l?.id;
                    if (id && !installedLocIds.includes(id)) installedLocIds.push(id);
                }
            }
        } catch (error) {
            console.warn("[Silly Map] locations_index.json was not found or is corrupted", error);
        }

        // 2) Додаємо користувацькі локації з localStorage (додані через "+ Add location")
        try {
            const saved = JSON.parse(localStorage.getItem(INSTALLED_LOC_KEY) || "[]");
            for (const id of saved) {
                if (typeof id === "string" && !installedLocIds.includes(id)) installedLocIds.push(id);
            }
        } catch (error) {
            console.warn("[Silly Map] Unable to read localStorage installed locations", error);
        }

        // 3) Передзавантажуємо layout.json усіх локацій, щоб getLocInfo мав кеш метаданих
        await Promise.all(installedLocIds.map((id) => getLayout(id)));

        renderLocationsGrid();
        return installedLocIds;
    }

    function persistInstalledLocIds() {
        try {
            localStorage.setItem(INSTALLED_LOC_KEY, JSON.stringify(installedLocIds));
        } catch (error) {
            console.warn("[Silly Map] Unable to read localStorage installed locations", error);
        }
    }

    async function getLayout(locId) {
        if (layoutCache[locId]) return layoutCache[locId];
        try {
            const response = await fetch(ASSETS_PATH + "locations/" + locId + "/layout.json");
            if (!response.ok) return null;
            const layout = await response.json();
            layoutCache[locId] = layout;
            return layout;
        } catch (error) {
            console.error(`[Silly Map] layout.json for ${locId} not found`, error);
            return null;
        }
    }

    function getLocInfo(locId) {
        const layout = layoutCache[locId];
        const fallbackBg = layout?.rooms ? Object.values(layout.rooms)[0]?.background : null;
        return {
            id: locId,
            name: layout?.name || locId,
            tags: layout?.tags || [],
            description: layout?.description || "",
            preview: layout?.preview || fallbackBg,
            path: "locations/" + locId + "/",
        };
    }

    // =========================================================
    // ПЕРЕВІРКА ВІЛЬНОСТІ КЛІТИНКИ (заборона двох токенів)
    // =========================================================
    function getOccupancyGrid(layout, roomId) {
        const roomData = layout.rooms[roomId];
        const grid = [];
        for (let r = 0; r < roomData.grid.rows; r++) {
            grid[r] = new Array(roomData.grid.cols).fill(false);
        }
        if (Array.isArray(roomData.furniture)) {
            for (const item of roomData.furniture) {
                if (!item.occupiable) {
                    for (let x = item.x; x < item.x + item.w; x++) {
                        for (let y = item.y; y < item.y + item.h; y++) {
                            if (y >= 0 && y < roomData.grid.rows && x >= 0 && x < roomData.grid.cols) {
                                grid[y][x] = true;
                            }
                        }
                    }
                }
            }
        }
        // Також позначаємо клітинки, зайняті іншими токенами (заборона stacked)
        const locState = gameState.viewingLocId ? gameState.activeLocations[gameState.viewingLocId] : null;
        if (locState && locState.tokens) {
            for (const t of Object.values(locState.tokens)) {
                if (t.roomId !== roomId) continue;
                if (t.x === undefined || t.y === undefined) continue;
                if (grid[t.y] && grid[t.y][t.x] !== undefined) grid[t.y][t.x] = true;
            }
        }
        return grid;
    }

    function isCellFree(grid, x, y) {
        if (!grid[y] || grid[y][x] === undefined) return false;
        return !grid[y][x];
    }

    function getOccupiableAt(layout, roomId, x, y) {
        const roomData = layout.rooms[roomId];
        if (!roomData || !Array.isArray(roomData.furniture)) return null;
        for (const item of roomData.furniture) {
            if (!item.occupiable) continue;
            if (x >= item.x && x < item.x + item.w && y >= item.y && y < item.y + item.h) {
                return item;
            }
        }
        return null;
    }

    function getRoomName(layout, roomId) {
        return layout?.rooms?.[roomId]?.name || roomId;
    }

    function findTokenInActiveLocations(tokenId) {
        for (const [lid, lstate] of Object.entries(gameState.activeLocations)) {
            if (lstate.tokens && lstate.tokens[tokenId]) {
                return { locId: lid, locState: lstate, token: lstate.tokens[tokenId] };
            }
        }
        return null;
    }

    // =========================================================
    // ІНЖЕКТ СЦЕНИ В КОНТЕКСТ ЧАТУ
    // =========================================================
    const SCENE_INJECT_STOPWORDS = new Set([
        "wall", "walls", "floor", "flooring", "ceiling",
    ]);

    async function buildSceneContextString() {
        if (extSettings.injectSceneContext === false) return null;
        if (!gameState.activeLocations) return null;
        const activeLocIds = Object.keys(gameState.activeLocations);
        if (activeLocIds.length === 0) return null;

        const blocks = [];
        for (const locId of activeLocIds) {
            const tLayout = await getLayout(locId);
            if (!tLayout) continue;
            const locInfo = getLocInfo(locId);
            const locState = gameState.activeLocations[locId];
            const tokens = Object.values(locState.tokens || {});
            if (tokens.length === 0) continue;

            for (const [roomId, roomData] of Object.entries(tLayout.rooms)) {
                const tokensInRoom = tokens.filter(t => t.roomId === roomId);
                if (tokensInRoom.length === 0) continue;

                const itemCounts = {};
                for (const item of (roomData.furniture || [])) {
                    const typeLower = (item.type || "").trim().toLowerCase();
                    if (!typeLower) continue;
                    if (SCENE_INJECT_STOPWORDS.has(typeLower)) continue;
                    itemCounts[typeLower] = (itemCounts[typeLower] || 0) + 1;
                }
                const itemsStr = Object.entries(itemCounts)
                    .map(([type, n]) => n > 1 ? `${type} x${n}` : type)
                    .join(", ") || "(none)";

                const charNames = tokensInRoom.map(t => t.name).join(", ");
                const locName = locInfo?.name || locId;
                const roomName = roomData.name || roomId;
                blocks.push(
                    `[${locName} / ${roomName}]\n` +
                    `Characters present: ${charNames}\n` +
                    `Items: ${itemsStr}`
                );
            }
        }

        if (blocks.length === 0) return null;
        return `=== Silly Map Scene Context ===\n${blocks.join("\n\n")}\n===`;
    }

    eventSource.on(event_types.GENERATE_AFTER_COMBINE_PROMPTS, async (eventData) => {
        if (eventData?.dryRun) return;
        if (isAIDirectorBusy) return;
        if (typeof eventData?.prompt !== "string") return;
        const sceneStr = await buildSceneContextString();
        if (!sceneStr) return;
        eventData.prompt = eventData.prompt + "\n\n" + sceneStr;
        console.log("[Silly Map] Added scene injection to text completion");
    });

    eventSource.on(event_types.CHAT_COMPLETION_PROMPT_READY, async (eventData) => {
        if (eventData?.dryRun) return;
        if (isAIDirectorBusy) return;
        if (!Array.isArray(eventData?.chat)) return;
        const sceneStr = await buildSceneContextString();
        if (!sceneStr) return;
        eventData.chat.push({ role: "system", content: sceneStr });
        console.log("[Silly Map] Added scene injection to chat completion");
    });

    function findNearestFreeCell(grid, startX, startY, maxRadius = 8) {
        if (!grid.length || !grid[0] || !grid[0].length) return {x: 0, y: 0};
        if (startX < 0 || startX >= grid[0].length) startX = 0;
        if (startY < 0 || startY >= grid.length) startY = 0;
        if (isCellFree(grid, startX, startY)) return {x: startX, y: startY};
        for (let r = 1; r <= maxRadius; r++) {
            for (let dx = -r; dx <= r; dx++) {
                for (let dy = -r; dy <= r; dy++) {
                    if (Math.abs(dx) === r || Math.abs(dy) === r) {
                        const nx = startX + dx;
                        const ny = startY + dy;
                        if (nx >= 0 && nx < grid[0].length && ny >= 0 && ny < grid.length) {
                            if (isCellFree(grid, nx, ny)) return {x: nx, y: ny};
                        }
                    }
                }
            }
        }
        return {x: startX, y: startY};
    }

    function generateTokenId() {
        return 'token_' + Math.random().toString(36).substr(2, 9);
    }

    // =========================================================
    // ГРИД ЛОКАЦІЙ + ПОШУК
    // =========================================================
    function renderLocationsGrid() {
        if (installedLocIds.length === 0) return;
        const $grid = $("#dnd-locs-grid");
        $grid.empty();

        const query = ($("#dnd-locs-search").val() || "").trim().toLowerCase();
        const all = installedLocIds.map(id => getLocInfo(id));
        const list = query
            ? all.filter(l =>
                (l.name || "").toLowerCase().includes(query) ||
                (l.description || "").toLowerCase().includes(query) ||
                (l.tags || []).some(t => t.toLowerCase().includes(query))
            )
            : all;

        if (list.length === 0) {
            $grid.append('<div class="dnd-loc-empty">Nothing found.</div>');
            return;
        }

        const activeIds = Object.keys(gameState.activeLocations || {});
        list.forEach(loc => {
            const previewPath = loc.preview
                ? ASSETS_PATH + loc.path + loc.preview
                : "";
            const isActive = activeIds.includes(loc.id);
            const tagsStr = (loc.tags || []).join(", ");
            const card = $(`
                <div class="dnd-loc-card ${isActive ? "active" : ""}" data-id="${loc.id}">
                    ${previewPath ? `<img class="dnd-loc-card-img" src="${previewPath}" alt="${escapeHtml(loc.name)}" loading="lazy">` : ''}
                    <div class="dnd-loc-card-info">
                        <div class="dnd-loc-card-name">${escapeHtml(loc.name)}</div>
                        ${tagsStr ? `<div class="dnd-loc-card-tags">${escapeHtml(tagsStr)}</div>` : ""}
                    </div>
                    <div class="dnd-loc-card-status">Active</div>
                </div>
            `);
            card.on("click", async () => {
                if (!gameState.activeLocations[loc.id]) {
                    await activateLocation(loc.id);
                } else {
                    await switchViewingScene(loc.id, { drillDown: true });
                }
            });
            $grid.append(card);
        });
    }
    $(document).on("input", "#dnd-locs-search", renderLocationsGrid);

    // =========================================================
    // ДОДАВАННЯ ЛОКАЦІЇ ЧЕРЕЗ UI ("+ Add location")
    // Користувач кидає папку з локацією у assets/locations/, тисне "+ Add location",
    // вводить назву папки — extension фетчить layout.json, валідуе, додає folder-id
    // у реєстр (localStorage) і перерендерить сітку. Більше не треба правити JSON руками.
    // =========================================================
    function showAddLocInline() { $("#dnd-add-loc-inline").show(); $("#dnd-add-location-btn").hide(); $("#dnd-add-loc-input").val("").focus(); }
    function hideAddLocInline() { $("#dnd-add-loc-inline").hide(); $("#dnd-add-location-btn").show(); }

    $(document).on("click", "#dnd-add-location-btn", showAddLocInline);
    $(document).on("click", "#dnd-add-loc-cancel", hideAddLocInline);
    $(document).on("click", "#dnd-add-loc-confirm", addLocationFromInput);
    $(document).on("keydown", "#dnd-add-loc-input", function(e) {
        if (e.key === "Enter") { e.preventDefault(); addLocationFromInput(); }
        else if (e.key === "Escape") { hideAddLocInline(); }
        // Зупиняємо булькання, щоб global Escape-обробник не закрив всю панель
        e.stopPropagation();
    });

    async function addLocationFromInput() {
        const folder = ($("#dnd-add-loc-input").val() || "").trim();
        if (!folder) { toast.warning("Enter the location folder name"); return; }
        if (!/^[A-Za-z0-9_\-]+$/.test(folder)) {
            toast.error("Folder name may only contain letters, numbers, _ and -");
            return;
        }
        if (installedLocIds.includes(folder)) {
            toast.warning("This location is already in the list");
            hideAddLocInline();
            return;
        }
        const $confirm = $("#dnd-add-loc-confirm");
        const orig = $confirm.html();
        $confirm.prop("disabled", true).html(ICONS.refresh);
        try {
            const layout = await getLayout(folder);
            if (!layout || !layout.rooms || typeof layout.rooms !== "object") {
                toast.error(`layout.json not found or invalid in assets/locations/${folder}/`);
                return;
            }
            installedLocIds.push(folder);
            persistInstalledLocIds();
            renderLocationsGrid();
            hideAddLocInline();
            const meta = getLocInfo(folder);
            toast.success(`Location added: ${meta.name}`);
        } catch (err) {
            console.error("[Silly Map] addLocationFromInput error:", err);
            toast.error("Failed to add location");
        } finally {
            $confirm.prop("disabled", false).html(orig);
        }
    }

    async function activateLocation(locId) {
        if (!locId || gameState.activeLocations[locId]) {
            if (gameState.activeLocations[locId]) {
                await switchViewingScene(locId, { drillDown: true });
            }
            return;
        }
        const layout = await getLayout(locId);
        if (!layout) return;
        gameState.activeLocations[locId] = { tokens: {} };
        await switchViewingScene(locId, { drillDown: true });
        renderLocationsGrid(); // оновити статус на картці
    }

    // =========================================================
    // СПИСОК ТОКЕНІВ У КІМНАТІ
    // =========================================================
    function renderActiveTokensList() {
        const $list = $("#dnd-active-tokens-list");
        $list.empty();
        if (!gameState.viewingLocId || !gameState.viewingRoomId) return;

        const loc = gameState.activeLocations[gameState.viewingLocId];
        if (!loc || !loc.tokens) return;

        const tokensInRoom = Object.values(loc.tokens).filter(t => t.roomId === gameState.viewingRoomId);

        if (tokensInRoom.length === 0) {
            $list.append('<div class="dnd-ui-hint" style="text-align:center;">No tokens in this room.</div>');
            return;
        }

        tokensInRoom.forEach(t => {
            const isImage = t.avatar.includes("/") || t.avatar.includes(".");
            const avatarHtml = isImage
                ? `<img src="${t.avatar}" class="dnd-token-list-avatar" onerror="this.style.display='none'">`
                : `<span class="dnd-token-list-avatar-emoji">${escapeHtml(t.avatar)}</span>`;
            const item = $(`
                <div class="dnd-token-list-item">
                    <div class="dnd-token-list-avatar-wrap" data-id="${t.id}" title="Change avatar">${avatarHtml}</div>
                    <span class="dnd-token-list-name">${escapeHtml(t.name)}</span>
                    <button class="dnd-token-remove-btn" data-id="${t.id}" title="Delete">${ICONS.trash}</button>
                </div>
            `);
            item.find(".dnd-token-remove-btn").on("click", function() {
                const removedId = $(this).data("id");
                delete gameState.activeLocations[gameState.viewingLocId].tokens[removedId];
                if (selectedTokenId === removedId) selectedTokenId = null;
                saveState();
                renderActiveTokensList();
                renderCanvas();
            });
            item.find(".dnd-token-list-avatar-wrap").on("click", function() {
                openAvatarMenu($(this).data("id"), $(this));
            });
            $list.append(item);
        });
    }

    function escapeHtml(str) {
        return $("<div>").text(str || "").html();
    }

    // =========================================================
    // ТОКЕНИ: ФОРМА ДОДАВАННЯ (без alert/prompt)
    // =========================================================
    let tokenSource = "auto"; // "auto" | "custom"
    $("#dnd-token-auto-block").show();
    $("#dnd-token-custom-block").hide();

    $(document).on("click", ".dnd-source-toggle-btn", function() {
        tokenSource = $(this).data("source");
        $(".dnd-source-toggle-btn").removeClass("active");
        $(this).addClass("active");
        if (tokenSource === "auto") {
            $("#dnd-token-auto-block").show();
            $("#dnd-token-custom-block").hide();
            populateAutoTokens();
            $("#dnd-token-auto-select").trigger("change");
        } else {
            $("#dnd-token-auto-block").hide();
            $("#dnd-token-custom-block").show();
            updateAvatarPreview();
        }
    });

    function populateAutoTokens() {
        const $select = $("#dnd-token-auto-select");
        $select.empty();
        const personaName = name1 || (window.power_user && window.power_user.persona_name) || "User";
        const personaAvatar = user_avatar ? getThumbnailUrl('persona', user_avatar) : "";
        $select.append($("<option>", {
            value: "persona",
            text: personaName + " (Persona)",
            "data-name": personaName,
            "data-avatar": personaAvatar
        }));
        if (characters) {
            if (selected_group && groups) {
                const group = groups.find(g => g.id === selected_group);
                if (group && group.members) {
                    group.members.forEach(memberId => {
                        const char = characters.find(c => c.avatar === memberId);
                        if (char) {
                            $select.append($("<option>", {
                                value: char.avatar,
                                text: char.name,
                                "data-name": char.name,
                                "data-avatar": getThumbnailUrl('avatar', char.avatar)
                            }));
                        }
                    });
                }
            } else if (this_chid !== undefined && characters[this_chid]) {
                const char = characters[this_chid];
                $select.append($("<option>", {
                    value: "character",
                    text: char.name,
                    "data-name": char.name,
                    "data-avatar": getThumbnailUrl('avatar', char.avatar)
                }));
            }
        }
    }

    $(document).on("change", "#dnd-token-auto-select", function() {
        const selected = $(this).find(":selected");
        $("#dnd-token-name").val(selected.data("name") || "");
        $("#dnd-token-avatar").val(selected.data("avatar") || "");
        updateAvatarPreview();
    });

    function updateAvatarPreview() {
        const val = $("#dnd-token-avatar").val().trim();
        const $prev = $("#dnd-token-avatar-preview");
        $prev.empty();
        if (!val) {
            $prev.addClass("empty");
            return;
        }
        $prev.removeClass("empty");
        if (val.includes("/") || val.includes(".")) {
            $prev.html(`<img src="${val}" onerror="this.parentElement.innerHTML='<span>?</span>'">`);
        } else {
            $prev.html(`<span>${escapeHtml(val)}</span>`);
        }
    }
    $(document).on("input", "#dnd-token-avatar", updateAvatarPreview);

    // Автозаповнення URL при вводі імені (кастомний режим)
    $(document).on("input", "#dnd-token-name", function() {
        if (tokenSource !== "custom") return;
        const name = $(this).val().trim();
        if (!name) return;
        const avatarMap = buildCharAvatarMap();
        const known = avatarMap[name.toLowerCase()];
        if (known && !$("#dnd-token-avatar").val().trim()) {
            $("#dnd-token-avatar").val(known);
            updateAvatarPreview();
        }
    });

    // =========================================================
    // ЗАВАНТАЖЕННЯ АВАТАРІВ ФАЙЛОМ + ГАЛЕРЕЯ
    // =========================================================
    let pendingAvatarChangeTokenId = null;

    async function uploadAvatarFile(file) {
        const formData = new FormData();
        formData.append("avatar", file);
        const filename = `dnd_token_${Date.now()}.png`;
        formData.append("overwrite_name", filename);

        toast.info("Uploading avatar...");
        const res = await fetch("/api/avatars/upload", {
            method: "POST",
            headers: getRequestHeaders({ omitContentType: true }),
            body: formData,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const uploadedName = data.path || filename;
        return getThumbnailUrl("persona", uploadedName);
    }

    $(document).on("click", "#dnd-upload-avatar-btn", () => {
        pendingAvatarChangeTokenId = null;
        $("#dnd-avatar-file-input").click();
    });

    $(document).on("change", "#dnd-avatar-file-input", async function() {
        const file = this.files[0];
        if (!file) return;
        $(this).val("");
        try {
            const avatarUrl = await uploadAvatarFile(file);
            if (pendingAvatarChangeTokenId) {
                const found = findTokenInActiveLocations(pendingAvatarChangeTokenId);
                if (found) {
                    found.token.avatar = avatarUrl;
                    saveState();
                    renderActiveTokensList();
                    renderCanvas();
                    toast.success(`Avatar for ${found.token.name} updated`);
                }
                pendingAvatarChangeTokenId = null;
            } else {
                $("#dnd-token-avatar").val(avatarUrl);
                updateAvatarPreview();
                toast.success("Avatar uploaded");
            }
        } catch (err) {
            console.error("[Silly Map] Avatar loading error:", err);
            toast.error("Failed to upload avatar");
        }
    });

    // --- ГАЛЕРЕЯ АВАТАРІВ (модал.) ---
    let galleryModal = null;
    let galleryAvatarsCache = null;

    async function openAvatarGallery(targetTokenId = null) {
        pendingAvatarChangeTokenId = targetTokenId;
        if (galleryModal) { galleryModal.remove(); galleryModal = null; }

        let avatars = galleryAvatarsCache;
        if (!avatars) {
            toast.info("Loading gallery...");
            try {
                const res = await fetch("/api/avatars/get", { method: "POST", headers: getRequestHeaders() });
                if (res.ok) {
                    avatars = await res.json();
                    galleryAvatarsCache = avatars;
                }
            } catch (err) {
                console.error("[Silly Map] Error retrieving the list of avatars:", err);
                toast.error("Failed to load gallery");
                pendingAvatarChangeTokenId = null;
                return;
            }
        }

        if (!Array.isArray(avatars) || avatars.length === 0) {
            toast.warning("Gallery is empty. Upload an avatar via File.");
            pendingAvatarChangeTokenId = null;
            return;
        }

        galleryModal = $(`
            <div id="dnd-gallery-overlay" class="dnd-gallery-overlay">
                <div class="dnd-gallery-modal">
                    <div class="dnd-gallery-header">
                        <span class="dnd-panel-title">${ICONS.image} Оберіть аватар</span>
                        <input id="dnd-gallery-search" class="dnd-gallery-search" placeholder="Search by filename..." autocomplete="off">
                        <button class="dnd-gallery-close" title="Закрити">${ICONS.close}</button>
                    </div>
                    <div id="dnd-gallery-grid" class="dnd-gallery-grid"></div>
                </div>
            </div>
        `);
        $("body").append(galleryModal);

        function renderGallery(filter) {
            const $g = $("#dnd-gallery-grid");
            $g.empty();
            const f = (filter || "").toLowerCase();
            const list = f ? avatars.filter(a => a.toLowerCase().includes(f)) : avatars;
            if (list.length === 0) {
                $g.append('<div class="dnd-gallery-empty">Nothing found.</div>');
                return;
            }
            list.forEach(filename => {
                const url = getThumbnailUrl("persona", filename);
                const cell = $(`<div class="dnd-gallery-item" title="${filename}"><img src="${url}" loading="lazy"></div>`);
                cell.on("click", () => selectGalleryAvatar(url));
                $g.append(cell);
            });
        }
        renderGallery("");

        galleryModal.on("input", "#dnd-gallery-search", function() {
            renderGallery($(this).val());
        });
        galleryModal.on("click", function(e) {
            if (e.target === this || $(e.target).closest(".dnd-gallery-close").length) {
                closeAvatarGallery();
            }
        });
    }

    function selectGalleryAvatar(url) {
        if (pendingAvatarChangeTokenId) {
            const found = findTokenInActiveLocations(pendingAvatarChangeTokenId);
            if (found) {
                found.token.avatar = url;
                saveState();
                renderActiveTokensList();
                renderCanvas();
                toast.success(`Avatar for ${found.token.name} updated`);
            }
            pendingAvatarChangeTokenId = null;
        } else {
            $("#dnd-token-avatar").val(url);
            updateAvatarPreview();
            toast.success("Avatar selected");
        }
        closeAvatarGallery();
    }

    function closeAvatarGallery() {
        if (galleryModal) { galleryModal.remove(); galleryModal = null; }
        pendingAvatarChangeTokenId = null;
    }

    // Невелике контекстне меню зміни аватара існуючого токена: Галерея / Файл.
    let avatarMenu = null;
    function openAvatarMenu(tokenId, $anchor) {
        closeAvatarMenu();
        // Знімаємо одноразовий обробник закриття від попереднього відкриття:
        // без цього повторний клік на аватар закривав би щойно створене меню.
        $(document).off(".dnd-avatar-menu");
        pendingAvatarChangeTokenId = tokenId;

        avatarMenu = $(`
            <div class="dnd-avatar-menu">
                <button data-action="gallery">${ICONS.image} Галерея</button>
                <button data-action="file">${ICONS.file} Файл</button>
            </div>
        `);
        $("body").append(avatarMenu);

        // Позиціюємо під аватаром (або зверху, якщо знизу не влазить)
        const offset = $anchor.offset();
        const menuW = 180;
        const menuH = 76; // 2 кнопки ~38px + padding/gap
        const anchorH = $anchor.outerHeight();
        const spaceBelow = window.innerHeight - (offset.top + anchorH);
        const spaceAbove = offset.top;
        const showBelow = spaceBelow >= menuH + 8 || spaceBelow >= spaceAbove;
        let left = offset.left + $anchor.outerWidth() / 2 - menuW / 2;
        let top = showBelow
            ? offset.top + anchorH + 6
            : offset.top - menuH - 6;
        // Не виходити за межі екрану
        left = Math.max(8, Math.min(left, window.innerWidth - menuW - 8));
        top = Math.max(8, Math.min(top, window.innerHeight - menuH - 8));
        avatarMenu.css({ top: `${top}px`, left: `${left}px`, minWidth: `${menuW}px` });

        avatarMenu.on("click", "button", function() {
            const action = $(this).data("action");
            closeAvatarMenu();
            if (action === "gallery") {
                openAvatarGallery(tokenId);
            } else if (action === "file") {
                pendingAvatarChangeTokenId = tokenId;
                $("#dnd-avatar-file-input").click();
            }
        });

        // Закриття при кліку поза меню
        setTimeout(() => {
            $(document).one("click.dnd-avatar-menu", function(e) {
                if (!$(e.target).closest(".dnd-avatar-menu").length) closeAvatarMenu();
            });
        }, 0);
    }
    function closeAvatarMenu() {
        if (avatarMenu) { avatarMenu.remove(); avatarMenu = null; }
        $(document).off(".dnd-avatar-menu");
        if (!galleryModal) pendingAvatarChangeTokenId = null;
    }

    $(document).on("click", "#dnd-gallery-avatar-btn", () => openAvatarGallery(null));

    $(document).on("click", "#dnd-cancel-place-btn", () => {
        placingToken = null;
        $("#dnd-cancel-place-btn").hide();
        $("#dnd-map-canvas").css("cursor", "");
        openPanel("tokens");
        renderCanvas();
    });
    $(document).on("keydown", function(e) {
        if (e.key === "Escape") {
            if (galleryModal) closeAvatarGallery();
            else if (selectedTokenId) { selectedTokenId = null; renderCanvas(); }
            else if (placingToken) { placingToken = null; $("#dnd-cancel-place-btn").hide(); $("#dnd-map-canvas").css("cursor", ""); openPanel("tokens"); renderCanvas(); }
            else if (activePanel) closePanel();
        }
    });

    // --- КНОПКА "ПОЧАТИ РОЗМІЩЕННЯ" ---
    $(document).on("click", "#dnd-create-token-btn", () => {
        if (!gameState.viewingLocId || !gameState.viewingRoomId) {
            toast.warning("Please activate and select a location/room first!");
            return;
        }
        let name = "";
        let avatar = "";
        if (tokenSource === "auto") {
            const selected = $("#dnd-token-auto-select").find(":selected");
            name = selected.data("name") || "";
            avatar = selected.data("avatar") || "";
        } else {
            name = $("#dnd-token-name").val().trim();
            avatar = $("#dnd-token-avatar").val().trim();
        }
        if (!name) {
            toast.warning("Please enter a token name!");
            return;
        }
        placingToken = {
            id: generateTokenId(),
            type: "character",
            name: name,
            avatar: avatar || "?",
            roomId: gameState.viewingRoomId
        };
        // Ховаємо бічну панель токенів (на мобільному вона перекриває мапу)
        // та показуємо плаваючу кнопку «Скасувати».
        closePanel();
        $("#dnd-cancel-place-btn").show();
        $("#dnd-map-canvas").css("cursor", "none");
        renderCanvas();
    });

    // =========================================================
    // ZOOM / PAN VIEWPORT (CSS transform — без перемальовування canvas)
    // =========================================================
    // Canvas завжди рендериться у внутрішній 1080x1080 бітмап.
    // Відображення робиться через CSS transform: translate+scale.
    // Завдяки цьому zoom/pan НЕ перемальовує canvas → сітка та токени не блимають.
    const mapView = { scale: 1, tx: 0, ty: 0, zoom: 1 };

    function applyMapView() {
        const canvas = document.getElementById("dnd-map-canvas");
        if (!canvas) return;
        const s = mapView.scale * mapView.zoom;
        canvas.style.transformOrigin = "0 0";
        canvas.style.transform = `translate(${mapView.tx}px, ${mapView.ty}px) scale(${s})`;
    }

    function fitMapView(animate = false) {
        const vp = document.getElementById("dnd-map-viewport");
        const canvas = document.getElementById("dnd-map-canvas");
        if (!vp || !canvas) return;
        const vpW = vp.clientWidth, vpH = vp.clientHeight;
        if (vpW === 0 || vpH === 0) return;
        const MAP_SIZE = canvas.width; // 1080
        const fit = Math.min(vpW, vpH) / MAP_SIZE;
        mapView.scale = fit;
        mapView.zoom = 1;
        mapView.tx = (vpW - fit * MAP_SIZE) / 2;
        mapView.ty = (vpH - fit * MAP_SIZE) / 2;
        if (animate) {
            canvas.style.transition = "transform 0.2s ease";
            applyMapView();
            setTimeout(() => { canvas.style.transition = ""; }, 220);
        } else {
            applyMapView();
        }
    }

    function zoomMapViewAt(factor, cx, cy) {
        const vp = document.getElementById("dnd-map-viewport");
        if (!vp) return;
        const rect = vp.getBoundingClientRect();
        const s0 = mapView.scale * mapView.zoom;
        const newZoom = Math.max(0.5, Math.min(6, mapView.zoom * factor));
        const s1 = mapView.scale * newZoom;
        const ix = (cx - rect.left - mapView.tx) / s0;
        const iy = (cy - rect.top - mapView.ty) / s0;
        mapView.zoom = newZoom;
        mapView.tx = cx - rect.left - ix * s1;
        mapView.ty = cy - rect.top - iy * s1;
        applyMapView();
    }

    function clampMapView() {
        const vp = document.getElementById("dnd-map-viewport");
        if (!vp) return;
        const s = mapView.scale * mapView.zoom;
        const dispW = s * 1080;
        const dispH = s * 1080;
        const vpW = vp.clientWidth, vpH = vp.clientHeight;
        if (dispW <= vpW) mapView.tx = (vpW - dispW) / 2;
        else mapView.tx = Math.min(0, Math.max(vpW - dispW, mapView.tx));
        if (dispH <= vpH) mapView.ty = (vpH - dispH) / 2;
        else mapView.ty = Math.min(0, Math.max(vpH - dispH, mapView.ty));
        applyMapView();
    }

    // Кнопки зуму
    $(document).on("click", "#dnd-zoom-in", () => {
        const vp = document.getElementById("dnd-map-viewport");
        if (!vp) return;
        const rect = vp.getBoundingClientRect();
        zoomMapViewAt(1.25, rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
    $(document).on("click", "#dnd-zoom-out", () => {
        const vp = document.getElementById("dnd-map-viewport");
        if (!vp) return;
        const rect = vp.getBoundingClientRect();
        zoomMapViewAt(0.8, rect.left + rect.width / 2, rect.top + rect.height / 2);
        clampMapView();
    });
    $(document).on("click", "#dnd-zoom-fit", () => fitMapView(true));

    // Колесо миші = зум (desktop)
    $(document).on("wheel", "#dnd-map-viewport", function(e) {
        e.preventDefault();
        const factor = e.originalEvent.deltaY < 0 ? 1.12 : 0.89;
        zoomMapViewAt(factor, e.clientX, e.clientY);
    });

    // Ресайз — пере-вписати
    let resizeRaf = null;
    $(window).on("resize", () => {
        if (!isMapVisible) return;
        if (resizeRaf) cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(() => {
            fitMapView();
            renderCanvas();
        });
    });

    // =========================================================
    // ТОКЕНИ: розміщення / drag & drop + zoom/pan через Pointer Events
    // (уніфіковано миша + touch + pen; pinch-to-zoom двома пальцями)
    // =========================================================
    const pointers = new Map(); // pointerId -> {x, y}
    let pinchStart = null; // {dist, zoom, mid}
    let panStart = null; // {x, y, tx, ty}
    let pointerMoved = false;

    function clientToCanvas(clientX, clientY) {
        const vp = document.getElementById("dnd-map-viewport");
        if (!vp) return { x: 0, y: 0 };
        const rect = vp.getBoundingClientRect();
        const s = mapView.scale * mapView.zoom;
        if (s === 0) return { x: 0, y: 0 };
        return {
            x: (clientX - rect.left - mapView.tx) / s,
            y: (clientY - rect.top - mapView.ty) / s,
        };
    }

    function pointDist(a, b) {
        return Math.hypot(a.x - b.x, a.y - b.y);
    }

    function pointerDown(e) {
        if (!gameState.viewingLocId || !gameState.viewingRoomId) return;
        // Лише primary target — canvas/viewport (button-делегування jQuery)
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        pointerMoved = false;

        // Два пальці → pinch-to-zoom (будь-який час)
        if (pointers.size === 2) {
            const [a, b] = [...pointers.values()];
            pinchStart = {
                dist: pointDist(a, b),
                zoom: mapView.zoom,
                mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
            };
            // Скасовуємо поточний drag/pan та виділення токену
            draggedTokenId = null;
            selectedTokenId = null;
            panStart = null;
            currentMouseGridX = null;
            currentMouseGridY = null;
            renderCanvas();
            return;
        }

        const c = clientToCanvas(e.clientX, e.clientY);
        const layout = layoutCache[gameState.viewingLocId];
        if (!layout) return;
        const roomData = layout.rooms[gameState.viewingRoomId];
        if (!roomData) return;
        const cellW = 1080 / roomData.grid.cols;
        const cellH = 1080 / roomData.grid.rows;
        const gridX = Math.floor(c.x / cellW);
        const gridY = Math.floor(c.y / cellH);

        // Режим розміщення токену: тап ставить, drag — панорамує (і не ставить якщо рух).
        if (placingToken) {
            panStart = { x: e.clientX, y: e.clientY, tx: mapView.tx, ty: mapView.ty, mode: "place" };
            return;
        }

        // На сенсорних пристроях drag-and-drop незручний (палець закриває клітинку,
        // тач скакає тощо). Тому для touch використовуємо схему tap-to-select/move:
        // тап по токену → виділення, тап по доступній клітинці → переміщення.
        // Тут лише стартуємо панораму; сам вибір/переміщення обробляється у pointerUp (як тап).
        const isTouch = e.pointerType === "touch" || isMobile();
        if (isTouch) {
            panStart = { x: e.clientX, y: e.clientY, tx: mapView.tx, ty: mapView.ty, mode: "pan", allowSelect: true };
            return;
        }

        // Перевірка токену під курсором → drag token (desktop)
        const loc = gameState.activeLocations[gameState.viewingLocId];
        if (loc && loc.tokens) {
            for (const [tId, t] of Object.entries(loc.tokens)) {
                if (t.roomId === gameState.viewingRoomId && t.x === gridX && t.y === gridY) {
                    draggedTokenId = tId;
                    selectedTokenId = null;
                    $("#dnd-map-canvas").css("cursor", "grabbing");
                    return;
                }
            }
        }

        // Інакше — панорама мапи
        panStart = { x: e.clientX, y: e.clientY, tx: mapView.tx, ty: mapView.ty, mode: "pan" };
        $("#dnd-map-canvas").css("cursor", "grab");
    }

    const TAP_MOVE_THRESHOLD = 10; // px — нижче цього вважаємо жест тапом, а не перетягуванням/панорамою

    function pointerMove(e) {
        if (!pointers.has(e.pointerId)) return;
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        // Поріг руху: лише коли палець зсунувся більше ніж на TAP_MOVE_THRESHOLD,
        // вважаємо, що це не тап (важливо для сенсорних екранів — там завжди
        // генеруються мікро-pointermove під час «тапу»).
        if (panStart) {
            const dx = e.clientX - panStart.x;
            const dy = e.clientY - panStart.y;
            if (!pointerMoved && (Math.abs(dx) > TAP_MOVE_THRESHOLD || Math.abs(dy) > TAP_MOVE_THRESHOLD)) {
                pointerMoved = true;
            }
        }

        // Pinch-to-zoom
        if (pointers.size === 2 && pinchStart) {
            const [a, b] = [...pointers.values()];
            const d = pointDist(a, b);
            if (pinchStart.dist > 0) {
                const factor = d / pinchStart.dist;
                const newZoom = Math.max(0.5, Math.min(6, pinchStart.zoom * factor));
                const s1 = mapView.scale * newZoom;
                // Зберегти midpoint під пальцями стабільним
                const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
                const vp = document.getElementById("dnd-map-viewport");
                if (vp) {
                    const rect = vp.getBoundingClientRect();
                    const ix = (pinchStart.mid.x - rect.left - mapView.tx) / (mapView.scale * mapView.zoom);
                    const iy = (pinchStart.mid.y - rect.top - mapView.ty) / (mapView.scale * mapView.zoom);
                    mapView.zoom = newZoom;
                    mapView.tx = mid.x - rect.left - ix * s1;
                    mapView.ty = mid.y - rect.top - iy * s1;
                    applyMapView();
                }
            }
            return;
        }

        // Панорама (лише після того, як жест перейшов поріг тапу)
        if (panStart && !draggedTokenId) {
            if (!pointerMoved) return;
            const dx = e.clientX - panStart.x;
            const dy = e.clientY - panStart.y;
            mapView.tx = panStart.tx + dx;
            mapView.ty = panStart.ty + dy;
            applyMapView();
            return;
        }

        // Drag токену / прев'ю розміщення
        if (draggedTokenId || placingToken) {
            const c = clientToCanvas(e.clientX, e.clientY);
            currentMouseGridX = c.x;
            currentMouseGridY = c.y;
            renderCanvas();
        }
    }

    async function pointerUp(e) {
        const hadPointer = pointers.has(e.pointerId);
        pointers.delete(e.pointerId);

        // Кінець pinch
        if (pinchStart) {
            if (pointers.size < 2) {
                pinchStart = null;
                // Якщо залишився один палець — продовжуємо як pan з його позиції
                if (pointers.size === 1) {
                    const [p] = [...pointers.values()];
                    panStart = { x: p.x, y: p.y, tx: mapView.tx, ty: mapView.ty, mode: "pan" };
                }
            }
            clampMapView();
            return;
        }

        if (!hadPointer) return;

        // Drop токену
        if (draggedTokenId) {
            const layout = layoutCache[gameState.viewingLocId];
            const roomData = layout?.rooms?.[gameState.viewingRoomId];
            if (layout && roomData) {
                const c = clientToCanvas(e.clientX, e.clientY);
                const cellW = 1080 / roomData.grid.cols;
                const cellH = 1080 / roomData.grid.rows;
                const gridX = Math.floor(c.x / cellW);
                const gridY = Math.floor(c.y / cellH);
                const grid = getOccupancyGrid(layout, gameState.viewingRoomId);
                const loc = gameState.activeLocations[gameState.viewingLocId];
                const token = loc.tokens[draggedTokenId];
                const sameCell = token.x === gridX && token.y === gridY;
                if (isCellFree(grid, gridX, gridY) || sameCell) {
                    token.x = gridX;
                    token.y = gridY;
                } else if (pointerMoved) {
                    toast.warning("This cell is already occupied by another token!");
                }
            }
            draggedTokenId = null;
            currentMouseGridX = null;
            currentMouseGridY = null;
            $("#dnd-map-canvas").css("cursor", "");
            saveState();
            renderCanvas();
            return;
        }

        // Розміщення токену (тільки якщо це був тап без значного руху)
        if (panStart && panStart.mode === "place" && placingToken) {
            if (!pointerMoved) {
                const layout = layoutCache[gameState.viewingLocId];
                const roomData = layout?.rooms?.[gameState.viewingRoomId];
                if (layout && roomData) {
                    const c = clientToCanvas(e.clientX, e.clientY);
                    const cellW = 1080 / roomData.grid.cols;
                    const cellH = 1080 / roomData.grid.rows;
                    const gridX = Math.floor(c.x / cellW);
                    const gridY = Math.floor(c.y / cellH);
                    const grid = getOccupancyGrid(layout, gameState.viewingRoomId);
                    if (isCellFree(grid, gridX, gridY)) {
                        placingToken.x = gridX;
                        placingToken.y = gridY;
                        const loc = gameState.activeLocations[gameState.viewingLocId];
                        if (!loc.tokens) loc.tokens = {};
                        loc.tokens[placingToken.id] = placingToken;
                        saveState();
                        placingToken = null;
                        $("#dnd-cancel-place-btn").hide();
                        $("#dnd-map-canvas").css("cursor", "");
                        renderActiveTokensList();
                        openPanel("tokens");
                        renderCanvas();
                    } else {
                        toast.warning("This cell is already occupied!");
                    }
                }
            }
            panStart = null;
            return;
        }

        // Tap-to-select / tap-to-move на сенсорних пристроях (тільки якщо це був тап без руху)
        if (!pointerMoved && panStart && panStart.allowSelect && !placingToken) {
            await handleTapSelectMove(e);
        }
        panStart = null;
    }

    // =========================================================
    // TAP-TO-SELECT / TAP-TO-MOVE (мобільний потік переміщення токенів)
    // =========================================================
    async function handleTapSelectMove(e) {
        if (!gameState.viewingLocId || !gameState.viewingRoomId) return;
        const layout = layoutCache[gameState.viewingLocId];
        const roomData = layout?.rooms?.[gameState.viewingRoomId];
        if (!layout || !roomData) return;
        const c = clientToCanvas(e.clientX, e.clientY);
        const cellW = 1080 / roomData.grid.cols;
        const cellH = 1080 / roomData.grid.rows;
        const gridX = Math.floor(c.x / cellW);
        const gridY = Math.floor(c.y / cellH);
        const loc = gameState.activeLocations[gameState.viewingLocId];
        if (!loc || !loc.tokens) return;

        // Токен під тапом?
        let tokenUnder = null;
        for (const [tId, t] of Object.entries(loc.tokens)) {
            if (t.roomId === gameState.viewingRoomId && t.x === gridX && t.y === gridY) {
                tokenUnder = tId;
                break;
            }
        }

        // Тап по токену → переключення виділення (або вибір іншого токена)
        if (tokenUnder) {
            selectedTokenId = (selectedTokenId === tokenUnder) ? null : tokenUnder;
            renderCanvas();
            return;
        }

        // Тап по порожній (або зайнятій меблями) клітинці

        // Якщо нічого не виділено — просто ігноруємо тап по мапі
        if (!selectedTokenId) return;

        const token = loc.tokens[selectedTokenId];
        if (!token || token.roomId !== gameState.viewingRoomId) {
            selectedTokenId = null;
            renderCanvas();
            return;
        }

        const grid = getOccupancyGrid(layout, gameState.viewingRoomId);
        // Власна клітинка вважається вільною (можна залишитись на місці)
        grid[token.y][token.x] = false;

        if (isCellFree(grid, gridX, gridY)) {
            // Тап по тій самій клітинці — знімаємо виділення без переміщення
            if (token.x === gridX && token.y === gridY) {
                selectedTokenId = null;
                renderCanvas();
                return;
            }
            token.x = gridX;
            token.y = gridY;
            saveState();
            selectedTokenId = null;
            renderActiveTokensList();
            renderCanvas();
        } else {
            toast.warning("This cell is not available for movement!");
            // Виділення залишаємо, щоб юзер міг обрати іншу клітинку
        }
    }

    $(document).on("pointerdown", "#dnd-map-viewport", function(e) {
        // Лише коли клік по viewport/canvas, а не по drawer/toolbar/панелях зверху
        if (e.target !== this && e.target.id !== "dnd-map-canvas") return;
        try { this.setPointerCapture(e.pointerId); } catch (_) {}
        pointerDown(e);
    });
    $(document).on("pointermove", "#dnd-map-viewport", function(e) {
        pointerMove(e);
    });
    $(document).on("pointerup", "#dnd-map-viewport", function(e) {
        try { this.releasePointerCapture(e.pointerId); } catch (_) {}
        pointerUp(e);
    });
    $(document).on("pointercancel", "#dnd-map-viewport", function(e) {
        pointers.delete(e.pointerId);
        pinchStart = null;
        panStart = null;
        draggedTokenId = null;
        selectedTokenId = null;
    });
    // Запобігання браузерному контекстному меню при довгому тапі / жестах
    $(document).on("contextmenu", "#dnd-map-viewport", (e) => e.preventDefault());

    // =========================================================
    // AI DIRECTOR — генерація локації
    // =========================================================
    function getRecentChatContext(n = 5) {
        const msgs = $("#chat .mes").not('.system_message').slice(-n);
        let ctx = [];
        msgs.each(function() {
            const name = $(this).attr("ch_name") || $(this).find(".ch_name").text().trim();
            const text = $(this).find(".mes_text").text().trim();
            if (text) ctx.push(`${name}: ${text}`);
        });
        return ctx.join("\n\n") || "(There are no posts yet)";
    }

    $(document).on("click", "#dnd-ai-generate-loc-btn", async function() {
        if (installedLocIds.length === 0) return;
        const $btn = $(this);
        const orig = $btn.html();
        $btn.prop("disabled", true).html(`${ICONS.refresh} Thinking...`);
        const context = getRecentChatContext(5);
        const locsData = installedLocIds.map(id => {
            const l = getLocInfo(id);
            return `- ID: ${id}, Name: ${l.name}, Tags: ${(l.tags || []).join(",")}, Desc: ${l.description}`;
        }).join("\n");
        const prompt = `Based on the following recent roleplay chat context, choose the most appropriate location ID from the list below.

Available Locations:
${locsData}

Recent Chat Context:
${context}

Output ONLY the exact ID of the chosen location, nothing else.`;

        try {
            const response = await callAIDirector(prompt);
            let chosenId = null;
            const text = response || "";
            for (const id of installedLocIds) {
                if (text.includes(id)) { chosenId = id; break; }
            }
            if (chosenId) {
                console.log(`[Silly Map AI] Chosen Location ID: ${chosenId}`);
                await activateLocation(chosenId);
            } else {
                toast.error("AI could not pick a location.");
            }
        } catch (err) {
            console.error("[Silly Map AI] API Error:", err);
            toast.error("Error requesting AI.");
        } finally {
            $btn.prop("disabled", false).html(orig);
        }
    });

    // =========================================================
    // AI DIRECTOR — оновлення позицій
    // =========================================================
    $(document).on("click", "#dnd-ai-update-scene-btn", async function() {
        if (!gameState.viewingLocId || !gameState.viewingRoomId) {
            toast.warning("Please select a location and room first.");
            return;
        }
        const activeLocIds = Object.keys(gameState.activeLocations);
        if (activeLocIds.length === 0) {
            toast.warning("No active locations.");
            return;
        }

        const $btn = $(this);
        const orig = $btn.html();
        $btn.prop("disabled", true).html(`${ICONS.refresh} Думаю...`);

        const context = getRecentChatContext(5);
        const activeLocationsBlock = await (async () => {
            const blocks = [];
            for (const locId of activeLocIds) {
                const tLayout = await getLayout(locId);
                if (!tLayout) continue;
                const locInfo = getLocInfo(locId);
                const isViewingLoc = locId === gameState.viewingLocId;
                const header = `--- Location: ${locId} (${locInfo?.name || locId})${isViewingLoc ? " [VIEWING]" : ""} ---`;
                const roomLines = [];
                for (const [rid, r] of Object.entries(tLayout.rooms)) {
                    const isViewingRoom = isViewingLoc && rid === gameState.viewingRoomId;
                    const furnitureStr = (r.furniture || []).length
                        ? (r.furniture || []).map(f => `        - ${f.type} (x:${f.x}, y:${f.y}, w:${f.w}, h:${f.h}, occupiable: ${f.occupiable})`).join("\n")
                        : "        (none)";
                    const tokensInRoom = Object.values(gameState.activeLocations[locId].tokens || {}).filter(t => t.roomId === rid);
                    const tokensStr = tokensInRoom.length
                        ? tokensInRoom.map(t => `        - ID: ${t.id}, Name: ${t.name}, x: ${t.x}, y: ${t.y}`).join("\n")
                        : "        (none)";
                    roomLines.push(
                        `    - RoomID: ${rid}, Name: ${r.name}, Grid: ${r.grid.cols}x${r.grid.rows}${isViewingRoom ? " [VIEWING]" : ""}\n` +
                        `      Furniture:\n${furnitureStr}\n` +
                        `      Tokens:\n${tokensStr}`
                    );
                }
                blocks.push(header + "\n" + roomLines.join("\n"));
            }
            return blocks.join("\n");
        })();

        let charsData = [];
        const personaName = name1 || (window.power_user && window.power_user.persona_name) || "User";
        charsData.push(`- Persona: ${personaName}`);
        if (characters) {
            if (selected_group && groups) {
                const group = groups.find(g => g.id === selected_group);
                if (group && group.members) {
                    group.members.forEach(memberId => {
                        const char = characters.find(c => c.avatar === memberId);
                        if (char) charsData.push(`- Character: ${char.name} (Avatar: /characters/${char.avatar})`);
                    });
                }
            } else if (this_chid !== undefined && characters[this_chid]) {
                const char = characters[this_chid];
                charsData.push(`- Character: ${char.name} (Avatar: /characters/${char.avatar})`);
            }
        }
        const knownCharsStr = charsData.join("\n");

        const prompt = `You are a Virtual Tabletop AI Director. Analyze the roleplay chat and update the scene characters across ALL active locations.

ACTIVE LOCATIONS (rooms, furniture, tokens):
${activeLocationsBlock}

KNOWN CHAT CHARACTERS:
${knownCharsStr}

RECENT CHAT CONTEXT:
${context}

TASK:
Based on the chat context, who is in the scene right now and where? Characters may be in different active locations simultaneously (e.g. one at home, another at the office). Create a JSON array of actions to update the map across any of the active locations listed above.
1. "add": Character entered a location/room. Provide "name", "avatar" (emoji or URL), "locId", "roomId", "x", "y".
2. "move": Character moved (within a room, between rooms, or between locations). Provide "id" (existing token id), "locId" (target location), "roomId" (target room), "x", "y".
3. "remove": Character left all known locations. Provide "id".

Rules:
- "locId" and "roomId" must reference IDs listed above. If a character stays in their current room but only changes position, reuse their current "locId"/"roomId".
- For "move", the token "id" must be one of the existing token IDs listed above.
- Prefer placing characters on "occupiable: true" furniture (e.g. bed, sofa, chair) when it fits the narrative.
- Avoid placing on "occupiable: false" furniture (obstacles).
- Two characters MUST NOT occupy the same cell. If a cell is already taken, pick a free adjacent cell.

If no actions are needed, return an empty array: []

Example of expected JSON output:
\`\`\`json
[
  { "action": "add", "name": "Alice", "avatar": "A", "locId": "${gameState.viewingLocId}", "roomId": "${gameState.viewingRoomId}", "x": 2, "y": 2 },
  { "action": "move", "id": "token_abc123", "locId": "${gameState.viewingLocId}", "roomId": "${gameState.viewingRoomId}", "x": 5, "y": 3 }
]
\`\`\``;

        try {
            const charAvatarMap = buildCharAvatarMap();
            const rawResponse = await callAIDirector(prompt);
            const text = rawResponse || "";
            const jsonMatch = text.match(/\[[\s\S]*\]/);
            if (!jsonMatch) throw new Error("Не знайдено JSON у відповіді.");
            const actions = JSON.parse(jsonMatch[0]);

            for (const act of actions) {
                if (act.action === "add" && act.name) {
                    const knownAvatar = charAvatarMap[act.name.toLowerCase()];
                    if (knownAvatar) act.avatar = knownAvatar;
                }
            }

            let movedCount = 0, addedCount = 0, removedCount = 0;

            for (const act of actions) {
                try {
                    if (act.action === "add") {
                        const targetLocId = act.locId || gameState.viewingLocId;
                        if (!gameState.activeLocations[targetLocId]) {
                            if (!confirm(`ШІ намагається додати ${act.name} у неактивну локацію: ${targetLocId}. Активувати її?`)) continue;
                            gameState.activeLocations[targetLocId] = { tokens: {} };
                        }
                        const tLocState = gameState.activeLocations[targetLocId];
                        if (!tLocState.tokens) tLocState.tokens = {};

                        const tLayout = await getLayout(targetLocId);
                        if (!tLayout) continue;
                        const tRoomId = act.roomId || Object.keys(tLayout.rooms)[0];
                        const tGrid = getOccupancyGrid(tLayout, tRoomId);

                        const tId = generateTokenId();
                        let finalX = act.x || 0;
                        let finalY = act.y || 0;
                        const freePos = findNearestFreeCell(tGrid, finalX, finalY);
                        finalX = freePos.x;
                        finalY = freePos.y;
                        tGrid[finalY][finalX] = true; // позначаємо зайнятим для наступних add в цьому batch

                        tLocState.tokens[tId] = {
                            id: tId, type: "character",
                            name: act.name || "NPC",
                            avatar: act.avatar || "?",
                            roomId: tRoomId, x: finalX, y: finalY
                        };
                        tLocState.lastInteractionAt = Date.now();
                        addedCount++;
                        toast.success(`${act.name || "NPC"} appeared in the scene`);
                    } else if (act.action === "move" && act.id) {
                        const found = findTokenInActiveLocations(act.id);
                        if (!found) continue;
                        const { locId: sourceLocId, locState: sourceLocState, token } = found;
                        const targetLocId = act.locId || sourceLocId;
                        if (!gameState.activeLocations[targetLocId]) {
                            if (!confirm(`${token.name} пішов у ${targetLocId}. Активувати цю локацію?`)) continue;
                            gameState.activeLocations[targetLocId] = { tokens: {} };
                        }
                        const targetLocState = gameState.activeLocations[targetLocId];
                        if (!targetLocState.tokens) targetLocState.tokens = {};

                        const targetLayout = await getLayout(targetLocId);
                        if (!targetLayout) continue;

                        const targetRoomId = act.roomId || token.roomId || Object.keys(targetLayout.rooms)[0];
                        let finalX = act.x !== undefined ? act.x : token.x;
                        let finalY = act.y !== undefined ? act.y : token.y;

                        if (targetLocId !== sourceLocId) {
                            const tGrid = getOccupancyGrid(targetLayout, targetRoomId);
                            const freePos = findNearestFreeCell(tGrid, finalX, finalY);
                            finalX = freePos.x; finalY = freePos.y;
                            tGrid[finalY][finalX] = true;
                            targetLocState.tokens[token.id] = { ...token, roomId: targetRoomId, x: finalX, y: finalY };
                            delete sourceLocState.tokens[token.id];
                            targetLocState.lastInteractionAt = Date.now();
                            movedCount++;
                        } else {
                            // ВАЖЛИВО: будуємо грид БЕЗ поточного токену, щоб він міг стояти на власній клітинці
                            const tGrid = getOccupancyGrid(targetLayout, targetRoomId);
                            tGrid[token.y][token.x] = false; // звільняємо власну клітинку
                            const sameCell = token.x === finalX && token.y === finalY;
                            if (isCellFree(tGrid, finalX, finalY) || sameCell) {
                                token.x = finalX; token.y = finalY;
                            } else {
                                const freePos = findNearestFreeCell(tGrid, finalX, finalY);
                                token.x = freePos.x; token.y = freePos.y;
                            }
                            token.roomId = targetRoomId;
                            targetLocState.lastInteractionAt = Date.now();
                            movedCount++;
                        }
                    } else if (act.action === "remove" && act.id) {
                        const found = findTokenInActiveLocations(act.id);
                        if (found) {
                            const { locState: lstate, token } = found;
                            delete lstate.tokens[token.id];
                            lstate.lastInteractionAt = Date.now();
                            removedCount++;
                            toast.warning(`${token.name} left the scene`);
                        }
                    }
                } catch (err) {
                    console.warn("[Silly Map AI] Action processing error:", act, err);
                }
            }
            saveState();
            renderCanvas();
            renderActiveTokensList();
            renderLocationsGrid();
            toast.info(`Added: ${addedCount}, Moved: ${movedCount}, Removed: ${removedCount}`);
        } catch (err) {
            console.error("[Silly Map AI] API Error:", err);
            toast.error("AI generation error.");
        } finally {
            $btn.prop("disabled", false).html(orig);
        }
    });

    // =========================================================
    // МАЛЮВАННЯ МАПИ
    // =========================================================
    async function renderCanvas() {
        const canvas = document.getElementById("dnd-map-canvas");
        const ctx = canvas.getContext("2d");

        if (!gameState.viewingLocId || !gameState.viewingRoomId) {
            ctx.fillStyle = "#0a0a0c";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#7f8c8d";
            ctx.font = "24px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Add a scene from the library", canvas.width / 2, canvas.height / 2);
            updateRoomNavButtons();
            return;
        }

        const layout = await getLayout(gameState.viewingLocId);
        if (!layout) { updateRoomNavButtons(); return; }
        const locInfo = getLocInfo(gameState.viewingLocId);

        const roomData = layout.rooms[gameState.viewingRoomId];
        const cellW = canvas.width / roomData.grid.cols;
        const cellH = canvas.height / roomData.grid.rows;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const bgImg = await loadImage(ASSETS_PATH + locInfo.path + roomData.background);
        if (bgImg) ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

        // Сітка
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 1;
        for (let x = 0; x <= canvas.width; x += cellW) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        }
        for (let y = 0; y <= canvas.height; y += cellH) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        }``

        // Меблі
        if (Array.isArray(roomData.furniture)) {
            for (const item of roomData.furniture) {
                const px = item.x * cellW;
                const py = item.y * cellH;
                const pw = item.w * cellW;
                const ph = item.h * cellH;
                ctx.fillStyle = item.occupiable ? "rgba(46, 204, 112, 0)" : "rgba(231, 77, 60, 0)";
                ctx.fillRect(px, py, pw, ph);
                ctx.strokeStyle = item.occupiable ? "rgba(46, 204, 112, 0)" : "rgba(231, 77, 60, 0)";
                ctx.lineWidth = 2;
                ctx.strokeRect(px, py, pw, ph);
            }
        }

        // Підсвічування доступних/недоступних клітинок під час вибору токену
        // для переміщення (мобільний tap-to-move) або під час розміщення нового
        // токену. Доступні — зелений оверлей, недоступні (меблі або зайняті
        // іншим токеном) — червоний.
        if (selectedTokenId || placingToken) {
            const grid = getOccupancyGrid(layout, gameState.viewingRoomId);
            if (selectedTokenId) {
                const selState = gameState.activeLocations[gameState.viewingLocId];
                const selToken = selState?.tokens?.[selectedTokenId];
                if (!selToken || selToken.roomId !== gameState.viewingRoomId) {
                    // Виділений токен зник або в іншій кімнаті — скидаємо
                    selectedTokenId = null;
                } else {
                    // Власна клітинка виділеного токену — вільна
                    grid[selToken.y][selToken.x] = false;
                }
            }
            if (selectedTokenId || placingToken) {
                for (let y = 0; y < roomData.grid.rows; y++) {
                    for (let x = 0; x < roomData.grid.cols; x++) {
                        const free = isCellFree(grid, x, y);
                        const ox = x * cellW;
                        const oy = y * cellH;
                        ctx.fillStyle = free
                            ? "rgba(46, 204, 113, 0.28)"
                            : "rgba(231, 76, 60, 0.22)";
                        ctx.fillRect(ox, oy, cellW, cellH);
                        ctx.strokeStyle = free
                            ? "rgba(46, 204, 113, 0.55)"
                            : "rgba(231, 76, 60, 0.45)";
                        ctx.lineWidth = 1;
                        ctx.strokeRect(ox + 0.5, oy + 0.5, cellW - 1, cellH - 1);
                    }
                }
            }
        }

        async function drawSingleToken(t, px, py, alpha = 1.0) {
            ctx.globalAlpha = alpha;
            const cx = px + cellW / 2;
            const cy = py + cellH / 2;
            const radius = Math.min(cellW, cellH) / 2.5;
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(41, 128, 185, 0.8)";
            ctx.fill();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.stroke();

            if (t.avatar.includes("/") || t.avatar.includes(".")) {
                const img = await loadImage(t.avatar);
                if (img) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(cx, cy, radius, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.clip();
                    const diameter = radius * 2;
                    const imgRatio = img.width / img.height;
                    let drawW, drawH;
                    if (imgRatio >= 1) { drawH = diameter; drawW = diameter * imgRatio; }
                    else { drawW = diameter; drawH = diameter / imgRatio; }
                    ctx.drawImage(img, cx - drawW / 2, cy - drawH / 2, drawW, drawH);
                    ctx.restore();
                }
            } else {
                ctx.fillStyle = "white";
                ctx.font = `${Math.min(cellW, cellH) / 2}px Arial`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(t.avatar, cx, cy);
            }
            ctx.font = "bold 15px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "alphabetic";
            // Контур (stroke) щоб білий текст не зливався зі світлим фоном
            ctx.lineJoin = "round";
            ctx.lineWidth = 4;
            ctx.strokeStyle = "rgba(0, 0, 0, 0.9)";
            ctx.strokeText(t.name, cx, py + cellH - 6);
            ctx.fillStyle = "white";
            ctx.fillText(t.name, cx, py + cellH - 6);
            ctx.globalAlpha = 1.0;
        }

        const locState = gameState.activeLocations[gameState.viewingLocId];
        if (locState && locState.tokens) {
            const tokens = Object.values(locState.tokens).filter(t => t.roomId === gameState.viewingRoomId);
            for (const t of tokens) {
                if (t.id === draggedTokenId) continue;
                await drawSingleToken(t, t.x * cellW, t.y * cellH, 1.0);
                // Кільце виділення навколо виділеного токену (для переміщення)
                if (t.id === selectedTokenId) {
                    ctx.save();
                    const cx = t.x * cellW + cellW / 2;
                    const cy = t.y * cellH + cellH / 2;
                    const radius = Math.min(cellW, cellH) / 2.5 + 5;
                    ctx.strokeStyle = "#f1c40f";
                    ctx.lineWidth = 4;
                    ctx.setLineDash([6, 4]);
                    ctx.beginPath();
                    ctx.arc(cx, cy, Math.max(1, radius), 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();
                }
            }
            if (draggedTokenId && currentMouseGridX !== null) {
                const t = locState.tokens[draggedTokenId];
                const gridX = Math.floor(currentMouseGridX / cellW);
                const gridY = Math.floor(currentMouseGridY / cellH);
                const grid = getOccupancyGrid(layout, gameState.viewingLocId ? gameState.viewingRoomId : null);
                grid[t.y][t.x] = false; // власна клітинка — вільна
                const isFree = isCellFree(grid, gridX, gridY) || (t.x === gridX && t.y === gridY);
                await drawSingleToken(t, gridX * cellW, gridY * cellH, isFree ? 0.7 : 0.3);
                if (!isFree) {
                    ctx.strokeStyle = "red"; ctx.lineWidth = 4;
                    ctx.beginPath();
                    const px = gridX * cellW, py = gridY * cellH;
                    ctx.moveTo(px + cellW*0.2, py + cellH*0.2);
                    ctx.lineTo(px + cellW*0.8, py + cellH*0.8);
                    ctx.moveTo(px + cellW*0.8, py + cellH*0.2);
                    ctx.lineTo(px + cellW*0.2, py + cellH*0.8);
                    ctx.stroke();
                }
            }
        }

        if (placingToken && currentMouseGridX !== null) {
            const gridX = Math.floor(currentMouseGridX / cellW);
            const gridY = Math.floor(currentMouseGridY / cellH);
            const grid = getOccupancyGrid(layout, gameState.viewingRoomId);
            const isFree = isCellFree(grid, gridX, gridY);
            await drawSingleToken(placingToken, gridX * cellW, gridY * cellH, isFree ? 0.8 : 0.4);
            if (!isFree) {
                ctx.strokeStyle = "red"; ctx.lineWidth = 4;
                ctx.beginPath();
                const px = gridX * cellW, py = gridY * cellH;
                ctx.moveTo(px + cellW*0.2, py + cellH*0.2);
                ctx.lineTo(px + cellW*0.8, py + cellH*0.8);
                ctx.moveTo(px + cellW*0.8, py + cellH*0.2);
                ctx.lineTo(px + cellW*0.2, py + cellH*0.8);
                ctx.stroke();
            }
        }

        updateRoomNavButtons();
    }

    // =========================================================
    // НАВІГАЦІЯ КІМНАТАМИ (стрілки prev/next)
    // =========================================================
    function updateRoomNavButtons() {
        if (!gameState.viewingLocId || !gameState.viewingRoomId) {
            $("#dnd-room-prev, #dnd-room-next").prop("disabled", true);
            return;
        }
        const layout = layoutCache[gameState.viewingLocId];
        if (!layout) {
            $("#dnd-room-prev, #dnd-room-next").prop("disabled", true);
            return;
        }
        const roomIds = Object.keys(layout.rooms);
        const idx = roomIds.indexOf(gameState.viewingRoomId);
        $("#dnd-room-prev").prop("disabled", idx <= 0);
        $("#dnd-room-next").prop("disabled", idx < 0 || idx >= roomIds.length - 1);
    }

    $(document).on("click", "#dnd-room-prev", async () => {
        const layout = layoutCache[gameState.viewingLocId];
        if (!layout) return;
        const roomIds = Object.keys(layout.rooms);
        const idx = roomIds.indexOf(gameState.viewingRoomId);
        if (idx <= 0) return;
        gameState.viewingRoomId = roomIds[idx - 1];
        selectedTokenId = null;
        saveState();
        renderActiveTokensList();
        await renderCanvas();
    });
    $(document).on("click", "#dnd-room-next", async () => {
        const layout = layoutCache[gameState.viewingLocId];
        if (!layout) return;
        const roomIds = Object.keys(layout.rooms);
        const idx = roomIds.indexOf(gameState.viewingRoomId);
        if (idx < 0 || idx >= roomIds.length - 1) return;
        gameState.viewingRoomId = roomIds[idx + 1];
        selectedTokenId = null;
        saveState();
        renderActiveTokensList();
        await renderCanvas();
    });

    // =========================================================
    // SESSION DRAWER
    // =========================================================
    let drawerCloseTimeout = null;
    $(document).on("mouseenter", "#dnd-session-drawer", () => {
        clearTimeout(drawerCloseTimeout);
        $("#dnd-session-drawer").addClass("open");
    });
    $(document).on("mouseleave", "#dnd-session-drawer", () => {
        drawerCloseTimeout = setTimeout(() => $("#dnd-session-drawer").removeClass("open"), 300);
    });
    $(document).on("click", "#dnd-session-arrow", (e) => {
        $("#dnd-session-drawer").toggleClass("open");
        e.stopPropagation();
    });

    async function renderSessionDrawer() {
        if (drawerView.level === "rooms") await renderRoomTiles();
        else await renderLocationTiles();
    }

    async function renderLocationTiles() {
        const $tiles = $("#dnd-session-tiles");
        $tiles.empty();
        const locIds = Object.keys(gameState.activeLocations);
        if (locIds.length === 0) {
            $("#dnd-session-arrow").hide();
            $("#dnd-session-drawer").removeClass("open");
            return;
        }
        $("#dnd-session-arrow").show();

        for (const locId of locIds) {
            const layout = await getLayout(locId);
            if (!layout) continue;
            const locInfo = getLocInfo(locId);
            const currentRoomId = (locId === gameState.viewingLocId && gameState.viewingRoomId) || Object.keys(layout.rooms)[0];
            const roomData = layout.rooms[currentRoomId];
            const imgPath = ASSETS_PATH + locInfo.path + roomData.background;
            const tile = $(`
                <div class="dnd-session-tile ${locId === gameState.viewingLocId ? "active" : ""}" data-id="${locId}">
                    <img class="dnd-session-tile-img" src="${imgPath}" alt="${locInfo.name}">
                    <div class="dnd-session-tile-name">${locInfo.name}</div>
                    <div class="dnd-session-tile-remove" title="Deactivate scene">${ICONS.close}</div>
                </div>
            `);
            tile.on("click", async function(e) {
                if ($(e.target).closest(".dnd-session-tile-remove").length) {
                    e.stopPropagation();
                    delete gameState.activeLocations[locId];
                    if (locId === gameState.viewingLocId) {
                        const remaining = Object.keys(gameState.activeLocations);
                        if (remaining.length > 0) {
                            await switchViewingScene(remaining[0], { drillDown: false });
                        } else {
                            gameState.viewingLocId = null;
                            gameState.viewingRoomId = null;
                        }
                    }
                    saveState();
                    await renderSessionDrawer();
                    await renderCanvas();
                    renderLocationsGrid();
                    return;
                }
                await switchViewingScene(locId, { drillDown: true });
            });
            $tiles.append(tile);
        }
    }

    async function renderRoomTiles() {
        const $tiles = $("#dnd-session-tiles");
        $tiles.empty();
        $("#dnd-session-arrow").show();
        const locId = drawerView.locId;
        const layout = await getLayout(locId);
        if (!layout) {
            drawerView = { level: "locations", locId: null };
            await renderLocationTiles();
            return;
        }
        const locInfo = getLocInfo(locId);
        const backTile = $(`
            <div class="dnd-session-tile dnd-session-tile-back" title="Back to locations">
                <div class="dnd-session-tile-back-icon">${ICONS.back}</div>
                <div class="dnd-session-tile-name">Locations</div>
            </div>
        `);
        backTile.on("click", async () => {
            drawerView = { level: "locations", locId: null };
            await renderSessionDrawer();
        });
        $tiles.append(backTile);

        for (const [roomId, roomData] of Object.entries(layout.rooms)) {
            const imgPath = ASSETS_PATH + locInfo.path + roomData.background;
            const isActive = locId === gameState.viewingLocId && roomId === gameState.viewingRoomId;
            const tile = $(`
                <div class="dnd-session-tile ${isActive ? "active" : ""}" data-room-id="${roomId}">
                    <img class="dnd-session-tile-img" src="${imgPath}" alt="${roomData.name}">
                    <div class="dnd-session-tile-name">${roomData.name}</div>
                </div>
            `);
            tile.on("click", async () => {
                gameState.viewingLocId = locId;
                gameState.viewingRoomId = roomId;
                saveState();
                await renderRoomTiles();
                renderActiveTokensList();
                await renderCanvas();
            });
            $tiles.append(tile);
        }
    }

    async function switchViewingScene(locId, options = { drillDown: true }) {
        const layout = await getLayout(locId);
        if (!layout) return;
        gameState.viewingLocId = locId;
        gameState.viewingRoomId = Object.keys(layout.rooms)[0];
        saveState();
        drawerView = options.drillDown
            ? { level: "rooms", locId }
            : { level: "locations", locId: null };
        await renderSessionDrawer();
        renderActiveTokensList();
        renderLocationsGrid();
        await renderCanvas();
    }

    // =========================================================
    // ВІДКРИТТЯ / ЗАКРИТТЯ МАПИ (persistent per chat)
    // =========================================================
    async function openMap() {
        isMapVisible = true;
        await loadInstalledLocations();
        saveMapOpenState(currentChatId, true);
        $("#dnd-app-layout").addClass("dnd-map-open");
        updateCollapseBtnVisibility();

        drawerView = gameState.viewingLocId
            ? { level: "rooms", locId: gameState.viewingLocId }
            : { level: "locations", locId: null };

        await renderSessionDrawer();
        renderActiveTokensList();
        renderLocationsGrid();
        await renderCanvas();
        // Вписати мапу у viewport після того, як DOM оновився і viewport має реальний розмір
        requestAnimationFrame(() => fitMapView());
        updateCurrentModelDisplay();
    }

    function closeMap() {
        isMapVisible = false;
        saveMapOpenState(currentChatId, false);
        $("#dnd-app-layout").removeClass("dnd-map-open");
        closePanel();
        updateCollapseBtnVisibility();
    }

    // Floating-кнопка (collapse-btn) показується лише якщо обрано чат.
    // Wand-меню кнопка доступна завжди.
    function updateCollapseBtnVisibility() {
        const hasChat = Boolean(currentChatId);
        $("#dnd-map-collapse-btn").toggle(hasChat);
    }

    $(document).on("click", "#dnd-map-collapse-btn", async () => {
        if (isMapVisible) {
            closeMap();
        } else {
            await openMap();
        }
    });

    // =========================================================
    // РОЗКЛАДКА DOM
    // =========================================================
    function setupLayout() {
        const $chatWrapper = $("#sheld");
        if ($chatWrapper.length === 0) {
            console.error("[Silly Map] #sheld not found—the keyboard layout is not configured.");
            return false;
        }
        if ($("#dnd-app-layout").length > 0) return true;
        $chatWrapper.wrap('<div id="dnd-app-layout"></div>');
        $("#dnd-app-layout").prepend(mapHtml);
        // Інпути форми налаштувань живуть всередині mapHtml — ініціалізуємо їх тільки тепер,
        // коли вони реально є в DOM. Інакше .prop("checked", ...) ні до чого не застосується
        // і чекбокс на перезавантаженні буде виглядати знятим, хоча стан у localStorage є.
        initSettingsForm();
        // Додаємо кнопку відкриття мапи у wand-меню (Extensions) SillyTavern.
        addWandMenuButton();
        return true;
    }

    // =========================================================
    // КНОПКА ВІДКРИТТЯ МАПИ У WAND-МЕНЮ (#extensionsMenu)
    // ST додає кнопки розширень у контейнери <name>_wand_container.
    // Для silly-map такого контейнера у wandMenu.html немає — створюємо свій.
    // =========================================================
    function addWandMenuButton() {
        if ($("#dnd_map_wand_container").length > 0) return; // вже додано
        const $menu = $("#extensionsMenu");
        if ($menu.length === 0) {
            // wand-меню ще не ініціалізовано — повторимо пізніше
            setTimeout(addWandMenuButton, 1000);
            return;
        }
        const $container = $('<div id="dnd_map_wand_container" class="extension_container"></div>');
        const $btn = $(`
            <div id="dnd_open_map" class="list-group-item flex-container flexGap5" style="align-items:center;" title="Open Silly Map">
                <div class="extensionsMenuExtensionButton" style="width:20px;height:20px;">${ICONS.map}</div>
                <span style>Silly Map</span>
            </div>
        `);
        $btn.on("click", async () => {
            // Закриваємо wand-меню (його власна логіка закриття по кліку поза меню)
            $("#extensionsMenu").fadeOut(150);
            if (isMapVisible) {
                // Якщо вже відкрита — цього не буде (кнопка приховується коли чату нема),
                // але на всяк випадок тоглимо
                closeMap();
            } else {
                await openMap();
            }
        });
        $container.append($btn);
        $menu.append($container);
    }

    // =========================================================
    // ІНТЕГРАЦІЯ З SILLY TAVERN
    // =========================================================
    eventSource.on(event_types.CHAT_CHANGED, async (chatId) => {
        currentChatId = chatId || null;
        console.log(`[Silly Map] Chat updated: ${currentChatId}`);

        loadState();
        updateCollapseBtnVisibility();

        // Якщо чат закрили — ховаємо мапу теж
        if (!currentChatId && isMapVisible) {
            closeMap();
            return;
        }

        drawerView = gameState.viewingLocId
            ? { level: "rooms", locId: gameState.viewingLocId }
            : { level: "locations", locId: null };

        // Auto-open based on persisted state
        const shouldOpen = loadMapOpenState(currentChatId);
        if (shouldOpen) {
            if (isMapVisible) {
                await renderSessionDrawer();
                renderActiveTokensList();
                renderLocationsGrid();
                await renderCanvas();
            } else {
                await openMap();
            }
        } else if (isMapVisible) {
            closeMap();
        }
    });

    eventSource.on(event_types.APP_READY, () => {
        updateCurrentModelDisplay();
    });

    // =========================================================
    // ІНІЦІАЛІЗАЦІЯ
    // =========================================================
    isLayoutReady = setupLayout();
    updateCurrentModelDisplay();

    if (!isLayoutReady) {
        setTimeout(() => {
            isLayoutReady = setupLayout();
            if (isLayoutReady) {
                updateCollapseBtnVisibility();
                if (currentChatId && loadMapOpenState(currentChatId)) {
                    openMap();
                }
            }
        }, 1500);
    } else {
        // При першому старті — відкриваємо мапу за замовчанням, якщо чат вже є
        currentChatId = currentChatId || getCurrentChatId();
        updateCollapseBtnVisibility();
        if (currentChatId) {
            loadState();
            if (loadMapOpenState(currentChatId)) {
                openMap();
            }
        }
    }
});