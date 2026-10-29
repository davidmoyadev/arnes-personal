# La prueba

**Tarea:** añadir una tarea al horario semanal.

Ejemplo ilustrativo del patrón. Reprodúcelo en tu proyecto y cuenta tus propios prompts.

## Sin arnés

El agente no sabe el formato ni las reglas. Tienes que explicar, corregir y repetir.

1. «Añade una tarea de correr los lunes.»
   → La apunta como texto suelto, sin hora ni prioridad.
2. «No: con hora de inicio y fin, y prioridad.»
   → La añade, pero inventa la prioridad.
3. «No inventes prioridades, pregúntame.»
   → La corrige.
4. «Y que sea una sola tarea con los días, no siete entradas.»

Resultado: **4 prompts** y una tarea de la que no estás seguro de que respete tu formato.

## Con arnés

`AGENTS.md` ya define el modelo, las reglas y la fuente de verdad. El agente lo lee al arrancar.

1. «Añade una tarea de correr los lunes.»

Resultado: **1 prompt**. La tarea entra con `dias`, `inicio`, `fin`, `priority` y `status`; si falta la prioridad, la pregunta; no inventa nada.

## Cómo reproducirlo

1. Clona este repo.
2. Abre la raíz de este repo con tu agente (el núcleo cargará el módulo `tareas`).
3. Pídele la misma tarea.
4. Cuenta los prompts.

Lo que importa no es el número exacto, sino el patrón: **menos prompts para el mismo resultado**.

## Por qué funciona

El agente no recuerda entre sesiones. El arnés sí. Todo lo que antes repetías en cada prompt vive ahora en un fichero que se lee al arrancar.