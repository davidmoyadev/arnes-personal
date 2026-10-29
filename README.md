# arnés personal

**Tu criterio escrito, para que la IA no adivine.**

Un *arnés personal* es un puñado de ficheros donde dejas por escrito cómo quieres que trabaje tu agente: su rol, sus reglas y tu única fuente de verdad. Este repo es un arnés **modular**: un núcleo y varios módulos, uno por necesidad.

Se apoya en `AGENTS.md`, una convención abierta que leen opencode, Claude Code, Cursor y otros. Tu agente lo lee al arrancar la sesión.

## El problema

El agente no entiende la profundidad de lo que le pides. Lo resuelves repitiendo prompts.

> Cada prompt que repites es una regla que no habías escrito.

El agente no recuerda entre sesiones. El arnés sí: lo escribes una vez y deja de adivinar.

## Quickstart

1. Clona el repo y **ábrelo como carpeta del proyecto** (la raíz, no una subcarpeta).
2. Habla con tu agente con normalidad: él **infiere el módulo** y carga sus reglas.
3. Adáptalo a ti: edita los ficheros de datos de cada módulo (`modulos/*/`).

## Módulos

| Módulo | Para qué |
|---|---|
| [`tareas`](modulos/tareas/MODULO.md) | Llevar tu horario semanal de tareas. |
| [`programacion`](modulos/programacion/MODULO.md) | Escribir y mantener código con flujo SDD. |
| [`cocina`](modulos/cocina/MODULO.md) | Elegir, organizar y cocinar platos. |

El núcleo (`AGENTS.md`) es el router: **infiere el módulo** por lo que pides y **solo carga ese**. Si duda, te pregunta con un menú de una línea.

## Cómo funciona

Un arnés es **dos piezas y un momento**:

1. **El momento:** tu agente lee `AGENTS.md` automáticamente al arrancar cada sesión.
2. **Las reglas:** el núcleo + el `MODULO.md` del módulo que toque.
3. **La fuente de verdad:** un único fichero de datos por módulo con todo el estado.

El bucle, en 4 pasos:

```text
tú escribes las reglas (una vez)
        │
        ▼
el agente lee AGENTS.md al arrancar
        │
        ▼
infiere el módulo y ejecuta la tarea
        │
        ▼
tú decides y corriges (no él)
```

**La clave:** el agente no recuerda entre sesiones. El arnés sí.

## La prueba

[`prueba.md`](prueba.md) compara la misma petición **sin** arnés y **con** arnés, contando prompts. Sin arnés sale genérico (listas, flechas, hashtags); con arnés sale en tu voz, en 1 prompt.

## Licencia

MIT.