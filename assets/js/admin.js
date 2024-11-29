
function getChartColorsArray(chartId) {
  var colors = $(chartId).attr('data-colors');
  var colors = JSON.parse(colors);
  return colors.map(function (value) {
    var newValue = value.replace(' ', '');
    if (newValue.indexOf('--') != -1) {
      var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
      if (color) return color;
    } else {
      return newValue;
    }
  })
}

$(document).ready(function () {
  $('#twoexemplo').DataTable({
    stateSave: true,
    // Define o número de linhas por página
    pageLength: 10,
    // Define o tamanho do menu de seleção de número de linhas por página
    lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
    // Habilita a paginação
    paging: true,
    // Define a ordenação das colunas
    order: [[0, 'desc']],
    // Adiciona os botões à tabela
    buttons: ['copy', 'excel', 'pdf', 'colvis'],
    // Define a estrutura da tabela
    dom: 'Bflrtip'
  });

  $('#example').DataTable({
    stateSave: true,
    // Define o número de linhas por página
    pageLength: 10,
    // Define o tamanho do menu de seleção de número de linhas por página
    lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
    // Habilita a paginação
    paging: true,
    // Define a ordenação das colunas
    order: [[0, 'desc']],
    // Adiciona os botões à tabela
    buttons: ['copy', 'excel', 'pdf', 'colvis'],
    // Define a estrutura da tabela
    dom: 'Bflrtip'
  });

  $('#threeexemplo').DataTable({
    stateSave: true,
    // Define o número de linhas por página
    pageLength: 10,
    // Define o tamanho do menu de seleção de número de linhas por página
    lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
    // Habilita a paginação
    paging: true,
    // Define a ordenação das colunas
    order: [[0, 'desc']],
    // Adiciona os botões à tabela
    buttons: ['copy', 'excel', 'pdf', 'colvis'],
    // Define a estrutura da tabela
    dom: 'Bflrtip'
  });

  $('#fourexemplo').DataTable({
    stateSave: true,
    // Define o número de linhas por página
    pageLength: 10,
    // Define o tamanho do menu de seleção de número de linhas por página
    lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
    // Habilita a paginação
    paging: true,
    // Define a ordenação das colunas
    order: [[0, 'desc']],
    // Adiciona os botões à tabela
    buttons: ['copy', 'excel', 'pdf', 'colvis'],
    // Define a estrutura da tabela
    dom: 'Bflrtip'
  });

  // pie chart
  var pieColors = getChartColorsArray("#pie_chart");
  var options = {
    chart: {
      height: 320,
      type: 'pie',
    },
    series: [55, 41, 17],
    labels: ['Series 3', 'Series 4', 'Series 5'],
    colors: pieColors,
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
    },
    responsive: [{
      breakpoint: 600,
      options: {
        chart: {
          height: 240
        },
        legend: {
          show: false
        },
      }
    }]

  }

  var chart = new ApexCharts(
    document.querySelector("#pie_chart"),
    options
  );

  chart.render();

  var chamarAlerta = document.querySelector('.chamar-alerta-usuario')

  chamarAlerta.addEventListener('click', function () {
    Swal.fire({
      title: 'Você tem certeza ?',
      text: "Uma vez deletado, não será possível recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#168831',
      cancelButtonColor: '##737171',
      confirmButtonText: 'Sim,deletar!',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deletedo!',
          'Esse arquivo foi deletado',
          'successo'
        )
      }
    });
  });

  var chamarAlerta = document.querySelector('.chamar-alerta-afiliados')

  chamarAlerta.addEventListener('click', function () {
    Swal.fire({
      title: 'Você tem certeza ?',
      text: "Uma vez deletado, não será possível recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#168831',
      cancelButtonColor: '##737171',
      confirmButtonText: 'Sim,deletar!',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deletedo!',
          'Esse arquivo foi deletado',
          'successo'
        )
      }
    });
  });
  var chamarAlerta = document.querySelector('.chamar-reset-afiliados')

  chamarAlerta.addEventListener('click', function () {
    Swal.fire({
      title: 'Você tem certeza ?',
      text: "Uma vez Resetado, não será possível recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#168831',
      cancelButtonColor: '##737171',
      confirmButtonText: 'Sim,Resetar!',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Resetado!',
          'Esse arquivo foi Resetado!',
          'successo'
        )
      }
    });
  });

  $('#example').on('click', '.btn-history-usario', function () {
    $('.modal-historico-usuario').modal('show');
  });

  flatpickr('#datepicker-basic', {
    defaultDate: new Date()
  });

  $('.skala-item').on('click',function(e) {
    e.preventDefault();

    let href = $(this).attr('href'); // #home1
    console.log(href);

    $('.nav-link').removeClass('active');
    $(`.nav-link`).attr('aria-selected', false);
    $(`.nav-link[href="${href}"]`).addClass('active');
    $(`.nav-link[href="${href}"]`).attr('aria-selected', true);

    $('.tab-pane').removeClass('active');
    $(`.tab-pane[id="${href.replace('#','')}"]`).addClass('active');
  });
});  
