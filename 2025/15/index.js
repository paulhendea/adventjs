/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
  if (!data?.length) return ""

  const CORNER = "+", ROW = "-", COL = "|", A = 65
  const cols = Object.keys(data[0])

  data.sort((a, b) =>
    `${a[sortBy]}`.localeCompare(`${b[sortBy]}`, undefined, { numeric: true })
  )

  const widths = Object.fromEntries(
    cols.map(col => [
      col,
      Math.max(...data.map(row => `${row[col]}`.length))
    ])
  )

  const border =
    CORNER +
    cols.map(col => ROW.repeat(widths[col] + 2)).join(CORNER) +
    CORNER

  const getRow = (row) =>
    COL +
    cols.map(c => ` ${`${row[c]}`.padEnd(widths[c])} `).join(COL) +
    COL +
    "\n"

  return (
    border + "\n" +
    getRow(Object.fromEntries(cols.map((c, i) => [c, String.fromCharCode(A + i)]))) +
    border + "\n" +
    data.map(getRow).join("") +
    border
  )
}

const result = drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
)
console.log(result)
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+
