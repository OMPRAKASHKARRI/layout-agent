import { useState } from 'react';

import initialLayout from '../data/initialLayout.json';

import { api } from '../utils/api';

export function useLayoutAgent() {
  const [layout, setLayout] =
    useState(initialLayout);

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const sendMessage = async (text) => {
    const userMessage = {
      role: 'user',
      content: text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {
      setLoading(true);

      const response = await api.post(
        '/chat',
        {
          message: text,
          layout,
          history: messages.slice(-6),
        }
      );

      setLayout(
        response.data.updatedLayout
      );

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            response.data.explanation,
        },
      ]);
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Something went wrong',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    layout,
    messages,
    loading,
    sendMessage,
  };
}