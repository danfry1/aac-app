<script>
  import { flip } from 'svelte/animate';
  let items = [
    {
      id: 1,
      source:
        'https://thumbs.dreamstime.com/b/hand-wave-waving-hi-hello-gesture-line-art-vector-icon-apps-websites-144602661.jpg',
      name: 'Hello',
    },
    {
      id: 2,
      source:
        'https://as1.ftcdn.net/v2/jpg/00/18/60/76/500_F_18607684_TMNWfn1R5NyEbyYdVeJLNV2cXYs9VrJp.jpg',
      name: 'Yes',
    },
    {
      id: 3,
      source: 'https://illustoon.com/photo/4297.png',
      name: 'No',
    },
    {
      id: 4,
      source:
        'https://i.pinimg.com/736x/66/1a/08/661a08971315878673a562cd5f2c7220.jpg',
      name: 'Thank You',
    },
    {
      id: 5,
      source:
        'https://i.pinimg.com/736x/66/1a/08/661a08971315878673a562cd5f2c7220.jpg',
      name: 'Please',
    },
    {
      id: 6,
      source:
        'https://i.pinimg.com/736x/66/1a/08/661a08971315878673a562cd5f2c7220.jpg',
      name: 'I',
    },
    {
      id: 7,
      source:
        'https://i.pinimg.com/736x/66/1a/08/661a08971315878673a562cd5f2c7220.jpg',
      name: 'Want',
    },
    {
      id: 8,
      source:
        'https://i.pinimg.com/736x/66/1a/08/661a08971315878673a562cd5f2c7220.jpg',
      name: 'Pizza',
    },
    {
      id: 9,
      source:
        'https://i.pinimg.com/736x/66/1a/08/661a08971315878673a562cd5f2c7220.jpg',
      name: 'Hello',
    },
    {
      id: 10,
      source:
        'https://i.pinimg.com/736x/66/1a/08/661a08971315878673a562cd5f2c7220.jpg',
      name: 'Nicholas',
    },
    {
      id: 11,
      source:
        'https://i.pinimg.com/736x/66/1a/08/661a08971315878673a562cd5f2c7220.jpg',
      name: 'How are you',
    },
    {
      id: 12,
      source:
        'https://i.pinimg.com/736x/66/1a/08/661a08971315878673a562cd5f2c7220.jpg',
      name: 'Ice Cream',
    },
    {
      id: 13,
      source:
        'https://i.pinimg.com/736x/66/1a/08/661a08971315878673a562cd5f2c7220.jpg',
      name: 'Gaudi',
    },
  ];
  import Card from './Card.svelte';

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
  const msg = new SpeechSynthesisUtterance();
  function speak() {
    msg.text = 'Hello';
    window.speechSynthesis.speak(msg);
  }

  function speakItems() {
    let arr = [];
    for (let item of items) {
      arr.push(item.name);
    }
    msg.text = arr.join('');
    msg.rate = 0.002;
    window.speechSynthesis.speak(msg);
  }

  import { card } from '../stores/CardStore';
</script>

<button on:click={() => speakItems()}>Speak All</button>
<div class="container">
  {#each items as item (item.id)}
    <div
      animate:flip={{ duration: dragDuration }}
      class="card card-list"
      draggable="true"
      on:dragstart={() => {
        draggingCard = item;
        card.set(item);
      }}
      on:dragend={() => (draggingCard = undefined)}
      on:dragenter={() => swapWith(item)}
      on:dragover|preventDefault
    >
      <Card card={item} />
    </div>
  {/each}
</div>

<style>
  .card-list {
    display: flex;
    gap: 20px;
  }

  .container {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  .card {
    display: flex;
    height: 100%;
    background-color: aliceblue;
    justify-content: center;
    align-items: center;
  }
</style>
