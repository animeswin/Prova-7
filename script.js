const calculateTip = () =>{
    const valor_conta = Number(document.querySelector("#valor_conta").value)
    const qlde_servico = document.querySelector("#qlde_servico").value

    const calcular_porcentagem = (qualidade) =>{
        switch(qualidade){
            case "bom":
                return 0.20;
            case "regular":
                return 0.10;
            case "ruim":
                return 0.05
            default:
                return 0
                
        }
    }
    const calcular = (valor, porcentagem) => valor * porcentagem
    const tip = calcular(valor_conta, calcular_porcentagem(qlde_servico))
    displayTip(tip)
}
const displayTip = (tip) =>{
    document.querySelector("#gorjeta").innerText = `Gorjeta: R$ ${tip.toFixed(2)}`
}