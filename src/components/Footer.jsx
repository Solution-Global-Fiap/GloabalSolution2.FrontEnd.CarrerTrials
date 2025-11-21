import CareerTrialsLogo from "./CareerTrialsLogo";

export default function Footer() {
    return (
        <footer className="border-t py-12" style={{ background: "var(--bg)", color: "var(--text)", borderColor: "var(--border)" }}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <CareerTrialsLogo/>
                        <p className="text-sm text-muted-foreground">
                            Desenvolvendo carreiras com o poder da inteligência artificial.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold">Produto</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div>Funcionalidades</div>
                            <div>Preços</div>
                            <div>Casos de uso</div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold">Empresa</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div>Sobre</div>
                            <div>Blog</div>
                            <div>Carreiras</div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold">Suporte</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div>Ajuda</div>
                            <div>Contato</div>
                            <div>Status</div>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground" style={{ borderColor: "var(--border)" }}>
                    © 2025 CareerTrials. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}