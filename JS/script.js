    // Función para abrir el popup
    function openPopup() {
        document.getElementById("popup-background").style.display = "flex";
      }
  
      // Función para cerrar el popup
      function closePopup() {
        document.getElementById("popup-background").style.display = "none";
      }
  
      // Al cargar la página, se abre automáticamente el popup
      window.onload = function() {
        openPopup();
      }