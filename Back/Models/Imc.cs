using System;

namespace API.Models
{
    public class Imc{
        public Imc() => CriadoEm = DateTime.Now;
        public string NomeAId { get; set; }
        public string NomeA { get; set; }
        public string NascimentoAId { get; set; }
         public double Altura { get; set; }
         public double Peso { get; set; }
         public double CalculoImc { get; set; }
        public string Classificacao { get; set; }
        public DateTime CriadoEm { get; set; }
    }
} 