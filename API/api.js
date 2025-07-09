fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    data.slice(0, 5).forEach(post => console.log(post.title));
  })
  .catch(error => console.error('Error:', error));

  //part2
  const newPost = {
  title: 'My New Post',
  body: 'This is the body of my post'
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newPost)
})
  .then(response => {
    console.log('Status:', response.status);
    return response.json();
  })
  .then(data => console.log('Response:', data))
  .catch(error => console.error('Error:', error));
//part3
const updatedPost = {
  title: 'Updated Title',
  body: 'Updated Body'
};

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedPost)
})
  .then(response => {
    console.log('Status:', response.status);
    return response.json();
  })
  .then(data => console.log('Updated Response:', data))
  .catch(error => console.error('Error:', error));
//part4
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(response => {
    console.log('Status:', response.status);
    if (response.status === 200 || response.status === 204) {
      console.log('Delete successful');
    } else {
      console.log('Delete failed');
    }
  })
  .catch(error => console.error('Error:', error));
//part5
const sampleObject = {
  name: 'Alice',
  age: 30,
  city: 'Dallas'
};

const jsonString = JSON.stringify(sampleObject);
const parsedObject = JSON.parse(jsonString);

console.log('Original Object:', sampleObject);
console.log('JSON String:', jsonString);
console.log('Parsed Object:', parsedObject);
