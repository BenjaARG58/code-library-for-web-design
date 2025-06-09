# Ripple Button Hover Effect

This is a simple web project that demonstrates a **ripple hover effect** using pure HTML, CSS, and JavaScript. When you hover over the button, a ripple animation expands from the cursor's position, creating a visually appealing interactive effect.

---

## 📂 Files & Structure

### 1. `index.html`

This is the **entry point** of the application.

- Loads `style.css` for the visual design.
- Loads `script.js` for the interaction logic.
- Contains a single button inside a container.

### 2. `style.css`

This file defines the **appearance and animation** of the ripple button.

- Centers content using Flexbox.
- Designs a stylish, rounded button.
- Implements a ripple effect using `::before` pseudo-element.
- The ripple's position is controlled via `--ripple-x` and `--ripple-y` custom properties.
- When `.hovered` class is applied, the ripple expands and fades out.

### 3. `script.js`

This file provides **dynamic interaction** for the button.

- Selects all buttons with `.ripple-button` class.
- On mouse enter: Calculates the cursor’s position relative to the button.
- Sets CSS variables for ripple position.
- Adds the `.hovered` class to trigger the ripple effect.
- On mouse leave: Removes the class to reset the effect.

---

## 🧪 Technologies Used

- HTML5  
- CSS3 (Flexbox, Pseudo-elements, Transitions)  
- Vanilla JavaScript (No libraries)

---

## 🎯 Purpose

The goal of this project is to demonstrate how you can create **modern, interactive buttons** using only native web technologies without any external frameworks or plugins.

---

---

# Dalga Efektli Buton (Ripple Hover) Projesi

Bu proje, HTML, CSS ve JavaScript kullanılarak yapılmış basit bir **fareyle üzerine gelindiğinde dalga efekti oluşturan buton** uygulamasıdır. Fare butonun üzerine geldiğinde, imleçten başlayarak yayılan bir animasyon oluşur ve bu görsel olarak hoş bir deneyim sunar.

---

## 📂 Dosyalar ve Yapı

### 1. `index.html`

Projenin **ana başlangıç dosyasıdır**.

- `style.css` dosyasını yükler (tasarım).
- `script.js` dosyasını yükler (etkileşim).
- İçinde "Hover Me" yazılı bir adet buton bulunur.

### 2. `style.css`

Butonun **görünümünü ve animasyon efektini** tanımlar.

- Sayfa ortasında butonu hizalar (Flexbox).
- Oval köşeli, modern görünümlü bir buton tasarlar.
- `::before` öğesi ile dalga efekti sağlar.
- Dalganın başlangıç noktası `--ripple-x` ve `--ripple-y` değişkenleri ile belirlenir.
- `.hovered` sınıfı eklendiğinde dalga büyüyerek kaybolur.

### 3. `script.js`

Butona **etkileşim kazandıran** JavaScript kodlarını içerir.

- `.ripple-button` sınıfına sahip tüm butonları seçer.
- Fare butona geldiğinde, imlecin konumunu hesaplar.
- Ripple efektinin başlayacağı konumu ayarlar.
- `.hovered` sınıfı eklenerek efekt başlatılır.
- Fare ayrıldığında sınıf kaldırılarak animasyon sıfırlanır.

---

## 🧪 Kullanılan Teknolojiler

- HTML5  
- CSS3 (Flexbox, Pseudo-elementler, Geçiş animasyonları)  
- Vanilla JavaScript (Ekstra kütüphane yok)

---

## 🎯 Amaç

Bu proje, sadece yerel web teknolojilerini kullanarak modern ve interaktif butonlar oluşturmanın nasıl mümkün olduğunu göstermeyi amaçlar. **Basit ama etkileyici bir kullanıcı deneyimi sunar.**

---

