module.exports = {
    sum: resultado => resultado.reduce((total, resultado) => {
        total += resultado

        return total
    }, 0)
}