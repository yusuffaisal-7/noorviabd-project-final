# 🤖 AI Chatbot Setup Guide - Powered by Gemini

## Overview
This AI chatbot is integrated with Google's Gemini AI model to provide intelligent, contextual responses to user queries. The chatbot appears as a floating button on all pages and can be minimized or closed as needed.

## 🚀 Features

- **Floating Design**: Appears as a chat button in the bottom-right corner
- **Minimizable**: Can be minimized to save space
- **Real-time AI Responses**: Powered by Google's Gemini AI
- **Responsive Design**: Works on all device sizes
- **Professional Styling**: Matches your website's color scheme
- **Safety Features**: Built-in content filtering and safety settings

## ⚙️ Setup Instructions

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key (keep it secure!)

### 2. Update the API Key

1. Open `src/api/geminiApi.js`
2. Replace `'YOUR_GEMINI_API_KEY'` with your actual API key:

```javascript
const GEMINI_API_KEY = 'your_actual_api_key_here';
```

### 3. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to any page on your website
3. Look for the blue chat button in the bottom-right corner
4. Click it to open the chatbot
5. Type a message and press Enter

## 🔧 Configuration Options

### Customizing the AI Personality

In `src/api/geminiApi.js`, you can modify the system prompt:

```javascript
text: `You are a helpful AI assistant for NoorVia BD, a business growth and innovation platform. 
Please provide helpful, professional, and accurate responses. 
Keep responses concise but informative. 
User message: ${message}`
```

### Adjusting AI Parameters

Modify the `generationConfig` object:

```javascript
generationConfig: {
  temperature: 0.7,        // 0.0 = very focused, 1.0 = very creative
  topK: 40,               // Number of tokens to consider
  topP: 0.95,            // Nucleus sampling parameter
  maxOutputTokens: 1024,  // Maximum response length
}
```

### Safety Settings

The chatbot includes safety filters for:
- Harassment
- Hate speech
- Sexually explicit content
- Dangerous content

## 🎨 Customization

### Colors and Styling

The chatbot uses your website's color scheme:
- **Primary Blue**: `#0A3D91`
- **Accent Gold**: `#D0A96A`
- **Text Colors**: `#111827` (dark) and white

### Position and Size

Modify the positioning in `src/components/AIChatbot.jsx`:

```javascript
// Change position
className="fixed bottom-6 right-6 z-50"

// Change size
className="w-80 sm:w-96"  // 320px on mobile, 384px on larger screens
```

## 🚨 Important Notes

### API Key Security
- **Never commit your API key to version control**
- **Consider using environment variables** for production
- **Monitor your API usage** to avoid unexpected charges

### Rate Limiting
- Gemini API has rate limits
- Implement retry logic for failed requests
- Consider caching responses for common queries

### Content Moderation
- The chatbot includes safety filters
- Monitor user interactions for inappropriate content
- Consider implementing additional moderation if needed

## 🔍 Troubleshooting

### Common Issues

1. **"API key invalid" error**
   - Check your API key in `geminiApi.js`
   - Ensure the key is active in Google AI Studio

2. **Chatbot not appearing**
   - Check browser console for errors
   - Verify the component is imported in `Main.jsx`

3. **Slow responses**
   - Check your internet connection
   - Monitor API response times
   - Consider implementing loading states

### Debug Mode

Enable console logging by uncommenting debug lines in the API file:

```javascript
console.log('API Response:', data);
```

## 📱 Mobile Optimization

The chatbot is fully responsive and includes:
- Touch-friendly buttons
- Mobile-optimized sizing
- Swipe gestures (can be added)
- Keyboard navigation support

## 🔮 Future Enhancements

Consider adding:
- **Chat History**: Save conversations locally
- **File Uploads**: Allow users to share documents
- **Voice Input**: Speech-to-text capabilities
- **Multi-language Support**: Internationalization
- **Analytics**: Track usage patterns
- **Custom Training**: Fine-tune responses for your business

## 📞 Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your API key is correct
3. Test with a simple message first
4. Check Google AI Studio for API status

---

**Happy Chatting! 🤖✨**
