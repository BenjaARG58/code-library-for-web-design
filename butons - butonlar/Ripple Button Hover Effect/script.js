// Tüm ripple butonlarını seçiyoruz
const buttons = document.querySelectorAll('.ripple-button');

buttons.forEach(button => {
  button.addEventListener('mouseenter', function (e) {
    // Butonun pozisyonunu alıyoruz
    const rect = this.getBoundingClientRect();

    // Fare konumunu hesaplıyoruz
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Ripple efektinin başlangıç pozisyonunu ayarlıyoruz
    this.style.setProperty('--ripple-x', `${x}px`);
    this.style.setProperty('--ripple-y', `${y}px`);

    // Hover sınıfını ekleyerek efekti başlatıyoruz
    this.classList.add('hovered');
  });

  // Fare butondan ayrıldığında ripple efektini ve rengi durduruyoruz
  button.addEventListener('mouseleave', function () {
    this.classList.remove('hovered');
  });
});
