const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/localCafeteria.db');

exports.addFood = (req, res) => {
  const { Name, Price, Ingredients, Quantity } = req.body;

  // Insert the new food item into the FOOD table
  db.run(
    'INSERT INTO FOOD (Name, Price, Ingredients, Quantity) VALUES (?, ?, ?, ?)',
    [Name, Price, Ingredients, Quantity],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json({
        message: `${Name} added successfully. Price: ${Price}, Ingredients: ${Ingredients}, Quantity: ${Quantity}`
      });
    }
  );
};

exports.changeQuantity = (req, res) => {
  const { Quantity, Id } = req.body;
  // Update the quantity of the food item with the specified ID
  db.run(
    'UPDATE FOOD SET Quantity = ? WHERE ID = ?',
    [Quantity, Id],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json({ message: `Quantity updated successfully. Changed by ${Quantity} units.` });
    }
  );
};

exports.resetQuantity = (req, res) => {
  // Reset the quantity of all food items to 0
  db.run(
    'UPDATE FOOD SET Quantity = 0',
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json({ message: `Quantity reset successfully for all food items. Quantity now is 0` });
    }
  );
};



exports.getAllFood = (req, res) => {
  // Retrieve all food items from the FOOD table
  db.all('SELECT * FROM FOOD', (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ message: 'Successfully retrieved all food items.', data: rows });
  });
};

exports.deleteAllFood = (req, res) => {
  // Delete all food items from the FOOD table
  db.run('DELETE FROM FOOD', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ message: 'Successfully deleted all food items.' });
  });
};
