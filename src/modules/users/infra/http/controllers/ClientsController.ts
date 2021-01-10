import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClientService from '../../../services/CreateClients.service';

export default class ClientController {
  public async create(req: Request, res: Response): Promise<Response> {
    const clientData = req.body;

    const createClient = container.resolve(CreateClientService);

    const client = await createClient.run(clientData);

    return res.status(200).json(client);
  }
}
