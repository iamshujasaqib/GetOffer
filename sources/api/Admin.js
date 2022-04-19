export const getAdminById = async (id) => {
    return (
      fetch('http://127.0.0.1:8000/api/Admin/'+id,{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        //body: JSON.stringify(data),
      })
        //.then(response => console.log(response.status, 'Status of the request'))
        .then(response => response.json())
        .then(json => {
          return json;
        })
        .catch(error => {
          console.error(error, 'error');
        })

    );
  };