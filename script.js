// Tab switching logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const link = document.getElementById('inviteLink').textContent;
    navigator.clipboard.writeText(link);
    this.textContent = '✅';
    this.style.background = "#43e97b";
    this.style.color = "#191c29";
    setTimeout(() => {
        this.textContent = '📋';
        this.style.background = "#222538";
        this.style.color = "";
    }, 1100);
});

document.getElementById('joinBtn').addEventListener('click', function() {
    const link = document.getElementById('inviteLink').textContent;
    window.open(link, '_blank');
});
