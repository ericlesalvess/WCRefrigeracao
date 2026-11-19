import instalacaoImg from "../../../../public/instalacao.jpeg";
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
        image: instalacaoImg,
        button: "Solicitar Orçamento",
        icon: AirVent,
    },
    {
        id: 2,
        title: "Desinstalação",
        description: "Remoção cuidadosa do equipamento, com recolhimento correto do gás, ideal para mudanças, trocas ou reformas.",
        image: desinstalacaoImg,
        button: "Solicitar Orçamento",
        icon: Unplug,
    },
    {
        id: 3,
        title: "Manutenção Preventiva",
        description: "Revisões periódicas que evitam falhas, reduzem o consumo de energia e aumentam a vida útil do seu equipamento.",
        image: preventivaImg,

    },
    {
        id: 4,
        title: "Manutenção Corretiva",
        description: "Diagnóstico e reparo rápido quando o equipamento apresenta falhas, para você voltar a ter conforto o quanto antes.",
        image: corretivaImg,
    },
    {
        id: 5,
        title: "Higienização Completa",
        description: "Limpeza profunda das partes internas do equipamento, para um ar mais saudável e o melhor desempenho do aparelho.",
        image: higienizacaoImg,

    },
    {
        id: 6,
        title: "Higienização na Bolsa",
        description: "Higienização feita com bolsa coletora, que protege o ambiente e evita respingos durante a limpeza do aparelho.",
        image: higienizacaoBolsaImg,
    },
    {
        id: 7,
        title: "Venda de Equipamentos",
        description: "Ar-condicionado das principais marcas, com indicação da capacidade ideal para o seu ambiente e instalação com a garantia WC.",
        image: vendaImg,
    },
    {
        id: 8,
        title: "Projeto e Orçamento",
        description: "Nós vamos até você: avaliamos o ambiente, indicamos quantos aparelhos você precisa, qual o modelo ideal e o valor da instalação.",
        image: projetoImg,
    },
    {
        id: 9,
        title: "Infraestrutura",
        description: "Infraestrutura completa para climatização: tubulação, drenagem e parte elétrica, feita com padrão técnico e garantia.",
        image: infraestruturaImg,
    },
];