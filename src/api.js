const post = (url, body) => fetch(url, {
  method: 'POST',
  credentials: 'include',
  body: JSON.stringify(body || {}),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(res => res.json());

// const firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });

export const pages = firebase.database().ref('pages');
