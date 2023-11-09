import React, { useState } from "react";
import r from "../assets/rayca_poema_o_amor.pdf"; 


function Poemas() {

  return (
    <div className='bg-[#0e0e0f] w-full h-full text-white'>
        <div className='pt-10 flex justify-center items-center flex-col w-full p-5'>

        <div id="adriel" class="bg-[#2a2a2a] rounded-xl w-1/2 h-1/2 sm:w-3/4">
        <div class="bg-lime-600 rounded-t-xl p-3 flex items-center justify-between h-12">
            <span class="text-2xl font-semibold">Adriel</span>
            <a href="#" class=" bg-white/50 hover:bg-white/80 text-white rounded-full p-1">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
        </div>
        <div class="p-4 text-white">
            <strong>Cristal</strong><br/><br/>
        Numa noite escura, encontrei o meu cristal. <br/>
        Ela vinha brilhando com seus cabelos ao vento, sua roupa de flores e uma luz incrível, como um cristal. <br/> <br/>

        Cristal tornou-se meu amor, minha razão de amar e de existir, algo que jamais tinha sentido. <br/>
        Seu jeito de me fazer experimentar paz era singular. <br/> <br/>

        Após muito tempo compartilhando o amor com meu cristal, algo trágico separou nossos caminhos, um acidente levou o grande amor da minha vida. <br/>

        Partiu sem dizer adeus, levando parte de mim, uma parte que era somente dela, e que nunca mais poderei recuperar. <br/>

        Uma dor imensa se abriu em meu peito, meu cristal que tanto brilhava hoje não brilha mais, e levou consigo metade dos motivos de minha existência. <br/> <br/>

        Amo tanto que não suporto continuar, me entreguei por completo. <br/>
        Sem você, a vida perdeu sentido, hoje me despeço de todos, pois estou indo encontrar o meu cristal.
        </div>
        </div>

        <div class="bg-[#2a2a2a] rounded-xl w-1/2 h-1/2 mt-20 sm:w-3/4">
        <div class="bg-orange-400 rounded-t-xl p-3 flex items-center justify-between h-12">
            <span class="text-2xl font-semibold">David</span>
            <a href="#" class=" bg-white/50 hover:bg-white/80 text-white rounded-full p-1">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
        </div>
        <div class="p-4 text-white">
            <p>
            <strong>Academia</strong><br/>

            No templo do vigor, eu me exercito<br/>
            Com pesos, halteres, barras e anilhas<br/>
            Buscando a perfeição do meu físico.<br/>
            E a saúde que vem das maravilhas, são poucos que entendem a importância de uma anilha<br/><br/>

            Da ciência que me dá o suplemento<br/>
            Que aumenta a minha força e resistência independente do momento <br/>
            O whey protein, que é o alimento<br/>
            Das fibras musculares em carência por um período de tempo<br/><br/>

            E a creatina, que é a energia<br/>
            Que me faz superar os meus limites<br/>
            E me leva a um estado de euforia e alegria de<br/>
            Quando vejo os resultados tão bonitos<br/><br/>

            Assim, eu me dedico à academia<br/>
            Com arte, com rigor e com poesia<br/>
            </p>
        </div>
        </div>

        <div class="bg-[#2a2a2a] rounded-xl w-1/2 h-1/2 mt-20 sm:w-3/4">
        <div class="bg-cyan-300/80 rounded-t-xl p-3 flex items-center justify-between h-12">
            <span class="text-2xl font-semibold">Enzo</span>
            <a href="#" class=" bg-white/50 hover:bg-white/80 text-white rounded-full p-1">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
        </div>
        <div class="p-4 text-white">
            <p><strong>A Fantasiosa Hyrule</strong><br/><br/>

            Ventos tão suaves, acariciam as montanhas,<br/>
            Ventos esses que fazem o povo se alegrar,<br/>
            Mas esse mesmo vento atinge o deserto de forma brutal,<br/>
            A noite, ele os congelam, e de dia, ele os fazem queimar.<br/><br/>

            Terras verdes com grandes campos onde os animais felizes cantam e saltitam,<br/>
            Pântanos perigosos, lar dos monstros e do desespero,<br/>
            Fontes termais confortáveis e acolhedoras.<br/>

            Uma terra de magma e calor conhecida como montanha da morte,<br/>
            E melhor não chegar perto, ou você pode acabar se queimando,<br/>
            Ao mesmo tempo que Hyrule guarda ruínas de um passado não tão distante,<br/>
            Ela também está repleta de males e perigos.<br/><br/>

            Hyrule é mais do que uma terra de contos de fadas,<br/>
            Ela precisa ser conhecida e aventurada,<br/>
            Mas apenas os mais corajosos vão querer se aventurar em Hyrule.<br/>
        </p>
        </div>
        </div>

        <div class="bg-[#2a2a2a] rounded-xl w-1/2 h-1/2 mt-20 sm:w-3/4">
        <div class="bg-pink-600 rounded-t-xl p-3 flex items-center justify-between h-12">
            <span class="text-2xl font-semibold">Rayca</span>
            <a href={r} download="rayca_poema_o_amor.pdf" class="bg-white/50 hover:bg-white/80 text-white rounded-full p-1">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
        </div>
        <div class="p-4 text-white">
        <p>
        <strong>Intensidade</strong><br/><br/>
        O amor, o amor é uma loucura, <br/>
        O amor pode machucar, mas ao mesmo tempo, o amor cura, <br/>
        Cura de maneiras incríveis, como nenhuma outra. <br/> <br/>

        Há várias formas de amar e nenhum sentimento é tão intenso quanto ele. <br/>
        No amor, experimentamos diversos sentimentos: raiva, alegria, tristeza, compaixão.<br/> <br/>

        Desde o dia em que me apaixonei por ele, foi a melhor coisa que me aconteceu, <br/>
        O sentimento que tomou conta de mim foi algo que nunca havia sentido antes. <br/>

        Sua voz era minha calmaria, seus abraços eram como sentir borboletas no estômago, <br/>
        Seu carinho era como uma onda de paz na minha vida. <br/> <br/>

        Quando saímos para o campo e ficamos deitados ao ar livre, <br/>
        O vento lá era como nosso amor, forte e repleto de sentimentos incríveis. <br/> <br/>

        Um dia, tive que tomar uma decisão e meu amor deixar, <br/>
        Nosso amor se quebrou porque da minha cidade tive que me ausentar. <br/>
        Meu amor, nunca esqueça de continuar me amando. <br/> <br/>

        Não importa quanto tempo passe, você sempre terá o meu coração. <br/>
        Eu te amo muito, você sempre será o garoto dos meus sonhos, somente meu amor.
            </p>
        </div>
        </div>
        
        <div class="bg-[#2a2a2a] rounded-xl w-3/5 h-1/2 mt-20 xl:w-3/4">
        <div class="bg-blue-600 rounded-t-xl p-3 flex items-center justify-between h-12">
            <span class="text-2xl font-semibold">Alefe</span>
            <a href="#" class=" bg-white/50 hover:bg-white/80 text-white rounded-full p-1">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
        </div>
        <div class="p-4 text-white">
            <p>
                <strong>Dança da Prosperidade</strong><br/> <br/>
                Nas terras da vida, onde o sol resplandece,<br/>
                Prosperidade dança, em cada prece.<br/>
                Crescem sonhos como jardins em flor,<br/>
                Colhendo frutos doces do labor.<br/><br/>

                No campo da esperança, sementes plantadas,<br/>
                A colheita é fruto das jornadas.<br/>
                Prosperidade é rima no poema da existência,<br/>
                É a dança suave da abundância em cadência.<br/>
            </p>
        </div>
        </div>


        </div>
      
    </div>
  )
}

export default Poemas