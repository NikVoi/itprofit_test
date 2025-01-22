import { sendFormData } from './js/formHandler'
import { Mask } from './js/mask'
import { Modal } from './js/modal'
import './styles/main.scss'

document.addEventListener('DOMContentLoaded', () => {
	Modal()
	Mask()
	sendFormData()
})
