const express = require('express');
const sequelize = require('./database');
const User = require('./user');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

(async () => {
    try {
        await sequelize.sync();
        console.log(' Database synced successfully.');
        app.listen(PORT, () => console.log(` Server is running on http://localhost:${PORT}`));
    } catch (error) {
        console.error('Error syncing database:', error);
        process.exit(1);
    }
})();
