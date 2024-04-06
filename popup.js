onload = (event) => {
    const openPopupButtons = document.querySelectorAll('.open-popup');
    const popupBg = document.querySelectorAll('.popup__bg');

    openPopupButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            Array.from(popupBg, (popup)=>{ 
                if (popup.classList.contains(button.dataset.popup)) {
                    let closePopupButton = popup.querySelector('.close-popup');
                    popup.classList.add('active');
                    closePopupButton.addEventListener('click',() => {
                        popup.classList.remove('active');
                    });
                    document.addEventListener('click', (e) => {
                        if(e.target === popup) {
                            popup.classList.remove('active');
                        }
                    });
                } 
            })
        })
    });
};