const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzhjZmI4YWNiNzA5MjJlZDJjNDVmYzkwM2U5YmNlYSIsIm5iZiI6MTcyNTE1MzU2OS4wNDI0MzcsInN1YiI6IjY0MTg4MTMxYTE0YmVmMDA3YzZiZWQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VEFXz5R4M0fW02kkNUlrkoUMEHgU08J18Wh5-U1JiyA'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/18442630/favorite', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));