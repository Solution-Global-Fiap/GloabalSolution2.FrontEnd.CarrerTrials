import AnalysisCard from "@/components/AnalysisCard";
import AIChat from "@/components/chat/AIChat";
import { useEffect, useState } from "react";
import ChallengeCard from "../components/ChallengeCard.jsx";
import TimelineNode from "../components/TimelineMode.jsx";
import { Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import QuizModal from "@/components/QuizModal.jsx";
import UploadModal from "@/components/UploadModal.jsx";
import { checkIsAlreadyCompleted } from "@/utils/completeChallenge.js";
import { getIsChatCompleted, getOrCreateSession, getStoredChallenges, getUser, removeCurrentSession, setIsChatCompleted, setStoredChallenges } from "@/hooks/useAuth.jsx";

const STEPS = {
  CHAT: "chat",
  ANALYSIS: "analysis",
  CHALLENGES: "challenges",
};

const analysisSteps = [
  { id: 1, label: "Entendendo seu objetivo de carreira", duration: 1500 },
  { id: 2, label: "Identificando as habilidades necessárias", duration: 2000 },
  { id: 3, label: "Mapeando as dependências de habilidades", duration: 2000 },
  { id: 4, label: "Criando um roteiro personalizado", duration: 1500 },
  { id: 5, label: "Gerando recursos de aprendizagem", duration: 1000 },
];

export default function ChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [challenges, setChallenges] = useState(() => getStoredChallenges()?? []);
  const [currentStep, setCurrentStep] = useState(() => {
    const chatCompleted = getIsChatCompleted() === "true";
    return chatCompleted 
      ? STEPS.CHALLENGES
      : STEPS.CHAT
  });
  const [chatLocked, setChatLocked] = useState(false);
  const [session, setSession] = useState(null);
  const levels = [...new Set(challenges.map((challenge) => challenge.level))];
  const user = getUser();

  useEffect(() => {
    getOrCreateSession(user.id).then(setSession)
  }, [user.id]);

  const handleChatComplete = async () => {
    setIsChatCompleted(true);
    setCurrentStep(STEPS.ANALYSIS);
    let response = await fetch(import.meta.env.VITE_AI_API + `/session/${session.session_id}/${user.id}/complete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      console.error("Não foi possível fazer a requisição: " + await response.text());
      return;
    }

    const reply = await response.json();

    setChallenges(reply.challenges?? []);
    setStoredChallenges(reply.challenges?? []);
    setTimeout(() => {
      setCurrentStep(STEPS.CHALLENGES);
      removeCurrentSession();
    }, 500);
  };

  const handleMessage = async (message) => {
    if (chatLocked) return;

    let isLast = false;

    let response = await fetch(import.meta.env.VITE_AI_API + `/session/${session.session_id}/${user.id}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({message: message})
    });

    if (!response.ok) {
      console.error("Não foi possível fazer a requisição: " + await response.text());
      return;
    }

    let reply = (await response.json()).response;

    if (reply.includes("GENERATE_CHALLENGES")) {
      isLast = true;
      setChatLocked(true);
      setTimeout(async () => {
        await handleChatComplete();
      }, 2000);

      reply = "Beleza, acho que já tenho o suficiente. Pronto pra analisar seu perfil!"
    }

    return {
      reply,
      isComplete: isLast
    };
  };

  if (currentStep === STEPS.CHAT) {
    return (
      <div className="h-[calc(98vh-3rem)] flex items-center justify-center pt-20 p-4">
        <div className="w-full max-w-4xl h-full">
          <AIChat
            disabled={chatLocked}
            initialMessage={"Legal, antes de começarmos, qual é o objetivo da sua carreira hoje?"}
            onSendMessage={handleMessage}
          />
        </div>
      </div>
    );
  }

  if (currentStep === STEPS.ANALYSIS) {
    return (
      <div className="h-[calc(98vh-3rem)] flex items-center pt-20 justify-center p-4">
        <div
          className="w-full max-w-3xl"
          style={{
            transform: 'scale(0.85)',
          }}
        >
          <AnalysisCard
            steps={analysisSteps}
            onComplete={() => {}}
          />
        </div>
      </div>
    );
  }

  if (currentStep === STEPS.CHALLENGES) {
    return (
      <div
        className="min-h-screen my-20"
        style={{color: "var(--text)" }}
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
              className="absolute left-1/2 -translate-x-0.5 top-10 bottom-50 w-[3px] z-0"
              style={{ background: "var(--border)" }}
            />

            <div className="flex flex-col items-center mb-20 z-10 sticky">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary text-(--text-inverted)">
                <Rocket className="h-6 w-6" />
              </div>
              <p className="mt-2 font-semibold">Começe aqui</p>
              <span className="text-sm" style={{ color: "var(--subtle-text)" }}>
                Level 1
              </span>
            </div>

            {levels
              .sort()
              .map((level) => (
              <div key={level}>
                <div className="flex justify-center my-10 sticky">
                  <Badge
                    style={{
                      background: "var(--primary)",
                      color: "var(--text-inverted)",
                      padding: "6px 14px",
                      borderRadius: "8px",
                    }}
                  >
                    Level {level}
                  </Badge>
                </div>

                {challenges
                  .filter((challenge) => challenge.level === level)
                  .map((challenge, index) => (
                    <div key={challenge.id} className="relative z-10">
                      <TimelineNode isChecked={checkIsAlreadyCompleted(challenge)} />
                      <ChallengeCard
                        challenge={challenge}
                        align={index % 2 === 0 ? "right" : "left"}
                        onClick={() => setSelectedChallenge(challenge)}
                        isChecked={checkIsAlreadyCompleted(challenge)}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        {selectedChallenge?.type === "Quiz" && (
          <QuizModal
            challenge={selectedChallenge}
            onClose={() => setSelectedChallenge(null)}
          />
        )}

        {["Code", "Project"].includes(selectedChallenge?.type) && (
          <UploadModal
            challenge={selectedChallenge}
            onClose={() => setSelectedChallenge(null)}
          />
        )}
      </div>
    );
  }
}
