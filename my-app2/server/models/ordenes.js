module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordenes', {
    idordenes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
  	},
  	fecha :{
		type: DataTypes.DATE,
		allowNull: true
	}
  }, {
    tableName: 'ordenes'
  });
};

//Notar que el modelo fue realizado en base a la base de datos
