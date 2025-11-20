import AnalysisCard from "@/components/AnalysisCard";
import AIChat from "@/components/chat/AIChat";
import { useState } from "react";

const STEPS = {
  CHAT: 'chat',
  ANALYSIS: 'analysis',
  CHALLENGES: 'challenges'
};

const analysisSteps = [
  { id: 1, label: "Understanding your career goal", duration: 1500 },
  { id: 2, label: "Identifying required skills", duration: 2000 },
  { id: 3, label: "Mapping skill dependencies", duration: 2000 },
  { id: 4, label: "Creating personalized roadmap", duration: 1500 },
  { id: 5, label: "Generating learning resources", duration: 1000 },
];

export default function ChallengesPage() {
  const [currentStep, setCurrentStep] = useState(STEPS.ANALYSIS);
  const [careerData, setCareerData] = useState(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState(0);

  const handleChatComplete = async (careerGoal) => {
    // Store the career goal
    setCareerData({ careerGoal });

    // Move to analysis
    setCurrentStep(STEPS.ANALYSIS);

    // Simulate analysis progress
    await runAnalysis();

    // Move to challenges
    setCurrentStep(STEPS.CHALLENGES);
  };

  const runAnalysis = async () => {
    let totalDuration = 0;
    const totalTime = analysisSteps.reduce((sum, step) => sum + step.duration, 0);

    for (let i = 0; i < analysisSteps.length; i++) {
      setCurrentAnalysisStep(i);

      await new Promise(resolve => setTimeout(resolve, analysisSteps[i].duration));

      totalDuration += analysisSteps[i].duration;
      setAnalysisProgress((totalDuration / totalTime) * 100);
    }
  };

  const handleMessage = async (message) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });
    const data = await response.json();

    if (data.isComplete) {
      await handleChatComplete(data.careerGoal);
    }

    return data.reply;
  };


  if (currentStep === STEPS.CHAT) {
    return (
      <div className="h-full w-full">
        <AIChat
          initialMessage="Olá! Sou sua mentora de carreira. Como posso ajudar?"
          onSendMessage={handleMessage}
        />
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
            careerGoal={careerData?.careerGoal}
            currentStep={currentAnalysisStep}
            progress={analysisProgress}
            steps={analysisSteps}
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
