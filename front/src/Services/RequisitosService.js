import axios from 'axios';

const API_URL = 'http://192.168.1.13:8090/Prerequisitos';
//const API_URL = 'http://localhost:8090/Prerequisitos';

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

const requisitoService = axios.create({
    baseURL: API_URL,
});
requisitoService.interceptors.request.use((config) => {
    return config;
}, errorHandler);
requisitoService.interceptors.response.use(undefined, errorHandler);
class RequisotosService {

    async getRequisitos(id){
        try{
            const res = await requisitoService.get('/getAnteriores/'+id);
            if(res.status === 200){
                return res;
            }
            return null;
        }catch(err){
            return null;
        }

    }

    async getPosterior(id){
        try{
            const res = await requisitoService.get('/getPosteriores/'+id);
            if(res.status === 200){
                return res;
            }
            return null;
        }catch(err){
            return null;
        }

    }

    

    
}
export default new RequisotosService();