<script>
  let cards;
  fetch('http://localhost:3001', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ a: 1, b: 'Textual content' }),
  })
    .then((res) => res.json())
    .then((data) => (cards = data));
   console.log(cards);
</script>