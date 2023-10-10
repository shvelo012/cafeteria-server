const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/localCafeteria.db');

exports.getCredentials = (req, res) => {
  db.get('SELECT Username, Password FROM ADMIN', (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (!row) {
      return res.status(404).json({ error: 'Credentials not found' });
    }

    // Return the username and password
    res.json({ username: row.Username, password: row.Password });
  });
};

exports.setIsOpen = (req, res) => {
  const { IsOpen } = req.body;

  db.run(
    'UPDATE ADMIN SET IsOpen = ?',
    [IsOpen],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json({ message: 'IsOpen status updated successfully' });
    }
  );
};
