import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { useState } from "react";

import { completeChallenge } from "../utils/completeChallenge";


export default function UploadModal({ challenge, onClose }) {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState(null);

  const [aiStatus, setAiStatus] = useState("idle");
  const [xpResult, setXpResult] = useState(null);


  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const uploaded = e.dataTransfer.files[0];
    if (!uploaded) return;

    if (!uploaded.name.endsWith(".zip")) {
      setError("O arquivo deve ser .zip");
      return;
    }

    setError(null);
    setFile(uploaded);
  };

  const handleSendToAI = () => {
    setAiStatus("analyzing");

    setTimeout(() => {
      const result = completeChallenge(challenge);
      setXpResult(result);

      setAiStatus("done");
    }, 2000);
  };

  const resetFlow = () => {
    setError(null);
    setAiStatus("idle");
    setFile(null);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-background text-foreground border border-border">

        <DialogHeader>
          <DialogTitle>{challenge.title}</DialogTitle>
        </DialogHeader>

        {error && (
          <div className="p-4 bg-red-500/20 text-red-600 border border-red-500 rounded-lg">
            <p className="font-semibold">{error}</p>

            <Button className="mt-4 bg-red-600 text-white" onClick={resetFlow}>
              Tentar novamente
            </Button>
          </div>
        )}

        {aiStatus === "analyzing" && (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full" />
            <p className="text-center text-green-500 font-medium">
              A IA está analisando seu arquivo...
            </p>
          </div>
        )}

        {aiStatus === "done" && (
          <div className="text-center py-6">
            <p className="text-green-500 font-semibold text-lg">
              ✓ Código analisado com sucesso!
            </p>

            {xpResult && (
              <div className="bg-secondary p-4 rounded-lg border border-border my-4">
                {xpResult.alreadyCompleted ? (
                  <>
                    <p className="font-semibold text-yellow-500">
                      Você já concluiu este desafio antes!
                    </p>
                    <p className="opacity-80 text-sm">Nenhum XP foi ganho desta vez.</p>
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

            <Button className="mt-6 bg-primary text-white" onClick={onClose}>
              Fechar
            </Button>
          </div>
        )}

        {aiStatus === "idle" && !error && (
          <>
            <div
              className={`border-2 border-dashed rounded-xl p-10 text-center transition
              ${dragging ? "bg-primary/10 border-primary" : "border-border"}
            `}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={() => setDragging(true)}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >
              {!file ? (
                <p className="text-sm">
                  Arraste seu <b>.zip</b> aqui
                </p>
              ) : (
                <p className="font-medium">📦 {file.name}</p>
              )}
            </div>

            <div className="flex justify-end mt-4">
              <Button
                disabled={!file}
                onClick={handleSendToAI}
                className="bg-primary text-white"
              >
                Enviar
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
