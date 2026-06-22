import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  private messages: any[] = [];

  async saveMessage(messageData: any) {
    const message = {
      id: Math.random().toString(36).substring(7),
      ...messageData,
      timestamp: new Date().toISOString(),
    };
    this.messages.push(message);
    return message;
  }

  async getMessages(roomId: string) {
    return this.messages.filter(m => m.roomId === roomId);
  }

  async getRoomUsers(roomId: string) {
    // This would be connected to actual room management
    return [];
  }
}
