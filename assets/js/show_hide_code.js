function show_hide(elementID){
  element=document.getElementById(elementID);
  emText=element.parentElement.querySelector("em");
  if(element.className!="code_lines_hide"){
    className="code_lines_hide"
    text="показать"
  } else {
    className="code_lines_show"
    text="скрыть"
  }
  element.className=className;
  emText.innerHTML=text;
}
