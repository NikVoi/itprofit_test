export function Modal() {
	const openModalBtn = document.querySelector('.open-modal-btn')
	const modal = document.querySelector('.modal')
	const closeModalBtn = document.querySelector('.close-modal-btn')

	function openModal() {
		modal.classList.add('open')
		document.body.classList.add('modal-open')
	}

	function closeModal() {
		modal.classList.remove('open')
		document.body.classList.remove('modal-open')
	}

	openModalBtn.addEventListener('click', openModal)
	closeModalBtn.addEventListener('click', closeModal)
}
