# Vue 3 Examples Showcase

Malá ukázková aplikace ve Vue 3, která vede od základních konceptů po pokročilejší patterny:

- reaktivita pomocí `ref()` a `computed()`
- podmínky, seznamy a filtrování
- formuláře s `v-model` a reakce přes `watch()`
- komunikace mezi komponentami pomocí props a emits
- composable funkce a asynchronní stav
- pokročilejší patterny jako `teleport` nebo dynamické přepínání UI
- varianta s `vue-router` a více stránkami

## Spuštění lokálně

```bash
npm install
npm run dev
```

## Co je lepší pro hosting

### GitHub Pages

Použij, pokud chceš:

- poslat hotovou sbírku ukázek studentům nebo kolegům
- mít jednoduchý veřejný odkaz bez backendu
- automatický deploy po pushi na branch `main`

Workflow je připravený v [`.github/workflows/deploy-pages.yml`](/.github/workflows/deploy-pages.yml).

Poznámka: v souboru `deploy-pages.yml` je nastavené `BASE_PATH=/Vue3/`. Pokud bude mít repo jiný název, uprav tuto hodnotu.
Poznámka k routeru: tahle ukázka používá hash historii, takže budou fungovat i přímé odkazy na podstránky na GitHub Pages bez další serverové konfigurace.

### GitHub Codespaces

Použij, pokud chceš:

- živě upravovat ukázky v prohlížeči
- nechat studenty experimentovat bez lokální instalace Node.js
- mít připravené prostředí jedním kliknutím

Konfigurace je připravená v [`.devcontainer/devcontainer.json`](/.devcontainer/devcontainer.json).

## Doporučení

- Pro sdílení hotových ukázek: `GitHub Pages`
- Pro workshopy a interaktivní výuku: `Codespaces`
- Ideální kombinace: vyvíjet v `Codespaces`, publikovat přes `GitHub Pages`
