function getURL(e){
    const pageURL= window.location.search.substring(1);
    const urlVariable = pageURL.split('&');

    for(let i = 0; i < urlVariable.length; i++){
        const parameterName = urlVariable[i].split('=');
        if(parameterName[0] == e ){
            return parameterName[1];
        }
    }
}
const nomorsurat = getURL('nomorsurat');
// console.log(nomorsurat);

function getSurat(){
    fetch(`https://equran.id/api/surat/${nomorsurat}`)
    .then(Response => Response.json())
    .then(Response => {
        const judulSurat = document.querySelector('.judul-surat');
        const cardJudulSurat = `
        <strong>${Response.nama_latin} <br>${Response.nama}</strong>
                      <p>Jumlah Ayat : ${Response.jumlah_ayat} <br>Arti : ${Response.arti}</p>
                      <button class="btn btn-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                          </svg>
                        Play
                    </button>
                    `;
                    judulSurat.innerHTML=cardJudulSurat

        console.log(Response);
    });
}
getSurat()