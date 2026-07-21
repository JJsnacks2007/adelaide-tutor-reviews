/* ============================================================
   Adelaide Tutor Reviews - homepage logic
   Renders review cards and wires up search, filters and sorting.
   You shouldn't need to edit this file to add reviews - see
   js/reviews-data.js instead.
   ============================================================ */

(function () {
  "use strict";

  var grid = document.getElementById("cards");
  if (!grid || typeof REVIEWS === "undefined") return; // not on the homepage

  var searchInput = document.getElementById("search");
  var suburbSelect = document.getElementById("suburb-filter");
  var sortSelect = document.getElementById("sort");
  var chipRow = document.getElementById("subject-chips");
  var countEl = document.getElementById("results-count");
  var emptyEl = document.getElementById("empty-state");
  var clearBtn = document.getElementById("clear-filters");
  var statsEl = document.getElementById("hero-stats");

  var SUBJECT_COLORS = {
    Maths: "var(--c-maths)",
    English: "var(--c-english)",
    Science: "var(--c-science)",
    Primary: "var(--c-primary)",
    Languages: "var(--c-languages)",
    Music: "var(--c-music)"
  };

  var state = { query: "", subject: "All", suburb: "All", sort: "newest" };

  /* ---------- helpers ---------- */

  function initials(name) {
    var words = name.replace(/\(.*$/, "").trim().split(/\s+/);
    var first = words[0] ? words[0][0] : "?";
    var second = words[1] ? words[1][0] : "";
    return (first + second).toUpperCase();
  }

  function starsHTML(rating) {
    var pct = (rating / 5) * 100;
    return (
      '<span class="stars" role="img" aria-label="' + rating + ' out of 5 stars">' +
      '<span class="stars-fill" style="width:' + pct + '%"></span></span>'
    );
  }

  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ---------- build filter options from the data ---------- */

  var subjects = [];
  var suburbs = [];
  REVIEWS.forEach(function (r) {
    if (subjects.indexOf(r.subject) === -1) subjects.push(r.subject);
    if (suburbs.indexOf(r.suburb) === -1) suburbs.push(r.suburb);
  });
  subjects.sort();
  suburbs.sort();

  ["All"].concat(subjects).forEach(function (s) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (s === "All" ? " active" : "");
    b.textContent = s === "All" ? "All subjects" : s;
    b.dataset.subject = s;
    b.addEventListener("click", function () {
      state.subject = s;
      chipRow.querySelectorAll(".chip").forEach(function (c) {
        c.classList.toggle("active", c.dataset.subject === s);
      });
      render();
    });
    chipRow.appendChild(b);
  });

  suburbs.forEach(function (s) {
    var o = document.createElement("option");
    o.value = s;
    o.textContent = s;
    suburbSelect.appendChild(o);
  });

  /* ---------- hero stats ---------- */

  if (statsEl) {
    var avg =
      REVIEWS.reduce(function (t, r) { return t + r.rating; }, 0) / REVIEWS.length;
    statsEl.innerHTML =
      "<div><strong>" + REVIEWS.length + "</strong>tutors reviewed</div>" +
      "<div><strong>" + subjects.length + "</strong>subjects covered</div>" +
      "<div><strong>" + suburbs.length + "</strong>suburbs visited</div>" +
      "<div><strong>" + avg.toFixed(1) + "★</strong>average rating</div>";
  }

  /* ---------- filtering + rendering ---------- */

  function visibleReviews() {
    var q = state.query.toLowerCase().trim();
    var list = REVIEWS.filter(function (r) {
      if (state.subject !== "All" && r.subject !== state.subject) return false;
      if (state.suburb !== "All" && r.suburb !== state.suburb) return false;
      if (q) {
        var hay = (r.name + " " + r.subject + " " + r.suburb + " " + r.excerpt + " " + (r.search || "")).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    list.sort(function (a, b) {
      if (state.sort === "rating") return b.rating - a.rating || (a.date < b.date ? 1 : -1);
      return a.date < b.date ? 1 : -1; // newest first
    });
    return list;
  }

  function cardHTML(r) {
    var color = SUBJECT_COLORS[r.subject] || "var(--navy)";
    return (
      '<article class="card">' +
      '<div class="card-top">' +
      '<span class="avatar" style="background:' + color + '">' + esc(initials(r.name)) + "</span>" +
      '<span class="card-tags">' +
      '<span class="tag" style="background:' + color + '">' + esc(r.subject) + "</span>" +
      '<span class="tag-suburb">📍 ' + esc(r.suburb) + "</span>" +
      "</span></div>" +
      "<h3><a href=\"reviews/" + esc(r.slug) + ".html\">" + esc(r.name) + "</a></h3>" +
      '<div class="card-rating">' + starsHTML(r.rating) +
      '<span class="rating-num">' + r.rating.toFixed(1) + "</span></div>" +
      '<p class="excerpt">' + esc(r.excerpt) + "</p>" +
      '<div class="card-foot"><span>' + formatDate(r.date) + " · " + esc(r.price) + "</span>" +
      '<span class="read">Read review →</span></div>' +
      "</article>"
    );
  }

  function render() {
    var list = visibleReviews();
    grid.innerHTML = list.map(cardHTML).join("");

    countEl.textContent = "Showing " + list.length + " of " + REVIEWS.length + " reviews";
    emptyEl.classList.toggle("visible", list.length === 0);
    grid.style.display = list.length === 0 ? "none" : "";

    var filtered =
      state.query !== "" || state.subject !== "All" || state.suburb !== "All";
    clearBtn.classList.toggle("visible", filtered);
  }

  /* ---------- events ---------- */

  searchInput.addEventListener("input", function () {
    state.query = this.value;
    render();
  });

  suburbSelect.addEventListener("change", function () {
    state.suburb = this.value;
    render();
  });

  sortSelect.addEventListener("change", function () {
    state.sort = this.value;
    render();
  });

  function clearAll() {
    state.query = "";
    state.subject = "All";
    state.suburb = "All";
    searchInput.value = "";
    suburbSelect.value = "All";
    chipRow.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("active", c.dataset.subject === "All");
    });
    render();
  }

  clearBtn.addEventListener("click", clearAll);
  document.getElementById("empty-clear").addEventListener("click", clearAll);

  render();
})();
