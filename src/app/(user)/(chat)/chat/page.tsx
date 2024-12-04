import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '@/src/components/ui/chat/chat-bubble'
import { ChatMessageList } from '@/src/components/ui/chat/chat-message-list'
import React from 'react'
import { ChatInput } from '@/src/components/ui/chat/chat-input'
import { Send} from 'lucide-react'

export default function page() {
    return (
        <div className='w-full'>

            <ChatMessageList>
                <ChatBubble variant='sent'>
                    <ChatBubbleAvatar fallback='KH' />
                    <ChatBubbleMessage variant='sent'>
                        Hello, how has your day been? I hope you are doing well.
                    </ChatBubbleMessage>
                </ChatBubble>

                <ChatBubble variant='received'>
                    <ChatBubbleAvatar fallback='AI' src='/chat/ai.png' />
                    <ChatBubbleMessage variant='received'>
                        Hi, I am doing well, thank you for asking. How can I help you today?
                    </ChatBubbleMessage>
                </ChatBubble>

                <ChatBubble variant='received'>
                    <ChatBubbleAvatar fallback='AI' src='/chat/ai.png ' />
                    <ChatBubbleMessage isLoading />
                </ChatBubble>

                <form
                    className="relative rounded-full border bg-background focus-within:ring-1 focus-within:ring-ring p-1 flex items-center"
                >
                    <ChatInput
                        placeholder="Type your message here..."
                        className="min-h-12 resize-none  bg-background border-0 p-3 shadow-none  "
                    />
                    <div
                        
                        className="p-4 bg-primary rounded-full "
                    >
                        <Send size={18} color='#ffffff' />
                    </div>
                </form>
            </ChatMessageList>
        </div>

    )
}
