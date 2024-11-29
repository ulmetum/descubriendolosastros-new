export interface DataText {
  content: string
  extra: string
  plus: string
}
export interface DataServs extends Omit<DataText, "plus"> {
  id: number
  title: string
}

export const dataText = {
  content:
    "Cada persona tiene su propio Mapa Estelar único. Una instantánea del firmamento que captura la danza cósmica del universo en un momento determinado. Al conocer el tuyo, descubrirás cómo las estrellas se alinearon para dar forma a tu ser y tu destino.",
  extra:
    "El Mapa Estelar es como un espejo celestial que refleja tu conexión íntima con el universo. Al explorarlo podrás sentir la magia y la belleza de esta conexión única con el cosmos.",
  plus: "Ahora, puedes conseguir el Mapa Estelar del momento que tú desees para tenerlo siempre contigo. Puedes adquirir tu mapa estelar de forma física o puedes obtener el PDF para que puedas imprimirlo o enviarlo a quien tú desees.",
}
