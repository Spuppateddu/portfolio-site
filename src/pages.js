import { t, getCurrentLanguage } from './translations.js';

// Image modal component
function imageModal() {
  return `
    <div id="image-modal" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 backdrop-blur-sm">
      <button id="modal-close" class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-[101]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="max-w-[90vw] max-h-[90vh] p-4">
        <img id="modal-image" src="" alt="" class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
      </div>
    </div>
  `;
}

// Language toggle component
function languageToggle() {
  const isItalian = getCurrentLanguage() === 'it';
  return `
    <div class="fixed top-4 right-4 z-50">
      <button id="lang-toggle" class="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-2 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        <span class="text-2xl" title="${isItalian ? 'Italiano' : 'English'}">${isItalian ? '🇮🇹' : '🇬🇧'}</span>
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${isItalian ? 'IT' : 'EN'}</span>
      </button>
    </div>
  `;
}

// Back button component
function backButton() {
  return `
    <a href="#/" class="inline-flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span class="font-medium">${t('backToHome')}</span>
    </a>
  `;
}

// Image gallery item component
function galleryItem(src, caption) {
  return `
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div class="aspect-video overflow-hidden">
        <img src="${src}" alt="${caption}" class="gallery-image w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300 cursor-pointer" data-src="${src}" />
      </div>
      <div class="p-4">
        <p class="text-gray-600 dark:text-gray-400 text-sm">${caption}</p>
      </div>
    </div>
  `;
}

// Mozzarellum detail page
export function renderMozzarellumPage() {
  return `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      ${languageToggle()}
      ${imageModal()}
      <div class="container mx-auto px-4 py-12">
        ${backButton()}
        
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">${t('project1Title')}</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">${t('project1Desc')}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${galleryItem('/images/old_site/homepage_1.png', t('mozzarellumImg1'))}
            ${galleryItem('/images/old_site/homepage_2.png', t('mozzarellumImg2'))}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Second Brain detail page
export function renderSecondBrainPage() {
  return `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      ${languageToggle()}
      ${imageModal()}
      <div class="container mx-auto px-4 py-12">
        ${backButton()}
        
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">${t('project2Title')}</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-12">${t('project2Desc')}</p>
          
          <!-- Section 1: Planning & Calendar -->
          <div class="mb-16">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${t('secondBrainSection1Title')}</h2>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${t('secondBrainSection1Desc')}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${galleryItem('/images/second_brain/calendar.png', t('secondBrainImg5'))}
              ${galleryItem('/images/second_brain/planning.png', t('secondBrainImg4'))}
            </div>
          </div>
          
          <!-- Section 2: Knowledge Dashboard -->
          <div class="mb-16">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${t('secondBrainSection2Title')}</h2>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${t('secondBrainSection2Desc')}</p>
            </div>
            <div class="grid grid-cols-1 gap-6">
              ${galleryItem('/images/second_brain/second_brain.png', t('secondBrainImg1'))}
            </div>
          </div>
          
          <!-- Section 3: Cashflow -->
          <div class="mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${t('secondBrainSection3Title')}</h2>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${t('secondBrainSection3Desc')}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${galleryItem('/images/second_brain/cashflow.png', t('secondBrainImg2'))}
              ${galleryItem('/images/second_brain/cashflow_2.png', t('secondBrainImg3'))}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// GDR Companion detail page
export function renderGdrCompanionPage() {
  return `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      ${languageToggle()}
      ${imageModal()}
      <div class="container mx-auto px-4 py-12">
        ${backButton()}
        
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">${t('project3Title')}</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-12">${t('project3Desc')}</p>
          
          <!-- Section 1: Campaign Management -->
          <div class="mb-16">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${t('gdrCompanionSection1Title')}</h2>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${t('gdrCompanionSection1Desc')}</p>
            </div>
            <div class="grid grid-cols-1 gap-6">
              ${galleryItem('/images/gdr_companion/homepage.png', t('gdrCompanionImg1'))}
            </div>
          </div>
          
          <!-- Section 2: Character Sheets -->
          <div class="mb-16">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${t('gdrCompanionSection2Title')}</h2>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${t('gdrCompanionSection2Desc')}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${galleryItem('/images/gdr_companion/scheda_personaggio.png', t('gdrCompanionImg2'))}
              ${galleryItem('/images/gdr_companion/scheda_personaggio_2.png', t('gdrCompanionImg3'))}
            </div>
          </div>
          
          <!-- Section 3: Live Sessions -->
          <div class="mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${t('gdrCompanionSection3Title')}</h2>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${t('gdrCompanionSection3Desc')}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${galleryItem('/images/gdr_companion/session_1.png', t('gdrCompanionImg4'))}
              ${galleryItem('/images/gdr_companion/sessione_2.png', t('gdrCompanionImg5'))}
              ${galleryItem('/images/gdr_companion/sessione_3.png', t('gdrCompanionImg6'))}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
