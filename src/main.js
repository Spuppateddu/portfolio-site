import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header Section with Photo and Timeline -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

        <!-- Left Panel - Photo -->
        <div class="flex items-center justify-center">
          <div class="w-full max-w-md">
            <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600">
              <!-- Replace this placeholder with your actual photo -->
              <img src="/your-photo.jpg" alt="Your Name" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="w-full h-full hidden items-center justify-center text-white text-6xl font-bold">
                YN
              </div>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mt-6 text-center">Your Name</h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 text-center mt-2">Software Developer</p>
          </div>
        </div>

        <!-- Right Panel - Timeline -->
        <div class="flex items-center">
          <div class="w-full">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Timeline</h2>
            <div class="space-y-6">

              <!-- Timeline Item 1 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div class="w-0.5 h-full bg-gray-300 dark:bg-gray-700 mt-2"></div>
                </div>
                <div class="flex-1 pb-8">
                  <div class="text-sm text-gray-500 dark:text-gray-400">2023 - Present</div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1">Current Position</h3>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">Description of your current role and achievements.</p>
                </div>
              </div>

              <!-- Timeline Item 2 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-4 h-4 rounded-full bg-purple-500"></div>
                  <div class="w-0.5 h-full bg-gray-300 dark:bg-gray-700 mt-2"></div>
                </div>
                <div class="flex-1 pb-8">
                  <div class="text-sm text-gray-500 dark:text-gray-400">2021 - 2023</div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1">Previous Position</h3>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">Description of your previous role and accomplishments.</p>
                </div>
              </div>

              <!-- Timeline Item 3 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <div class="flex-1">
                  <div class="text-sm text-gray-500 dark:text-gray-400">2019 - 2021</div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1">Education / Early Career</h3>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">Your educational background or early career experience.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Bio Section -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Write your bio here. Talk about your passion for technology, your expertise,
            what drives you, and what you're currently working on or interested in.
            This is your chance to tell your story and connect with visitors on a personal level.
          </p>
        </div>
      </div>

      <!-- Projects Section -->
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Projects</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Project Card 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Project One</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Brief description of your first project and the technologies used.</p>
              <div class="flex gap-2 flex-wrap">
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Node.js</span>
              </div>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Two</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Brief description of your second project and what makes it special.</p>
              <div class="flex gap-2 flex-wrap">
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Vue.js</span>
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Python</span>
              </div>
            </div>
          </div>

          <!-- Project Card 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Three</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Brief description of your third project and its impact.</p>
              <div class="flex gap-2 flex-wrap">
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">TypeScript</span>
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>

          <!-- Project Card 4 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-red-400 to-red-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Four</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Brief description of your fourth project and key features.</p>
              <div class="flex gap-2 flex-wrap">
                <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Next.js</span>
                <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">GraphQL</span>
              </div>
            </div>
          </div>

          <!-- Project Card 5 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-yellow-400 to-orange-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Five</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Brief description of your fifth project and what you learned.</p>
              <div class="flex gap-2 flex-wrap">
                <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">Svelte</span>
                <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">Firebase</span>
              </div>
            </div>
          </div>

          <!-- Project Card 6 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-pink-400 to-pink-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Six</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Brief description of your sixth project and its challenges.</p>
              <div class="flex gap-2 flex-wrap">
                <span class="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">Angular</span>
                <span class="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">Docker</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
`
