import { Sparkles } from "lucide-react"
import { Card } from "./ui/card"
import { Progress } from "./ui/progress"

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
    const state =
        index < current ? "done" : index === current ? "active" : "todo"

    const wrapperClass = cx(
        "flex items-start gap-4 p-4 rounded-xl border transition-all",
        state === "done" && "border-primary/30 bg-primary/5",
        state === "active" && "border-primary bg-primary/10 shadow-sm",
        state === "todo" && "border-border bg-card opacity-50"
    )

    const bubbleClass = cx(
        "size-8 rounded-full flex items-center justify-center",
        state === "done" && "bg-primary/20 text-primary",
        state === "active" && "bg-primary text-primary-foreground animate-pulse",
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
                        <span className="text-xs text-muted-foreground">Processing...</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function AnalysisCard({ progress, steps, currentStep, careerGoal }) {
    return (
        <Card className="p-8 md:p-12 space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center size-20 rounded-2xl bg-primary/10 mb-2 relative">
                    <Sparkles className="size-10 text-primary animate-pulse" />
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold">
                    Analyzing your career path
                </h1>

                <p className="text-lg text-muted-foreground">{careerGoal}</p>
            </div>

            {/* Progress */}
            <div className="space-y-3">
                <Progress value={progress} className="h-3" />
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                        {Math.round(progress)}% complete
                    </span>

                    <span className="text-muted-foreground">
                        Step {currentStep + 1} of {steps.length}
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
                    Did you know?
                </p>
                <p className="text-sm text-muted-foreground">
                    Our AI analyzes thousands of career paths to create your personalized roadmap.
                </p>
            </div>
        </Card>
    )
}