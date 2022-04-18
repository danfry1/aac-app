<script>
  export let card;
  const msg = new SpeechSynthesisUtterance();
  function speak(name) {
    msg.text = name;
    window.speechSynthesis.speak(msg);
  }
</script>

<div class="card" on:click={() => speak(card.name)}>
  <img src={card.source} alt={card.alt} />
  <p>{card.name}</p>
</div>

<style>
  img {
    height: 60px;
    width: 60px;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .card {
    padding: 20px;
    border-radius: 12px;
    border: 2px solid black;
    text-align: center;
    font-size: 18px;
  }
  p {
    user-select: none;
  }
</style>
