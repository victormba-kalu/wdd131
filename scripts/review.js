function updateReviewCounter() {
    const reviewCounterSpan = document.getElementById('reviewCounter');

    let reviewsCompleted = parseInt(localStorage.getItem('reviewsCompleted') || '0', 10);

    reviewsCompleted++;

    localStorage.setItem('reviewsCompleted', reviewsCompleted);

    if (reviewCounterSpan) {
        reviewCounterSpan.textContent = reviewsCompleted;
    }
}

document.addEventListener('DOMContentLoaded', updateReviewCounter);
