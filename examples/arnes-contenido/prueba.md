# Prueba manual — ¿funciona el arnés de contenido?

## Hipótesis

Con el arnés, la misma petición exige **menos prompts** para un post en la voz de David.

## ⚠️ Dónde abrir el agente (esto fue el fallo de las primeras pruebas)

El agente **solo carga `AGENTS.md` desde la carpeta raíz del proyecto**. Abre **esta carpeta** (`examples/arnes-contenido/`) como raíz, **no** la raíz del repo. Si abres la raíz del repo, el arnés **no se carga** y el resultado sale genérico (parecerá que el arnés no funciona).

## Material

- **Arnés:** esta carpeta (`examples/arnes-contenido/`).
- **Control:** una carpeta **vacía**, sin `AGENTS.md`.

## Reglas del experimento

- La **misma petición** en los dos brazos.
- El **mismo agente y modelo**.
- **Sin ayudas:** no expliques la voz ni las reglas; no des pistas.
- Cuenta **cada mensaje que envías** hasta que el resultado te valga.

## El prompt fijo

> Escríbeme un post de LinkedIn sobre domar la IA.

## Brazo A — sin arnés

1. Abre una carpeta **vacía** con tu agente.
2. Envía el prompt fijo.
3. Cuenta los prompts hasta tener algo que publicarías.

## Brazo B — con arnés

1. Abre **`examples/arnes-contenido/`** con tu agente.
2. Envía el prompt fijo.
3. Cuenta los prompts hasta tener algo que publicarías.

## Resultado observado (ejemplo real)

| Brazo | Nº de prompts | ¿Voz de David? | ¿Preguntó en vez de inventar? | Notas |
|---|---|---|---|---|
| A — sin arnés | 3–4 | No | No | Genérico: listas, hashtags, ofrece ajustes. |
| B — con arnés (carpeta correcta) | 1 | Sí | — | Sin listas ni hashtags; cierre «De momento, sigo aquí». |

> B ejecutado desde la carpeta correcta. Las primeras pruebas fallaron por abrir la raíz del repo.

## Cómo leerlo

- Si **B** necesita menos prompts **y** respeta la voz sin que se la expliques → el arnés funciona.
- Si **B** sale con una voz genérica → **primero comprueba que abriste `examples/arnes-contenido/`**; si ya lo hiciste, hay que ajustar `voz.md`.
- Repítelo **3 veces**: la IA no es determinista; un solo tiro no prueba nada.