module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    idusuarios: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'usuarios'
  });
};

//Notar que el modelo fue realizado en base a la base de datos
