import { simulateServerResponse } from './ajax'
import { handleErrors, handleSuccess, validateField } from './helpers'

export async function sendFormData(formData) {
	try {
		const simulatedResponse = await simulateServerResponse(formData)
		console.log('Ответ от сервера:', simulatedResponse)

		if (simulatedResponse.status === 'error') {
			handleErrors(simulatedResponse.fields)
		} else if (simulatedResponse.status === 'success') {
			handleSuccess(simulatedResponse.msg)
		}
	} catch (error) {
		console.error('Ошибка при отправке данных:', error)
	}
}

document.querySelectorAll('input, textarea').forEach(input => {
	input.addEventListener('input', function () {
		validateField(input.id, input.value)
	})
})

document.querySelector('.form').addEventListener('submit', function (e) {
	e.preventDefault()

	const formData = {
		name: document.getElementById('name').value.trim(),
		email: document.getElementById('email').value.trim(),
		phone: document.getElementById('phone').value.trim(),
		message: document.getElementById('message').value.trim(),
	}

	let isValid = true
	Object.keys(formData).forEach(field => {
		validateField(field, formData[field])
		if (formData[field] === '') {
			isValid = false
		}
	})

	if (isValid) {
		sendFormData(formData)
	}
})
