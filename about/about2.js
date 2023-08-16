const person1 = document.getElementById('person-1');
        const person2 = document.getElementById('person-2');
        const person3 = document.getElementById('person-3');
        const proDescription = document.getElementById('description');
        person1.addEventListener('click', () => {
            proDescription.textContent = "person 1";
        });
        person2.addEventListener('click', () => {
            proDescription.textContent = "person 2";
        });
        person3.addEventListener('click', () => {
            proDescription.textContent = "This is the content for person-3";
        });