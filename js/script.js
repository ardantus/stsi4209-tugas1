// js/script.js

// === LOGIN ===
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = dataPengguna.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("userLogin", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Email/password yang anda masukkan salah");
  }
});

// Modal Lupa & Daftar
document.getElementById("lupaPass")?.addEventListener("click", () => {
  document.getElementById("modalLupa").style.display = "block";
});
document.getElementById("daftar")?.addEventListener("click", () => {
  document.getElementById("modalDaftar").style.display = "block";
});

document.querySelectorAll(".close").forEach(close => {
  close.onclick = function() {
    this.parentElement.parentElement.style.display = "none";
  }
});

window.onclick = function(e) {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};

// === TRACKING ===
function cariTracking() {
  const noDO = document.getElementById("noDO").value.trim();
  const data = dataTracking[noDO];
  const result = document.getElementById("result");

  if (!data) {
    alert("Nomor DO tidak ditemukan!");
    return;
  }

  document.getElementById("nama").textContent = data.nama;
  document.getElementById("status").textContent = data.status;
  document.getElementById("ekspedisi").textContent = data.ekspedisi;
  document.getElementById("tanggal").textContent = data.tanggalKirim;
  document.getElementById("paket").textContent = data.paket;
  document.getElementById("total").textContent = data.total;

  // Progress bar
  const progress = data.status === "Dikirim" ? 100 : 60;
  document.getElementById("progress").style.width = progress + "%";

  // Timeline
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";
  data.perjalanan.forEach(item => {
    const div = document.createElement("div");
    div.className = "timeline-item";
    div.innerHTML = `<strong>${item.waktu}</strong><br>${item.keterangan}`;
    timeline.appendChild(div);
  });

  result.style.display = "block";
}

// === STOK ===
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("tabelStok")) {
    renderTabel();
  }
});

function renderTabel() {
  const tbody = document.querySelector("#tabelStok tbody");
  tbody.innerHTML = "";

  // map fallback berdasarkan nama (kunci sudah lowercase)
  const coverMap = {
    "pengantar ilmu komunikasi": "pengantar_komunikasi.jpg",
    "manajemen keuangan": "manajemen_keuangan.jpg",
    "kepemimpinan": "kepemimpinan.jpg",
    "mikrobiologi dasar": "mikrobiologi.jpg",
    "perkembangan anak usia dini": "paud_perkembangan.jpg",
    "buku baru": "default-cover.png"
  };

  function resolveCover(item) {
    let cover = item.cover || null;
    if (cover) {
      // jika sudah mengandung prefix img/ atau path absolut/URL, pakai apa adanya
      if (/^(https?:\/\/|\/|img\/)/i.test(cover)) return cover;
      // jika hanya nama file, tambahkan prefix img/
      return `img/${cover}`;
    }
    // fallback berdasarkan nama barang
    const namaKey = (item.namaBarang || "").toLowerCase().trim();
    const fallback = coverMap[namaKey];
    return fallback ? `img/${fallback}` : "img/default-cover.png";
  }

  dataBahanAjar.forEach((item, index) => {
    const coverSrc = resolveCover(item);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td><img src="${coverSrc}" alt="${item.namaBarang || ''}" style="width:60px;height:auto;object-fit:cover;border-radius:4px;"></td>
      <td>${item.kodeLokasi || ""}</td>
      <td>${item.kodeBarang || ""}</td>
      <td>${item.namaBarang || ""}</td>
      <td>${item.jenisBarang || ""}</td>
      <td>${item.edisi || ""}</td>
      <td>${item.stok || ""}</td>
      <td>
        <button class="btn-small" style="background:#e53e3e; color:white;" onclick="hapusBaris(${index})">Hapus</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById("add-row")?.addEventListener("click", function() {
  const baru = {
    kodeLokasi: "NEW001",
    kodeBarang: "NEW123",
    namaBarang: "Buku Baru",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 100
  };
  dataBahanAjar.push(baru);
  renderTabel();
});

function hapusBaris(index) {
  if (confirm("Hapus baris ini?")) {
    dataBahanAjar.splice(index, 1);
    renderTabel();
  }
}