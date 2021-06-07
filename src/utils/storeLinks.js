import AsyncStorage from "@react-native-async-storage/async-storage";

// Buscar os links salvos
export async function getLinksSave(key) {
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

// Salvar um link no storage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    // Verificar se já existe o link
    const hasLink = linksStored.some((link) => link.id === newLink.id);

    if (hasLink) {
        //console.log("Esse link já existe na lista.");
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    //console.log("Link salvo com sucesso!");
}

// Deletar um link específico
export async function deleteLink(links, id) {
    let myLinks = links.filter((item) => {
        return item.id !== id;
    });

    await AsyncStorage.setItem("uwrdevlinks", JSON.stringify(myLinks));

    //console.log("link deletado do storage");

    return myLinks;
}
