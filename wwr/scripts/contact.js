const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const inquiryTopics = [
    { id: "seeking-support", name: "Seeking Support for Mothers & Babies" },
    { id: "healthcare-access", name: "Healthcare & Wellness Access" },
    { id: "emotional-guidance", name: "Emotional Support & Counseling" },
    { id: "volunteer-opportunities", name: "Volunteering Opportunities" },
    { id: "partnership-inquiry", name: "Partnership & Collaboration" },
    { id: "general-inquiry", name: "General Information about Princess" },
    { id: "website-feedback", name: "Website Feedback" }
];

function populateInquiryTopicDropdown() {
    console.log(`[populateInquiryTopicDropdown] I'm starting to populate the dropdown.`);

    const inquiryTopicSelect = document.getElementById('inquiryTopic');

    if (inquiryTopicSelect) {
        if (inquiryTopics.length === 0) {
            console.warn(`[populateInquiryTopicDropdown] Warning: My 'inquiryTopics' array is empty, so no options will be added.`);
            return;
        }

        inquiryTopics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic.id;
            option.textContent = topic.name;
            inquiryTopicSelect.appendChild(option);

            console.log(`[populateInquiryTopicDropdown] I added option: ${topic.name} (Value: ${topic.id})`);
        });
        console.log(`[populateInquiryTopicDropdown] I successfully populated the dropdown with ${inquiryTopics.length} topics.`);
    } else {
        console.error(`[populateInquiryTopicDropdown] Error: I couldn't find the element with ID 'inquiryTopic'.`);
    }
}

function setCurrentYear() {
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

function setLastModified() {
    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateInquiryTopicDropdown();
    setCurrentYear();
    setLastModified();
});