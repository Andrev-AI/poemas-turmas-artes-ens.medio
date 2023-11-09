import React from 'react'

function Home() {
  return (
    <div className='w-full h-full bg-slate-900 text-white'>
        <h1 className='text-center text-3xl font-extrabold pt-10'>Bem vindo(a). Site de exposição de poemas, grupo:</h1>
        <div className='flex flex-row space-x-10 text-5xl font-extrabold my-10 justify-center'>
        
        <div className='flex flex-col'>
            <p className='text-yellow-400'>A</p>
            <p className='text-yellow-400/75'>n</p>
            <p className='text-yellow-400/75'>d</p>
            <p className='text-yellow-400/75'>r</p>
            <p className='text-yellow-400/75'>é</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-orange-400'>D</p>
            <p className='text-orange-400/70'>a</p>
            <p className='text-orange-400/70'>v</p>
            <p className='text-orange-400/70'>i</p>
            <p className='text-orange-400/70'>d</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-lime-600'>A</p>
            <p className='text-lime-600/70'>d</p>
            <p className='text-lime-600/70'>r</p>
            <p className='text-lime-600/70'>i</p>
            <p className='text-lime-600/70'>e</p>
            <p className='text-lime-600/70'>l</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-pink-600'>R</p>
            <p className='text-pink-600/80'>a</p>
            <p className='text-pink-600/80'>y</p>
            <p className='text-pink-600/80'>c</p>
            <p className='text-pink-600/80'>a</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-cyan-300'>E</p>
            <p className='text-cyan-300/75'>n</p>
            <p className='text-cyan-300/75'>z</p>
            <p className='text-cyan-300/75'>o</p>
        </div>
        </div>
        <div className='text-center pt-5'>
            <a href="/poemas" className='text-2xl rounded-xl p-3 text-white bg-violet-600 hover:bg-violet-800'>Ver Poemas</a>
        </div>
    
<footer class="bg-white dark:bg-gray-900 mt-40">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-5 text-sm font-semibold text-gray-900 uppercase dark:text-white">Alunos</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                      <li>
                          <div  class="hover:underline">André</div>
                      </li>
                      <li>
                          <div class="hover:underline">David</div>
                      </li>
                      <li>
                          <div class="hover:underline">Adriel</div>
                      </li>
                      <li>
                          <div class="hover:underline">Rayca</div>
                      </li>
                      <li>
                          <div class="hover:underline">Enzo</div>
                      </li>
                      
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Redes Sociais</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                      <li>
                          <a href="https://www.instagram.com/moura_ndre/" class="hover:underline ">André</a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/kelvy_serafim/" class="hover:underline">David</a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/adriel._.lima1/" class="hover:underline">Andriel</a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/__rayca_/" class="hover:underline">Rayca</a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/_enzodepaula/" class="hover:underline">Enzo</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a class="hover:underline">ADARE Group&reg;</a>
                      </li>
                      <li>
                          <a class="hover:underline">&copy; 2023 ADARE Group. Todos os direitos reservados</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </div>
</footer>
  
    </div>
  )
}

export default Home