'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface Agent {
  id: string;
  name: string;
  emoji: string;
  status: string;
}

const useAgents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/api/agents`);
      setAgents(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching agents:', err);
      setError('Failed to fetch agents');
    } finally {
      setLoading(false);
    }
  };

  const assignTask = async (agentId: string, taskData: any) => {
    try {
      const response = await axios.post(`${API_URL}/api/agents/${agentId}/task`, taskData);
      return response.data;
    } catch (err) {
      console.error('Error assigning task:', err);
      throw err;
    }
  };

  const updateAgentStatus = async (agentId: string, status: string) => {
    try {
      const response = await axios.post(`${API_URL}/api/agents/${agentId}/status`, { status });
      return response.data;
    } catch (err) {
      console.error('Error updating agent status:', err);
      throw err;
    }
  };

  return {
    agents,
    loading,
    error,
    fetchAgents,
    assignTask,
    updateAgentStatus,
  };
};

export default useAgents;
