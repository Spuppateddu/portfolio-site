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
              <img src="/images/alessio-gedda.jpg" alt="Alessio Gedda" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="w-full h-full hidden items-center justify-center text-white text-6xl font-bold">
                YN
              </div>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mt-6 text-center">Alessio Gedda</h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 text-center mt-2">Full Stack Developer</p>
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
                  <div class="text-sm text-gray-500 dark:text-gray-400">2020 - Present</div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1"> Primo SRL: Sviluppatore Full Stack</h3>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">L'azienda ha iniziato a creare software proprietario' e ho cambiato mansione in sviluppatore e ho messo in pratica tutto quello che ho imparato a scuola</p>
                </div>
              </div>

              <!-- Timeline Item 2 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-4 h-4 rounded-full bg-purple-500"></div>
                  <div class="w-0.5 h-full bg-gray-300 dark:bg-gray-700 mt-2"></div>
                </div>
                <div class="flex-1 pb-8">
                  <div class="text-sm text-gray-500 dark:text-gray-400">2019 - 2020</div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1">Primo SRL: Tecnico IT</h3>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">Sono entrato in azienda come tecnico it</p>
                </div>
              </div>

              <!-- Timeline Item 3 -->
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <div class="flex-1">
                  <div class="text-sm text-gray-500 dark:text-gray-400">Before - 2019</div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1">Diploma Perito Tecnico Informatico</h3>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">Ho preso il diploma al Pininfarina di Moncalieri</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Bio Section -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Chi sono ?</h2>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Sono un persona introversa ma che ama il gioco di squadra e la collaborazione.
          Mi piace allenarmi(ma a casa, non mi piace andare in palestra), viaggiare e in particolare in Giappone, gioco a Magic The Gathering e anche se ho sempre vissuto con i cani da un po' di anni ho due gatte.</p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Adoro l'informatica perche' mi fa sentire libero di poter creare da zero progetti che ho in testa.</p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Lavoro nell'informatica perche' mi piacere l'idea di creare qualcosa di utile per le persone, e vedere le persone utilizzare i miei software mi riempie di soddisfazione.</p>
        </div>
      </div>

      <!-- Projects Section -->
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Progetti e competenze</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Project Card 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Mozzarellum</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Il mio primo progetto personale grossi, un sito internet portfolio con qualche giochino con classifiche online</p>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">The Second Brain</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Il progetto piu' grosso che ho fatto al momento, un sito per gestire la propria vita e le proprie finanze</p>
            </div>
          </div>

          <!-- Project Card 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">GDR Companion</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Per gli amanti dei GDR questo sito permette di creare schede personaggio per parecchi giochi e creare delle campagne con sessioni per mostrare immagini e mappe online</p>
            </div>
          </div>

          <!-- Project Card 4 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-red-400 to-red-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">IA</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Come utilizzo io intelligenza artificiale</p>
            </div>
          </div>

          <!-- Project Card 5 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-yellow-400 to-orange-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Linguaggi di programmazione e framework</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Il mio bagaglio di competenza sulla programmazione</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
`
