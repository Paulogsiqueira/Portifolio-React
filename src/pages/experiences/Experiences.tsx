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
          
            <TimelineOppositeContent>
              <p className="experiences-title"> 07/2022 até 10/2023</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <p className="experiences-title">Nexum Tecnologia</p>
              <p className="experiences-subtitle">
                Cargo: Desenvolvedor Front-end
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
                  <li>Desenvolvi soluções de automação utilizando JavaScript e Java que resultaram
em reduções de 30% no tempo de execução de processos.</li>
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
                Cargo: Desenvolvedor Fullstack
              </p>
            
              <p className="experiences-details">
                <span className="experiences-subtitle">
                  Principais atividades:
                </span>
                <ul>
  <li><strong>Responsabilidades:</strong></li>
  <ul>
    <li><strong>Desenvolvimento Front-End:</strong> Criação de telas interativas com Java, JSF, PrimeFaces e CSS.</li>
    <li><strong>Desenvolvimento de RPA:</strong> Automação de processos com Java 11 e Selenium.</li>
    <li><strong>Outras Ferramentas:</strong> PostgreSQL, Git e RedMine para controle de versão, banco de dados e gestão de tarefas.</li>
  </ul>
  <li><strong>Resultados:</strong></li>
  <ul>
    <li>Desenvolvi novas funcionalidades no produto BPMS da empresa, incluindo um módulo para acompanhamento de chamados de suporte.</li>
    <li>Implementei uma feature de rastreamento de pedidos em plataforma de cliente, otimizando a comunicação entre sistema e usuário final.</li>
    <li>Realizei correções e melhorias contínuas tanto no produto interno quanto em soluções personalizadas para clientes.</li>
    <li>Criei telas e dashboards que facilitaram a visualização do andamento de fluxos operacionais dentro do BPMS.</li>
    <li>Integrei sistemas de terceiros para centralizar informações e melhorar a experiência do usuário.</li>
    <li>Desenvolvi RPAs unificando processos antes distribuídos em três plataformas distintas em uma única solução centralizada.</li>
    <li>Migração de sistema legado em JSP para Vue.</li>
  </ul>
</ul>

              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <p className="experiences-title"> 04/2024 até 03/2025</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <p className="experiences-title">Claire co</p>
              <p className="experiences-subtitle">
                Cargo: Desenvolvedor Front-end
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
