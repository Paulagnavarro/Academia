using System.Net.NetworkInformation;
using API.Models;

namespace API.Utils
{
    public class Calculos
    {
        public static double CalcularImc(double altura, double peso)
            => peso / altura;


        public static double CalcularImc(double CalcularImc)
        {
            if (CalcularImc <= 18.5) return Imc.classificacao;

        }
    }
}