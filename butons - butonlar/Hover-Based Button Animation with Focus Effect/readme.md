# Hover-Based Button Animation with Focus Effect

This project demonstrates a modern CSS-only hover animation where hovering over one button causes the others to shrink, blur, and fade — enhancing focus on the hovered button. The animation is smooth, interactive, and visually engaging.

---

## 🌟 Features

- ✅ Pure CSS – no JavaScript required  
- 🎯 Dynamic button scaling and blur effect  
- 🧠 Uses modern CSS selectors like `:has()`  
- 🎨 Fully customizable with CSS variables  
- ✨ Responsive flex-based layout

---

## 🧪 How It Works

When a user hovers over one button:
- That button enlarges slightly (`scale: 1.2`)
- All other buttons shrink (`scale: 0.8`), blur, and reduce in opacity
- This is achieved using the `:has(.btn:hover) .btn:not(:hover)` selector

---

## 🎨 Customization

- To change background colors, define `--color-black`, `--color-white`, and `--color-white-shade` in a global CSS scope or `:root`
- Adjust scale, blur, or transition speed in the `.btn` and `:has()` rule
- Replace text or add links as needed

---

## 👤 Author

- **Berşan Kurtcephe**  
- 🌐 [bersan.kurtcephe.com](https://www.bersan.kurtcephe.com)  
- 📧 bersankurtcephe@gmail.com

---

## 📄 License

MIT License – Free to use and modify.

---

> Designed for stylish and focused UI interactions.

---

# Fareyle Üzerine Gelince Etki Yaratan Düğme Animasyonu

Bu proje, yalnızca CSS kullanarak yapılan modern bir buton animasyonudur. Kullanıcı bir butonun üzerine geldiğinde, diğer butonlar küçülür, bulanıklaşır ve opaklıkları azalır. Böylece kullanıcının dikkati o butonda toplanır.

---

## 🌟 Özellikler

- ✅ Sadece CSS – JavaScript gerekmez  
- 🎯 Dinamik buton büyütme ve odak efekti  
- 🧠 Modern CSS seçicisi olan `:has()` kullanılır  
- 🎨 CSS değişkenleriyle özelleştirilebilir  
- ✨ Esnek yapı (Flexbox) ile uyumlu

---

## 🧪 Nasıl Çalışır?

Bir kullanıcı bir butonun üzerine geldiğinde:
- Üzerine gelinen buton %20 büyür (`scale: 1.2`)
- Diğer butonlar küçülür (`scale: 0.8`), bulanıklaşır ve opaklıkları azalır
- Bu etki `:has(.btn:hover) .btn:not(:hover)` CSS seçicisi ile sağlanır

