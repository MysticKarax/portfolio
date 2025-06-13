<template>
  <div class="chatbot-container">
    <!-- Chat Window -->
    <div
      v-if="isChatOpen"
      class="fixed bottom-20 right-5 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 transition-all duration-300"
      style="width: 350px; height: 450px"
    >
      <!-- Header -->
      <div
        class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between"
      >
        <div class="flex items-center">
          <img src="/chat.png" alt="Jordan" class="w-8 h-8 rounded-full mr-3" />
          <div>
            <h4 class="font-semibold">Chatbot (Work in progress...)</h4>
            <p class="text-sm opacity-90">Jordan</p>
          </div>
        </div>
        <button
          @click="toggleChat"
          class="text-white hover:bg-white/20 rounded p-1 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Messages -->
      <div
        ref="messagesContainer"
        class="flex-1 overflow-y-auto p-4 space-y-3"
        style="height: 300px"
      >
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="[
            'max-w-xs p-3 rounded-lg text-sm',
            message.sender === 'user'
              ? 'bg-purple-600 text-white ml-auto rounded-br-none w-fit'
              : 'bg-gray-200 text-gray-800 mr-auto rounded-bl-none w-fit',
          ]"
        >
          {{ message.text }}
        </div>

        <!-- Loading indicator -->
        <div v-if="isLoading" class="flex justify-start">
          <div class="bg-gray-200 dark:bg-gray-700 rounded-lg p-3 rounded-bl-none">
            <div class="flex space-x-1">
              <div
                class="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style="animation-delay: 0ms"
              ></div>
              <div
                class="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style="animation-delay: 150ms"
              ></div>
              <div
                class="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style="animation-delay: 300ms"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="px-4 pt-2 border-t border-gray-200 dark:border-gray-600">
        <form @submit.prevent="sendMessage" class="flex space-x-2">
          <input
            v-model="currentMessage"
            type="text"
            placeholder="Write a message..."
            class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 text-black"
            :disabled="isLoading"
          />
          <button
            type="submit"
            :disabled="!currentMessage.trim() || isLoading"
            class="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>

    <!-- Chat Toggle Button -->
    <button
      @click="toggleChat"
      class="fixed bottom-5 right-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 transform hover:scale-110"
      aria-label="Toggle Chat"
    >
      <svg
        v-if="!isChatOpen"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const isChatOpen = ref(false);
const messages = ref([]);
const currentMessage = ref('');
const isLoading = ref(false);
const messagesContainer = ref(null);

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;
  if (isChatOpen.value && messages.value.length === 0) {
    // Add initial greeting
    messages.value.push({
      sender: 'bot',
      text: "Hello! I'm Jordan's Chatbot. How can I help you today?",
    });
  }
};

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!currentMessage.value.trim() || isLoading.value) return;

  const userMessage = currentMessage.value.trim();

  // Add user message
  messages.value.push({
    sender: 'user',
    text: userMessage,
  });

  currentMessage.value = '';
  isLoading.value = true;

  await scrollToBottom();

  try {
    // Use environment variable for API URL, fallback to localhost for development
    const apiUrl = import.meta.env.VITE_CHATBOT_API_URL || 'http://127.0.0.1:5000';
    const response = await fetch(`${apiUrl}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Add bot response
    messages.value.push({
      sender: 'bot',
      text: data.answer,
    });
  } catch (error) {
    console.error('Error:', error);
    messages.value.push({
      sender: 'bot',
      text: "Sorry, I'm having trouble connecting to the server. Please try again later.",
    });
  } finally {
    isLoading.value = false;
    await scrollToBottom();
  }
};
</script>

<style scoped>
/* Custom scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>
