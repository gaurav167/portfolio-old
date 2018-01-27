if($('.switch-input').is(':checked')){
    $('body, input:text, textarea').css({'background-color':'#0A0A0A'});
    $('.btn-primary').css({'background-color':'#0A0A0A'});
    $('.btn-primary').css({'border-color':'white'});
    $('nav').removeClass('navbar-white');
    $('nav').addClass('navbar-dark');
    $('.facebook, .google-plus, .instagram, .linkedin, .github').css({'background-color':'#0A0A0A'});
    $('.facebook').hover(function(){
      $(this).css({'background-color':'#46629E'});
      }, function(){
        $(this).css({'background-color':'#0A0A0A'});
      });
    $('.instagram').hover(function(){
      $(this).css({'background-color':'#F18089'});
      }, function(){
        $(this).css({'background-color':'#0A0A0A'});
      });
    $('.google-plus').hover(function(){
      $(this).css({'background-color':'#DD4C39'});
      }, function(){
        $(this).css({'background-color':'#0A0A0A'});
      });
    $('.linkedin').hover(function(){
      $(this).css({'background-color':'#01AEF2'});
      }, function(){
        $(this).css({'background-color':'#0A0A0A'});
      });
    $('.github').hover(function(){
      $(this).css({'background-color':'#000000'});
      }, function(){
        $(this).css({'background-color':'#0A0A0A'});
      });
  }

  $('.switch :checkbox').change(function(){
    if(this.checked){
    $('body, input:text, textarea').css({'background-color':'#0A0A0A'});
    $('.btn-primary').css({'background-color':'#0A0A0A'});
    $('.btn-primary').css({'border-color':'white'});
    $('nav').removeClass('navbar-white');
    $('nav').addClass('navbar-dark');
    $('.facebook, .google-plus, .instagram, .linkedin, .github').css({'background-color':'#0A0A0A'});
    $('.facebook').hover(function(){
      $(this).css({'background-color':'#46629E'});
      }, function(){
        $(this).css({'background-color':'#0A0A0A'});
      });
    $('.instagram').hover(function(){
      $(this).css({'background-color':'#F18089'});
      }, function(){
        $(this).css({'background-color':'#0A0A0A'});
      });
    $('.google-plus').hover(function(){
      $(this).css({'background-color':'#DD4C39'});
      }, function(){
        $(this).css({'background-color':'#0A0A0A'});
      });
    $('.linkedin').hover(function(){
      $(this).css({'background-color':'#01AEF2'});
      }, function(){
        $(this).css({'background-color':'#0A0A0A'});
      });
    $('.github').hover(function(){
      $(this).css({'background-color':'#000000'});
      }, function(){
        $(this).css({'background-color':'#0A0A0A'});
      });
  }
  else{
    $('body, input:text, textarea').css({'background-color':'#eee'});
    $('.btn-primary').css({'background-color':'#3acab1'});
    $('.btn-primary').css({'border-color':'#3acab1'});
    $('nav').removeClass('navbar-dark');
    $('nav').addClass('navbar-white');
    $('.facebook, .google-plus, .instagram, .linkedin, .github').css({'background-color':'#3acab1'});
    $('.facebook').hover(function(){
      $(this).css({'background-color':'#46629E'});
      }, function(){
        $(this).css({'background-color':'#3acab1'});
      });
    $('.instagram').hover(function(){
      $(this).css({'background-color':'#F18089'});
      }, function(){
        $(this).css({'background-color':'#3acab1'});
      });
    $('.google-plus').hover(function(){
      $(this).css({'background-color':'#DD4C39'});
      }, function(){
        $(this).css({'background-color':'#3acab1'});
      });
    $('.linkedin').hover(function(){
      $(this).css({'background-color':'#01AEF2'});
      }, function(){
        $(this).css({'background-color':'#3acab1'});
      });
    $('.github').hover(function(){
      $(this).css({'background-color':'#000000'});
      }, function(){
        $(this).css({'background-color':'#3acab1'});
      });
  }
  });