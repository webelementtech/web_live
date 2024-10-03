// // Handle form submission
// document.getElementById('UserregistrationForm').addEventListener('submit', async (event) => {
//     event.preventDefault(); // Prevent default form submission

//     // Get form data
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData.entries());

//     try {
//         // Send POST request to the server
//         const response = await fetch('http://localhost:5000/api/users/user-register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });

//         if (response.ok) {
//             // Show popup message
//             alert('User registered successfully');
//             // Clear form data
//             event.target.reset();
//         } else {
//             const errorMessage = await response.text();
//             alert(`Error registering user: ${errorMessage}`);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('Error registering user');
//     }
// });

// // Navigate to the Admin Page when the button is clicked
// document.getElementById('adminPageButton').addEventListener('click', () => {
//     window.location.href = '/admin'; // Navigate to the admin page
// });


// Handle form submission
document.getElementById('UserregistrationForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Client-side validation for mobile number
    const mobileNumber = data.mobileNumber;
    if (!/^\d{10}$/.test(mobileNumber)) {
        alert('Mobile number must be exactly 10 digits');
        return;
    }

    try {
        // Send POST request to the server
        const response = await fetch('http://localhost:5000/api/users/user-register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Show popup message
            alert('User registered successfully');
            // Clear form data
            event.target.reset();
        } else {
            const errorMessage = await response.text();
            alert(`Error registering user: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error registering user');
    }
});

// Navigate to the Admin Page when the button is clicked
document.getElementById('adminPageButton').addEventListener('click', () => {
    window.location.href = '/admin'; // Navigate to the admin page
});








// ------------- slick slider -------------

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        fade: true, // Enables fade effect for crossfading
        cssEase: 'linear',
        pauseOnHover: false
    });
});