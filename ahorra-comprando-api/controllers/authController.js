const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.register = (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json({ message: 'Error al registrar', error: err });
    res.json({ message: 'Usuario registrado correctamente' });
  });
};
exports.login = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error de servidor' });
    if (results.length === 0) return res.status(401).json({ message: 'Usuario no encontrado' });
    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Contraseña incorrecta' });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
};