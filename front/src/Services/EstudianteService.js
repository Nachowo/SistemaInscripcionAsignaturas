import axios from 'axios';
import PlanDeEstudioSevice from './PlanDeEstudioSevice';

const API_URL = 'http://192.168.1.13:8090/Estudiante';
//const API_URL = 'http://localhost:8090/Estudiante';

const errorHandler = (err) => {
    if(err.request){
        console.log("Error en el request");
    }else if(err.response){
        console.log("Error en el response");
    }else if(err.message){
        console.log("Error en el mensaje");
    }
    return Promise.reject(err);
}

const estudianteService = axios.create({
    baseURL: API_URL,
});
estudianteService.interceptors.request.use((config) => {
    return config;
}, errorHandler);
estudianteService.interceptors.response.use(undefined, errorHandler);
class EstudianteService {

    async getEstudiante(rut){
        try{
            const res = await estudianteService.get('/getByRut/'+rut);
            if(res.status === 200){
                return res;
            }
            return null;
        }catch(err){
            return null;
        }

    }

    
}
export default new EstudianteService();