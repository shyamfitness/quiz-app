# React Quiz App

A beautiful, interactive quiz application built with React, React Router, and Tailwind CSS.

## Features

- 📝 Multiple-choice questions with instant feedback
- 📊 Progress tracking with visual progress bar
- 🎯 Score calculation and performance feedback
- 🎨 Beautiful gradient UI with smooth animations
- 📱 Fully responsive design
- 🔄 Reset and retake functionality
- 🚀 Server-side rendering with React Router
- ⚡️ Hot Module Replacement (HMR)
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## How to Play

1. Read each question carefully
2. Select your answer from the multiple choice options
3. Click "Next Question" to proceed
4. View your final score and performance feedback
5. Click "Try Again" to restart the quiz

## Quiz Content

The quiz includes 5 questions covering various topics:
- Geography
- Science
- Mathematics
- Art History
- Biology

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
