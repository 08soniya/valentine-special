# 💖 Valentine’s Week Interactive Web Experience

A heartfelt, interactive web experience designed to celebrate **Valentine’s Week**, **Propose Day**, **Teddy Day**, **Chocolate Day**, and **Rose Day**. This project combines **cute animations, quizzes, and memory walls** to create a personalized experience for your loved one.

---

## 🌹 Features

- **Animated slides** with smooth transitions
- **Typing effect** for personalized messages
- **Interactive quizzes** with human-emotion-based questions
- **Memory wall** with photos and videos
- **Confetti celebration** for correct answers or special moments
- **Responsive design** for both desktop and mobile
- **Cute buttons and hover effects** for playful interactions
- **Favicon** for a personalized touch in browser tabs

---

## 📂 Project Structure


project-root/
│
├─ index.html # Main HTML file for the Valentine experience
├─ propose.html # Propose Day interactive page
├─ teddy.html # Teddy Day interactive page
├─ chocolate.html # Chocolate Day interactive page
├─ valentine-week.html # Overview page for Valentine Week
│
├─ css/
│ └─ style.css # Main stylesheet
│├─ js/
│ └─ script.js # JavaScript for slide logic, quizzes, and confetti
│
├─ media/
│ ├─ propose1.gif
│ ├─ propose2.gif
│ ├─ 1.jpeg
│ ├─ 2.jpeg
│ ├─ 3.jpeg
│ ├─ 4.jpeg
│ └─ favicon.ico
││
└─ assets/
└─ video/
└─ memVideo.mp4 # Memory video for slides


---

## 🎨 Technologies Used

- HTML5
- CSS3 (with Grid and Flexbox)
- JavaScript (for interactivity, quizzes, and confetti animations)
- Google Fonts: `Great Vibes`, `Dancing Script`
- Canvas Confetti Library ([cdn.jsdelivr.net](https://cdn.jsdelivr.net/npm/canvas-confetti))

---

## ⚡ Usage

1. **Clone or download** the repository:

```bash
git clone https://github.com/yourusername/valentines-week.git
Open the HTML file in a browser:

open index.html


Navigate through slides using Next buttons and interact with quizzes for a personalized experience.

💡 Customization

Change messages: Edit the text inside <p> tags in HTML.

Add your photos or videos: Replace files in media/ or assets/video/.

Change background: Modify body { background: url(...) } in style.css.

Modify quiz questions: Update HTML <section> elements and corresponding JS logic in script.js.

Change favicon: Replace favicon.ico or favicon.png in the media/ folder and update the <link> tag in <head>.