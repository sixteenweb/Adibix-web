function calculate_profile_size_windows () {

  var ignoretop=58;
  var Gratio=1.6180

  var realHeight=$(window.top).height();

  if(realHeight<=600)
    return 0;

  var UseHeight = realHeight-ignoretop;

  var bottomWindow = Math.round(UseHeight/Gratio);
  var topWindow = UseHeight - bottomWindow;

  var sizes= new Array();

  sizes[0]= topWindow;
  sizes[1]=bottomWindow

  return sizes;
  //return "Real: "+realHeight+" Usable: "+UseHeight+" TopWindow: "+topWindow+" bottomWindow: "+bottomWindow;

}


function calculate_profile_size_windows2 () {

  var ignoretop=49;
 
  var realHeight=$(window.top).height();

  var leftWindow = realHeight-ignoretop+31;

  var bottomWindow = realHeight-ignoretop-237;

  var sizes= new Array();

  sizes[0]= leftWindow;
  sizes[1]= bottomWindow;
  
  return sizes;

}