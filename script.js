// Life Progress Calculator
// DOB: June 2, 1990 | Life Expectancy: 80 years

const DOB = new Date(1990, 5, 2); // Month is 0-indexed, so 5 = June
const LIFE_EXPECTANCY = 80;

function calculateLifeProgress() {
    const now = new Date();
    const expectedEnd = new Date(DOB);
    expectedEnd.setFullYear(expectedEnd.getFullYear() + LIFE_EXPECTANCY);

    const totalLifeMs = expectedEnd - DOB;
    const livedMs = now - DOB;

    const percentage = (livedMs / totalLifeMs) * 100;
    const yearsLived = livedMs / (1000 * 60 * 60 * 24 * 365.25);
    const yearsLeft = LIFE_EXPECTANCY - yearsLived;
    const daysLeft = Math.floor(yearsLeft * 365.25);
    const weeksLeft = Math.floor(daysLeft / 7);

    return {
        percentage: percentage.toFixed(1),
        yearsLived: Math.floor(yearsLived),
        yearsLeft: Math.ceil(yearsLeft),
        daysLeft: daysLeft.toLocaleString(),
        weeksLeft: weeksLeft.toLocaleString()
    };
}

function updateAllDisplays() {
    const data = calculateLifeProgress();
    const percent = data.percentage;

    // Version 1
    document.getElementById('percent1').textContent = `${percent}%`;
    document.getElementById('progress1').style.width = `${percent}%`;
    document.getElementById('yearsLived1').textContent = data.yearsLived;
    document.getElementById('yearsLeft1').textContent = data.yearsLeft;
    document.getElementById('weeksLeft1').textContent = data.weeksLeft;

    // Version 2
    document.getElementById('percent2').innerHTML = `${percent}<span>%</span>`;
    document.getElementById('progress2').style.width = `${percent}%`;
    document.getElementById('yearsLived2').textContent = data.yearsLived;
    document.getElementById('daysLeft2').textContent = data.daysLeft;
    document.getElementById('weeksLeft2').textContent = data.weeksLeft;

    // Version 3 - Circular
    document.getElementById('percent3').textContent = `${percent}%`;
    const circle = document.getElementById('circleProgress');
    const circumference = 2 * Math.PI * 85; // r = 85
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    document.getElementById('yearsLived3').textContent = data.yearsLived;
    document.getElementById('yearsLeft3').textContent = data.yearsLeft;

    // Version 4
    document.getElementById('percent4').textContent = `${percent}%`;
    document.getElementById('progress4').style.width = `${percent}%`;
    document.getElementById('yearsLived4').textContent = data.yearsLived;
    document.getElementById('yearsLeft4').textContent = data.yearsLeft;

    // Version 5
    document.getElementById('percent5').textContent = `${percent}%`;
    document.getElementById('progress5').style.width = `${percent}%`;
    document.getElementById('yearsLived5').textContent = data.yearsLived;
    document.getElementById('daysLeft5').textContent = data.daysLeft;
}

// Animate on load
window.addEventListener('DOMContentLoaded', () => {
    // Small delay for animation effect
    setTimeout(updateAllDisplays, 300);
});

// Update every minute
setInterval(updateAllDisplays, 60000);
