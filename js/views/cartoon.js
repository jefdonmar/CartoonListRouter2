export default function(data) {
  return `
    <div class="cartoon">
      <button class="back-button" data-to="cartoons">
        <i class="fa fa-arrow-left"></i>
      </button>
      <div class="image"><img src="${data.photo}"></div>
       <h2>Character Profile</h2>
      <div><i class="fa fa-user"></i>${data.characterName}</div>
      <hr>
      <div><i class="fa fa-chevron-right"></i>Cartoon Title: ${data.cartoonName}</div>
      <hr>
      <div><i class="fa fa-chevron-right"></i>Station Name: ${data.station}</div>
      <hr>
    </div>`;
}


// This gives the template of how the data will be shown when a character is clicked