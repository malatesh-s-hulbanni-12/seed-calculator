function toggleCommissionInput() {
    const commission = document.getElementById("commission").value;
    const commissionInput = document.getElementById("commissionInput");
    commissionInput.style.display = commission === "1" ? "block" : "none";
}

function calculateTotal() {
    const packets = parseInt(document.getElementById("packets").value) || 0;
    const rpacket = parseInt(document.getElementById("rpacket").value) || 0;
    const kgPerPacket = parseInt(document.getElementById("kgPerPacket").value) || 0;
    const amountPerQuintal = parseInt(document.getElementById("amountPerQuintal").value) || 0;
    const dalliAmali = parseInt(document.getElementById("dalliAmali").value) || 0;
    const Amali = parseInt(document.getElementById("Amali").value) || 0;
    const commission = parseInt(document.getElementById("commission").value) || 0;
    const commissionPercent = parseInt(document.getElementById("commissionPercent").value) || 0;
  
    const totalKg = (packets * kgPerPacket)+rpacket;
    const amountPerKg = amountPerQuintal / 100;
    const seedAmount = totalKg * amountPerKg;
    const dalliAmaliTotal = packets * dalliAmali;
    const AmaliTotal = packets * Amali;
    let totalAmount = seedAmount - (dalliAmaliTotal+AmaliTotal);
    const commissionAmount = (seedAmount * commissionPercent) /100;
  
    if (commission === 1) {
      const commissionAmount = (seedAmount * commissionPercent) / 100;
      totalAmount -= commissionAmount;
    }
  
    const output = document.getElementById("output");
    output.innerHTML = `
      <p>Total Quintal of seed: <strong>${totalKg / 100} Quintal</strong></p>
      <p>Total Amount of seed(with commision): <strong>${seedAmount.toFixed(2)}</strong></p>
      <p>amount per quintal : <strong>${amountPerQuintal}</strong></p>
      <p>dalali and amali Amount : <strong>${dalliAmaliTotal}</strong></p>
      <p>amali Amount : <strong>${AmaliTotal}</strong></p>
      <p>commission Amount : <strong>${commissionAmount}</strong></p>
      <p class="highlight">Total Amount : <strong>${totalAmount.toFixed(2)}</strong></p>
    `;
  }
  