# Chatbot Integration Guide

This document explains how the Python chatbot has been integrated into your Vue.js portfolio website.

## Overview

The integration consists of:
- **Backend**: Python Flask server running the trained chatbot model
- **Frontend**: Vue.js component that communicates with the Flask API
- **Communication**: RESTful API calls between frontend and backend

## Architecture

```
Vue Frontend (port 5173) ←→ Flask Backend (port 5000)
       ↓                              ↓
   ChatBot.vue                   app.py + chat.py
                                      ↓
                              Trained Neural Network
```

## Files Modified/Created

### Backend (C:/dev/python/proyectos/chatbot-deployment/)
- `app.py` - Added CORS support for cross-origin requests
- All other files remain unchanged

### Frontend (C:/dev/Vue/portfolio/)
- `src/components/ui/ChatBot.vue` - Complete Vue chatbot component
- `start-with-chatbot.bat` - Convenience script to start both servers
- `CHATBOT_INTEGRATION.md` - This documentation file

## How to Run

### Option 1: Use the Batch Script (Recommended)
```bash
# Double-click or run from command line
start-with-chatbot.bat
```

### Option 2: Manual Start
1. **Start the Flask Backend:**
   ```bash
   cd C:/dev/python/proyectos/chatbot-deployment
   python app.py
   ```
   Backend will run on: http://127.0.0.1:5000

2. **Start the Vue Frontend:**
   ```bash
   cd C:/dev/Vue/portfolio
   npm run dev
   ```
   Frontend will run on: http://localhost:5173

## Features

### Chatbot Capabilities
The chatbot can respond to:
- **Greetings**: "Hi", "Hello", "Hey", etc.
- **Goodbyes**: "Bye", "See you later", etc.
- **Thanks**: "Thank you", "Thanks", etc.
- **Items**: "What do you sell?", "Which items do you have?"
- **Payments**: "Do you take credit cards?", "Can I pay with Paypal?"
- **Delivery**: "How long does delivery take?", "When do I get my delivery?"
- **Jokes**: "Tell me a joke!", "Tell me something funny!"

### UI Features
- **Toggle Button**: Fixed position chat button in bottom-right corner
- **Responsive Design**: Adapts to dark/light mode
- **Real-time Messaging**: Instant responses from the AI
- **Loading States**: Visual feedback while processing
- **Error Handling**: Graceful handling of network issues
- **Auto-scroll**: Messages automatically scroll to bottom
- **Keyboard Support**: Press Enter to send messages

## Technical Details

### API Endpoint
- **URL**: `http://127.0.0.1:5000/predict`
- **Method**: POST
- **Content-Type**: application/json
- **Request Body**: `{"message": "user message"}`
- **Response**: `{"answer": "bot response"}`

### Vue Component Structure
```vue
<template>
  <!-- Chat toggle button -->
  <!-- Chat window (conditional) -->
    <!-- Header with Sam's info -->
    <!-- Messages container -->
    <!-- Input form -->
</template>

<script setup>
// Reactive state management
// Message handling logic
// API communication
</script>
```

### Dependencies
#### Backend
- Flask
- flask-cors (for cross-origin requests)
- torch (PyTorch for the neural network)
- nltk (natural language processing)

#### Frontend
- Vue 3 (Composition API)
- Tailwind CSS (for styling)
- Native fetch API (for HTTP requests)

## Customization

### Adding New Intents
To add new conversation topics:
1. Edit `intents.json` in the backend
2. Add new patterns and responses
3. Retrain the model: `python train.py`
4. Restart the Flask server

### Styling Changes
The chatbot uses Tailwind CSS classes. Key styling areas:
- **Colors**: Purple/blue gradient theme
- **Position**: Fixed bottom-right positioning
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Adapts to different screen sizes

### API Configuration
To change the backend URL, update the fetch call in `ChatBot.vue`:
```javascript
const response = await fetch('YOUR_NEW_URL/predict', {
  // ... rest of configuration
});
```

## Troubleshooting

### Common Issues
1. **CORS Errors**: Ensure flask-cors is installed and configured
2. **Connection Refused**: Make sure Flask server is running on port 5000
3. **Model Not Found**: Ensure `data.pth` exists in the backend directory
4. **Dependencies Missing**: Run `pip install flask flask-cors torch nltk`

### Development Tips
- Use browser dev tools to monitor network requests
- Check Flask console for backend errors
- Vue DevTools for frontend debugging
- Test API endpoints directly with curl or Postman

## Future Enhancements

### Possible Improvements
1. **Persistent Chat History**: Store conversations in localStorage
2. **Typing Indicators**: Show when bot is "thinking"
3. **Rich Responses**: Support for images, links, buttons
4. **User Authentication**: Personalized conversations
5. **Analytics**: Track popular questions and responses
6. **Mobile Optimization**: Better mobile chat experience

### Production Deployment

#### Current Status
- ✅ **Frontend**: Already deployed at https://jordidevmx-portfolio.netlify.app/
- ❌ **Backend**: Needs to be deployed to a cloud service

#### Steps to Deploy Chatbot to Production

1. **Deploy the Flask Backend** to a cloud service:
   - **Recommended services**: Railway, Render, Heroku, or DigitalOcean
   - Deploy the contents of `C:/dev/python/proyectos/chatbot-deployment/`
   - Ensure the service runs `python app.py` on startup

2. **Update Production Environment Variable**:
   - Edit `.env.production` and replace the placeholder URL:
   ```
   VITE_CHATBOT_API_URL=https://your-actual-backend-url.com
   ```

3. **Configure Netlify Environment Variables**:
   - Go to Netlify dashboard → Site settings → Environment variables
   - Add: `VITE_CHATBOT_API_URL` = `https://your-actual-backend-url.com`

4. **Update Backend CORS Configuration**:
   - Modify `app.py` to allow your production domain:
   ```python
   CORS(app, origins=["https://jordidevmx-portfolio.netlify.app", "http://localhost:5173"])
   ```

5. **Redeploy Frontend**:
   - Push changes to your Git repository
   - Netlify will automatically rebuild with the new environment variable

#### Environment Configuration
The chatbot now uses environment variables for API endpoints:
- **Development**: Uses `http://127.0.0.1:5000` (from `.env`)
- **Production**: Uses URL from `VITE_CHATBOT_API_URL` environment variable
- **Fallback**: Defaults to localhost if no environment variable is set

For production use, consider:
- **Backend**: Use a production WSGI server (gunicorn, uwsgi)
- **HTTPS**: Secure communication
- **Rate Limiting**: Prevent abuse
- **Logging**: Monitor usage and errors

## Support

If you encounter issues:
1. Check that both servers are running
2. Verify network connectivity
3. Review browser console for errors
4. Check Flask server logs
5. Ensure all dependencies are installed

The chatbot is now fully integrated and ready to use! 🚀

