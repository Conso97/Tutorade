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
        search: true,
        sort: true,
        data: sData
    }).render(document.getElementById('students-table'));
});