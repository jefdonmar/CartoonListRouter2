function processData(data) {
  return data.map(function(item) {
    return `
      <div class="cartoon-list-item" data-cartoon-id="${item.objectId}">
        <img src="${item.photo}">
        <span>${item.characterName}</span>
        <hr>
      </div>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class='cartoon-list'>
      <h3>Cartoons</h3>
      <div>${processData(data)}</div>
      <button class="create-character"><i class="fa fa-plus"></i> Add New</button>
    </div>
  `;
}


// this passes the processData function that sets up the list of items so that 
// they can be passed through the listTemplate function so that all the cartoons can be 
// shown correctly 
// Also added the new Cartoon Button 