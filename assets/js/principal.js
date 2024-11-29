// botao hamburger

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.toggle-button');
    
    toggleButton.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('button-open');
      
      var menu = document.querySelector('.menu-bar');
      menu.classList.toggle('menu-open');
    });
  });


  document.getElementById('vertical-menu-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.toggle('sidebar-enable');
    if (window.innerWidth >= 992) {
      var currentSidebarSize = document.body.getAttribute('data-sidebar-size');
      if (currentSidebarSize === null) {
        (document.body.getAttribute('data-sidebar-size') === null || document.body.getAttribute('data-sidebar-size') === 'lg') ? document.body.setAttribute('data-sidebar-size', 'sm') : document.body.setAttribute('data-sidebar-size', 'lg');
      } else if (currentSidebarSize === 'md') {
        (document.body.getAttribute('data-sidebar-size') === 'md') ? document.body.setAttribute('data-sidebar-size', 'sm') : document.body.setAttribute('data-sidebar-size', 'md');
      } else {
        (document.body.getAttribute('data-sidebar-size') === 'sm') ? document.body.setAttribute('data-sidebar-size', 'lg') : document.body.setAttribute('data-sidebar-size', 'sm');
      }
    }
  });
  
// links bola
// Obtém todos os elementos <li> com a classe "li-bola-link"
const liElements = document.querySelectorAll('.li-bola-link');

// Percorre cada elemento <li>
liElements.forEach(li => {
  // Obtém o elemento <div> com a classe "bola" dentro do elemento <li> atual
  const divBola = li.querySelector('.bola');

  // Adiciona um ouvinte de evento de clique em cada elemento <li>
  li.addEventListener('click', () => {
    // Remove a classe "active" de todos os elementos <div> com a classe "bola"
    liElements.forEach(otherLi => {
      const otherDivBola = otherLi.querySelector('.bola');
      otherDivBola.classList.remove('active');
    });

    // Adiciona a classe "active" ao elemento <div> atual apenas se não estiver presente
    if (!divBola.classList.contains('active')) {
      divBola.classList.add('active');
    }
  });
});




// cards
const carta = document.querySelector('.carta');
try {
  const botaoCarta = carta.querySelector('.botao-carta');
  carta.addEventListener('mouseover', () => {
    botaoCarta.classList.add('ativar');
  });
  
  carta.addEventListener('mouseout', () => {
    botaoCarta.classList.remove('ativar');
  });
} catch (e) {

}


// tabela
$(document).ready(function () {

  var table = $('#casa_aposta').DataTable({
    "order": [[0, "desc"]] // A primeira coluna (0) será ordenada de forma descendente
  });});

 
  
  $(document).ready(function () {

    var table = $('#table').DataTable({
      "order": [[0, "desc"]] // A primeira coluna (0) será ordenada de forma descendente
    });
  });
   
  
$(document).ready(function() {
  $('.cell-top').on('click', function () {
  $('.cell-top').removeClass('active');
  $(this).addClass('active');
  console.log('ola')
});
});

