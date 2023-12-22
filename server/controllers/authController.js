// server/controllers/authController.js
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
  
    if (username === 'utilisateur' && password === 'motdepasse') {
      const userData = {
        id: 1,
        username: 'utilisateur',
      };
  
  
      res.status(200).json(userData);
    } else {
      res.status(401).json({ error: 'Identifiants incorrects' });
    }
  };
  