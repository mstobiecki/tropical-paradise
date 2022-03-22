const navigationBurger = document.querySelector('.navigation__burger');
const navigation = document.querySelector('.navigation__items');
const navigationItem = document.querySelectorAll('.navigation__item');

const handleNew = () => {
	navigation.classList.toggle('navigation__items--active');

	navigationItem.forEach((item) => {
		item.addEventListener('click', () => {
			navigation.classList.remove('navigation__items--active');
		});
	});
};

navigationBurger.addEventListener('click', handleNew);
