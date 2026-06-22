import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({
  namespace: 'chat',
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private chatService: ChatService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    this.server.emit('user_connected', {
      userId: client.id,
      timestamp: new Date().toISOString(),
    });
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.server.emit('user_disconnected', {
      userId: client.id,
      timestamp: new Date().toISOString(),
    });
  }

  @SubscribeMessage('message')
  async handleMessage(client: Socket, data: any) {
    console.log('Message received:', data);
    const message = await this.chatService.saveMessage(data);
    this.server.emit('new_message', message);
    return message;
  }

  @SubscribeMessage('typing')
  handleTyping(client: Socket, data: any) {
    this.server.emit('user_typing', {
      userId: client.id,
      roomId: data.roomId,
      timestamp: new Date().toISOString(),
    });
  }

  @SubscribeMessage('join_room')
  handleJoinRoom(client: Socket, data: any) {
    client.join(data.roomId);
    this.server.to(data.roomId).emit('user_joined', {
      userId: client.id,
      roomId: data.roomId,
      timestamp: new Date().toISOString(),
    });
  }

  @SubscribeMessage('leave_room')
  handleLeaveRoom(client: Socket, data: any) {
    client.leave(data.roomId);
    this.server.to(data.roomId).emit('user_left', {
      userId: client.id,
      roomId: data.roomId,
      timestamp: new Date().toISOString(),
    });
  }
}
