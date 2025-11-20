import AnalysisCard from "@/components/AnalysisCard";
import AIChat from "@/components/chat/AIChat";
import { useState } from "react";

const STEPS = {
  CHAT: 'chat',
  ANALYSIS: 'analysis',
  CHALLENGES: 'challenges'
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
  const [currentStep, setCurrentStep] = useState(STEPS.CHAT);
  const [careerData, setCareerData] = useState(null);
  const [chatLocked, setChatLocked] = useState(false);
  const [mockIndex, setMockIndex] = useState(1);

  const handleChatComplete = async (careerGoal) => {
    setCareerData({ careerGoal });
    setCurrentStep(STEPS.ANALYSIS);
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
      <div className="flex items-center justify-center">
        <div
          className="w-full max-w-3xl"
          style={{
            transform: 'scale(0.85)',
            transformOrigin: 'center center'
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

  return (
    <>
    </>
  );
}
