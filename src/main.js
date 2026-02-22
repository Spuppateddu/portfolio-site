import './style.css'
import { translations, getCurrentLanguage, setLanguage, t } from './translations.js'
import { initRouter, getCurrentRoute } from './router.js'
import { renderMozzarellumPage, renderSecondBrainPage, renderGdrCompanionPage } from './pages.js'

function renderHomePage() {
  const currentLang = getCurrentLanguage();
  const isItalian = currentLang === 'it';
  
  return `
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Language Toggle - Fixed Top Right -->
    <div class="fixed top-4 right-4 z-50">
      <button id="lang-toggle" class="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-2 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        <span class="text-2xl" title="${isItalian ? 'Italiano' : 'English'}">${isItalian ? '🇮🇹' : '🇬🇧'}</span>
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${isItalian ? 'IT' : 'EN'}</span>
      </button>
    </div>

    <!-- Header Section with Photo and Timeline -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

        <!-- Left Panel - Photo -->
        <div class="flex items-center justify-center">
          <div class="w-full max-w-md">
            <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600">
              <!-- Replace this placeholder with your actual photo -->
              <img src="/images/alessio-gedda.jpg" alt="Alessio Gedda" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="w-full h-full hidden items-center justify-center text-white text-6xl font-bold">
                YN
              </div>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mt-6 text-center">Alessio Gedda</h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 text-center mt-2">${t('role')}</p>
          </div>
        </div>

        <!-- Right Panel - Timeline -->
        <div class="flex items-center">
          <div class="w-full">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">${t('timeline')}</h2>
            <div class="space-y-6">

              <!-- Timeline Item 1 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div class="w-0.5 h-full bg-gray-300 dark:bg-gray-700 mt-2"></div>
                </div>
                <div class="flex-1 pb-8">
                  <div class="text-sm text-gray-500 dark:text-gray-400">${t('timeline1Date')}</div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1">${t('timeline1Title')}</h3>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">${t('timeline1Desc')}</p>
                </div>
              </div>

              <!-- Timeline Item 2 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-4 h-4 rounded-full bg-purple-500"></div>
                  <div class="w-0.5 h-full bg-gray-300 dark:bg-gray-700 mt-2"></div>
                </div>
                <div class="flex-1 pb-8">
                  <div class="text-sm text-gray-500 dark:text-gray-400">${t('timeline2Date')}</div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1">${t('timeline2Title')}</h3>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">${t('timeline2Desc')}</p>
                </div>
              </div>

              <!-- Timeline Item 3 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <div class="flex-1">
                  <div class="text-sm text-gray-500 dark:text-gray-400">${t('timeline3Date')}</div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1">${t('timeline3Title')}</h3>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">${t('timeline3Desc')}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Bio Section -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">${t('bioTitle')}</h2>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${t('bioParagraph1')}</p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">${t('bioParagraph2')}</p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">${t('bioParagraph3')}</p>
        </div>
      </div>

      <!-- Technologies Section -->
      <div class="max-w-6xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">${t('techTitle')}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Backend & Database -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">${t('techBackend')}</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium text-sm">PHP</span>
              <span class="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full font-medium text-sm">Laravel</span>
              <span class="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full font-medium text-sm">MySQL</span>
              <span class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm">Python</span>
            </div>
          </div>
          
          <!-- Frontend & JavaScript -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">${t('techFrontend')}</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full font-medium text-sm">JavaScript</span>
              <span class="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full font-medium text-sm">React</span>
              <span class="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium text-sm">Vue</span>
              <span class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium text-sm">Next.js</span>
              <span class="px-4 py-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full font-medium text-sm">Convex</span>
            </div>
          </div>
          
          <!-- Cloud & DevOps -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">${t('techCloud')}</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-medium text-sm">EC2</span>
              <span class="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full font-medium text-sm">Lambda</span>
              <span class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm">RDS</span>
              <span class="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium text-sm">S3</span>
              <span class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium text-sm">CodeDeploy</span>
              <span class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium text-sm">Vercel</span>
            </div>
          </div>
          
          <!-- AI Tools -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">${t('techAI')}</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full font-medium text-sm">Claude Code</span>
              <span class="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full font-medium text-sm">ChatGPT</span>
              <span class="px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full font-medium text-sm">OpenCode</span>
              <span class="px-4 py-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full font-medium text-sm">Cursor</span>
            </div>
          </div>
          
        </div>
      </div>

      <!-- Projects Section -->
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">${t('projectsTitle')}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Project Card 1 - Mozzarellum -->
          <a href="#/project/mozzarellum" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 block cursor-pointer">
            <div class="h-48 overflow-hidden">
              <img src="/images/old_site/homepage_1.png" alt="Mozzarellum Screenshot" class="w-full h-full object-cover object-top" onerror="this.parentElement.classList.add('bg-gradient-to-br', 'from-blue-400', 'to-blue-600'); this.style.display='none';" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${t('project1Title')}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">${t('project1Summary')}</p>
            </div>
          </a>

          <!-- Project Card 2 - The Second Brain -->
          <a href="#/project/second-brain" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 block cursor-pointer">
            <div class="h-48 overflow-hidden">
              <img src="/images/second_brain/second_brain.png" alt="Second Brain Screenshot" class="w-full h-full object-cover object-top" onerror="this.parentElement.classList.add('bg-gradient-to-br', 'from-purple-400', 'to-purple-600'); this.style.display='none';" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${t('project2Title')}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">${t('project2Summary')}</p>
            </div>
          </a>

          <!-- Project Card 3 - GDR Companion -->
          <a href="#/project/gdr-companion" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 block cursor-pointer">
            <div class="h-48 overflow-hidden">
              <img src="/images/gdr_companion/homepage.png" alt="GDR Companion Screenshot" class="w-full h-full object-cover object-top" onerror="this.parentElement.classList.add('bg-gradient-to-br', 'from-green-400', 'to-green-600'); this.style.display='none';" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${t('project3Title')}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">${t('project3Summary')}</p>
            </div>
          </a>

        </div>
      </div>
    </div>
  </div>
`;
}

function renderApp() {
  const route = getCurrentRoute();
  let content;
  
  // Route matching
  if (route === '/' || route === '') {
    content = renderHomePage();
  } else if (route === '/project/mozzarellum') {
    content = renderMozzarellumPage();
  } else if (route === '/project/second-brain') {
    content = renderSecondBrainPage();
  } else if (route === '/project/gdr-companion') {
    content = renderGdrCompanionPage();
  } else {
    // Default to homepage for unknown routes
    content = renderHomePage();
  }
  
  document.querySelector('#app').innerHTML = content;
  
  // Add event listener for language toggle (only on homepage)
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = getCurrentLanguage() === 'it' ? 'en' : 'it';
      setLanguage(newLang);
      renderApp();
    });
  }
  
  // Setup image modal functionality
  setupImageModal();
  
  // Scroll to top on route change
  window.scrollTo(0, 0);
}

// Image modal setup
function setupImageModal() {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const modalClose = document.getElementById('modal-close');
  const galleryImages = document.querySelectorAll('.gallery-image');
  
  if (!modal || !modalImage || galleryImages.length === 0) return;
  
  // Open modal when clicking on gallery image
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      const src = img.dataset.src;
      modalImage.src = src;
      modalImage.alt = img.alt;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal function
  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
    modalImage.src = '';
  }
  
  // Close modal when clicking X button
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

// Initialize router and render
initRouter(renderApp);
renderApp();
