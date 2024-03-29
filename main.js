document.addEventListener('DOMContentLoaded', function () {
    // Fetch JSON data from the file
    fetch('https://raw.githubusercontent.com/Jedemajed4617/jsonreviews/main/reviews.json')
        .then(response => response.json())
        .then(data => {
            const reviews = data.reviews;
            const carouselContainer = document.querySelector('.owl-carousel1');

            // Loop through each review and generate HTML
            reviews.forEach(review => {
                const reviewHTML = `
                    <div>
                        <div class="card text-center">
                            <div class="card-body">
                                <h5>${review.name}<p class="peetje">${review.time}</p><img class="tp-stars" src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="tp stars"></h5>
                                <span>${review.title}</span>
                                <p class="card-text">${review.comment}</p>
                            </div>
                        </div>
                    </div>
                `;
                // Append the generated HTML to the carousel container
                carouselContainer.insertAdjacentHTML('beforeend', reviewHTML);
            });

            // Initialize Owl Carousel plugin after all reviews are loaded
            $(".owl-carousel1").owlCarousel({
                loop: true,
                center: true,
                margin: 0,
                responsiveClass: true,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    680: {
                        items: 2,
                        nav: false,
                        loop: false
                    },
                    1000: {
                        items: 3,
                        nav: true
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});