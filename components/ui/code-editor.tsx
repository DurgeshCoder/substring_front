"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

// Beautiful synthwave / dark modern VS Code aesthetic
const codeSnippet = `import { Substring } from '@future/dev';

/**
 * Mastering the art of software engineering
 * 100% Practical. 0% BS.
 */
export async function LaunchCareer() {
  const developer = await Substring.enroll({
    track: 'Full Stack Mastery',
    skills: ['Java', 'Spring Boot', 'React', 'DSA'],
    mindset: 'Unstoppable'
  });

  return await developer.getHired({
    role: 'Software Development Engineer',
    package: 'High Growth'
  });
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
        }, 35); // slightly faster typing for impact

        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <div className="w-full max-w-[500px] mx-auto rounded-xl overflow-hidden shadow-2xl bg-[#0d1117] border border-[rgba(255,255,255,0.1)] font-mono text-[13px] sm:text-sm">

            {/* Window Controls & Tab - GitHub Dark Theme vibe */}
            <div className="bg-[#161b22] border-b border-[rgba(255,255,255,0.05)] flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#ff5f56]/20" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#ffbd2e]/20" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#27c93f]/20" />
                </div>

                <div className="flex bg-[#0d1117] rounded-md border border-[rgba(255,255,255,0.1)] px-3 py-1 flex-1 mx-4 max-w-[200px] justify-center text-center">
                    <div className="flex items-center gap-2 text-xs text-[#8b949e]">
                        <Terminal className="w-3.5 h-3.5 text-[#58a6ff]" />
                        <span>career.ts</span>
                    </div>
                </div>

                <div className="w-10"></div> {/* Spacer for centering the tab bar */}
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto min-h-[340px]">
                <pre className="whitespace-pre-wrap leading-loose">
                    <code dangerouslySetInnerHTML={{
                        __html: text.replace(
                            /(import|from|async|function|export|await|return|const)/g,
                            '<span class="text-[#ff7b72] font-semibold">$&</span>' // keywords - red/pink
                        ).replace(
                            /'[^']*'/g,
                            '<span class="text-[#a5d6ff]">$&</span>' // strings - light blue
                        ).replace(
                            /\/\*[\s\S]*?\*\/|\/\/.*/g,
                            '<span class="text-[#8b949e] italic">$&</span>' // comments - grey
                        ).replace(
                            /(Substring|LaunchCareer)/g,
                            '<span class="text-[#d2a8ff] font-semibold">$&</span>' // Classes - purple
                        ).replace(
                            /\b(developer|track|skills|mindset|role|package)\b/g,
                            '<span class="text-[#79c0ff]">$&</span>' // Variables - blue
                        )
                    }} />
                    <motion.span
                        animate={{ opacity: cursorVisible ? 1 : 0 }}
                        className="inline-block w-1.5 h-[1.1em] bg-[#58a6ff] ml-0.5 align-middle"
                    />
                </pre>
            </div>

            {/* Status Bar */}
            <div className="bg-[#161b22] px-4 py-1.5 text-[11px] text-[#8b949e] flex justify-between items-center border-t border-[rgba(255,255,255,0.05)]">
                <div className="flex gap-4">
                    <span>Ln 17, Col 1</span>
                    <span>UTF-8</span>
                    <span>TypeScript React</span>
                </div>
                <div>Substring Workspace</div>
            </div>

        </div>
    );
}
