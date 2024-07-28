import 'dotenv/config';
import app from './app/index.js';

const PORT = process.env.SERVER_CONNECTION_PORT || 3000;

app.listen(PORT, () => {
  console.log(`app started correctly on port ${PORT}`);
});
