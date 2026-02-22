const savedLang = localStorage.getItem("siteLang");

if (!savedLang) {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.startsWith("en")) {
    localStorage.setItem("siteLang", "en");
    window.location.href = "/en/";
  } else {
    localStorage.setItem("siteLang", "pt");
  }
}