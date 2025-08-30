type RotasParada = {
    id: string;
    rota: string;
    nameParada: string;
    descriptionParada: string;
    hourParada: string;
    addressParada: string;
};

export const rotasParada: RotasParada[] = [
    {
        id: '1',
        rota: 'Rota A',
        nameParada: 'Ponto Central',
        descriptionParada: 'Ponto de ônibus principal da cidade',   
        hourParada: '08:00 - 08:10',
        addressParada: 'Av. Principal, 123 - Centro'
    },
    {
        id: '2',
        rota: 'Rota A', 
        nameParada: 'Terminal Rodoviário',
        descriptionParada: 'Terminal de ônibus intermunicipal',
        hourParada: '08:15 - 08:25',
        addressParada: 'Rua das Flores, 456 - Bairro Novo',
    },
    {
        id: '3',
        rota: 'Rota B',
        nameParada: 'Shopping Center',
        descriptionParada: 'Centro comercial com várias lojas e restaurantes',
        hourParada: '14:00 - 14:15',
        addressParada: 'Av. das Américas, 789 - Bairro Comercial',
    },
    {
        id: '4',
        rota: 'Rota B',
        nameParada: 'Parque da Cidade',
        descriptionParada: 'Área verde para lazer e atividades ao ar livre',
        hourParada: '20:00 - 20:10',
        addressParada: 'Rua do Parque, s/n - Bairro Verde',
    },
    {
        id: '5',
        rota: 'Rota A',
        nameParada: 'Estação Central',
        descriptionParada: 'Principal estação de trem da cidade',
        hourParada: '10:00 - 10:15',
        addressParada: 'Av. Central, 321 - Centro',
    },
    {
        id: '6',
        rota: 'Rota B',
        nameParada: 'Universidade Federal',
        descriptionParada: 'Campus principal da universidade',
        hourParada: '16:00 - 16:10',
        addressParada: 'Rua Universitária, 654 - Bairro Acadêmico',
    },
    {
        id: '7',
        rota: 'Rota A',
        nameParada: 'Hospital Municipal',
        descriptionParada: 'Principal hospital da cidade',
        hourParada: '12:00 - 12:10',
        addressParada: 'Av. Saúde, 987 - Bairro Hospitalar',
    },
    {
        id: '8',
        rota: 'Rota B',
        nameParada: 'Biblioteca Pública',
        descriptionParada: 'Biblioteca com acervo variado para todas as idades',
        hourParada: '18:00 - 18:15',
        addressParada: 'Rua da Cultura, 111 - Centro',
    },
    {
        id: '9',
        rota: 'Rota A',
        nameParada: 'Praça da Matriz',
        descriptionParada: 'Praça central com igreja histórica',
        hourParada: '09:00 - 09:10',
        addressParada: 'Praça da Matriz, s/n - Centro',
    },
    {
        id: '10',
        rota: 'Rota B',
        nameParada: 'Centro Esportivo',
        descriptionParada: 'Complexo esportivo com várias modalidades',
        hourParada: '19:00 - 19:10',
        addressParada: 'Av. do Esporte, 222 - Bairro Ativo',
    },
];