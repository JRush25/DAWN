module.exports = (sequelize, DataTypes) => {
    const Videojuego = sequelize.define("videojuego", {
      nombre: {
        type: DataTypes.STRING
      },
      genero: {
        type: DataTypes.STRING
      },
      plataforma: {
        type: DataTypes.STRING
      },
      descripcion: {
        type: DataTypes.STRING
      },
      portada: {
        type: DataTypes.STRING
      }
    });  
    return Videojuego;
  };