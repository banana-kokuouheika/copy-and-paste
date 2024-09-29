  $(".donotcopypaste").bind
  ("contextmenu", function(e)
  {return false;});
  $("body").mousedown 
  (function(e)
  {return false;}
  );