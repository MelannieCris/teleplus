package pe.edu.utp.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Entrada {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_entrada;

    @Column(name = "codigo_qr", unique = true)
    private String codigo_qr;

    @Column(length = 30)
    private String estado;

    private Float precio_final;

    private LocalDate fecha_generacion;

    private LocalDateTime reservado_hasta;
}
