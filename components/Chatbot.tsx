import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from '../types';
import { sendMessageToChatbot } from '../services/geminiService';
import { SendIcon, CloseIcon, LoadingSpinner } from './Icons';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const MarkdownRenderer: React.FC<{ children: string }> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        h3: ({...props}) => <h3 className="text-lg font-bold mt-4 mb-2 text-cyan-400" {...props} />,
        strong: ({...props}) => <strong className="font-bold text-white" {...props} />,
        ul: ({...props}) => <ul className="list-disc list-inside space-y-1 my-2" {...props} />,
        li: ({...props}) => <li className="pl-2" {...props} />,
        p: ({...props}) => <p className="mb-2 last:mb-0" {...props} />,
        hr: ({...props}) => <hr className="my-4 border-gray-600" {...props} />,
        a: ({...props}) => <a className="text-cyan-400 hover:underline" {...props} />,
        // FIX: The `code` component for `react-markdown` had a typing issue on the `inline` property.
        // The signature has been updated to correctly destructure all special props inside the function body, resolving the type error
        // and preventing internal props like `node` from being passed to the DOM.
        // The styling logic is also corrected to apply custom classes alongside `react-markdown`'s classes.
        // @FIX: Correctly type the props for the custom code component to resolve the TypeScript error.
        code: ({ node, inline, className, children, ...rest }: any) => {
          const style = inline
            ? 'bg-gray-900 px-1 py-0.5 rounded text-sm'
            : 'block whitespace-pre-wrap bg-gray-900 p-2 rounded text-sm';
          
          const finalClassName = className ? `${style} ${className}` : style;

          return (
            <code className={finalClassName} {...rest}>
              {children}
            </code>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! How can I help you with your English studies today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const botResponse = await sendMessageToChatbot(input, messages);
        const modelMessage: ChatMessage = { role: 'model', text: botResponse };
        setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
        const errorMessage: ChatMessage = { role: 'model', text: "I'm sorry, I'm having trouble connecting. Please try again later." };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 w-full max-w-lg h-[80vh] rounded-lg shadow-2xl flex flex-col mx-4">
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Chat with Akshaya Ma'am ❤️</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl text-left ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                {msg.role === 'model' ? <MarkdownRenderer>{msg.text}</MarkdownRenderer> : msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
                <div className="max-w-xs md:max-w-md px-4 py-2 rounded-xl bg-gray-700 text-gray-200 flex items-center">
                    <LoadingSpinner className="w-5 h-5 mr-2" />
                    <span>Typing...</span>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-gray-700 flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a question..."
            className="flex-1 bg-gray-700 border border-gray-600 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button onClick={handleSend} disabled={isLoading || input.trim() === ''} className="ml-3 bg-blue-600 text-white p-2 rounded-full disabled:bg-gray-500 hover:bg-blue-700 transition-colors">
            <SendIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;