const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      //REDIRECT TO DASHBOARD
      document.location.replace('/dashboard');
    } else {
      alert("Please try entering your credentials again, or Register with us!");
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
