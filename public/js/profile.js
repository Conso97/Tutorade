
const updateProfile = async (event) => {
  event.preventDefault();

  const languageElem = document.querySelector('#language-select');
  const languageId = languageElem.value;
  if (languageElem != null) {
    const response = await fetch(`/api/users/updateLang`, {
      method: 'POST',
      body: JSON.stringify({ languageId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Language Saved successfully');
    } else {
      alert('Failed to create project');
    }
  }
};




document
  .querySelector('.language-form')
  .addEventListener('submit', updateProfile);

