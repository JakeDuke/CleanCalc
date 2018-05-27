var render_cc = function(container){
    var cc_container = document.getElementById(container);

    var number_input1 = document.createElement("input");
    number_input1.setAttribute("id", "number1");

    var number_input2 = document.createElement("input");
    number_input2.setAttribute("id", "number2");

    var operation = document.createElement("input");
    operation.setAttribute("id", "operation");

    var operate_button = document.createElement("button");
    operate_button.setAttribute("id", "opbutton");
    operate_button.setAttribute("class", "btn");
    operate_button.setAttribute("class", "primary");
    operate_button.setAttribute("type", "button");
    operate_button.innerHTML = "OPERATE";

    var n_c_display = document.createElement("p");
	n_c_display.setAttribute("id", "output");

    
    cc_container.appendChild(number_input1);
    cc_container.appendChild(number_input2);
    cc_container.appendChild(operation);
    cc_container.appendChild(operate_button);
    cc_container.appendChild(n_c_display);
    


    operate_button.addEventListener('click', cleancalc_handler);

}

render_cc("cc");