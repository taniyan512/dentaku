function get_calc(btn) {
  let result = document.getElementById("display");
  let operator = document.getElementsByClassName('operator');
  let btn_value = btn.value;
  let operator_value = operator.value;
      if(btn_value == "=") {
        result.value = eval(result.value);
      } else if (btn_value == "AC") {
        result.value = "";
      } else {
        if (result.value == "0") {
           result.value = btn_value;
      } else if(result.value == "00") {
           result.value = btn_value
      } else {
        if(result.value.slice(-1) == operator_value) {
          const f = result.value.slice(0,-1);
          result.value = f + operator_value;
        } else {
          result.value += btn_value
        }  
      } 
      } 
}