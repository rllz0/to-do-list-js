# To-Do List App

A beautiful and interactive to-do list application built with React and modern CSS styling. This app allows users to manage their tasks with a clean, gradient-themed interface.

## Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- ✓ Mark tasks as complete/incomplete
- 🗑️ Delete tasks
- 📱 Responsive design for mobile and desktop
- 🎨 Modern gradient UI with smooth animations
- 🖱️ Interactive hover effects

## Live Demo

🌐 **[View Live Site]( )**

## Screenshots
![Screenshot](./src/assets/To%20do%20List.png)

## Technologies Used

- **React** - Frontend framework with hooks (useState, useRef)
- **CSS3** - Modern styling with gradients, transitions, and responsive design
- **JavaScript ES6+** - Modern JavaScript features

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-list-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Deployment

This app can be easily deployed to:
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package

## Usage

### Adding Tasks
1. Type your task in the input field
2. Click the "ADD" button or press Enter
3. Your task will appear in the list below

### Managing Tasks
- **Complete/Uncomplete**: Click on the task text to toggle its completion status
- **Edit**: Click the ✏️ (pencil) icon to edit the task text
- **Delete**: Click the 🗑️ (trash) icon to remove the task

### Editing Tasks
When editing a task:
- ✓ Click the checkmark to save changes
- ✕ Click the X to cancel editing

## Project Structure

```
src/
├── App.jsx          # Main React component with todo logic
├── App.css          # Styling and animations
└── index.js         # Entry point
```

## Key Components

### State Management
- `todos` - Array of todo items with `text` and `completed` properties
- `editText` - Current text being edited
- `editingIndex` - Index of the item currently being edited

### Main Functions
- `handleAddTodo()` - Adds new tasks to the list
- `handleItemDone()` - Toggles task completion status
- `handleDeleteItem()` - Removes tasks from the list
- `handleEditStart()` - Initiates task editing
- `handleEditSave()` - Saves edited task text
- `handleEditCancel()` - Cancels editing without saving

## Styling Features

- **Gradient Background**: Beautiful blue gradient from light to dark
- **Modern Card Design**: Clean white cards with subtle shadows
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Adapts to different screen sizes
- **Interactive Elements**: Visual feedback for all user interactions

## Browser Support

This app works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Future Enhancements

- [ ] Add task categories/tags
- [ ] Implement due dates
- [ ] Add task priorities
- [ ] Local storage persistence
- [ ] Dark mode toggle
- [ ] Task search and filtering
- [ ] Drag and drop reordering

---

Made with ❤️ using React and modern CSS