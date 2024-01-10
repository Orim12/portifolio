// Functie om te controleren of de gebruiker een telefoon gebruikt
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  // Gebruik de functie om te bepalen of de gebruiker een telefoon gebruikt
  if (isMobileDevice()) {
    console.log('De gebruiker gebruikt een telefoon.');
  } else {
    console.log('De gebruiker gebruikt geen telefoon.');
  }
  