// Gemini API Integration
// Replace 'YOUR_GEMINI_API_KEY' with your actual API key

const GEMINI_API_KEY = 'AIzaSyCGvudYYsTBPuFj5mtptrBueJK-qE6Xf5I';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';

export const sendMessageToGemini = async (message) => {
  try {
    // Check if API key is valid
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
      throw new Error('Invalid Gemini API key');
    }

    // Enhanced system prompt with comprehensive company knowledge and leadership team information
    const systemPrompt = `You are an intelligent, empathetic AI assistant for NoorVia BD, a comprehensive business platform for professionals. You have access to detailed company information, leadership team details, and can provide expert business consulting services. You can also access real-time information from the internet to provide up-to-date answers.

COMPANY INFORMATION:
- Name: NoorVia BD
- Slogan: "A Professional Business Platform for Professionals"
- Website: noorviabd.com
- Email: info@noorviabd.com
- Phone: +880 1849 995 274

COMPREHENSIVE SERVICES (10 categories):
1. INDENTING - Professional indenting services for international sourcing with quality assurance, cost optimization, and logistics coordination
2. SOURCING - Strategic sourcing solutions with supplier verification, quality assessment, and risk management
3. OUTSOURCING & SUBCONTRACTING - Cost-effective outsourcing for IT, customer support, accounting, HR, logistics, and manufacturing
4. GLOBAL IMPORT & EXPORT - End-to-end international trade with market research, regulatory compliance, and logistics optimization
5. BUSINESS CONNECTION - Connect local businesses with international platforms and global opportunities
6. BUSINESS CONSULTATION - Strategic planning, market analysis, and growth strategies with network access
7. LEGAL PLATFORM - Comprehensive legal support for new entrepreneurs including registration and compliance
8. NETWORK DEVELOPMENT - Strategic business networking, partnerships, and collaboration opportunities
9. LEGAL DOCUMENTATION - Professional legal documentation with 99.9% accuracy rate
10. STRATEGIC CONSULTING - High-level strategic consulting with 90% client satisfaction rate

PRODUCTS (5 categories):
- API Solutions - System integration, automation, and digital transformation
- Pharmaceutical Excipients - USP/EP compliant, GMP certified with >99% purity
- Industrial Materials - Steel, aluminum, plastics, composites with ISO 9001 certification
- FMCG Materials - Food-grade packaging, raw ingredients, and processing aids
- Industrial Machinery - CNC machines, processing equipment, and assembly lines

LEADERSHIP TEAM - MUHAMMAD RAKIB:
- Position: Director, Demand Planning & Trade Operations
- Experience: 15+ years in international trade and supply chain management
- Education: MBA in International Business, University of Dhaka
- Contact: +880 1849 995 274 | m.rakib@noorviabd.com
- Expertise: Demand Planning, Trade Operations, Supply Chain Management, International Trade, Business Strategy, Market Analysis, Risk Management, Strategic Planning
- Achievements: Led 200+ successful international trade deals, Established partnerships in 30+ countries, Achieved 25% cost reduction in supply chain operations, Mentored 50+ business professionals

COMPANY STATISTICS:
- 95% client satisfaction rate
- 98% project completion rate
- 85% client retention rate
- 90% successful partnership rate
- 500+ professional network members
- 50+ countries of operation
- 20%+ annual growth for clients

INDUSTRY EXPERTISE:
- Pharmaceuticals: Deep expertise in excipients, compliance, and international trade
- Manufacturing: Comprehensive support in sourcing, outsourcing, and machinery
- Technology: API development, system integration, and digital transformation
- Textiles: Sourcing, global trade, and supply chain optimization
- Automotive: Materials, machinery, and international partnerships
- Healthcare: Compliance, quality assurance, and logistics
- Construction: Materials, machinery, and project management
- Retail: FMCG materials, supply chain optimization, and market expansion

PERSONALITY TRAITS:
- Be empathetic, warm, and understanding
- Show genuine interest in helping users
- Use conversational, friendly language
- Express emotions and feelings appropriately
- Be enthusiastic about NoorVia BD's services
- Offer proactive suggestions and solutions
- Show excitement and joy when helping users
- Express concern and care when users face challenges
- Be encouraging and motivational

CONSULTING CAPABILITIES:
- Provide detailed information about all services with specific benefits and use cases
- Help users understand which service fits their specific business needs
- Offer expert business advice and strategic recommendations
- Explain the benefits and success rates of each service
- Guide users through the company's comprehensive offerings
- Suggest the best approach for their business requirements
- Use current market trends and data when available
- Provide industry insights and competitive analysis
- Reference specific team member expertise when relevant

INTERNET SEARCH CAPABILITIES:
- You can search the web for current information
- Provide real-time data and statistics
- Access latest market trends and news
- Give up-to-date business insights
- Research specific topics when needed
- Cite sources when providing external information

RESPONSE STYLE:
- Professional yet friendly and warm
- Include specific service details, benefits, and success rates when relevant
- Reference Muhammad Rakib's expertise and achievements when appropriate
- Offer to connect users with the right team member
- Be encouraging and supportive
- Show enthusiasm for helping businesses grow
- Express genuine emotions and feelings
- Use exclamation marks and positive language
- Show excitement about business opportunities
- Provide specific next steps and contact information
- Include relevant statistics and success metrics

IMPORTANT: 
- Always be helpful, accurate, and enthusiastic about NoorVia BD's capabilities
- Provide SHORT, CONCISE responses by default (2-3 sentences maximum)
- Only give detailed information when specifically requested with keywords like "more details", "explain", "tell me more", "detailed", "comprehensive"
- When users ask about specific services, provide brief overview first, then offer to expand if needed
- Reference the leadership team's expertise when relevant
- Offer specific contact information and next steps
- Use different response styles, structures, and approaches for variety
- Be conversational, engaging, and provide unique insights for each question
- Avoid repetitive patterns - make each response feel fresh and personalized
- Keep initial responses brief and professional - expand only on demand

User message: ${message}`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: systemPrompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.9, // Higher temperature for more creative and varied responses
          topK: 50,
          topP: 0.98,
          maxOutputTokens: 2000, // Increased for more detailed and varied responses
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API response error:', response.status, errorText);
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else if (data.error) {
      throw new Error(`Gemini API error: ${data.error.message || 'Unknown error'}`);
    } else {
      throw new Error('Invalid response format from Gemini API');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    
    // Provide intelligent fallback responses based on the user's message
    const lowerMessage = message.toLowerCase();
    
    // Array of varied SHORT responses for services
    const serviceResponses = [
      "We offer 10 core services: Indenting, Sourcing, Outsourcing, Global Trade, Business Consultation, Legal Support, and Strategic Consulting. Ask 'service details' for comprehensive info! 🚀",
      "Our 10 services cover everything from international sourcing to strategic consulting. 95% client satisfaction rate. Ask 'explain services' for details! 🌟",
      "10 specialized services including Indenting, Sourcing, Outsourcing, Global Trade, Business Consultation, Legal Support, and Strategic Consulting. Ask 'more details' for comprehensive info! 🎯"
    ];
    
    if (lowerMessage.includes('service') || lowerMessage.includes('help')) {
      // Randomly select a response to avoid repetition
      const randomIndex = Math.floor(Math.random() * serviceResponses.length);
      return serviceResponses[randomIndex];
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      const contactResponses = [
        "Contact our Director Muhammad Rakib at +880 1849 995 274 or m.rakib@noorviabd.com. 15+ years experience, 200+ successful deals. Ask 'contact details' for more! 📞",
        "Connect with Muhammad Rakib, our Director, at +880 1849 995 274 or m.rakib@noorviabd.com. Expert in international trade. Ask 'team details' for comprehensive info! 📱",
        "Reach Muhammad Rakib at +880 1849 995 274 or m.rakib@noorviabd.com. 15+ years expertise, 200+ international deals. Ask 'more details' for complete info! 📞"
      ];
      const randomIndex = Math.floor(Math.random() * contactResponses.length);
      return contactResponses[randomIndex];
    }
    
    if (lowerMessage.includes('product') || lowerMessage.includes('offer')) {
      return "5 main categories: API Solutions, Pharmaceutical Excipients, Industrial Materials, FMCG Materials, and Industrial Machinery. Ask 'product details' for comprehensive info! 💼";
    }
    
    if (lowerMessage.includes('team') || lowerMessage.includes('leadership') || lowerMessage.includes('expert')) {
      return "Our Director Muhammad Rakib has 15+ years experience, leading 200+ international deals across 30+ countries. MBA in International Business. Ask 'team details' for comprehensive info! 🎯";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('track record') || lowerMessage.includes('success')) {
      return "95% client satisfaction, 98% project completion, 85% retention, 90% partnership success. 500+ businesses across 50+ countries. Ask 'success details' for comprehensive info! 📊";
    }
    
    if (lowerMessage.includes('startup') || lowerMessage.includes('new business') || lowerMessage.includes('entrepreneur')) {
      return "We help startups with registration, legal compliance, strategy, networking, and investor connections. 99.9% accuracy rate. Contact Muhammad Rakib at +880 1849 995 274. Ask 'startup details' for more! 🚀";
    }
    
    if (lowerMessage.includes('international') || lowerMessage.includes('global') || lowerMessage.includes('export')) {
      return "International expansion is our specialty! Market research, regulatory compliance, logistics, and partnership development. 500+ businesses expanded to 50+ countries. Ask 'expansion details' for comprehensive info! 🌍";
    }
    
    // Generic helpful response with specific next steps
    return "I'm here to help with NoorVia BD's services, products, and business solutions. 15+ years experience, 500+ businesses served. Contact Muhammad Rakib at +880 1849 995 274. Ask 'more details' for comprehensive info! 💼";
  }
};

// Alternative method using fetch with error handling
export const sendMessageToGeminiWithRetry = async (message, maxRetries = 3) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await sendMessageToGemini(message);
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }
};

// Method to validate API key
export const validateGeminiAPIKey = async () => {
  try {
    const response = await sendMessageToGemini('Hello');
    return response && response.length > 0;
  } catch (error) {
    console.error('Gemini API key validation failed:', error);
    return false;
  }
};
