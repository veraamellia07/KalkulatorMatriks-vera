// Fungsi untuk menjumlahkan matriks A dan B
function addMatrices() {
    let a11 = parseFloat(document.getElementById('a11').value);
    let a12 = parseFloat(document.getElementById('a12').value);
    let a21 = parseFloat(document.getElementById('a21').value);
    let a22 = parseFloat(document.getElementById('a22').value);

    let b11 = parseFloat(document.getElementById('b11').value);
    let b12 = parseFloat(document.getElementById('b12').value);
    let b21 = parseFloat(document.getElementById('b21').value);
    let b22 = parseFloat(document.getElementById('b22').value);

    let result = `
        Matriks A + Matriks B = <br>
        |${a11 + b11} ${a12 + b12}| <br>
        |${a21 + b21} ${a22 + b22}|
    `;
    document.getElementById('resultText').innerHTML = result;
}

// Fungsi untuk mengurangkan matriks A dan B
function subtractMatrices() {
    let a11 = parseFloat(document.getElementById('a11').value);
    let a12 = parseFloat(document.getElementById('a12').value);
    let a21 = parseFloat(document.getElementById('a21').value);
    let a22 = parseFloat(document.getElementById('a22').value);

    let b11 = parseFloat(document.getElementById('b11').value);
    let b12 = parseFloat(document.getElementById('b12').value);
    let b21 = parseFloat(document.getElementById('b21').value);
    let b22 = parseFloat(document.getElementById('b22').value);

    let result = `
        Matriks A - Matriks B = <br>
        |${a11 - b11} ${a12 - b12}| <br>
        |${a21 - b21} ${a22 - b22}|
    `;
    document.getElementById('resultText').innerHTML = result;
}

// Fungsi untuk mengalikan matriks A dan B
function multiplyMatrices() {
    let a11 = parseFloat(document.getElementById('a11').value);
    let a12 = parseFloat(document.getElementById('a12').value);
    let a21 = parseFloat(document.getElementById('a21').value);
    let a22 = parseFloat(document.getElementById('a22').value);

    let b11 = parseFloat(document.getElementById('b11').value);
    let b12 = parseFloat(document.getElementById('b12').value);
    let b21 = parseFloat(document.getElementById('b21').value);
    let b22 = parseFloat(document.getElementById('b22').value);

    let result = `
        Matriks A * Matriks B = <br>
        |${(a11 * b11) + (a12 * b21)} ${(a11 * b12) + (a12 * b22)}| <br>
        |${(a21 * b11) + (a22 * b21)} ${(a21 * b12) + (a22 * b22)}|
    `;
    document.getElementById('resultText').innerHTML = result;
}
