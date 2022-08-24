var cerrar=new Image(256, 256);
cerrar.src="cerrar.png";

var abrir=new Image(256, 256);
menu.src="menu-icon.png";

function visualizar()
{	
	if(barraresponsiva.style.visibility=="hidden"){
	document.images["ver"].src=menu.src;
	/*document.images["ver"].style.right="0px";*/
	barraresponsiva.style.visibility="visible";
	contentmenu.style.visibility="hidden";
	menu.style.visibility="hidden";
	cuerpo.style.overflow="scroll";

}else{document.images["ver"].src=cerrar.src;
		/*document.images["ver"].style.right="15px";*/
	barraresponsiva.style.visibility="hidden";
	contentmenu.style.visibility="visible";
	menu.style.visibility="visible";
	cuerpo.style.overflow="hidden";
}

}
nodoVer=document.getElementById("ver");
nodoVer.setAttribute("onclick", "visualizar();");
