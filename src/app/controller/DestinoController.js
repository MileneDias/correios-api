import Destino from '../models/Destino';

class DestinoController{
    async index(req, res){
        console.log('teste de destino ID', req.id);
        const data = await Destino.findAll();
        return res.json(data)
    }

    async store(req, res){
        const { rua, numeroCasa, uf, peso, valor } = req.body;

        if(!rua || !numeroCasa || !uf || !peso || !valor){
            return res.status(400).json({
                message: 'Algum dado incorreto ou não informado',
            });
        }
        
        const dado = await Destino.create({
            rua, 
            numeroCasa,
            uf,
            peso,
            valor,
        });

        return res.json(dado);
    }
}

export default new DestinoController();