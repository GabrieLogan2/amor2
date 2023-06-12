document.addEventListener('DOMContentLoaded', function() {
  var envelopeIcon = document.querySelector('.envelope');
  var modal = document.getElementById('message-modal');
  var closeBtn = document.querySelector('.close');

  envelopeIcon.addEventListener('click', function() {
      modal.classList.add('active');
  });

  closeBtn.addEventListener('click', function() {
      modal.classList.remove('active');
  });
});

// Obtém a data atual
var currentDate = new Date();

// Formata a data para o formato desejado (por exemplo, "DD/MM/YYYY")
var formattedDate = currentDate.toLocaleDateString("pt-BR");

// Atualiza o elemento HTML com a data do ingresso
document.getElementById("ticket-date").textContent = formattedDate;
