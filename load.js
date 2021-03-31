
  function loading(){
      (function checkDom() {
      var state = document.readyState
      if(state == "loaded" || state == "complete"){
        document.getElementById("loading").style.display = "none"
      }else{
          setTimeout(checkDom,200)
      }})()
  }

setTimeout(loading,5000)

//loading()