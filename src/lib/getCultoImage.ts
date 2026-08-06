export function getCultoImage(nome: string) {

  const culto = nome.toLowerCase();


  if (culto.includes("terça") || culto.includes("terca")) {
    return "/images/cultos/culto-3.png";
  }


  if (culto.includes("quinta")) {
    return "/images/cultos/culto-2.png";
  }


  if (
    culto.includes("domingo") ||
    culto.includes("celebração") ||
    culto.includes("celebracao")
  ) {
    return "/images/cultos/culto-1.png";
  }


  return "/images/cultos/culto-1.png";

}