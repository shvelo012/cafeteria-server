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
    [Number(IsOpen)],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      let message;
      if (IsOpen) {
        message = 'IsOpen status updated successfully. Cafeteria is now open.';
      } else {
        message = 'IsOpen status updated successfully. Cafeteria is now closed.';
      }

      res.json({ message });
    }
  );
};

exports.getIsOpen = (req, res) => {
  // Query the database to get the current value of IsOpen
  db.get('SELECT IsOpen FROM ADMIN', (err, row) => {
    if (err) {
      console.log(selectErr);
      return res.status(500).json({ error: 'Error retrieving IsOpen value' });
    }

    const currentIsOpen = row.IsOpen;
    res.json({ IsOpen: currentIsOpen });
  });
};

