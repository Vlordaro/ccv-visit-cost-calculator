# 📅 CCV - Visit Cost Calculator

Função JavaScript para cálculo automático do custo de visitas com base em:

- Status da solicitação
- Data informada
- Dia da semana
- Feriados nacionais fixos

Projetado para uso em planilhas (ex: Google Sheets com Apps Script) ou qualquer aplicação JavaScript.

---

## 🚀 Objetivo

Automatizar a definição de custo de visitas considerando regras de negócio:

- Visitas canceladas
- Visitas não realizadas
- Finais de semana
- Feriados
- Dias úteis

---

## 🧠 Como Funciona

A função principal é:

```javascript
CCV(data, row)
Ela recebe dois parâmetros:

🔹 data
Data da visita (string ou objeto Date).

🔹 row
Array contendo todos os valores da linha da planilha.

O status da solicitação deve estar na posição 3 do array (row[3]), que corresponde à:

| Índice | Coluna                      |
| ------ | --------------------------- |
| 0      | A                           |
| 1      | B                           |
| 2      | C                           |
| 3      | D ✅ (Status da Solicitação) |


📌 Regras de Negócio
| Condição               | Retorno                  |
| ---------------------- | ------------------------ |
| Status = "CANCELADA"   | `"Visita Cancelada"`     |
| Data vazia ou inválida | `"Visita não realizada"` |
| Feriado                | `1385`                   |
| Sábado ou Domingo      | `1385`                   |
| Dia útil comum         | `996`                    |

💰 Valores Utilizados
const CUSTO_DIA_SEMANA = 996;
const CUSTO_FIM_DE_SEMANA = 1385;

📅 Feriados Considerados
Feriados nacionais fixos (formato MM-DD):

01-01 (Ano Novo)
04-21 (Tiradentes)
05-01 (Dia do Trabalho)
09-07 (Independência do Brasil)
10-12 (Nossa Senhora Aparecida)
11-02 (Finados)
11-15 (Proclamação da República)
12-25 (Natal)
⚠️ Feriados móveis (Carnaval, Páscoa etc.) não estão incluídos.

🛠 Tecnologias
JavaScript (ES6+)

📦 Exemplo de Uso (Google Sheets)
Se estiver usando no Google Apps Script:

=CCV(A2; A2:D2)
Onde:
A2 → Data da visita
A2:D2 → Linha completa
D → Status da solicitação
