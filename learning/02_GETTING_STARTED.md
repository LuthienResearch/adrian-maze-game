# Getting Started / Cómo Empezar 🎮

**For Luis (and other beginners!) / Para Luis (¡y otros principiantes!)**

📖 **Navigation / Navegación:**
[← Previous: Email](./01_EMAIL_FOR_LUIS.md) | [Next: How to Run →](./03_HOW_TO_RUN.md)

---

This guide will help you run Adrian's game and make changes to it.

Esta guía te ayudará a correr el juego de Adrian y hacerle cambios.

---

## 🖥️ What You Need / Lo Que Necesitas

| Tool | What it does | Como instalarlo |
|------|--------------|-----------------|
| **Terminal** | Run commands / Correr comandos | Already on your Mac! Press `Cmd + Space`, type "Terminal" |
| **Python** | Run the game server / Correr el servidor | Already on your Mac! |
| **Git** | Save changes / Guardar cambios | `xcode-select --install` |
| **Claude Code** | AI assistant / Asistente de IA | `npm install -g @anthropic-ai/claude-code` |

---

## 🎮 Step 1: Play the Game / Paso 1: Jugar el Juego

### Open Terminal / Abre Terminal
1. Press `Cmd + Space` (opens Spotlight)
2. Type "Terminal"
3. Press Enter

### Go to the Game Folder / Ve a la Carpeta del Juego
```bash
cd ~/build/adrian-maze-game
```

**What this means:** `cd` = "change directory" (go to folder)

**Qué significa:** `cd` = "cambiar directorio" (ir a carpeta)

### Start the Game Server / Inicia el Servidor
```bash
python3 -m http.server 8080
```

**What this means:** Start a web server on port 8080

**Qué significa:** Iniciar un servidor web en puerto 8080

### Open the Game / Abre el Juego
1. Open your browser (Chrome, Safari, Firefox)
2. Go to: **http://localhost:8080**
3. Play! / ¡Juega!

### Controls / Controles
| Player | Move | Jump |
|--------|------|------|
| 🦖 Player 1 | ← → Arrow keys | ↑ Arrow |
| 🤖 Player 2 | A D keys | W key |

### Stop the Server / Detener el Servidor
Press `Ctrl + C` in Terminal

---

## 🤖 Step 2: Use Claude Code / Paso 2: Usar Claude Code

Claude Code is an AI that can help you build the game!

¡Claude Code es una IA que puede ayudarte a construir el juego!

### Start Claude Code / Iniciar Claude Code
```bash
cd ~/build/adrian-maze-game
claude
```

### Resume Our Conversation / Continuar Nuestra Conversación
```bash
cd ~/build/adrian-maze-game
claude --resume 82cc8674-3199-411c-adc7-0f1be75f325d
```

This loads all of Adrian's design decisions! / ¡Esto carga todas las decisiones de diseño de Adrian!

### Talk to Claude / Hablar con Claude

Just type what you want in English or Spanish:

- "Add a fire trap" / "Agrega una trampa de fuego"
- "Make the dinosaur bigger" / "Haz el dinosaurio más grande"
- "Show me the code" / "Muéstrame el código"

### Exit Claude Code / Salir de Claude Code
Type `/exit` or press `Ctrl + C`

---

## 📁 Step 3: Understanding the Files / Paso 3: Entender los Archivos

```
adrian-maze-game/
│
├── index.html      ← The game page / La página del juego
├── game.js         ← The game code / El código del juego
├── README.md       ← Project description / Descripción del proyecto
│
├── learning/       ← YOU ARE HERE! / ¡ESTÁS AQUÍ!
│   ├── GETTING_STARTED.md  ← This file / Este archivo
│   ├── HOW_TO_RUN.md       ← More details / Más detalles
│   └── TREE_EXPLANATION.md ← For Adrian / Para Adrian
│
└── dev/            ← Development notes / Notas de desarrollo
    ├── OBJECTIVE.md   ← Current goal / Objetivo actual
    └── TODO.md        ← Task list / Lista de tareas
```

---

## 🔄 Step 4: Save Your Changes / Paso 4: Guardar Tus Cambios

After making changes, save them to GitHub:

Después de hacer cambios, guárdalos en GitHub:

### Check What Changed / Ver Qué Cambió
```bash
git status
```

### Save Changes / Guardar Cambios
```bash
git add -A
git commit -m "Describe what you changed"
git push
```

---

## ❓ Common Problems / Problemas Comunes

### "Command not found" / "Comando no encontrado"
- Make sure you typed it correctly / Asegúrate de escribirlo correctamente
- Try installing the tool again / Intenta instalar la herramienta otra vez

### Game Not Loading / Juego No Carga
- Is the server running? / ¿Está corriendo el servidor?
- Check Terminal for errors / Revisa Terminal por errores
- Try refreshing: `Cmd + Shift + R`

### Claude Code Not Working / Claude Code No Funciona
- Do you have an API key? / ¿Tienes una API key?
- Ask Scott for help! / ¡Pide ayuda a Scott!

---

## 📞 Need Help? / ¿Necesitas Ayuda?

- **Text Scott** - I'm happy to video call to help set things up!
- **Ask Claude Code** - Just describe your problem!

---

## 🎯 What Adrian Wants to Build Next / Lo Que Adrian Quiere Construir

| Feature | Description |
|---------|-------------|
| Material buttons | 🔥 Fire, 💧 Water, 🪵 Wood, 🏖️ Sand |
| Dig button | Excavate platforms / Excavar plataformas |
| Build traps | Place traps on the map / Poner trampas |
| Trap colors | 🦖 Red traps, 🤖 Blue traps |

Just tell Claude Code: "Help me add the material buttons"

¡Solo dile a Claude Code: "Help me add the material buttons"!

---

**You got this! / ¡Tú puedes!** 🎮🚀

---

## 🔬 Optional: Conversation Logging with Luthien

Want to save all your Claude Code conversations? See [06_OPTIONAL_LUTHIEN_SETUP.md](./06_OPTIONAL_LUTHIEN_SETUP.md)

¿Quieres guardar todas tus conversaciones con Claude Code? Ver [06_OPTIONAL_LUTHIEN_SETUP.md](./06_OPTIONAL_LUTHIEN_SETUP.md)

---

📖 **Next:** [How to Run (detailed) →](./03_HOW_TO_RUN.md)
