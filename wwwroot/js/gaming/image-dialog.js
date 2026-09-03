document.addEventListener('DOMContentLoaded', () => {
    const imageDialog = document.querySelector('.image-dialog');

    if (!imageDialog) {
        return;
    }

    const expandedImage = imageDialog.querySelector('.image-dialog-content');
    const closeButton = imageDialog.querySelector('.image-dialog-close');
    const imageDialogTitle = imageDialog.querySelector('#image-dialog-title');
    const imageDialogSubtitle = imageDialog.querySelector('.image-dialog-subtitle');

    document.querySelectorAll('.game-image-button').forEach(button => {
        button.addEventListener('click', () => {
            expandedImage.src = button.dataset.imageSrc;
            expandedImage.alt = button.dataset.imageAlt;
            imageDialogTitle.textContent = button.dataset.imageAlt;
            const cardSubtitle = button.closest('.game-card').querySelector('.game-card-content p');
            imageDialogSubtitle.textContent = cardSubtitle ? cardSubtitle.textContent : '';
            imageDialogSubtitle.hidden = !cardSubtitle;
            imageDialog.showModal();
        });
    });

    closeButton.addEventListener('click', () => imageDialog.close());

    imageDialog.addEventListener('click', event => {
        if (event.target === imageDialog) {
            imageDialog.close();
        }
    });
});
