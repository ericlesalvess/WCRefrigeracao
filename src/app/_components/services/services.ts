//import instalacaoImg from "../../../../public/instalacao.jpeg";
import desinstalacaoImg from "../../../../public/desinstalacao.jpg";
import preventivaImg from "../../../../public/preventiva.jpeg";
import corretivaImg from "../../../../public/corretiva.jpeg";
import higienizacaoImg from "../../../../public/higienizacao.jpeg";
import higienizacaoBolsaImg from "../../../../public/higienizacaoBolsa.jpeg";
import vendaImg from "../../../../public/venda.jpg";
import projetoImg from "../../../../public/projeto.jpeg";
import infraestruturaImg from "../../../../public/infra.jpeg";

import {
    AirVent,
    Unplug,
    ClipboardCheck,
    Wrench,
    SprayCan,
    Droplets,
    ShoppingCart,
    DraftingCompass,
    PlugZap,
} from "lucide-react";

export const services = [
    {
        id: 1,
        title: "Instalação",
        description: "Instalação segura e técnica de equipamentos Split, Cassete e Piso-Teto, com teste de estanqueidade, procedimento de vácuo e testes finais de funcionamento.",
        image: "/instalacao.jpeg",
        button: "Solicitar Orçamento",
        icon: AirVent,
        whatsappMessage: "Olá! Gostaria de um orçamento para instalação de ar-condicionado.",
    },
    {
        id: 2,
        title: "Desinstalação",
        description: "Remoção cuidadosa do equipamento, com recolhimento correto do gás, ideal para mudanças, trocas ou reformas.",
        image: desinstalacaoImg,
        button: "Solicitar Orçamento",
        icon: Unplug,
        whatsappMessage: "Olá! Gostaria de um orçamento para desinstalação de ar-condicionado.",
    },
    {
        id: 3,
        title: "Manutenção Preventiva",
        description: "Revisões periódicas que evitam falhas, reduzem o consumo de energia e aumentam a vida útil do seu equipamento.",
        image: preventivaImg,
        button: "Agendar Manutenção",
        icon: ClipboardCheck,
        whatsappMessage: "Olá! Gostaria de agendar uma manutenção preventiva do meu ar-condicionado.",
    },
    {
        id: 4,
        title: "Manutenção Corretiva",
        description: "Diagnóstico e reparo rápido quando o equipamento apresenta falhas, para você voltar a ter conforto o quanto antes.",
        image: corretivaImg,
        button: "Chamar Técnico",
        icon: Wrench,
        whatsappMessage: "Olá! Meu ar-condicionado está com problema e preciso de um técnico.",
    },
    {
        id: 5,
        title: "Higienização Completa",
        description: "Limpeza profunda das partes internas do equipamento, para um ar mais saudável e o melhor desempenho do aparelho.",
        image: higienizacaoImg,
        button: "Agendar Higienização",
        icon: SprayCan,
        whatsappMessage: "Olá! Gostaria de agendar a higienização completa do meu ar-condicionado.",
    },
    {
        id: 6,
        title: "Higienização na Bolsa",
        description: "Higienização feita com bolsa coletora, que protege o ambiente e evita respingos durante a limpeza do aparelho.",
        image: higienizacaoBolsaImg,
        button: "Agendar Higienização",
        icon: Droplets,
        whatsappMessage: "Olá! Gostaria de agendar a higienização na bolsa do meu ar-condicionado.",
    },
    {
        id: 7,
        title: "Venda de Equipamentos",
        description: "Ar-condicionado das principais marcas, com indicação da capacidade ideal para o seu ambiente e instalação com a garantia WC.",
        image: vendaImg,
        button: "Consultar Modelos",
        icon: ShoppingCart,
        whatsappMessage: "Olá! Gostaria de saber mais sobre a venda de ar-condicionado.",
    },
    {
        id: 8,
        title: "Projeto e Orçamento",
        description: "Nós vamos até você: avaliamos o ambiente, indicamos quantos aparelhos você precisa, qual o modelo ideal e o valor da instalação.",
        image: projetoImg,
        button: "Agendar Visita",
        icon: DraftingCompass,
        whatsappMessage: "Olá! Gostaria de agendar uma visita para fazer o projeto e o orçamento de ar-condicionado.",
    },
    {
        id: 9,
        title: "Infraestrutura",
        description: "Infraestrutura completa para climatização: tubulação, drenagem e parte elétrica, feita com padrão técnico e garantia.",
        image: infraestruturaImg,
        button: "Falar com um Técnico",
        icon: PlugZap,
        whatsappMessage: "Olá! Preciso de infraestrutura para climatização. Podem me ajudar?",
    },
];