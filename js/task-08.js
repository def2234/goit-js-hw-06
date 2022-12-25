const form = document.querySelector('.login-form');

const FormHandle = form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Пожалуйста, заполните все поля!');
  } else {
    const formElements = event.currentTarget.elements;

    const userMail = formElements.email.value;
    const userPassword = formElements.password.value;

    const formData = {
      userMail,
      userPassword,
    };
    console.log(formData);
    form.reset();
  }
}
