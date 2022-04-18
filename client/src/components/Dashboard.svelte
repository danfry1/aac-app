<script>
  import CardList from './CardList.svelte';
  import SentenceBuilder from './SentenceBuilder.svelte';
</script>

<div class="container">
  <SentenceBuilder />
  <div>
    <h2>Greetings</h2>
    <CardList />
  </div>
  <div>
    <h2>Food</h2>
  </div>
</div>

<style>
  .container {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    font-size: 36px;
  }
</style>
