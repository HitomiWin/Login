const sqlite3 = require("sqlite3");
const path = require("path")
const db = new sqlite3.Database(path.join(__dirname, "../../myLoginAppDB.db"));

const getAllPersons = (req, res) => {

  let query = /*sql*/ `SELECT personId, firstName, lastName, email, age FROM persons`
  // [] is used because there is not params
  db.all(query, [], (err, persons) => {
    if (persons) {
      res.status(200).json(persons)
    } else {
      res.status(404).json({
        error: "No Persons"
      })
    }
  });
}

module.exports = {
  getAllPersons,
}