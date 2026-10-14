/* ==========================================================
   Logika utama portofolio. Data ada di js/projects.js
   ========================================================== */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pad = (n) => String(n).padStart(2, "0");

  /* ---------- Isi data profil ke halaman ---------- */
  function fillProfile() {
    $$("[data-profile]").forEach((el) => {
      const val = PROFILE[el.dataset.profile];
      if (val) el.textContent = val;
    });
    document.title = `${PROFILE.name} — Portofolio Teknik Rekayasa Multimedia`;

    const c = PROFILE.contact;
    $("#emailText").textContent = c.email;
    // Buka jendela tulis email Gmail di browser (mailto sering tidak berfungsi tanpa aplikasi email)
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(c.email)}&su=${encodeURIComponent("Kerja Sama / Magang")}`;
    $("#linkEmail").href = gmail;
    $("#linkGithub").href = c.github;
    $("#linkInstagram").href = c.instagram;
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Skill badges di About ---------- */
  function renderSkills() {
    $("#skillList").innerHTML = PROFILE.skills.map((s) => `
      <li class="skill">
        <span class="skill__name">${s.name}</span>
      </li>`).join("");
  }

  /* ---------- Tools di About ---------- */
  function renderTools() {
    $("#toolList").innerHTML = PROFILE.tools.map((t) => `
      <li class="tool">
        <img src="${encodeURI("assets/tolkit/" + t.file)}" alt="" width="96" height="96" loading="lazy">
        <span class="tool__name">${t.name}</span>
      </li>`).join("");
  }

  /* ---------- Tema terang / gelap ---------- */
  function initTheme() {
    const root = document.documentElement;
    const btn = $("#themeToggle");
    const sync = () => {
      const dark = root.dataset.theme === "dark";
      btn.setAttribute("aria-pressed", String(dark));
      btn.setAttribute("aria-label", dark ? "Ganti ke mode terang" : "Ganti ke mode gelap");
    };
    btn.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) { /* abaikan */ }
      sync();
    });
    sync();
  }

  /* ---------- Navbar: hamburger + menu aktif ---------- */
  function initNav() {
    const toggle = $("#navToggle");
    const menuWrap = $(".nav nav");

    const setOpen = (open) => {
      menuWrap.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    $$(".nav__menu a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

    // Tandai menu aktif sesuai section yang ada di tengah layar
    const links = new Map($$(".nav__menu a").map((a) => [a.dataset.section, a]));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        links.get(en.target.id)?.setAttribute("aria-current", "page");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => io.observe(s));
  }

  /* ---------- Fade-in saat scroll ---------- */
  function initReveal() {
    const targets = $$(".reveal");
    if (!("IntersectionObserver" in window)) { targets.forEach((t) => t.classList.add("in-view")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in-view"); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    targets.forEach((t) => io.observe(t));
  }

  /* ---------- Garage: render kartu + filter ---------- */
  const CATEGORIES = ["All", "Desain", "Web", "Visual Novel Interaktif"];
  const SOON_SLOTS = 0;
  const state = { category: "All" };

  function makeFilterButtons(container, items, key, label) {
    container.innerHTML = items
      .map((v) => `<button class="chip-btn" type="button" data-value="${v}" aria-pressed="${state[key] === v}">${label(v)}</button>`)
      .join("");
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip-btn");
      if (!btn) return;
      state[key] = btn.dataset.value;
      $$(".chip-btn", container).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      renderProjects();
    });
  }

  // Baris Tool/Role di kartu; dilewati bila proyek tidak punya keduanya
  function cardStats(p) {
    const rows = [
      p.tools && p.tools.length ? `<span><b>Tool</b> ${p.tools.join(", ")}</span>` : "",
      p.role ? `<span><b>Role</b> ${p.role}</span>` : "",
    ].join("");
    return rows ? `<span class="card__stats">${rows}</span>` : "";
  }

  function renderProjects() {
    const list = PROJECTS.filter((p) => state.category === "All" || p.category === state.category);

    $("#grid").innerHTML = list.map((p) => `
      <button class="card" type="button" data-id="${p.id}" aria-haspopup="dialog">
        <span class="card__thumb">
          <img src="${p.thumbnail}" alt="Thumbnail ${p.title}" width="800" height="500" loading="lazy">
        </span>
        <span class="card__body">
          <span class="card__title">${p.title}</span>
          ${cardStats(p)}
          <span class="card__more">Detail <i aria-hidden="true">&rarr;</i></span>
        </span>
      </button>`).join("");

    // Dua kotak kosong "Segera hadir" (tampil di All saja); hapus SOON_SLOTS bila proyek sudah lengkap
    if (state.category === "All") {
      $("#grid").insertAdjacentHTML("beforeend", Array.from({ length: SOON_SLOTS }, () => `
      <div class="card-soon" aria-hidden="true"><span>Segera hadir</span></div>`).join(""));
    }

    $("#gridEmpty").hidden = list.length > 0;
    $("#resultCount").textContent = `${list.length} proyek ditampilkan`;
  }

  function initWork() {
    makeFilterButtons($("#filterCategory"), CATEGORIES, "category", (v) => v);
    let opening = false;
    $("#grid").addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (!card || opening) return;
      const project = PROJECTS.find((p) => p.id === card.dataset.id);
      if (reduceMotion) { openModal(project); return; }

      // Animasi saat dipencet: riak merah melebar dari titik klik, tombol "Detail" menembak panah,
      // kartu sedikit mengecil, lalu jendela detail terbuka.
      opening = true;
      const box = card.getBoundingClientRect();
      const more = $(".card__more", card).getBoundingClientRect();
      const keyboard = e.detail === 0; // Enter/Spasi: riak keluar dari tombol Detail
      const x = keyboard ? more.left + more.width / 2 - box.left : e.clientX - box.left;
      const y = keyboard ? more.top + more.height / 2 - box.top : e.clientY - box.top;
      const ripple = document.createElement("span");
      ripple.className = "card__ripple";
      ripple.style.left = `${x}px`; ripple.style.top = `${y}px`;
      card.append(ripple);
      card.classList.add("is-opening");
      setTimeout(() => {
        openModal(project);
        card.classList.remove("is-opening");
        ripple.remove();
        opening = false;
      }, 420);
    });
    renderProjects();
  }

  /* ---------- Modal detail proyek ---------- */
  const modal = $("#modal");

  // Info tambahan proyek (fitur, teknologi, font, palet) — hanya tampil bila ada di data
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function renderDetails(det) {
    if (!det) return "";
    const parts = [];
    if (det.myRole) {
      const r = det.myRole;
      parts.push(`<section><h4>Peran saya</h4>
        <p class="detail-group">${esc(r.title)}</p>
        ${r.text ? `<p class="detail-note detail-note--body">${esc(r.text)}</p>` : ""}
      </section>`);
    }
    if (det.steps) {
      parts.push(`<section><h4>Cara kerja platform</h4><ol class="steps">${det.steps.map((s) => `<li><b>${esc(s.title)}</b><span>${esc(s.text)}</span></li>`).join("")}</ol></section>`);
    }
    if (det.features) {
      parts.push(`<section><h4>Fitur utama</h4><ul class="detail-list">${det.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul></section>`);
    }
    if (det.tech) {
      parts.push(`<section><h4>Teknologi yang dipakai</h4>${det.tech.map((g) => `
        <p class="detail-group">${esc(g.group)}</p>
        <ul class="detail-list">${g.items.map(([n, t]) => `<li><b>${esc(n)}</b> &rarr; ${esc(t)}</li>`).join("")}</ul>`).join("")}</section>`);
    }
    if (det.typefaces) {
      parts.push(`<section><h4>Typeface</h4>${det.typefaces.map((f) => `
        <p class="detail-group">${esc(f.name)}</p>
        <ul class="detail-list">${f.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>`).join("")}</section>`);
    }
    if (det.palette) {
      parts.push(`<section><h4>Color palette</h4>
        <ul class="swatches">${det.palette.colors.map((c) => `<li><span class="swatch" style="background:${esc(c.hex)}"></span><b>${esc(c.hex.replace("#", ""))}</b><small>${esc(c.name)}</small></li>`).join("")}</ul>
        ${det.palette.note ? `<p class="detail-note">${esc(det.palette.note)}</p>` : ""}</section>`);
    }
    return parts.join("");
  }

  // Slide foto di jendela detail: tombol panah, titik, geser di layar sentuh, dan panah keyboard
  let slider = null;
  function buildSlider(box, images, title) {
    let i = 0;
    box.innerHTML = `
      <div class="slider" role="group" aria-roledescription="carousel" aria-label="Foto ${esc(title)}">
        <div class="slider__track">${images.map((im, k) => `<img class="slider__slide" src="${im.src}" alt="${esc(im.alt || title)}"${k ? ' loading="lazy"' : ""}>`).join("")}</div>
        <button class="slider__btn slider__btn--prev" type="button" aria-label="Foto sebelumnya">&lsaquo;</button>
        <button class="slider__btn slider__btn--next" type="button" aria-label="Foto berikutnya">&rsaquo;</button>
        <div class="slider__dots">${images.map((_, k) => `<button type="button" class="slider__dot" aria-label="Foto ${k + 1}"></button>`).join("")}</div>
      </div>`;
    const track = $(".slider__track", box);
    const dots = $$(".slider__dot", box);
    const go = (n) => {
      i = (n + images.length) % images.length;
      track.style.transform = `translateX(${-100 * i}%)`;
      dots.forEach((d, k) => d.setAttribute("aria-current", String(k === i)));
    };
    $(".slider__btn--prev", box).addEventListener("click", () => go(i - 1));
    $(".slider__btn--next", box).addEventListener("click", () => go(i + 1));
    dots.forEach((d, k) => d.addEventListener("click", () => go(k)));
    let x0 = null;
    track.addEventListener("pointerdown", (e) => { x0 = e.clientX; });
    track.addEventListener("pointerup", (e) => {
      if (x0 !== null && Math.abs(e.clientX - x0) > 40) go(i + (e.clientX < x0 ? 1 : -1));
      x0 = null;
    });
    track.addEventListener("pointercancel", () => { x0 = null; });
    go(0);
    slider = go; slider.index = () => i;
  }

  function openModal(p) {
    if (!p) return;
    const m = p.media || {};
    const mediaBox = $("#modalMedia");
    mediaBox.innerHTML = "";

    if (m.type === "video") {
      const v = document.createElement("video");
      v.controls = true; v.preload = "metadata"; v.src = m.src;
      if (m.poster) v.poster = m.poster;
      v.setAttribute("aria-label", m.alt || p.title);
      // Jika file video belum ada, tampilkan pesan
      v.addEventListener("error", () => {
        mediaBox.innerHTML = `<p class="modal__fallback">Video belum tersedia. Taruh file di <code>${m.src}</code>.</p>`;
      }, { once: true });
      mediaBox.append(v);
    } else if (m.type === "embed") {
      // Prototype Figma interaktif (iframe dimuat hanya saat modal dibuka)
      const wrap = document.createElement("div");
      wrap.className = "embed";
      const f = document.createElement("iframe");
      f.src = m.src; f.title = m.alt || p.title; f.allowFullscreen = true;
      wrap.append(f);
      mediaBox.append(wrap);
    } else if (m.images && m.images.length > 1) {
      buildSlider(mediaBox, m.images, p.title);
    } else {
      const img = document.createElement("img");
      img.src = m.src || p.thumbnail; img.alt = m.alt || p.title; img.loading = "lazy";
      mediaBox.append(img);
    }

    $("#modalTitle").textContent = p.title;
    $("#modalMeta").textContent = [p.category, p.role].filter(Boolean).join(" · ");
    $("#modalDesc").textContent = p.description;
    $("#modalDetails").innerHTML = renderDetails(p.details);
    const tools = p.tools || [];
    $("#modalTools").innerHTML = tools.map((t) => `<li>${t}</li>`).join("");
    $("#modalTools").hidden = $("#modalTools").previousElementSibling.hidden = tools.length === 0;
    const link = $("#modalLink");
    link.hidden = !p.link;
    if (p.link) link.href = p.link;

    document.body.classList.add("modal-open");
    modal.showModal();
  }

  function initModal() {
    const close = () => modal.close();
    $("#modalClose").addEventListener("click", close);
    // Klik di luar kotak = tutup
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
    modal.addEventListener("keydown", (e) => {
      if (!slider || (e.key !== "ArrowLeft" && e.key !== "ArrowRight")) return;
      slider(slider.index() + (e.key === "ArrowRight" ? 1 : -1));
    });
    modal.addEventListener("close", () => {
      slider = null;
      document.body.classList.remove("modal-open");
      $("#modalMedia").innerHTML = ""; // hentikan video
    });
  }

  /* ---------- Jalankan ---------- */
  fillProfile();
  renderSkills();
  renderTools();
  document.body.classList.add("ready");
  initTheme();
  initNav();
  initReveal();
  initWork();
  initModal();
})();
