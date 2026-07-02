import express from 'express';
import cors from 'cors';
import { Bonjour } from 'bonjour-service';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// Fetch Protocol API Implementation

app.get('/api/capabilities', (req, res) => {
  res.json({
    features: {
      color: true,
      duplex: true,
      borderless: false
    },
    mediaSizes: ["A4", "Letter", "Legal"],
    resolutions: ["300dpi", "600dpi"]
  });
});

app.get('/api/status', (req, res) => {
  res.json({
    state: "idle",
    alerts: [],
    supplies: {
      black: 85,
      cyan: 40,
      magenta: 60,
      yellow: 90
    }
  });
});

app.post('/api/jobs', (req, res) => {
  // Mock printing a job
  const jobId = `job-${Date.now()}`;
  console.log(`Received print job: ${jobId}`);
  res.status(202).json({ jobId });
});

app.get('/api/jobs/:jobId', (req, res) => {
  res.json({
    jobId: req.params.jobId,
    status: "completed"
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🖨️  Fetch Printer Simulator listening on port ${port}`);
  
  // mDNS Discovery using bonjour-service
  const bonjour = new Bonjour();
  
  bonjour.publish({
    name: 'Fetch Reference Simulator',
    type: 'fetch',
    protocol: 'tcp',
    port: port,
    txt: {
      txtvers: '1',
      model: 'Fetch Reference Simulator',
      status: 'idle'
    }
  });
  
  console.log(`📡 mDNS Broadcasting on _fetch._tcp (port ${port})`);
});
