
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

const getStudentsGrid = async () => {
  const response = await fetch(`/api/users/students`, {
    method: 'GET',
    body: null,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    return await response.json();
  } else {
    let message = 'Failed to fetch the students. Try again later';
    alert(message);
    return message;
  }
};


document
  .querySelector('.language-form')
  .addEventListener('submit', updateProfile);

getStudentsGrid().then((sData) => {
  console.log(sData);
  new gridjs.Grid({
    columns: [
      'Name',
      {
        name: 'Email',
        formatter: (_, row) => {
         return gridjs.html(`<a href='mailto:${_}'>${_}</a>`);
        }
    } 
  ],
  data: sData
  }).render(document.getElementById('students-table'));
});