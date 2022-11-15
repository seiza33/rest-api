import { v4 as uuidv4 } from 'uuid';
let proizvodi = [];

export const sviProizvodi = (req, res) => {
    res.send(proizvodi);
}
export const noviProizvod = (req, res) => {
    
    const noviProizvod = req.body;
    
    proizvodi.push({...noviProizvod, id: uuidv4()});

    res.send('Dodata je nova sminka');
}

export const samoJedanProizvod = (req, res) => {
    const { id } = req.params;

    const jedanProizvod = proizvodi.find((noviProizvod) => noviProizvod.id === id);

    res.send(jedanProizvod);

}

export const brisanjeProizvoda = (req, res) => {
    const { id } = req.params;

    proizvodi = proizvodi.filter((noviProizvod) => noviProizvod.id != id);

    res.send(`Korisnik ciji je ID ${id} je obrisan`)
}

export const azuriranjeProizvoda = (req, res) => {
    const { id } = req.params;

    const { proizvod, boja, godina } = req.body;

    const noviProizvod = proizvodi.find((noviProizvod) => noviProizvod.id === id);

     if(proizvod) noviProizvod.proizvod = proizvod;
     if(boja)     noviProizvod.boja = boja;
     if(godina)   noviProizvod.godina = godina;

    res.send('Nova sminka je azurirana ! ')
} 