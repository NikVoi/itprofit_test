import Inputmask from 'inputmask'

export function Mask() {
	const phoneInput = document.getElementById('phone')

	const im = new Inputmask('+375 (99) 999-99-99')
	im.mask(phoneInput)
}
