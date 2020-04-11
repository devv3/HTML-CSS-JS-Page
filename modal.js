$('.li-modal1').on('click', function(e){
    e.preventDefault();
    $('#modal1').modal('show').find('.modal-content').load($(this).attr('href'));
  });
  $('.li-modal2').on('click', function(e){
    e.preventDefault();
    $('#modal2').modal('show').find('.modal-content').load($(this).attr('href'));
  });
  $('.li-modal3').on('click', function(e){
    e.preventDefault();
    $('#modal3').modal('show').find('.modal-content').load($(this).attr('href'));
  });
  $('.li-modal4').on('click', function(e){
    e.preventDefault();
    $('#modal4').modal('show').find('.modal-content').load($(this).attr('href'));
  });
  $('.li-modal5').on('click', function(e){
    e.preventDefault();
    $('#modal5').modal('show').find('.modal-content').load($(this).attr('href'));
  });
  $('.li-modal6').on('click', function(e){
    e.preventDefault();
    $('#modal6').modal('show').find('.modal-content').load($(this).attr('href'));
  });