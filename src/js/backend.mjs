import PocketBase from 'pocketbase';

const db = new PocketBase("http://127.0.0.1:8090/");

export async function getOffres() {
    try {
        let data = await db.collection('maison').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}

export async function getImageUrl(record, recordImage) {
    return db.files.getURL(record, recordImage);
}

export async function addOffre(house) {
    try {
        await db.collection('maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}

export async function filterByPrix(minPrix, maxPrix) {
    try {
        let data = await db.collection('maison').getFullList({
            filter: `prix >= ${minPrix} && prix <= ${maxPrix}`,
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en filtrant par prix', error);
        return [];
    }
}

export async function getAgents() {
    try {
        const data = await db.collection('agent').getFullList();
        console.log('AGENTS OK:', data);
        return data;
    } catch (error) {
        console.log('AGENTS ERROR:', error);
        return [];
    }
}

export async function getAgent(id) {
    try {
        const agent = await db.collection('agent').getOne(id, {
            expand: 'field',
        });
        console.log('AGENT OK:', agent);
        return agent;
    } catch (error) {
        console.log('Une erreur est survenue en lisant l\'agent', error);
        return null;
    }
}

export async function setFavori(house) {
    try {
        await db.collection('maison').update(house.id, { favori: !house.favori });
        return {
            success: true,
            message: 'Favori mis à jour avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en mettant à jour le favori', error);
        return {
            success: false,
            message: 'Une erreur est survenue en mettant à jour le favori'
        };
    }
}