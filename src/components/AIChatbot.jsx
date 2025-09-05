import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, Minimize2, MessageCircle } from 'lucide-react';
import { sendMessageToGemini } from '../api/geminiApi';
import { companyData, commonQuestions, businessScenarios } from '../data/chatbotTrainingData';
import useAxiosPublic from '../hooks/useAxiosPublic';

const AIChatbot = () => {
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your intelligent AI assistant, ready to help with your business needs. How can I assist you today? 🚀',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chatbot opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Fetch team members when chatbot opens
  useEffect(() => {
    if (isOpen) {
      const fetchTeamMembers = async () => {
        try {
          const { data } = await axiosPublic.get('/team');
          if (Array.isArray(data)) {
            setTeamMembers(data);
            console.log('Team members loaded:', data.length);
          }
        } catch (error) {
          console.log('Failed to load team members:', error.message);
        }
      };
      
      fetchTeamMembers();
      
      // Test Gemini API connection with better error handling
      const testConnection = async () => {
        try {
          console.log('Testing Gemini API connection...');
          const response = await sendMessageToGemini('Hello');
          console.log('Gemini API connection successful:', response.substring(0, 50) + '...');
        } catch (error) {
          console.error('Gemini API connection test failed:', error.message);
          console.error('Full error:', error);
          
          // Show user-friendly message about API status
          setMessages(prev => [...prev, {
            id: Date.now(),
            type: 'bot',
            content: '🔧 Note: I\'m currently using my enhanced knowledge base for responses. The AI service will be available shortly! 💼',
            timestamp: new Date(),
            isAIGenerated: false
          }]);
        }
      };
      
      // Delay the test to avoid blocking the UI
      setTimeout(testConnection, 1000);
    }
  }, [isOpen, axiosPublic]);

  const handleSendMessage = async (retryCount = 0) => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Enhanced intelligent response handling
      const lowerMessage = inputMessage.toLowerCase();
      
      // Check for business scenarios first
      const scenario = Object.values(businessScenarios).find(scenario => 
        lowerMessage.includes(scenario.question.toLowerCase().replace(/[?]/g, '').split(' ').slice(0, 3).join(' '))
      );
      
      // Check for common questions
      const commonQuestion = Object.keys(commonQuestions).find(question => 
        lowerMessage.includes(question.toLowerCase().replace(/[?]/g, '').split(' ').slice(0, 3).join(' '))
      );
      
      // Check for specific service inquiries
      const serviceKeywords = {
        'indenting': 'indenting',
        'sourcing': 'sourcing', 
        'outsourcing': 'outsourcing',
        'global trade': 'globalTrade',
        'international': 'globalTrade',
        'business consultation': 'consultation',
        'legal platform': 'legalPlatform',
        'legal support': 'legalDocumentation',
        'network development': 'networkDevelopment',
        'strategic consulting': 'strategicConsulting',
        'api': 'api',
        'excipients': 'excipients',
        'industrial materials': 'industrialMaterials',
        'fmcg': 'fmcg',
        'machinery': 'machineries'
      };
      
      // Check for team member inquiries
      const teamInquiry = teamMembers.find(member => 
        lowerMessage.includes(member.name.toLowerCase()) || 
        lowerMessage.includes(member.position.toLowerCase())
      );
      
      const serviceInquiry = Object.keys(serviceKeywords).find(keyword => 
        lowerMessage.includes(keyword)
      );
      
      let aiResponse;
      
      // Check if user wants detailed information
      const wantsDetails = lowerMessage.includes('more details') || 
                          lowerMessage.includes('explain') || 
                          lowerMessage.includes('tell me more') || 
                          lowerMessage.includes('detailed') || 
                          lowerMessage.includes('comprehensive') ||
                          lowerMessage.includes('details') ||
                          lowerMessage.includes('expand') ||
                          lowerMessage.includes('full') ||
                          lowerMessage.includes('complete');
      
      // Try Gemini AI first, but gracefully fall back to intelligent responses
      let isAIGenerated = true;
      try {
        console.log('Calling Gemini API for:', inputMessage);
        aiResponse = await sendMessageToGemini(inputMessage);
        console.log('Gemini API response successful, length:', aiResponse.length);
      } catch (error) {
        console.log('Gemini API failed, using intelligent fallback responses:', error.message);
        isAIGenerated = false;
        
        // Use intelligent fallback responses based on the message content
        if (teamInquiry && lowerMessage.includes('team') && lowerMessage.includes('member')) {
          if (wantsDetails) {
            aiResponse = `Great question about our team! 🎯\n\n${teamInquiry.name} is our ${teamInquiry.position}.\n\n${teamInquiry.bio || 'A valued member of our leadership team.'}\n\nAreas of expertise:\n${teamInquiry.expertise && Array.isArray(teamInquiry.expertise) ? teamInquiry.expertise.map(exp => `• ${exp}`).join('\n') : '• Strategic Planning\n• Business Development\n• Team Leadership'}\n\nExperience: ${teamInquiry.experience}\nEducation: ${teamInquiry.education}\n\nKey achievements:\n${teamInquiry.achievements ? teamInquiry.achievements.map(achievement => `• ${achievement}`).join('\n') : '• Led multiple successful projects\n• Established strategic partnerships\n• Mentored business professionals'}\n\nContact: ${teamInquiry.contact?.email || 'info@noorviabd.com'}\n\nReady to work with our expert team? Contact us to get started! 💼`;
          } else {
            aiResponse = `Great question about our team! 🎯\n\n${teamInquiry.name} is our ${teamInquiry.position}.\n\n${teamInquiry.bio || 'A valued member of our leadership team.'}\n\n${teamInquiry.expertise && Array.isArray(teamInquiry.expertise) ? `Areas of expertise:\n${teamInquiry.expertise.map(exp => `• ${exp}`).join('\n')}\n\n` : ''}Contact: ${teamInquiry.contact?.email || 'info@noorviabd.com'}\n\nReady to work with our expert team? Contact us to get started! 💼`;
          }
        } else if (scenario) {
          if (wantsDetails) {
            aiResponse = `${scenario.response}\n\nRelevant services: ${scenario.services.join(', ')}\n\n${scenario.nextSteps}\n\nAdditional information: This scenario represents a common business challenge we've successfully addressed multiple times. Our expertise in this area has helped numerous businesses achieve their goals.`;
          } else {
            aiResponse = scenario.response;
            if (scenario.services) {
              aiResponse += `\n\nRelevant services: ${scenario.services.join(', ')}`;
            }
            if (scenario.nextSteps) {
              aiResponse += `\n\n${scenario.nextSteps}`;
            }
          }
        } else if (commonQuestion) {
          aiResponse = commonQuestions[commonQuestion];
        } else if (serviceInquiry) {
          const serviceKey = serviceKeywords[serviceInquiry];
          const service = companyData.services[serviceKey];
          if (service) {
            if (wantsDetails) {
              aiResponse = `Comprehensive information about our ${service.name} service! 🚀\n\n${service.description}\n\nKey Benefits:\n${service.benefits.map(benefit => `• ${benefit}`).join('\n')}\n\nPerfect for: ${service.useCase}\n\nIndustries served: ${service.industries ? service.industries.join(', ') : 'Multiple industries'}\n\nProcess: ${service.process ? service.process.map(step => `• ${step}`).join('\n') : '• Initial consultation\n• Requirement analysis\n• Implementation\n• Ongoing support'}\n\nSuccess metrics: ${service.successRate || 'Proven track record with 95%+ client satisfaction'}\n\nReady to get started? Contact our Director Muhammad Rakib at +880 1849 995 274 for a personalized consultation! 💼`;
            } else {
              aiResponse = `Great question about our ${service.name} service! 🚀\n\n${service.description}\n\nKey Benefits:\n${service.benefits.map(benefit => `• ${benefit}`).join('\n')}\n\nPerfect for: ${service.useCase}\n\nIndustries served: ${service.industries ? service.industries.join(', ') : 'Multiple industries'}\n\nReady to get started? Contact our Director Muhammad Rakib at +880 1849 995 274 for a personalized consultation! 💼`;
            }
          } else {
            aiResponse = "I'd be happy to help you with information about our services and how we can assist your business. Please contact our Director Muhammad Rakib at +880 1849 995 274 for personalized assistance! 💼";
          }
        } else {
          // Provide intelligent fallback response
          if (wantsDetails) {
            aiResponse = "I'm here to help you with comprehensive information about NoorVia BD's services, products, and business solutions! 🌟\n\nWe're a professional business platform with 15+ years of experience, serving 500+ businesses across 50+ countries. Our comprehensive approach combines:\n\n• Strategic business consulting with 90% client satisfaction\n• International trade solutions expanding to 50+ countries\n• Legal platform support with 99.9% accuracy\n• Network development with 500+ professional connections\n• Supply chain optimization with proven cost reduction\n• Industry expertise across 8 major sectors\n\nWhether you need sourcing, legal support, strategic consulting, or international expansion, we have the expertise and proven track record to help you succeed!\n\nContact our Director Muhammad Rakib at +880 1849 995 274 or ask me about any specific service for detailed information! 💼";
          } else {
            aiResponse = "I'm here to help with NoorVia BD's services, products, and business solutions. 15+ years experience, 500+ businesses served. Contact Muhammad Rakib at +880 1849 995 274. Ask 'more details' for comprehensive info! 💼";
          }
        }
      }
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date(),
        isAIGenerated: isAIGenerated // Track if response is AI-generated
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Try to retry once for network errors
      if (retryCount === 0 && (error.message.includes('network') || error.message.includes('fetch'))) {
        console.log('Retrying message...');
        setTimeout(() => {
          handleSendMessage(1);
        }, 2000);
        return;
      }
      
      // Provide a more helpful error message
      let errorContent = 'Sorry, I encountered an error. Please try again.';
      
      if (error.message.includes('API key')) {
        errorContent = 'I\'m having trouble connecting to my AI service. Please contact our team for assistance.';
      } else if (error.message.includes('network') || error.message.includes('fetch')) {
        errorContent = 'I\'m having trouble connecting to the internet. Please check your connection and try again.';
      } else if (error.message.includes('Gemini API error')) {
        errorContent = 'I\'m experiencing technical difficulties. Let me provide you with some helpful information about our services instead!';
      }
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: errorContent,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      
      // Add a helpful follow-up message
      setTimeout(() => {
        const helpMessage = {
          id: Date.now() + 2,
          type: 'bot',
          content: 'In the meantime, you can ask me about our services, products, or how to contact our team. I\'m here to help! 😊',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, helpMessage]);
      }, 1000);
      
      // Add team overview if available
      if (teamMembers.length > 0) {
        setTimeout(() => {
          const teamMessage = {
            id: Date.now() + 3,
            type: 'bot',
            content: `💡 Did you know? Our team includes ${teamMembers.length} professionals ready to help your business succeed! Ask me about any team member or our services.`,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, teamMessage]);
        }, 2000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    if (isOpen) {
      setIsMinimized(!isMinimized);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const closeChatbot = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 z-50 bg-[#0A3D91] hover:bg-[#08306B] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Open AI Support"
      >
        <div className="relative">
          <Bot className="h-10 w-10" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96">
      {/* Chatbot Header */}
      <div className="bg-[#0A3D91] text-white p-4 rounded-t-2xl shadow-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-[#D0A96A] p-2 rounded-full relative">
            <Bot className="h-5 w-5 text-[#111827]" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse border border-white"></div>
          </div>
          <div>
            <h3 className="font-semibold">AI Support</h3>
            <p className="text-xs text-[#D0A96A]">Intelligent Assistant</p>
            <div className="flex items-center space-x-1 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Minimize"
          >
            <Minimize2 className="h-4 w-4" />
          </button>
          <button
            onClick={closeChatbot}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      {!isMinimized && (
        <>
          <div className="bg-white h-96 overflow-y-auto p-4 shadow-2xl">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-[#0A3D91] text-white rounded-br-md'
                        : 'bg-gray-100 text-[#111827] rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className={`text-xs ${
                        message.type === 'user' ? 'text-[#D0A96A]' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                      {message.type === 'bot' && message.isAIGenerated && (
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs text-green-600 font-medium">AI Generated</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-[#111827] p-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#0A3D91] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#0A3D91] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-[#0A3D91] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
              
              {/* Enhanced Suggested Questions */}
              {messages.length === 1 && (
                <div className="mt-4">
                  <p className="text-xs text-[#6B7280] mb-3 text-center">💡 Try asking me about:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      "What services do you offer?",
                      "Tell me about your team",
                      "How can you help my business?",
                      "What makes you different?",
                      "Ask for more details"
                    ].map((question, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setInputMessage(question);
                          setTimeout(() => handleSendMessage(), 100);
                        }}
                        className="text-left p-2 bg-[#FAF3E0] hover:bg-[#D0A96A]/20 rounded-lg text-xs text-[#111827] transition-colors border border-[#D0A96A]/20"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-white p-4 rounded-b-2xl shadow-2xl border-t border-gray-100">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-[#0A3D91] hover:bg-[#08306B] disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default AIChatbot;
