import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Dummy bot statistics for our Visual Discord bot
const botStatistics = {
  servers: 1420,
  users: 89500,
  commandsExecuted: 8450000,
  uptime: 99.9,
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Bot statistics endpoint
  app.get('/api/stats', (req, res) => {
    res.json(botStatistics);
  });

  // Bot features endpoint
  app.get('/api/features', (req, res) => {
    const features = [
      {
        id: 1,
        name: "Custom Commands",
        description: "Create personalized commands tailored to your server's unique needs.",
        icon: "magic",
      },
      {
        id: 2,
        name: "Advanced Analytics",
        description: "Track user engagement and server activity with detailed statistics and reports.",
        icon: "chart-line",
      },
      {
        id: 3,
        name: "Moderation Tools",
        description: "Keep your server safe with powerful moderation features and automated filters.",
        icon: "shield-alt",
      },
      {
        id: 4,
        name: "Music Playback",
        description: "Stream high-quality music from various sources directly in your voice channels.",
        icon: "music",
      },
      {
        id: 5,
        name: "Mini Games",
        description: "Entertain your members with fun mini-games and interactive challenges.",
        icon: "gamepad",
      },
      {
        id: 6,
        name: "Custom Notifications",
        description: "Set up automated announcements and reminders for your community.",
        icon: "bell",
      },
    ];
    
    res.json(features);
  });

  // Bot commands endpoint
  app.get('/api/commands', (req, res) => {
    const commands = {
      general: [
        {
          command: "/help",
          title: "Display all available commands",
          description: "Shows the complete list of commands with descriptions",
        },
        {
          command: "/ping",
          title: "Check bot latency",
          description: "Displays the current connection speed to the bot",
        },
        {
          command: "/info",
          title: "Bot information",
          description: "Shows details about Visual bot, version, and uptime",
        },
        {
          command: "/setup",
          title: "Configure bot settings",
          description: "Interactive wizard to set up Visual for your server",
        },
      ],
      moderation: [
        {
          command: "/ban",
          title: "Ban a user",
          description: "Permanently removes a user from your server",
        },
        {
          command: "/kick",
          title: "Kick a user",
          description: "Removes a user from your server temporarily",
        },
        {
          command: "/mute",
          title: "Mute a user",
          description: "Prevents a user from sending messages or joining voice",
        },
        {
          command: "/clear",
          title: "Clear messages",
          description: "Deletes a specified amount of messages in a channel",
        },
      ],
    };
    
    res.json(commands);
  });

  const httpServer = createServer(app);

  return httpServer;
}
