const labels = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const data = [1000, 2000, 3500, 1200, 5000, 3800, 2800];
const webCtx = document.getElementById('webChart');
if (webCtx) {
  new Chart(webCtx, {
    type: 'line',
    data: { labels, datasets: [{ data, borderColor: '#22d3ee', backgroundColor: 'rgba(34,211,238,0.08)', fill: true, tension:0.4 }] },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#9aa7b7' } },
        y: { grid: { color: 'rgba(255,255,255,0.03)' }, ticks: { color: '#9aa7b7' } }
      }
    }
  });
}
const mobileCtx = document.getElementById('mobileChart');
if (mobileCtx) {
  new Chart(mobileCtx, {
    type: 'line',
    data: { labels, datasets: [{ data, borderColor: '#22d3ee', backgroundColor: 'rgba(34,211,238,0.06)', fill:true, tension:0.4 }] },
    options: { responsive: true, plugins: { legend: { display: false } }, scales: { x:{ ticks:{ color:'#9aa7b7' }}, y:{ ticks:{ color:'#9aa7b7' } } } }
  });
}
