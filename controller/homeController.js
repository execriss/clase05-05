let homeController = {
    raiz:(req, res) => res.send('hola chicos'),
    producto: (req, res) => res.send('hola entraste a productos')
}
module.exports = homeController;