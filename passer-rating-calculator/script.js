function calculateRating() {
    let attempts = parseFloat(document.getElementById('attempts').value);
    let completions = parseFloat(document.getElementById('completions').value);
    let yards = parseFloat(document.getElementById('yards').value);
    let touchdowns = parseFloat(document.getElementById('touchdowns').value);
    let interceptions = parseFloat(document.getElementById('interceptions').value);

    let a = (completions / attempts - 0.3) * 5;
    let b = (yards / attempts - 3) * 0.25;
    let c = touchdowns / attempts * 20;
    let d = 2.375 - interceptions / attempts * 25;

    a = Math.max(0, Math.min(a, 2.375));
    b = Math.max(0, Math.min(b, 2.375));
    c = Math.max(0, Math.min(c, 2.375));
    d = Math.max(0, Math.min(d, 2.375));

    let rating = (a + b + c + d) / 6 * 100;

    document.getElementById('rating-result').innerText = rating.toFixed(1);
}
