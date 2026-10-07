// LEAP Recap — hub + deck navigation

(function () {
  "use strict";

  const $ = (id) =>
    document.getElementById(id);

  const show = (el) =>
    el.classList.remove("hidden");

  const hide = (el) =>
    el.classList.add("hidden");

  function escapeHtml(str) {
    const div =
      document.createElement("div");

    div.textContent = str;

    return div.innerHTML;
  }

  // Wrap `backticks` in answer text
  // as inline <code>
  function formatText(text) {
    return escapeHtml(text)
      .replace(
        /`([^`]+)`/g,
        "<code>$1</code>"
      );
  }

  // ---------- HUB ----------

  function renderHub() {

    const grid = $("hubCards");

    grid.innerHTML = "";

    SPRINTS.forEach((s) => {

      const card =
        document.createElement("button");

      card.type = "button";

      card.className =
        "hub-card " + s.accent;

      card.innerHTML =
        `<span class="hub-icon">
          ${s.icon}
        </span>` +

        `<span class="hub-card-title">
          ${escapeHtml(s.title)}
        </span>` +

        `<span class="hub-card-name">
          ${escapeHtml(s.name)}
        </span>` +

        `<span class="hub-card-blurb">
          ${escapeHtml(s.blurb)}
        </span>` +

        `<span class="hub-count">
          ${s.cards.length} cards →
        </span>`;

      card.addEventListener(
        "click",
        () => openDeck(s.id)
      );

      grid.appendChild(card);
    });
  }

  // ---------- DECK ----------

  function openDeck(sprintId) {

    const s = SPRINTS.find(
      (x) => x.id === sprintId
    );

    if (!s) return;

    $("deckName").textContent =
      `${s.icon} ${s.title} — ${s.name}`;

    $("deckSub").textContent =
      s.blurb;

    const grid = $("deckCards");

    grid.className =
      "card-grid " + s.accent;

    grid.innerHTML = "";

    s.cards.forEach((c) => {

      const card =
        document.createElement("article");

      card.className = "card";

      const title =
        document.createElement("div");

      title.className = "card-title";

      title.innerHTML =
        `<span>
          ${escapeHtml(c.q)}
        </span>
        <span
          class="chev"
          aria-hidden="true">
          ▾
        </span>`;

      const answer =
        document.createElement("div");

      answer.className =
        "card-answer";

      answer.innerHTML =
        formatText(c.a);

      if (c.code && c.code.trim()) {

        const pre =
          document.createElement("pre");

        pre.className =
          "card-code";

        const code =
          document.createElement("code");

        code.textContent = c.code;

        pre.appendChild(code);

        answer.appendChild(pre);
      }

      card.appendChild(title);
      card.appendChild(answer);

      card.addEventListener(
        "click",
        () =>
          card.classList.toggle("open")
      );

      grid.appendChild(card);
    });

    hide($("hub"));
    show($("deck"));

    window.scrollTo(0, 0);

    location.hash =
      "sprint" + s.id;
  }

  // ---------- BACK ----------

  function backToHub() {

    hide($("deck"));
    show($("hub"));

    window.scrollTo(0, 0);

    if (location.hash)
      location.hash = "";
  }

  $("backBtn").addEventListener(
    "click",
    backToHub
  );

  // ---------- HASH NAVIGATION ----------

  window.addEventListener(
    "hashchange",
    () => {

      const m =
        location.hash.match(
          /^#sprint(\d+)$/
        );

      if (m)
        openDeck(Number(m[1]));
      else
        backToHub();
    }
  );

  // ---------- INIT ----------

  renderHub();

  const initial =
    location.hash.match(
      /^#sprint(\d+)$/
    );

  if (initial)
    openDeck(Number(initial[1]));

})();
