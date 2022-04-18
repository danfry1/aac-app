<script>
  const msg = new SpeechSynthesisUtterance();
  import { flip } from 'svelte/animate';
  import { card } from '../stores/CardStore';
  import Card from './Card.svelte';

  $: items = [];

  function speak() {
    if (items.includes($card)) return;
    items = [...items, $card];
    console.log(items);
  }

  const dragDuration = 300;
  $: draggingCard = '';
  let animatingCards = new Set();

  function swapWith(card) {
    if (draggingCard === card || animatingCards.has(card)) return;
    animatingCards.add(card);
    setTimeout(() => animatingCards.delete(card), dragDuration);
    const cardAIndex = items.indexOf(draggingCard);
    const cardBIndex = items.indexOf(card);
    items[cardAIndex] = card;
    items[cardBIndex] = draggingCard;
  }

  function speakAll() {
    let arr = [];
    for (let item of items) {
      arr.push(item.name);
    }
    msg.text = arr.join('');
    msg.rate = 0.002;
    window.speechSynthesis.speak(msg);
  }

  function clear() {
    items = [];
  }
</script>

<button on:click={speakAll}>Speak Sentence</button>
<button on:click={clear}>Clear</button>
{#if items.length}
  <div class="container">
    {#each items as item (item.id)}
      <div
        animate:flip={{ duration: dragDuration }}
        class="card-list"
        draggable="true"
        on:dragstart={() => {
          draggingCard = item;
        }}
        on:dragend={() => (draggingCard = undefined)}
        on:dragover|preventDefault
        on:dragenter={() => swapWith(item)}
      >
        <Card card={item} />
      </div>
    {/each}
  </div>
{/if}
<div class="sentence-builder" on:dragenter={speak}>
  <h1>Sentence Builder</h1>
</div>

<style>
  .sentence-builder {
    height: 40px;
    width: 100%;
    background-color: rgb(172, 119, 172);
  }
  h1 {
    text-align: center;
  }

  .card-list {
    display: flex;
    gap: 20px;
  }

  /* .card {
    display: flex;
    height: 100%;
    background-color: aliceblue;
    justify-content: center;
    align-items: center;
  } */
  .container {
    display: flex;
  }

  button {
    width: 150px;
    height: 20px;
    border-radius: 8px;
    align-self: center;
  }
</style>
