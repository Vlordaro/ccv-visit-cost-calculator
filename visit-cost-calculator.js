function CCV(data, row) {
  const CUSTO_DIA_SEMANA = 996;
  const CUSTO_FIM_DE_SEMANA = 1385;

  const statusSolicitacao = row && row[3] 
    ? row[3].toString().trim() 
    : "";

  // 1️⃣ Verifica cancelamento
  if (statusSolicitacao.toUpperCase() === "CANCELADA") {
    return "Visita Cancelada";
  }

  // 2️⃣ Verifica se há data
  if (!data || data.toString().trim() === "") {
    return "Visita não realizada";
  }

  const dia = new Date(data);

  if (isNaN(dia.getTime())) {
    return "Visita não realizada";
  }

  // 3️⃣ Verifica feriado
  if (ehFeriado(dia)) {
    return CUSTO_FIM_DE_SEMANA;
  }

  // 4️⃣ Verifica fim de semana
  if (dia.getDay() === 0 || dia.getDay() === 6) {
    return CUSTO_FIM_DE_SEMANA;
  }

  return CUSTO_DIA_SEMANA;
}

function ehFeriado(dia) {
  const feriados = [
    "01-01",
    "04-21",
    "05-01",
    "09-07",
    "10-12",
    "11-02",
    "11-15",
    "12-25"
  ];

  const mes = (dia.getMonth() + 1).toString().padStart(2, "0");
  const diaMes = dia.getDate().toString().padStart(2, "0");

  const dataFormatada = `${mes}-${diaMes}`;

  return feriados.includes(dataFormatada);
}
