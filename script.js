// Data engine for the interactive widget
const dataModels = {
    water: {
        title: "Water Conservation & Harvesting",
        desc: "Prioritizes rejuvenating traditional water bodies, building check dams, and digging silt-retarding storage tanks to recharge drying rural aquifers.",
        ratio: "60:40 (Strict GP Level Priority)",
        impact: "Drought-proofing & Irrigation Security"
    },
    agri: {
        title: "Agro-Forestry & Horticulture Support",
        desc: "Focuses on land leveling, bunding, fruit tree plantation, and expanding irrigation capabilities specifically on lands owned by SC, ST, and marginalized households.",
        ratio: "60:40 (Direct Labor-Heavy Focus)",
        impact: "Household Soil Health & Sustainable Crop Yields"
    },
    infra: {
        title: "Rural Connectivity & Infrastructure",
        desc: "Facilitates building all-weather gravel roads, masonry drainage systems, and disaster-resilient common platforms to link remote villages with local marketplace ecosystems.",
        ratio: "60:40 (Max Material Ceiling Maintained)",
        impact: "Market Integration & Access to Public Utilities"
    }
};

// Function to update the widget interface based on selected data key
function updateWidget(key, clickedButton) {
    // Remove active class from all category buttons
    document.querySelectorAll('.widget-btn').forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the clicked button
    clickedButton.classList.add('active');

    // Dynamically inject the data fields into the panel elements
    document.getElementById('widget-category').innerText = dataModels[key].title;
    document.getElementById('widget-desc').innerText = dataModels[key].desc;
    document.getElementById('widget-ratio').innerText = dataModels[key].ratio;
    document.getElementById('widget-impact').innerText = dataModels[key].impact;
}

// Attach event listeners to buttons once DOM elements load completely
document.addEventListener("DOMContentLoaded", () => {
    const waterBtn = document.getElementById('btn-water');
    const agriBtn = document.getElementById('btn-agri');
    const infraBtn = document.getElementById('btn-infra');

    if(waterBtn) {
        waterBtn.addEventListener('click', function() { updateWidget('water', this); });
    }
    if(agriBtn) {
        agriBtn.addEventListener('click', function() { updateWidget('agri', this); });
    }
    if(infraBtn) {
        infraBtn.addEventListener('click', function() { updateWidget('infra', this); });
    }
});