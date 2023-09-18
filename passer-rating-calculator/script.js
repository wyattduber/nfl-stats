function calculateRating() {
    let attempts = parseFloat(document.getElementById('attempts').value);
    let completions = parseFloat(document.getElementById('completions').value);
    let yards = parseFloat(document.getElementById('yards').value);
    let touchdowns = parseFloat(document.getElementById('touchdowns').value);
    let interceptions = parseFloat(document.getElementById('interceptions').value);

    if (!validateInput(attempts, completions, yards, touchdowns, interceptions)) {
        return; // exit if validation fails
    }

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

function validateInput(attempts, completions, yards, touchdowns, interceptions) {
    let isValid = true;
    
    const inputIds = ['attempts', 'completions', 'yards', 'touchdowns', 'interceptions'];
    const inputValues = [attempts, completions, yards, touchdowns, interceptions];
    
    for (let i = 0; i < inputIds.length; i++) {
        if (isNaN(inputValues[i])) {
            document.getElementById(inputIds[i]).style.borderColor = 'red';
            isValid = false;
        } else {
            document.getElementById(inputIds[i]).style.borderColor = '';
        }
    }

    if (completions > attempts || touchdowns > attempts || interceptions > attempts) {
        alert("Completions, touchdowns, or interceptions cannot exceed passes attempted.");
        isValid = false;
    }

    if (attempts < 0 || completions < 0 || yards < 0 || touchdowns < 0 || interceptions < 0) {
        alert("Negative values are not allowed.");
        isValid = false;
    }

    return isValid;
}
