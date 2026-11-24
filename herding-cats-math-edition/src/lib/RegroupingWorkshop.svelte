<script>
  const startTens = 6;
  const startOnes = 4;
  const subtractTens = 3;
  const subtractOnes = 8;

  let tens = startTens;
  let ones = startOnes;

  let exchanged = false;
  let onesSubtracted = false;
  let tensSubtracted = false;

  let showHint = false;
  let showWorkedExample = false;

  let feedback = "Let's look at the ones first.";

  $: complete = tensSubtracted;
  $: currentNumber = tens * 10 + ones;

  function exchangeTen() {
    if (exchanged) return;

    if (tens === 0) {
      feedback = "There isn't a ten to exchange.";
      return;
    }

    tens -= 1;
    ones += 10;
    exchanged = true;

    feedback = "Great exchange! One ten became ten ones.";
  }

  function subtractTheOnes() {
    if (!exchanged) {
      feedback = "Let's exchange one ten first.";
      return;
    }

    if (onesSubtracted) return;

    ones -= subtractOnes;
    onesSubtracted = true;

    feedback = "Well done! You have 6 ones left.";
  }

  function subtractTheTens() {
    if (!onesSubtracted) {
      feedback = "Let's subtract the ones first.";
      return;
    }

    if (tensSubtracted) return;

    tens -= subtractTens;
    tensSubtracted = true;

    feedback = "You solved it! 2 tens and 6 ones make 26.";
  }

  function reset() {
    tens = startTens;
    ones = startOnes;

    exchanged = false;
    onesSubtracted = false;
    tensSubtracted = false;

    showHint = false;
    showWorkedExample = false;

    feedback = "Let's look at the ones first.";
  }
</script>

<svelte:head>
  <title>Regrouping Workshop</title>
</svelte:head>

<section class="workshop">
  <header>
    <h1>Regrouping Workshop</h1>
    <p>Let's solve 64 − 38 together!</p>
  </header>

  <div class="problem">
    <span>64</span>
    <span>−</span>
    <span>38</span>
    <span>=</span>
    <span>{complete ? "26" : "?"}</span>
  </div>

  <div class="number-display">
    <div class="place-value">
      <h2>Tens</h2>
      <div class="rods" aria-label={`${tens} tens`}>
        {#each Array(tens) as _, i}
          <div class="rod" aria-label="One ten">
            {#each Array(10) as _, j}
              <span class="rod-segment"></span>
            {/each}
          </div>
        {/each}
        {#if tens === 0}
          <span class="empty">No tens remaining</span>
        {/if}
      </div>
      <strong>{tens} tens</strong>
    </div>

    <div class="place-value">
      <h2>Ones</h2>
      <div class="ones" aria-label={`${ones} ones`}>
        {#each Array(ones) as _, i}
          <span class="cube" aria-label="One"></span>
        {/each}
        {#if ones === 0}
          <span class="empty">No ones remaining</span>
        {/if}
      </div>
      <strong>{ones} ones</strong>
    </div>
  </div>

  <div class="total">
    Current value: <strong>{currentNumber}</strong>
  </div>

  <div class="feedback" aria-live="polite">
    {feedback}
  </div>

  <div class="actions">
    {#if !exchanged}
      <button onclick={exchangeTen}> Exchange one ten for ten ones </button>
    {:else if !onesSubtracted}
      <button onclick={subtractTheOnes}> Subtract 8 ones </button>
    {:else if !tensSubtracted}
      <button onclick={subtractTheTens}> Subtract 3 tens </button>
    {:else}
      <div class="success">
        <h2>Great work!</h2>
        <p>64 − 38 = 26</p>
      </div>
    {/if}

    <button class="secondary" onclick={() => (showHint = !showHint)}>
      {showHint ? "Hide hint" : "Show hint"}
    </button>

    <button
      class="secondary"
      onclick={() => (showWorkedExample = !showWorkedExample)}
    >
      {showWorkedExample ? "Hide worked example" : "Show worked example"}
    </button>

    <button class="secondary" onclick={reset}> Start again </button>
  </div>

  {#if showHint}
    <aside class="hint">
      <h2>Hint</h2>
      {#if !exchanged}
        Can you take 8 ones away from 4 ones? Try exchanging one ten for ten
        ones.
      {:else if !onesSubtracted}
        You have 14 ones now. What is 14 − 8?
      {:else if !tensSubtracted}
        You have 5 tens. What is 5 − 3?
      {:else}
        You did it! Two tens and six ones make 26.
      {/if}
    </aside>
  {/if}

  {#if showWorkedExample}
    <aside class="worked-example">
      <h2>Worked example: 64 − 38</h2>
      <ol>
        <li>Start with 6 tens and 4 ones.</li>
        <li>Exchange one ten: 5 tens and 14 ones.</li>
        <li>Subtract 8 ones: 6 ones remain.</li>
        <li>Subtract 3 tens: 2 tens remain.</li>
        <li>Answer: 26.</li>
      </ol>
      <p>
        We haven't changed the total value. We have just represented 64 in a
        different way!
      </p>
    </aside>
  {/if}
</section>

<style>
  .workshop {
    max-width: 700px;
    margin: 0 auto;
    padding: 1.5rem;
    font-family: sans-serif;
    color: #333;
  }

  header,
  .problem,
  .total,
  .feedback {
    text-align: center;
  }

  .problem {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1.5rem;
  }

  .number-display {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .place-value {
    border: 2px solid #ddd;
    border-radius: 12px;
    padding: 1rem;
    min-width: 0;
  }

  .place-value h2 {
    text-align: center;
  }

  .rods,
  .ones {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 0.5rem;
    min-height: 120px;
    padding: 0.5rem;
  }

  .rod {
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 25px;
    padding: 2px;
    background: #2563eb;
    border-radius: 4px;
  }

  .rod-segment {
    height: 9px;
    background: #bfdbfe;
    border-radius: 2px;
  }

  .cube {
    width: 20px;
    height: 20px;
    background: #eab308;
    border: 1px solid #a16207;
    border-radius: 3px;
  }

  .place-value strong {
    display: block;
    text-align: center;
  }

  .empty {
    color: #777;
    font-size: 0.85rem;
  }

  .total,
  .feedback {
    margin: 1rem 0;
    font-size: 1.1rem;
  }

  .feedback {
    padding: 1rem;
    background: #eff6ff;
    border-radius: 8px;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  button {
    border: 0;
    border-radius: 8px;
    padding: 0.8rem 1rem;
    background: #2563eb;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    background: #1d4ed8;
  }

  button:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 3px;
  }

  button.secondary {
    background: #64748b;
  }

  aside,
  .success {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
    background: #fef3c7;
  }

  .success {
    width: 100%;
    text-align: center;
    background: #dcfce7;
  }

  @media (max-width: 450px) {
    .number-display {
      grid-template-columns: 1fr;
    }
  }
</style>
