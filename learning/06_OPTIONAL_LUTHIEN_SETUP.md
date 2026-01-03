# 🔬 Optional: Luthien Conversation Logging

📖 **Navigation / Navegación:**
[← Previous: Tree Explanation](./05_TREE_EXPLANATION_FOR_ADRIAN.md) | [Back to Email →](./01_EMAIL_FOR_LUIS.md)

---

**This is optional!** Luthien logs your Claude Code conversations for review later. Skip this if you just want to build the game.

**¡Esto es opcional!** Luthien guarda tus conversaciones con Claude Code para revisar después. Salta esto si solo quieres construir el juego.

---

## 🤔 What is Luthien? / ¿Qué es Luthien?

**English:**
Luthien is a proxy that sits between Claude Code and the AI. It:
- Logs every message (prompts and responses)
- Saves conversations to a database
- Lets you review what happened later

**Español:**
Luthien es un proxy entre Claude Code y la IA. Hace:
- Guarda cada mensaje (preguntas y respuestas)
- Guarda conversaciones en una base de datos
- Te permite revisar qué pasó después

---

## 📋 Prerequisites / Requisitos

Before setting up Luthien, you need:

| Tool | Check if installed | Install if missing |
|------|-------------------|-------------------|
| **Docker** | `docker --version` | [Download Docker Desktop](https://www.docker.com/products/docker-desktop/) |
| **Node.js** | `node --version` | `brew install node` |
| **Git** | `git --version` | `xcode-select --install` |

---

## 🚀 Quick Setup / Configuración Rápida

### Step 1: Clone Luthien / Clonar Luthien

```bash
cd ~/build
git clone https://github.com/LuthienResearch/luthien-proxy.git
cd luthien-proxy
```

### Step 2: Start Services / Iniciar Servicios

```bash
./scripts/quick_start.sh
```

This starts:
- PostgreSQL database (stores conversations)
- Redis cache
- Luthien gateway (the proxy)

Esto inicia:
- Base de datos PostgreSQL (guarda conversaciones)
- Cache Redis
- Gateway Luthien (el proxy)

### Step 3: Configure Claude Code / Configurar Claude Code

```bash
# Set the proxy URL
export ANTHROPIC_BASE_URL=http://localhost:8000/anthropic/v1
```

Or add to your `~/.zshrc` to make it permanent:
```bash
echo 'export ANTHROPIC_BASE_URL=http://localhost:8000/anthropic/v1' >> ~/.zshrc
source ~/.zshrc
```

### Step 4: Use Claude Code Through Luthien

```bash
cd ~/build/adrian-maze-game
claude
```

Now all conversations are logged!

¡Ahora todas las conversaciones se guardan!

---

## 📊 Viewing Logs / Ver los Logs

### Option 1: Database Query

```bash
cd ~/build/luthien-proxy
psql -h localhost -U luthien -d luthien_control -c "SELECT * FROM conversation_transcript ORDER BY created_at DESC LIMIT 10;"
```

### Option 2: Check the CSV

We export conversations to:
`dev/context/prompts_and_replies/conversation_log.csv`

---

## 🛑 Stopping Luthien / Detener Luthien

```bash
cd ~/build/luthien-proxy
docker-compose down
```

---

## ❓ Troubleshooting / Solución de Problemas

### "Connection refused" / "Conexión rechazada"
- Is Docker running? / ¿Está corriendo Docker?
- Run `docker ps` to check containers

### "Gateway not healthy"
- Wait 30 seconds after starting
- Check: `curl http://localhost:8000/health`

### Want to skip Luthien?
Just unset the proxy:
```bash
unset ANTHROPIC_BASE_URL
```

---

## 📞 Need Help? / ¿Necesitas Ayuda?

**Schedule a call with Scott!** I'm happy to walk you through the setup via video call.

**¡Agenda una llamada con Scott!** Con gusto te ayudo con la configuración por videollamada.

---

📖 **Back to:** [Getting Started](./02_GETTING_STARTED.md)
