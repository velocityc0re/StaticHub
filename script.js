:root {
    --accent: #6b73ff;
    --accent2: #000dff;
    --dark-bg: #191c29;
    --glass-bg: rgba(25, 28, 41, 0.90);
    --frost: rgba(255,255,255,0.07);
    --text: #fff;
    --muted: #c9cffc;
    --success: #43e97b;
    --glass-blur: 18px;
    --border-radius: 28px;
    --main-width: 900px;
}

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    min-height: 100vh;
    margin: 0;
    font-family: 'Inter', 'Montserrat', Arial, sans-serif;
    background: var(--dark-bg);
    color: var(--text);
    overflow-x: hidden;
}

.bg-animated {
    position: fixed;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    left: 0; top: 0;
    background: linear-gradient(120deg, #6b73ff 0%, #000dff 100%);
    background-size: 200% 200%;
    animation: gradientMove 7s ease-in-out infinite;
    filter: blur(70px) brightness(0.7) contrast(1.8);
}

@keyframes gradientMove {
    0% { background-position: 0% 20%; }
    50% { background-position: 100% 80%; }
    100% { background-position: 0% 20%; }
}

main {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.glass-card {
    margin: 32px auto 24px auto;
    background: var(--glass-bg);
    border-radius: var(--border-radius);
    box-shadow: 0 8px 40px rgba(40, 70, 250, 0.18), 0 1.5px 8px 0 rgba(0,0,0,0.25);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1.5px solid var(--frost);
    padding: 2rem 3.2rem 2.4rem 3.2rem;
    max-width: var(--main-width);
    width: 95vw;
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
}

.header-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 0.3rem;
    gap: 0.7rem;
    padding-bottom: 0.7rem;
    border-bottom: 2.5px solid rgba(107,115,255,0.16);
}

.header-title {
    font-size: 2.8rem;
    letter-spacing: 0.01em;
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 700;
    color: var(--accent);
    margin: 0;
    padding: 0;
    text-align: left;
    line-height: 1.1;
}

.header-right {
    display: flex;
    align-items: flex-end;
    gap: 0.13em;
    white-space: nowrap;
    flex-wrap: wrap;
    line-height: 1.1;
}

.header-right .hashtag {
    color: var(--success);
    font-weight: 900;
    font-size: 2.8rem;
    letter-spacing: -2px;
    margin-right: 0.1em;
}
.header-right .numone {
    color: var(--accent);
    font-weight: 900;
    font-size: 2.8rem;
    margin-left: -0.15em;
    margin-right: 0.22em;
}
.header-right .header-utility {
    color: #b4baff;
    font-size: 2.1rem;
    font-weight: 600;
    margin-left: 0.22em;
}

.logo-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.0rem 0 1.6rem 0;
}

.logo {
    width: 104px;
    height: 104px;
    border-radius: 24px;
    box-shadow: 0 2px 18px 0 rgba(60,60,90,0.21);
    background: #fff;
    object-fit: cover;
    border: 4px solid var(--accent);
}

.tabs {
    margin-top: 0.2rem;
    margin-bottom: 2.2rem;
    display: flex;
    flex-direction: row;
    gap: 1.8rem;
    justify-content: center;
    width: 100%;
}

.tab-btn {
    background: none;
    color: var(--muted);
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 700;
    font-size: 1.18em;
    padding: 0.6em 2.3em 0.6em 2.3em;
    border: none;
    border-radius: 9px 9px 0 0;
    cursor: pointer;
    transition: background 0.18s, color 0.18s, box-shadow 0.18s, border-bottom 0.18s;
    outline: none;
    border-bottom: 2.5px solid transparent;
    position: relative;
}

.tab-btn.active,
.tab-btn:hover,
.tab-btn:focus {
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    color: #fff;
    box-shadow: 0 3px 16px 0 rgba(67, 233, 123, 0.06);
    border-bottom: 2.5px solid var(--success);
    outline: none;
    z-index: 2;
}

.tab-content {
    width: 100%;
    min-height: 230px;
    position: relative;
}

.tab-pane {
    display: none;
    opacity: 0;
    transition: opacity 0.35s;
    width: 100%;
    animation: fadeIn 0.35s;
}

.tab-pane.active {
    display: block;
    opacity: 1;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(16px);}
    to { opacity: 1; transform: translateY(0);}
}

h2 {
    font-size: 1.35rem;
    color: var(--success);
    font-family: 'Montserrat', Arial, sans-serif;
    margin-top: 0.3em;
    margin-bottom: 0.4em;
    text-align: left;
}

ul {
    padding-left: 1.3em;
    margin: 0.8em 0 1.2em 0;
    font-size: 1.07em;
}

li {
    margin-bottom: 0.5em;
    line-height: 1.5;
}

.features-list {
    list-style: none;
    padding-left: 0;
}

.features-list li {
    margin-bottom: 1.25em;
    border-left: 3px solid var(--accent);
    padding-left: 0.9em;
    background: rgba(67,233,123,0.05);
    border-radius: 7px;
    padding-top: 0.35em;
    padding-bottom: 0.35em;
}

.feature-title {
    font-weight: 600;
    color: var(--accent);
}

.feature-desc {
    display: block;
    color: var(--muted);
    font-size: 0.98em;
    margin-top: 0.1em;
    margin-left: 0.1em;
}

blockquote {
    background: rgba(107,115,255,0.11);
    border-left: 5px solid var(--accent);
    color: #bde8ff;
    font-style: italic;
    margin: 0.7em 0 0.7em 0;
    padding: 1em 1em 1em 1.2em;
    border-radius: 12px;
    font-size: 1.05em;
}

blockquote span {
    font-size: 0.98em;
    color: #97d0ff;
    margin-top: 0.7em;
    display: block;
}

#join {
    text-align: center;
}

#join p {
    color: var(--muted);
    font-size: 1.05em;
    margin-bottom: 1.5em;
    margin-top: 0.6em;
}

.main-btn {
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    color: #fff;
    padding: 0.9em 2.6em;
    font-size: 1.12em;
    border: none;
    border-radius: 12px;
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 2px 14px 0 rgba(60,90,220,0.12);
    margin-bottom: 1.15em;
    transition: background 0.18s, transform 0.12s;
}
.main-btn:hover, .main-btn:focus {
    background: linear-gradient(90deg, #43e97b, #38f9d7);
    color: #181c29;
    transform: translateY(-2px) scale(1.04);
    outline: none;
}

.invite-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    background: rgba(70, 90, 230, 0.09);
    border-radius: 6px;
    padding: 0.5em 1em;
    font-family: monospace, 'Inter', Arial, sans-serif;
    font-size: 1.05em;
    color: var(--success);
    word-break: break-all;
}

#inviteLink {
    user-select: all;
}

#copyBtn {
    margin-left: 0.2em;
    background: #222538;
    border: none;
    color: var(--accent);
    font-size: 1.1em;
    border-radius: 5px;
    cursor: pointer;
    padding: 0.23em 0.7em;
    transition: background 0.12s, color 0.12s;
}
#copyBtn:hover, #copyBtn:focus {
    background: #43e97b;
    color: #191c29;
    outline: none;
}

footer {
    margin-top: 1.1em;
    text-align: center;
    color: var(--muted);
    font-size: 1em;
    letter-spacing: 0.01em;
    opacity: 0.92;
}

@media (max-width: 900px) {
    .glass-card {
        padding: 1.6rem 1.2rem 1.5rem 1.2rem;
        max-width: 99vw;
    }
    .header-bar {
        flex-direction: column;
        align-items: stretch;
        gap: 0.7rem;
    }
    .header-title { 
        font-size: 1.7rem; 
        text-align: left;
    }
    .header-right .hashtag, .header-right .numone, .header-right .header-utility { font-size:1.2rem !important;}
    .tabs { gap: 0.6rem; }
}
@media (max-width: 550px) {
    .glass-card {
        padding: 0.7rem 0.2rem 1.2rem 0.2rem;
        min-width: unset;
    }
    .logo { width: 54px; height: 54px; }
    .tabs { gap: 0.2rem; }
    .tab-btn { font-size: 1em; padding: 0.4em 0.85em; }
    .header-title { font-size: 1.15rem; }
    .header-right .hashtag, .header-right .numone, .header-right .header-utility { font-size:0.8rem !important;}
}
