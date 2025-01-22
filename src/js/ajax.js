import { validateEmail } from './helpers'

export function simulateServerResponse(formData) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				if (!formData || typeof formData !== 'object') {
					throw new Error('Некорректные данные формы')
				}

				if (!formData.name || formData.name.trim() === '') {
					resolve({
						status: 'error',
						fields: {
							name: 'Поле "Имя" обязательно для заполнения',
						},
					})
				} else if (!formData.email || !validateEmail(formData.email)) {
					resolve({
						status: 'error',
						fields: {
							email: 'Введите корректный e-mail',
						},
					})
				} else {
					resolve({
						status: 'success',
						msg: 'Ваша заявка успешно отправлена',
					})
				}
			} catch (error) {
				reject(error)
			}
		}, 1000)
	})
}
