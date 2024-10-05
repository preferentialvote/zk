// candidate-registration.js

const candidateForm = document.getElementById('candidateForm');
const candidateList = document.getElementById('candidateList');

interface Candidate {
  name: string;
  affiliation: string;
}

let candidates: Candidate[] = [];

candidateForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const affiliationInput = document.getElementById('affiliation') as HTMLInputElement;

  const newCandidate: Candidate = {
    name: nameInput.value.trim(),
    affiliation: affiliationInput.value.trim(),
  };

  if (newCandidate.name && newCandidate.affiliation) {
    candidates.push(newCandidate);
    updateCandidateList();
    nameInput.value = '';
    affiliationInput.value = '';
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});

function updateCandidateList() {
  candidateList.innerHTML = '';
  candidates.forEach((candidate, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${candidate.name} (${candidate.affiliation})`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      candidates.splice(index, 1);
      updateCandidateList();
    };
    listItem.appendChild(deleteButton);
    candidateList.appendChild(listItem);
  });
}