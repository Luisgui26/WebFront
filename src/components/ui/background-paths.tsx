"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-neutral-300 dark:text-neutral-700"  
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.02}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({ title }: { title: string }) {
    const words = title.split(" ");

    return (
        <header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#fafafa]">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <div className="mb-6 inline-flex border border-neutral-200 bg-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-neutral-500 shadow-sm">
                        Agência Digital
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter text-neutral-950">
                        {words.map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: wordIndex * 0.05 + letterIndex * 0.015, type: "spring", stiffness: 100, damping: 20 }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-2 mb-12 text-lg md:text-xl text-neutral-500 max-w-2xl font-normal leading-relaxed"
                    >
                        Criamos sites rápidos, modernos e focados em resultados. Sem excessos, projetados para destacar a sua marca e atrair os clientes certos para o seu negócio 24 horas por dia.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center font-sans"
                    >
                        <Button
                            className="cursor-pointer rounded-full px-8 py-6 text-base font-semibold bg-neutral-950 hover:bg-neutral-800 text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <span>Ver planos</span>
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            className="cursor-pointer rounded-full px-8 py-6 text-base font-semibold border-neutral-200 text-neutral-900 bg-white hover:bg-neutral-50 hover:text-blue-600 transition-all hover:-translate-y-1"
                            onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                        >
                            <MessageCircle className="mr-2 w-5 h-5 transition-colors" />
                            <span>Falar conosco</span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
}
