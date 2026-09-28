
function showPage(pageName, clickedButton) {
  const pages = document.querySelectorAll(".page");
  const tabs = document.querySelectorAll(".repo-tabs .tab");

  pages.forEach(function(page) {
    page.classList.remove("active-page");
  });

  const selectedPage = document.getElementById("page-" + pageName);

  if (selectedPage) {
    selectedPage.classList.add("active-page");
  }

  tabs.forEach(function(tab) {
    tab.classList.remove("active");
  });

  if (clickedButton) {
    clickedButton.classList.add("active");
  }

  hideMessage();
}

function openFile(fileName) {
  const content = document.getElementById("file-content");

  const files = {
    "assets": `
      <h2>📁 assets</h2>
      <p>Folder ini digunakan untuk menyimpan gambar dan file pendukung website.</p>
      <ul>
        <li>gambar</li>
        <li>icon</li>
      </ul>
    `,
    "index.html": `
      <h2>📄 index.html</h2>
      <p>File HTML digunakan untuk membuat struktur halaman website.</p>
      <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Website Saya&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Halo Dunia!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
    `,
    "style.css": `
      <h2>🎨 style.css</h2>
      <p>File CSS digunakan untuk mengatur warna, ukuran, dan tampilan website.</p>
      <pre>body {
  background: #0d1117;
  color: white;
  font-family: Arial;
}</pre>
    `,
    "script.js": `
      <h2>📜 script.js</h2>
      <p>File JavaScript digunakan untuk membuat halaman menjadi interaktif.</p>
      <pre>function halo() {
  alert("Halo Dunia!");
}</pre>
    `,
    "README.md": `
      <h2>Belajar Dasar Pemrograman DOM</h2>
      <p>Repository ini berisi latihan dasar pemrograman DOM menggunakan HTML, CSS, dan JavaScript.</p>
      <hr>
      <h3>📚 Materi</h3>
      <ul>
        <li>Mengenal Document Object Model (DOM)</li>
        <li>Mengakses elemen HTML dengan JavaScript</li>
        <li>Mengubah isi dan tampilan elemen</li>
        <li>Menggunakan event klik</li>
      </ul>
      <h3>🛠️ Teknologi</h3>
      <p>HTML · CSS · JavaScript</p>
    `
  };

  content.innerHTML = files[fileName] || "<h2>File tidak ditemukan</h2>";
  content.scrollIntoView({ behavior: "smooth", block: "center" });
  hideMessage();
}

function filterFiles() {
  const searchInput = document.getElementById("file-search");
  const keyword = searchInput.value.toLowerCase();
  const fileItems = document.querySelectorAll(".file-item");

  fileItems.forEach(function(item) {
    const fileName = item.dataset.name.toLowerCase();

    if (fileName.includes(keyword)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}

function showMessage(message) {
  const box = document.getElementById("message-box");
  box.textContent = message;
  box.classList.add("show");
}

function hideMessage() {
  const box = document.getElementById("message-box");
  box.classList.remove("show");
}

function goToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}