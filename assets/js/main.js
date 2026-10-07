/**
 * SVETLANA DENISOVA — PORTFOLIO JAVASCRIPT
 * Mobile-first interactions, gallery lightbox, filtering, and i18n
 */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initPortfolioFilters();
  initLightbox();
  initCopyHandle();
  initStickyContactBar();
  initScrollAnimations();
});

/* ==========================================================================
   BILINGUAL TRANSLATION (RU / EN)
   ========================================================================== */
const translations = {
  ru: {
    brand_sub: "Художник & Преподаватель",
    nav_contact: "Написать",
    hero_role: "Художник • Живопись & Преподавание",
    hero_location: "Рига, Латвия • Доставка по всему миру",
    hero_quote: "«Художник, который дарит тепло»",
    hero_desc: "Авторская живопись маслом и акварелью, душевные портреты, роспись стен и одежды, обучение в Lima Art School.",
    tag_oil: "Холст / Масло",
    tag_watercolor: "Акварель",
    tag_murals: "Роспись стен",
    tag_apparel: "Роспись одежды",
    tag_school: "Lima Art School",
    btn_view_work: "Смотреть работы",
    btn_contact_ig: "Написать в Instagram",
    hero_art_title: "«Северное сияние над лесом»",
    hero_art_meta: "Акварель на хлопке • Denisova '2021",
    hero_art_badge: "Избранное",
    
    about_label: "Об авторе",
    about_title: "Светлана Денисова",
    about_p1: "Я профессиональный художник и преподаватель живописи из <strong>Риги</strong>. Моё искусство — это тёплые, искренние истории, оживающие на холсте, бумаге, стенах и текстиле.",
    about_p2: "Работаю в классических и современных техниках: <strong>масло, акварель, акрил</strong>. В моём портфолио — трогательная анималистика, живые портреты на заказ, масштабная интерьерная роспись и уникальный кастом одежды.",
    about_p3: "Основатель и руководитель художественной студии <strong>Lima Art School</strong> в Риге, а также преподаватель онлайн-уроков живописи с учениками по всему миру через Zoom.",
    about_tag_mural: "Монументальная роспись",
    about_tag_studio: "Уроки в студии",

    services_label: "Направления",
    services_title: "Чем я занимаюсь",
    services_subtitle: "Индивидуальные заказы, оформление интерьеров, кастомная роспись и художественное образование.",
    
    s1_title: "Живопись маслом на холсте",
    s1_desc: "Атмосферные пейзажи, выразительные портреты и натюрморты с богатой фактурой мазков.",
    
    s2_title: "Акварельная анималистика & портреты",
    s2_desc: "Трепетные и живые образы любимых питомцев, дикой природы и памятные портреты на хлопковой бумаге.",
    
    s3_title: "Роспись стен и интерьеров",
    s3_desc: "Художественное оформление стен в жилых домах, детских комнатах, зонах каминов и коммерческих пространствах.",
    
    s4_title: "Авторская роспись одежды & обуви",
    s4_desc: "Эксклюзивные джинсовые куртки, футболки и кроссовки со стойкой росписью специальными красками по ткани.",
    
    s5_title: "Lima Art School & Уроки (Zoom)",
    s5_desc: "Обучение живописи для детей от 4 лет и взрослых в студии в Риге и индивидуальные уроки по Zoom.",

    work_label: "Портфолио",
    work_title: "Настоящие авторские работы",
    filter_all: "Все",
    filter_oil: "Холст / Масло",
    filter_watercolor: "Акварель",
    filter_mural: "Роспись стен",
    filter_apparel: "Роспись одежды",
    filter_teaching: "Уроки & Дети",

    inquire_btn: "Заказать похожее →",

    school_label: "Студия в Риге",
    school_title: "Lima Art School",
    school_tagline: "Творческое пространство в Риге (Jūrmalas gatve 78D). Рисование для детей и взрослых, мастер-классы и арт-мероприятия.",
    school_f1: "🎨 Дети от 4 лет и взрослые",
    school_f2: "📐 Основы рисунка и академизм",
    school_f3: "✨ Творческие мастер-классы",
    school_f4: "🎉 Арт-дни рождения и события",
    school_btn: "Перейти в @lima_art_school",

    contact_label: "Связаться",
    contact_title: "Давайте создадим картину для вас",
    contact_desc: "Напишите мне в Instagram, чтобы обсудить заказ картины, роспись стены или одежды, либо записаться на уроки. Доставка картин по всему миру.",
    contact_btn_ig: "Написать в Instagram Direct",
    contact_btn_fb: "Facebook: Deniza Art",
    contact_btn_school: "@lima_art_school",
    copy_hint: "Или скопируйте никнейм:",
    copy_btn: "Скопировать",
    copied_toast: "Никнейм @svdeniza скопирован!",

    lightbox_inquire: "Заказать такую работу в Direct",
    sticky_btn: "Написать художнице ✦"
  },

  en: {
    brand_sub: "Artist & Art Educator",
    nav_contact: "Contact",
    hero_role: "Visual Artist • Painter & Educator",
    hero_location: "Riga, Latvia • Worldwide Shipping",
    hero_quote: "“The artist who brings warmth to your home”",
    hero_desc: "Original oil and watercolor paintings, emotive portraits, wall murals, custom painted apparel, and teaching at Lima Art School.",
    tag_oil: "Oil on Canvas",
    tag_watercolor: "Watercolour",
    tag_murals: "Wall Murals",
    tag_apparel: "Painted Apparel",
    tag_school: "Lima Art School",
    btn_view_work: "View Portfolio",
    btn_contact_ig: "Message on Instagram",
    hero_art_title: "“Aurora Borealis over Forest”",
    hero_art_meta: "Watercolour on cotton • Denisova '2021",
    hero_art_badge: "Featured",

    about_label: "About the Artist",
    about_title: "Svetlana Denisova",
    about_p1: "I am a professional visual artist and art educator based in <strong>Riga, Latvia</strong>. My art captures warm, heartfelt moments on canvas, paper, walls, and textiles.",
    about_p2: "I work with classic and modern techniques: <strong>oil, watercolour, and acrylic</strong>. My portfolio features tender animal art, custom portraits, large-scale interior murals, and bespoke painted apparel.",
    about_p3: "Founder and director of <strong>Lima Art School</strong> in Riga, and instructor of international online Zoom art classes for students worldwide.",
    about_tag_mural: "Wall Murals",
    about_tag_studio: "Studio Classes",

    services_label: "Disciplines",
    services_title: "What I Do",
    services_subtitle: "Custom commissions, interior murals, bespoke painted apparel, and dedicated art education.",

    s1_title: "Oil Painting on Canvas",
    s1_desc: "Atmospheric landscapes, expressive portraits, and rich textural still life paintings.",

    s2_title: "Watercolour Animal Art & Portraits",
    s2_desc: "Tender and lifelike portraits of cherished pets, wildlife, and loved ones on heavy cotton paper.",

    s3_title: "Wall Murals & Interior Art",
    s3_desc: "Bespoke hand-painted murals for living spaces, children's rooms, fireplace accents, and boutique spaces.",

    s4_title: "Custom Painted Apparel & Footwear",
    s4_desc: "Exclusive denim jackets, t-shirts, and sneakers hand-painted with permanent fabric pigments.",

    s5_title: "Lima Art School & Online Lessons",
    s5_desc: "Art classes for children from 4yo and adults at the Riga studio and one-on-one lessons via Zoom.",

    work_label: "Portfolio",
    work_title: "Original Artwork",
    filter_all: "All",
    filter_oil: "Oil on Canvas",
    filter_watercolor: "Watercolour",
    filter_mural: "Wall Murals",
    filter_apparel: "Painted Apparel",
    filter_teaching: "Teaching & Students",

    inquire_btn: "Inquire piece →",

    school_label: "Riga Art Studio",
    school_title: "Lima Art School",
    school_tagline: "Creative studio in Riga (Jūrmalas gatve 78D). Art classes for children and adults, masterclasses, and private events.",
    school_f1: "🎨 Kids from 4yo & Adults",
    school_f2: "📐 Fundamentals & Fine Art",
    school_f3: "✨ Themed Workshops",
    school_f4: "🎉 Creative Birthdays & Events",
    school_btn: "Visit @lima_art_school",

    contact_label: "Get in Touch",
    contact_title: "Let's create something warm together",
    contact_desc: "Send me a direct message on Instagram to discuss paintings, murals, custom clothing, or enroll in lessons. Worldwide shipping.",
    contact_btn_ig: "Message in Instagram Direct",
    contact_btn_fb: "Facebook: Deniza Art",
    contact_btn_school: "@lima_art_school",
    copy_hint: "Or copy Instagram handle:",
    copy_btn: "Copy",
    copied_toast: "Handle @svdeniza copied to clipboard!",

    lightbox_inquire: "Inquire about this piece in Direct",
    sticky_btn: "Message the Artist ✦"
  }
};

let currentLang = 'ru';

function initI18n() {
  const langButtons = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('svdeniza_lang') || 'ru';
  setLanguage(savedLang);

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('svdeniza_lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

/* ==========================================================================
   PORTFOLIO FILTERING
   ========================================================================== */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const artCards = document.querySelectorAll('.art-filterable');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      artCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   LIGHTBOX FULLSCREEN MODAL
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDetails = document.getElementById('lightboxDetails');
  const lightboxCta = document.getElementById('lightboxCta');
  const closeBtn = document.getElementById('lightboxClose');

  const triggerElements = document.querySelectorAll('[data-art-modal]');

  triggerElements.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      // If clicking directly on external CTA link, don't intercept
      if (e.target.closest('a') && !e.target.closest('.hero-showcase') && !e.target.closest('.art-card')) {
        return;
      }
      e.preventDefault();

      const imgSrc = trigger.getAttribute('data-art-src') || trigger.querySelector('img')?.src;
      const title = trigger.getAttribute('data-art-title') || 'Картина Светланы Денисовой';
      const details = trigger.getAttribute('data-art-details') || 'Оригинал • Рига';

      lightboxImg.src = imgSrc;
      lightboxTitle.textContent = title;
      lightboxDetails.textContent = details;

      const encodedMsg = encodeURIComponent(`Здравствуйте, Светлана! Увидела на вашем сайте работу "${title}" и хочу узнать подробности.`);
      lightboxCta.href = `https://ig.me/m/svdeniza?text=${encodedMsg}`;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-content')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Touch swipe down to close
  let startY = 0;
  modal.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 90) {
      closeModal();
    }
  }, { passive: true });
}

/* ==========================================================================
   COPY HANDLE TRIGGER
   ========================================================================== */
function initCopyHandle() {
  const copyBtn = document.getElementById('copyHandleBtn');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const handle = "@svdeniza";
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(handle);
      } else {
        const input = document.createElement('input');
        input.value = handle;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      showToast(translations[currentLang].copied_toast);
    } catch (err) {
      console.log('Copy error:', err);
    }
  });
}

function showToast(message) {
  const toast = document.getElementById('toastNotice');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/* ==========================================================================
   STICKY CONTACT BAR
   ========================================================================== */
function initStickyContactBar() {
  const stickyBar = document.getElementById('stickyContactBar');
  const contactSection = document.getElementById('contact');

  if (!stickyBar || !contactSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stickyBar.classList.add('hidden');
      } else {
        stickyBar.classList.remove('hidden');
      }
    });
  }, { threshold: 0.15 });

  observer.observe(contactSection);
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  elements.forEach(el => observer.observe(el));
}
