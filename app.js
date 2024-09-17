const miInput = document.getElementById('miInput');
const imgContainer = document.getElementById('imgContainer');

// LISTENERS
miInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const valorInput = miInput.value;
    readUsersWithAsync(valorInput);
    miInput.value = '';
  }
});

// FUNCIONES
const readUsersWithAsync = async (category) => {
  try {
    const request = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${category}&client_id=xv1UMv52pK1prAt_DNGPeAgMaUKOAZYZjbG00Ebkr0w`);
    const datos = await request.json();

    pintarImg(datos.results);

  } catch (error) {
    console.log('Error:', error);
  }
};

const pintarImg = (datos) => {
  imgContainer.innerHTML = '';

  datos.forEach((dato) => {
    
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'imgWrapper';

    const img = document.createElement('img');

    img.src = dato.links.download; 

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const buttonSave = document.createElement('button');
    buttonSave.className = 'buttonSave';
    buttonSave.textContent = 'Guardar';

    overlay.appendChild(buttonSave);
    imgWrapper.appendChild(img);
    imgWrapper.appendChild(overlay);
    imgContainer.appendChild(imgWrapper);

  });
};
