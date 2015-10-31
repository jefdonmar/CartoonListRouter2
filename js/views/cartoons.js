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

export default function(data) {
  return `
    <h2>Cartoon List</h2>
    <div>${processData(data)}</div>
    <button class="create-character"><i class="fa fa-plus"></i> Add New</button>
  `;
}


// this passes the processData function that sets up the list of items so that 
// they can be passed through the listTemplate function so that all the cartoons can be 
// shown correctly 
// Also added the new Cartoon Button 