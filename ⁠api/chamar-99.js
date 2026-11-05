export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { endereco, cliente, idPedido } = req.body;
    const apiKey99 = process.env.API_99_KEY;

    if (!apiKey99) {
         return res.status(500).json({ sucesso: false, erro: 'Chave da 99 não configurada na Vercel.' });
    }

    try {
        // Exemplo didático de comunicação com a API da 99 Entrega (simulação)
        /* 
        const resposta99 = await fetch('https://api.99app.com/v1/delivery/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey99}`
            },
            body: JSON.stringify({
                delivery_info: {
                    dropoff_address: endereco,
                    receiver_name: cliente,
                    order_id: idPedido
                }
            })
        });
        const dadosRetorno = await resposta99.json();
        */
        
        // Resposta simulada de sucesso para a interface
        const mockResponse = {
            sucesso: true,
            tracking: `https://99app.com/track/SaborCaseiro_${idPedido}`,
            motoboy: "Carlos Santos (Honda Titan Vermelha)",
            placa: "ABC-1234",
            tempoChegada: "12 minutos"
        };

        return res.status(200).json(mockResponse);

    } catch (error) {
        console.error('Erro na API da 99:', error);
        return res.status(500).json({ sucesso: false, erro: 'Falha ao acionar servidor da 99 Entrega' });
    }
}
