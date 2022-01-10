import { Sequelize} from "sequelize";
import { sequelize } from "../database/database"; // importamos la cadena de conexion
import Estudiante from "./Estudiante"; 
import Asignatura from "./Asignatura"; 

const Estudiante_asignatura_n_n = sequelize.define('estudiante_asignatura_n_n',{
    id_asignatura:{
        type: Sequelize.UUIDV4,  // este se ha quedado en integer
        primaryKey:true,
    },  
    id_estudiante:{
        type: Sequelize.UUIDV4,  // este se ha quedado en integer
        primaryKey:true,
    },  
    
},{
    timestamps:false
})
 

// habra que probar si basta con esto
Estudiante.belongsToMany(Asignatura,{through:Estudiante_asignatura_n_n,foreignKey:'id_estudiante',sourceKey:'id'});
Asignatura.belongsToMany(Estudiante,{through:Estudiante_asignatura_n_n,foreignKey:'id_asignatura',sourceKey:'id'});


export default Estudiante_asignatura_n_n;