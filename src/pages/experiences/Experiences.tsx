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
                <span className="experiences-subtitle">Principais atividades:</span>
                <ul>
                  <li>Desenvolvimento de interfaces com HTML, CSS e JavaScript</li>
                  <li>Consumo de API</li>
                  <li>Integrações e automações com Java</li>
                  <li>Testes manuais de código</li>
                  <li>Suporte ao cliente com a plataforma e dúvidas de JavaScript</li>
                  <li>Automação de processos de Cooperativas de Crédito</li>
                  <li>Desenvolvi soluções de automação utilizando JavaScript e Java que resultaram em reduções de 30% no tempo de execução de processos.</li>
                </ul>
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
                <span className="experiences-subtitle">Principais atividades:</span>
                <ul>
                  <li>
                    <strong>Responsabilidades:</strong>
                    <ul>
                      <li>Desenvolvimento de interfaces com Java, JSF, PrimeFaces e CSS</li>
                      <li>Automação de processos com Java 11 e Selenium</li>
