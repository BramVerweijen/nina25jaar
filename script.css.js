document.getElementById("rsvpForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const attendance = document.getElementById("attendance").value;
  const guests = document.getElementById("guests").value;
  const note = document.getElementById("note").value.trim();
  const message = document.getElementById("formMessage");
  const subject = encodeURIComponent("RSVP Nina 25 - " + name);
  const body = encodeURIComponent(
    "Naam: " + name + "\n" +
    "Aanwezigheid: " + attendance + "\n" +
    "Aantal personen: " + guests + "\n" +
    "Opmerking: " + (note || "Geen") + "\n\n" +
    "Verstuurd via de uitnodiging"
  );
  
  const email = "jouwmail@example.com";
  if (email === "jouwmail@example.com") {
    message.textContent = "Vul je e-mailadres in script.js in om RSVP's te ontvangen.";
    return;
  }
  window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  message.textContent = "Bedankt " + name + "! Je RSVP wordt geopend in je mailprogramma.";
});