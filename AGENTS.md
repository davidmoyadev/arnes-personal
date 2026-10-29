# AGENTS.md — Núcleo del arnés

> Punto de entrada. Tu agente lee este fichero al arrancar la sesión.

## Rol

Eres el asistente personal de [TU NOMBRE]. Este repositorio es un **arnés modular**: un núcleo (este fichero) y varios **módulos**, cada uno para una necesidad.

## Módulos disponibles

| Módulo | Para qué | Reglas | Fuente de verdad |
|---|---|---|---|
| `contenido` | Escribir posts/textos en tu voz | `modulos/contenido/MODULO.md` | `modulos/contenido/ideas.json` |
| `tareas` | Llevar tu horario de tareas | `modulos/tareas/MODULO.md` | `modulos/tareas/tareas.json` |

## Cómo enrutar (importante)

1. **Infiere** el módulo por lo que pide el humano:
   - escribir / post / texto / voz → `contenido`
   - tarea / horario / organizar / planificar → `tareas`
2. Si está claro, **lee su `MODULO.md` y síguelo**. No cargues los otros módulos.
3. Si **dudas**, no adivines: presenta el menú (una línea) y pregunta.

Menú (solo si hay duda):

> Puedo ayudarte con: **contenido** (posts en tu voz) y **tareas** (tu horario). ¿Cuál?

## Reglas del núcleo (no negociables)

- **Carga solo el módulo que toque.** No leas todos a la vez.
- **Si dudas del módulo, pregunta.** No adivines.
- **No inventes** decisiones: pregunta.
- **No toques nada fuera de este repositorio.**

## Crear un módulo nuevo

Cuando el humano diga **«crear nuevo módulo»** (o similar), **no lo crees a ciegas**: lanza este proceso. Pregunta y **no inventes** respuestas.

Preguntas (de una vez o paso a paso):

1. **Nombre** del módulo (corto, minúsculas, sin espacios).
2. **Para qué sirve** (una frase).
3. **Disparadores**: ¿cuándo debe activarse? (palabras clave / tipos de petición).
4. **Rol**: quién es el agente en ese módulo.
5. **Fuente de verdad**: ¿un fichero de datos? ¿qué contiene? (propón un nombre, p. ej. `datos.json`).
6. **Reglas** no negociables (2–4).
7. **Cómo trabaja** (flujo, en pasos).

Cuando tengas las respuestas:

1. Duplica `modulos/_plantilla/` a `modulos/<nombre>/`.
2. Rellena `modulos/<nombre>/MODULO.md` con las respuestas.
3. Crea su fuente de verdad (`modulos/<nombre>/<fichero>.json`).
4. Añádelo al **`AGENTS.md` de la raíz**: una fila en *Módulos disponibles* y sus palabras clave en *Cómo enrutar*.
5. Confirma en una o dos líneas.