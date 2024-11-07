Candidate Search Application
Description
The Candidate Search Application is a web-based tool designed to help employers find and review potential candidates by retrieving public profiles from GitHub. Users can search, review, and save candidate profiles for future reference. The app is built with TypeScript and deployed on Render.

Features
Retrieves candidate data from GitHub, including name, username, location, avatar, email, GitHub profile link, and company.
Allows users to save candidates to a local list and navigate through profiles.
Displays saved candidates with their information, persisting them across page reloads using localStorage.
User-friendly navigation with options to sort and filter candidates.

Table of Contents

Usage
Features
Technologies Used
Contact

Usage

Candidate Search: When the page loads, the app fetches and displays a candidate's public profile information from GitHub.
Save or Skip Candidates:
Click the + button to save a candidate to your list of potential hires and load the next profile.
Click the - button to skip the current candidate and view the next profile.
Review Saved Candidates: Navigate to the “Saved Candidates” page to see your list of saved profiles. The list persists across sessions, allowing you to access saved candidates even after reloading the page.
Additional Details
Message Display: When no more candidates are available to review, or if no candidates have been saved, appropriate messages are shown to the user.

Features

Candidate Profile Display: Shows key candidate information from GitHub.
Local Storage: Saves selected candidates to localStorage for persistence.
Navigation: Links between Candidate Search and Saved Candidates pages.

Technologies Used

TypeScript: For static type-checking and improved code quality.
React: For building a responsive, component-based UI.
Vite: For fast development and optimized production builds.
GitHub API: To retrieve public candidate profiles.
Local Storage: For persisting candidate data between sessions.
Render: For application deployment.

Contact

Github: HeresJonny117
Email: Jhegarty968@gmail.com
