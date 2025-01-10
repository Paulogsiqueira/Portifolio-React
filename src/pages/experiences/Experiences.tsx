import "@/styles/experiences/Experiences.sass";
import { ReactElement } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

const Experiences: React.FC = (): ReactElement => {
  return (
    <div className="experiences-container" id="about">
      <h2>Experiências</h2>
      <div className="experiences-timeline">
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent>
              <p className="experiences-title">03/2020 até 06/2022</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <p className="experiences-title">Bruna Semijóias</p>
              <p className="experiences-subtitle">
                Cargo: Analista de Melhorias Contínuas
              </p>
              <p className="experiences-details">
                <span className="experiences-subtitle">
                  Principais atividades:
                </span>{" "}
                Análise do processo de produção de maneira geral, elaboração um
                fluxograma do processo produtivo, sinalizar possíveis melhorias,
                conversar compreender dificuldades que cada setor enfrenta e
                buscar soluções, diminuição de custos e tempo de produção,
                contato com fornecedores para cotação de produtos e
                matéria-prima, calculo de preços inseridos na produção de
                mercadorias
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <p className="experiences-title"> 08/2022 até 08/2023</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <p className="experiences-title">Nexum Tecnologia</p>
              <p className="experiences-subtitle">
                Cargo Inicial: Estagiário de Desenvolvimento
              </p>
              <p className="experiences-subtitle">
                Cargo Final: Desenvolvedor Front-end
              </p>
              <p className="experiences-details">
                <span className="experiences-subtitle">
                  Principais atividades:
                </span>
                <ul>
                  <li>
                    Desenvolvimento de interfaces com HTML, CSS e JavaScript
                  </li>
                  <li>Consumo de API</li>
                  <li>Integrações e automações com Java</li>
                  <li>Testes manuais de código</li>
                  <li>
                    Suporte ao cliente com a plataforma e dúvidas de JavaScript
                  </li>
                  <li>Automação de processos de Cooperativas de Crédito</li>
                </ul>
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <p className="experiences-title"> 05/2024 até Atual</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <p className="experiences-title">AnyTask Soluções</p>
              <p className="experiences-subtitle">
                Cargo: Desenvolvedor Júnior IV
              </p>
              <p className="experiences-details">
                <span className="experiences-subtitle">
                  Principais atividades:
                </span>
                <ul>
                  <li>
                    Desenvolvimento de telas interativas com Java, JSF,
                    PrimeFaces e CSS
                  </li>
                  <li>Desenvolvimento de RPA com Java 11, Selenium</li>
                  <li>Outras ferramentas: PostgreSQL, Git, RedMine</li>
                </ul>
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <p className="experiences-title"> 06/2024 até Atual</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <p className="experiences-title">Claire co</p>
              <p className="experiences-subtitle">
                Cargo: Desenvolvedor Front-end Jr
              </p>
              <p className="experiences-details">
                <span className="experiences-subtitle">
                  Tecnologias usadas:
                </span>
                <ul>
                  <li>HTML, CSS, Tailwind, Shadcn, Apexchart</li>
                  <li>React, Next</li>
                  <li>Git, Insomnia/Postman, Figma</li>
                </ul>
              </p>
              <p className="experiences-details">
                <span className="experiences-subtitle">
                  Principais atividades:
                </span>
                <br></br>
                <span className="experiences-subtitle">
                  Desenvolvimento do módulo para acompanhamento de líderes
                  (Claire ID)
                </span>
                <ul>
                  <li>Questionário baseado no modelo Dawkins</li>
                  <li>
                    Calculo baseado nas alternativas para definição do perfil do
                    usuário
                  </li>
                  <li>
                    Oferta para acompanhamento personalizado se necessário
                  </li>
                  <li>
                    Exibição de características do perfil do usuário através de
                    gráficos
                  </li>
                </ul>
                <br></br>
                <span className="experiences-subtitle">
                  Desenvolvimento do módulo para empresas (Claire Pass)
                </span>
                <ul>
                  <li>
                    Importação de planilha com funcionários que irão acessar a
                    plataforma
                  </li>
                  <li>
                    Exibição de informações dos funcionários por índices do
                    teste psicológico e divisão por departamentos
                  </li>
                  <li>
                    Tela de controle para empresa liberar acessos, editar dados
                    e consultador índices dos funcionários
                  </li>
                </ul>
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Experiences;
