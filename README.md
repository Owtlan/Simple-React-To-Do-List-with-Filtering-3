📝 Simple React To-Do List with Filtering
This project is a simple to-do list web application built with React and TypeScript. It allows users to add tasks, mark them as completed, and filter tasks based on their status (All / Active / Completed).

🚀 Features
✅ Add new tasks
✅ Mark tasks as completed
✅ Filter tasks by status: All / Active / Completed
✅ Simple, clean component structure
✅ Fully written in TypeScript


## 🛠 Technologies Used
- React

- TypeScript

- Vite

- useState, props, functional components


## 📦 Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/Owtlan/Simple-React-To-Do-List-with-Filtering-3.git
cd react-users
```

- **2 Install dependencies:**
- npm install.

- **3. Start the development server:**
- npm run dev
- The app will run at: http://localhost:5173

## 📋 Functionality Overview

- State Management: Handled via useState in App.tsx
- Data Model: Each to-do item has: (id: number, text:string, completed: boolean)
- Filtering: Logic is implemented in App.tsx and passed to TodoList
- Event Handling: Events passed through props with full TypeScript typings