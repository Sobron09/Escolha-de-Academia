document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', function() {
        const proximoPasso = this.getAttribute('data-proximo');
        document.querySelector('.passo.ativo').classList.remove('ativo');
        document.getElementById('passo-' + proximoPasso).classList.add('ativo');
    });
});
