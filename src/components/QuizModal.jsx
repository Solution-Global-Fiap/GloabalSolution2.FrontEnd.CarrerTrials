import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { completeChallenge } from "../utils/completeChallenge";

export default function QuizModal({ challenge, onClose }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const [xpResult, setXpResult] = useState(null);

  const questions = challenge.questions;

  const handleNext = () => {
    let newScore = score;
    if (selected === questions[current].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
    } else {
      const result = completeChallenge(challenge, newScore, questions.length);
      setXpResult(result);
      setFinished(true);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent
        className="max-w-lg text-foreground border-border border"
        overlayClassName="dialog-overlay"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {challenge.title}
          </DialogTitle>
        </DialogHeader>

        {finished ? (
          <div className="flex flex-col items-center gap-6 py-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Quiz Finalizado!</h2>
              <p className="text-muted-foreground mt-1">
                Você acertou <strong>{score}</strong> de {questions.length}{" "}
                perguntas.
              </p>
            </div>

            {xpResult && (
              <div className="bg-secondary p-4 rounded-lg text-center w-full border border-border">
                {!xpResult.gotMaxScore ? (
                  <>
                    <p className="font-semibold text-red-500">
                      Você não alcançou a pontuação máxima.
                    </p>
                    <p className="opacity-80 text-sm">
                      Tente novamente para ganhar XP!
                    </p>
                  </>
                ) : xpResult.alreadyCompleted ? (
                  <>
                    <p className="font-semibold text-yellow-500">
                      Você já ganhou XP deste desafio anteriormente!
                    </p>
                    <p className="opacity-80 text-sm">
                      Continue praticando para melhorar.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-green-500">
                      +{xpResult.gainedXP} XP Ganho!
                    </p>
                    <p className="opacity-80 text-sm">
                      XP Total: {xpResult.userXP} — Nível {xpResult.userLevel}
                    </p>
                  </>
                )}
              </div>
            )}

            <div className="w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center text-3xl font-bold">
              {Math.round((score / questions.length) * 100)}%
            </div>

            <Button
              onClick={onClose}
              className="w-full"
            >
              Fechar
            </Button>
          </div>
        ) : (
          <>
            <h3 className="font-medium mb-4 text-lg">
              {questions[current].question}
            </h3>

            <div className="flex flex-col gap-3 mb-4">
              {questions[current].choices.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelected(c)}
                  className={`
                    w-full text-left text-white font-semibold rounded-xl py-3
                  `}
                  style={{
                    background:
                      selected === c ? "var(--primary)" : "var(--muted)",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={!selected}
              className="w-full text-white font-semibold rounded-xl py-3"
              style={{ background: "var(--primary)" }}
            >
              {current + 1 === questions.length ? "Finalizar" : "Próxima"}
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
