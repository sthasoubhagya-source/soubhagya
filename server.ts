import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

const messages: ContactMessage[] = [
  {
    id: 'demo-1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@techrecruits.co',
    subject: 'Frontend Developer Opportunity',
    message: 'Hi! Loved your portfolio projects and clean UI work. Would love to discuss an opening on our engineering team.',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  }
];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Contact form submission endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ success: false, error: 'Name is required.' });
    }
    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'A valid email address is required.' });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({ success: false, error: 'Message must be at least 5 characters long.' });
    }

    const newMessage: ContactMessage = {
      id: 'msg-' + Date.now(),
      name: name.trim(),
      email: email.trim(),
      subject: subject && typeof subject === 'string' && subject.trim() ? subject.trim() : 'Portfolio Inquiry',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    messages.unshift(newMessage);
    console.log(`[Contact Form] New inquiry from ${newMessage.name} (${newMessage.email}): ${newMessage.subject}`);

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you shortly.',
      id: newMessage.id,
    });
  });

  // Get messages endpoint (owner inbox view)
  app.get('/api/contact/messages', (_req, res) => {
    return res.json({ success: true, count: messages.length, messages });
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    return res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // In development, hook Vite middlewares
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 DevFolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
