const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample route for the portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Aekamjot Singh',
    profession: 'Software Developer',
    projects: [
      { title: 'AdTech System', description: 'Ad delivery platform based on user data.' },
      { title: 'Log Analysis Software', description: 'Tool for extracting data from unstructured logs.' },
      { title: 'Traffic Violation Automation', description: 'System for automated ticket generation.' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
