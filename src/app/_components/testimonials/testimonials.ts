export interface Testimonial {
    id: number;
    name: string;        // pode ser só o primeiro nome (ex.: "Cristiane M.")
    segment: string;     // "Residencial", "Comercial", "Empresarial"
    service: string;     // "Instalação", "Higienização", "Manutenção"...
    text: string;
    rating?: number;     // só preencha se o cliente realmente deu essa nota
    placeholder?: boolean; // true = espaço provisório, NÃO aparece no site publicado
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Cristiane M.",
        segment: "Residencial",
        service: "Instalação",
        text: "Profissionais extremamente cuidadosos e limpos. Instalaram os dois splits aqui de casa sem fazer sujeira na parede e testaram tudo antes de ir embora. Recomendo muito o padrão WC!",
        rating: 5,
        placeholder: false,
    },
    {
        id: 2,
        name: "Marcos V.",
        segment: "Residencial",
        service: "Higienização",
        text: "O ar da sala estava com um cheiro ruim e quase não gelava. Depois da higienização profunda feita pela equipe, parece que compramos um aparelho novo. Ótimo atendimento em Valença!",
        rating: 5,
        placeholder: false,
    },
    {
        id: 3,
        name: "Juliana",
        segment: "Comercial",
        service: "Instalação",
        text: "Precisávamos de agilidade para não atrapalhar o atendimento da nossa loja no centro. A WC Refrigeração cumpriu o prazo perfeitamente e o ambiente ficou super confortável para os clientes.",
        rating: 5,
        placeholder: false,
    },
    {
        id: 4,
        name: "Dr. Roberto.",
        segment: "Empresarial",
        service: "Manutenção",
        text: "Contratamos o plano de manutenção preventiva para a clínica. A pontualidade e o rigor técnico com os testes de vácuo e estanqueidade fazem toda a diferença para o nosso espaço.",
        rating: 5,
        placeholder: false,
    },
    {
        id: 5,
        name: "Ana Paula G.",
        segment: "Residencial",
        service: "Manutenção",
        text: "Meu aparelho parou de funcionar do nada num calor de 35°C. Chamei a WC e fui atendida rapidamente. Diagnóstico certeiro, preço justo e muita honestidade. Estão de parabéns!",
        rating: 5,
        placeholder: false,
    },
];