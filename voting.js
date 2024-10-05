// voting.js

// Simulate candidates being loaded from the backend
const candidates = [
    { name: 'Candidate A', affiliation: 'Party 1' },
    { name: 'Candidate B', affiliation: 'Party 2' },
    { name: 'Candidate C', affiliation: 'Party 3' },
  ];
  
  const votingForm = document.getElementById('votingForm');
  const firstChoiceSelect = document.getElementById('firstChoice');
  const secondChoiceSelect = document.getElementById('secondChoice');
  const confirmationScreen = document.getElementById('confirmationScreen');
  const summaryScreen = document.getElementById('summaryScreen');
  const confirmationFirstChoice = document.getElementById('confirmationFirstChoice');
  const confirmationSecondChoice = document.getElementById('confirmationSecondChoice');
  const summaryChoices = document.getElementById('summaryChoices');
  
  let selectedFirstChoice = null;
  let selectedSecondChoice = null;
  
  function populateChoices() {
    candidates.forEach((candidate) => {
      const option1 = document.createElement('option');
      option1.value = candidate.name;
      option1.textContent = `${candidate.name} (${candidate.affiliation})`;
      firstChoiceSelect.appendChild(option1);
  
      const option2 = document.createElement('option');
      option2.value = candidate.name;
      option2.textContent = `${candidate.name} (${candidate.affiliation})`;
      secondChoiceSelect.appendChild(option2);
    });
  }
  
  votingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    selectedFirstChoice = firstChoiceSelect.value;
    selectedSecondChoice = secondChoiceSelect.value;
  
    confirmationFirstChoice.textContent = selectedFirstChoice;
    confirmationSecondChoice.textContent = selectedSecondChoice;
  
    votingForm.classList.add('hidden');
    confirmationScreen.classList.remove('hidden');
  });
  
  document.getElementById('confirmVote').addEventListener('click', () => {
    summaryChoices.textContent = `President: ${selectedFirstChoice}, ${selectedSecondChoice}`;
    confirmationScreen.classList.add('hidden');
    summaryScreen.classList.remove('hidden');
  });
  
  document.getElementById('correctVote').addEventListener('click', () => {
    confirmationScreen.classList.add('hidden');
    votingForm.classList.remove('hidden');
  });
  
  document.getElementById('finalConfirm').addEventListener('click', () => {
    alert('Vote confirmed!');
    // Aqui você pode adicionar a lógica para enviar o voto para o backend
  });
  
  populateChoices();