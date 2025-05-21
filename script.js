// Función para filtrar las novelas según la búsqueda
function filterNovels() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    let novels = document.querySelectorAll('.novel-card');
    
    novels.forEach(function(novel) {
        let title = novel.getAttribute('data-title').toUpperCase();
        
        if (title.includes(input)) {
            novel.style.display = "";
        } else {
            novel.style.display = "none";
        }
    });
}
