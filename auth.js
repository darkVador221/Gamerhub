const express = require('express');
const router = express.Router();
const Utilisateur = require('./models/User');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: '❌ Tous les champs sont requis.' });
  }
  try {
    const utilisateur = new Utilisateur({ name, email, password });
    await utilisateur.save();
    res.status(201).json({ message: '✅ Inscription réussie.' });
  } catch (err) {
    res.status(500).json({ message: '❌ Erreur serveur lors de l’inscription.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const utilisateur = await Utilisateur.findOne({ email, password });
  if (utilisateur) {
    res.json({ message: '✅ Connexion réussie.' });
  } else {
    res.status(401).json({ message: '❌ Email ou mot de passe incorrect.' });
  }
});

module.exports = router;