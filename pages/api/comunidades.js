import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {
        const TOKEN = '73a14a30738ea8c66d9f12372106ef';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "968392", /* ID do Model criado no Dato */
            ...request.body,
            /* title: "Comunidade Teste",
            imageUrl: "https://github.com/kris-olvr21.png",
            creatorSlug: "kris-olvr21" */
        })

        console.log(registroCriado);

        response.json({
            dados: 'blablabla',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'GET não retornou, mas o POST sim!'
    })
}