function calcularHuella(){
    let luz = parseInt($("#luz").val())
    let gas = parseInt($("#gas").val())
    let gasolina = parseInt($("#gasolina").val())
    let familiares = parseInt($("#familiares").val())
    if (luz && gas && gasolina && familiares){
      let resultado=((luz*0.39)+(gas*0.20)+(gasolina*2.32))/familiares
      $("#resultado").val(resultado+' Kg CO2')
    }
  }