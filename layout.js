/* ==========================================================
   layout.js  -  builds the header, menu and footer on every page,
   and fills in the services list. Reads details from config.js.
   To add or rename a menu link, edit the "pages" list below.
   ========================================================== */

(function () {
  var S = window.SITE || {};

  // Menu links: [filename, label]
  var pages = [
    ["index.html", "Home"],
    ["about.html", "About Us"],
    ["services.html", "Our Services"],
    ["how-it-works.html", "How It Works"],
    ["contact.html", "Contact Us"]
  ];

  // Makes text safe to place inside HTML
  function esc(text) {
    return String(text == null ? "" : text).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // True while a value is still a placeholder like [EMAIL ADDRESS] or 91XXXXXXXXXX
  function isPlaceholder(value) {
    return !value || /\[|X{4,}/.test(value);
  }

  // Treat "about", "about.html" and "/about/" as the same page
  function pageName(path) {
    var name = path.split("/").filter(Boolean).pop() || "index";
    return name.replace(".html", "");
  }
  var current = pageName(location.pathname);

  /* ---------- Header ---------- */
  var header = document.getElementById("site-header");
  if (header) {
    var brand = S.logo
      ? '<img src="' + esc(S.logo) + '" alt="' + esc(S.businessName) + ' logo" height="44">'
      : esc(S.businessName);

    var links = pages.map(function (p) {
      var active = pageName(p[0]) === current ? ' aria-current="page"' : "";
      return '<li><a href="' + p[0] + '"' + active + ">" + p[1] + "</a></li>";
    }).join("");

    header.className = "site-header";
    header.innerHTML =
      '<div class="container header-inner">' +
        '<a class="brand" href="index.html">' + brand + "</a>" +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
        '<nav id="site-nav" class="site-nav" aria-label="Main menu"><ul>' + links + "</ul></nav>" +
      "</div>";

    var toggle = header.querySelector(".nav-toggle");
    var nav = header.querySelector(".site-nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Footer ---------- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    var lines = [];

    if (!isPlaceholder(S.email)) {
      lines.push('<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>");
    } else {
      lines.push(esc(S.email));
    }
    if (S.phoneDisplay) { lines.push(esc(S.phoneDisplay)); }
    if (!isPlaceholder(S.whatsappNumber)) {
      var wa = "https://wa.me/" + encodeURIComponent(S.whatsappNumber) +
               "?text=" + encodeURIComponent(S.whatsappMessage || "");
      lines.push('<a href="' + wa + '" rel="noopener">Message us on WhatsApp</a>');
    }
    if (S.hours) { lines.push(esc(S.hours)); }
    if (S.address) { lines.push(esc(S.address)); }

    var socials = (S.socials || []).filter(function (s) { return s.url; }).map(function (s) {
      return '<li><a href="' + esc(s.url) + '" rel="noopener" target="_blank">' + esc(s.name) + "</a></li>";
    }).join("");

    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container footer-grid">' +
        '<div><p class="footer-brand">' + esc(S.businessName) + "</p>" +
          "<p>" + lines.join("<br>") + "</p></div>" +
        '<div><p class="footer-heading">Explore</p><ul>' +
          pages.map(function (p) { return '<li><a href="' + p[0] + '">' + p[1] + "</a></li>"; }).join("") +
        "</ul></div>" +
        '<div><p class="footer-heading">Information</p><ul>' +
          '<li><a href="privacy.html">Privacy Policy</a></li>' +
          '<li><a href="terms.html">Terms</a></li>' + socials +
        "</ul></div>" +
      "</div>" +
      '<div class="container footer-note"><p>Readings are offered for guidance and reflection only and do not guarantee any outcome.</p>' +
      "<p>&copy; " + new Date().getFullYear() + " " + esc(S.businessName) + ". All rights reserved.</p></div>";
  }

  /* ---------- Fill in text from config.js: <span data-site="email"></span> ---------- */
  document.querySelectorAll("[data-site]").forEach(function (el) {
    var value = S[el.getAttribute("data-site")];
    if (value) { el.textContent = value; }
  });

  /* ---------- WhatsApp buttons: <a data-whatsapp> ---------- */
  function whatsappLink() {
    if (isPlaceholder(S.whatsappNumber)) { return ""; }
    return "https://wa.me/" + encodeURIComponent(S.whatsappNumber) +
           "?text=" + encodeURIComponent(S.whatsappMessage || "");
  }
  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    var link = whatsappLink();
    if (link) {
      el.href = link;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      el.setAttribute("title", "Add the WhatsApp number in js/config.js");
    }
  });

  /* ---------- Contact page details ---------- */
  var details = document.getElementById("contact-details");
  if (details) {
    var items = [];
    items.push("<li><strong>Email:</strong> " +
      (isPlaceholder(S.email) ? esc(S.email) : '<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>") + "</li>");
    if (S.phoneDisplay) { items.push("<li><strong>Phone / WhatsApp:</strong> " + esc(S.phoneDisplay) + "</li>"); }
    if (S.hours) { items.push("<li><strong>Business hours:</strong> " + esc(S.hours) + "</li>"); }
    if (S.address) { items.push("<li><strong>Address:</strong> " + esc(S.address) + "</li>"); }
    var socialLinks = (S.socials || []).filter(function (x) { return x.url; }).map(function (x) {
      return '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.name) + "</a>";
    });
    if (socialLinks.length) { items.push("<li><strong>Follow us:</strong> " + socialLinks.join(" | ") + "</li>"); }
    details.innerHTML = '<ul class="contact-list">' + items.join("") + "</ul>";
  }

  /* ---------- Services list (Home shows 3, Services page shows all) ---------- */
  var list = document.getElementById("services-list");
  if (list && S.services) {
    var limit = parseInt(list.getAttribute("data-limit"), 10) || S.services.length;
    list.innerHTML = S.services.slice(0, limit).map(function (s) {
      var price = "";
      if (S.showPrices !== false) {
        price = '<p class="price">' + esc(s.price || "Price on request") + "</p>";
      }
      return '<article class="card"><h3>' + esc(s.name) + "</h3><p>" + esc(s.description) + "</p>" + price + "</article>";
    }).join("");
  }
})();
