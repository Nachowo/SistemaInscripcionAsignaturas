import axios from 'axios';

const API_URL = 'http://192.168.1.13:8090/planDeEstudio';
//const API_URL = 'http://localhost:8090/planDeEstudio';

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

const planService = axios.create({
    baseURL: API_URL,
});
planService.interceptors.request.use((config) => {
    return config;
}, errorHandler);
planService.interceptors.response.use(undefined, errorHandler);
class planDeEstudioService {

    async getAsignaturas(asignatura) {
        console.log("Asignatura: " + asignatura);
        if(asignatura === undefined || asignatura === null || asignatura === "")
        {
            return null;
        }
        const res = await planService.get('/asignatura/'+asignatura);
        if(res.status === 200){
            return res;
        }
        return null;
    }

    async pasarHorario(asignatura, horario) {
        const res = await planService.post('/horario', { asignatura, horario });
        console.log(asignatura);
        console.log(horario);
        if (res.status === 200) {
            return res;
        }
        return null;
    }

    async getMalla(carrera){
        try{
            const res = await planService.get('/carrera/'+carrera);
            if(res.status === 200){
                return res;
            }
            return null;
        }catch(err){
            return null;
        }
    }

    async getCarrera(carrera){
        try{
            const res = await planService.get('/nombreCarrera/'+carrera);
            if(res.status === 200){
                return res;
            }
            return null;
        }catch(err){
            return null;
        }
    }
    
}
export default new planDeEstudioService();