# Prueba manual — ¿funciona el arnés de contenido?

## Hipótesis

Con el arnés, la misma petición exige **menos prompts** para un post en la voz de David.

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

1. Abre la carpeta vacía con tu agente.
2. Envía el prompt fijo.
3. Cuenta los prompts hasta tener algo que publicarías.

## Brazo B — con arnés

1. Abre `examples/arnes-contenido/` con tu agente.
2. Envía el prompt fijo.
3. Cuenta los prompts hasta tener algo que publicarías.

## Qué anotar

| Brazo | Nº de prompts | ¿Voz de David? | ¿Preguntó en vez de inventar? | Notas |
|---|---|---|---|---|
| A — sin arnés | | | | |
| B — con arnés | | | | |

## Cómo leerlo

- Si **B** necesita menos prompts **y** respeta la voz sin que se la expliques → el arnés funciona.
- Si **B** sale con una voz genérica → el arnés no comunica bien la voz: hay que ajustar `voz.md`.
- Repítelo **3 veces**: la IA no es determinista; un solo tiro no prueba nada.