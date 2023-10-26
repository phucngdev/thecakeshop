function toggleHiddenDiv() {
    var hiddenDiv = document.getElementById('hidden-div');
    
    if (hiddenDiv.style.display === 'none') {
      hiddenDiv.style.display = 'block';
    } else {
      hiddenDiv.style.display = 'none';
    }
  }