import { Button } from "@/components/ui/button";
import { Code2, Users, Brain } from "lucide-react";
import { useNavigate } from "react-router";
import { Routes } from "../routes/routes";
import FeatureCard from "../components/FeatureCard";
import GlobalThemeToggle from "@/components/GlobalThemeToggle";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <GlobalThemeToggle />
      <div className="w-full min-h-screen bg-(--bg) text-(--text)">
        <section
          className="min-h-[90vh] flex items-center 
            bg-linear-to-r 
            from-(--hero-from)
            via-(--hero-middle)
            to-(--hero-to)
            text-(--text-inverted)
            py-20"
        >
          <div className="max-w-6xl mx-auto text-center px-6">
            <span className="bg-white/10 text-blue-200 border border-white/20 px-4 py-1 rounded-full text-sm backdrop-blur-sm">
              Prepare-se para sua próxima entrevista
            </span>

            <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
              Desenvolva sua carreira
              <br />
              com <span className="text-blue-300">IA integrada</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100">
              CareerTrials conecta você com desafios personalizados, comunidade
              ativa e mentoria inteligente.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-(--bg) hover:bg-(--primary-hover) text-(--text-inverted)"
                onClick={() => navigate(Routes.Login)}
              >
                Começar agora
              </Button>

              <Button
                size="lg"
                className="bg-(--bg) hover:bg-(--primary-hover) text-(--text-inverted)"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-28 bg-(--bg-section) text-(--text)">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Tudo que você precisa para evoluir
              </h2>
              <p className="mt-3 text-(--text-secondary) max-w-xl mx-auto">
                Uma plataforma criada para desenvolvedores que querem ir mais
                longe.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mt-20">
              <FeatureCard
                icon={<Code2 size={32} />}
                color="blue"
                title="Desafios Personalizados"
                description="Receba desafios adaptados ao seu nível e área de atuação."
              />

              <FeatureCard
                icon={<Users size={32} />}
                color="green"
                title="Comunidade Ativa"
                description="Conecte-se com desenvolvedores e cresça com a comunidade."
              />

              <FeatureCard
                icon={<Brain size={32} />}
                color="purple"
                title="Mentoria com IA"
                description="IA que analisa seu perfil e orienta seu desenvolvimento."
              />
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-32 bg-(--bg-section)">
          <div className="container mx-auto px-4">
            <div
              className="max-w-4xl mx-auto text-center space-y-8 
            bg-linear-to-r from-(--hero-from) via-(--hero-middle) to-(--hero-to)
            rounded-3xl p-12 lg:p-16 shadow-[0_0_20px_var(--shadow)]"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                Pronto para acelerar sua carreira?
              </h2>

              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Junte-se a desenvolvedores que já estão evoluindo através da
                plataforma.
              </p>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate(Routes.Register)}
                className="text-lg hover:scale-105 transition-transform text-(--text-inverted)"
              >
                Começar Agora
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
