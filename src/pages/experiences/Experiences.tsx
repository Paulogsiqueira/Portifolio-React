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
              <p className="experiences-title">07/2022 até 10/2023</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <p className="experiences-title">Nexum Tecnologia</p>
              <p className="experiences-subtitle">Cargo: Desenvolvedor Front-end</p>
              <div className="experiences-details">
                <span className="experiences-subtitle">Principais atividades:
                <ul>
                  <li>Desenvolvimento de interfaces com HTML, CSS e JavaScript</li>
                  <li>Consumo de API</li>
                  <li>Integrações e automações com Java</li>
                  <li>Testes manuais de código</li>
                  <li>Suporte ao cliente com a plataforma e dúvidas de JavaScript</li>
                  <li>Automação de processos de Cooperativas de Crédito</li>
                  <li>Desenvolvi soluções de automação utilizando JavaScript e Java que resultaram em reduções de 30% no tempo de execução de processos.</li>
                </ul>
                  </span>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <p className="experiences-title">05/2024 até Atual</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <p className="experiences-title">AnyTask Soluções</p>
              <p className="experiences-subtitle">Cargo: Desenvolvedor Fullstack</p>
              <div className="experiences-details">
                <span className="experiences-subtitle">Principais atividades:
                <ul>
                  <li>
                    <strong>Responsabilidades:</strong>
                    <ul>
                      <li>Desenvolvimento de interfaces com Java, JSF, PrimeFaces e CSS</li>
                      <li>Automação de processos com Java 11 e Selenium</li>
                      <li>Uso de PostgreSQL, Git e RedMine</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Resultados:</strong>
                    <ul>
                      <li>Desenvolvimento de funcionalidades no BPMS</li>
                      <li>Feature de rastreamento de pedidos</li>
                      <li>Correções e melhorias contínuas</li>
                      <li>Criação de dashboards operacionais</li>
                      <li>Integrações com sistemas de terceiros</li>
                      <li>Unificação de processos com RPA</li>
                      <li>Migração de sistema legado para Vue</li>
                    </ul>
                  </li>
                </ul>
               </span>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <p className="experiences-title">04/2024 até 03/2025</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <p className="experiences-title">Claire co</p>
              <p className="experiences-subtitle">Cargo: Desenvolvedor Front-end</p>
              <div className="experiences-details">
                <span className="experiences-subtitle">Tecnologias usadas:
                <ul>
                  <li>HTML, CSS, Tailwind, Shadcn, Apexchart</li>
                  <li>React, Next</li>
                  <li>Git, Insomnia/Postman, Figma</li>
                </ul>
              </div>
              <div className="experiences-details">
                <span className="experiences-subtitle">Principais atividades:</span>
                <br />
                <strong>Desenvolvimento do módulo Claire ID:</strong>
                <ul>
                  <li>Questionário baseado no modelo Dawkins</li>
                  <li>Cálculo de perfil com base nas respostas</li>
                  <li>Ofertas de acompanhamento personalizado</li>
                  <li>Visualização do perfil com gráficos</li>
                </ul>
                
                <br />
                <strong>Desenvolvimento do módulo Claire Pass:</strong>
                <ul>
                  <li>Importação de planilhas com dados dos funcionários</li>
                  <li>Exibição por departamentos e índices psicológicos</li>
                  <li>Tela de controle para edição e liberação de acessos</li>
                </ul>
                </span>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Experiences;
