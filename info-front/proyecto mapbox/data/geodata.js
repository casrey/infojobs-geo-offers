fetch('response-api/response.json')
  .then(response => response.json())
  .then(jobData => {
    // Obtener las ciudades de cada elemento en el array 'items'
    const cities = jobData.items.map(job => job.city);

    // Crear un objeto para almacenar el contador de ciudades
    const cityCount = {};

    // Contar las ciudades
    cities.forEach(city => {
      if (cityCount[city]) {
        cityCount[city]++;
      } else {
        cityCount[city] = 1;
      }
    });

    // Crear el objeto JSON
    const jsonResult = {
      cityCount: cityCount
    };

    // Convertir el objeto JSON a una cadena de texto
    const jsonString = JSON.stringify(jsonResult);

    // Mostrar el objeto JSON
    console.log(jsonString);

  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
  
