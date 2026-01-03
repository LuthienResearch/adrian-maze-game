# 🚀 How to Run Adrian's Maze Game / Cómo Correr el Juego de Adrian

📖 **Navigation / Navegación:**
[← Previous: Getting Started](./02_GETTING_STARTED.md) | [Next: Project Structure →](./04_PROJECT_STRUCTURE.md)

---

## Quick Start / Inicio Rápido

### Option 1: Python (Easiest / Más Fácil)

**English:**
1. Open Terminal
2. Go to the game folder:
```bash
cd /Users/scottwofford/build/adrian-maze-game
```

3. Start the server:
```bash
python3 -m http.server 8080
```

4. Open your browser and go to:
```
http://localhost:8080
```

5. Play! 🎮

---

**Español:**
1. Abre Terminal
2. Ve a la carpeta del juego:
```bash
cd /Users/scottwofford/build/adrian-maze-game
```

3. Inicia el servidor:
```bash
python3 -m http.server 8080
```

4. Abre tu navegador y ve a:
```
http://localhost:8080
```

5. ¡Juega! 🎮

---

### Option 2: Node.js (If you have it / Si lo tienes)

```bash
npx http-server -p 8080
```

Then open: `http://localhost:8080`

---

### Option 3: VS Code Live Server

**English:**
1. Open the folder in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically!

**Español:**
1. Abre la carpeta en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"
4. ¡El navegador se abre automáticamente!

---

## 🎮 Controls / Controles

### Player 1 / Jugador 1: 🦖 Dinosaur
- **Move Left / Mover Izquierda:** ← (Left Arrow / Flecha Izquierda)
- **Move Right / Mover Derecha:** → (Right Arrow / Flecha Derecha)
- **Jump / Saltar:** ↑ (Up Arrow / Flecha Arriba)

### Player 2 / Jugador 2: 🤖 Robot
- **Move Left / Mover Izquierda:** A
- **Move Right / Mover Derecha:** D
- **Jump / Saltar:** W

---

## 🎯 Goal / Objetivo

**English:**
- Race through the maze!
- First player to reach the green exit (🚪) WINS!
- Avoid falling!
- Jump between platforms!

**Español:**
- ¡Carrera por el laberinto!
- ¡El primer jugador en llegar a la salida verde (🚪) GANA!
- ¡Evita caer!
- ¡Salta entre plataformas!

---

## 📝 Current Status / Estado Actual

### ✅ Working / Funcionando:
- 2-player movement / Movimiento de 2 jugadores
- Platform collisions / Colisiones con plataformas
- Simple maze layout / Diseño simple de laberinto
- Win detection / Detección de victoria
- Health/Lives display / Visualización de vida/vidas

### 🚧 Coming Soon / Próximamente:
- [ ] Weapons (bow/arrow, lightsaber) / Armas (arco/flecha, sable de luz)
- [ ] Superpowers / Superpoderes
- [ ] Traps / Trampas
- [ ] Random maze generation / Generación aleatoria de laberinto
- [ ] Monster selection screen / Pantalla de selección de monstruos
- [ ] Combat system / Sistema de combate
- [ ] Better graphics / Mejores gráficos
- [ ] Sound effects / Efectos de sonido

---

## 🐛 Troubleshooting / Solución de Problemas

### Problem: White screen / Problema: Pantalla blanca
**Solution / Solución:**
- Make sure you're running a server, not just opening the file
- Asegúrate de estar corriendo un servidor, no solo abriendo el archivo

### Problem: Controls don't work / Problema: Controles no funcionan
**Solution / Solución:**
- Click on the game area first
- Haz clic en el área del juego primero

### Problem: Can't see players / Problema: No puedo ver jugadores
**Solution / Solución:**
- Check browser console (F12) for errors
- Revisa la consola del navegador (F12) por errores

---

## 🎨 Files / Archivos

```
adrian-maze-game/
├── index.html          ← Main page / Página principal
├── game.js             ← Game code / Código del juego
├── HOW_TO_RUN.md       ← This file / Este archivo
├── ADRIAN_ANSWERS.md   ← Design decisions / Decisiones de diseño
├── README.md           ← Project info / Info del proyecto
└── TREE_EXPLANATION.md ← GitHub tutorial / Tutorial de GitHub
```

---

## 🚀 Next Steps for Development / Próximos Pasos de Desarrollo

1. **Test the basic movement** / Probar movimiento básico
2. **Get Adrian's feedback** / Obtener retroalimentación de Adrian
3. **Add weapons** / Agregar armas
4. **Add combat** / Agregar combate
5. **Add traps** / Agregar trampas
6. **Make random mazes** / Hacer laberintos aleatorios

---

## 💡 Tips for Adrian / Consejos para Adrian

**English:**
- Try racing your friend to the exit!
- Practice jumping between platforms
- See if you can find shortcuts
- Think about where traps should go

**Español:**
- ¡Intenta hacer una carrera con tu amigo a la salida!
- Practica saltar entre plataformas
- Ve si puedes encontrar atajos
- Piensa dónde deberían ir las trampas

---

## 🎮 Have Fun! / ¡Diviértete!

This is YOUR game, Adrian! Tell us what you like and what should change!
¡Este es TU juego, Adrian! ¡Dinos qué te gusta y qué debería cambiar!

🦖 vs 🤖 - Let the race begin! / ¡Que empiece la carrera!
