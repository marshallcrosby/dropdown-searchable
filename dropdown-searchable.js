function dropdownSearchable() {
    const dropdownSearchable = document.querySelectorAll('.dropdown--with-search');
    
    dropdownSearchable.forEach(item => {
        let dropdownItemActive = -1;
        const dropdownSearchableInputEl = item.querySelector('.dropdown-search-input');

        dropdownSearchableInputEl.addEventListener('input', function () {
            dropdownItemActive = -1;
            
            const dropdownSearchableText = this.value.toLowerCase();
            const dropdownSearchableItemEls = item.querySelectorAll('.dropdown-item:not(.dropdown-search-input)');

            dropdownSearchableItemEls.forEach(item => {
                if (item.textContent.toLowerCase().includes(dropdownSearchableText)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        dropdownSearchableInputEl.addEventListener('keydown', function (event) {
            const dropdownItemVisibleItems = Array.from(item.querySelectorAll('.dropdown-item:not(.dropdown-search-input)')).filter(item => item.style.display !== 'none');

            if (event.key === 'ArrowDown') {
                event.preventDefault();
                dropdownItemActive = (dropdownItemActive + 1) % dropdownItemVisibleItems.length;
                dropdownItemVisibleItems[dropdownItemActive].focus();
            }
        });

        dropdownSearchableInputEl.addEventListener('focus', function (event) {
            dropdownItemActive = -1;
        });
    });
}

document.addEventListener('DOMContentLoaded', dropdownSearchable);