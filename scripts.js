function changeBackgroundColorGreen() {
  // Hole den Abschnitts-ID des Buttons
  var sectionId = document.activeElement.closest("section").id;

  // Überprüfe, ob die Klasse "answer" im gleichen Abschnitt ist
  if (sectionId) {
    var answerElements = document
      .getElementById(sectionId)
      .getElementsByClassName("answer");

    // Ändere die Hintergrundfarbe aller anwser klassen
    for (var i = 0; i < answerElements.length; i++) {
      answerElements[i].style.backgroundColor = "green";
    }
  }
}

function changeBackgroundColorRed() {
  // Hole den Abschnitts-ID des Buttons
  var sectionId = document.activeElement.closest("section").id;

  // Überprüfe, ob die Klasse "answer" im gleichen Abschnitt ist
  if (sectionId) {
    var answerElements = document
      .getElementById(sectionId)
      .getElementsByClassName("answer");

    // Ändere die Hintergrundfarbe aller anwser klassen
    for (var i = 0; i < answerElements.length; i++) {
      answerElements[i].style.backgroundColor = "red";
    }
  }
}
