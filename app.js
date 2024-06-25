
function dabaya(a){

  document.getElementById('inp').value += a
}


function eq() {
  let a = document.querySelector('#inp')
  a.value = eval(a.value)
}

function clearall() {
  document.getElementById('inp').value = ''
  
}
