<template>
  <article class="stack">
    <h3>Co je na tomhle router příkladu vidět</h3>
    <ul>
      <li>Každá stránka má vlastní URL a můžeš ji poslat přímo studentům.</li>
      <li>Vnořený `&lt;router-view&gt;` mění jen detailní obsah vpravo.</li>
      <li>Layout a navigace zůstávají stabilní, takže appka působí souvisle.</li>
    </ul>
  </article>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 0.75rem;
}

h3,
ul {
  margin: 0;
}

ul {
  padding-left: 1.25rem;
  color: #44515f;
  line-height: 1.7;
}
</style>
