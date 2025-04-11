let github = "https://github.com/Nanashi-Trys";
let linkedIn = "www.linkedin.com/in/aaditya-naresh-panwar";
let htb = "https://app.hackthebox.com/profile/overview";

ls=[
  "About   Socials   Projects   History   Help<br>",
];
whoami = [
  "<br>",
  `<p class="about">Hey, I'm Aaditya Naresh Panwar (aka Nanashi) — a curious system admin, relentless pentester, and creative vulnerability hunter passionate about open-source, breaking things to make them better, straight outta Uttarakhand, India</p>`,
  `<p class="about">Fueled by insatiable curiosity and a deep passion for cybersecurity and public safety, I dive headfirst into challenges, constantly exploring, breaking, and rebuilding. I bring confidence, sharp skills, and real-world experience to every project I take on.</p>`,
  `<p class="about">I code in multiple languages, stay sharp by tracking CVEs and security feeds, and actively engage with my college's Cyber Security Club. I've also jumped into several CTFs and hackathons, always hungry for the next challenge.</p>`,
  "<br>",
];

social = [
  "<br>",
  'github         <a class="social" href="' +github +'" target="_blank">github/Nanashi-Trys' +"</a>",
  'linkedin       <a class="social" href="' +linkedIn +'" target="_blank">linkedin.com/aaditya-naresh-panwar' +"</a>",
  'HackTheBox     <a class="social" href="'+htb+'"target="_blank">hackthebox/Nanashi1212'+"</a>",
  'email          <a class="social" href="mailto:nanashi.hacks@gmail.com" target="_blank">email/nanashi.hacks' +"</a>",
  "<br>",
];

projects = [
  "<br>",
  "⚠ PROJECT SECTION IS CURRENTLY UNDER DEVELOPMENT ⚠",
  "All projects are visible on my <a href='https://github.com/Nanashi-Trys/' target='_blank'>GitHub</a>",
  "<br>",
  "Type the name of the language to views its projects:",
  '<span class="command" style="cursor:pointer;" id="comnd"> => Python</span>',
  '<span class="command" style="cursor:pointer;" id="comnd"> => Server</span>',
  "<br>",
];

help = [
  "<br>",
  '<span class="command">about</span>          Who am I?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">projects</span>       View coding projects',
  '<spam class="command">CV<\span>             Display the CV',       
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           Display list of commands',
  '<span class="command">clear</span>          Clear terminal',
  'and some other hidden commands',
  "<br>",
];

python = [
  "<br>",
  "Python projects :<br>",
//   "<br>",
  "<br>",
];

server = [
  "<br>",
  "Server projects :<br>",
  "<br>",
];


const cv=[
  "<br>",
  "⚠ CV SECTION IS CURRENTLY UNDER DEVELOPMENT ⚠",
  "<br>",
]

const generateSessionID = () => {
  const hexChars = "0123456789abcdef";
  let result = "";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }
    if (i < 3) {
      result += " ";
    }
  }

  result += " : ";

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
      result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }
    if (i < 1) {
      result += " : ";
    }
  }

  return result;
};

banner = [
  '<span class="color2">Welcome to Unix-Shell v2002.09.</span>',
  `<span class="color2">Session ID: <span class="command">${generateSessionID()}</span></span>`,
  `<span class="color2">Type</span> <span class="command">'help'</span><span class="color2"> to see list of available commands.</span>`,
  `<span class="color2">All Commands are case insensitive.</span>`,
];