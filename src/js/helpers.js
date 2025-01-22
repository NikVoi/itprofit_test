export function validateEmail(email) {
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	return emailPattern.test(email)
}

export function validateField(field, value) {
	let errorMessage = ''
	if (field === 'name' && !value.trim()) {
		errorMessage = 'Поле "Имя" обязательно для заполнения'
	} else if (field === 'email' && (!value.trim() || !validateEmail(value))) {
		errorMessage = 'Введите корректный e-mail'
	} else if (field === 'phone' && !value.trim()) {
		errorMessage = 'Поле "Телефон" обязательно для заполнения'
	} else if (field === 'message' && !value.trim()) {
		errorMessage = 'Поле "Сообщение" обязательно для заполнения'
	}

	const input = document.getElementById(field)
	if (input) {
		input.classList.remove('input-error')
		const oldErrorMessage = input.nextElementSibling
		if (
			oldErrorMessage &&
			oldErrorMessage.classList.contains('error-message')
		) {
			oldErrorMessage.remove()
		}

		input.style.borderColor = ''

		if (errorMessage) {
			input.classList.add('input-error')

			const errorDiv = document.createElement('div')
			errorDiv.classList.add('error-message')
			errorDiv.textContent = errorMessage

			input.style.borderColor = 'red'

			input.insertAdjacentElement('afterend', errorDiv)
		}
	}
}

export function handleErrors(fields) {
	Object.keys(fields).forEach(fieldId => {
		const errorMessage = fields[fieldId]
		const input = document.getElementById(fieldId)
		if (input) {
			input.classList.add('input-error')
			const errorDiv = document.createElement('div')
			errorDiv.classList.add('error-message')
			errorDiv.textContent = errorMessage
			input.style.borderColor = 'red'
			input.insertAdjacentElement('afterend', errorDiv)
		}
	})
}

export function handleSuccess(msg) {
	document.querySelectorAll('input, textarea').forEach(input => {
		input.value = ''
		input.style.borderColor = ''
	})

	document.querySelectorAll('.error-message').forEach(error => {
		error.remove()
	})

	alert(msg)
}
