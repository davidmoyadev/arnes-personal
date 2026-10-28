# AGENTS.md — Mapa y reglas

> Punto de entrada para cualquier agente en este repositorio. Es un **mapa**, no un
> manual: lee solo lo que necesites.

---

## 1. Qué es esto

Un **horario semanal de tareas**, de Lunes a Domingo. Cada tarea indica **en qué días
ocurre** (`dias`), su **hora de inicio y fin**, una **prioridad** y un **estado**.

De cada tarea **surgen ideas** que se desarrollan juntos (su "desarrollo"). Puede ser una
tarea simple (ir a correr, estudiar inglés) o algo grande; incluso las simples tienen su
desarrollo.

No hay cluster, ni despliegues, ni secretos. Solo un fichero de datos y un par de
documentos.

## 2. Mapa de ficheros

| Ruta | Qué contiene | Cuándo leerlo |
|---|---|---|
| `.harness/FIRST_AGENT.md` | Rol de la sesión principal (se carga solo) | Al empezar |
| `.harness/tareas.json` | **Única fuente de verdad**: horario, tareas, ideas, prioridad y estado | Siempre |
| `.harness/scripts/tasks.sh` | Muestra el horario (solo lectura) | Para ver el horario |
| `.harness/progress/history.md` | Log corto de decisiones y cierres | Cuando necesites contexto pasado |
| `.harness/AGENTS.md` | Este fichero: mapa y reglas | Al empezar |

## 3. Modelo de datos (`tareas.json`)

```json
{
  "project": "tareas-david",
  "dias": ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
  "next_id": 15,
  "priorities": { "P0": "...", "P1": "...", "P2": "...", "P3": "..." },
  "status": ["backlog", "doing", "done", "blocked"],
  "tareas": [
    {
      "id": 1,
      "title": "Ir a correr",
      "dias": ["Lunes", "Miercoles", "Viernes"],
      "inicio": "07:00",
      "fin": "07:30",
      "priority": "P1",
      "status": "backlog",
      "notes": "",
      "ideas": [
        { "id": "1.1", "title": "…", "description": "…", "status": "backlog" }
      ]
    }
  ]
}
```

- **`tareas`**: lista plana de tareas. Una tarea **repetida** (p. ej. todos los días) se
  escribe **una sola vez**, con `dias` = los días en que ocurre. Puede haber **varias
  tareas al día**.
- **Tarea**: `id`, `title`, `dias` (lista de días de `dias`), `inicio` y `fin` (`"HH:MM"`),
  `priority`, `status`, `notes`, `ideas`.
- **Idea**: vive dentro de su tarea; `id`, `title`, `description` (el desarrollo, que se
  escribe juntos), `status`.
- **`next_id`**: el siguiente id de tarea libre. Al crear una tarea se usa ese id y se
  incrementa `next_id`. Así **nunca se reutiliza** un id.

### Prioridades

| Prioridad | Significado |
|---|---|
| `P0` | Urgente. Se hace ya. |
| `P1` | Alta. Lo siguiente. |
| `P2` | Media. Cuando haya hueco. |
| `P3` | Baja. Algún día / sin decidir. |

### Estados

| Estado | Significado |
|---|---|
| `backlog` | Escrito, sin empezar. |
| `doing` | En curso. |
| `done` | Terminado. |
| `blocked` | Parado por algo externo (anótalo en `notes`). |

## 4. Reglas (no negociables)

- **Primero se desarrolla, luego se escribe.** Cuando el usuario cuenta una idea, el
  agente **no la añade directamente** al horario: primero la **desarrollan juntos** en la
  conversación y, de ese desarrollo, salen las tareas (con día, hora, prioridad).
- **Desarrollo conjunto.** El agente no desarrolla nada por su cuenta (ni borradores, ni
  detalles, ni "adelantar trabajo"). Desarrolla lo que el usuario pida, en la sesión.
- **Una fuente de verdad:** todo vive en `tareas.json`. No dupliques nada en otros
  ficheros.
- **Toda tarea tiene `dias`** (en qué días ocurre), `inicio` y `fin` en `"HH:MM"`,
  `priority` y `status`. Una tarea repetida se escribe una sola vez. Toda idea tiene
  `status`.
- **Ids únicos y estables:** tareas `1, 2, 3…` (usa `next_id` y súbelo); ideas
  `<tarea>.<n>` (`1.1`, `1.2`). Nunca renumeres ni reutilices un id.
- **El horario se ordena por hora**, no por el orden del array; el script ordena por ti.
  La prioridad sirve para decidir qué es más importante.
- **El horario es ajustable:** cambia horas, días o tareas según se vaya cumpliendo
  (o no). No es rígido.
- **Al cerrar:** `status: "done"` y una línea en `progress/history.md`
  (`<fecha> — tarea <id> hecha`).
- **No inventes:** si falta una prioridad, un estado o una decisión, pregunta.
- **No crees ficheros nuevos** si no te lo piden.

## 5. Cómo trabajar (flujo)

```text
idea ──► (la desarrollamos juntos) ──► tarea en el horario (día + inicio/fin + prioridad)
                                              └──► de la tarea surgen ideas ──► las desarrollamos ──► doing ──► done
```

1. El usuario cuenta una idea → **no se escribe directo**: se desarrolla en la sesión.
2. Del desarrollo salen tareas, que se colocan en el horario (día, hora de inicio y fin,
   prioridad).
3. Cada tarea puede tener ideas (su desarrollo), que también se desarrollan juntos.
4. El usuario mueve tareas a `doing` y, al terminar, a `done`.
5. Cada cierre o decisión deja una línea en `progress/history.md`.

No hay puertas de aprobación formales: el agente edita `tareas.json` directamente y
confirma lo que ha hecho en una o dos líneas. Lo que **sí** es obligatorio: no desarrollar
por su cuenta.

## 6. Ver el horario

```bash
.harness/scripts/tasks.sh              # horario completo, por día
.harness/scripts/tasks.sh --all        # incluye las tareas/ideas hechas
.harness/scripts/tasks.sh --dia Lunes  # solo un día
.harness/scripts/tasks.sh --prio       # todas las tareas ordenadas por prioridad
.harness/scripts/tasks.sh --ideas 8    # banco de ideas de la tarea 8 (sin id: todas)
```

El script es de solo lectura: nunca escribe en `tareas.json`.
