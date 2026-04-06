import { BackgroundPaths } from "@/components/ui/background-paths"
import './App.css'
import { Layout, Smartphone, Zap, Search, PenTool, Code, Check, CheckCircle2, Goal, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-950 selection:bg-blue-200">
      
      {/* Hero Section */}
      <BackgroundPaths title="Menos ruído. Mais conversão." />

      {/* Problema Section */}
      <section className="py-24 px-4 container mx-auto bg-white" id="problema">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-neutral-900">Seu site reflete o valor do seu negócio?</h2>
          <p className="text-lg text-neutral-500 font-normal leading-relaxed">Em um mundo poluído digitalmente, a clareza destaca. Se o seu site não for intuitivo e rápido, você está entregando seus clientes para a concorrência.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 border border-neutral-100 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-neutral-50">
          {[
            { title: "Sem presença clara", desc: "Seu cliente não acha rapidamente o que procura." },
            { title: "Desatualizado", desc: "Design pesado que causa rejeição logo nos primeiros segundos." },
            { title: "Não responsivo", desc: "Experiência ruim em celulares afasta quase 80% dos visitantes." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col mb-4 md:mb-0">
              <span className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-widest">{`0${i + 1}`}</span>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solução & Diferenciais */}
      <section className="py-24 bg-neutral-950 text-white" id="solucao">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">O essencial, projetado com excelência.</h2>
            <p className="text-lg text-neutral-400 font-light">Eliminamos as distrações para focar naquilo que realmente importa: a experiência do usuário e os objetivos de venda da sua empresa.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-neutral-800 pt-16">
            <Feature icon={<Zap />} title="Desempenho Extremo" desc="Sites que carregam instantaneamente." />
            <Feature icon={<Layout />} title="Layout Minimalista" desc="Leitura fluida sem poluição visual." />
            <Feature icon={<Smartphone />} title="Mobile First" desc="Adaptável organicamente a qualquer tela limpa." />
            <Feature icon={<Search />} title="Indexação Perfeita" desc="Códigos seguindo os padrões do Google." />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-32 container mx-auto px-4 bg-white" id="servicos">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Nossas Soluções</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ServiceCard title="Sites Institucionais" price="Presença" features={["Design único e limpo", "Multifuncional", "Blog Corporativo", "Otimização Essencial"]} />
          <ServiceCard highlight title="Landing Pages" price="Alta Conversão" features={["Página de conversão dedicada", "Foco na ação imediata", "Carregamento relâmpago", "Botões interativos"]} />
          <ServiceCard title="Lojas E-commerce" price="Vendas e Gestão" features={["Plataforma elegante", "Fluxo de caixa transparente", "Gestão intuitiva", "Checkouts rápidos"]} />
        </div>
      </section>

      {/* Processo */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-800" id="processo">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">Simples de ponta a ponta.</h2>
            <p className="text-neutral-400 text-lg">Direto ao ponto, sem metodologias complicadas.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Step icon={<Goal />} title="Alinhamento" desc="Entendemos a essência do seu negócio." />
            <Step icon={<Layout />} title="Protótipo Limpo" desc="Design pautado no minimalismo." />
            <Step icon={<Code />} title="Desenvolvimento" desc="Engenharia com as melhores ferramentas." />
            <Step icon={<Globe />} title="Publicação" desc="Acompanhamento e entrega com segurança." />
          </div>
        </div>
      </section>

      {/* Pricing / Planos */}
      <section className="py-32 bg-neutral-50 px-4" id="planos">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Investimento em qualidade</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <PricingCard title="Básico" subtitle="Pequenos negócios" price="1.990" features={["1 Página moderna (LP)", "Hospedagem 1 ano", "Botão de WhatsApp", "Suporte no Lançamento"]} />
          <PricingCard highlight title="Empresarial" subtitle="Solução completa" price="3.490" features={["Até 6 páginas", "Painel Exclusivo de conteúdo", "Ferramentas de SEO Inclusas", "Atualizações mensais básicas", "Suporte por e-mail e Whats"]} />
          <PricingCard title="Global" subtitle="Presença expansiva" price="5.990" features={["Design customizado completo", "Sistema E-commerce orgânico", "Checkout simples", "Treinamento para equipe", "SLA Premium"]} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-neutral-950 text-center border-t border-neutral-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">O menos é mais.<br/>E vende mais.</h2>
          <p className="text-xl mb-12 text-neutral-400 font-light max-w-2xl mx-auto">Dê o próximo passo na digitalização da sua marca. Trabalhe com um visual que transmite exatamente a confiança que sua empresa merece.</p>
          <Button size="lg" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-8 text-lg rounded-full shadow-xl hover:-translate-y-1 transition-all" onClick={() => window.open("https://wa.me/5511999999999", "_blank")}>
            Começar meu projeto agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 text-neutral-500 font-light border-t border-neutral-100">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-neutral-950 text-xl font-bold mb-4 tracking-tighter">Studio NexWeb.</h3>
            <p className="max-w-xs text-sm leading-relaxed">Design rigoroso e engenharia moderna para uma presença digital incomparável.</p>
          </div>
          <div>
            <h4 className="text-neutral-900 font-semibold mb-4 text-sm">Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#servicos" className="hover:text-blue-600 transition-colors">Abordagem</a></li>
              <li><a href="#planos" className="hover:text-blue-600 transition-colors">Planos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-neutral-900 font-semibold mb-4 text-sm">Contato</h4>
            <p className="mb-2 text-sm">ola@nexweb.com.br</p>
            <p className="mb-2 text-sm">(11) 99999-9999</p>
            <p className="text-sm">São Paulo - SP, Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-transparent border-none flex flex-col items-start">
      <div className="text-blue-400 mb-4 pb-2 border-b-[3px] border-blue-600 w-12 inline-block">
        {React.cloneElement(icon, { size: 32, strokeWidth: 1.5, className: "mb-2" })}
      </div>
      <h3 className="text-xl font-bold mb-2 tracking-tight mt-4 text-white">{title}</h3>
      <p className="text-neutral-400 font-light leading-relaxed">{desc}</p>
    </div>
  )
}

function ServiceCard({ title, price, features, highlight }: { title: string, price: string, features: string[], highlight?: boolean }) {
  return (
    <div className={`p-10 rounded-[2rem] transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] border ${highlight ? 'border-neutral-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)]' : 'border-neutral-100 bg-neutral-50'} flex flex-col`}>
      <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-4 block">{price}</span>
      <h3 className="text-2xl font-bold mb-8 tracking-tighter text-neutral-900">{title}</h3>
      <ul className="space-y-5 mb-12 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start text-neutral-600">
            <CheckCircle2 size={18} className="text-blue-600 mr-4 mt-[3px] flex-shrink-0" />
            <span className="leading-snug">{f}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full py-6 rounded-2xl border cursor-pointer ${highlight ? 'bg-neutral-950 text-white hover:bg-neutral-800' : 'bg-white text-neutral-900 border-neutral-200 hover:bg-neutral-50'}`} variant={highlight ? "default" : "outline"} onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}>
        Conhecer Modelo
      </Button>
    </div>
  )
}

function Step({ title, desc, icon }: { title: string, desc: string, icon: any }) {
  return (
    <div className="flex flex-col items-center justify-center text-center group">
      <div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center text-blue-500 mb-6 border border-neutral-800 group-hover:bg-white group-hover:text-blue-600 transition-all">
        {React.cloneElement(icon, { size: 32, strokeWidth: 1.5 })}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tighter text-white">{title}</h3>
      <p className="text-neutral-400 font-light leading-relaxed">{desc}</p>
    </div>
  )
}

function PricingCard({ title, subtitle, price, features, highlight }: { title: string, subtitle: string, price: string, features: string[], highlight?: boolean }) {
  return (
    <div className={`relative p-10 md:p-12 rounded-[2rem] transition-all border ${highlight ? 'border-neutral-950 bg-neutral-950 text-white scale-100 lg:scale-105 shadow-2xl z-10' : 'border-neutral-200 bg-white text-neutral-900'} flex flex-col`}>
      <div className="mb-8">
        <h3 className="text-2xl font-bold tracking-tighter mb-2">{title}</h3>
        <p className={`text-sm ${highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>{subtitle}</p>
      </div>
      <div className="mb-10">
        <span className="text-lg font-semibold align-top mr-1">R$</span>
        <span className="text-5xl font-black tracking-tighter">{price}</span>
      </div>
      <ul className="space-y-5 mb-14 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start">
            <Check size={20} className={`${highlight ? 'text-blue-400' : 'text-blue-600'} mr-4 flex-shrink-0`} strokeWidth={2.5} />
            <span className={`${highlight ? 'text-neutral-300' : 'text-neutral-600'} leading-relaxed font-light`}>{f}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full py-7 text-sm font-bold uppercase tracking-wider rounded-2xl cursor-pointer ${highlight ? 'bg-blue-600 hover:bg-blue-700 text-white border-none' : 'bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 shadow-sm'}`} variant={highlight ? "default" : "outline"} onClick={() => window.open("https://wa.me/5511999999999", "_blank")}>
        Selecionar
      </Button>
    </div>
  )
}

import React from 'react'

export default App
