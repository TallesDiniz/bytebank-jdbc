package br.com.alura.bytebank;

import br.com.alura.bytebank.domain.conta.ContaService;
import br.com.alura.bytebank.domain.conta.DadosAberturaConta;
import br.com.alura.bytebank.domain.conta.Conta;
import br.com.alura.bytebank.domain.cliente.DadosCadastroCliente;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
import java.util.Set;

@RestController
@RequestMapping("/contas")
@CrossOrigin(origins = "*")
public class ContaController {

    private final ContaService service = new ContaService();

    @GetMapping
    public Set<Conta> listar() {
        return service.listarContasAbertas();
    }

    @PostMapping
    public void abrir(@RequestBody DadosAberturaConta dados) {
        service.abrir(dados);
    }

    @DeleteMapping("/{numero}")
    public void encerrar(@PathVariable Integer numero) {
        service.encerrar(numero);
    }

    @PostMapping("/{numero}/depositar")
    public void depositar(@PathVariable Integer numero, @RequestParam BigDecimal valor) {
        service.realizarDeposito(numero, valor);
    }

    @PostMapping("/{numero}/sacar")
    public void sacar(@PathVariable Integer numero, @RequestParam BigDecimal valor) throws Exception {
        service.realizarSaque(numero, valor);
    }

    @PostMapping("/transferir")
    public void transferir(@RequestParam Integer pagador, @RequestParam Integer beneficiado, @RequestParam BigDecimal valor) {
        service.transferir(pagador, beneficiado, valor);
    }
}