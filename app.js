// ==========================================
// DICCIONARIOS Y PLANTILLAS BASE
// ==========================================
const PAISES_PAGEANT = [
    { n: "Albania", i: "al" }, { n: "Angola", i: "ao" }, { n: "Argentina", i: "ar" }, { n: "Aruba", i: "aw" },
    { n: "Australia", i: "au" }, { n: "Bahamas", i: "bs" }, { n: "Belgium", i: "be" }, { n: "Bolivia", i: "bo" },
    { n: "Brazil", i: "br" }, { n: "Bulgaria", i: "bg" }, { n: "Cambodia", i: "kh" }, { n: "Cameroon", i: "cm" },
    { n: "Canada", i: "ca" }, { n: "Chile", i: "cl" }, { n: "China", i: "cn" }, { n: "Colombia", i: "co" },
    { n: "Costa Rica", i: "cr" }, { n: "Croatia", i: "hr" }, { n: "Cuba", i: "cu" }, { n: "Curacao", i: "cw" },
    { n: "Czech Republic", i: "cz" }, { n: "Denmark", i: "dk" }, { n: "Dominican Republic", i: "do" },
    { n: "Ecuador", i: "ec" }, { n: "El Salvador", i: "sv" }, { n: "Equatorial Guinea", i: "gq" },
    { n: "Finland", i: "fi" }, { n: "France", i: "fr" }, { n: "Germany", i: "de" }, { n: "Ghana", i: "gh" },
    { n: "Great Britain", i: "gb" }, { n: "Greece", i: "gr" }, { n: "Guatemala", i: "gt" }, { n: "Haiti", i: "ht" },
    { n: "Honduras", i: "hn" }, { n: "Iceland", i: "is" }, { n: "India", i: "in" }, { n: "Indonesia", i: "id" },
    { n: "Ireland", i: "ie" }, { n: "Italy", i: "it" }, { n: "Jamaica", i: "jm" }, { n: "Japan", i: "jp" },
    { n: "Kenya", i: "ke" }, { n: "Korea", i: "kr" }, { n: "Laos", i: "la" }, { n: "Lebanon", i: "lb" },
    { n: "Malaysia", i: "my" }, { n: "Mauritius", i: "mu" }, { n: "Mexico", i: "mx" }, { n: "Mongolia", i: "mn" },
    { n: "Myanmar", i: "mm" }, { n: "Namibia", i: "na" }, { n: "Nepal", i: "np" }, { n: "Netherlands", i: "nl" },
    { n: "Nicaragua", i: "ni" }, { n: "Nigeria", i: "ng" }, { n: "Norway", i: "no" }, { n: "Panama", i: "pa" },
    { n: "Paraguay", i: "py" }, { n: "Peru", i: "pe" }, { n: "Philippines", i: "ph" }, { n: "Poland", i: "pl" },
    { n: "Portugal", i: "pt" }, { n: "Puerto Rico", i: "pr" }, { n: "Russia", i: "ru" }, { n: "Singapore", i: "sg" },
    { n: "Slovak Republic", i: "sk" }, { n: "South Africa", i: "za" }, { n: "Spain", i: "es" },
    { n: "Sri Lanka", i: "lk" }, { n: "Sweden", i: "se" }, { n: "Switzerland", i: "ch" }, { n: "Thailand", i: "th" },
    { n: "Trinidad and Tobago", i: "tt" }, { n: "Turkey", i: "tr" }, { n: "Ukraine", i: "ua" },
    { n: "Uruguay", i: "uy" }, { n: "USA", i: "us" }, { n: "Venezuela", i: "ve" }, { n: "Vietnam", i: "vn" },
    { n: "Zimbabwe", i: "zw" }
];

const MGI_56_CANDIDATAS_OFICIALES = [
    { nombre: "Alexandra Zanela", foto: "https://flagcdn.com/w160/ca.png" }, { nombre: "Alexia Núñez", foto: "https://flagcdn.com/w160/ph.png" },
    { nombre: "Angel Bhathal", foto: "https://flagcdn.com/w160/ca.png" }, { nombre: "Azzaya Tsogt-Ochir", foto: "https://flagcdn.com/w160/mn.png" },
    { nombre: "Carrie Xie Lu Xing Dan", foto: "https://flagcdn.com/w160/cn.png" }, { nombre: "Chabeli Peña", foto: "https://flagcdn.com/w160/do.png" },
    { nombre: "Danilka German", foto: "https://flagcdn.com/w160/do.png" }, { nombre: "Dela Deniya", foto: "https://flagcdn.com/w160/id.png" },
    { nombre: "Domiah Suvili Lihonde", foto: "https://flagcdn.com/w160/zm.png" }, { nombre: "Duygu Çakmak", foto: "https://flagcdn.com/w160/tr.png" },
    { nombre: "Elizabeth Cron", foto: "https://flagcdn.com/w160/ro.png" }, { nombre: "Faddya Halabi", foto: "https://flagcdn.com/w160/it.png" },
    { nombre: "Faith Maria Porter", foto: "https://flagcdn.com/w160/gh.png" }, { nombre: "Fationa Ndokaj", foto: "https://flagcdn.com/w160/al.png" },
    { nombre: "Francia Cortés", foto: "https://flagcdn.com/w160/mx.png" }, { nombre: "Fuschia Anne Ravena", foto: "https://flagcdn.com/w160/ph.png" },
    { nombre: "Gabriela de la Cruz", foto: "https://flagcdn.com/w160/ve.png" }, { nombre: "Gazini Ganados", foto: "https://flagcdn.com/w160/ph.png" },
    { nombre: "Harriotte Lane", foto: "https://flagcdn.com/w160/gb.png" }, { nombre: "Nguyen Huong Giang", foto: "https://flagcdn.com/w160/vn.png" },
    { nombre: "Imelda Schweighart", foto: "https://flagcdn.com/w160/ph.png" }, { nombre: "Isabella Santiago", foto: "https://flagcdn.com/w160/ve.png" },
    { nombre: "Jana Marvanová", foto: "https://flagcdn.com/w160/cz.png" }, { nombre: "Kelly van den Dungen", foto: "https://flagcdn.com/w160/nl.png" },
    { nombre: "Keylyn Trajano", foto: "https://flagcdn.com/w160/ph.png" }, { nombre: "Kodchakorn Korntrakoon", foto: "https://flagcdn.com/w160/th.png" },
    { nombre: "Lattana Munvilay", foto: "https://flagcdn.com/w160/la.png" }, { nombre: "Lilia Gzraryan", foto: "https://flagcdn.com/w160/am.png" },
    { nombre: "Makeeba Kaaya", foto: "https://flagcdn.com/w160/gh.png" }, { nombre: "Mariana Beckova", foto: "https://flagcdn.com/w160/cz.png" },
    { nombre: "Marie Emma Diamala", foto: "https://flagcdn.com/w160/ci.png" }, { nombre: "Mejreme Hajdaraj", foto: "https://flagcdn.com/w160/xk.png" },
    { nombre: "Melania Villalta", foto: "https://flagcdn.com/w160/cr.png" }, { nombre: "Mika", foto: "https://flagcdn.com/w160/cn.png" },
    { nombre: "Miranda Aengmany", foto: "https://flagcdn.com/w160/la.png" }, { nombre: "Nicole Puello", foto: "https://flagcdn.com/w160/do.png" },
    { nombre: "Pearl Zhou", foto: "https://flagcdn.com/w160/cn.png" }, { nombre: "Priscilla Londoño", foto: "https://flagcdn.com/w160/co.png" },
    { nombre: "Qatrisha Zairyah", foto: "https://flagcdn.com/w160/sg.png" }, { nombre: "Samantha Quenedit", foto: "https://flagcdn.com/w160/ec.png" },
    { nombre: "Sanjana Sekharmantri", foto: "https://flagcdn.com/w160/in.png" }, { nombre: "Sanskriti Bhatta", foto: "https://flagcdn.com/w160/np.png" },
    { nombre: "Selene Bublitz", foto: "https://flagcdn.com/w160/ar.png" }, { nombre: "Siqi Jiang", foto: "https://flagcdn.com/w160/cn.png" },
    { nombre: "Sonia Xuziyan", foto: "https://flagcdn.com/w160/cn.png" }, { nombre: "Suheyn Cipriani", foto: "https://flagcdn.com/w160/pe.png" },
    { nombre: "Sukie Cheema", foto: "https://flagcdn.com/w160/us.png" }, { nombre: "Tarina Botes", foto: "https://flagcdn.com/w160/th.png" },
    { nombre: "Thet San Andersen", foto: "https://flagcdn.com/w160/mm.png" }, { nombre: "Tishani Perera", foto: "https://flagcdn.com/w160/lk.png" },
    { nombre: "Vanessa Pulgarin", foto: "https://flagcdn.com/w160/co.png" }, { nombre: "Yada Theppanom", foto: "https://flagcdn.com/w160/th.png" },
    { nombre: "Yamilex Hernandez", foto: "https://flagcdn.com/w160/do.png" }, { nombre: "Yining Wang", foto: "https://flagcdn.com/w160/hk.png" },
    { nombre: "Yuka Oyama", foto: "https://flagcdn.com/w160/jp.png" }, { nombre: "Zewen Qin", foto: "https://flagcdn.com/w160/cn.png" }
];

const PLANTILLAS_BASE = [
    {
        id_plantilla: 'mgi_all_stars_base',
        icono: '🌟',
        nombre: 'MGI All Stars 2026',
        tema: 'mgi',
        rondas: [
            { nombre: 'Preliminar', cortePrevisto: 18, parametros: ['GALA', 'SWIMSUIT', 'BARE FACE'], candidatas: MGI_56_CANDIDATAS_OFICIALES, esFinal: false },
            { nombre: 'Top 18', cortePrevisto: 10, parametros: ['SWIMSUIT'], candidatas: [], esFinal: false },
            { nombre: 'Top 10', cortePrevisto: 5, parametros: ['GALA', 'SPEECH'], candidatas: [], esFinal: false },
            { nombre: 'Top 5', cortePrevisto: 5, parametros: ['FINAL QUESTION'], candidatas: [], esFinal: true }
        ]
    }
];

// ==========================================
// ESTADO GLOBAL
// ==========================================
let appState = { eventos: [], eventoActivo: null, rondaActivaIndex: 0, ordenActual: 'carga', plantillasUsuario: [], vistaActiva: 'vista-home' };
let inputSeleccionado = null;
let fotoBase64 = "";
let modoRapidoParam = null;
let modoRapidoIndiceActual = 0;
let candidatasModoRapidoOrdenadas = [];

// Drag-and-drop state
let dragSrcId = null;
let dragSrcIndex = null;

window.onload = function() {
    const datosGuardados = localStorage.getItem('pageant_tracker_v16');
    if (datosGuardados) appState = JSON.parse(datosGuardados);
    if (!appState.ordenActual) appState.ordenActual = 'carga';
    if (!appState.plantillasUsuario) appState.plantillasUsuario = [];
    if (!appState.vistaActiva) appState.vistaActiva = 'vista-home';
    
    // Si recargamos la página y estábamos en un certamen, volvemos a la pantalla exacta
    if (appState.eventoActivo && getEvento() && appState.vistaActiva !== 'vista-home') {
        mostrarVista(appState.vistaActiva);
    } else {
        mostrarVista('vista-home');
    }
};

function guardarEnLocalStorage() {
    try { localStorage.setItem('pageant_tracker_v16', JSON.stringify(appState)); }
    catch (e) { alert("¡Atención! Memoria llena."); }
}
function getEvento() { return appState.eventos.find(e => e.id === appState.eventoActivo); }
function getRonda() { return getEvento().rondas[appState.rondaActivaIndex]; }

// ==========================================
// MOTOR DE TEMAS
// ==========================================
function aplicarTemaGlobal(temaId) {
    const body = document.getElementById('body-app');
    body.classList.remove('theme-mgi', 'theme-default');
    if (temaId === 'mgi') body.classList.add('theme-mgi');
}

// ==========================================
// NAVEGACIÓN
// ==========================================
function mostrarVista(idVista) {
    ['vista-home','vista-config','vista-scoring','vista-ranking','vista-corte','vista-resumen','vista-coronacion','vista-gran-resumen','vista-perfil-candidata'].forEach(id => {
        const el = document.getElementById(id);
        if(el) { el.classList.remove('block'); el.classList.add('hidden'); }
    });

    let viewToSave = idVista;
    if (idVista === 'vista-config-nuevo') { appState.eventoActivo = null; idVista = 'vista-config'; viewToSave = 'vista-home'; aplicarTemaGlobal('default'); renderConfig(); }
    if (idVista === 'vista-config-editar') { idVista = 'vista-config'; viewToSave = 'vista-scoring'; renderConfig(); }

    // Guardamos tu ubicación actual para sobrevivir a una recarga de página (F5)
    if (['vista-home', 'vista-scoring', 'vista-ranking', 'vista-corte', 'vista-coronacion'].includes(viewToSave)) {
        appState.vistaActiva = viewToSave;
        guardarEnLocalStorage();
    }

    document.getElementById(idVista).classList.remove('hidden');
    document.getElementById(idVista).classList.add('block');

    if (idVista === 'vista-home') { aplicarTemaGlobal('default'); renderHome(); }
    if (idVista === 'vista-scoring') { aplicarTemaGlobal(getEvento().tema); renderScoring(); }
    if (idVista === 'vista-ranking') initRanking();
    if (idVista === 'vista-corte') renderCorte();
    if (idVista === 'vista-coronacion') renderCoronacion();
}

function cambiarRonda(index) { appState.rondaActivaIndex = index; renderScoring(); }

function actualizarCandidataGlobal(id, nuevosDatos) {
    getEvento().rondas.forEach(r => {
        let c = r.candidatas.find(ch => ch.id === id);
        if (c) { if (nuevosDatos.nombre) c.nombre = nuevosDatos.nombre; if (nuevosDatos.foto) c.foto = nuevosDatos.foto; }
    });
    guardarEnLocalStorage();
}

// ==========================================
// HOME
// ==========================================
function renderHome() {
    appState.eventoActivo = null;
    const listaPlantillas = document.getElementById('lista-plantillas-home');
    listaPlantillas.innerHTML = "";
    const todasLasPlantillas = [...PLANTILLAS_BASE, ...appState.plantillasUsuario];

    todasLasPlantillas.forEach(p => {
        const isMgi = p.tema === 'mgi';
        const btnBorrar = p.id_plantilla.startsWith('plantilla_user')
            ? `<button onclick="eliminarPlantilla(event,'${p.id_plantilla}')" class="absolute top-2 right-2 bg-red-900/60 text-red-400 w-6 h-6 rounded-full text-xs flex items-center justify-center z-10">✕</button>` : '';

        if (isMgi) {
            listaPlantillas.innerHTML += `
            <div onclick="iniciarDesdePlantilla('${p.id_plantilla}')" class="mgi-hero-card col-span-2 p-5 relative cursor-pointer" style="grid-column:1/-1;">
                <div class="shimmer-line top-0 left-0"></div>
                ${btnBorrar}
                <div class="orbit-ring" style="width:120px;height:120px;top:-20px;right:-20px;"></div>
                <div class="orbit-ring" style="width:60px;height:60px;top:10px;right:10px;border-color:rgba(201,168,76,0.2);"></div>
                <div class="relative z-10 flex items-center gap-4">
                    <div class="text-5xl">✦</div>
                    <div>
                        <p class="font-cinzel text-[9px] tracking-[0.25em] uppercase mb-1" style="color:rgba(0,200,240,0.7);">Plantilla Oficial</p>
                        <h3 class="font-cinzel font-black text-lg gradient-gold leading-tight">MGI ALL STARS</h3>
                        <p class="font-cinzel text-[10px] tracking-widest text-gold/60">2026 · 1st Edition</p>
                        <p class="text-[10px] mt-2" style="color:rgba(0,180,220,0.6);">${p.rondas[0].candidatas.length} candidatas · ${p.rondas.length} etapas</p>
                    </div>
                </div>
            </div>`;
        } else {
            listaPlantillas.innerHTML += `
            <div onclick="iniciarDesdePlantilla('${p.id_plantilla}')" class="card-gold-border p-4 relative cursor-pointer flex flex-col items-center text-center">
                ${btnBorrar}
                <span class="text-3xl mb-1">${p.icono || '📋'}</span>
                <span class="text-xs font-bold uppercase leading-tight font-cinzel text-gold">${p.nombre}</span>
                <span class="text-[9px] mt-1" style="color:var(--text-muted);">${p.rondas[0].candidatas.length} Chicas / ${p.rondas.length} Etapas</span>
            </div>`;
        }
    });

    const lista = document.getElementById('lista-eventos-home');
    lista.innerHTML = "";
    if (appState.eventos.length === 0) {
        lista.innerHTML = '<p class="text-center text-sm py-6" style="color:var(--text-muted);">No hay certámenes en curso.</p>';
        return;
    }
    appState.eventos.forEach(evento => {
        const isMgi = evento.tema === 'mgi';
        
        // Revisamos si el evento ya está terminado (tiene ganadora coronada)
        const isFinished = evento.rondas.length > 0 && evento.rondas[evento.rondas.length - 1].esFinal && evento.rondas[evento.rondas.length - 1].candidatas.some(c => c.puestoFinal === 1);

        lista.innerHTML += `
        <div class="card p-4 flex justify-between items-center" style="${isMgi ? 'border-color:rgba(0,180,220,0.2);background:rgba(5,15,25,0.8);' : ''}">
            <div class="cursor-pointer flex-1 min-w-0" onclick="abrirEvento('${evento.id}')">
                <h3 class="font-cinzel font-bold text-base leading-tight ${isMgi ? 'gradient-gold' : 'text-blue-400'} truncate">${evento.nombre}</h3>
                <p class="text-[11px] mt-0.5" style="color:var(--text-muted);">${evento.rondas.length} rondas · ${evento.rondas[0].candidatas.length} candidatas</p>
            </div>
            <div class="flex items-center gap-2 shrink-0 ml-2">
                ${isFinished ? `<button onclick="abrirReporteDirecto(event, '${evento.id}')" class="px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition hover:bg-white/5" style="background:rgba(201,168,76,0.1);color:var(--gold);">📊 Reporte</button>` : ''}
                <button onclick="eliminarEvento(event,'${evento.id}')" class="p-2 rounded-lg text-xs transition hover:bg-red-500/20" style="background:rgba(239,68,68,0.1);color:rgba(239,68,68,0.7);">🗑️</button>
            </div>
        </div>`;
    });
}

function eliminarPlantilla(e, id) {
    e.stopPropagation();
    if (confirm("¿Eliminar esta plantilla?")) {
        appState.plantillasUsuario = appState.plantillasUsuario.filter(p => p.id_plantilla !== id);
        guardarEnLocalStorage(); renderHome();
    }
}

function iniciarDesdePlantilla(idPlantilla) {
    const todasLasPlantillas = [...PLANTILLAS_BASE, ...appState.plantillasUsuario];
    const plantilla = todasLasPlantillas.find(p => p.id_plantilla === idPlantilla);
    if (!plantilla) return;
    const nombrePersonalizado = prompt("Nombre para identificar este certamen:", plantilla.nombre + " — Mi Versión");
    if (!nombrePersonalizado) return;

    const rondasClonadas = plantilla.rondas.map((r, index) => {
        let candidatasParaRonda = [];
        if (index === 0) {
            candidatasParaRonda = r.candidatas.map(c => ({
                id: 'miss_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
                nombre: c.nombre, foto: c.foto, puntajes: {}, clasificada: false, puestoFinal: 99
            }));
        }
        return { nombre: r.nombre, cortePrevisto: r.cortePrevisto, parametros: [...r.parametros], candidatas: candidatasParaRonda, esFinal: r.esFinal || false };
    });

    const nuevoEvento = { id: 'evt_' + Date.now(), nombre: nombrePersonalizado, tema: plantilla.tema || 'default', rondas: rondasClonadas };
    appState.eventos.push(nuevoEvento);
    appState.eventoActivo = nuevoEvento.id;
    appState.rondaActivaIndex = 0;
    guardarEnLocalStorage();
    mostrarVista('vista-scoring');
}

function abrirEvento(id) {
    appState.eventoActivo = id;
    const evento = getEvento();
    
    // Buscar inteligentemente cuál es la ronda actual en la que estabas puntuando
    let rondaActual = 0;
    evento.rondas.forEach((ronda, index) => {
        if (ronda.candidatas && ronda.candidatas.length > 0) {
            rondaActual = index;
        }
    });
    
    appState.rondaActivaIndex = rondaActual;
    guardarEnLocalStorage();
    mostrarVista('vista-scoring');
}
function abrirReporteDirecto(e, id) {
    e.stopPropagation();
    appState.eventoActivo = id;
    const evento = getEvento();
    appState.rondaActivaIndex = evento.rondas.length - 1;
    guardarEnLocalStorage();
    generarGranResumenFinal();
}
function eliminarEvento(e, id) {
    e.stopPropagation();
    if (confirm("¿Borrar evento?")) { appState.eventos = appState.eventos.filter(ev => ev.id !== id); guardarEnLocalStorage(); renderHome(); }
}

// ==========================================
// CONFIG
// ==========================================
function renderConfig() {
    const evento = getEvento();
    const header = document.getElementById('config-titulo-header');
    const btnPlantilla = document.getElementById('btn-guardar-plantilla');

    if (evento) {
        header.innerText = 'Editar Certamen';
        document.getElementById('config-nombre-evento').value = evento.nombre;
        document.getElementById('config-tema').value = evento.tema || 'default';
        btnPlantilla.classList.remove('hidden');
    } else {
        header.innerText = 'Constructor de Certamen';
        document.getElementById('config-nombre-evento').value = '';
        document.getElementById('config-tema').value = 'default';
        btnPlantilla.classList.add('hidden');
    }

    const contenedor = document.getElementById('contenedor-rondas-config');
    contenedor.innerHTML = '';
    const rondas = evento ? evento.rondas : [{ nombre: 'Preliminar', cortePrevisto: 20, parametros: ['GALA', 'SWIMSUIT'], esFinal: false }];
    window.rondasConfigTemp = rondas.map(r => ({ nombre: r.nombre, cortePrevisto: r.cortePrevisto, parametros: [...r.parametros], esFinal: r.esFinal }));
    window.rondasConfigTemp.forEach((r, i) => renderRondaConfig(i));
}

function renderRondaConfig(i) {
    const r = window.rondasConfigTemp[i];
    const contenedor = document.getElementById('contenedor-rondas-config');
    const div = document.createElement('div');
    div.id = `config-ronda-${i}`;
    div.className = 'card p-4 space-y-2';
    div.innerHTML = `
        <div class="flex justify-between items-center">
            <p class="font-cinzel font-bold text-gold text-sm">Etapa ${i + 1}</p>
            ${i > 0 ? `<button onclick="eliminarRondaConfig(${i})" class="text-red-400 text-xs">✕ Eliminar</button>` : ''}
        </div>
        <input type="text" value="${r.nombre}" oninput="window.rondasConfigTemp[${i}].nombre=this.value" class="input-field text-sm" placeholder="Nombre de etapa">
        <div class="flex gap-2">
            <div class="flex-1">
                <label class="text-[9px] text-gold/60 uppercase font-bold block mb-1">Clasifican al top</label>
                <input type="number" value="${r.cortePrevisto}" oninput="window.rondasConfigTemp[${i}].cortePrevisto=parseInt(this.value)||0" class="input-field text-sm" placeholder="Ej: 20" min="1">
            </div>
        </div>
        <label class="text-[9px] text-gold/60 uppercase font-bold block mb-1">Parámetros (separados por coma)</label>
        <input type="text" value="${r.parametros.join(', ')}" oninput="window.rondasConfigTemp[${i}].parametros=this.value.split(',').map(s=>s.trim().toUpperCase()).filter(Boolean)" class="input-field text-sm" placeholder="GALA, SWIMSUIT, ENTREVISTA">
        <label class="flex items-center gap-2 text-sm mt-1">
            <input type="checkbox" ${r.esFinal ? 'checked' : ''} onchange="window.rondasConfigTemp[${i}].esFinal=this.checked" class="rounded">
            <span style="color:var(--text-muted);">Esta es la ronda final (Coronación)</span>
        </label>`;
    contenedor.appendChild(div);
}

function agregarRondaNuevaConfig() {
    window.rondasConfigTemp.push({ nombre: 'Top 10', cortePrevisto: 10, parametros: ['GALA'], esFinal: false });
    renderRondaConfig(window.rondasConfigTemp.length - 1);
}
function eliminarRondaConfig(i) {
    window.rondasConfigTemp.splice(i, 1);
    document.getElementById('contenedor-rondas-config').innerHTML = '';
    window.rondasConfigTemp.forEach((_, idx) => renderRondaConfig(idx));
}

// ==========================================
// SCORING
// ==========================================
function guardarConfiguracion() {
    const nombreEvt = document.getElementById('config-nombre-evento').value.trim();
    if (!nombreEvt) return alert("Ingresá un nombre para el certamen.");
    if (!window.rondasConfigTemp || window.rondasConfigTemp.length === 0) return alert("Definí al menos una ronda.");
    const temaSeleccionado = document.getElementById('config-tema').value;

    if (!appState.eventoActivo) {
        const rondas = window.rondasConfigTemp.map(r => ({ nombre: r.nombre, cortePrevisto: r.cortePrevisto, parametros: r.parametros, candidatas: [], esFinal: r.esFinal }));
        const nuevoEvento = { id: 'evt_' + Date.now(), nombre: nombreEvt, tema: temaSeleccionado, rondas: rondas };
        appState.eventos.push(nuevoEvento);
        appState.eventoActivo = nuevoEvento.id;
        appState.rondaActivaIndex = 0;
    } else {
        const evento = getEvento();
        evento.nombre = nombreEvt; evento.tema = temaSeleccionado;
        window.rondasConfigTemp.forEach((rTemp, idx) => {
            if (evento.rondas[idx]) {
                evento.rondas[idx].nombre = rTemp.nombre; evento.rondas[idx].cortePrevisto = rTemp.cortePrevisto;
                evento.rondas[idx].parametros = rTemp.parametros; evento.rondas[idx].esFinal = rTemp.esFinal;
            } else {
                evento.rondas.push({ nombre: rTemp.nombre, cortePrevisto: rTemp.cortePrevisto, parametros: rTemp.parametros, candidatas: [], esFinal: rTemp.esFinal });
            }
        });
        if (window.rondasConfigTemp.length < evento.rondas.length) evento.rondas = evento.rondas.slice(0, window.rondasConfigTemp.length);
    }
    guardarEnLocalStorage();
    mostrarVista('vista-scoring');
}

function guardarEventoComoPlantilla() {
    const evento = getEvento(); if (!evento) return;
    if (confirm(`¿Guardar "${evento.nombre}" como plantilla?`)) {
        const rondasPlantilla = evento.rondas.map((r, idx) => ({
            nombre: r.nombre, cortePrevisto: r.cortePrevisto, parametros: [...r.parametros], esFinal: r.esFinal,
            candidatas: idx === 0 ? r.candidatas.map(c => ({ nombre: c.nombre, foto: c.foto })) : []
        }));
        appState.plantillasUsuario.push({ id_plantilla: 'plantilla_user_' + Date.now(), icono: '📁', nombre: evento.nombre, tema: evento.tema, rondas: rondasPlantilla });
        guardarEnLocalStorage();
        alert("¡Plantilla guardada!");
    }
}

function cambiarOrdenCandidatas(orden) {
    appState.ordenActual = orden;
    guardarEnLocalStorage();
    renderScoring();
}

function renderScoring() {
    const evento = getEvento(); if (!evento) return mostrarVista('vista-home');
    const ronda = getRonda();
    document.getElementById('header-evento-nombre').innerText = evento.nombre;
    document.getElementById('select-ordenamiento').value = appState.ordenActual || 'carga';

    if (ronda.esFinal) {
        document.getElementById('btn-scoring-corte').classList.add('hidden');
        document.getElementById('btn-scoring-coronacion').classList.remove('hidden');
    } else {
        document.getElementById('btn-scoring-corte').classList.remove('hidden');
        document.getElementById('btn-scoring-coronacion').classList.add('hidden');
    }

    // Timeline
    const timeline = document.getElementById('timeline-rondas'); timeline.innerHTML = "";
    evento.rondas.forEach((r, i) => {
        const esActiva = i === appState.rondaActivaIndex;
        timeline.innerHTML += `<button onclick="cambiarRonda(${i})" class="tab-pill ${esActiva ? 'active' : ''}">${r.nombre}</button>`;
    });

    // Param buttons
    const pad1 = document.getElementById('numpad-parametros-1');
    const pad2 = document.getElementById('numpad-parametros-2');
    pad1.innerHTML = ''; pad2.innerHTML = '';
    ronda.parametros.forEach((p, index) => {
        const btn = `<button onclick="saltarAParametro('${p}')" class="py-2 rounded-lg text-[10px] font-bold uppercase flex items-center justify-center text-center border transition" style="background:rgba(201,168,76,0.08);color:var(--gold);border-color:rgba(201,168,76,0.2);">${p}</button>`;
        if (index < 3) pad1.innerHTML += btn; else if (index < 6) pad2.innerHTML += btn;
    });

    // Candidates
    const lista = document.getElementById('lista-candidatas'); lista.innerHTML = "";
    if (ronda.candidatas.length === 0) {
        lista.innerHTML = '<p class="text-center text-sm py-8 col-span-full" style="color:var(--text-muted);">Agregá tu primera candidata.</p>';
        return;
    }

    let candidatasMostradas = [...ronda.candidatas];
    if (appState.ordenActual === 'alfabetico') candidatasMostradas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    else if (appState.ordenActual === 'promedio') candidatasMostradas.sort((a, b) => obtenerPromedio(b, ronda) - obtenerPromedio(a, ronda));
    else if (appState.ordenActual === 'llamado') candidatasMostradas.sort((a, b) => (a.ordenLlamado || 999) - (b.ordenLlamado || 999));

    candidatasMostradas.forEach((chica, idx) => {
        const promedio = obtenerPromedio(chica, ronda);
        const isMgi = evento.tema === 'mgi';
        const showDragHandle = appState.ordenActual === 'manual';

        let htmlCasilleros = `<div class="flex space-x-1 shrink-0 overflow-x-auto">`;
        ronda.parametros.forEach(param => {
            const valor = chica.puntajes[param] || '-';
            htmlCasilleros += `<div onclick="seleccionarInput('${chica.id}','${param}')" id="input-${chica.id}-${param}" class="score-box"><span style="font-size:8px;color:var(--text-muted);text-transform:uppercase;line-height:1;">${param.substring(0, 3)}</span><span class="font-bold text-sm leading-none" style="color:var(--text-primary);">${valor}</span></div>`;
        });
        htmlCasilleros += `</div>`;

        const dragAttrs = showDragHandle ? `draggable="true" ondragstart="onDragStart(event,'${chica.id}',${idx})" ondragover="onDragOver(event)" ondragleave="onDragLeave(event)" ondrop="onDrop(event,'${chica.id}',${idx})" ondragend="onDragEnd(event)"` : '';

        // ACA AGREGUE EL FLEX-WRAP Y EL GAP-Y-2 PARA QUE NO SE PISE LA CAJA CON EL TEXTO
        const cardClass = isMgi
            ? 'candidata-row p-3 flex flex-wrap items-center justify-between relative mt-2 rounded-2xl border gap-y-2'
            : 'candidata-row card p-3 flex flex-wrap items-center justify-between relative mt-2 gap-y-2';

        const cardStyle = isMgi
            ? 'background:linear-gradient(135deg,rgba(0,100,140,0.12) 0%,rgba(5,12,20,0.9) 100%);border-color:rgba(0,160,200,0.2);'
            : '';

        lista.innerHTML += `
        <div data-id="${chica.id}" data-idx="${idx}" ${dragAttrs} class="${cardClass}" style="${cardStyle}">
            <div class="absolute -top-2 -right-2 flex gap-1 z-10">
                <!-- Botón Editar (Lápiz outline sólido) -->
                <button onclick="editarNombre(event,'${chica.id}')" class="rounded-full w-7 h-7 flex items-center justify-center transition border shadow-md" style="background:var(--bg-deep);color:rgba(255,255,255,0.7);border-color:var(--border);" onmouseover="this.style.color='var(--gold-light)';this.style.borderColor='rgba(201,168,76,0.4)';" onmouseout="this.style.color='rgba(255,255,255,0.7)';this.style.borderColor='var(--border)';">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
                </button>
                <!-- Botón Eliminar (Cruz outline sólida) -->
                <button onclick="eliminarCandidata(event,'${chica.id}')" class="rounded-full w-7 h-7 flex items-center justify-center transition border shadow-md" style="background:var(--bg-deep);color:rgba(255,255,255,0.7);border-color:var(--border);" onmouseover="this.style.color='#f87171';this.style.borderColor='rgba(248,113,113,0.3)';" onmouseout="this.style.color='rgba(255,255,255,0.7)';this.style.borderColor='var(--border)';">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <div class="flex items-center gap-2 flex-1 min-w-0">
                ${showDragHandle ? `<div class="drag-handle text-lg select-none shrink-0" title="Arrastrar para reordenar">⠿</div>` : ''}
                <div onclick="editarFoto(event,'${chica.id}')" class="cursor-pointer shrink-0">
                    <img src="${chica.foto}" class="h-11 w-11 object-cover rounded-full border" style="border-color:var(--border);background:var(--bg-card);">
                </div>
                <div class="min-w-0">
                    <h3 class="font-bold text-sm text-white truncate">${chica.nombre}</h3>
                    <p class="text-xs font-semibold truncate" style="color:var(--gold);">Prom: ${promedio > 0 ? promedio.toFixed(2) : '—'}</p>
                </div>
            </div>
            ${htmlCasilleros}
        </div>`;
    });
}

// ==========================================
// DRAG & DROP
// ==========================================
function onDragStart(event, id, idx) {
    dragSrcId = id;
    dragSrcIndex = idx;
    event.currentTarget.classList.add('dragging');
    event.dataTransfer.effectAllowed = 'move';
}
function onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    event.currentTarget.classList.add('drag-over');
}
function onDragLeave(event) {
    event.currentTarget.classList.remove('drag-over');
}
function onDrop(event, targetId, targetIdx) {
    event.preventDefault();
    event.currentTarget.classList.remove('drag-over');
    if (dragSrcId === targetId) return;

    const ronda = getRonda();
    const candidatas = ronda.candidatas;

    const srcIdx = candidatas.findIndex(c => c.id === dragSrcId);
    const tgtIdx = candidatas.findIndex(c => c.id === targetId);
    if (srcIdx === -1 || tgtIdx === -1) return;

    const [moved] = candidatas.splice(srcIdx, 1);
    candidatas.splice(tgtIdx, 0, moved);

    appState.ordenActual = 'manual';
    guardarEnLocalStorage();
    renderScoring();
}
function onDragEnd(event) {
    event.currentTarget.classList.remove('dragging', 'drag-over');
    document.querySelectorAll('.candidata-row').forEach(el => el.classList.remove('drag-over', 'dragging'));
}

// ==========================================
// AUTOCOMPLETADO
// ==========================================
function buscarPais(texto) {
    const lista = document.getElementById('autocomplete-lista'); lista.innerHTML = "";
    if (texto.length < 1) { lista.classList.add('hidden'); return; }
    const filtrados = PAISES_PAGEANT.filter(p => p.n.toLowerCase().includes(texto.toLowerCase()));
    if (filtrados.length === 0) { lista.classList.add('hidden'); return; }
    filtrados.forEach(p => {
        lista.innerHTML += `<div onclick="seleccionarPaisAutocomplete('${p.n}','${p.i}')" class="p-3 cursor-pointer flex items-center gap-3" style="border-bottom:1px solid var(--border);">
            <img src="https://flagcdn.com/w40/${p.i}.png" class="w-6 shadow-sm rounded-sm">
            <span class="text-sm font-bold" style="color:var(--text-primary);">${p.n}</span></div>`;
    });
    lista.classList.remove('hidden');
}
function seleccionarPaisAutocomplete(nombre, iso) {
    document.getElementById('input-nombre').value = nombre;
    if (!document.getElementById('input-foto').files.length) fotoBase64 = `https://flagcdn.com/w160/${iso}.png`;
    document.getElementById('autocomplete-lista').classList.add('hidden');
    document.getElementById('input-nombre').focus();
}
document.addEventListener('click', function(event) {
    if (!event.target.closest('#input-nombre') && !event.target.closest('#autocomplete-lista'))
        document.getElementById('autocomplete-lista')?.classList.add('hidden');
});
document.getElementById('input-foto').addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) { const reader = new FileReader(); reader.onload = ev => fotoBase64 = ev.target.result; reader.readAsDataURL(file); }
});
function agregarCandidata() {
    const nombre = document.getElementById('input-nombre').value.trim(); if (!nombre) return;
    getRonda().candidatas.push({ id: 'miss_' + Date.now(), nombre, foto: fotoBase64 || "https://via.placeholder.com/150", puntajes: {}, clasificada: false, puestoFinal: 99 });
    guardarEnLocalStorage(); renderScoring();
    document.getElementById('input-nombre').value = ""; fotoBase64 = ""; document.getElementById('input-foto').value = "";
    document.getElementById('autocomplete-lista').classList.add('hidden');
}
document.getElementById('input-nombre').addEventListener('keypress', e => { if (e.key === 'Enter') { e.preventDefault(); agregarCandidata(); } });
function eliminarCandidata(e, id) { e.stopPropagation(); if (confirm("¿Eliminar?")) { getRonda().candidatas = getRonda().candidatas.filter(c => c.id !== id); guardarEnLocalStorage(); renderScoring(); } }
function editarNombre(e, id) { e.stopPropagation(); const c = getRonda().candidatas.find(c => c.id === id); const n = prompt("Nombre:", c.nombre); if (n) { actualizarCandidataGlobal(id, { nombre: n }); renderScoring(); } }
function editarFoto(e, id) {
    e.stopPropagation();
    const i = document.createElement('input'); i.type = 'file'; i.accept = 'image/*';
    i.onchange = ev => { const f = ev.target.files[0]; if (f) { const r = new FileReader(); r.onload = ex => { actualizarCandidataGlobal(id, { foto: ex.target.result }); renderScoring(); }; r.readAsDataURL(f); } };
    i.click();
}

// ==========================================
// INPUT / TECLADO
// ==========================================
function seleccionarInput(id, param) {
    document.querySelectorAll('.score-box').forEach(el => el.classList.remove('active'));
    const el = document.getElementById(`input-${id}-${param}`); if (el) el.classList.add('active');
    inputSeleccionado = { id, parametro: param };
    document.getElementById('indicador-teclado').innerText = `Evaluando: ${getRonda().candidatas.find(c => c.id === id)?.nombre} · ${param}`;
}
function saltarAParametro(p) { if (inputSeleccionado) seleccionarInput(inputSeleccionado.id, p); }
function presionarTecla(v) {
    if (!inputSeleccionado) return alert("Seleccioná un casillero primero");
    const c = getRonda().candidatas.find(c => c.id === inputSeleccionado.id);
    if (!c.puntajes[inputSeleccionado.parametro]) c.puntajes[inputSeleccionado.parametro] = "";
    let act = c.puntajes[inputSeleccionado.parametro];
    if (v === 'BORRAR') act = "";
    else { if (v === '.' && act.includes('.')) return; if (act.length >= 4) return; act += v; if (parseFloat(act) > 10) return; }
    c.puntajes[inputSeleccionado.parametro] = act; guardarEnLocalStorage();
    const el = document.getElementById(`input-${inputSeleccionado.id}-${inputSeleccionado.parametro}`);
    if (el) el.querySelector('span:nth-child(2)').innerText = act || '-';
    if (act.length >= 3 || v === 'BORRAR') { renderScoring(); seleccionarInput(c.id, inputSeleccionado.parametro); }
}

// ==========================================
// MODO RÁPIDO PASARELA
// ==========================================
function abrirMenuModoRapido() {
    const ronda = getRonda(); if (ronda.candidatas.length === 0) return alert("Agregá candidatas primero.");
    const lista = document.getElementById('lista-parametros-rapido'); lista.innerHTML = "";
    ronda.parametros.forEach(p => {
        lista.innerHTML += `<button onclick="iniciarModoRapido('${p}')" class="btn-gold w-full text-center">${p}</button>`;
    });
    document.getElementById('modal-modo-rapido').classList.remove('hidden');
}
function iniciarModoRapido(parametro) {
    document.getElementById('modal-modo-rapido').classList.add('hidden');
    modoRapidoParam = parametro; modoRapidoIndiceActual = 0;
    const ronda = getRonda();
    candidatasModoRapidoOrdenadas = [...ronda.candidatas];
    if (appState.ordenActual === 'alfabetico') candidatasModoRapidoOrdenadas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    else if (appState.ordenActual === 'promedio') candidatasModoRapidoOrdenadas.sort((a, b) => obtenerPromedio(b, ronda) - obtenerPromedio(a, ronda));
    else if (appState.ordenActual === 'llamado') candidatasModoRapidoOrdenadas.sort((a, b) => (a.ordenLlamado || 999) - (b.ordenLlamado || 999));
    document.getElementById('rapido-parametro-nombre').innerText = parametro;
    document.getElementById('vista-scoring').classList.add('hidden');
    document.getElementById('vista-modo-rapido').classList.remove('hidden');
    actualizarVistaModoRapido();
}
function cerrarModoRapido() { document.getElementById('vista-modo-rapido').classList.add('hidden'); document.getElementById('vista-scoring').classList.remove('hidden'); renderScoring(); }
function actualizarVistaModoRapido() {
    if (modoRapidoIndiceActual >= candidatasModoRapidoOrdenadas.length) { alert("¡Completaste esta pasada!"); return cerrarModoRapido(); }
    if (modoRapidoIndiceActual < 0) modoRapidoIndiceActual = 0;
    const chica = candidatasModoRapidoOrdenadas[modoRapidoIndiceActual];
    document.getElementById('rapido-candidata-foto').src = chica.foto;
    document.getElementById('rapido-candidata-nombre').innerText = chica.nombre;
    const notaPrevia = chica.puntajes[modoRapidoParam] || '';
    document.getElementById('rapido-candidata-nota').innerText = notaPrevia === '' ? '-' : notaPrevia;
}
function cambiarCandidataRapido(d) { modoRapidoIndiceActual += d; actualizarVistaModoRapido(); }
function teclaModoRapido(v) {
    const chica = candidatasModoRapidoOrdenadas[modoRapidoIndiceActual];
    const chicaReal = getRonda().candidatas.find(c => c.id === chica.id);
    if (!chicaReal.puntajes[modoRapidoParam]) chicaReal.puntajes[modoRapidoParam] = "";
    let act = chicaReal.puntajes[modoRapidoParam];
    if (v === 'BORRAR') act = "";
    else if (v === '10') act = "10";
    else { if (v === '.' && act.includes('.')) return; if (act.length >= 4) return; act += v; if (parseFloat(act) > 10) return; }
    chicaReal.puntajes[modoRapidoParam] = act; guardarEnLocalStorage();
    document.getElementById('rapido-candidata-nota').innerText = act || '-';
}

// ==========================================
// HELPERS
// ==========================================
function obtenerPromedio(chica, rondaEspecifica = null) {
    const r = rondaEspecifica || getRonda(); if (r.parametros.length === 0) return 0;
    let suma = 0, cantidad = 0;
    r.parametros.forEach(p => { const nota = parseFloat(chica.puntajes[p]); if (!isNaN(nota) && nota > 0) { suma += nota; cantidad++; } });
    return cantidad > 0 ? (suma / cantidad) : 0;
}

// ==========================================
// LEADERBOARD
// ==========================================
function initRanking() {
    const ronda = getRonda(); const filtroSelect = document.getElementById('filtro-ranking'); const valorActual = filtroSelect.value;
    filtroSelect.innerHTML = `<option value="PROMEDIO">🌟 Promedio General</option>`;
    ronda.parametros.forEach(p => { filtroSelect.innerHTML += `<option value="${p}">🎯 Mejor en: ${p}</option>`; });
    if (Array.from(filtroSelect.options).some(o => o.value === valorActual)) filtroSelect.value = valorActual; else filtroSelect.value = "PROMEDIO";
    renderRanking();
}

function renderRanking() {
    const evento = getEvento(); const ronda = getRonda();
    const lista = document.getElementById('lista-ranking');
    const filtro = document.getElementById('filtro-ranking').value;
    const tope = ronda.cortePrevisto || 20;
    document.getElementById('ranking-corte-num').innerText = tope;
    lista.innerHTML = "";

    // 1. Calcular a las ganadoras de cada parámetro si estamos viendo el Promedio
    let categoryWinners = {};
    if (filtro === "PROMEDIO") {
        ronda.parametros.forEach(param => {
            let maxScore = -1;
            // Encontrar el puntaje máximo para este parámetro
            ronda.candidatas.forEach(c => {
                const score = parseFloat(c.puntajes[param]) || 0;
                if (score > maxScore) maxScore = score;
            });
            // Si hay un puntaje válido, guardar quiénes lo sacaron
            if (maxScore > 0) {
                categoryWinners[param] = ronda.candidatas
                    .filter(c => (parseFloat(c.puntajes[param]) || 0) === maxScore)
                    .map(c => c.id);
            }
        });
    }

    // 2. Ordenar a las candidatas
    const ordenadas = [...ronda.candidatas].sort((a, b) => {
        if (filtro === "PROMEDIO") return obtenerPromedio(b, ronda) - obtenerPromedio(a, ronda);
        return (parseFloat(b.puntajes[filtro]) || 0) - (parseFloat(a.puntajes[filtro]) || 0);
    });

    const maxPuntaje = ordenadas.length > 0
        ? (filtro === "PROMEDIO" ? obtenerPromedio(ordenadas[0], ronda) : (parseFloat(ordenadas[0].puntajes[filtro]) || 0))
        : 10;
    const escala = maxPuntaje > 0 ? maxPuntaje : 10;
    const isMgi = evento.tema === 'mgi';

    // 3. Dibujar cada tarjeta
    ordenadas.forEach((chica, index) => {
        const esTop = index < tope;
        const ptNum = filtro === "PROMEDIO" ? obtenerPromedio(chica, ronda) : (parseFloat(chica.puntajes[filtro]) || 0);
        const pct = Math.round((ptNum / escala) * 100);

        let posHTML = '';
        let cardBorder = '';
        let textColor = 'var(--text-primary)';

        // Estilos para ORO, PLATA y BRONCE
        if (index === 0) {
            posHTML = `<div class="pos-badge gold font-cinzel shadow-lg">1</div>`;
            cardBorder = 'border-color:rgba(201,168,76,0.6);background:rgba(40,25,5,0.8);';
            textColor = 'var(--gold-light)';
        } else if (index === 1) {
            posHTML = `<div class="pos-badge font-cinzel shadow-lg" style="background:linear-gradient(135deg, #a0a0a0, #e8e8e8, #a0a0a0);color:#1a1a1a;box-shadow:0 0 15px rgba(224,224,224,0.3);">2</div>`;
            cardBorder = 'border-color:rgba(200,200,200,0.5);background:rgba(20,25,30,0.8);';
            textColor = '#e0e0e0';
        } else if (index === 2) {
            posHTML = `<div class="pos-badge font-cinzel shadow-lg" style="background:linear-gradient(135deg, #8c5a35, #d28c47, #8c5a35);color:#fff;box-shadow:0 0 15px rgba(205,127,50,0.3);">3</div>`;
            cardBorder = 'border-color:rgba(205,127,50,0.5);background:rgba(30,15,5,0.8);';
            textColor = '#d28c47';
        } else if (esTop) {
            posHTML = `<div class="pos-badge inside font-cinzel">${index + 1}</div>`;
            cardBorder = (isMgi ? 'border-color:rgba(0,160,210,0.2);background:rgba(0,30,50,0.5);' : 'border-color:rgba(201,168,76,0.2);background:rgba(30,20,5,0.5);');
        } else {
            posHTML = `<div class="pos-badge outside font-cinzel">${index + 1}</div>`;
        }

        // Armar los mini carteles de etiquetas y premios
        let badgesHTML = '';
        
        // Etiqueta de TOP (Solo si no es top 3, para que quede más limpio)
        if (esTop && index > 2) {
            if (!isMgi) badgesHTML += `<span class="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" style="background:rgba(201,168,76,0.15);color:var(--gold);">TOP ${tope}</span>`;
            else badgesHTML += `<span class="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" style="background:rgba(0,160,210,0.15);color:rgba(0,200,240,0.9);">TOP ${tope}</span>`;
        }
        
        // Etiquetas de Premios por Categoría
        if (filtro === "PROMEDIO") {
            ronda.parametros.forEach(param => {
                if (categoryWinners[param] && categoryWinners[param].includes(chica.id)) {
                    // Un color frambuesa/rosado elegante que no choca con el dorado ni el azul
                    badgesHTML += `<span class="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border shadow-sm" style="background:rgba(220,38,127,0.15);color:#ff80b3;border-color:rgba(255,128,179,0.3);">✨ 1° EN ${param}</span>`;
                }
            });
        }

        lista.innerHTML += `
        <div class="card p-3 shadow-md transition-all" style="${cardBorder}">
            <div class="flex items-center gap-3 mb-2">
                ${posHTML}
                <img src="${chica.foto}" class="h-12 w-12 object-cover rounded-full shrink-0" style="background:var(--bg-card);border:1px solid var(--border);">
                
                <div class="flex-1 min-w-0">
                    <div class="flex flex-col justify-center">
                        <span class="font-bold text-sm w-full truncate" style="color:${textColor};">${chica.nombre}</span>
                        <div class="flex flex-wrap items-center gap-1.5 mt-1">
                            ${badgesHTML}
                        </div>
                    </div>
                </div>
                
                <span class="font-cinzel font-black text-xl shrink-0" style="color:${esTop ? textColor : 'var(--text-muted)'};">${ptNum.toFixed(2)}</span>
            </div>
            <div class="pct-bar-bg">
                <div class="pct-bar-fill ${esTop && isMgi ? 'top' : ''}" style="width:${pct}%;"></div>
            </div>
        </div>`;
    });
}

// ==========================================
// CORTE EN VIVO Y RESUMEN
// ==========================================
function iniciarCorteEnVivo() { 
    appState.contadorLlamado = 0; // Iniciamos el contador de llamados en cero
    getRonda().candidatas.forEach(c => { 
        c.clasificada = false; 
        c.ordenLlamado = 999; // Reiniciamos el orden
    }); 
    mostrarVista('vista-corte'); 
}

function renderCorte() {
    const ronda = getRonda(); const tope = ronda.cortePrevisto || 20;
    document.getElementById('corte-objetivo').innerText = tope;
    const grilla = document.getElementById('grilla-corte');
    const barraPredictiva = document.getElementById('corte-top-predictivo');
    const contador = document.getElementById('contador-clasificadas');
    grilla.innerHTML = ""; barraPredictiva.innerHTML = ""; let seleccionadas = 0;

    const tuTopIdeal = [...ronda.candidatas].sort((a, b) => obtenerPromedio(b, ronda) - obtenerPromedio(a, ronda)).slice(0, tope);
    tuTopIdeal.forEach(chica => {
        const verde = chica.clasificada;
        barraPredictiva.innerHTML += `
        <div class="flex flex-col items-center shrink-0 w-14 transition-all">
            <div class="relative">
                <img src="${chica.foto}" class="h-10 w-10 object-cover rounded-full transition-all" style="border:2px solid ${verde ? 'rgba(74,222,128,0.8)' : 'rgba(100,100,120,0.4)'};${verde ? '' : 'filter:grayscale(0.6);opacity:0.6;'};background:var(--bg-card);">
                ${verde ? `<span class="absolute -top-1 -right-1 text-[10px] rounded-full w-4 h-4 flex items-center justify-center" style="background:#22c55e;">✓</span>` : ''}
            </div>
            <span class="text-[8px] text-white truncate w-full text-center mt-1 font-bold">${chica.nombre.split(' ')[0]}</span>
        </div>`;
    });

    const idsTopIdeal = tuTopIdeal.map(c => c.id);

    const ordenAlfabetico = [...ronda.candidatas].sort((a, b) => a.nombre.localeCompare(b.nombre));
    ordenAlfabetico.forEach(chica => {
        if (chica.clasificada) seleccionadas++;
        
        const esTuTop = idsTopIdeal.includes(chica.id);
        const badgeHTML = chica.clasificada ? (esTuTop 
            ? `<div class="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-md flex items-center justify-center font-bold text-[8px] shadow-lg animate-pop-in" style="background:#22c55e;color:white;border:1px solid #16a34a;z-index:20;">✓ ACIERTO</div>`
            : `<div class="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-md flex items-center justify-center font-bold text-[8px] shadow-lg animate-pop-in" style="background:#eab308;color:black;border:1px solid #ca8a04;z-index:20;">! SORPRESA</div>`
        ) : '';

        grilla.innerHTML += `
        <div onclick="toggleClasificada('${chica.id}')" class="relative rounded-2xl border-2 p-2 flex flex-col items-center cursor-pointer transition-all" style="background:${chica.clasificada ? 'rgba(20,50,30,0.8)' : 'var(--bg-card)'};border-color:${chica.clasificada ? 'rgba(74,222,128,0.7)' : 'var(--border)'};${chica.clasificada ? 'box-shadow:0 0 15px rgba(74,222,128,0.2);' : ''}">
            ${badgeHTML}
            <img src="${chica.foto}" class="h-12 w-12 object-cover rounded-full mb-1" style="background:var(--bg-card);border:1px solid var(--border);">
            <span class="text-[10px] font-bold text-white text-center leading-tight truncate w-full font-cinzel">${chica.nombre}</span>
        </div>`;
    });
    contador.innerText = seleccionadas;
}

function toggleClasificada(id) {
    const c = getRonda().candidatas.find(c => c.id === id);
    c.clasificada = !c.clasificada;
    
    // Si la marcaste, le asignamos el número de llamado en el que estabas
    if (c.clasificada) {
        appState.contadorLlamado = (appState.contadorLlamado || 0) + 1;
        c.ordenLlamado = appState.contadorLlamado;
    } else {
        c.ordenLlamado = 999; // Si la desmarcás, le quitamos el orden
    }
    
    renderCorte();
}

function generarResumenCorte() {
    const ronda = getRonda(); const clasificadas = ronda.candidatas.filter(c => c.clasificada);
    if (clasificadas.length === 0) return alert("Marcá al menos una candidata.");
    const tope = ronda.cortePrevisto || 20;
    const tuTopIdeal = [...ronda.candidatas].sort((a, b) => obtenerPromedio(b, ronda) - obtenerPromedio(a, ronda)).slice(0, tope);
    const idsTopIdeal = tuTopIdeal.map(c => c.id); const idsClasificadas = clasificadas.map(c => c.id);
    const aciertos = clasificadas.filter(c => idsTopIdeal.includes(c.id));
    const sorpresas = clasificadas.filter(c => !idsTopIdeal.includes(c.id));
    const pegadas = tuTopIdeal.filter(c => !idsClasificadas.includes(c.id));

    document.getElementById('stat-aciertos').innerText = aciertos.length;
    document.getElementById('stat-sorpresas').innerText = sorpresas.length;
    document.getElementById('stat-pegadas').innerText = pegadas.length;

    const armarHTML = (lista) => lista.map(c => `
        <div class="flex flex-col items-center shrink-0 w-16 card p-2">
            <img src="${c.foto}" class="h-10 w-10 object-cover rounded-full mb-1" style="background:var(--bg-card);">
            <span class="text-[9px] text-white truncate w-full text-center">${c.nombre}</span>
        </div>`).join('');
    document.getElementById('resumen-lista-aciertos').innerHTML = armarHTML(aciertos) || '<span class="text-xs" style="color:var(--text-muted);">Ninguna</span>';
    document.getElementById('resumen-lista-sorpresas').innerHTML = armarHTML(sorpresas) || '<span class="text-xs" style="color:var(--text-muted);">Ninguna</span>';
    document.getElementById('resumen-lista-pegadas').innerHTML = armarHTML(pegadas) || '<span class="text-xs" style="color:var(--text-muted);">Ninguna</span>';
    mostrarVista('vista-resumen');
}

function avanzarHaciaSiguienteRonda() {
    const evento = getEvento(); const clasificadas = getRonda().candidatas.filter(c => c.clasificada);
    
    // Traspasamos el ordenLlamado a la nueva ronda
    const nuevasCandidatas = clasificadas.map(c => ({ 
        ...c, puntajes: {}, clasificada: false, puestoFinal: 99, ordenLlamado: c.ordenLlamado || 999 
    }));
    
    if (evento.rondas.length > appState.rondaActivaIndex + 1) {
        evento.rondas[appState.rondaActivaIndex + 1].candidatas = nuevasCandidatas;
        appState.rondaActivaIndex++;
        
        // Forzamos a que el selector se ponga en "Llamado al Top" automáticamente en la nueva ronda
        appState.ordenActual = 'llamado'; 
        
        guardarEnLocalStorage();
        mostrarVista('vista-scoring');
    } else {
        window.rondasConfigTemp = [...evento.rondas, { nombre: "Nueva Ronda", cortePrevisto: 5, parametros: ["PUNTAJE"], esFinal: false }];
        mostrarVista('vista-config-editar');
        alert("Llegaste al final. Agregá una nueva etapa abajo.");
    }
}

// ==========================================
// CORONACIÓN INVERTIDA
// ==========================================
function iniciarCoronacion() { getRonda().candidatas.forEach(c => c.puestoFinal = 99); mostrarVista('vista-coronacion'); }

function getSiguientePuestoACoronar() {
    const ronda = getRonda(); const total = ronda.candidatas.length; const asignadas = ronda.candidatas.filter(c => c.puestoFinal !== 99).length;
    if (asignadas === total) return 0;
    if (total - asignadas === 2) return 1;
    return total - asignadas;
}

function renderCoronacion() {
    const ronda = getRonda(); const lista = document.getElementById('lista-coronacion'); lista.innerHTML = "";
    const siguientePuesto = getSiguientePuestoACoronar();
    const nombresPuestos = { 1: '👑 GANADORA', 2: '1st Runner Up', 3: '2nd Runner Up', 4: '3rd Runner Up', 5: '4th Runner Up', 6: '5th Runner Up' };
    const instruccion = document.getElementById('coronacion-instruccion');

    if (siguientePuesto === 0) {
        instruccion.innerText = "¡Coronación Finalizada!";
        document.getElementById('btn-emitir-reporte').classList.remove('hidden');
    } else {
        instruccion.innerText = siguientePuesto === 1 ? `👑 ¡GANADORA!` : `Llamando a: ${nombresPuestos[siguientePuesto] || (siguientePuesto - 1 + 'th RU')}`;
        document.getElementById('btn-emitir-reporte').classList.add('hidden');
    }

    const ordenadas = [...ronda.candidatas].sort((a, b) => {
        if (a.puestoFinal !== 99 && b.puestoFinal === 99) return -1;
        if (a.puestoFinal === 99 && b.puestoFinal !== 99) return 1;
        return a.puestoFinal - b.puestoFinal;
    });

    ordenadas.forEach(chica => {
        let btnHTML = '';
        if (chica.puestoFinal === 99) {
            if (siguientePuesto > 0) {
                const esGanadora = siguientePuesto === 1;
                btnHTML = `<button onclick="asignarPuestoCoronacion('${chica.id}',${siguientePuesto})" class="w-full mt-2 py-2 rounded-lg text-xs font-bold uppercase tracking-widest font-cinzel" style="background:${esGanadora ? 'var(--gold-grad)' : 'rgba(140,50,200,0.3)'};color:${esGanadora ? '#1a0e00' : '#d0a0ff'};border:1px solid ${esGanadora ? 'transparent' : 'rgba(180,100,255,0.4)'};">${esGanadora ? '👑 Es la Ganadora' : `Asignar ${nombresPuestos[siguientePuesto]}`}</button>`;
            }
        } else {
            btnHTML = `<div class="mt-2"><span class="px-3 py-1.5 rounded-lg text-xs font-bold shadow-md tracking-wider font-cinzel" style="${chica.puestoFinal === 1 ? 'background:var(--gold-grad);color:#1a0e00;' : 'background:rgba(140,50,200,0.2);color:#d0a0ff;border:1px solid rgba(180,100,255,0.3);'}">${nombresPuestos[chica.puestoFinal] || (chica.puestoFinal - 1 + 'th RU')}</span></div>`;
        }
        lista.innerHTML += `
        <div class="card p-3 flex items-center gap-3 transition-all" style="${chica.puestoFinal === 1 ? 'border-color:rgba(201,168,76,0.5);background:rgba(40,25,5,0.8);box-shadow:0 0 20px rgba(201,168,76,0.1);' : ''}">
            <img src="${chica.foto}" class="h-14 w-14 object-cover rounded-full shrink-0 border" style="border-color:${chica.puestoFinal === 1 ? 'var(--gold)' : 'var(--border)'};background:var(--bg-card);">
            <div class="flex-1 min-w-0">
                <h3 class="font-bold text-base text-white tracking-wide">${chica.nombre}</h3>
                ${btnHTML}
            </div>
        </div>`;
    });
}

function asignarPuestoCoronacion(id, puestoAsignado) {
    const ronda = getRonda(); const chica = ronda.candidatas.find(c => c.id === id);
    chica.puestoFinal = puestoAsignado;
    if (puestoAsignado === 1) { const restante = ronda.candidatas.find(c => c.puestoFinal === 99); if (restante) restante.puestoFinal = 2; }
    guardarEnLocalStorage(); renderCoronacion();
}

// ==========================================
// GRAN REPORTE FINAL — rediseñado
// ==========================================
function generarGranResumenFinal() {
    const evento = getEvento();
    const rondaUltima = getRonda();
    document.getElementById('reporte-nombre-evento').innerText = evento.nombre;

    // ── 1. TOP FINAL: Jurado vs Vos ──────────────────────────
    const contenedorTop = document.getElementById('reporte-comparacion-top');
    contenedorTop.innerHTML = "";
    const tuTopMatematico = [...rondaUltima.candidatas].sort((a, b) => obtenerPromedio(b, rondaUltima) - obtenerPromedio(a, rondaUltima));
    const topOficial = [...rondaUltima.candidatas].sort((a, b) => a.puestoFinal - b.puestoFinal);
    const etiquetas = { 1: '👑 WIN', 2: '1st RU', 3: '2nd RU', 4: '3rd RU', 5: '4th RU', 6: '5th RU' };

    for (let i = 0; i < rondaUltima.candidatas.length; i++) {
        const oficial = topOficial[i];
        const tuya = tuTopMatematico[i];
        const etiqueta = etiquetas[i + 1] || `${i}th RU`;
        const coincide = oficial.id === tuya.id;
        const esGanadora = i === 0;

        contenedorTop.innerHTML += `
        <div class="flex items-center gap-2 px-3 py-2.5 rounded-2xl border transition-all"
             style="background:${esGanadora ? 'rgba(40,25,5,0.8)' : 'rgba(255,255,255,0.02)'};
                    border-color:${esGanadora ? 'rgba(201,168,76,0.5)' : coincide ? 'rgba(74,222,128,0.2)' : 'rgba(255,255,255,0.06)'};">

            <!-- Etiqueta posición -->
            <div class="shrink-0 w-14 text-center">
                <span class="text-[9px] font-cinzel font-black uppercase tracking-wider"
                      style="color:${esGanadora ? 'var(--gold-light)' : 'var(--text-muted)'};">${etiqueta}</span>
            </div>

            <!-- Candidata OFICIAL -->
            <div class="flex items-center gap-1.5 flex-1 min-w-0">
                <img src="${oficial.foto}" class="w-8 h-8 rounded-full object-cover shrink-0"
                     style="border:2px solid ${esGanadora ? 'var(--gold)' : 'rgba(180,100,255,0.5)'};background:var(--bg-card);">
                <div class="min-w-0">
                    <p class="text-[8px] font-bold uppercase tracking-wider truncate"
                       style="color:${esGanadora ? 'var(--gold)' : 'rgba(200,150,255,0.7)'};">Oficial</p>
                    <p class="text-[11px] font-bold text-white truncate">${oficial.nombre}</p>
                </div>
            </div>

            <!-- Indicador coincidencia -->
            <div class="shrink-0 w-8 flex justify-center">
                ${coincide
                    ? `<span class="text-green-400 text-base" title="¡Coincidiste!">✓</span>`
                    : `<span class="text-red-400/60 text-xs font-bold">≠</span>`}
            </div>

            <!-- TU candidata -->
            <div class="flex items-center gap-1.5 flex-1 min-w-0 justify-end text-right">
                <div class="min-w-0">
                    <p class="text-[8px] font-bold uppercase tracking-wider truncate"
                       style="color:${esGanadora ? 'var(--gold)' : 'rgba(100,180,255,0.7)'};">Tu voto</p>
                    <p class="text-[11px] font-bold text-white truncate">${tuya.nombre}</p>
                </div>
                <img src="${tuya.foto}" class="w-8 h-8 rounded-full object-cover shrink-0"
                     style="border:2px solid ${esGanadora ? 'var(--gold)' : 'rgba(59,130,246,0.5)'};background:var(--bg-card);">
            </div>
        </div>`;
    }

    // ── 2. HISTORIAL POR ETAPA (comparación corte por corte) ──
    const divCortes = document.getElementById('reporte-cortes-historicos');
    divCortes.innerHTML = "";

    if (evento.rondas.length <= 1) {
        divCortes.innerHTML = '<p class="text-xs text-center py-4" style="color:var(--text-muted);">Solo hubo una etapa.</p>';
    } else {
        // Para cada transición entre rondas
        for (let i = 1; i < evento.rondas.length; i++) {
            const rondaOrigen = evento.rondas[i - 1];
            const rondaDestino = evento.rondas[i];
            const pasaron = rondaDestino.candidatas;
            const tope = rondaOrigen.cortePrevisto || pasaron.length;

            if (pasaron.length === 0) continue;

            // Tu top ideal de esa ronda
            const tuTopIdeal = [...rondaOrigen.candidatas]
                .sort((a, b) => obtenerPromedio(b, rondaOrigen) - obtenerPromedio(a, rondaOrigen))
                .slice(0, tope);

            const idsTopIdeal = new Set(tuTopIdeal.map(c => c.id));
            const idsPasaron = new Set(pasaron.map(c => c.id));

            const aciertos = pasaron.filter(c => idsTopIdeal.has(c.id));
            const sorpresas = pasaron.filter(c => !idsTopIdeal.has(c.id));
            const pegadas = tuTopIdeal.filter(c => !idsPasaron.has(c.id));

            const pctAciertos = pasaron.length > 0 ? Math.round((aciertos.length / pasaron.length) * 100) : 0;

            const miniCard = (c, tipo) => {
                const color = tipo === 'acierto' ? 'rgba(74,222,128,0.6)' : tipo === 'sorpresa' ? 'rgba(250,204,21,0.6)' : 'rgba(248,113,113,0.6)';
                const tick = tipo === 'acierto' ? '<span class="absolute -top-0.5 -right-0.5 text-[9px] bg-green-500 rounded-full w-3.5 h-3.5 flex items-center justify-center text-white font-bold">✓</span>' : '';
                return `<div class="shrink-0 flex flex-col items-center w-12 relative">
                    <div class="relative">
                        <img src="${c.foto}" class="w-9 h-9 rounded-full object-cover" style="border:1.5px solid ${color};background:var(--bg-card);">
                        ${tick}
                    </div>
                    <span class="text-[8px] text-white/80 truncate w-full text-center mt-0.5 leading-tight">${c.nombre.split(' ')[0]}</span>
                </div>`;
            };

            divCortes.innerHTML += `
            <div class="rounded-2xl border overflow-hidden" style="background:rgba(255,255,255,0.02);border-color:rgba(255,255,255,0.07);">
                <!-- Header de etapa -->
                <div class="px-4 py-3 flex items-center justify-between border-b" style="border-color:rgba(255,255,255,0.06);background:rgba(255,255,255,0.03);">
                    <div>
                        <p class="font-cinzel font-black text-sm text-white">${rondaOrigen.nombre} → ${rondaDestino.nombre}</p>
                        <p class="text-[9px] mt-0.5" style="color:var(--text-muted);">Top ${pasaron.length} confirmado · Tu tope previsto: ${tope}</p>
                    </div>
                    <!-- Porcentaje de acierto -->
                    <div class="text-right shrink-0">
                        <p class="font-cinzel-deco text-2xl font-black" style="color:${pctAciertos >= 70 ? '#4ade80' : pctAciertos >= 40 ? 'var(--gold)' : '#f87171'};">${pctAciertos}%</p>
                        <p class="text-[8px] uppercase tracking-wider" style="color:var(--text-muted);">acierto</p>
                    </div>
                </div>

                <!-- Stats row -->
                <div class="grid grid-cols-3 divide-x" style="divide-color:rgba(255,255,255,0.05);">
                    <div class="py-2 text-center">
                        <p class="font-cinzel-deco text-xl font-black text-green-400">${aciertos.length}</p>
                        <p class="text-[8px] uppercase text-green-400/60 font-bold tracking-wider">Aciertos</p>
                    </div>
                    <div class="py-2 text-center">
                        <p class="font-cinzel-deco text-xl font-black text-yellow-400">${sorpresas.length}</p>
                        <p class="text-[8px] uppercase text-yellow-400/60 font-bold tracking-wider">Sorpresas</p>
                    </div>
                    <div class="py-2 text-center">
                        <p class="font-cinzel-deco text-xl font-black text-red-400">${pegadas.length}</p>
                        <p class="text-[8px] uppercase text-red-400/60 font-bold tracking-wider">Pegadas</p>
                    </div>
                </div>

                <!-- Listas de candidatas por grupo -->
                ${aciertos.length > 0 ? `
                <div class="px-3 py-2 border-t" style="border-color:rgba(74,222,128,0.1);background:rgba(74,222,128,0.03);">
                    <p class="text-[8px] font-bold uppercase tracking-widest text-green-400/70 mb-2">✓ Coincidieron</p>
                    <div class="flex gap-2 overflow-x-auto pb-1 scrolling-touch">${aciertos.map(c => miniCard(c, 'acierto')).join('')}</div>
                </div>` : ''}

                ${sorpresas.length > 0 ? `
                <div class="px-3 py-2 border-t" style="border-color:rgba(250,204,21,0.1);background:rgba(250,204,21,0.02);">
                    <p class="text-[8px] font-bold uppercase tracking-widest text-yellow-400/70 mb-2">⚡ Sorpresas — pasaron sin estar en tu top</p>
                    <div class="flex gap-2 overflow-x-auto pb-1 scrolling-touch">${sorpresas.map(c => miniCard(c, 'sorpresa')).join('')}</div>
                </div>` : ''}

                ${pegadas.length > 0 ? `
                <div class="px-3 py-2 border-t" style="border-color:rgba(248,113,113,0.1);background:rgba(248,113,113,0.02);">
                    <p class="text-[8px] font-bold uppercase tracking-widest text-red-400/70 mb-2">💔 Pegadas — las querías y no pasaron</p>
                    <div class="flex gap-2 overflow-x-auto pb-1 scrolling-touch">${pegadas.map(c => miniCard(c, 'pegada')).join('')}</div>
                </div>` : ''}
            </div>`;
        }
    }

    // ── 3. PREMIOS POR CATEGORÍA (todos los empates incluidos) ──
    const premiosContenedor = document.getElementById('reporte-premios-categorias');
    premiosContenedor.innerHTML = "";

    const premiosPorCategoria = {};
    evento.rondas.forEach(r => {
        r.parametros.forEach(param => {
            let maxScore = -1;
            let ganadoras = [];
            r.candidatas.forEach(c => {
                const score = parseFloat(c.puntajes[param]) || 0;
                if (score > 0) {
                    if (score > maxScore) { maxScore = score; ganadoras = [c]; }
                    else if (score === maxScore) { ganadoras.push(c); }
                }
            });
            if (ganadoras.length > 0) {
                const key = `${param}|||${r.nombre}`;
                premiosPorCategoria[key] = { param, ronda: r.nombre, score: maxScore, ganadoras };
            }
        });
    });

    if (Object.keys(premiosPorCategoria).length === 0) {
        premiosContenedor.innerHTML = '<p class="text-xs text-center py-4" style="color:var(--text-muted);">No hay puntajes registrados.</p>';
    } else {
        Object.values(premiosPorCategoria).forEach(({ param, ronda, score, ganadoras }) => {
            // Construimos fotos de TODAS las ganadoras (empate incluido)
            const fotosHTML = ganadoras.map(g =>
                `<img src="${g.foto}" class="w-7 h-7 rounded-full object-cover border" style="border-color:var(--gold);background:var(--bg-card);margin-left:-6px;">`
            ).join('');
            const nombresHTML = ganadoras.map(g => g.nombre.split(' ')[0]).join(' · ');

            premiosContenedor.innerHTML += `
            <div class="flex items-center gap-3 px-4 py-3 rounded-2xl border"
                 style="background:rgba(201,168,76,0.04);border-color:rgba(201,168,76,0.15);">
                <!-- Fotos apiladas -->
                <div class="flex items-center shrink-0" style="padding-left:6px;">
                    ${fotosHTML}
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-[8px] font-bold uppercase tracking-widest truncate" style="color:#ff80b3;">✨ BEST ${param}</p>
                    <p class="text-[10px] font-bold text-white truncate">${nombresHTML}</p>
                    <p class="text-[8px] mt-0.5" style="color:var(--text-muted);">${ronda} · ${score.toFixed(2)} pts${ganadoras.length > 1 ? ` · empate ${ganadoras.length} candidatas` : ''}</p>
                </div>
                <div class="shrink-0 text-right">
                    <p class="font-cinzel font-black text-sm" style="color:var(--gold);">${score.toFixed(2)}</p>
                </div>
            </div>`;
        });
    }

    mostrarVista('vista-gran-resumen');
}

// ==========================================
// PERFIL POR CANDIDATA
// ==========================================

// Recopila todos los IDs únicos de candidatas que aparecieron en cualquier ronda
function getCandidatasUnicas() {
    const evento = getEvento();
    const mapa = new Map();
    evento.rondas.forEach(r => {
        r.candidatas.forEach(c => {
            if (!mapa.has(c.id)) mapa.set(c.id, c);
        });
    });
    return Array.from(mapa.values()).sort((a, b) => a.nombre.localeCompare(b.nombre));
}

function abrirPerfilCandidataModal() {
    const candidatas = getCandidatasUnicas();
    const selModal = document.getElementById('perfil-modal-select');
    selModal.innerHTML = '<option value="">— Elegir candidata —</option>';
    candidatas.forEach(c => {
        selModal.innerHTML += `<option value="${c.id}">${c.nombre}</option>`;
    });
    document.getElementById('modal-perfil-selector').classList.remove('hidden');
}

function irAPerfilDesdeModal() {
    const id = document.getElementById('perfil-modal-select').value;
    if (!id) return;
    document.getElementById('modal-perfil-selector').classList.add('hidden');
    renderPerfilCandidataById(id);
    mostrarVista('vista-perfil-candidata');

    // Populate selector in the profile view too
    const candidatas = getCandidatasUnicas();
    const sel = document.getElementById('perfil-selector');
    sel.innerHTML = '<option value="">— Elegir —</option>';
    candidatas.forEach(c => {
        sel.innerHTML += `<option value="${c.id}" ${c.id === id ? 'selected' : ''}>${c.nombre}</option>`;
    });
}

function renderPerfilCandidataById(id) {
    if (!id) return;
    const evento = getEvento();
    const contenido = document.getElementById('perfil-contenido');
    contenido.innerHTML = '';

    // Populate the selector if it's empty
    const sel = document.getElementById('perfil-selector');
    if (sel.options.length <= 1) {
        const candidatas = getCandidatasUnicas();
        sel.innerHTML = '<option value="">— Elegir —</option>';
        candidatas.forEach(c => {
            sel.innerHTML += `<option value="${c.id}" ${c.id === id ? 'selected' : ''}>${c.nombre}</option>`;
        });
    }

    // Find this candidate across all rounds
    let candidataBase = null;
    const aparicionPorRonda = [];

    evento.rondas.forEach((r, ri) => {
        const c = r.candidatas.find(ch => ch.id === id);
        if (c) {
            if (!candidataBase) candidataBase = c;
            aparicionPorRonda.push({ ronda: r, rondaIndex: ri, candidata: c });
        }
    });

    if (!candidataBase) {
        contenido.innerHTML = '<p class="text-center text-sm py-8" style="color:var(--text-muted);">Candidata no encontrada.</p>';
        return;
    }

    // Determine how far she went
    const ultimaRondaIndex = aparicionPorRonda.length > 0 ? aparicionPorRonda[aparicionPorRonda.length - 1].rondaIndex : 0;
    const totalRondas = evento.rondas.length;

    // For each round she appeared in, check if she was in user's top ideal
    const analisisPorRonda = aparicionPorRonda.map(({ ronda, rondaIndex, candidata }) => {
        const tuTopIdeal = [...ronda.candidatas]
            .sort((a, b) => obtenerPromedio(b, ronda) - obtenerPromedio(a, ronda))
            .slice(0, ronda.cortePrevisto || ronda.candidatas.length);
        const estabaEnTuTop = tuTopIdeal.some(t => t.id === id);
        const prom = obtenerPromedio(candidata, ronda);

        // Did she advance to next round?
        const siguienteRonda = evento.rondas[rondaIndex + 1];
        const avanzo = siguienteRonda ? siguienteRonda.candidatas.some(c => c.id === id) : null; // null = última ronda

        return { ronda, rondaIndex, candidata, estabaEnTuTop, promedio: prom, avanzo };
    });

    // Determine final result label
    const esFinal = aparicionPorRonda.some(a => a.ronda.esFinal);
    const puestoFinalData = analisisPorRonda.find(a => a.ronda.esFinal && a.candidata.puestoFinal !== 99);
    const nombresPuestos = { 1: '👑 Ganadora', 2: '1st Runner Up', 3: '2nd Runner Up', 4: '3rd Runner Up', 5: '4th Runner Up', 6: '5th Runner Up' };

    // Build verdict for each round transition
    let htmlTimeline = '';
    evento.rondas.forEach((r, ri) => {
        const aparicion = analisisPorRonda.find(a => a.rondaIndex === ri);
        const estaEtapa = aparicion !== undefined;
        const sigRonda = evento.rondas[ri + 1];
        const paso = sigRonda ? sigRonda.candidatas.some(c => c.id === id) : null;

        let dotColor, lineColor, estadoLabel, estadoColor;

        if (!estaEtapa) {
            dotColor = 'rgba(255,255,255,0.1)';
            lineColor = 'rgba(255,255,255,0.06)';
            estadoLabel = 'No participó';
            estadoColor = 'var(--text-muted)';
        } else if (paso === null) {
            // última ronda — check puesto final
            if (puestoFinalData) {
                dotColor = 'var(--gold)';
                lineColor = 'var(--gold)';
                estadoLabel = nombresPuestos[puestoFinalData.candidata.puestoFinal] || `Finalista`;
                estadoColor = 'var(--gold-light)';
            } else {
                dotColor = '#00c8e8';
                lineColor = '#00c8e8';
                estadoLabel = 'Llegó a la Final';
                estadoColor = '#00c8e8';
            }
        } else if (paso) {
            dotColor = '#00c8e8';
            lineColor = '#00c8e8';
            estadoLabel = '✓ Avanzó';
            estadoColor = '#00c8e8';
        } else {
            // Eliminated — was she in user's top?
            if (aparicion.estabaEnTuTop) {
                dotColor = '#f87171';
                lineColor = 'rgba(255,255,255,0.06)';
                estadoLabel = `💔 Pegada en ${r.nombre}`;
                estadoColor = '#f87171';
            } else {
                dotColor = 'rgba(255,255,255,0.2)';
                lineColor = 'rgba(255,255,255,0.06)';
                estadoLabel = 'Eliminada';
                estadoColor = 'var(--text-muted)';
            }
        }

        // Scores for this round
        let scoresHTML = '';
        if (aparicion) {
            r.parametros.forEach(p => {
                const val = aparicion.candidata.puntajes[p];
                if (val) {
                    scoresHTML += `<span class="text-[9px] px-2 py-0.5 rounded-full font-bold" style="background:rgba(201,168,76,0.1);color:var(--gold);border:1px solid rgba(201,168,76,0.2);">${p}: ${val}</span>`;
                }
            });
            if (aparicion.promedio > 0) {
                scoresHTML += `<span class="text-[9px] px-2 py-0.5 rounded-full font-bold" style="background:rgba(255,255,255,0.06);color:var(--text-primary);">Prom: ${aparicion.promedio.toFixed(2)}</span>`;
            }
        }

        const isLast = ri === evento.rondas.length - 1;

        htmlTimeline += `
        <div class="flex gap-3 items-start">
            <!-- Dot + line column -->
            <div class="flex flex-col items-center shrink-0" style="width:20px;">
                <div class="w-4 h-4 rounded-full shrink-0 mt-0.5" style="background:${dotColor};box-shadow:${estaEtapa ? `0 0 8px ${dotColor}` : 'none'};"></div>
                ${!isLast ? `<div class="flex-1 w-0.5 mt-1" style="background:${lineColor};min-height:32px;"></div>` : ''}
            </div>
            <!-- Content -->
            <div class="flex-1 pb-4">
                <div class="flex items-center justify-between mb-1">
                    <p class="font-cinzel font-bold text-sm" style="color:${estaEtapa ? 'var(--text-primary)' : 'var(--text-muted)'};">${r.nombre}</p>
                    <p class="text-[10px] font-bold" style="color:${estadoColor};">${estadoLabel}</p>
                </div>
                ${scoresHTML ? `<div class="flex flex-wrap gap-1 mt-1">${scoresHTML}</div>` : ''}
            </div>
        </div>`;
    });

    // Collect prizes for this candidate
    const premiosGanados = [];
    evento.rondas.forEach(r => {
        r.parametros.forEach(param => {
            let maxScore = -1;
            r.candidatas.forEach(c => {
                const s = parseFloat(c.puntajes[param]) || 0;
                if (s > maxScore) maxScore = s;
            });
            const aparicion = r.candidatas.find(c => c.id === id);
            if (aparicion) {
                const suScore = parseFloat(aparicion.puntajes[param]) || 0;
                if (suScore > 0 && suScore === maxScore) {
                    premiosGanados.push({ param, ronda: r.nombre, score: suScore });
                }
            }
        });
    });

    // Overall verdict summary
    const ultimaAparicion = analisisPorRonda[analisisPorRonda.length - 1];
    let verdictText = '', verdictColor = '';
    if (puestoFinalData && puestoFinalData.candidata.puestoFinal === 1) {
        verdictText = '👑 ¡La elegiste ganadora y ganó!'; verdictColor = 'var(--gold-light)';
    } else if (puestoFinalData) {
        const estabaEnFinal = analisisPorRonda.find(a => a.ronda.esFinal);
        if (estabaEnFinal && estabaEnFinal.estabaEnTuTop) {
            verdictText = `Finalista — esperabas más de ella`; verdictColor = 'var(--gold)';
        } else {
            verdictText = `Llegó a la final — no la esperabas tan arriba`; verdictColor = '#00c8e8';
        }
    } else if (ultimaAparicion) {
        if (!ultimaAparicion.avanzo && ultimaAparicion.estabaEnTuTop) {
            verdictText = `💔 Pegada — la querías en el top ${evento.rondas[ultimaAparicion.rondaIndex + 1]?.nombre || 'siguiente'}`;
            verdictColor = '#f87171';
        } else if (ultimaAparicion.avanzo === false && !ultimaAparicion.estabaEnTuTop) {
            verdictText = `Llegó donde merecía según tu criterio`; verdictColor = 'var(--text-muted)';
        } else {
            verdictText = `Llegó más lejos de lo que esperabas`; verdictColor = '#00c8e8';
        }
    }

    contenido.innerHTML = `
    <!-- Header candidata -->
    <div class="flex items-center gap-4 px-1">
        <img src="${candidataBase.foto}" class="w-16 h-16 rounded-full object-cover border-2 shrink-0"
             style="border-color:var(--gold);background:var(--bg-card);box-shadow:0 0 20px rgba(201,168,76,0.2);">
        <div>
            <h2 class="font-cinzel font-black text-lg text-white">${candidataBase.nombre}</h2>
            ${verdictText ? `<p class="text-[11px] font-bold mt-0.5" style="color:${verdictColor};">${verdictText}</p>` : ''}
        </div>
    </div>

    <!-- Timeline de rondas -->
    <div class="card px-4 pt-4 pb-2">
        <p class="text-[9px] font-cinzel font-bold uppercase tracking-[0.2em] text-gold/50 mb-4">Recorrido en el Certamen</p>
        ${htmlTimeline}
    </div>

    ${premiosGanados.length > 0 ? `
    <!-- Premios ganados -->
    <div class="card px-4 py-4">
        <p class="text-[9px] font-cinzel font-bold uppercase tracking-[0.2em] text-gold/50 mb-3">✨ Premios a la Excelencia</p>
        <div class="space-y-2">
            ${premiosGanados.map(p => `
            <div class="flex items-center justify-between px-3 py-2 rounded-xl border"
                 style="background:rgba(201,168,76,0.04);border-color:rgba(201,168,76,0.15);">
                <div>
                    <p class="text-[8px] font-bold uppercase tracking-wider" style="color:#ff80b3;">✨ BEST ${p.param}</p>
                    <p class="text-[10px] text-white font-bold">${p.ronda}</p>
                </div>
                <p class="font-cinzel font-black text-sm" style="color:var(--gold);">${p.score.toFixed(2)}</p>
            </div>`).join('')}
        </div>
    </div>` : ''}
    `;
}

// ==========================================
// DESCARGA
// ==========================================
function descargarComoImagen(idVista, idsBotonesOcultar) {
    const elemento = document.getElementById(idVista);
    const botones = idsBotonesOcultar.split(',');
    botones.forEach(id => { const b = document.getElementById(id.trim()); if (b) b.style.display = 'none'; });
    window.scrollTo(0, 0);
    html2canvas(elemento, { backgroundColor: '#04070a', scale: 2, useCORS: true }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Pageant_Reporte_' + Date.now() + '.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
        botones.forEach(id => { const b = document.getElementById(id.trim()); if (b) b.style.display = ''; });
    });
}