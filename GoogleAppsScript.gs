/**
 * Baby Shower Elizabeth - Wishlist
 * Google Apps Script para almacenar productos y regalos en tablas
 *
 * HOJA 1: Productos (columnas fijas)
 * HOJA 2: Regalos   (relacionados por productoId)
 */

// --- CONFIGURACIÓN ---
const NOMBRE_HOJA_PRODUCTOS = 'Productos';
const NOMBRE_HOJA_REGALOS = 'Regalos';

const CAMPOS_PRODUCTOS = [
  'id', 'titulo', 'categoria', 'descripcion', 'enlace',
  'cantidadNecesitada', 'cantidadReservada', 'imagenTipo', 'prioridad'
];

const CAMPOS_REGALOS = [
  'productoId', 'donante', 'fancy', 'cantidad', 'mensaje', 'fecha'
];

// --- ENTRY POINTS ---

function doGet(e) {
  const accion = e.parameter.action || 'read';
  
  if (accion === 'read') {
    return responderJson({
      status: 'success',
      data: leerProductos(),
      regalos: leerRegalos(),
      _meta: {
        googleSheetsUrl: ScriptApp.getService().getUrl()
      }
    });
  }

  return responderJson({ status: 'error', message: 'Acción no válida' });
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const { action, data, regalos, _meta } = body;

    if (action === 'write') {
      escribirProductos(data || []);
      escribirRegalos(regalos || []);
      return responderJson({ status: 'success', message: 'Datos guardados correctamente' });
    }

    return responderJson({ status: 'error', message: 'Acción no válida' });
  } catch (err) {
    return responderJson({ status: 'error', message: err.message });
  }
}

// --- LECTURA ---

function leerProductos() {
  const sheet = obtenerHoja(NOMBRE_HOJA_PRODUCTOS, CAMPOS_PRODUCTOS);
  const datos = sheet.getDataRange().getValues();
  if (datos.length < 2) return [];

  const encabezados = datos[0];
  const filas = [];

  for (let i = 1; i < datos.length; i++) {
    const fila = {};
    let vacia = true;
    for (let j = 0; j < encabezados.length; j++) {
      const valor = datos[i][j];
      fila[encabezados[j]] = valor;
      if (valor !== '' && valor !== undefined && valor !== null) {
        vacia = false;
      }
    }
    if (!vacia) filas.push(fila);
  }

  return filas;
}

function leerRegalos() {
  const sheet = obtenerHoja(NOMBRE_HOJA_REGALOS, CAMPOS_REGALOS);
  const datos = sheet.getDataRange().getValues();
  if (datos.length < 2) return [];

  const encabezados = datos[0];
  const filas = [];

  for (let i = 1; i < datos.length; i++) {
    const fila = {};
    let vacia = true;
    for (let j = 0; j < encabezados.length; j++) {
      const valor = datos[i][j];
      fila[encabezados[j]] = valor;
      if (valor !== '' && valor !== undefined && valor !== null) {
        vacia = false;
      }
    }
    if (!vacia) filas.push(fila);
  }

  return filas;
}

// --- ESCRITURA (sobrescribe completamente) ---

function escribirProductos(productos) {
  const sheet = obtenerHoja(NOMBRE_HOJA_PRODUCTOS, CAMPOS_PRODUCTOS);
  sheet.clearContents();

  const encabezados = [CAMPOS_PRODUCTOS];
  const filas = productos.map(p => {
    return CAMPOS_PRODUCTOS.map(campo => p[campo] !== undefined ? p[campo] : '');
  });

  const datos = encabezados.concat(filas);
  const rango = sheet.getRange(1, 1, datos.length, CAMPOS_PRODUCTOS.length);
  rango.setValues(datos);
  rango.getFontWeight = () => 'normal';
}

function escribirRegalos(regalos) {
  const sheet = obtenerHoja(NOMBRE_HOJA_REGALOS, CAMPOS_REGALOS);
  sheet.clearContents();

  const encabezados = [CAMPOS_REGALOS];
  const filas = regalos.map(r => {
    return CAMPOS_REGALOS.map(campo => r[campo] !== undefined ? r[campo] : '');
  });

  const datos = encabezados.concat(filas);
  const rango = sheet.getRange(1, 1, datos.length, CAMPOS_REGALOS.length);
  rango.setValues(datos);
}

// --- UTILIDADES ---

function obtenerHoja(nombre, camposPorDefecto) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(nombre);
  if (!sheet) {
    sheet = ss.insertSheet(nombre);
    sheet.appendRow(camposPorDefecto);
    sheet.getRange(1, 1, 1, camposPorDefecto.length).setFontWeight('bold');
  }
  return sheet;
}

function responderJson(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
