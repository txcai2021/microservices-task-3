const uri = 'https://jsonplaceholder.typicode.com/users';
let users = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}











function _displayItems(data) {
   
    tBody.innerHTML = '';

    
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    data.forEach(item => {
                    <tr>
                        <th scope="row">item.id</th>
                        <td>item.name</td>
                         <td>item.username</td>
                        <td>item.email</td>
                    </tr>                  
                    });
                </tbody>
            </table>
  
    

}