/* exported $timerBtn */ 
var $timerBtn = (function(){  
  var cfg = {
    container: '.main',
    title: '确定',
    time: 9,
    enable: false,
    clickHandler: null
  };   

  var n = cfg.time;

  var init = function(conf){
    $.extend(cfg, conf);
    var $container = $(cfg.container);      
    var DOM = '<input type="button" class="timer-button" value="' + cfg.title + ' (' + n + 's)" disabled>';     
    $container.html(DOM);         
    var $btnAgree = $container.find('.timer-button');                        
    //$btnAgree.attr('disabled','disabled');
            
    var timer = window.setInterval(function(){                  
      n--;                 
      if(n === 0){                          
        window.clearInterval(timer);                                
        $btnAgree.removeAttr('disabled');                                      
        $btnAgree.val(cfg.title);                                                           
      } else{                               
        $btnAgree.val(cfg.title +  '('+ n + ' s)');  
      }                                
    },1000);
            
    $btnAgree.click(function(){                  
      cfg.clickHandler();                              
    });
  };

  var remove = function(){
    var $btn = $('.main').find('.$timer-button');

    $btn.remove();
  };

  return {init:init, remove:remove};
}());//闭包：函数的立即执行表达式

function TimerBtn(conf){
  var cfg = {        
    container: '.main',            
    title: '确定',                
    time: 9,                   
    enable: false,                        
    clickHandler: null                              
  }; 
  
  var n = cfg.time;

  this.init = function(conf){      
    $.extend(cfg, conf);                
    var $container = $(cfg.container);      
    var DOM = '<input type="button" class="timer-button" value="' + cfg.title + ' (' + n + 's)" disabled>';     
    $container.html(DOM);                              
    var $btnAgree = $container.find('.timer-button');                                                  
    //$btnAgree.attr('disabled','disabled');
    
    var timer = window.setInterval(function(){                            
      n--;                           
      if(n === 0){                                            
        window.clearInterval(timer);                                                 
        $btnAgree.removeAttr('disabled');                                                      
        $btnAgree.val(cfg.title);                                                                           
      } else{                                                       
        $btnAgree.val(cfg.title +  '('+ n + ' s)');                        
      }                                        
    },1000);

    $btnAgree.click(function(){                                
      cfg.clickHandler();                                          
    });
  };
}






/*
//var n = 6; //不能有全局变量
$(function(){ //= window.onload = function(){
  var n = 6;
  var $container = $('.main');
  var DOM = '<input type="button" class="timer-button" value="同意(6 s)" disabled>';
  $container.html(DOM);
  var $btnAgree = $container.find('.timer-button');
  
  //$btnAgree.css({
  //  'font-size':'1.2em',
  //  'height':'60px',
  //  'width':'150px'
 // });
  

  
 // var $timerBtn = $('<input type="button" class="timer-button" value="同意(6 s)" disabled>');
  // $timerBtn.appendTo($container);
 // $container.append($timerBtn);
 // var $btnAgree = $('input[type="button"]');
  
  $btnAgree.attr('disabled','disabled');

  var timer = window.setInterval(function(){
    n--;
    if(n === 0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');
    } else{
      $btnAgree.val('同意('+ n + ' s)');
    }
  },1000);

  $btnAgree.click(function(){
    alert('就知道你会同意的！');
  });
});
*/
