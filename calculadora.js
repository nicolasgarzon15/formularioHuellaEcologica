function calcularHuella(){
    let luz = parseInt($("#luz").val())
    let gas = parseInt($("#gas").val())
    let gasolina = parseInt($("#gasolina").val())
    if (luz && gas && gasolina){
      let resultado=luz+gas+gasolina
      $("#resultado").val(resultado+' ton CO2')
    }
  }