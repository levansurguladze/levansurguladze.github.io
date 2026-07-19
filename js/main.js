/* =====================================================
   Levan Surguladze — Portfolio
   i18n (KA/EN), theme toggle, mobile nav, scroll reveal
   ===================================================== */

const I18N = {
  ka: {
    "nav.name": "ლევანი",
    "nav.about": "ჩემ შესახებ",
    "nav.skills": "უნარები",
    "nav.experience": "გამოცდილება",
    "nav.projects": "პროექტები",
    "nav.education": "განათლება",
    "nav.contact": "კონტაქტი",

    "hero.hello": "გამარჯობა, მე ვარ",
    "hero.name": "ლევან სურგულაძე",
    "hero.role1": "Middle IT Support Specialist",
    "hero.role2": "Junior Software Developer Candidate",
    "hero.desc": "ვქმნი შიდა ხელსაწყოებს, ავტომატიზაციისა და მონიტორინგის სისტემებს საბანკო IT გარემოში — და ტექნიკურ გამოცდილებას ვიყენებ Software Development-ის მიმართულებით ზრდისთვის.",
    "hero.cta1": "დამიკავშირდი",
    "hero.cvGeo": "CV (ქართული)",
    "hero.cvEng": "CV (English)",
    "hero.location": "თბილისი, საქართველო",
    "hero.company": "Credo Bank — 2024-დან დღემდე",

    "stats.years": "წელი საბანკო IT გარემოში",
    "stats.levels": "კარიერული საფეხური: Intern → Junior → Middle",
    "stats.projects": "აქტიური პროექტი — სამსახურში და პირადი",
    "stats.langs": "პროგრამირების ენა / ტექნოლოგია",

    "about.title": "ჩემ შესახებ",
    "about.p1": "ვარ Middle IT Support Specialist საბანკო IT გარემოში 2-წლიანი გამოცდილებით და კარიერული ზრდით Intern-იდან Middle დონემდე. ვმუშაობ ინფრასტრუქტურულ მხარდაჭერაზე, Active Directory-ზე, endpoint management-ზე, SharePoint-ზე დაფუძნებულ შიდა აპლიკაციებზე, ავტომატიზაციასა და მონიტორინგის სისტემებზე.",
    "about.p2": "მიზნად მაქვს დასახული ტექნიკური გამოცდილების გამოყენება Software Development-ის მიმართულებით — განსაკუთრებით C#, Python, JavaScript და Unity ტექნოლოგიებით. მჯერა, რომ საუკეთესო ხელსაწყოები იქმნება მაშინ, როცა კარგად იცნობ პრობლემას, რომელსაც ისინი აგვარებენ.",
    "about.chip1": "პროექტების მართვა",
    "about.chip2": "პრობლემების გადაჭრა",
    "about.chip3": "ანალიტიკური აზროვნება",
    "about.chip4": "კრეატიული აზროვნება",
    "about.chip5": "პასუხისმგებლობა",
    "about.chip6": "დამოუკიდებლად მუშაობა",

    "skills.title": "ტექნიკური უნარები",
    "skills.dev": "პროგრამირება / Development",
    "skills.sys": "სისტემები & ხელსაწყოები",
    "skills.support": "მხარდაჭერა / ინფრასტრუქტურა",
    "skills.hw": "Hardware დიაგნოსტიკა & შეკეთება",
    "skills.mon": "სისტემური მონიტორინგი",
    "skills.net": "ქსელები (Basic Networking)",

    "exp.title": "სამუშაო გამოცდილება",
    "exp.date": "2024 — დღემდე",
    "exp.b1": "დავაპროექტე და შევქმენი SharePoint-ზე დაფუძნებული სამუშაო აპლიკაცია, ინტეგრირებული Active Directory-სთან, რომელიც ავტომატურად ამუშავებს საველე ვიზიტების ჩეკლისტებსა და რეპორტებს.",
    "exp.b2": "ვმუშაობ Self-Service Password Reset (SSPR) პორტალზე Helpdesk-ის განმეორებადი password reset მოთხოვნების შესამცირებლად და თვითმომსახურების გასაუმჯობესებლად.",
    "exp.b3": "ვქმნი PC Dashboard მონიტორინგის სისტემას ბანკის ქსელში მოწყობილობების რეალურ დროში კონტროლისა და მხარდაჭერის პროცესის გაუმჯობესებისთვის.",
    "exp.b4": "ვუზრუნველყოფ ყოველდღიურ ტექნიკურ მხარდაჭერას Windows გარემოში: სამუშაო სადგურები, AD, RDP, endpoint management, hardware/software დიაგნოსტიკა, networking/VoIP.",

    "proj.title": "პროექტები",
    "proj.personal": "პირადი პროექტი",
    "proj.work": "სამუშაო პროექტი",
    "proj.work2": "სამუშაო პროექტი",
    "proj.work3": "სამუშაო პროექტი",
    "proj.beta": "Low-poly სტილის exploration/survival თამაში Unity-ში. ვმუშაობ inventory UI-ზე, interaction prompts-ზე, item/crafting სისტემებზე, პერსონაჟებისა და გარემოს დიზაინზე და ძირითადი gameplay სისტემების დაგეგმვაზე.",
    "proj.sp.title": "Field Visit აპლიკაცია",
    "proj.sp.desc": "SharePoint-ზე დაფუძნებული სამუშაო აპლიკაცია, ინტეგრირებული Active Directory-სთან — ავტომატურად ამუშავებს საველე ვიზიტების ჩეკლისტებსა და რეპორტებს.",
    "proj.sspr.title": "SSPR პორტალი",
    "proj.sspr.desc": "Self-Service Password Reset პორტალი, რომელიც ამცირებს Helpdesk-ის განმეორებად password reset მოთხოვნებს და აუმჯობესებს მომხმარებლის თვითმომსახურებას.",
    "proj.dash.desc": "მონიტორინგის სისტემა ბანკის ქსელში არსებული მოწყობილობების რეალურ დროში კონტროლისთვის — ხილვადობა და მხარდაჭერის პროცესების ეფექტიანობა ერთ სივრცეში.",

    "edu.title": "განათლება და ენები",
    "edu.uni": "ილიას სახელმწიფო უნივერსიტეტი",
    "edu.fac": "ბიზნესის, ტექნოლოგიისა და განათლების ფაკულტეტი",
    "edu.langTitle": "ენები",
    "edu.ka": "ქართული",
    "edu.kaLevel": "მშობლიური",
    "edu.en": "ინგლისური",
    "edu.enLevel": "სამუშაო დონე / ტექნიკური დოკუმენტაცია",

    "contact.title": "მოდი, ვისაუბროთ",
    "contact.sub": "ღია ვარ ახალი შესაძლებლობებისთვის — განსაკუთრებით Junior Software Developer პოზიციებზე. მომწერე და აუცილებლად გიპასუხებ.",

    "footer.name": "ლევან სურგულაძე"
  },

  en: {
    "nav.name": "Levan",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.hello": "Hi, I'm",
    "hero.name": "Levan Surguladze",
    "hero.role1": "Middle IT Support Specialist",
    "hero.role2": "Junior Software Developer Candidate",
    "hero.desc": "I build internal tools, automation and monitoring systems in a banking IT environment — and I'm channeling that technical experience into growing as a software developer.",
    "hero.cta1": "Get in touch",
    "hero.cvGeo": "CV (Georgian)",
    "hero.cvEng": "CV (English)",
    "hero.location": "Tbilisi, Georgia",
    "hero.company": "Credo Bank — 2024 to present",

    "stats.years": "years in banking IT environment",
    "stats.levels": "career levels: Intern → Junior → Middle",
    "stats.projects": "active projects — work & personal",
    "stats.langs": "programming languages / technologies",

    "about.title": "About Me",
    "about.p1": "I'm a Middle IT Support Specialist with 2 years of experience in a banking IT environment and career progression from Intern to Middle level. I work on infrastructure support, Active Directory, endpoint management, SharePoint-based internal applications, automation, and monitoring systems.",
    "about.p2": "My goal is to apply my technical experience toward Software Development — especially with C#, Python, JavaScript, and Unity. I believe the best tools are built by people who deeply understand the problems those tools solve.",
    "about.chip1": "Project management",
    "about.chip2": "Problem solving",
    "about.chip3": "Analytical thinking",
    "about.chip4": "Creative thinking",
    "about.chip5": "Responsibility",
    "about.chip6": "Independent work",

    "skills.title": "Technical Skills",
    "skills.dev": "Programming / Development",
    "skills.sys": "Systems & Tools",
    "skills.support": "Support / Infrastructure",
    "skills.hw": "Hardware diagnostics & repair",
    "skills.mon": "System monitoring",
    "skills.net": "Basic Networking",

    "exp.title": "Work Experience",
    "exp.date": "2024 — Present",
    "exp.b1": "Designed and built a SharePoint-based work application integrated with Active Directory (AD), which automatically processes field visit checklists and reports.",
    "exp.b2": "Working on a Self-Service Password Reset (SSPR) portal aimed at reducing repetitive Helpdesk password reset requests and improving user self-service.",
    "exp.b3": "Developing a PC Dashboard monitoring system for real-time visibility over devices within the bank network and improvement of support processes.",
    "exp.b4": "Providing daily technical support in a Windows environment: user workstations, AD, RDP, endpoint management, hardware/software diagnostics, and basic networking/VoIP issues.",

    "proj.title": "Projects",
    "proj.personal": "Personal Project",
    "proj.work": "Work Project",
    "proj.work2": "Work Project",
    "proj.work3": "Work Project",
    "proj.beta": "A low-poly exploration/survival game in Unity. Working on inventory UI, interaction prompts, item/crafting systems, character and environment design, and planning core gameplay systems.",
    "proj.sp.title": "Field Visit Application",
    "proj.sp.desc": "A SharePoint-based work application integrated with Active Directory — automatically processes field visit checklists and reports.",
    "proj.sspr.title": "SSPR Portal",
    "proj.sspr.desc": "A Self-Service Password Reset portal that reduces repetitive Helpdesk password reset requests and improves user self-service.",
    "proj.dash.desc": "A monitoring system for real-time visibility over devices within the bank network — visibility and support process efficiency in one place.",

    "edu.title": "Education & Languages",
    "edu.uni": "Ilia State University",
    "edu.fac": "Faculty of Business, Technology and Education",
    "edu.langTitle": "Languages",
    "edu.ka": "Georgian",
    "edu.kaLevel": "Native",
    "edu.en": "English",
    "edu.enLevel": "Working level / technical documentation",

    "contact.title": "Let's Talk",
    "contact.sub": "I'm open to new opportunities — especially Junior Software Developer positions. Drop me a message and I'll definitely get back to you.",

    "footer.name": "Levan Surguladze"
  }
};

/* ---------- Language ---------- */
const langToggle = document.getElementById("langToggle");

function setLang(lang) {
  const dict = I18N[lang] || I18N.ka;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  document.title = lang === "ka"
    ? "ლევან სურგულაძე — IT Support Specialist & Developer"
    : "Levan Surguladze — IT Support Specialist & Developer";
  langToggle.querySelectorAll(".lang-toggle__opt").forEach((opt) => {
    opt.classList.toggle("is-active", opt.dataset.lang === lang);
  });
  localStorage.setItem("lang", lang);
}

langToggle.addEventListener("click", () => {
  const current = localStorage.getItem("lang") || "ka";
  setLang(current === "ka" ? "en" : "ka");
});

setLang(localStorage.getItem("lang") || "ka");

/* ---------- Theme ---------- */
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  setTheme("light");
}

/* ---------- Mobile nav ---------- */
const burger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  navLinks.classList.toggle("is-open");
});

navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    burger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
  })
);

/* ---------- Scroll reveal ---------- */
const revealEls = Array.from(document.querySelectorAll(".reveal"));

function checkReveals() {
  const trigger = window.innerHeight - 40;
  for (let i = revealEls.length - 1; i >= 0; i--) {
    const el = revealEls[i];
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger && rect.bottom > 0) {
      el.classList.add("is-visible");
      revealEls.splice(i, 1);
    }
  }
  if (revealEls.length === 0) {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  }
}

let revealTick = false;
function onScroll() {
  if (revealTick) return;
  revealTick = true;
  requestAnimationFrame(() => {
    revealTick = false;
    checkReveals();
  });
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll, { passive: true });
checkReveals();
window.addEventListener("load", checkReveals);

/* ---------- Scroll progress bar ---------- */
const progressBar = document.getElementById("scrollProgressBar");

function updateProgress() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  progressBar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress, { passive: true });
updateProgress();

/* ---------- Typing animation (hero tagline) ---------- */
const TYPE_PHRASES = [
  "C# · Python · JavaScript",
  "Unity Game Development",
  "SharePoint · Active Directory",
  "IT Automation & Monitoring"
];
const typedEl = document.getElementById("typedText");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  typedEl.textContent = TYPE_PHRASES.join(" · ");
} else {
  let phraseIdx = 0;
  let charIdx = TYPE_PHRASES[0].length; // initial text already rendered
  let deleting = false;

  function typeTick() {
    const phrase = TYPE_PHRASES[phraseIdx];
    let delay;

    if (deleting) {
      charIdx--;
      typedEl.textContent = phrase.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % TYPE_PHRASES.length;
        delay = 350;
      } else {
        delay = 32;
      }
    } else {
      charIdx++;
      typedEl.textContent = phrase.slice(0, charIdx);
      if (charIdx >= phrase.length) {
        deleting = true;
        delay = 2100;
      } else {
        delay = 62;
      }
    }
    setTimeout(typeTick, delay);
  }

  setTimeout(typeTick, 2100);
}
