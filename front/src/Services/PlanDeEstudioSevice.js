import axios from 'axios';

const API_URL = 'http://192.168.1.13:8090/planDeEstudio';

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

planService.interceptors.response.use(undefined, errorHandler);
class planDeEstudioService {

    async getAsignaturas(asignatura) {
        console.log("Asignatura: " + asignatura);
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
    
}
export default new planDeEstudioService();