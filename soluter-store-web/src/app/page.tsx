'use client';

import React from "react";
import Image from "next/image";
import ImageHome from "@/assets/home.png";
import HighlightedPoints from "@/components/HighlightedPoints/highlightedPoints";
import "@/utils/animationStyle.css";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="h-screen p-2 text-center bg">
      <div className="flex pt-24">
        <div className="w-2/4 m-auto">
          <h1 className=" text-6xl font-bold animate-text-focus-in">
            Bem-vindo à Soluter Store
          </h1>
          <h2 className="text-3xl font-bold">
            Inovando com a Moeda Digital Sol!
          </h2>
          <p className="text-base text-justify p-2.5 m-5">
            Na Soluter Store, adentra-se um universo futurista onde a inovação
            se encontra com a praticidade da nossa moeda digital exclusiva, o
            Sol. Somos sua loja de referência para produtos tecnológicos de
            ponta, todos disponíveis para compra com a moeda digital mais
            brilhante do mercado.
          </p>
          <button
            className="bg-custom-yellow hover:bg-custom-yellow-darker text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/Products")}
          >
            Comprar -&gt;{" "}
          </button>
        </div>
        <div className="w-2/4 m-1.5">
          <Image
            className="mx-auto tilt-in-fwd-tr"
            src={ImageHome}
            alt="Moeda"
            width={"500"}
          />
        </div>
      </div>
      <div className="flex justify-around mt-12">
        <HighlightedPoints
          icon="fi fi-rr-paper-plane"
          title="Transações Eficientes"
          description='Desperte para o futuro das compras com pagamentos rápidos e seguros em "Sol". Abandone as antigas moedas e abrace a revolução da moeda digital.'
        />
        <HighlightedPoints
          icon="fi fi-rr-add"
          title="Gama Tecnológica"
          description="Descubra o que há de mais avançado em tecnologia na Soluter Store. De smartphones inovadores a wearables e acessórios high-tech, temos a vanguarda digital que você procura."
        />
        <HighlightedPoints
          icon="fi fi-rr-dollar"
          title="Experiência de Compra Digital"
          description="Navegue por nossas prateleiras virtuais e descubra a magia do mundo da tecnologia moderna."
        />
        <HighlightedPoints
          icon="fi fi-rr-star"
          title="Ofertas e Benefícios Digitais"
          description='Ganhe vantagens digitais em cada compra com o "Sol". Descontos exclusivos, atualizações automáticas e ofertas personalizadas.'
        />
      </div>
    </main>
  );
}
