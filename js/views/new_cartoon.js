export default function() {
  return `
    <div class="add-cartoon">
      <h2>Add Cartoon Character</h2>
      <form>
        <label>Charcter: <input type="text" class ="characterName"></label>
        <label>Cartoon Title: <input type="text" class ="cartoonName"></label>
        <label>Station Name: <input type="text" class ="station"></label>
        <label>GIF URL: <input type="text" class ="photo"></label>
      </form>
      <button class="add-new-cartoon">Add New Character</button>
    </div>
  `;
}

// Gives how the add new cartoon form will look 