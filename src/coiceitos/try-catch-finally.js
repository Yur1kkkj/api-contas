try {
    throw new Error('Servidor fora do ar...')
    console.log("sistema foi iniciado...");
} catch (error) {
    console.log(error);
} finally {
    console.log('sistema foi encerrado...');
}

