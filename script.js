// Unit Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const units = document.querySelectorAll('.unit');

    // Function to show specific unit
    function showUnit(unitNumber) {
        // Hide all units
        units.forEach(unit => {
            unit.classList.remove('active');
        });

        // Remove active class from all buttons
        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected unit
        const selectedUnit = document.getElementById(`unit-${unitNumber}`);
        if (selectedUnit) {
            selectedUnit.classList.add('active');
            
            // Refresh discussion iframe to show latest updates
            refreshDiscussionIframe(selectedUnit);
        }

        // Add active class to clicked button
        const selectedButton = document.querySelector(`.nav-btn[data-unit="${unitNumber}"]`);
        if (selectedButton) {
            selectedButton.classList.add('active');
        }

        // Scroll to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Save current unit to localStorage
        localStorage.setItem('currentUnit', unitNumber);
    }
    
    // Function to refresh discussion iframe
    function refreshDiscussionIframe(unit) {
        const discussionIframe = unit.querySelector('.discussion-content iframe');
        if (discussionIframe && discussionIframe.src) {
            // Store the original src
            const originalSrc = discussionIframe.src;
            
            // Remove any existing timestamp parameter
            const baseUrl = originalSrc.split('?')[0];
            const params = new URLSearchParams(originalSrc.split('?')[1]);
            
            // Remove old timestamp if exists
            params.delete('_t');
            
            // Add new timestamp to prevent caching
            params.set('_t', Date.now());
            
            // Update iframe src with timestamp
            discussionIframe.src = `${baseUrl}?${params.toString()}`;
        }
    }

    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const unitNumber = this.getAttribute('data-unit');
            showUnit(unitNumber);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const currentUnit = document.querySelector('.unit.active');
        if (!currentUnit) return;

        const currentUnitNumber = parseInt(currentUnit.id.split('-')[1]);

        // Arrow keys for navigation
        if (e.key === 'ArrowRight' && currentUnitNumber < 4) {
            showUnit(currentUnitNumber + 1);
        } else if (e.key === 'ArrowLeft' && currentUnitNumber > 1) {
            showUnit(currentUnitNumber - 1);
        }
    });

    // Restore last viewed unit from localStorage
    const savedUnit = localStorage.getItem('currentUnit');
    if (savedUnit) {
        showUnit(parseInt(savedUnit));
    }

    // Handle iframe loading errors gracefully
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.addEventListener('error', function() {
            console.warn('Failed to load iframe:', this.src);
        });
    });

    // Add loading indicators for iframes
    iframes.forEach(iframe => {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'iframe-loading';
        loadingDiv.textContent = 'Loading...';
        loadingDiv.style.cssText = 'text-align: center; padding: 2rem; color: #666;';
        
        iframe.parentNode.insertBefore(loadingDiv, iframe);
        
        iframe.addEventListener('load', function() {
            loadingDiv.style.display = 'none';
        });
    });
});

// Optional: Function to update video or discussion URLs for each unit
function updateUnitContent(unitNumber, videoUrl, discussionId) {
    const unit = document.getElementById(`unit-${unitNumber}`);
    if (!unit) return;

    // Update video iframe if URL provided
    if (videoUrl) {
        const videoIframe = unit.querySelector('.video-content iframe');
        if (videoIframe) {
            videoIframe.src = videoUrl;
        }
    }

    // Update discussion iframe if discussion ID provided
    if (discussionId) {
        const discussionIframe = unit.querySelector('.discussion-content iframe');
        if (discussionIframe) {
            const currentSrc = discussionIframe.src;
            const baseUrl = currentSrc.split('?')[0];
            const courseId = new URLSearchParams(currentSrc.split('?')[1]).get('courseId');
            discussionIframe.src = `${baseUrl}?courseId=${courseId}&discussionId=${discussionId}`;
        }
    }
}

// Optional: Export function for Canvas integration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateUnitContent };
}
