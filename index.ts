import { StatsToHide, StatsToShow, Themes } from "./types";
import fs from 'fs';

const APP_URL = 'https://lovekhatri-github-stats.vercel.app/'

const USERNAME = 'LoveKhatri';


function generateProfileCard(
    username: string,
    options?: {
        theme?: keyof typeof Themes,
        statsToHide?: Array<keyof typeof StatsToHide>,
        statsToShow?: Array<keyof typeof StatsToShow>,
        showIcons?: boolean,
        bg_color?: number,
        lightThemeOnly?: boolean,
        darkThemeOnly?: boolean
    }
) {
    const url = new URL(APP_URL);
    url.pathname = 'api'
    url.searchParams.append('username', username);
    if (options?.statsToHide) {
        url.searchParams.append('hide', options.statsToHide.map((stat) => StatsToHide[stat]).join(','));
    }
    if (options?.statsToShow) {
        url.searchParams.append('show', options.statsToShow.map((stat) => StatsToShow[stat]).join(','));
    }
    if (options?.showIcons) {
        url.searchParams.append('show_icons', 'true');
    }
    if (options?.theme) {
        url.searchParams.append('theme', Themes[options.theme]);
    }
    if (options?.bg_color) {
        url.searchParams.append('bg_color', options.bg_color.toString());
    }
    if (options?.lightThemeOnly) {
        url.hash = 'gh-light-mode-only';
    }
    if (options?.darkThemeOnly) {
        url.hash = 'gh-dark-mode-only';
    }
    return decodeURIComponent(url.toString());
}

const finalOutput = `
![${USERNAME}'s GitHub Stats](${generateProfileCard(USERNAME, {
    theme: "TRANSPARENT",
    showIcons: true,
    statsToHide: ['COMMITS', 'ISSUES'],
    statsToShow: ['REVIEWS', 'PRS_MERGED_PERCENTAGE', 'PRS_MERGED']
})})
`

fs.writeFileSync('README.md', finalOutput);
