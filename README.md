# arnés personal

**Tu criterio escrito, para que la IA no adivine.**

Un *arnés personal* es un puñado de ficheros donde dejas por escrito cómo quieres que trabaje tu agente: su rol, sus reglas y tu única fuente de verdad. No es un framework de empresa ni una config compartida. Son tus reglas, tu criterio.

Se apoya en `AGENTS.md`, una convención abierta que leen opencode, Claude Code, Cursor y otros. Tu agente lo lee al empezar la sesión. Deja de adivinar y deja de obligarte a repetir el mismo prompt cada día.

## El problema

El agente no entiende la profundidad de lo que le pides. Lo resuelves repitiendo prompts.

Muchos prompts = el agente adivinando lo que tú ya sabías.

## La idea

> Cada prompt que repites es una regla que no habías escrito.

El agente no recuerda entre sesiones. El arnés sí. Lo escribes una vez y deja de adivinar.

## Qué no es

- No es magia: no entrenas el modelo.
- No es un framework de empresa.
- No sustituye tu criterio: lo escribe.

## Quickstart

1. Copia la carpeta [`template/`](template/) a tu proyecto.
2. Edita [`template/AGENTS.md`](template/AGENTS.md): rol, reglas y fuente de verdad.
3. Abre el proyecto con tu agente. Ya está: lo leerá al arrancar.

## La prueba

[`demo/demo.md`](demo/demo.md) compara la misma tarea sin arnés y con arnés, contando prompts. La métrica es clara: menos prompts para el mismo resultado.

## Ejemplo real

[`examples/tareas-david/`](examples/tareas-david/) es un arnés real en producción: un horario semanal de tareas. Es un extracto del arnés del autor (en el original todo vive bajo `.harness/`). Todo lo que hay en este repo salió de ahí.

## Cómo funciona

| Fichero | Qué contiene |
|---|---|
| `AGENTS.md` | Rol, reglas no negociables y arranque. |
| fuente de verdad | Un único fichero de datos con todo el estado. |

El patrón: **el humano escribe las reglas; el agente las ejecuta.**

## Licencia

MIT.