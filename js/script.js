const el= document.querySelector("#text");
const text ="Seja bem-vindo ao meu site de currículo! Este é o lugar onde você pode aprender tudo sobre mim, minhas habilidades e experiências profissionais. Aqui você encontrará um resumo das minhas qualificações, incluindo minha formação acadêmica, experiência de trabalho, habilidades e conhecimentos. Estou entusiasmado em compartilhar minha história com você e espero que este site lhe dê uma visão clara do que posso oferecer. Sou dedicado e apaixonado pelo que faço, e espero que isso transpareça através do meu currículo. Obrigado por visitar meu site de currículo e estou ansioso para conversar com você em breve.";
const interval = 30;

function showtext(el, text ,interval){

    const char = text.split("").reverse();
    
    const typer = setInterval(() => {

    if(!char.length){
        return clearInterval(typer);
    }

    const next = char.pop();

    el.innerHTML += next;
    
    }, interval);
}
showtext(el, text, interval);""