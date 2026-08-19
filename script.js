/*
 * Central placeholders to complete before publishing.
 * Add full https:// URLs to enable the social links.
 */
const PROFILE_LINKS = {
  linkedin: "https://www.linkedin.com/in/andr%C3%A9-fricke-71642342b/",
  xing: "https://www.xing.com/profile/Andre_Fricke5",
  gulp: "https://www.gulp.de/gulp2/g/spezialisten/profil/9haudsl9nc",
  freelance: "https://www.freelance.de/freelancer/272626-Senior-DevOps-Engineer-Developer",
};

/*
 * Recommendation letter configuration.
 * 1. Copy each PDF to assets/recommendations/.
 * 2. Add its relative path in `file`.
 * 3. Replace the placeholder title, source and description.
 */
const RECOMMENDATIONS = [
  {
    number: "01",
    file: "",
    source: { de: "Kunde / Projekt", en: "Client / project" },
    title: { de: "Empfehlungsschreiben", en: "Letter of recommendation" },
    description: {
      de: "Platzhalter für eine persönliche Kundenempfehlung als PDF.",
      en: "Placeholder for a personal client recommendation in PDF format.",
    },
  },
  {
    number: "02",
    file: "",
    source: { de: "Kunde / Projekt", en: "Client / project" },
    title: { de: "Projektnachweis", en: "Project reference" },
    description: {
      de: "Platzhalter für einen Nachweis über Rolle, Beitrag und Ergebnis.",
      en: "Placeholder for a reference covering role, contribution and outcome.",
    },
  },
  {
    number: "03",
    file: "",
    source: { de: "Kunde / Projekt", en: "Client / project" },
    title: { de: "Weitere Referenz", en: "Additional reference" },
    description: {
      de: "Platzhalter für ein weiteres Empfehlungsschreiben oder Arbeitszeugnis.",
      en: "Placeholder for another recommendation or professional reference.",
    },
  },
];

const translations = {
  en: {
    skipLink: "Skip to content",
    menu: "Menu",
    navProfile: "Profile",
    navExpertise: "Expertise",
    navProjects: "Projects",
    navRecommendations: "References",
    navContact: "Contact",
    available: "Available now · Remote · Full-time",
    heroEyebrow: "Freelance Senior DevOps Engineer",
    heroTitle: "Cloud platforms<br />that <em>move teams forward.</em>",
    heroIntro: "I build secure, scalable AWS platforms and automate the path from idea to production — hands-on, as code and designed for real-world operations.",
    sendInquiry: "Send project brief",
    downloadProfile: "Download profile as PDF",
    yearsEnterprise: "years enterprise",
    basedIn: "Hanover · Germany",
    selectedClients: "Selected enterprise projects",
    clientIntro: "Experience in complex, regulated and business-critical environments.",
    brandNote: "Project references from external engagements. The use of trademarks does not imply a current partnership or endorsement.",
    profileKicker: "Engineering with an operator mindset",
    profileTitle: "Development meets<br /><em>platform engineering.</em>",
    profileLead: "Since 2012, I have been building software and platform solutions in complex enterprise environments. My focus: systems that do not merely work on architecture diagrams, but deliver reliable value in everyday operations.",
    profileText: "I combine software development with platform engineering and DevOps. Infrastructure becomes reproducible code, observability becomes part of the product and security becomes a design decision. I work directly with development teams, stakeholders and operations.",
    impactYears: "years of experience in enterprise IT and software development",
    impactSavings: "sustainable reduction in cloud spend for an AWS platform",
    impactClients: "major enterprises represented in selected project references",
    expertiseKicker: "From foundation to feedback loop",
    expertiseTitle: "Platforms as products.<br /><em>Automation by default.</em>",
    expertiseSummary: "I take responsibility across the full lifecycle — from account and network design to delivery, runtime, monitoring and developer enablement.",
    servicePlatformTitle: "Cloud & Platform Engineering",
    servicePlatformText: "AWS landing zones, EKS/ECS platforms, secure identities and scalable runtime foundations for productive teams.",
    serviceIacTitle: "Infrastructure as Code",
    serviceIacText: "Traceable infrastructure, reusable modules and automated governance instead of manual cloud configuration.",
    serviceObservabilityTitle: "Delivery & Observability",
    serviceObservabilityText: "Reliable delivery pipelines and actionable telemetry to expose issues earlier and make releases predictable.",
    serviceEnablementTitle: "Developer Enablement",
    serviceEnablementText: "Standards, self-service and pragmatic coaching that make teams more autonomous and anchor platforms across the organisation.",
    toolbox: "Technical toolkit",
    toolboxNote: "Proven technology, selected to fit the context.",
    qualificationsTitle: "Solid engineering.<br />Continuously evolving.",
    awsTraining: "AWS training & certificates",
    itilDetail: "IT Service Management",
    languagesTitle: "German & English",
    languagesDetail: "German native · English professional proficiency",
    projectsKicker: "Selected project experience",
    projectsTitle: "Reduce complexity.<br /><em>Leave lasting impact.</em>",
    projectsSummary: "Enterprise engagements spanning software engineering, cloud migration, platform operations and technical leadership.",
    presentProjectDate: "04/2024 — present",
    dbTitle: "AWS account migration, Kafka/MSK integration and central monitoring",
    dbText: "Modernised Kafka/MSK connectors in Java, integrated partners, established central observability and delivered the AWS account setup including IaC refactoring.",
    bmwTitle: "Operations and evolution of a central AWS cloud platform",
    bmwText: "Built AWS infrastructure with CDK and TypeScript, migrated ECS services between accounts and improved monitoring and Jenkins pipelines.",
    tuiRole: "DevOps Engineer / Developer · Security Champion · Cost Owner",
    tuiTitle: "First AWS migration project and central DevOps foundations",
    tuiText: "Established productive cloud infrastructure and standards as a foundation for subsequent projects. Operated EKS platforms, enabled teams, supported security reviews and reduced cloud spend by around 25%.",
    costReduction: "cost reduction",
    hdiRole: "Product Owner Automation",
    hdiTitle: "Building a new Automic automation landscape",
    hdiText: "Product ownership, technical direction and lead architecture for a new UC4 landscape, including the introduction of Kanban and stakeholder steering.",
    vwRole: "External Developer",
    vwTitle: "Monitoring software for automation processes",
    vwText: "Developed and integrated a monitoring solution for Automic processes using Java, JavaScript and shell scripts.",
    qabelRole: "Software Developer & Team Lead",
    qabelTitle: "Open-source cloud platform and synchronisation service",
    qabelText: "Led a development team and co-developed the central synchronisation service of a cloud platform in C++.",
    showArchive: "Show earlier projects",
    hideArchive: "Hide earlier projects",
    recommendationsKicker: "Recommendations & credentials",
    recommendationsTitle: "Experience matters.<br /><em>Trust matters more.</em>",
    recommendationsSummary: "This is where clients will find personal letters of recommendation and project references as PDFs.",
    recommendationHint: "<strong>Ready for your PDFs:</strong> Letters can be added later with just a few file details — including preview and download.",
    contactKicker: "Ready for the next engagement",
    contactTitle: "Let’s talk about<br /><em>your platform.</em>",
    contactIntro: "Send me your project brief directly by email — or call me for an initial conversation.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    availabilityStatus: "Available now",
    availabilityDetails: "Remote · Full-time · On-site by arrangement",
    formName: "Your name *",
    formNamePlaceholder: "First and last name",
    formCompany: "Company",
    formCompanyPlaceholder: "Company / agency",
    formEmail: "Your email *",
    formPhone: "Phone",
    formProjectType: "Project focus",
    formChoose: "Please choose",
    formOther: "Other focus",
    formStart: "Preferred start",
    formStartPlaceholder: "e.g. September",
    formMessage: "Project brief *",
    formMessagePlaceholder: "What is the context, objective and operating model?",
    formPrivacy: "I have read the <a href=\"datenschutz.html\">privacy information</a> and would like to send these details by email.",
    openEmail: "Open email with project details",
    formNote: "The form opens your email application with a pre-filled message. This website does not store your input.",
    footerClaim: "Senior DevOps Engineer & Developer for resilient cloud platforms.",
    imprint: "Legal notice",
    privacy: "Privacy",
    backToTop: "Back to top",
    openPdfNew: "Open PDF separately",
  },
};

const state = {
  language: "de",
  originals: new Map(),
  originalHtml: new Map(),
  originalPlaceholders: new Map(),
};

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("af-language");
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem("af-language", language);
  } catch {
    // The page still works when local storage is unavailable.
  }
};

const rememberOriginalContent = () => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    state.originals.set(element, element.textContent);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    state.originalHtml.set(element, element.innerHTML);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    state.originalPlaceholders.set(element, element.getAttribute("placeholder") || "");
  });
};

const translateElement = (element, mode) => {
  const key = element.dataset[mode];
  const translated = translations.en[key];

  if (mode === "i18n") {
    element.textContent = state.language === "en" && translated ? translated : state.originals.get(element);
  } else if (mode === "i18nHtml") {
    element.innerHTML = state.language === "en" && translated ? translated : state.originalHtml.get(element);
  } else if (mode === "i18nPlaceholder") {
    element.setAttribute(
      "placeholder",
      state.language === "en" && translated ? translated : state.originalPlaceholders.get(element),
    );
  }
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderRecommendations = () => {
  const stage = document.querySelector("[data-recommendations]");
  if (!stage) return;

  const language = state.language;
  const actionText = language === "en" ? "View PDF" : "PDF ansehen";
  const placeholderText = language === "en" ? "PDF placeholder" : "PDF-Platzhalter";

  stage.innerHTML = RECOMMENDATIONS.map((recommendation) => {
    const hasFile = Boolean(recommendation.file);
    const title = recommendation.title[language] || recommendation.title.de;
    const source = recommendation.source[language] || recommendation.source.de;
    const description = recommendation.description[language] || recommendation.description.de;
    const action = hasFile
      ? `<button class="document-action" type="button" data-pdf-open="${escapeHtml(recommendation.file)}" data-pdf-name="${escapeHtml(title)}"><span>${actionText}</span><span aria-hidden="true">↗</span></button>`
      : `<div class="document-action"><span>${placeholderText}</span><span aria-hidden="true">＋</span></div>`;

    return `
      <article class="document-card${hasFile ? "" : " is-placeholder"}">
        <div class="document-sheet">
          <div class="document-type"><span>${escapeHtml(source)}</span><span>PDF</span></div>
          <div class="document-mark">${escapeHtml(recommendation.number)}</div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(description)}</p>
        </div>
        ${action}
      </article>`;
  }).join("");
};

const updateArchiveButton = () => {
  const archive = document.querySelector("#project-archive");
  const button = document.querySelector("[data-archive-toggle]");
  if (!archive || !button) return;

  const isOpen = !archive.hidden;
  const key = isOpen ? "hideArchive" : "showArchive";
  const label = button.querySelector("[data-i18n]");
  label.textContent = state.language === "en" ? translations.en[key] : isOpen ? "Frühere Projekte ausblenden" : "Frühere Projekte anzeigen";
  button.setAttribute("aria-expanded", String(isOpen));
};

const updateMetadata = () => {
  const description = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  if (state.language === "en") {
    document.title = "André Fricke · Senior DevOps Engineer & Developer";
    description?.setAttribute("content", "André Fricke — freelance Senior DevOps Engineer & Developer for AWS, platform engineering, Kubernetes, Terraform, CI/CD and observability.");
    ogDescription?.setAttribute("content", "Enterprise cloud platforms — automated, observable and designed for developers.");
  } else {
    document.title = "André Fricke · Senior DevOps Engineer & Developer";
    description?.setAttribute("content", "André Fricke – freiberuflicher Senior DevOps Engineer & Developer für AWS, Platform Engineering, Kubernetes, Terraform, CI/CD und Observability.");
    ogDescription?.setAttribute("content", "Enterprise Cloud Platforms – automatisiert, beobachtbar und für Entwickler gemacht.");
  }
};

const setLanguage = (language) => {
  state.language = language === "en" ? "en" : "de";
  document.documentElement.lang = state.language;
  storeLanguage(state.language);

  document.querySelectorAll("[data-i18n]").forEach((element) => translateElement(element, "i18n"));
  document.querySelectorAll("[data-i18n-html]").forEach((element) => translateElement(element, "i18nHtml"));
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => translateElement(element, "i18nPlaceholder"));

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === state.language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderRecommendations();
  updateArchiveButton();
  updateMetadata();
};

const showToast = (message) => {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  window.clearTimeout(showToast.timeout);
  toast.textContent = message;
  toast.classList.add("is-visible");
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
};

const initialiseHeader = () => {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-nav]");
  const links = [...document.querySelectorAll(".main-nav a")];

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 28);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuButton?.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    navigation?.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  links.forEach((link) => link.addEventListener("click", closeMenu));

  const sections = [...document.querySelectorAll("main section[id]")];
  const activeObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${visible.target.id}`));
    },
    { rootMargin: "-30% 0px -60%", threshold: [0, 0.1, 0.5] },
  );
  sections.forEach((section) => activeObserver.observe(section));
};

const initialiseReveal = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal");

  items.forEach((item) => {
    if (item.dataset.revealDelay) item.style.setProperty("--reveal-delay", `${item.dataset.revealDelay}ms`);
  });

  if (reducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  items.forEach((item) => observer.observe(item));
};

const initialiseSocialLinks = () => {
  document.querySelectorAll("[data-social]").forEach((link) => {
    const url = PROFILE_LINKS[link.dataset.social];
    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
      return;
    }

    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast(state.language === "en" ? "This profile link will be added soon." : "Dieser Profil-Link wird noch ergänzt.");
    });
  });
};

const initialiseArchive = () => {
  const archive = document.querySelector("#project-archive");
  const button = document.querySelector("[data-archive-toggle]");
  if (!archive || !button) return;

  button.addEventListener("click", () => {
    archive.hidden = !archive.hidden;
    updateArchiveButton();
    if (!archive.hidden) archive.querySelector("article")?.focus({ preventScroll: true });
  });
};

const initialisePdfDialog = () => {
  const dialog = document.querySelector("[data-pdf-dialog]");
  const frame = dialog?.querySelector("[data-pdf-frame]");
  const title = dialog?.querySelector("[data-pdf-title]");
  const download = dialog?.querySelector("[data-pdf-download]");
  if (!dialog || !frame || !title || !download) return;

  document.querySelector("[data-recommendations]")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-pdf-open]");
    if (!button) return;
    const file = button.dataset.pdfOpen;
    title.textContent = button.dataset.pdfName;
    frame.src = file;
    download.href = file;
    dialog.showModal();
    document.body.classList.add("dialog-open");
  });

  const close = () => {
    dialog.close();
    frame.src = "about:blank";
    document.body.classList.remove("dialog-open");
  };

  dialog.querySelector("[data-dialog-close]")?.addEventListener("click", close);
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) close();
  });
  dialog.addEventListener("close", () => {
    frame.src = "about:blank";
    document.body.classList.remove("dialog-open");
  });
};

const initialiseContactForm = () => {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const value = (name) => String(data.get(name) || "").trim();
    const language = state.language;
    const isEnglish = language === "en";
    const subject = isEnglish
      ? `Project inquiry${value("company") ? ` · ${value("company")}` : ""}`
      : `Projektanfrage${value("company") ? ` · ${value("company")}` : ""}`;

    const lines = isEnglish
      ? [
          "Hello André,",
          "",
          "I would like to discuss the following project with you:",
          "",
          `Name: ${value("name")}`,
          `Company: ${value("company") || "—"}`,
          `Email: ${value("email")}`,
          `Phone: ${value("phone") || "—"}`,
          `Project focus: ${value("focus") || "—"}`,
          `Preferred start: ${value("start") || "—"}`,
          "",
          "Project brief:",
          value("message"),
          "",
          "Kind regards",
          value("name"),
        ]
      : [
          "Hallo André,",
          "",
          "ich möchte folgendes Projekt mit dir besprechen:",
          "",
          `Name: ${value("name")}`,
          `Unternehmen: ${value("company") || "—"}`,
          `E-Mail: ${value("email")}`,
          `Telefon: ${value("phone") || "—"}`,
          `Projektfokus: ${value("focus") || "—"}`,
          `Gewünschter Start: ${value("start") || "—"}`,
          "",
          "Projektbeschreibung:",
          value("message"),
          "",
          "Viele Grüße",
          value("name"),
        ];

    const mailto = `mailto:fricke.andre@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\r\n"))}`;
    window.location.href = mailto;
    showToast(isEnglish ? "Your email application is opening." : "Ihr E-Mail-Programm wird geöffnet.");
  });
};

const initialiseLanguageButtons = () => {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
};

const initialiseUtilities = () => {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
  document.querySelector("[data-back-to-top]")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

rememberOriginalContent();
initialiseHeader();
initialiseReveal();
initialiseSocialLinks();
initialiseArchive();
initialisePdfDialog();
initialiseContactForm();
initialiseLanguageButtons();
initialiseUtilities();
setLanguage(getStoredLanguage() === "en" ? "en" : "de");
