import LaptopIcon from '@mui/icons-material/Laptop';
import TabletIcon from '@mui/icons-material/Tablet';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import moneyTrackerLaptop from '@/projects-images/moneyTrackerLaptopImg.png';
import moneyTrackerTablet_01 from '@/projects-images/moneyTrackerTabletImg_01.png';
import moneyTrackerTablet_02 from '@/projects-images/moneyTrackerTabletImg_02.png';
import moneyTrackerMobile_01 from '@/projects-images/moneyTrackerMobileImg_01.png';
import moneyTrackerMobile_02 from '@/projects-images/moneyTrackerMobileImg_02.png';

export const API_URL = 'http://localhost:3000';

export const MENU_PHRASES = [
    "Made with React and TONS of caffeine! ☕",
    "100% bug-free (almost) ⚠️",
    "Compiled with love ❤️",
    "console.log('Hello world!') 🌎",
    "Update for another phrase! 😎",
    "Your next idea starts here! 💡",
    "Ctrl + S and hope for the best! 💾",
    "Did you know that CSS can hurt? 🤕",
    "Make it work, then improve it! 🚀",
    "Ready to build something awesome? 🚀",
    "Code like a wizard! 🧙‍♂️",
    "What will you create today? 🛠️",
    "Keep calm and code on! 😎",
    "Debugging is my cardio! 🏃‍♂️",
    "Why sleep when you can code? 🌙",
    "Another day, another repo! 📦",
    "Is it a bug or a feature? 🐞",
    "Push it to the limit! 📤",
    "Can you handle the logic? 🧠",
    "Creating one box at a time! 🧱", 
    "The console never lies! 🖥️",
    "Frontend fun incoming! ✨",
    "Keep your code clean! 🧼",
];

export const INITIAL_SERVER_MESSAGES = {
    error: null,
    success: null
}

export const PROJECTS_DATA = [
    {
        id: 1,
        title: 'Money Tracker',
        description: 'A full-stack web application built for seamless user experience across all devices. Focused on performance and clean UI architecture.',
        techs: ['React', 'JavaScript', 'Node.js', 'MySQL'],
        githubUrl: 'https://github.com/Demh-dev/money-tracker',
        demoUrl: '/money-tracker',
        previews: {
            laptop: moneyTrackerLaptop,
            tablet: [moneyTrackerTablet_01, moneyTrackerTablet_02],
            mobile: [moneyTrackerMobile_01, moneyTrackerMobile_02],
        },
    },
    {
        id: 2,
        title: 'Coming Soon',
        description: 'More projects coming soon, stay tune.',
        techs: [],
        githubUrl: null,
        demoUrl: null,
        previews: null,
    },
];

export const DEVICE_OPTIONS = [
    { key: 'laptop', label: 'Laptop', Icon: LaptopIcon },
    { key: 'tablet', label: 'Tablet', Icon: TabletIcon },
    { key: 'mobile', label: 'Mobile', Icon: SmartphoneIcon },
];

export const TOTAL = PROJECTS_DATA.length;