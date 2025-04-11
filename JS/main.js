var git = 0;
var commands = [];

var container = document.querySelector(".container");
var before = document.querySelector("#before");
var liner = document.querySelector("#liner");
var command = document.querySelector("#typer"); 
const textarea = document.querySelector("#texter"); 
var terminal = document.querySelector("#terminal");

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);


textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine("guest@NaNs-TeRmInAl:~$ " + command.innerHTML, "color1 no-animation", 0);
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }

  if (e.keyCode == 38 && git != 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
  if (e.keyCode == 40 && git != commands.length) {
    git += 1;
    if (commands[git] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commands[git];
    }
    command.innerHTML = textarea.value;
  }
}

function commander(cmd) {
  const commandMap = {
  help: () => loopLines(help, "color2 margin", 80),
  about: () => loopLines(whoami, "color2 margin", 80),
  social: () => loopLines(social, "color2 margin", 80),
  projects: () => loopLines(projects, "color2 margin", 80),
  history: () => {
    addLine("<br>", "", 0);
    loopLines(commands, "color2", 80);
    addLine("<br>", "command", 80 * commands.length + 50);
  },
  clear: () => {
    setTimeout(function() {
      terminal.innerHTML = '<a id="before"></a>';
      before = document.getElementById("before");
    }, 1);
  },
  cv: () => loopLines(cv, "color2 margin", 80),
  ls: () => loopLines(ls, "color2 margin", 80),
  // cd: () => loopLines(cd, "color2 margin", 80),
  github: () => {
    addLine("Opening GitHub...", "color2", 0);
    newTab(github);
  },
  python: () => loopLines(python, "color2 margin", 80),
  server: () => loopLines(server, "color2 margin", 80),
};

const command = cmd.toLowerCase();

if (commandMap.hasOwnProperty(command)) {
  commandMap[command]();
} else {
  addLine("<span class=\"inherit\">shell: command not found: ".concat(cmd,"  Try <span class=\"command\">'help'</span> to get started.</span> "), "error", 100);
}
textarea.value = "";
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    container.scrollTo(0, terminal.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}

window.addEventListener("keydown", function(e) {
  textarea.focus();
  if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
  }
}, false);