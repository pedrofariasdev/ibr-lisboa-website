export function getCultoCardImage(nomeDia:string){

  if(nomeDia.includes("Terça")){
    return "/images/cultos/culto-3.png";
  }


  if(nomeDia.includes("Quinta")){
    return "/images/cultos/culto-2.png";
  }


  return "/images/cultos/culto-1.png";

}