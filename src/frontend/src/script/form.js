document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('form');
    let actionBtn = document.getElementById('submit');

    actionBtn.addEventListener('click', (e) => {
        Object.values(form).map(
            (field) => {
                console.log('Field: ', field, 'Value: ', field.value);
            }
        )
    });
    
});