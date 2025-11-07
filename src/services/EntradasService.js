const localKey = "entrada_list_data"
const createEntrada = (entrada) => {
    let lista = [];
    const data = localStorage.getItem(localKey);
    if (data != null) {
        lista = JSON.parse(data);
    }
    lista = [...lista, entrada];
    localStorage.setItem(localKey, JSON.stringify(lista));

}

const getEntrada = () => {
    const data = localStorage.getItem(localKey);
    if (data != null) {
        return JSON.parse(data);
    }
    return [];
}

export {createEntrada,getEntrada};