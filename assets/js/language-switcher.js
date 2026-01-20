// Language Switcher Functionality
(function() {
  'use strict';

  // Get current language from localStorage or default to 'en'
  let currentLang = localStorage.getItem('preferredLanguage') || 'en';

  // Initialize language on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
    
    // Load translations and apply
    if (typeof translations !== 'undefined') {
      applyTranslations(currentLang);
      updateLanguageSwitcher(currentLang);
    }
  });

  // Apply translations to the page
  function applyTranslations(lang) {
    if (!translations[lang]) {
      console.warn(`Language ${lang} not found, using English`);
      lang = 'en';
    }

    const t = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (t[key]) {
        if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
          element.value = t[key];
          element.textContent = t[key];
        } else if (element.tagName === 'BUTTON') {
          element.textContent = t[key];
        } else {
          element.textContent = t[key];
        }
      }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        element.placeholder = t[key];
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
    currentLang = lang;
  }

  // Update language switcher button
  function updateLanguageSwitcher(lang) {
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
      switcher.textContent = lang.toUpperCase();
      switcher.setAttribute('data-current-lang', lang);
    }
  }

  // Switch language function
  window.switchLanguage = function(lang) {
    if (translations[lang]) {
      applyTranslations(lang);
      updateLanguageSwitcher(lang);
      
      // Smooth scroll to top to show changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Toggle between EN and DE
  window.toggleLanguage = function() {
    const newLang = currentLang === 'en' ? 'de' : 'en';
    switchLanguage(newLang);
  };

})();
