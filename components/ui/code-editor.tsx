"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const codeSnippet = `   import { Substring } from 'future';

// Empowering your tech journey
function App() {
  return (
    <Substring>
      <Learn />
      <Build />
      <Scale />
    </Substring>
  );
}`;

export function CodeEditor() {
    const [text, setText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < codeSnippet.length) {
                setText((prev) => prev + codeSnippet.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);

        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <div className="w-full max-w-lg mx-auto bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-[#333] font-mono text-sm">
            {/* Window Controls & Tab */}
            <div className="bg-[#252526] flex items-center border-b border-[#1e1e1e]">
                <div className="px-4 py-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="bg-[#1e1e1e] px-4 py-2 text-xs text-white/90 flex items-center gap-2 border-t-2 border-blue-500">
                    <span className="text-blue-400">⚛️</span> App.tsx
                    <span className="ml-2 text-white/50 hover:text-white cursor-pointer">×</span>
                </div>
            </div>

            {/* Code Area */}
            <div className="p-4 text-gray-300 overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                    <code dangerouslySetInnerHTML={{
                        __html: text.replace(
                            /import|from|function|return|const/g,
                            '<span class="text-[#c678dd]">$&</span>'
                        ).replace(
                            /'[^']*'/g,
                            '<span class="text-[#98c379]">$&</span>'
                        ).replace(
                            /\/\/.*/g,
                            '<span class="text-[#5c6370]">$&</span>'
                        ).replace(
                            /<[^>]*>/g,
                            '<span class="text-[#e06c75]">$&</span>'
                        )
                    }} />
                    <motion.span
                        animate={{ opacity: cursorVisible ? 1 : 0 }}
                        className="inline-block w-2 h-4 bg-blue-500 ml-1 align-middle"
                    />
                </pre>
            </div>
        </div>
    );
}
