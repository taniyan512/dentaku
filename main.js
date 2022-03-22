function get_calc(btn) {
  let result = document.getElementById("display");
  let btn_value = btn.value;
  const operator = ["+","-","*","/"];
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
        if(operator.includes(result.value.slice(-1)) == true && operator.includes(btn_value) == true  ) {
          const f = result.value.slice(0,-1);
          result.value = f + btn_value;
        } else {
          result.value += btn_value;
        }
             }
             }
}