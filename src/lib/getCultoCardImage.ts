export function getCultoCardImage(nomeDia:string){

  if(nomeDia.includes("Terça")){
    return "/images/cultos/culto-3.webp";
  }


  if(nomeDia.includes("Quinta")){
    return "/images/cultos/culto-2.webp";
  }


  return "/images/cultos/culto-1.webp";

}
