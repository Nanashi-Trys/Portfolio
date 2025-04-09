import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const bootAnimation = [
  "Booting Nanashi CLI System...",
  "Loading terminal modules...",
  "Authenticating terminal identity...",
  "Welcome to Nanashi Terminal Interface.",
  "Type 'help' for available commands."
];

const treeStructure = `Files
├── about.txt
├── contact.txt
├── skills.txt
├── tools.txt
├── recof.txt`;

const commands = {
  pwd: "/home/nanashi",
  whoami: "User: Nanashi | Role: Red Teamer | Status: Active",
  help: `Available commands:\nwhoami   |   pwd   |   Files   |   ls   |   cd [dir]   |   cat [file]   |   sudo su   |   nano [file]   |   echo [text]   |   date   |   clear   |   exit   |   say`,
  Files: treeStructure,
  ls: `/about  /contact  /skills  /tools`,
  "cd about": `Use 'cat about.txt' to read.`,
  "cd contact": `Use 'cat contact.txt' to read.`,
  "cd skills": `Use 'cat skills.txt' to read.`,
  "cd tools": `Use 'cat tools.txt' to read.`,
  "cat about.txt": `Nanashi is a relentless force in cybersecurity and red teaming.`,
  "cat contact.txt": `Email: aadityananashi@cybermail.com\nGitHub: github.com/nanashi\nLinkedIn: linkedin.com/in/nanashi`,
  "cat skills.txt": `Languages: Python, C, C++, Java\nTools: Metasploit, Ghidra, Wireshark, Nmap`,
  "cat tools.txt": `msfconsole  ghidra  nmap  sqlmap`,
  "cat recof.txt": `Recof is a fully offline AI coding assistant for cybersecurity and malware research.`,
  "sudo su": `[+] Password required for root access. Type 'password nanashi' to continue:`,
  "password nanashi": `Access granted. Welcome, root. Type 'nano secrets.txt' for a surprise.`,
  "nano secrets.txt": `~ You're not just a user. You're the system. Welcome, Nanashi. ~`,
  say: () => {
    const phrases = [
      "Cybernetic awareness rising...",
      "Neon pulses sync with your mind.",
      "Terminal frequency stabilized.",
      "All systems listening, Nanashi.",
      "You are the command."
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  },
  date: () => new Date().toString(),
  exit: `Session terminated.`
};

export default function App() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (!booted) {
      let i = 0;
      const bootInterval = setInterval(() => {
        setHistory((prev) => [...prev, bootAnimation[i]]);
        i++;
        if (i >= bootAnimation.length) {
          clearInterval(bootInterval);
          setBooted(true);
        }
      }, 500);
    }
  }, [booted]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const echoMatch = cmd.match(/^echo\s+(.+)/);
    if (echoMatch) {
      setHistory((prev) => [...prev, `User ❯ ${cmd}`, echoMatch[1]]);
      return;
    }

    if (cmd === "clear") return setHistory([]);

    const key = cmd;
    const output = typeof commands[key] === "function" ? commands[key]() : commands[key] || `[ERROR] ${cmd}: command not found`;
    setHistory((prev) => [...prev, `User ❯ ${cmd}`, output]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input.trim());
      setInput("");
    }
  };

  const colorize = (line, i) => {
    if (typeof line !== 'string') return 'text-[#9df0ff]';
    if (line.startsWith('User ❯')) return 'text-[#00ff9f]';
    if (line.includes('[ERROR]')) return 'text-[#ff4b4b]';
    if (line.includes('Access granted')) return 'text-[#48c5ff]';
    if (line.includes('surprise')) return 'text-[#ffff00]';
    if (line.includes('Nanashi is a relentless force')) return 'text-[#FF80FF]';
    if (line.includes('Email:')) return 'text-[#b4f5ff]';
    if (line.includes('GitHub:')) return 'text-[#d18eff]';
    if (line.includes('LinkedIn:')) return 'text-[#6edbff]';
    if (line.includes('Languages:')) return 'text-[#FFD700]';
    if (line.includes('Python')) return 'text-[#ffb347]';
    if (line.includes('Metasploit')) return 'text-[#ff6666]';
    if (line.includes('sqlmap')) return 'text-[#b5ff9e]';
    if (line.includes('msfconsole')) return 'text-[#d1ff52]';
    if (line.includes('Recof')) return 'text-[#40ffff]';
    if (line.includes('Cybernetic awareness')) return 'text-[#00d9ff]';
    if (line.includes('Neon pulses')) return 'text-[#00ffaa]';
    if (line.includes('Terminal frequency')) return 'text-[#ffaaee]';
    if (line.includes('All systems listening')) return 'text-[#ffcc00]';
    if (line.includes('You are the command')) return 'text-[#00ffcc]';
    return i % 4 === 0 ? 'text-[#d799ff]' : i % 4 === 1 ? 'text-[#58ffd7]' : i % 4 === 2 ? 'text-[#c3a9ff]' : 'text-[#9df0ff]';
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-[#d0f0ff] font-mono p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-[#50bdf6] text-sm mb-2">
          ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄<br/>
          █🧠 CyberNode Interface v1.0 █<br/>
          ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
        </div>
        <div
          ref={terminalRef}
          className="overflow-y-auto max-h-[75vh] pr-1 scrollbar-none"
        >
          {history.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className={colorize(line, i)}
            >
              {line}
            </motion.div>
          ))}
        </div>
        {booted && (
          <div className="flex text-[#39ff14] mt-2">
            <span className="pr-2">User ❯</span>
            <input
              autoFocus
              className="bg-transparent outline-none flex-1 text-[#39ff14] placeholder-[#666] caret-[#00ffe7]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter a command..."
            />
          </div>
        )}
      </div>
    </div>
  );
}
