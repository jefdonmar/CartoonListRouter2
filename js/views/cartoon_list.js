function processData(data) {
  return data.map(function(item) {
    return `
      <div class="cartoon-list-item" data-cartoon-id="${item.objectId}">
      <img src="${item.photo}">
    
      <p>${item.characterName}</p>
      <hr>
      </div>
      `;
  }).join('');
}

function listTemplate(data) {
  return `
    <h2>Cartoon List</h2>
    <div>${processData(data)}</div>
  `;
}

export default listTemplate;

// this passes the processData function that sets up the list of items so that 
// they can be passed through the listTemplate function so that all the cartoons can be 
// shown correctly 