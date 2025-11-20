import AnalysisCard from "@/components/AnalysisCard";
import AIChat from "@/components/chat/AIChat";
import { useState } from "react";
import { challengesData } from "@/data/challengesData";
import ChallengeCard from "../components/ChallengeCard.jsx";
import TimelineNode from "../components/TimelineMode.jsx";
import { Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import QuizModal from "@/components/QuizModal.jsx";
import UploadModal from "@/components/UploadModal.jsx";

const STEPS = {
  CHAT: "chat",
  ANALYSIS: "analysis",
  CHALLENGES: "challenges",
};

const analysisSteps = [
  { id: 1, label: "Entendendo seu objetivo de carreira", duration: 1500 },
  { id: 2, label: "dentificando as habilidades necessárias", duration: 2000 },
  { id: 3, label: "Mapeando as dependências de habilidades", duration: 2000 },
  { id: 4, label: "Criando um roteiro personalizado", duration: 1500 },
  { id: 5, label: "Gerando recursos de aprendizagem", duration: 1000 },
];

let collectedAnswers = [];

const mockConversation = [
  "Legal, antes de começarmos, qual é o objetivo da sua carreira hoje?",
  "Entendi. E qual experiência você já tem nessa área?",
  "Perfeito. Qual dessas áreas você sente mais dificuldade atualmente?",
  "Ótimo. Em quanto tempo você espera alcançar seu próximo nível profissional?",
  "Interessante! O que mais te motiva nessa jornada?",
  "Beleza, acho que já tenho o suficiente. Pronta pra analisar seu perfil!"
];

export default function ChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const levels = [...new Set(challengesData.map((c) => c.level))];
  const [currentStep, setCurrentStep] = useState(() => {
    const stored = localStorage.getItem("chatCompleted");
    const chatCompleted = stored === "true";
    return chatCompleted 
      ? STEPS.CHALLENGES
      : STEPS.CHAT
  });
  const [careerData, setCareerData] = useState(null);
  const [chatLocked, setChatLocked] = useState(false);
  const [mockIndex, setMockIndex] = useState(1);

  const handleChatComplete = async (careerGoal) => {
    setCareerData({ careerGoal });
    setCurrentStep(STEPS.ANALYSIS);
    localStorage.setItem("chatCompleted", true);
  };

  const handleMessage = async (message) => {
    if (chatLocked) return;

    await new Promise((r) => setTimeout(r, 600));

    if (mockIndex > 0) {
      collectedAnswers.push({ question: mockConversation[mockIndex - 1], answer: message });
    }

    const isLast = mockIndex >= mockConversation.length - 1;

    const reply = mockConversation[mockIndex];
    setMockIndex(Math.min(mockIndex + 1, mockConversation.length - 1));

    if (isLast) {
      setChatLocked(true);
      setTimeout(async () => {
        await handleChatComplete(collectedAnswers[0]?.answer ?? message);
      }, 2000);
    }

    return {
      reply,
      isComplete: isLast,
      careerGoal: isLast ? collectedAnswers[0]?.answer ?? message : null
    };
  };

  if (currentStep === STEPS.CHAT) {
    return (
      <div className="h-[calc(98vh-3rem)] flex items-center justify-center p-4">
        <div className="w-full max-w-4xl h-full">
          <AIChat
            disabled={chatLocked}
            initialMessage={mockConversation[0]}
            onSendMessage={handleMessage}
          />
        </div>
      </div>
    );
  }

  if (currentStep === STEPS.ANALYSIS) {
    return (
      <div className="h-[calc(98vh-3rem)] flex items-center justify-center p-4">
        <div
          className="w-full max-w-3xl"
          style={{
            transform: 'scale(0.85)',
          }}
        >
          <AnalysisCard
            steps={analysisSteps}
            careerGoal={careerData?.careerGoal}
            onComplete={() => setCurrentStep(STEPS.CHALLENGES)}
          />
        </div>
      </div>
    );
  }

  if (currentStep == STEPS.CHALLENGES) {
    return (
      <div
        className="min-h-screen my-20"
        style={{ background: "var(--bg)", color: "var(--text)" }}
      >
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold">Sua jornada de aprendizado</h1>
            <p style={{ color: "var(--subtle-text)" }}>
              Eu quero me tornar desenvolvedor full-stack
            </p>
          </div>

          <div
            className="relative mx-auto p-10 rounded-3xl"
            style={{
              background: "var(--bg-section)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="absolute left-1/2 top-0 bottom-0 w-[3px] z-0"
              style={{ background: "var(--border)" }}
            />

            <div className="flex flex-col items-center mb-20 z-10">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary">
                <Rocket className="h-6 w-6" />
              </div>
              <p className="mt-2 font-semibold">Start Here</p>
              <span className="text-sm" style={{ color: "var(--subtle-text)" }}>
                Level 1
              </span>
            </div>

            {levels.map((level) => (
              <div key={level}>
                <div className="flex justify-center my-10">
                  <Badge
                    style={{
                      background: "var(--primary)",
                      color: "var(--on-primary)",
                      padding: "6px 14px",
                      borderRadius: "8px",
                    }}
                  >
                    Level {level}
                  </Badge>
                </div>

                {challengesData
                  .filter((c) => c.level === level)
                  .map((challenge, index) => (
                    <div key={challenge.id} className="relative z-10">
                      <TimelineNode />

                      {selectedChallenge?.type === "Quiz" && (
                        <QuizModal
                          challenge={selectedChallenge}
                          onClose={() => setSelectedChallenge(null)}
                        />
                      )}

                      {(selectedChallenge?.type === "Código" ||
                        selectedChallenge?.type === "Projeto") && (
                        <UploadModal
                          challenge={selectedChallenge}
                          onClose={() => setSelectedChallenge(null)}
                        />
                      )}

                      <ChallengeCard
                        challenge={challenge}
                        align={index % 2 === 0 ? "right" : "left"}
                        onClick={() => setSelectedChallenge(challenge)}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
