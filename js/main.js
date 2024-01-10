var toggle=document.getElementById('toggle')
var body=document.querySelector('body');
var link_github=document.querySelector('footer p a');
var form_nombre=document.querySelector('#form-nombre');
var form_email=document.querySelector('#form-email');
var form_asunto=document.querySelector('#form-asunto');
var form_mensaje=document.querySelector('#form-mensaje');
var form_boton=document.querySelector('#form-boton');
var border_bottom=document.querySelector('#contenedor_footer');
var border_bottom1=document.querySelector('#menu-item1');
var border_bottom2=document.querySelector('#menu-item2');
var border_bottom3=document.querySelector('#menu-item3');
var border_bottom4=document.querySelector('#menu-item4');
var border_bottom5=document.querySelector('#menu-item5');
var border_bottom6=document.querySelector('#menu-item6');
var border_bottom7=document.querySelector('#menu-item7');
var border_bottom8=document.querySelector('#menu-item8');
var border_bottom9=document.querySelector('#menu-item9');
var border_bottom10=document.querySelector('#menu-item10');
var border_bottom11=document.querySelector('#menu-item11');
var border_bottom12=document.querySelector('#menu-item12');
var border_bottom13=document.querySelector('#menu-item13');
var border_bottom14=document.querySelector('#menu-item14');
var border_bottom15=document.querySelector('#menu-item15');
var border_bottom16=document.querySelector('#menu-item16');

toggle.onclick=function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active');
    link_github.classList.toggle('active');
    form_nombre.classList.toggle('active');
    form_email.classList.toggle('active');
    form_asunto.classList.toggle('active');
    form_mensaje.classList.toggle('active');
    form_boton.classList.toggle('active');
    border_bottom.classList.toggle('active');
    border_bottom1.classList.toggle('active');
    border_bottom2.classList.toggle('active');
    border_bottom3.classList.toggle('active');
    border_bottom4.classList.toggle('active');
    border_bottom5.classList.toggle('active');
    border_bottom6.classList.toggle('active');
    border_bottom7.classList.toggle('active');
    border_bottom8.classList.toggle('active');
    border_bottom9.classList.toggle('active');
    border_bottom10.classList.toggle('active');
    border_bottom11.classList.toggle('active');
    border_bottom12.classList.toggle('active');
    border_bottom13.classList.toggle('active');
    border_bottom14.classList.toggle('active');
    border_bottom15.classList.toggle('active');
    border_bottom16.classList.toggle('active');
}