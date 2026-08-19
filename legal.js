const getLanguage = () => {
  try {
    return localStorage.getItem("af-language") === "en" ? "en" : "de";
  } catch {
    return "de";
  }
};

const setLanguage = (language) => {
  const activeLanguage = language === "en" ? "en" : "de";
  document.documentElement.lang = activeLanguage;

  try {
    localStorage.setItem("af-language", activeLanguage);
  } catch {
    // The language toggle remains usable without local storage.
  }

  document.querySelectorAll("[data-lang-section]").forEach((section) => {
    section.hidden = section.dataset.langSection !== activeLanguage;
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll("[data-back-label]").forEach((label) => {
    label.textContent = activeLanguage === "en" ? "Back to website" : "Zurück zur Website";
  });

  const isPrivacyPage = document.location.pathname.endsWith("datenschutz.html");
  document.title = activeLanguage === "en"
    ? `${isPrivacyPage ? "Privacy" : "Legal notice"} · André Fricke`
    : `${isPrivacyPage ? "Datenschutz" : "Impressum"} · André Fricke`;
};

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

setLanguage(getLanguage());
