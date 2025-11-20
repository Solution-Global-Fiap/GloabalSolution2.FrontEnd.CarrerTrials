import { Sparkles } from "lucide-react"
import { Card } from "./ui/card"
import { Progress } from "./ui/progress"
import { useEffect, useState } from "react"
import { useTheme } from "./ThemeProvider"

const cx = (...classes) => classes.filter(Boolean).join(" ")

function Dots() {
    return (
        <div className="flex gap-1">
            {[0, 150, 300].map((delay) => (
                <div
                    key={delay}
                    className="size-1.5 rounded-full bg-primary animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                />
            ))}
        </div>
    )
}

function StepItem({ step, index, current }) {
    const state = index < current ? "done" : index === current ? "active" : "todo"

    const wrapperClass = cx(
        "flex items-start gap-4 p-4 rounded-xl border transition-all",
        state === "done" && "border-primary/30 bg-primary/5",
        state === "active" && "border-primary bg-primary/10 shadow-sm",
        state === "todo" && "border-border bg-card opacity-50"
    )

    const bubbleClass = cx(
        "size-8 rounded-full flex items-center justify-center text-(--text-inverted)",
        state === "done" && "bg-primary/20",
        state === "active" && "bg-primary animate-pulse",
        state === "todo" && "bg-muted text-muted-foreground"
    )

    return (
        <div className={wrapperClass}>
            <div className={bubbleClass}>
                {state === "done" ? "✓" : index + 1}
            </div>

            <div className="flex-1 pt-1">
                <p className={cx(
                    "font-medium",
                    state === "active" ? "text-foreground" : "text-card-foreground"
                )}>
                    {step.label}
                </p>

                {state === "active" && (
                    <div className="flex items-center gap-2 mt-2">
                        <Dots />
                        <span className="text-xs text-muted-foreground">Processando...</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function AnalysisCard({ steps, onComplete }) {
    const { theme } = useTheme();
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

    const animateTo = (start, end, duration) => {
        return new Promise((resolve) => {
            const startTime = performance.now();

            const tick = (now) => {
                const elapsed = now - startTime;
                const progressRatio = Math.min(elapsed / duration, 1);

                const value = Math.round(start + (end - start) * progressRatio);
                setProgress(value);

                if (progressRatio < 1) {
                    requestAnimationFrame(tick);
                } else {
                    resolve();
                }
            };

            requestAnimationFrame(tick);
        });
    };

    useEffect(() => {
        let cancelled = false;

        const run = async () => {
            let value = 0;
            const increment = 100 / steps.length;

            for (let i = 0; i < steps.length; i++) {
                if (cancelled) return;

                setCurrentStep(i);

                const { duration } = steps[i];
                const target = Math.round((i + 1) * increment);

                await animateTo(value, target, duration);

                value = target;

                await new Promise((r) => setTimeout(r, 300));
            }

            if (!cancelled && onComplete) onComplete();
        };

        run();
        return () => {
            cancelled = true;
        };
    }, [steps, onComplete]);

    return (
        <Card className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center size-30 rounded-2xl bg-primary/10 mb-2 relative">
                    {theme === "light" ? (
                        <img src="/Logo-Light.png" className="h-20 w-20" />
                    ) : (
                        <img src="/Logo-Dark.png" className="h-20 w-20" />
                    )}
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold">
                    Analisando sua trajetória profissional
                </h1>
            </div>

            {/* Progress */}
            <div className="space-y-3">
                <Progress value={progress} className="h-3" />
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                        {Math.round(progress)}% completo
                    </span>

                    <span className="text-muted-foreground">
                        Passo {currentStep + 1} de {steps.length}
                    </span>
                </div>
            </div>

            {/* Steps */}
            <div className="space-y-4 pt-4">
                {steps.map((step, i) => (
                    <StepItem key={step.id} step={step} index={i} current={currentStep} />
                ))}
            </div>

            {/* Fun fact */}
            <div className="bg-accent rounded-xl p-6 space-y-2">
                <p className="text-sm font-semibold text-accent-foreground">
                    Você sabia?
                </p>
                <p className="text-sm text-muted-foreground">
                    Nossa IA analisa milhares de trajetórias de carreira para criar um roteiro personalizado para você.
                </p>
            </div>
        </Card>
    )
}