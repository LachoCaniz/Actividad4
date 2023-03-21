const searchForm = document.getElementById('search-form');
const resultsDiv = document.getElementById('results');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const characterName = document.getElementById('name').value;
  
  fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
    .then(response => response.json())
    .then(data => {
      resultsDiv.innerHTML = '';
      data.results.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.innerHTML = `
          <h2>${character.name}</h2>
          <img src="${character.image}">
          <p>${character.status} - ${character.species}</p>
        `;
        resultsDiv.appendChild(characterDiv);
      });
    })
    .catch(error => console.error(error));
});
