# mrchasp-root

Web principal de MrChasp: https://mrchasp.com

Web estática en Astro. Todo el contenido (perfil, colores, webs, canales, proyectos y feed) sale de Sanity (`6wzh28a3`, dataset `production`). En el código solo están el diseño y los textos de la interfaz (`src/lib/i18n.ts`).

- `/` en español y `/en` en inglés.
- Tema light/dark según el sistema; el botón de tema lo cambia y se recuerda.
- Desplegada en Vercel (proyecto `mrchasp-root`).

## Cómo se actualiza

**Contenido:** se edita y publica en el Studio (https://core.mrchasp.com). Al publicar cualquier documento, un webhook de Sanity llama al deploy hook de Vercel y la web se reconstruye sola en uno o dos minutos.

**Código:** `git push` a `main` y Vercel despliega.

**Tipos:** el contrato de datos vive en [mrchasp-core](https://github.com/Sr-Alvarado/mrchasp-core). Cuando cambia su esquema:

```sh
cd ../mrchasp-core && pnpm dlx sanity schema extract --path ../mrchasp-root/schema.json --force
cd ../mrchasp-root && pnpm typegen
```

`pnpm typegen` regenera `sanity.types.ts` con los tipos del esquema y de las consultas GROQ de `src/lib/queries.ts`.

## Desarrollo

Requiere Node 22 y pnpm.

```sh
pnpm install
pnpm dev           # http://localhost:4321
pnpm biome check   # lint y formato
pnpm build         # comprobación de tipos y build estático en dist/
```

## Estructura

- `src/lib/`: cliente de Sanity, consulta, contenido, idiomas y utilidades.
- `src/components/`: componentes; la página se compone solo con ellos.
- `src/pages/[...lang].astro`: la página en cada idioma.
- `src/pages/favicon.svg.ts`: favicon generado con el logo y los colores de la web `root`.
