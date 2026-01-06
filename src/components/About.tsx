import React, { type JSX } from "react";
import  imagePerfil from "../assets/imagemPerfil.png";

export default function About(): JSX.Element | null {
    return <section id="about" className="w-full  pt-8 pb-8 pl-32 pr-32 flex flex-col justify-between items-start">
        <div className="flex mb-1" >
            <div className=" flex-1 min-h-72 justify-around">
                <h2 className="text-3xl font-bold mb-3">Desenvolvedor web</h2>
                <p className="text-sm mb-1 text-justify">Sou estudante de Análise e Desenvolvimento de Sistemas, atualmente no 4º semestre pela UniAteneu, com foco em desenvolvimento web e backend.</p>
                <p className="text-sm mb-1 text-justify">Participei de um bootcamp de Desenvolvimento Web Full Stack, onde adquiri experiência prática com React no front-end e com Node.js, Express e MySQL no back-end, desenvolvendo aplicações completas e compreendendo a integração entre interface, servidor e banco de dados.</p>
                <p className="text-sm mb-1 text-justify">Durante a graduação, desenvolvi projetos utilizando Python, com os frameworks FastAPI e Django, aplicando conceitos de APIs REST, organização de código, regras de negócio e persistência de dados. Também adquiri compreensão inicial sobre padrões de projeto (Design Patterns) e metodologias ágeis, aplicando esses conceitos na estruturação do código e no desenvolvimento colaborativo.</p>
            </div>
            <div className="rounded-md max-w-lg flex-1 text-center ml-auto flex justify-end ">
                <img src={imagePerfil} alt="Foto de perfil" className   ="w-110 h-72 rounded-md object-contain" />
            </div>
        </div>
        <p className="text-sm mb-1 text-justify">Atualmente, participo do programa Geração Tech, onde estou cursando Inteligência Artificial Generativa, com o objetivo de me manter atualizado em relação às demandas do mercado e ampliar minha visão sobre o uso de IA no desenvolvimento de soluções modernas.</p>
        <p className="text-sm mb-1 text-justify">Sempre tive interesse em tecnologia e desenvolvimento de software, o que me levou a explorar tanto o front-end quanto o back-end. Tenho facilidade em transitar entre as duas áreas e busco evoluir como desenvolvedor full stack, contribuindo com soluções bem estruturadas, funcionais e escaláveis.</p>

    </section>
}