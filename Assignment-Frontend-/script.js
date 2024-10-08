document.getElementById('createJobForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const requiredFields = ['title', 'type', 'department', 'country', 'description', 'openingDate'];
    let isValid = true;

    // Validate required fields
    requiredFields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field.value) {
            alert(`${fieldId.replace(/([A-Z])/g, ' $1')} is required.`);
            isValid = false;
        }
    });

    
    const openingDateField = document.getElementById('openingDate');
    const selectedDate = new Date(openingDateField.value);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
        alert('Opening Date cannot be in the future.');
        isValid = false;
    }

    if (isValid) {
        alert('Job created successfully!');
        document.getElementById('createJobForm').reset();
    }
});
